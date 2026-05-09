(function () {
  'use strict';

  // Avoid double-mount
  if (window.__webtekChatMounted) return;
  window.__webtekChatMounted = true;

  var STORAGE_KEY = 'webtek_chat_preset';
  var preset = localStorage.getItem(STORAGE_KEY) || 'standard';
  var history = [];

  // ---- Mount markup ----

  var bubble = document.createElement('button');
  bubble.id = 'webtek-chat-bubble';
  bubble.setAttribute('aria-label', 'Åpne studieassistent');
  bubble.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

  var panel = document.createElement('div');
  panel.id = 'webtek-chat-panel';
  panel.innerHTML = ''
    + '<header class="wc-head">'
    +   '<div class="wc-title">Studieassistent</div>'
    +   '<div class="wc-actions">'
    +     '<select class="wc-preset" aria-label="Modell">'
    +       '<option value="standard">Standard</option>'
    +       '<option value="rask">Rask</option>'
    +       '<option value="grundig">Grundig</option>'
    +     '</select>'
    +     '<button class="wc-reset" type="button" title="Tøm samtale">↺</button>'
    +     '<button class="wc-close" type="button" aria-label="Lukk">✕</button>'
    +   '</div>'
    + '</header>'
    + '<div class="wc-body" aria-live="polite"></div>'
    + '<form class="wc-form">'
    +   '<textarea class="wc-input" placeholder="Spør om noe fra pensum…" rows="2"></textarea>'
    +   '<button class="wc-send" type="submit" aria-label="Send">→</button>'
    + '</form>';

  var styleTag = document.createElement('style');
  styleTag.textContent = ''
    + '#webtek-chat-bubble{position:fixed;bottom:24px;right:24px;z-index:200;width:54px;height:54px;border-radius:50%;background:var(--rust,#1f4e79);color:var(--paper,#f4f1ea);border:none;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.18);display:flex;align-items:center;justify-content:center;transition:transform .15s}'
    + '#webtek-chat-bubble:hover{transform:translateY(-2px)}'
    + '#webtek-chat-panel{position:fixed;bottom:90px;right:24px;z-index:200;width:380px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 110px);background:var(--paper,#f4f1ea);border:1px solid var(--line,#c9c0ae);border-radius:10px;box-shadow:0 18px 50px rgba(0,0,0,.18);display:none;flex-direction:column;overflow:hidden;font-family:var(--serif,Georgia,serif)}'
    + '#webtek-chat-panel.open{display:flex}'
    + '#webtek-chat-panel .wc-head{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--line-soft,#ddd5c4);background:var(--paper-dark,#e8e3d6)}'
    + '#webtek-chat-panel .wc-title{font-family:var(--mono,Menlo,monospace);font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink,#1a1612)}'
    + '#webtek-chat-panel .wc-actions{margin-left:auto;display:flex;gap:6px;align-items:center}'
    + '#webtek-chat-panel .wc-preset{font-family:var(--mono);font-size:.74rem;background:var(--paper);border:1px solid var(--line-soft);border-radius:4px;padding:3px 6px}'
    + '#webtek-chat-panel .wc-reset,#webtek-chat-panel .wc-close{background:transparent;border:none;font-size:1rem;cursor:pointer;color:var(--ink-faded,#6b6257)}'
    + '#webtek-chat-panel .wc-reset:hover,#webtek-chat-panel .wc-close:hover{color:var(--ink)}'
    + '#webtek-chat-panel .wc-body{flex:1;overflow-y:auto;padding:14px 16px;font-size:.95rem;line-height:1.55}'
    + '#webtek-chat-panel .wc-msg{margin-bottom:14px}'
    + '#webtek-chat-panel .wc-msg.user{color:var(--ink)}'
    + '#webtek-chat-panel .wc-msg .wc-role{font-family:var(--mono);font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-faded);margin-bottom:4px}'
    + '#webtek-chat-panel .wc-msg.user .wc-role{color:var(--rust)}'
    + '#webtek-chat-panel .wc-empty{font-style:italic;color:var(--ink-faded);font-size:.92rem}'
    + '#webtek-chat-panel .wc-form{display:flex;gap:6px;padding:10px;border-top:1px solid var(--line-soft);background:var(--paper-dark)}'
    + '#webtek-chat-panel .wc-input{flex:1;font-family:var(--serif);font-size:.95rem;border:1px solid var(--line-soft);border-radius:4px;padding:8px 10px;background:var(--paper);resize:none;outline:none}'
    + '#webtek-chat-panel .wc-input:focus{border-color:var(--rust)}'
    + '#webtek-chat-panel .wc-send{background:var(--rust);color:var(--paper);border:none;border-radius:4px;width:42px;font-size:1.1rem;cursor:pointer}'
    + '#webtek-chat-panel .wc-send:disabled{opacity:.4;cursor:default}'
    + '#webtek-chat-panel pre{background:var(--paper-dark);border-left:3px solid var(--rust);padding:8px 10px;overflow-x:auto;font-size:.82rem}'
    + '#webtek-chat-panel code{background:var(--paper-dark);padding:.05em .3em;border-radius:3px;font-family:var(--mono);font-size:.88em}';

  document.head.appendChild(styleTag);
  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  var bodyEl = panel.querySelector('.wc-body');
  var input = panel.querySelector('.wc-input');
  var form = panel.querySelector('.wc-form');
  var sendBtn = panel.querySelector('.wc-send');
  var presetSel = panel.querySelector('.wc-preset');
  var resetBtn = panel.querySelector('.wc-reset');

  presetSel.value = preset;
  presetSel.addEventListener('change', function () {
    preset = presetSel.value;
    localStorage.setItem(STORAGE_KEY, preset);
  });

  function showEmpty() {
    bodyEl.innerHTML = '<div class="wc-empty">Spør om begreper, sammenhenger eller eksempler — assistenten ser hva som er på skjermen.</div>';
  }
  showEmpty();

  bubble.addEventListener('click', function () { panel.classList.toggle('open'); if (panel.classList.contains('open')) input.focus(); });
  panel.querySelector('.wc-close').addEventListener('click', function () { panel.classList.remove('open'); });
  resetBtn.addEventListener('click', function () { history = []; showEmpty(); });

  // ---- CDN deps for markdown / sanitize / katex ----

  var depsLoaded = null;
  function loadDeps() {
    if (depsLoaded) return depsLoaded;
    depsLoaded = Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/marked@15/lib/marked.umd.min.js',
        'sha384-bs9LK7Ebi2Pd4U7MFq9DFrRlxhGYgr0VHhmLN/CDVvK04MXErlyldbg+kbQK4qC8'),
      loadScript('https://cdn.jsdelivr.net/npm/dompurify@3.2.4/dist/purify.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js'),
      loadCss('https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css')
    ]).catch(function () { return null; });
    return depsLoaded;
  }
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.crossOrigin = 'anonymous'; s.referrerPolicy = 'no-referrer';
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function loadCss(href) {
    return new Promise(function (resolve) {
      var l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = href; l.crossOrigin = 'anonymous';
      l.onload = resolve; l.onerror = resolve;
      document.head.appendChild(l);
    });
  }

  function renderMd(target, raw) {
    var marked = window.marked, DOMPurify = window.DOMPurify, renderMathInElement = window.renderMathInElement;
    if (marked && DOMPurify) {
      var html = marked.parse(raw, { gfm: true, breaks: true });
      target.innerHTML = DOMPurify.sanitize(html);
    } else {
      target.textContent = raw;
    }
    if (renderMathInElement) {
      try {
        renderMathInElement(target, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) { /* ignore */ }
    }
  }

  function appendMsg(role, raw) {
    if (bodyEl.querySelector('.wc-empty')) bodyEl.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'wc-msg ' + role;
    wrap.innerHTML = '<div class="wc-role">' + (role === 'user' ? 'Du' : 'Assistent') + '</div><div class="wc-content"></div>';
    bodyEl.appendChild(wrap);
    var content = wrap.querySelector('.wc-content');
    if (role === 'user') content.textContent = raw;
    else loadDeps().then(function () { renderMd(content, raw); });
    bodyEl.scrollTop = bodyEl.scrollHeight;
    return content;
  }

  function pageContext() {
    var main = document.querySelector('main');
    var chapter = main && main.getAttribute('data-chapter') || document.title;
    var visible = (main ? main.innerText : document.body.innerText).slice(0, 4000);
    return { chapter: chapter, url: location.pathname + location.hash, snippet: visible };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    input.value = '';
    appendMsg('user', q);
    var contentEl = appendMsg('assistant', '…');
    sendBtn.disabled = true;

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: q,
        preset: preset,
        page_context: pageContext(),
        history: history.slice(-8)
      })
    }).then(function (r) {
      if (!r.ok || !r.body) throw new Error('Kunne ikke kontakte assistenten.');
      var reader = r.body.getReader();
      var dec = new TextDecoder();
      var buf = '';
      var acc = '';
      contentEl.textContent = '';
      function pump() {
        return reader.read().then(function (chunk) {
          if (chunk.done) {
            history.push({ role: 'user', content: q });
            history.push({ role: 'assistant', content: acc });
            sendBtn.disabled = false;
            return;
          }
          buf += dec.decode(chunk.value, { stream: true });
          var lines = buf.split('\n');
          buf = lines.pop();
          lines.forEach(function (line) {
            if (!line.trim()) return;
            try {
              var obj = JSON.parse(line);
              if (obj.delta) { acc += obj.delta; loadDeps().then(function () { renderMd(contentEl, acc); }); }
              if (obj.done && obj.text) { acc = obj.text; loadDeps().then(function () { renderMd(contentEl, acc); }); }
            } catch (e) { /* skip non-JSON */ }
          });
          bodyEl.scrollTop = bodyEl.scrollHeight;
          return pump();
        });
      }
      return pump();
    }).catch(function (err) {
      contentEl.textContent = 'Beklager — assistenten er ikke tilgjengelig akkurat nå. ' + (err && err.message || '');
      sendBtn.disabled = false;
    });
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  });
})();
