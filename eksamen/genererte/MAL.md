# Mal for genererte øvingseksamener — IT2805 Webteknologi

Dette dokumentet beskriver hvordan en øvingseksamen bør se ut når vi lager nye sett her i [genererte/](.). Hver ny eksamen lagres som en **HTML-fil** i denne mappen (f.eks. `eksamen_01.html`, `eksamen_02.html`, ...) og *speiler det ekte eksamensformatet* — den ekte IT2805-eksamen har fire seksjoner, og vi gjenskaper alle fire her: ikke alt kan klikkes, noe skal skrives.

---

## 1. Rammer for øvingseksamenene

- **Format (speiler ekte eksamen — se [exam_prep_summary.md](../../exam_prep_summary.md) og [eksamen/index.html](../index.html)):** Fire seksjoner som matcher det digitale Inspera-formatet:
  1. **Section A — Flervalg (MCQ)**, ca. 25 %.
  2. **Section B — Find result of code**, ca. 18 %. Studenten *skriver* forutsagt output i et tekstfelt; siden sjekker mot fasit.
  3. **Section C — Kortsvar (teori)**, ca. 17 %. Studenten *skriver* prosa i en textarea, åpner fasit etterpå, og *egenvurderer* delpoeng.
  4. **Section D — Koding**, ca. 40 %. Studenten *skriver kode* i en editor med tre felt (HTML/CSS/JS) som kan kjøres live i en sandboxet iframe. Fasit + egenvurdering på samme måte som Section C.
- **Hvorfor ikke bare MC?** Den ekte eksamen krever at studenten *skriver kode i en text editor inne i Inspera* uten å kunne kjøre den. Foreleser sier rett ut: *«writing pseudocode instead of some code that will give me an idea of your thinking process is the biggest mistake»* (se [eksamen/index.html](../index.html) §01). Hvis vår øvelsesform er ren MC, trener studenten feil mønster: gjenkjenning i stedet for produksjon. Derfor *må* Section C og D være skrive-felt — sandbox-iframen lar kandidaten kjøre koden i øvingsmodus selv om de ikke får det på ekte eksamen.
- **Interaktivt:** Hvert sett er en HTML-side som lenker [exam.css](exam.css) og [exam.js](exam.js). JS-en kjenner de fire oppgavetypene fra klasser (`.exam-q--mc`, `.exam-q--output`, `.exam-q--essay`, `.exam-q--code`) og kobler riktig interaksjon til hver: klikk for MC, input-sjekk for output, textarea + selvvurdering for kortsvar, kode-editor + sandbox + selvvurdering for koding. Poengtelleren nederst i høyre hjørne oppdaterer seg automatisk.
- **Vekting og lengde:** 100 poeng totalt, fordelt ~25 / ~18 / ~17 / ~40. **30–40 oppgaver totalt** (typisk ~8–10 i A, ~4–6 i B, ~4–6 i C, ~4–8 i D — D-oppgavene gir flere poeng per stykk siden de krever produksjon).
- **Vanskelighetsgrad:** Settene skal *utfordre* en student som har lest pensum og fulgt forelesningene. Unngå at alle MCQ er bokstavelig sitat fra notatene. Bruk *anvendelse*: gi en kodebit, et HTML-tre, et skjema-skjelett, og krev resonnement.
- **Tidsramme (anbefalt):** 3–4 timer for et komplett sett — speiler den ekte 4-timers-eksamenen. Section A og B går raskt; Section C og D er der tida går.

> **Viktig om gamle eksamener:** [ex2.md](../../tidligere_eksamener/ex2.md), [ex3.md](../../tidligere_eksamener/ex3.md), [ex4.md](../../tidligere_eksamener/ex4.md) og [ex5.md](../../tidligere_eksamener/ex5.md) ligger som referanse for *stilen*, ikke fasit. Ex3 og ex4 er identiske ("round 2"), så det er reelt tre unike sett. Bruk dem til å forstå tonen, vanskelighetsgraden og oppgavetypene — men **ikke replikér oppgaver**. Variér tall, HTML-trær og scenarier hver gang.

> **Variasjon på tvers av eksamener:** Før du lager et nytt sett, *les gjennom de eksisterende settene i denne mappen* og noter hvilke spørsmålstyper som allerede dominerer. Eksamen-arkivet i IT2805 har en tendens til å gjenta samme mønster: "TCP/IP-lag-matching", "POST vs GET med tre punkter", "Christmas-dager-funksjon", "5 + '9'" og "Math.floor(3.8)". Det er greit at *noen* spørsmål overlapper — slike kjernemønstre er sentrale i pensum og kommer høyst sannsynlig på ekte eksamen — men det er ikke greit at hvert nytt sett er en omformulering av det forrige.

