(function () {
  'use strict';

  var input = document.getElementById('nav-search');
  var results = document.getElementById('nav-search-results');
  if (!input || !results) return;

  var here = window.location.pathname;
  // Count directory depth from site root, handling both clean URLs and *.html paths
  var dirPath = here.replace(/[^\/]*$/, '');
  var depthSegs = dirPath.split('/').filter(Boolean);
  var prefix = depthSegs.map(function () { return '../'; }).join('');

  // All searchable HTML pages (relative to site root)
  var PAGES = [
    'index.html',
    'pensum.html',
    'zero-to-hero/index.html',
    'reisen/index.html',
    'kap1/index.html',
    'kap2/index.html',
    'kap3/index.html',
    'kap3/forsta-css/index.html',
    'kap3/kaskade-arv/index.html',
    'kap3/selektorer/index.html',
    'kap3/farger/index.html',
    'kap3/boks-modellen/index.html',
    'kap3/borders/index.html',
    'kap3/fonter/index.html',
    'kap3/pseudo-klasser/index.html',
    'kap4/index.html',
    'kap5/index.html',
    'kap6/index.html',
    'kap7/index.html',
    'kap8/index.html',
    'kap8/form-elementet.html',
    'kap8/struktur.html',
    'kap8/validering.html',
    'kap9/index.html',
    'kap10/index.html',
    'kap11/index.html',
    'kap11/syntaks.html',
    'kap11/validering.html',
    'kap11/visning.html',
    'kap12/index.html'
  ];

  var fuse = null;
  var index = [];
  var loading = true;
  var activeIdx = -1;

  function loadFuse() {
    return new Promise(function (resolve, reject) {
      if (window.Fuse) return resolve(window.Fuse);
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
      s.onload = function () { resolve(window.Fuse); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function fetchPage(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('not ok');
      return r.text();
    }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var main = doc.querySelector('main');
      var chapter = (main && main.getAttribute('data-chapter'))
        || (doc.querySelector('title') ? doc.querySelector('title').textContent : url);
      var entries = [];
      var sections = (main || doc).querySelectorAll('section[id]');
      if (sections.length) {
        sections.forEach(function (sec) {
          var h = sec.querySelector('h1, h2, h3');
          var title = h ? h.textContent.trim() : sec.id;
          var body = sec.textContent.replace(/\s+/g, ' ').trim().slice(0, 600);
          entries.push({
            chapter: chapter,
            title: title,
            body: body,
            url: url + '#' + sec.id
          });
        });
      } else {
        var t = doc.querySelector('h1');
        entries.push({
          chapter: chapter,
          title: t ? t.textContent.trim() : chapter,
          body: (main || doc.body).textContent.replace(/\s+/g, ' ').trim().slice(0, 600),
          url: url
        });
      }
      return entries;
    }).catch(function () { return []; });
  }

  function buildIndex() {
    Promise.all([loadFuse(), Promise.all(PAGES.map(function (p) { return fetchPage(prefix + p); }))])
      .then(function (parts) {
        var Fuse = parts[0];
        var all = [].concat.apply([], parts[1]);
        index = all;
        fuse = new Fuse(index, {
          keys: [
            { name: 'title', weight: 0.6 },
            { name: 'chapter', weight: 0.2 },
            { name: 'body', weight: 0.2 }
          ],
          includeMatches: true,
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        loading = false;
        input.disabled = false;
        input.placeholder = 'Søk i pensum…';
      })
      .catch(function () {
        input.placeholder = 'Søk utilgjengelig';
      });
  }

  function escape(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]);
    });
  }

  function highlight(text, query) {
    if (!query) return escape(text);
    var safe = escape(text);
    var q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return safe.replace(new RegExp('(' + q + ')', 'gi'), '<mark>$1</mark>');
  }

  function render(matches, q) {
    if (!matches.length) {
      results.innerHTML = '<div class="ns-result"><div class="ns-title">Ingen treff</div></div>';
      results.classList.add('open');
      return;
    }
    results.innerHTML = matches.slice(0, 12).map(function (m, i) {
      var item = m.item;
      return '<a class="ns-result' + (i === activeIdx ? ' active' : '') + '" href="' + item.url + '">'
        + '<div class="ns-chap">' + escape(item.chapter) + '</div>'
        + '<div class="ns-title">' + highlight(item.title, q) + '</div>'
        + '<div class="ns-snippet">' + highlight(item.body.slice(0, 140), q) + (item.body.length > 140 ? '…' : '') + '</div>'
        + '</a>';
    }).join('');
    results.classList.add('open');
  }

  var debounceTimer = null;
  var lastMatches = [];
  var lastQuery = '';

  input.addEventListener('input', function () {
    var q = input.value.trim();
    activeIdx = -1;
    if (debounceTimer) clearTimeout(debounceTimer);
    if (!q) {
      results.classList.remove('open');
      results.innerHTML = '';
      return;
    }
    debounceTimer = setTimeout(function () {
      if (!fuse) return;
      lastQuery = q;
      lastMatches = fuse.search(q);
      render(lastMatches, q);
    }, 150);
  });

  input.addEventListener('keydown', function (e) {
    if (!results.classList.contains('open')) return;
    var rs = results.querySelectorAll('.ns-result');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, rs.length - 1);
      render(lastMatches, lastQuery);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, -1);
      render(lastMatches, lastQuery);
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && rs[activeIdx]) {
        e.preventDefault();
        window.location.href = rs[activeIdx].getAttribute('href');
      }
    } else if (e.key === 'Escape') {
      results.classList.remove('open');
      input.blur();
    }
  });

  document.addEventListener('click', function (e) {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('open');
    }
  });

  buildIndex();
})();
