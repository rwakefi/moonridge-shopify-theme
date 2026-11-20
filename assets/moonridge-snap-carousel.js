/* Moonridge snap carousel: native scroll + scroll-snap. Arrows, dots and mouse drag only. */
(function () {
  if (window.MoonridgeSnapCarousel) return;
  window.MoonridgeSnapCarousel = true;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

  function initSnap(root) {
    if (root.dataset.mrSnapReady) return;
    var viewport = root.querySelector('.mr-snap__viewport');
    var track = root.querySelector('.mr-snap__track');
    if (!viewport || !track) return;
    root.dataset.mrSnapReady = 'true';

    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var dotsWrap = root.querySelector('[data-dots]');
    var dotClass = dotsWrap ? dotsWrap.getAttribute('data-dot-class') || 'mr-snap__dot' : '';
    var dots = [];
    var ticking = false;

    function gap() {
      var value = parseFloat(window.getComputedStyle(track).columnGap);
      return isNaN(value) ? 0 : value;
    }
    function pageSize() { return viewport.clientWidth + gap(); }
    function maxScroll() { return Math.max(0, viewport.scrollWidth - viewport.clientWidth); }
    function pageCount() {
      return Math.max(1, Math.ceil((viewport.scrollWidth + gap()) / pageSize() - 0.02));
    }
    function currentPage() {
      if (viewport.scrollLeft >= maxScroll() - 2) return pageCount() - 1;
      return Math.round(viewport.scrollLeft / pageSize());
    }
    function scrollToLeft(left) {
      var target = Math.max(0, Math.min(maxScroll(), left));
      viewport.scrollTo({ left: target, behavior: reduceMotion && reduceMotion.matches ? 'auto' : 'smooth' });
    }
    function goToPage(page) { scrollToLeft(page * pageSize()); }
    function step(direction, from) {
      var origin = typeof from === 'number' ? from : viewport.scrollLeft;
      var size = pageSize();
      var page = direction > 0 ? Math.floor((origin + 2) / size) + 1 : Math.ceil((origin - 2) / size) - 1;
      goToPage(page);
    }

    function buildDots() {
      if (!dotsWrap) return;
      var count = pageCount();
      if (count === dots.length) return;
      dotsWrap.innerHTML = '';
      dots = [];
      if (count < 2) return;
      for (var i = 0; i < count; i++) {
        (function (index) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = dotClass;
          dot.setAttribute('aria-label', 'Go to page ' + (index + 1));
          dot.addEventListener('click', function () { goToPage(index); });
          dotsWrap.appendChild(dot);
          dots.push(dot);
        })(i);
      }
    }

    function update() {
      ticking = false;
      var max = maxScroll();
      root.classList.toggle('mr-snap--static', max <= 2);
      if (prev) prev.disabled = viewport.scrollLeft <= 2;
      if (next) next.disabled = viewport.scrollLeft >= max - 2;
      if (dots.length) {
        var page = currentPage();
        dots.forEach(function (dot, index) {
          dot.classList.toggle('active', index === page);
          if (index === page) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
    }
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }
    function refresh() { buildDots(); update(); }

    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
    viewport.addEventListener('scroll', requestUpdate, { passive: true });

    if ('ResizeObserver' in window) {
      new ResizeObserver(refresh).observe(viewport);
    } else {
      window.addEventListener('resize', refresh);
    }

    /* Mouse drag (desktop). Touch and trackpad use native scrolling. */
    var drag = null;
    var suppressClick = false;
    var settleTimer = null;

    function endDrag() {
      if (!drag) return;
      var state = drag;
      drag = null;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
      if (!state.moved) return;
      suppressClick = true;
      window.setTimeout(function () { suppressClick = false; }, 0);
      var travelled = viewport.scrollLeft - state.left;
      if (Math.abs(travelled) > 60) step(travelled > 0 ? 1 : -1, state.left);
      else scrollToLeft(state.left);
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(function () {
        viewport.classList.remove('is-dragging');
      }, 450);
    }
    function onMove(event) {
      if (!drag) return;
      var dx = event.clientX - drag.x;
      if (!drag.moved) {
        if (Math.abs(dx) < 6) return;
        drag.moved = true;
        window.clearTimeout(settleTimer);
        viewport.classList.add('is-dragging');
      }
      viewport.scrollLeft = drag.left - dx;
    }
    viewport.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      if (maxScroll() <= 2) return;
      drag = { x: event.clientX, left: viewport.scrollLeft, moved: false };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
    });
    viewport.addEventListener('dragstart', function (event) { event.preventDefault(); });
    viewport.addEventListener('click', function (event) {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
    }, true);

    refresh();
  }

  function initAll(scope) {
    (scope || document).querySelectorAll('[data-mr-snap]').forEach(initSnap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAll(); });
  } else {
    initAll();
  }
  document.addEventListener('shopify:section:load', function (event) { initAll(event.target); });
})();