> **"Idé-bank, ikke mal":** Listene under hver pensumblokk (§3–§6) er forslag til *temaer som har vært sentrale*, ikke en oppskrift som skal følges hver gang. Velg 1–2 temaer per blokk for *dette* settet, og varier valget mellom sett.

> **Ikke i pensum (skal aldri brukes):** XML (gamle 1.14), Canvas (gamle 1.15), JSON og Ajax (1.11.12 / 1.12). Kun det som ble gjennomgått i forelesning teller. Tidligere kanvas- og XML-oppgaver i [tidligere_eksamener/](../../tidligere_eksamener/) er **ikke** lenger relevante.

---

## 2. Filstruktur for en eksamensfil

Hver fil er en frittstående HTML-side som lenker til [exam.css](exam.css) og [exam.js](exam.js). Skall:

```html
<!doctype html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <title>Øvingseksamen 01 — IT2805</title>
  <link rel="stylesheet" href="exam.css">
</head>
<body>
  <header class="exam-head">
    <h1>Øvingseksamen 01 — IT2805</h1>
    <p>Tidsramme: 3 timer · Hjelpemidler: 2 A4 dobbeltsidig · Totalt: 100 poeng</p>
    <p class="exam-meta">Hovedfokus: TCP/IP, CSS-selektorer, output-resonnement, form-validering.</p>
  </header>

  <section class="exam-part">
    <h2>Section A — Flervalg (~25 %)</h2>
    <p class="part-intro">Korte teori- og syntaks-spørsmål. Mest fra Kap 1, 2, 3, 4.</p>
    <!-- .exam-q.exam-q--mc -->
  </section>

  <section class="exam-part">
    <h2>Section B — Find result of code (~18 %)</h2>
    <p class="part-intro">Skriv hva koden returnerer eller skriver ut. Sjekk-knappen normaliserer mellomrom og anførselstegn.</p>
    <!-- .exam-q.exam-q--output -->
  </section>

  <section class="exam-part">
    <h2>Section C — Kortsvar (~17 %)</h2>
    <p class="part-intro">Skriv prosa-svar (POST/GET, TCP/IP, event-faser …), åpne fasit, og *egenvurder* delpoeng.</p>
    <!-- .exam-q.exam-q--essay -->
  </section>

  <section class="exam-part">
    <h2>Section D — Koding (~40 %)</h2>
    <p class="part-intro">Skriv kode i tre felt (HTML/CSS/JS). Kjør i sandbox for å se resultatet. Selvvurder mot fasit-løsningen.</p>
    <!-- .exam-q.exam-q--code -->
  </section>

  <script src="exam.js"></script>
</body>
</html>
```

### 2.1 Flervalg (`.exam-q--mc`)

```html
<article class="exam-q exam-q--mc">
  <header class="exam-q__head">
    <span class="exam-q__num">Spørsmål 1</span>
    <span class="exam-q__points">3 poeng</span>
    <span class="exam-q__topic">Kap. 1 — TCP/IP</span>
  </header>
  <div class="exam-q__body">
    <p class="q-text">Hvilken protokoll hører til transportlaget i TCP/IP-modellen?</p>
    <ul class="exam-q__opts">
      <li><span class="opt-label">A</span> HTTP</li>
      <li><span class="opt-label">B</span> TCP</li>
      <li><span class="opt-label">C</span> IP</li>
      <li><span class="opt-label">D</span> WiFi</li>
    </ul>
    <details class="fasit-details">
      <summary>Vis fasit</summary>
      <div class="fasit-body">
        <span class="fasit-correct">Riktig svar: B</span>
        <p>TCP hører til transportlaget — det leverer pålitelig, ordnet datastrøm mellom to endepunkter.</p>
        <p>HTTP er applikasjonslaget (over TCP), IP er nettverkslaget (under TCP), og WiFi er fysisk/link-laget.</p>
        <p class="ref">Pensum: <a href="../../kap1/">Kap. 1 — Web og Internett</a></p>
      </div>
    </details>
  </div>
</article>
```

**Oppførsel:** Klikk på et alternativ låser oppgaven, fargelegger riktig (grønn) og evt. valgt-feil (rød), og åpner fasiten. Poeng legges til hvis riktig.

### 2.2 Output av kode (`.exam-q--output`)

