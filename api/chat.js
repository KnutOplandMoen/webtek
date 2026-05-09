// Vercel serverless: streaming chat mot OpenRouter med RAG over public/chunks.json.
// Skjelett — bygges ut når public/chunks.json er generert.
//
// Forventer { question, preset, page_context, history } i body.
// Streamer NDJSON-linjer { delta: '...' } og avslutter med { done: true }.

import fs from 'node:fs/promises';
import path from 'node:path';

const MODEL_PRESETS = {
  rask:     ['anthropic/claude-haiku-4.5', 'openai/gpt-4o-mini'],
  standard: ['anthropic/claude-sonnet-4.6', 'openai/gpt-4o'],
  grundig:  ['anthropic/claude-opus-4.7', 'anthropic/claude-sonnet-4.6']
};

export const config = { runtime: 'nodejs' };

let CHUNKS_CACHE = null;

async function loadChunks() {
  if (CHUNKS_CACHE) return CHUNKS_CACHE;
  try {
    const p = path.join(process.cwd(), 'public', 'chunks.json');
    const raw = await fs.readFile(p, 'utf8');
    CHUNKS_CACHE = JSON.parse(raw);
  } catch (_) {
    CHUNKS_CACHE = [];
  }
  return CHUNKS_CACHE;
}

function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-9);
}

async function embed(text) {
  // Plassholder — koble til OpenAI/OpenRouter embeddings når endpoint er valgt.
  // Returner tom embedding gir lite-relevant search; chunks.json bør forhåndsembed-es.
  const url = 'https://openrouter.ai/api/v1/embeddings';
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: 'openai/text-embedding-3-small',
      input: text
    })
  });
  if (!resp.ok) return null;
  const j = await resp.json();
  return j?.data?.[0]?.embedding ?? null;
}

async function rag(question, pageChapter) {
  const chunks = await loadChunks();
  if (!chunks.length) return [];
  const q = await embed(question);
  if (!q) return chunks.slice(0, 4); // fallback: top 4 i rekkefølge
  const scored = chunks.map((c) => {
    let score = cosine(q, c.embedding);
    if (pageChapter && c.chapter && c.chapter === pageChapter) score += 0.05; // boost
    return { ...c, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 6);
}

function buildSystemPrompt(pageContext, ragChunks) {
  return [
    'Du er en norsk studieassistent for IT2805 Webteknologi ved NTNU.',
    'Svar kort og pedagogisk. Bruk kun pensum, ikke dikt opp.',
    'Hvis spørsmålet er uklart, spør tilbake. Bruk markdown der det hjelper.',
    '',
    pageContext?.chapter ? `Brukeren ser på: ${pageContext.chapter}` : '',
    pageContext?.snippet ? `Synlig sidetekst:\n${pageContext.snippet.slice(0, 1500)}` : '',
    '',
    ragChunks.length ? 'Relevante pensum-utdrag:' : '',
    ...ragChunks.map((c, i) => `[${i + 1}] (${c.source || 'pensum'}) ${c.text}`)
  ].filter(Boolean).join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  let body = '';
  for await (const ch of req) body += ch;
  let parsed;
  try { parsed = JSON.parse(body); }
  catch { res.status(400).json({ error: 'invalid json' }); return; }

  const { question, preset = 'standard', page_context = {}, history = [] } = parsed;
  if (!question || typeof question !== 'string') {
    res.status(400).json({ error: 'missing question' }); return;
  }

  const ragChunks = await rag(question, page_context?.chapter || null);
  const system = buildSystemPrompt(page_context, ragChunks);
  const models = MODEL_PRESETS[preset] || MODEL_PRESETS.standard;

  res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  const messages = [
    { role: 'system', content: system },
    ...history.slice(-8),
    { role: 'user', content: question }
  ];

  let succeeded = false;
  for (const model of models) {
    try {
      const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://webteknologi.example',
          'X-Title': 'IT2805 Webteknologi'
        },
        body: JSON.stringify({ model, messages, stream: true })
      });
      if (!upstream.ok || !upstream.body) {
        continue;
      }

      const reader = upstream.body.getReader();
      const dec = new TextDecoder();
      let buf = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop();
        for (const line of lines) {
          const t = line.trim();
          if (!t || !t.startsWith('data:')) continue;
          const d = t.slice(5).trim();
          if (d === '[DONE]') continue;
          try {
            const obj = JSON.parse(d);
            const delta = obj?.choices?.[0]?.delta?.content;
            if (delta) res.write(JSON.stringify({ delta }) + '\n');
          } catch (_) { /* ignore */ }
        }
      }
      succeeded = true;
      break;
    } catch (_) {
      continue;
    }
  }

  if (!succeeded) {
    res.write(JSON.stringify({ delta: 'Beklager, ingen modell var tilgjengelig.' }) + '\n');
  }
  res.write(JSON.stringify({ done: true }) + '\n');
  res.end();
}
