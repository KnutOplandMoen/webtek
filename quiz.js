(function () {
  'use strict';

  // ---------- Reveal-quiz ----------

  document.querySelectorAll('.quiz[data-quiz]').forEach(function (quiz) {
    var btn = quiz.querySelector('.reveal-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      quiz.classList.add('revealed');
      btn.disabled = true;
    });
  });

  // ---------- MCQ ----------

  document.querySelectorAll('.quiz.mcq').forEach(function (quiz) {
    var opts = quiz.querySelectorAll('.mcq-opt');
    opts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (quiz.classList.contains('solved')) return;
        var correct = opt.getAttribute('data-correct') === '1';
        if (correct) {
          opt.classList.add('correct');
          opt.classList.add('locked');
          quiz.classList.add('solved');
          opts.forEach(function (o) { o.classList.add('locked'); });
        } else {
          opt.classList.add('wrong');
          opt.classList.add('locked');
        }
      });
    });
  });

  // ---------- Animated SVG step figures ----------

  document.querySelectorAll('.fig-anim[data-anim]').forEach(function (fig) {
    var max = parseInt(fig.getAttribute('data-max-step'), 10) || 1;
    var step = 0;
    var stepLabel = fig.querySelector('.step-label');
    var textBox = fig.querySelector('.fig-anim-text');
    var texts = {};
    fig.querySelectorAll('[data-text-on]').forEach(function (el) {
      var on = el.getAttribute('data-text-on').split(',').map(function (s) { return s.trim(); });
      on.forEach(function (n) { texts[n] = el.textContent.trim(); });
    });

    function render() {
      fig.setAttribute('data-step', String(step));
      fig.querySelectorAll('[data-show-on]').forEach(function (el) {
        var on = el.getAttribute('data-show-on').split(',').map(function (s) { return s.trim(); });
        var visible = on.indexOf(String(step)) !== -1;
        el.style.opacity = visible ? '1' : '0';
        el.style.pointerEvents = visible ? '' : 'none';
      });
      if (stepLabel) stepLabel.textContent = 'Steg ' + step + ' / ' + max;
      if (textBox) textBox.textContent = texts[String(step)] || '';
    }

    fig.querySelectorAll('[data-step-prev]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (step > 0) { step--; render(); }
      });
    });
    fig.querySelectorAll('[data-step-next]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (step < max) { step++; render(); }
      });
    });
    fig.querySelectorAll('[data-step-reset]').forEach(function (b) {
      b.addEventListener('click', function () { step = 0; render(); });
    });
    fig.querySelectorAll('[data-step-set]').forEach(function (b) {
      b.addEventListener('click', function () {
        step = parseInt(b.getAttribute('data-step-set'), 10) || 0;
        render();
      });
    });

    render();
  });

  // ---------- TryIt sandbox ----------

  document.querySelectorAll('.tryit').forEach(function (box) {
    var btn = box.querySelector('.tryit-btn');
    var ta = box.querySelector('textarea');
    var out = box.querySelector('.tryit-out');
    var fnName = box.getAttribute('data-check');
    if (!btn || !ta || !out || !fnName) return;
    btn.addEventListener('click', function () {
      var fn = window[fnName];
      if (typeof fn !== 'function') {
        out.classList.add('shown', 'err');
        out.textContent = 'Ingen sjekkfunksjon tilgjengelig: ' + fnName;
        return;
      }
      var res;
      try { res = fn(ta.value); }
      catch (e) {
        out.classList.add('shown', 'err');
        out.textContent = 'Feil: ' + (e && e.message ? e.message : e);
        return;
      }
      out.classList.add('shown');
      if (res && res.ok) {
        out.classList.remove('err');
      } else {
        out.classList.add('err');
      }
      out.textContent = (res && res.msg) ? res.msg : (res && res.ok ? 'OK' : 'Ikke helt riktig');
    });
  });
})();