```html
<article class="exam-q exam-q--output">
  <header class="exam-q__head">
    <span class="exam-q__num">Spørsmål 9</span>
    <span class="exam-q__points">4 poeng</span>
    <span class="exam-q__topic">Kap. 9 — String/Array-feller</span>
  </header>
  <div class="exam-q__body">
    <p class="q-text">Hva blir output av følgende kode?</p>
    <pre><code>let a = 5 + "9";
console.log(a);</code></pre>
    <div class="exam-q__answer">
      <label for="q9-input">Ditt svar:</label>
      <input type="text" id="q9-input" class="exam-q__input" autocomplete="off">
      <button type="button" class="exam-q__check">Sjekk</button>
    </div>
    <details class="fasit-details">
      <summary>Vis fasit</summary>
      <div class="fasit-body">
        <span class="fasit-correct" data-answer="59">Riktig svar: 59</span>
        <p><strong>Akseptert:</strong> <code>59</code>, <code>"59"</code>, <code>'59'</code> (whitespace og anførselstegn ignoreres ved sjekk).</p>
        <p><strong>Mekanisme:</strong> Når <code>+</code> har én operand av type string, konverteres den andre til string og strengen *konkateneres*. Derfor blir <code>5 + "9"</code> til <code>"59"</code>, ikke <code>14</code>. Den motsatte fellen: <code>5 - "9"</code> blir <code>-4</code>, fordi <code>-</code> ikke har string-overload og tvinger numerisk konvertering.</p>
        <p class="ref">Pensum: <a href="../../kap9/data-og-variabler/">Kap. 9 — Data og variabler</a></p>
      </div>
    </details>
  </div>
</article>
```

**Oppførsel:** Studenten skriver svaret i inputfeltet, klikker *Sjekk*. JS normaliserer (trim, fjerner ytre anførselstegn, kollapser whitespace) og sammenligner mot `data-answer` på `.fasit-correct`. Riktig → grønn ramme + poeng; feil → rød ramme. Fasiten åpnes uansett etter sjekk, så studenten ser forklaringen.

**Tips:** Bruk korte, entydige outputs. Hvis koden skriver flere linjer, sett `data-answer` til linjene separert med `\n`. Hvis flere svar er akseptable (f.eks. `"al"` eller `al`), bruk `data-answer-alts="al|'al'|"al"|"` (pipe-separert) som ekstra aksepterte former — JS normaliserer dem også.

### 2.3 Kortsvar — prosa med egenvurdering (`.exam-q--essay`)

```html
<article class="exam-q exam-q--essay">
  <header class="exam-q__head">
    <span class="exam-q__num">Spørsmål 18</span>
    <span class="exam-q__points">6 poeng</span>
    <span class="exam-q__topic">Kap. 8 — Forms</span>
  </header>
  <div class="exam-q__body">
    <p class="q-text">Forklar forskjellen mellom <code>GET</code> og <code>POST</code> når du sender skjema-data. Nevn minst tre konkrete forskjeller.</p>
    <textarea class="exam-q__textarea" rows="6" placeholder="Skriv ditt svar her..."></textarea>
    <button type="button" class="exam-q__reveal">Vis fasit og vurder</button>
    <details class="fasit-details">
      <summary>Vis fasit</summary>
      <div class="fasit-body">
        <p><strong>Nøkkelpunkter sensor leter etter (2 poeng hver, maks 6):</strong></p>
        <ul>
          <li><strong>Plassering av data:</strong> GET legger parametere i URL-en (etter <code>?</code>); POST legger dem i request-body.</li>
          <li><strong>Idempotens / caching:</strong> GET er idempotent og kan caches/bookmarks; POST er ikke idempotent og caches normalt ikke.</li>
          <li><strong>Størrelse:</strong> GET er praktisk begrenset til ~2 KB (URL-grense); POST har ingen praktisk grense.</li>
          <li><strong>Synlighet / sikkerhet:</strong> GET vises i URL/history/logger — derfor uegnet for sensitive data; POST skjuler dem i body (men er ikke kryptert med mindre HTTPS brukes).</li>
        </ul>
        <p class="ref">Pensum: <a href="../../kap8/form-elementet.html">Kap. 8 — Form-elementet</a></p>
        <div class="self-grade">
          <span class="self-grade__label">Egenvurdering:</span>
          <button type="button" data-grade="1.0">Fullt (alle 3 punkter)</button>
          <button type="button" data-grade="0.66">2 av 3</button>
          <button type="button" data-grade="0.33">1 av 3</button>
          <button type="button" data-grade="0">Manglet poenget</button>
        </div>
      </div>
    </details>
  </div>
</article>
```

**Oppførsel:** Studenten skriver i textarea. Klikk på *Vis fasit og vurder* åpner fasiten med en *poengrubrikk* og fire egenvurderings-knapper. Den klikkede knappen styrer hvor mye poeng som telles inn (`data-grade="1.0"` = full pott, `"0.66"` = 2/3 av poengene, etc.). Brutto poeng × grade = oppnådde poeng.

**Tips:** Fasit-rubrikken skal være *konkret* — punkt for punkt med poeng per punkt. Det gjør egenvurderingen meningsfull. Skriv som om du var sensor og lagde poenglisten.

