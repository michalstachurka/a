/* ============================================================
   main — menu mobilne, reveal, scrollspy oferty, linia procesu
   ============================================================ */
(function () {
  'use strict';

  var PREFERS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------- rok w stopce */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------------------------------------- menu mobilne */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    var closeBtn = menu.querySelector('.mobile-menu__close');
    var focusablesSel = 'a[href], button:not([disabled])';
    var lastFocused = null;

    var openMenu = function () {
      lastFocused = document.activeElement;
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      var first = menu.querySelector(focusablesSel);
      if (first) first.focus();
      document.addEventListener('keydown', onKeydown);
    };

    var closeMenu = function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
      if (lastFocused) lastFocused.focus();
    };

    var onKeydown = function (e) {
      if (e.key === 'Escape') { closeMenu(); return; }
      if (e.key !== 'Tab') return;
      var items = Array.prototype.slice.call(menu.querySelectorAll(focusablesSel));
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu(); else openMenu();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }

  /* ---------------------------------------- reveal przy scrollu */
  var revealables = document.querySelectorAll('[data-reveal], .media-reveal, .concern-pair, [data-stage]');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------- linia pionowej mapy (proces) */
  var lineWrap = document.querySelector('[data-process-line]');
  if (lineWrap && !PREFERS_REDUCED) {
    var ticking = false;
    var updateLine = function () {
      ticking = false;
      var rect = lineWrap.getBoundingClientRect();
      var vh = window.innerHeight;
      // postęp: ile kontenera przewinęło się przez 70% wysokości okna
      var total = rect.height;
      var passed = Math.min(Math.max(vh * 0.7 - rect.top, 0), total);
      lineWrap.style.setProperty('--line-progress', (passed / total).toFixed(3));
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateLine); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateLine();
  } else if (lineWrap) {
    lineWrap.style.setProperty('--line-progress', '1');
  }

  /* ---------------------------------------- scrollspy subnav oferty */
  var subnav = document.querySelector('[data-offer-subnav]');
  if (subnav && 'IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(subnav.querySelectorAll('a[href^="#"]'));
    var byId = {};
    links.forEach(function (link) { byId[link.getAttribute('href').slice(1)] = link; });

    var setActive = function (id) {
      links.forEach(function (link) { link.classList.remove('is-active'); });
      if (byId[id]) byId[id].classList.add('is-active');
    };

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }
})();
