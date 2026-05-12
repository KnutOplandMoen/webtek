/* ============================================================
   Progresjons-tracker for genererte øvingseksamener.

   Leser indeksen som exam.js skriver til localStorage
   (it2805-exam-index:v1) og rendrer:
     - statistikk-bokser (sett startet, beste, gjennomsnitt)
     - SVG-linjediagram med score per eksamen
     - liste med poeng + framgangs-bar per eksamen
     - badge på hvert .exam-card med matching href

   Aktiveres ved at en container med id="progress-tracker"
   finnes på siden. Containeren må inneholde <div class="tracker-body">.
   ============================================================ */

(function () {
  'use strict';

  const INDEX_KEY = 'it2805-exam-index:v1';

  function loadIndex() {
    try {
      const raw = localStorage.getItem(INDEX_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function clearIndex() {
    try { localStorage.removeItem(INDEX_KEY); } catch (e) {}
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function shortLabel(pathname) {
    const m = pathname.match(/eksamen_(\d+)/i);
    if (m) return '#' + parseInt(m[1], 10);
    return (pathname.split('/').pop() || '?').replace(/\.html$/, '');
  }

  function sortKey(pathname) {
    const m = pathname.match(/eksamen_(\d+)/i);
    return m ? parseInt(m[1], 10) : 9999;
  }

  function filename(pathname) {
    return (pathname.split('/').pop() || '').toLowerCase();
  }

  function relativeTime(ts) {
    if (!ts) return '';
    const diff = (Date.now() - ts) / 1000;
    if (diff < 60)      return 'akkurat nå';
    if (diff < 3600)    return Math.floor(diff / 60) + ' min siden';
    if (diff < 86400)   return Math.floor(diff / 3600) + ' t siden';
    if (diff < 86400*7) return Math.floor(diff / 86400) + ' d siden';
    return new Date(ts).toLocaleDateString('nb-NO');
  }

  function percent(earned, total) {
    if (!total) return 0;
    return (earned / total) * 100;
  }

  /* ---------- SVG chart ---------- */

  function renderChart(svg, entries) {
    const W = 640, H = 240;
    const ML = 46, MR = 18, MT = 24, MB = 40;
    const plotW = W - ML - MR;
    const plotH = H - MT - MB;
    const n = entries.length;

    function xPos(i) {
      if (n <= 1) return ML + plotW / 2;
      return ML + (i / (n - 1)) * plotW;
    }
    function yPos(pct) {
      return MT + (1 - pct / 100) * plotH;
    }

    const parts = [];

    [0, 25, 50, 75, 100].forEach((p) => {
      const y = yPos(p);
      parts.push('<line x1="' + ML + '" y1="' + y + '" x2="' + (W - MR) + '" y2="' + y + '" class="pt-grid"/>');
      parts.push('<text x="' + (ML - 8) + '" y="' + (y + 4) + '" class="pt-ylabel">' + p + '</text>');
    });

    parts.push('<line x1="' + ML + '" y1="' + MT + '" x2="' + ML + '" y2="' + (MT + plotH) + '" class="pt-axis"/>');
    parts.push('<line x1="' + ML + '" y1="' + (MT + plotH) + '" x2="' + (W - MR) + '" y2="' + (MT + plotH) + '" class="pt-axis"/>');

    parts.push('<text x="' + 14 + '" y="' + (MT + plotH / 2) + '" class="pt-axis-label" transform="rotate(-90 14 ' + (MT + plotH / 2) + ')">Score (%)</text>');

    if (n > 1) {
      const points = entries.map((e, i) => {
        return xPos(i) + ',' + yPos(percent(e.earned, e.total));
      }).join(' ');
      parts.push('<polyline points="' + points + '" class="pt-line"/>');

      const areaPoints = points + ' ' + xPos(n - 1) + ',' + yPos(0) + ' ' + xPos(0) + ',' + yPos(0);
      parts.push('<polygon points="' + areaPoints + '" class="pt-area"/>');
    }

    entries.forEach((e, i) => {
      const pct = percent(e.earned, e.total);
      const x = xPos(i);
      const y = yPos(pct);
      parts.push('<circle cx="' + x + '" cy="' + y + '" r="6" class="pt-dot"/>');
      parts.push('<text x="' + x + '" y="' + (MT + plotH + 22) + '" class="pt-xlabel">' + escapeHtml(shortLabel(e.pathname)) + '</text>');
      parts.push('<text x="' + x + '" y="' + (y - 12) + '" class="pt-pctlabel">' + Math.round(pct) + '%</text>');
    });

    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Linjediagram over score per øvingseksamen');
    svg.innerHTML = parts.join('');
  }

  /* ---------- card decoration ---------- */

  function decorateCards(entries) {
    const byFile = {};
    entries.forEach((e) => { byFile[filename(e.pathname)] = e; });

    document.querySelectorAll('.exam-card').forEach((card) => {
      const href = (card.getAttribute('href') || '').toLowerCase();
      const e = byFile[href];
      const existing = card.querySelector('.ec-progress');
      if (existing) existing.remove();
      if (!e) return;
      const pct = Math.round(percent(e.earned, e.total));
      const badge = document.createElement('div');
      badge.className = 'ec-progress';
      badge.innerHTML =
        '<div class="ec-progress-head">' +
          '<span class="ec-progress-label">Din score</span>' +
          '<span class="ec-progress-score">' + e.earned + ' / ' + e.total + ' (' + pct + '%)</span>' +
        '</div>' +
        '<div class="ec-progress-bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="ec-progress-meta">' + e.answered + ' av ' + e.questions + ' svart · ' + escapeHtml(relativeTime(e.updatedAt)) + '</div>';
      const cta = card.querySelector('.ec-cta');
      if (cta) card.insertBefore(badge, cta);
      else card.appendChild(badge);
    });
  }

  /* ---------- main render ---------- */

  function render() {
    const container = document.getElementById('progress-tracker');
    if (!container) return;
    const body = container.querySelector('.tracker-body');
    if (!body) return;

    const idx = loadIndex();
    const entries = Object.keys(idx)
      .map((k) => Object.assign({ pathname: k }, idx[k]))
      .sort((a, b) => sortKey(a.pathname) - sortKey(b.pathname));

    decorateCards(entries);

    if (!entries.length) {
      body.innerHTML =
        '<p class="tracker-empty">Ingen besvarelser registrert ennå. Start et sett og svar på minst én oppgave — score vises automatisk her.</p>';
      return;
    }

    const best = entries.reduce((a, e) => (percent(e.earned, e.total) > percent(a.earned, a.total) ? e : a), entries[0]);
    const avg = entries.reduce((sum, e) => sum + percent(e.earned, e.total), 0) / entries.length;
    const totalAnswered = entries.reduce((sum, e) => sum + e.answered, 0);
    const totalQuestions = entries.reduce((sum, e) => sum + e.questions, 0);

    const stats =
      '<div class="tracker-stats">' +
        '<div class="tstat"><div class="tstat-num">' + entries.length + '</div><div class="tstat-lbl">Sett startet</div></div>' +
        '<div class="tstat"><div class="tstat-num">' + Math.round(percent(best.earned, best.total)) + '%</div><div class="tstat-lbl">Beste resultat</div></div>' +
        '<div class="tstat"><div class="tstat-num">' + Math.round(avg) + '%</div><div class="tstat-lbl">Gjennomsnitt</div></div>' +
        '<div class="tstat"><div class="tstat-num">' + totalAnswered + ' / ' + totalQuestions + '</div><div class="tstat-lbl">Oppgaver besvart</div></div>' +
      '</div>';

    const chart =
      (entries.length >= 1 ?
        '<div class="tracker-chart-wrap"><svg class="tracker-chart" preserveAspectRatio="xMidYMid meet"></svg></div>'
        : '');

    const list =
      '<ul class="tracker-list">' +
        entries.map((e) => {
          const pct = Math.round(percent(e.earned, e.total));
          const href = (e.pathname.split('/').pop() || '#');
          return (
            '<li>' +
              '<a href="' + escapeHtml(href) + '">' +
                '<div class="tl-head">' +
                  '<span class="tl-num">' + escapeHtml(shortLabel(e.pathname)) + '</span>' +
                  '<span class="tl-title">' + escapeHtml(e.title || href) + '</span>' +
                  '<span class="tl-score">' + e.earned + ' / ' + e.total + ' <em>(' + pct + '%)</em></span>' +
                '</div>' +
                '<div class="tl-bar"><span style="width:' + pct + '%"></span></div>' +
                '<div class="tl-meta">' + e.answered + ' av ' + e.questions + ' svart · ' + e.fullyCorrect + ' helt riktig · ' + escapeHtml(relativeTime(e.updatedAt)) + '</div>' +
              '</a>' +
            '</li>'
          );
        }).join('') +
      '</ul>';

    const clearBtn = '<button type="button" class="tracker-clear">Tøm progresjons-oversikten</button>';

    body.innerHTML = stats + chart + list + clearBtn;

    const svg = body.querySelector('.tracker-chart');
    if (svg) renderChart(svg, entries);

    const btn = body.querySelector('.tracker-clear');
    if (btn) {
      btn.addEventListener('click', () => {
        if (!confirm('Slette progresjons-oversikten? Selve svarene i hvert sett består — bruk "Nullstill" inne i hvert sett for å fjerne dem.')) return;
        clearIndex();
        render();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