### 2.4 Koding — editor + sandbox (`.exam-q--code`)

```html
<article class="exam-q exam-q--code">
  <header class="exam-q__head">
    <span class="exam-q__num">Spørsmål 25</span>
    <span class="exam-q__points">10 poeng</span>
    <span class="exam-q__topic">Kap. 8+9 — Form-validering</span>
  </header>
  <div class="exam-q__body">
    <p class="q-text">
      HTML-en under er gitt. Skriv CSS og JavaScript som:
    </p>
    <ol class="q-tasklist">
      <li>Endrer tekstboksens kantfarge til rød ved <em>fokus</em>, tilbake til grå ved <em>blur</em>.</li>
      <li>På <code>blur</code> validerer at navnet ikke inneholder tall — hvis det gjør det, vis <code>alert("Ingen tall i navn")</code>.</li>
      <li>Konverter all input til små bokstaver fortløpende på <code>keyup</code>.</li>
    </ol>
    <div class="exam-q__editor">
      <div class="editor-field">
        <label>HTML <small>(forhåndsutfylt — du kan endre)</small></label>
        <textarea class="code-html" rows="4">&lt;input type="text" id="navn" placeholder="Skriv navn..."&gt;</textarea>
      </div>
      <div class="editor-field">
        <label>CSS</label>
        <textarea class="code-css" rows="4" placeholder="/* din CSS her */"></textarea>
      </div>
      <div class="editor-field">
        <label>JavaScript</label>
        <textarea class="code-js" rows="8" placeholder="// din JS her"></textarea>
      </div>
      <div class="editor-actions">
        <button type="button" class="exam-q__run">Kjør i sandbox</button>
        <button type="button" class="exam-q__clear">Tøm preview</button>
      </div>
      <iframe class="code-preview" sandbox="allow-scripts" title="Sandbox-preview"></iframe>
    </div>
    <button type="button" class="exam-q__reveal">Vis fasit og vurder</button>
    <details class="fasit-details">
      <summary>Vis fasit</summary>
      <div class="fasit-body">
        <p><strong>Forventet løsning (én av flere idiomatiske former):</strong></p>
        <pre><code>/* CSS */
#navn { border: 1px solid #999; padding: 6px; }
#navn:focus { border-color: red; }

/* JS */
const navn = document.getElementById("navn");
navn.addEventListener("blur", () =&gt; {
  if (/\d/.test(navn.value)) alert("Ingen tall i navn");
});
navn.addEventListener("keyup", () =&gt; {
  navn.value = navn.value.toLowerCase();
});</code></pre>
        <p><strong>Poengrubrikk (10 poeng):</strong></p>
        <ul>
          <li>3 poeng: korrekt CSS for fokus/blur (kan også gjøres via JS).</li>
          <li>4 poeng: validering på blur med regex eller <code>parseInt</code>-sjekk, og <code>alert</code> med rimelig tekst.</li>
          <li>3 poeng: <code>keyup</code>-handler som setter <code>.value</code> til lowercase.</li>
        </ul>
        <p><strong>Vanlige feil:</strong> Bruker <code>onfocus="..."</code> inline (godtatt, men <code>addEventListener</code> foretrekkes); glemmer å skrive tilbake til <code>navn.value</code> i keyup; bruker <code>onchange</code> (utløses kun ved blur, ikke per tastetrykk).</p>
        <p class="ref">Pensum: <a href="../../kap8/validering.html">Kap. 8 — Validering</a>, <a href="../../kap10/">Kap. 10 — DOM/events</a></p>
        <div class="self-grade">
          <span class="self-grade__label">Egenvurdering:</span>
          <button type="button" data-grade="1.0">Alle tre deloppgaver løst</button>
          <button type="button" data-grade="0.66">2 av 3</button>
          <button type="button" data-grade="0.33">1 av 3</button>
          <button type="button" data-grade="0">Ingen funket</button>
        </div>
      </div>
    </details>
  </div>
</article>
```

**Oppførsel:** Studenten skriver i ett eller flere av tre felt (HTML / CSS / JS). *Kjør i sandbox* limer dem sammen til ett `<!doctype html>`-dokument og injiserer via `srcdoc` i en `<iframe sandbox="allow-scripts">`. Iframen kan ikke navigere parent, åpne popups eller nå samme-origin-ressurser. *Tøm preview* nullstiller iframen. *Vis fasit og vurder* åpner referanseløsning + poengrubrikk + egenvurderingsknapper.

**Tips:** Forhåndsutfyll HTML når det letter oppgaven (slik at studenten ikke skriver hele DOCTYPE for hver oppgave). Bruk `placeholder` for å antyde struktur. Hvis oppgaven er ren JS-funksjon (ingen DOM), kan du la HTML og CSS stå tomme — koden i JS-feltet kjører fortsatt, og studenten kan f.eks. legge `console.log` for å feilsøke (vises i nettleserens konsoll, ikke i preview).

