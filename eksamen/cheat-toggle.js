/* ============================================================
   Jukseark-toggle for eksamenssider.
   Injiserer en flytende knapp + et utskyvbart panel som laster
   a4-jukseark.html i en iframe. Samme oppførsel og keybinding
   (Ctrl/Cmd + J) som på /lekeplass.

   Bruk fra HTML:
     <script src="cheat-toggle.js" data-cheat-src="a4-jukseark.html"></script>
   Justér data-cheat-src om filen ligger en annen plass relativt
   til siden som inkluderer scriptet.
   ============================================================ */

(function () {
  'use strict';

  const script = document.currentScript;
  const SRC = (script && script.getAttribute('data-cheat-src')) || 'a4-jukseark.html';

  const STYLE = `
    .cheat-fab {
      position: fixed;
      bottom: 16px;
      left: 16px;
      z-index: 200;
      font-family: 'IBM Plex Mono', Menlo, monospace;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 9px 14px;
      background: #1f4e79;
      color: #f4f1ea;
      border: none;
      border-radius: 6px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
      cursor: pointer;
    }
    .cheat-fab:hover { background: #163758; }
    .cheat-fab .cheat-fab__hint {
      margin-left: 8px;
      opacity: 0.65;
      font-size: 0.7rem;
    }

    .cheat-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(26, 22, 18, 0.35);
      z-index: 9000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s;
    }
    .cheat-backdrop.is-open { opacity: 1; pointer-events: auto; }

    .cheat-panel {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: min(900px, 80vw);
      background: #f4f1ea;
      border-left: 1px solid #ddd5c4;
      box-shadow: -8px 0 24px rgba(0,0,0,0.12);
      z-index: 9001;
      transform: translateX(100%);
      transition: transform 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .cheat-panel.is-open { transform: translateX(0); }

    .cheat-panel header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      background: #e8e3d6;
      border-bottom: 1px solid #ddd5c4;
    }
    .cheat-panel header h2 {
      margin: 0;
      flex: 1;
      font-family: 'Newsreader', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.1rem;
      color: #1a1612;
    }
    .cheat-panel header h2 em { color: #1f4e79; font-style: normal; }
    .cheat-panel header button,
    .cheat-panel header a button {
      font-family: 'IBM Plex Mono', Menlo, monospace;
      font-size: 0.74rem;
      letter-spacing: 0.04em;
      padding: 6px 12px;
      border: 1px solid #ddd5c4;
      background: transparent;
      color: #3d3832;
      border-radius: 3px;
      cursor: pointer;
    }
    .cheat-panel header button:hover,
    .cheat-panel header a button:hover { border-color: #1f4e79; color: #1f4e79; }
    .cheat-panel header .cheat-close {
      font-size: 1rem;
      padding: 4px 10px;
    }
    .cheat-panel iframe {
      flex: 1;
      width: 100%;
      border: none;
      background: #f4f1ea;
    }

    @media (max-width: 640px) {
      .cheat-fab { left: 12px; bottom: 12px; padding: 7px 10px; font-size: 0.72rem; }
      .cheat-fab .cheat-fab__hint { display: none; }
      .cheat-panel { width: 100%; }
    }
  `;

  function injectStyle() {
    const tag = document.createElement('style');
    tag.textContent = STYLE;
    document.head.appendChild(tag);
  }

  function buildUi() {
    const fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'cheat-fab';
    fab.id = 'cheat-toggle';
    fab.setAttribute('aria-controls', 'cheat-panel');
    fab.innerHTML = 'Jukseark<span class="cheat-fab__hint">Ctrl+J</span>';

    const backdrop = document.createElement('div');
    backdrop.className = 'cheat-backdrop';
    backdrop.id = 'cheat-backdrop';

    const panel = document.createElement('aside');
    panel.className = 'cheat-panel';
    panel.id = 'cheat-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<header>' +
        '<h2>A4-<em>jukseark</em></h2>' +
        '<button type="button" id="cheat-refresh" title="Hent siste versjon på nytt">Oppdater</button>' +
        '<a href="' + SRC + '" target="_blank" rel="noopener" id="cheat-open">' +
          '<button type="button">Åpne i ny fane</button>' +
        '</a>' +
        '<button type="button" class="cheat-close" id="cheat-close" aria-label="Lukk jukseark">&times;</button>' +
      '</header>' +
      '<iframe id="cheat-frame" title="A4-jukseark" loading="lazy"></iframe>';

    document.body.appendChild(fab);
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    return {
      fab: fab,
      backdrop: backdrop,
      panel: panel,
      frame: panel.querySelector('#cheat-frame'),
      refresh: panel.querySelector('#cheat-refresh'),
      close: panel.querySelector('#cheat-close')
    };
  }

  function init() {
    if (document.getElementById('cheat-panel')) return;
    injectStyle();
    const ui = buildUi();
    let loaded = false;

    function reload() {
      ui.frame.src = SRC + '?t=' + Date.now();
      loaded = true;
    }
    function open() {
      if (!loaded) reload();
      ui.backdrop.classList.add('is-open');
      ui.panel.classList.add('is-open');
      ui.panel.setAttribute('aria-hidden', 'false');
    }
    function shut() {
      ui.backdrop.classList.remove('is-open');
      ui.panel.classList.remove('is-open');
      ui.panel.setAttribute('aria-hidden', 'true');
    }
    function toggleOpen() {
      if (ui.panel.classList.contains('is-open')) shut(); else open();
    }

    ui.fab.addEventListener('click', toggleOpen);
    ui.close.addEventListener('click', shut);
    ui.backdrop.addEventListener('click', shut);
    ui.refresh.addEventListener('click', reload);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && ui.panel.classList.contains('is-open')) shut();
      if ((e.ctrlKey || e.metaKey) && (e.key === 'j' || e.key === 'J')) {
        e.preventDefault();
        toggleOpen();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
