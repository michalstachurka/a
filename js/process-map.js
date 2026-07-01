/* ============================================================
   process-map — interaktywna mapa remontu (strona główna)
   Desktop: pozioma oś z panelami (klik + klawiatura).
   Mobile: pionowy accordion.
   ============================================================ */
(function () {
  'use strict';

  var map = document.querySelector('[data-process-map]');
  if (!map) return;

  /* ---------------------------------------- pozioma oś (tabs) */
  var tabs = Array.prototype.slice.call(map.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(map.querySelectorAll('[role="tabpanel"]'));
  var progress = map.querySelector('.process-map__progress');

  var activate = function (index, focus) {
    tabs.forEach(function (tab, i) {
      var selected = i === index;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(function (panel, i) {
      panel.hidden = i !== index;
      panel.classList.remove('is-entering');
    });
    // restart animacji wejścia panelu
    void panels[index].offsetWidth;
    panels[index].classList.add('is-entering');

    if (progress) {
      map.style.setProperty('--progress', ((index + 0.5) / tabs.length).toFixed(3));
    }
    if (focus) tabs[index].focus();
  };

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activate(i, false); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); activate(next, true); }
    });
  });

  if (tabs.length) map.style.setProperty('--progress', (0.5 / tabs.length).toFixed(3));

  /* ---------------------------------------- accordion (mobile) */
  var accBtns = Array.prototype.slice.call(map.querySelectorAll('.process-acc__btn'));
  accBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      accBtns.forEach(function (other) { other.setAttribute('aria-expanded', 'false'); });
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
})();