---

## 3. Section A — Flervalg (~25 %, ca. 8–10 oppgaver)

Stilen ligner ex2 A1–A9 og ex5 Section A: korte teori- og syntaks-spørsmål, mange fra Kap 1 (web/Internett-teori), litt fra Kap 2 (HTML), litt fra Kap 3–4 (CSS-syntaks/feil), og av og til en match-oppgave (TCP/IP-lag ↔ protokoll). Section A skal dekke flest mulig kapitler raskt.

### 3.1 Kap. 1 — Web, Internett, TCP/IP (1.1–1.3) — 2–3 oppgaver
**Dette er den mest forutsigbare blokken** — TCP/IP og protokoller er på 3 av 3 reelle sett (se [eksamen/index.html](../index.html) tier 1).
- **TCP/IP-lag matchet med protokoller:** Application (HTTP, HTTPS, SMTP, FTP, DNS), Transport (TCP, UDP), Network (IP, ICMP), Physical/Link (WiFi, Ethernet). Match-spørsmål kan deles i flere 1-protokoll-MC.
- **Klient-server-modellen** og rollene.
- **DNS:** hva er en Domain Name Server, hvorfor er det nødvendig?
- **URL-anatomi:** scheme://host:port/path?query#fragment.
- **HTTP-metoder:** GET, POST, PUT, DELETE — hvilken er idempotent?
- **Statuskoder:** 200, 301, 404, 500 — hva betyr hver gruppe?

### 3.2 Kap. 2 — HTML-syntaks og struktur (1.4–1.5) — 1–2 oppgaver
- HREF-anchor-symbolet `#`, heading-nivåer (h1–h6), class vs id, tabell-bredde, hvilken tag brukes til X, lese HTML-utdrag og avgjøre hva som er *ugyldig*.

### 3.3 Kap. 3 — CSS grunnleggende (1.6) — 1–2 oppgaver
- `text-decoration: none`, `padding`, box-model-rekkefølge, `border-width: top right bottom left`, `!important`, ugyldig selektor.

### 3.4 Kap. 4 — CSS videregående (1.7) — 1–2 oppgaver
- `position` default (`static`), `z-index`, `float`, `display` defaults, `visibility:hidden` vs `display:none` (én MC her, større forklaringsversjon i C), `overflow`-verdier.

### 3.5 Kap. 5 — Flexbox og Grid (slides) — 0–1 oppgave
- `flex-direction` default, `justify-content` vs `align-items`, `fr`-enheter, `flex: 1`.

### 3.6 Kap. 6 — Responsivt design (1.10) — 0–1 oppgave
- `@media`-syntaks, mobile-first vs desktop-first, viewport-meta.

### 3.7 Kap. 7 — Multimedia (1.8) — 0–1 oppgave
- HTML5 multimedia uten plug-ins, `<video>`/`<audio>`-attributter, `alt`-tekst.

### 3.8 Kap. 8 — Forms (1.9), kort syntaks-MCQ — 0–1 oppgave
- Gyldige `<input type="...">`, `<label for="...">`, `<select>`-struktur. (Den store POST/GET-forklaringen hører i C.)

### 3.9 Kap. 9 — JS-syntaks-MCQ — 0–1 oppgave
- `let` vs `const` vs `var`, `===` vs `==`, `typeof []`, `Math.floor(3.8)`.

---

## 4. Section B — Find result of code (~18 %, ca. 4–6 oppgaver)

Studenten skriver predikert output i et tekstfelt. Sjekken normaliserer mellomrom og anførselstegn — så `59`, `"59"`, `'59'` og `  59  ` aksepteres som samme svar.

### Anbefalt fordeling
- 1–2 oppgaver på **string/array-feller** (substring, slice, charAt, push/pop/unshift, length-mutation).
- 1–2 oppgaver på **type-coercion** (`5 + "9"`, `5 - "9"`, `"" == 0`, `prompt() + 1`).
- 1 oppgave på **kontrollflyt** (sløyfe-tellere, switch-fall-through uten break).
- 1 oppgave på **objekt/array-mutasjon** (`arr[100] = 10` setter length til 101, `delete obj.x`, `splice` vs `slice`).

