/* ============================================================
   gallery — filtry kategorii + dostępny lightbox
   ============================================================ */
(function () {
  'use strict';

  var gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;

  var items = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-item'));

  /* ---------------------------------------- filtry */
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll('.gallery-filters button'));
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      filterBtns.forEach(function (other) {
        other.setAttribute('aria-pressed', other === btn ? 'true' : 'false');
      });
      items.forEach(function (item) {
        var show = filter === 'all' || item.getAttribute('data-cat') === filter;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------------------------------------- lightbox */
  var lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  var lbImg = lightbox.querySelector('[data-lb-img]');
  var lbCat = lightbox.querySelector('[data-lb-cat]');
  var lbTitle = lightbox.querySelector('[data-lb-title]');
  var lbCounter = lightbox.querySelector('[data-lb-counter]');
  var closeBtn = lightbox.querySelector('[data-lb-close]');
  var prevBtn = lightbox.querySelector('[data-lb-prev]');
  var nextBtn = lightbox.querySelector('[data-lb-next]');

  var visibleItems = [];
  var current = 0;
  var lastFocused = null;

  var render = function () {
    var item = visibleItems[current];
    var img = item.querySelector('img');
    var cat = item.querySelector('.gallery-card__cat');
    var title = item.querySelector('.gallery-card__title');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCat.textContent = cat ? cat.textContent : '';
    lbTitle.textContent = title ? title.textContent : '';
    lbCounter.textContent = (current + 1) + ' / ' + visibleItems.length;
  };

  var onKeydown = function (e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowRight') { step(1); return; }
    if (e.key === 'ArrowLeft') { step(-1); return; }
    if (e.key !== 'Tab') return;
    var focusables = [closeBtn, prevBtn, nextBtn];
    var idx = focusables.indexOf(document.activeElement);
    if (e.shiftKey && (idx === 0 || idx === -1)) {
      e.preventDefault(); nextBtn.focus();
    } else if (!e.shiftKey && idx === focusables.length - 1) {
      e.preventDefault(); closeBtn.focus();
    }
  };

  var open = function (item) {
    visibleItems = items.filter(function (it) { return !it.classList.contains('is-hidden'); });
    current = Math.max(0, visibleItems.indexOf(item));
    lastFocused = document.activeElement;
    render();
    lightbox.hidden = false;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  };

  var close = function () {
    lightbox.classList.remove('is-open');
    lightbox.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused) lastFocused.focus();
  };

  var step = function (dir) {
    current = (current + dir + visibleItems.length) % visibleItems.length;
    render();
  };

  items.forEach(function (item) {
    var card = item.querySelector('.gallery-card');
    if (card) card.addEventListener('click', function () { open(item); });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () { step(-1); });
  nextBtn.addEventListener('click', function () { step(1); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
})();
