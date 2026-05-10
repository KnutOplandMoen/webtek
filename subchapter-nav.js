// Auto-injects "Forrige | Tilbake til kapittel | Neste" navigation
// at the bottom of <main> on subchapter pages. The data below mirrors
// the order of subpage cards on each chapter's index.html.

(function () {
  var CHAPTERS = {
    kap2: {
      title: 'Kapittel 2: HTML',
      pages: [
        { path: 'document-structure.html', title: 'Document structure', label: 'A · STR' },
        { path: 'attributes.html',         title: 'Attributter',         label: 'B · ATT' },
        { path: 'text.html',               title: 'Tekst',               label: 'C · TXT' },
        { path: 'lists.html',              title: 'Lister',              label: 'D · LST' },
        { path: 'links.html',              title: 'Lenker',              label: 'E · LNK' },
        { path: 'images.html',             title: 'Bilder',              label: 'F · IMG' },
        { path: 'tables.html',             title: 'Tabeller',            label: 'G · TBL' },
        { path: 'semantics.html',          title: 'Kommentarer og semantikk', label: 'H · SEM' },
        { path: 'site-structure.html',     title: 'Site structure',      label: 'I · SITE' }
      ]
    },
    kap3: {
      title: 'Kapittel 3: CSS',
      pages: [
        { path: 'forsta-css/',     title: 'Forstå CSS, syntaks, kommentarer', label: '1.6.1–1.6.3' },
        { path: 'kaskade-arv/',    title: 'Kaskaden og arv',                   label: '1.6.4–1.6.5' },
        { path: 'selektorer/',     title: 'Selektorer',                        label: '1.6.6' },
        { path: 'farger/',         title: 'Farger',                            label: '1.6.7' },
        { path: 'boks-modellen/',  title: 'Boks-modellen og sentrering',       label: '1.6.8–1.6.9' },
        { path: 'borders/',        title: 'Borders',                           label: '1.6.10' },
        { path: 'fonter/',         title: 'Tekst og fonter',                   label: '1.6.11' },
        { path: 'pseudo-klasser/', title: 'Pseudo-klasser',                    label: '1.6.12' }
      ]
    },
    kap7: {
      title: 'Kapittel 7: Multimedia',
      pages: [
        { path: 'bilder.html',      title: 'Bilder',          label: 'A · IMG' },
        { path: 'video-audio.html', title: 'Video og audio',  label: 'B · A/V' }
      ]
    },
    kap8: {
      title: 'Kapittel 8: Forms',
      pages: [
        { path: 'form-elementet.html', title: 'Form-elementet og skjemadesign', label: 'A · ELT' },
        { path: 'struktur.html',       title: 'Form-struktur',                  label: 'B · STR' },
        { path: 'validering.html',     title: 'Validering',                     label: 'C · VAL' }
      ]
    },
    kap9: {
      title: 'Kapittel 9: JavaScript',
      pages: [
        { path: 'skrive-js/',           title: 'Skrive JavaScript',  label: '1.11.1–1.11.2' },
        { path: 'data-og-variabler/',   title: 'Data og variabler',  label: '1.11.3–1.11.6' },
        { path: 'kontrollflyt/',        title: 'Kontrollflyt',       label: '1.11.7–1.11.10' },
        { path: 'funksjoner-og-json/',  title: 'Funksjoner og JSON', label: '1.11.11–1.11.12' },
        { path: 'ajax/',                title: 'AJAX',               label: '1.12' }
      ]
    },
    kap11: {
      title: 'Kapittel 11: XML',
      pages: [
        { path: 'syntaks.html',    title: 'Syntaks & well-formed', label: 'A · SYN' },
        { path: 'validering.html', title: 'DTD & XSD',             label: 'B · VAL' },
        { path: 'visning.html',    title: 'Visning & JSON',        label: 'C · DSP' }
      ]
    }
  };

  var path = window.location.pathname.replace(/\\/g, '/');
  // Find which chapter directory the page is in
  var match = path.match(/\/(kap\d+)\/(.*)$/);
  if (!match) return;
  var chapKey = match[1];
  var rest = match[2];
  var chapter = CHAPTERS[chapKey];
  if (!chapter) return;

  // Normalize current sub-path so we can match against entries:
  //   kap2/links.html              -> "links.html"
  //   kap3/forsta-css/             -> "forsta-css/"
  //   kap3/forsta-css/index.html   -> "forsta-css/"
  var current = rest;
  if (current === '' || current === 'index.html') return; // chapter index, skip
  current = current.replace(/index\.html$/, '');

  var pages = chapter.pages;
  var idx = -1;
  for (var i = 0; i < pages.length; i++) {
    var p = pages[i].path;
    if (current === p || current === p.replace(/\/$/, '') || current === p + 'index.html') {
      idx = i;
      break;
    }
  }
  if (idx === -1) return;

  var prev = idx > 0 ? pages[idx - 1] : null;
  var next = idx < pages.length - 1 ? pages[idx + 1] : null;

  // Determine relative prefix back up to the chapter root
  // (kap3/forsta-css/index.html -> "../"; kap2/links.html -> "./")
  var depth = pages[idx].path.replace(/[^/]+/g, '').length; // count of "/" in path
  var upToChapter = depth > 0 ? '../' : './';

  function escape(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]);
    });
  }

  function linkHref(page) {
    return upToChapter + page.path;
  }

  var html =
    '<nav class="subchapter-nav" aria-label="Underkapittel-navigasjon">' +
      '<div class="container">' +
        '<div class="scn-row">' +
          (prev
            ? '<a class="scn-link scn-prev" href="' + linkHref(prev) + '">' +
                '<span class="scn-dir">&larr; Forrige</span>' +
                '<span class="scn-label">' + escape(prev.label) + '</span>' +
                '<span class="scn-title">' + escape(prev.title) + '</span>' +
              '</a>'
            : '<span class="scn-link scn-disabled" aria-hidden="true">' +
                '<span class="scn-dir">&larr; Forrige</span>' +
                '<span class="scn-title">Første underkapittel</span>' +
              '</span>') +
          '<a class="scn-link scn-up" href="' + upToChapter + '">' +
            '<span class="scn-dir">&uarr; Tilbake</span>' +
            '<span class="scn-title">' + escape(chapter.title) + '</span>' +
          '</a>' +
          (next
            ? '<a class="scn-link scn-next" href="' + linkHref(next) + '">' +
                '<span class="scn-dir">Neste &rarr;</span>' +
                '<span class="scn-label">' + escape(next.label) + '</span>' +
                '<span class="scn-title">' + escape(next.title) + '</span>' +
              '</a>'
            : '<span class="scn-link scn-disabled" aria-hidden="true">' +
                '<span class="scn-dir">Neste &rarr;</span>' +
                '<span class="scn-title">Siste underkapittel</span>' +
              '</span>') +
        '</div>' +
        '<ol class="scn-progress">' +
          pages.map(function (p, i) {
            var cls = 'scn-step' + (i === idx ? ' scn-step--current' : '');
            if (i < idx) cls += ' scn-step--done';
            return '<li class="' + cls + '">' +
              (i === idx
                ? '<span title="' + escape(p.title) + '">' + (i + 1) + '</span>'
                : '<a href="' + linkHref(p) + '" title="' + escape(p.title) + '">' + (i + 1) + '</a>') +
              '</li>';
          }).join('') +
        '</ol>' +
      '</div>' +
    '</nav>';

  function inject() {
    var main = document.querySelector('main');
    if (!main) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    main.appendChild(wrapper.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