### Tema-idébank
- `"Scaler".substring(2, 4)` → `al`.
- `let a = 5 + "9"` → `59`.
- `arr.pop()` + `arr.unshift()` i sløyfe (rotasjon).
- `arr[100] = 10; arr.length` → `101`.
- `prompt("...") + 1` med input `"18"` → `181`.
- `Math.floor(3.8)` / `Math.ceil(3.2)` / `Math.round(3.5)`.
- `typeof null` → `object`; `typeof NaN` → `number`.
- `parseInt("12abc")` → `12`; `Number("12abc")` → `NaN`.
- `for (let x in [10,20,30]) console.log(x)` skriver indekser (`0 1 2`), ikke verdier.
- `[1,2,3].sort()` skriver `[1,2,3]`, men `[10,2,1].sort()` skriver `[1,10,2]` (leksikografisk!).

### Fasit-format — viktig
Hver fasit *må* forklare *mekanismen* som driver outputen — ikke linje for linje. Foreleser krever dette eksplisitt: 1 av 3 poeng for riktig svar, 2 av 3 for riktig forklaring. Eksempel:

> **Riktig svar:** `59`. Når `+` har én string-operand, konverteres den andre til string og strengen konkateneres. `5 - "9"` ville derimot blitt `-4` fordi `-` tvinger numerisk konvertering.

> **Variasjonsregel:** Hver eksamen velger ulike snutter — ikke gjenbruk `5 + "9"` hver gang. Hvis du bruker den i eksamen_01, prøv `"5" - 2` (=3) eller `+"3.14"` (=3.14) i eksamen_02.

---

## 5. Section C — Kortsvar med egenvurdering (~17 %, ca. 4–6 oppgaver)

Her speiler vi de klassiske kortsvar-spørsmålene (ex2 B1–B5, ex3 B1–B4, ex5 B4–B5). Studenten skriver prosa-svar i en textarea, åpner fasit og selvvurderer. Fasit-rubrikken må være *konkret* (punkt for punkt med poeng) — det er hele forskjellen mellom en nyttig og en ubrukelig selvvurdering.

### Tema-idébank
- **POST vs GET** (3/3 sett — *må* være med, men varier hvilken egenskap som er nøkkelen).
- **TCP/IP-lag forklaring** med eksempel-protokoller per lag (3/3 sett).
- **Event propagation & bubbling** med eksempel.
- **CSS specificity** — hierarkiet inline > id > class/attr/pseudo > element.
- **`display:none` vs `display:inline` vs `display:block` vs `visibility:hidden`**.
- **`getElementById` vs `getElementsByName` vs `getElementsByClassName` vs `getElementsByTagName`** — singel vs collection, hva returneres.
- **External vs internal vs inline CSS** og når brukes hva.
- **Relative URLs** (`./`, `../`, `/`) — fra fil X til fil Y.
- **DNS** — hva er en domain name server, hva er rollen?
- **`let` vs `var`** — redeklareringsregler, blokk-scope vs function-scope, hoisting.
- **`querySelector` vs `getElementById`** — når foretrekker man hva?
- **`addEventListener` vs `onclick="..."`** — fordeler/ulemper.

### Krav til fasit-rubrikken
- Lag en *poengliste* som sensor ville brukt: 2–4 punkter, hvert med eksplisitt delpoeng.
- Inkluder egenvurderings-knapper som dekker reelle nivåer av besvarelse: full / delvis / minimal / blank.
- Lenke til relevant kapittelside.

> **Pedagogisk poeng:** Egenvurderingen tvinger studenten til å lese fasiten *og* sammenligne mot sitt eget svar. Det er der læringa sitter. Hvis rubrikken er vag, blir vurderingen vag — gjør den så konkret som mulig.

---

## 6. Section D — Koding med sandbox (~40 %, ca. 4–8 oppgaver)

Her er den største poengmassen og det viktigste å trene på. Hver oppgave gir studenten et editor-skall (HTML/CSS/JS-felt) og en *konkret spec* (delpunkter), og lar dem kjøre koden i sandbox-iframe. Fasiten viser en referanseløsning og en poengrubrikk.

### 6.1 Kap. 3+4 — CSS-selektorer / styling på gitt DOM (3/3 sett) — 1–2 oppgaver
Tier 1: nesten garantert. Forhåndsutfyll HTML, la studenten skrive CSS, kjør i sandbox.

Eksempel-oppgaver:
- Gitt et nestet HTML-tre med `div.intro > p > span`: skriv CSS som (a) gjør alle `<p>` røde og bold, (b) gir grå bakgrunn til *første* p, (c) flytter alle `<span>` 20px til høyre.
- Gitt et navigasjonsmenu i `<ul>`: skriv CSS som viser items horisontalt, gir hover-effekt, og markerer aktiv lenke med `class="active"`.

### 6.2 Kap. 8+9 — Form-validering (2/3 sett) — 1–2 oppgaver
- Skriv en `validate()`-funksjon som sjekker at fornavn ikke har tall, alder ≥ 18, passord ≥ 8 tegn med 1 stor + 1 spesialtegn + 1 tall. Vis feil i `alert()`. Returner `false` for å hindre submit.
- Skriv et komplett skjema med tre felt og en submit-knapp som triggerer validering.

