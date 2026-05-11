# IT2805 Webteknologi — studieside

Statisk studieside på norsk for emnet IT2805 Webteknologi ved NTNU. Bygd med
vanlig HTML/CSS/JS uten frameworks eller build-step. Deployes på Vercel som
statisk side med én serverless-funksjon for AI-chat.

## Hva ligger hvor

```
prosjektrot/
├── index.html              Forside: hero, søk, kapittelraster
├── pensum.html             Pensumoversikt og forelesnings-mapping
├── style.css               Felles designsystem (CSS-variabler, alle komponenter)
├── flashcards.css          Flashcard-spesifikk styling
├── quiz.js                 Reveal-quiz, MCQ, animerte SVG-figurer, tryit-sandbox
├── flashcards.js           Flashcard-flip, neste/forrige/shuffle/MC
├── nav-search.js           Topbar-søk (Fuse.js, fulltekst over alle sider)
├── chat-widget.js          AI-studieassistent (NDJSON streaming)
├── favicon.png             (legg inn)
├── package.json            Kun @vercel/analytics + speed-insights
├── vercel.json             Statisk + 120s maxDuration på api/chat.js
│
├── kap1/ … kap10/          Ti kapittel-skjeletter (kap11 XML og kap12 Canvas
│                           er fjernet fra pensum, men beholdt som referanse)
├── zero-to-hero/           "Fra null til klar" — eksamensstrategi
├── reisen/                 Interaktiv reise gjennom faget med sticky stegnav
├── repetisjon/             Tom — for senere repetisjons-moduler
│
├── oppgaver/               Råtekst av øvinger (ikke HTML)
├── presentasjoner/         Slides per emne (markdown + PDF)
├── tidligere_eksamener/    Tidligere eksamensoppgaver
│
├── api/
│   └── chat.js             Vercel serverless: streaming chat mot OpenRouter
│
└── public/
    └── chunks.json         Embeddings + chunks for RAG i chat (tom inntil
                            tools/build_chunks.py kjøres)
```

## Kapittelinndeling

| Kapittel                                  | Pensum   | Slides                      |
|-------------------------------------------|----------|-----------------------------|
| [Kap 1 — Web og Internett](kap1/)         | 1.1–1.3  | intro.md, basics.md         |
| [Kap 2 — HTML](kap2/)                     | 1.4–1.5  | basics_html.md, list.md     |
| [Kap 3 — CSS grunnleggende](kap3/)        | 1.6      | css.md, selectors.md        |
| [Kap 4 — CSS videregående](kap4/)         | 1.7      | css_props.md                |
| [Kap 5 — Flexbox og Grid](kap5/)          | (slides) | grid_flebox.md, exam_info.md|
| [Kap 6 — Responsivt webdesign](kap6/)     | 1.10     | kommer                      |
| [Kap 7 — Multimedia](kap7/)               | 1.8      | kommer                      |
| [Kap 8 — Forms og validering](kap8/)      | 1.9      | forms.md                    |
| [Kap 9 — JavaScript grunnleggende](kap9/) | 1.11–1.12| basic_js.md                 |
| [Kap 10 — JS videregående: DOM/events](kap10/) | 1.13 | kommer                  |

Tidligere kap 11 (XML, 1.14) og kap 12 (Canvas, 1.15) er ikke lenger i pensum
— kun det som er gjennomgått i forelesningene teller. Sidene er beholdt som
referanse med tydelig "ikke i pensum"-banner.

## Skjelett-tilstand

Alle kapitler er per nå skjeletter med:
- Komplett 11-seksjons-struktur (helhetsbilde, mental modell, reisen, deler,
  begreper, oppsummering, notatmapping, feller, scenario, quiz, kapittel-eksamen).
- Stabile `id`-er på hver seksjon slik at søk og dypling virker.
- `data-chapter` på `<main>` så søkeindeksen kan navngi resultatene.
- Pekere til kilden (pensum-paragraf og slide-fil) der innholdet skal hentes.
- Tomme quiz og flashcard-decks som er klare for å fylles.

Innhold fylles inn etter hvert. For hvert kapittel: skriv prosa i hver
`.callout`-boks, legg til SVG-figur(er), legg til 10–15 reveal-quiz og 30–50
flashcards i kapittel-eksamen-deck-et.

## Lokal utvikling

```bash
# Statisk preview (ingen chat):
python -m http.server 8000

# Med chat (krever Vercel CLI + OPENROUTER_API_KEY i .env.local):
vercel dev
```

## Deploy

```bash
vercel --prod
```

Sett `OPENROUTER_API_KEY` i Vercel-prosjektets env vars før deploy hvis
chat-funksjonen skal være aktiv.

## Tone og innhold

- Norsk overalt. Ingen engelsk-versjon.
- Du-form. Pedagogisk tone.
- Konkret før abstrakt — eksempel og figur før formel.
- Aldri emojis i kode eller copy.
- Pensum er sjefen: aldri introduser begreper utenfor pensum uten å markere det.
