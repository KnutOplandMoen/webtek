/* ============================================================
   IT2805 — øvingseksamen
   Fire oppgavetyper, alle interaktive:
     .exam-q--mc      — klikk på alternativ
     .exam-q--output  — skriv predikert output, sjekk mot fasit
     .exam-q--essay   — skriv prosa, egenvurder mot rubrikk
     .exam-q--code    — skriv kode i tre felt, kjør i sandbox-iframe,
                        egenvurder mot referanseløsning

   Felles for alle: poengtelleren nederst til høyre summerer
   oppnådde poeng × maks-poeng. Egenvurderte oppgaver bruker
   data-grade-multiplikator (1.0 / 0.66 / 0.33 / 0).
   ============================================================ */

(function () {
  'use strict';

  const ANSWER_RE = /Riktig svar:\s*([A-D])/i;

  const state = {
    totalPoints: 0,
    earnedPoints: 0,
    questions: 0,
    answered: 0,
    fullyCorrect: 0,
  };

  /* ---------- utilities ---------- */

  function pointsForQuestion(q) {
    const node = q.querySelector('.exam-q__points');
    const text = node ? node.textContent : '';
    const m = text.match(/(\d+(?:[.,]\d+)?)/);
    return m ? parseFloat(m[1].replace(',', '.')) : 0;
  }

  function buildScoreboard() {
    const el = document.createElement('div');
    el.className = 'exam-score';
    el.innerHTML = '<span class="score-text"></span>';
    document.body.appendChild(el);
    return el;
  }

  function refreshScoreboard(board) {
    if (!board) return;
    board.classList.add('is-active');
    const text = board.querySelector('.score-text');
    const earned = Math.round(state.earnedPoints * 10) / 10;
    text.innerHTML =
      '<strong>' + earned + '</strong>' +
      ' / ' + state.totalPoints + ' poeng' +
      ' &middot; ' + state.answered + ' av ' + state.questions + ' besvart';
  }

  function openFasit(q) {
    const details = q.querySelector('.fasit-details');
    if (details) details.open = true;
  }

  function hideSummary(q) {
    const summary = q.querySelector('.fasit-details > summary');
    if (summary) summary.classList.add('is-hidden');
  }

  /* ---------- MC ---------- */

  function correctMcIndex(q) {
    const node = q.querySelector('.fasit-correct');
    if (!node) return -1;
    const match = node.textContent.match(ANSWER_RE);
    if (!match) return -1;
    return match[1].toUpperCase().charCodeAt(0) - 65;
  }

  function attachMc(q, board, points) {
    const correct = correctMcIndex(q);
    const options = Array.from(q.querySelectorAll('.exam-q__opts > li'));
    if (correct < 0 || correct >= options.length || !options.length) return;

    hideSummary(q);

    options.forEach((li, i) => {
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', 'Alternativ ' + String.fromCharCode(65 + i));

      const choose = () => {
        if (li.classList.contains('is-locked')) return;
        options.forEach((other, j) => {
          other.classList.add('is-locked');
          other.setAttribute('aria-disabled', 'true');
          other.removeAttribute('tabindex');
          if (j === correct) other.classList.add('is-correct');
          if (j === i && i !== correct) other.classList.add('is-wrong');
        });
        q.classList.add(i === correct ? 'is-answered' : 'is-answered-wrong');
        openFasit(q);
        state.answered += 1;
        if (i === correct) {
          state.earnedPoints += points;
          state.fullyCorrect += 1;
        }
        refreshScoreboard(board);
      };

      li.addEventListener('click', choose);
      li.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          choose();
        }
      });
    });
  }

  /* ---------- OUTPUT (find result of code) ---------- */

  function normalizeAnswer(s, strict) {
    let t = String(s == null ? '' : s).replace(/\r\n/g, '\n').trim();
    t = t.replace(/^['"`]+|['"`]+$/g, '');
    t = t.replace(/[ \t]+/g, ' ');
    if (!strict) t = t.toLowerCase();
    return t;
  }

  function attachOutput(q, board, points) {
    const fasit = q.querySelector('.fasit-correct');
    const input = q.querySelector('.exam-q__input');
    const button = q.querySelector('.exam-q__check');
    if (!fasit || !input || !button) return;

    hideSummary(q);

    const strict = fasit.getAttribute('data-answer-strict') === 'true';
    const primary = fasit.getAttribute('data-answer');
    if (primary === null) return;
    const altsRaw = fasit.getAttribute('data-answer-alts') || '';
    const accepted = [primary, ...altsRaw.split('|').filter(Boolean)]
      .map((a) => normalizeAnswer(a, strict));

    const submit = () => {
      if (input.disabled) return;
      const user = normalizeAnswer(input.value, strict);
      const ok = accepted.includes(user);
      input.disabled = true;
      button.disabled = true;
      input.classList.add(ok ? 'is-correct-input' : 'is-wrong-input');
      q.classList.add(ok ? 'is-answered' : 'is-answered-wrong');
      openFasit(q);
      state.answered += 1;
      if (ok) {
        state.earnedPoints += points;
        state.fullyCorrect += 1;
      }
      refreshScoreboard(board);
    };

    button.addEventListener('click', submit);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        submit();
      }
    });
  }

  /* ---------- SELF-GRADE (essay + code) ---------- */

  function attachSelfGrade(q, board, points) {
    const buttons = Array.from(q.querySelectorAll('.self-grade button[data-grade]'));
    if (!buttons.length) return;
    let used = false;
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (used) return;
        used = true;
        const grade = parseFloat(btn.getAttribute('data-grade')) || 0;
        const earned = points * grade;
        buttons.forEach((other) => { other.disabled = true; });
        btn.classList.add('is-chosen');
        q.classList.add(grade > 0 ? 'is-answered' : 'is-answered-wrong');
        state.answered += 1;
        state.earnedPoints += earned;
        if (grade >= 0.99) state.fullyCorrect += 1;
        refreshScoreboard(board);
      });
    });
  }

  /* ---------- ESSAY ---------- */

  function attachEssay(q, board, points) {
    const reveal = q.querySelector('.exam-q__reveal');
    const textarea = q.querySelector('.exam-q__textarea');
    if (!reveal) return;

    reveal.addEventListener('click', () => {
      if (textarea) textarea.disabled = true;
      reveal.disabled = true;
      reveal.textContent = 'Fasit vist — egenvurder under';
      openFasit(q);
    });

    attachSelfGrade(q, board, points);
  }

  /* ---------- CODE (editor + sandbox iframe) ---------- */

  function buildSrcdoc(html, css, js) {
    const errStyle = 'color:#a23b2a;font:13px monospace;background:#f0d9d3;' +
      'padding:8px;border-radius:4px;margin-top:8px;white-space:pre-wrap;';
    return (
      '<!doctype html>\n' +
      '<html><head><meta charset="utf-8"><style>\n' +
      css + '\n' +
      '</style></head><body>\n' +
      html + '\n' +
      '<script>\n' +
      'window.addEventListener("error", function (e) {\n' +
      '  var p = document.createElement("pre");\n' +
      '  p.style.cssText = ' + JSON.stringify(errStyle) + ';\n' +
      '  p.textContent = (e.message || e.error || "Error");\n' +
      '  document.body.appendChild(p);\n' +
      '});\n' +
      'try {\n' +
      js + '\n' +
      '} catch (e) {\n' +
      '  var p = document.createElement("pre");\n' +
      '  p.style.cssText = ' + JSON.stringify(errStyle) + ';\n' +
      '  p.textContent = (e && e.message) ? e.message : String(e);\n' +
      '  document.body.appendChild(p);\n' +
      '}\n' +
      '<\/script>\n' +
      '</body></html>'
    );
  }

  function attachTabIndent(textarea) {
    textarea.addEventListener('keydown', (ev) => {
      if (ev.key !== 'Tab' || ev.shiftKey) return;
      ev.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value =
        textarea.value.slice(0, start) +
        '  ' +
        textarea.value.slice(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    });
  }

  function attachCode(q, board, points) {
    const reveal = q.querySelector('.exam-q__reveal');
    const run = q.querySelector('.exam-q__run');
    const clear = q.querySelector('.exam-q__clear');
    const preview = q.querySelector('.code-preview');
    const htmlField = q.querySelector('.code-html');
    const cssField = q.querySelector('.code-css');
    const jsField = q.querySelector('.code-js');

    [htmlField, cssField, jsField].forEach((field) => {
      if (field) attachTabIndent(field);
    });

    if (preview) preview.classList.add('is-empty');

    if (run && preview) {
      run.addEventListener('click', () => {
        const html = htmlField ? htmlField.value : '';
        const css = cssField ? cssField.value : '';
        const js = jsField ? jsField.value : '';
        preview.classList.remove('is-empty');
        preview.srcdoc = buildSrcdoc(html, css, js);
      });
    }

    if (clear && preview) {
      clear.addEventListener('click', () => {
        preview.srcdoc = '';
        preview.classList.add('is-empty');
      });
    }

    if (reveal) {
      reveal.addEventListener('click', () => {
        reveal.disabled = true;
        reveal.textContent = 'Fasit vist — egenvurder under';
        openFasit(q);
      });
    }

    attachSelfGrade(q, board, points);
  }

  /* ---------- DISPATCH ---------- */

  function detectType(q) {
    if (q.classList.contains('exam-q--mc')) return 'mc';
    if (q.classList.contains('exam-q--output')) return 'output';
    if (q.classList.contains('exam-q--essay')) return 'essay';
    if (q.classList.contains('exam-q--code')) return 'code';
    if (q.querySelector('.exam-q__opts')) return 'mc';
    return null;
  }

  function init() {
    const questions = Array.from(document.querySelectorAll('.exam-q'));
    if (!questions.length) return;
    const board = buildScoreboard();

    questions.forEach((q) => {
      const type = detectType(q);
      const points = pointsForQuestion(q);
      state.questions += 1;
      state.totalPoints += points;

      switch (type) {
        case 'mc':     attachMc(q, board, points); break;
        case 'output': attachOutput(q, board, points); break;
        case 'essay':  attachEssay(q, board, points); break;
        case 'code':   attachCode(q, board, points); break;
      }
    });

    refreshScoreboard(board);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