### 6.3 Kap. 9 — Date / Math-funksjoner (2/3 sett) — 0–1 oppgave
- Skriv en funksjon som regner antall dager til *neste* jul (ikke i år). Vis resultatet i en alert.
- Skriv en funksjon som sjekker om et tall er primtall — bonus: kombiner med Christmas-funksjonen ("4 days left, 4 is not prime").

### 6.4 Kap. 10 — DOM-manipulasjon + events (kjernepensum) — 1–2 oppgaver
- Skriv kode som ved klikk på en knapp legger til en ny `<li>` på slutten av `<ul id="list">`.
- Skriv mouseover/mouseout-handlere som endrer ramme og farge på en div.
- Skriv en funksjon som ved input-keyup viser nåværende antall tegn i et `<span id="counter">`.

### 6.5 Kap. 8 — Skjema-kalkulator (2/3 sett) — 0–1 oppgave
Klassikeren: to tekstfelt + knapper (Multipliser/Divider). Skriv JS-funksjoner som leser feltene, regner ut, og skriver til `<span id="result">`. Pass på `parseFloat` (vanlig bug: string-concat).

### 6.6 Kap. 2 — HTML-struktur (1/3 sett) — 0–1 oppgave
- Skriv HTML for en gitt tabell med bilde i en celle, sidemeny i en annen.
- Skriv et komplett `<form>` med tre input-typer (text, email, password) og labels.

### Krav til hver D-oppgave
- **Klar spec** — del opp i nummererte deloppgaver. Hver deloppgave har eksplisitt poeng.
- **Forhåndsutfyll det som ikke testes** (typisk HTML når oppgaven egentlig handler om CSS eller JS).
- **Sandbox skal være meningsfull** — studenten skal kunne kjøre og se resultatet. Hvis oppgaven er ren teori-kode (ingen visuelt resultat), bruk `console.log` og fortell studenten å åpne nettleser-konsollen.
- **Fasit-rubrikk per deloppgave** — egenvurderingen er bare nyttig hvis den er konkret.
- **Vis én idiomatisk løsning**, men nevn i forklaringen at det fins flere gyldige varianter (f.eks. `addEventListener` vs inline `onclick`).

---

## 7. Hvordan velge type for en gitt oppgave

| Tema | Anbefalt type | Hvorfor |
|---|---|---|
| TCP/IP-lag, protokoll-matching | MC | Mange små fakta; raskt å sjekke. |
| URL-anatomi, statuskoder | MC | Definisjonsspørsmål. |
| HTML-syntaks (ugyldig tag, hva er X) | MC | Korte definisjons- eller eliminasjonsspørsmål. |
| CSS-property-default-verdier | MC | Faktasjekk. |
| Output av en JS-snutt | **Output (B)** | Hele poenget er å forutsi — student skriver det selv. |
| Forskjell mellom display-verdier | **Kortsvar (C)** | Flere punkter — krever prosa. |
| POST vs GET, TCP/IP-forklaring | **Kortsvar (C)** | Klassisk "forklar med 3 punkter". |
| `getElementById` vs `querySelector` vs … | **Kortsvar (C)** | Flere returtyper og brukstilfeller. |
| Skriv en form-validator | **Koding (D)** | Krever produksjon — kan ikke gjettes. |
| Skriv CSS for et HTML-tre | **Koding (D)** | Studenten må kombinere flere selektorer. |
| Skriv en JS-funksjon (Christmas, primtall, kalkulator) | **Koding (D)** | Hovedformålet med øvelsen. |

> **Tommelfingerregel:** Hvis oppgaven på ekte eksamen ville krevd skriving (kode eller prosa), skal den være B/C/D her — *ikke* MC. MC er bare for de korte fakta-spørsmålene som *også* på ekte eksamen er MC.

---

## 8. Sjekkliste før et nytt sett anses ferdig

- [ ] Filen er en HTML-side med `<link rel="stylesheet" href="exam.css">` og `<script src="exam.js"></script>`.
- [ ] Hver oppgave har riktig type-klasse: `.exam-q--mc`, `.exam-q--output`, `.exam-q--essay`, eller `.exam-q--code`.
- [ ] Sett er testet i nettleser:
  - [ ] MC: klikk låser oppgaven, fargelegger riktig/feil, åpner forklaring.
  - [ ] Output: input + Sjekk gir grønn/rød tilbakemelding; fasiten åpnes.
  - [ ] Essay: textarea + Vis fasit åpner rubrikk + egenvurderingsknapper som teller poeng.
  - [ ] Code: tre felter + Kjør i sandbox rendrer i iframen; Vis fasit + egenvurdering teller poeng.
