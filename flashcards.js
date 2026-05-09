(function () {
  'use strict';

  function initDeck(deck) {
    var cards = Array.prototype.slice.call(deck.querySelectorAll('.flashcard'));
    if (!cards.length) {
      deck.insertAdjacentHTML('beforeend',
        '<div class="flashcard-empty">Flashcard-kortene legges inn etter hvert som kapittelet fylles ut.</div>');
      return;
    }

    var order = cards.map(function (_, i) { return i; });
    var idx = 0;
    var totalEl = deck.querySelector('[data-fc-total]');
    var curEl = deck.querySelector('[data-fc-current]');
    if (totalEl) totalEl.textContent = String(cards.length);

    function show(i) {
      cards.forEach(function (c) { c.style.display = 'none'; });
      var actual = order[i];
      var card = cards[actual];
      card.style.display = '';
      var inner = card.querySelector('.flashcard__inner');
      if (inner) inner.classList.remove('is-flipped');
      // Reset MC state
      card.querySelectorAll('.fc-opts li').forEach(function (li) {
        li.classList.remove('opt-correct', 'opt-wrong', 'locked');
      });
      if (curEl) curEl.textContent = String(i + 1);
    }

    function flipCurrent() {
      var card = cards[order[idx]];
      var inner = card.querySelector('.flashcard__inner');
      if (inner) inner.classList.toggle('is-flipped');
    }

    function next() { idx = (idx + 1) % cards.length; show(idx); }
    function prev() { idx = (idx - 1 + cards.length) % cards.length; show(idx); }
    function shuffle() {
      // Fisher-Yates on order
      for (var i = order.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
      }
      idx = 0; show(idx);
    }
    function reset() {
      order = cards.map(function (_, i) { return i; });
      idx = 0; show(idx);
    }

    // Click + keyboard on inner to flip
    cards.forEach(function (card) {
      var inner = card.querySelector('.flashcard__inner');
      if (!inner) return;
      inner.setAttribute('tabindex', '0');
      inner.setAttribute('role', 'button');
      inner.addEventListener('click', function (e) {
        // Don't flip when a MC opt was clicked — that handler manages flipping.
        if (e.target.closest('.fc-opts li')) return;
        flipCurrent();
      });
      inner.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          flipCurrent();
        }
      });
    });

    // MC support on the front of each card
    cards.forEach(function (card) {
      var opts = card.querySelectorAll('.fc-opts li');
      var correctSpan = card.querySelector('.fc-correct');
      if (!opts.length || !correctSpan) return;
      var match = correctSpan.textContent.match(/[A-DA-Z]/);
      var correctLetter = match ? match[0].toUpperCase() : null;
      opts.forEach(function (li) {
        var letterEl = li.querySelector('.opt-label');
        var letter = letterEl ? letterEl.textContent.trim().toUpperCase() : '';
        li.addEventListener('click', function (e) {
          e.stopPropagation();
          if (li.classList.contains('locked')) return;
          if (letter === correctLetter) {
            li.classList.add('opt-correct');
            opts.forEach(function (o) { o.classList.add('locked'); });
            setTimeout(function () {
              var inner = card.querySelector('.flashcard__inner');
              if (inner) inner.classList.add('is-flipped');
            }, 350);
          } else {
            li.classList.add('opt-wrong', 'locked');
          }
        });
      });
    });

    deck.querySelectorAll('[data-fc-next]').forEach(function (b) { b.addEventListener('click', next); });
    deck.querySelectorAll('[data-fc-prev]').forEach(function (b) { b.addEventListener('click', prev); });
    deck.querySelectorAll('[data-fc-shuffle]').forEach(function (b) { b.addEventListener('click', shuffle); });
    deck.querySelectorAll('[data-fc-reset]').forEach(function (b) { b.addEventListener('click', reset); });

    // Global keyboard while deck is in viewport
    document.addEventListener('keydown', function (e) {
      if (!isInViewport(deck)) return;
      var t = e.target;
      var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (typing) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === 's' || e.key === 'S') { shuffle(); }
      else if (e.key === 'r' || e.key === 'R') { reset(); }
    });

    show(idx);
  }

  function isInViewport(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  document.querySelectorAll('[data-flashcards]').forEach(initDeck);
})();