- [ ] **Antall oppgaver: 30–40 totalt** (~8–10 i A, ~4–6 i B, ~4–6 i C, ~4–8 i D).
- [ ] Total poengsum = 100, fordeling ≈ 25/18/17/40 mellom seksjonene.
- [ ] **Tier 1-temaer (3/3 sett) er representert** — TCP/IP, POST vs GET, JS-output, CSS-selektorer på gitt DOM. Minst én oppgave per tema.
- [ ] Hver av de ti kapitlene (Kap 1–10) er representert med minst én oppgave — eller bevisst utelatt med begrunnelse i en `<!-- -->`-kommentar.
- [ ] Minst én oppgave dekker det "underrepresenterte" stoffet (Flexbox/Grid, responsivt design, multimedia) — så det ikke blir samme blindsoner i alle sett.
- [ ] **Variasjonssjekk på tvers av sett:** scrollet gjennom eksisterende sett og sjekket at dette settet ikke er en omformulering av de samme spørsmålstypene. Minst 1/3 av oppgavene tester en *vinkling* som ikke er brukt i de siste settene.
- [ ] **Vanskelighetsgradssjekk:** minst halvparten av oppgavene krever resonnement (output-trace, selektor-matching, kodeproduksjon) — ikke bare gjenkjenning av definisjon.
- [ ] Ingen oppgave er en direkte kopi av [ex2.md](../../tidligere_eksamener/ex2.md), [ex3.md](../../tidligere_eksamener/ex3.md), [ex4.md](../../tidligere_eksamener/ex4.md) eller [ex5.md](../../tidligere_eksamener/ex5.md). HTML-trær, navn, tall og scenarier er endret.
- [ ] Alle MC-oppgaver har grundig forklaring som dekker både hvorfor riktig er riktig og hvorfor distraktorene er feil.
- [ ] Alle output-oppgaver forklarer *mekanismen* (type-coercion, mutasjon, scope), ikke linje-for-linje. Foreleser-krav: 2/3 av poengene er for forklaringen.
- [ ] Alle essay-oppgaver har en *konkret poengrubrikk* (punkt for punkt med eksplisitt delpoeng), ikke vage "diskuter X".
- [ ] Alle kode-oppgaver har deloppgaver med eksplisitt poeng per delpunkt, en idiomatisk referanseløsning, og en bemerkning om vanlige feil.
- [ ] **Pensum-rensing:** ingen oppgave bruker XML, Canvas, JSON eller Ajax — de er ute av pensum.
- [ ] **MC-spesifikt — distraktor-kvalitet:**
  - Riktig svar er ikke systematisk det lengste.
  - Riktig svar (A/B/C/D) er fordelt jevnt.
  - Form-test: kan du gjette riktig svar fra alternativene alene uten å lese spørsmålet? Hvis ja → skriv om.
- [ ] Hver oppgave har en pensum-lenke i `.ref` som peker til riktig kapittelside (gjerne underseksjoner: [kap3/selektorer/](../../kap3/selektorer/), [kap8/validering.html](../../kap8/validering.html)).

---

## 9. Navngiving og oppfølging

- Filnavn: `eksamen_NN.html` (NN = 01, 02, ...). Tema-spesifikke sett kan hete `eksamen_NN_tema.html`, f.eks. `eksamen_03_dom.html`.
- Hvert sett bør ha en kort innledning øverst (i `.exam-meta`-paragraf eller `<!-- -->`-kommentar) med dato det ble laget og hvilke pensumblokker som er hovedfokus.
- [exam.js](exam.js) og [exam.css](exam.css) er felles for alle sett — ikke kopier dem inn i hver fil. Hold dem oppdatert hvis vi endrer interaksjonsmønsteret.
- Når et sett er testet av brukeren, oppdater eventuelt med kommentarer i en `<!-- -->`-kommentar øverst i HTML-en om hva som var for lett/for vanskelig — slik at neste sett kalibreres bedre.

## 10. Referanser

- [eksamen/index.html](../index.html) — frekvensanalyse av ex2–ex5 + tier-klassifisering. Konsulter denne *før* du lager et nytt sett.
- [eksamen/a4-jukseark.html](../a4-jukseark.html) — det print-klare juksearket.
- [exam_prep_summary.md](../../exam_prep_summary.md) — oppsummering av foreleserens egen eksamens-brief.
- [transcribition_exam_info.md](../../transcribition_exam_info.md) — full transkripsjon av eksamens-briefen.
- [tidligere_eksamener/ex1.md](../../tidligere_eksamener/ex1.md) er JS-undervisningsnotater (ikke et eksamenssett) — bruk som idébank for JS-feller.
