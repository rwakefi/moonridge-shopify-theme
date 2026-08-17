(function () {
  if (customElements.get('he-product-carousel')) return;

  class HeProductCarousel extends HTMLElement {
    constructor() {
      super();
      this.currentPage = 0;
      this.currentIndex = 0;
      this.productsPerView = Number(this.dataset.perView) || 4;
      this.productsPerViewTablet = Number(this.dataset.perViewTablet) || 3;
      this.productGap = Number(this.dataset.gap) || 20;
      this.currentProductsPerView = this.productsPerView;
      this.totalPages = 1;
      this.isTransitioning = false;
      this.touchStartX = null;
      this.touchDeltaX = 0;
      this.isDragging = false;
      this.baseOffset = 0;
    }

    connectedCallback() {
      this.track = this.querySelector('[data-track]');
      this.trackContainer = this.querySelector('[data-track-wrap]');
      this.prevButton = this.querySelector('[data-prev]');
      this.nextButton = this.querySelector('[data-next]');
      this.dotsContainer = this.querySelector('[data-dots]');
      this.controls = this.querySelector('[data-controls]');

      if (!this.track) return;

      this.slides = Array.from(this.track.children);
      this.totalSlides = this.slides.length;

      this.refreshLayout(false);
      requestAnimationFrame(() => {
        this.updateSlideDimensions();
        this.updateCarousel(false);
      });

      if (this.prevButton) {
        this.prevButton.addEventListener('click', () => this.prev());
      }
      if (this.nextButton) {
        this.nextButton.addEventListener('click', () => this.next());
      }

      this.setupPointerEvents();
      this._lastDesktopMode = this.isDesktopMode();

      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const wasDesktop = this._lastDesktopMode;
          const isDesktop = this.isDesktopMode();

          if (wasDesktop !== isDesktop) {
            const perView = this.currentProductsPerView || 4;
            if (isDesktop) {
              this.currentIndex = this.pageToIndex(this.currentPage);
            } else {
              this.currentPage = Math.floor(this.currentIndex / perView);
            }
          }

          this._lastDesktopMode = isDesktop;
          this.refreshLayout(false);
        }, 120);
      });
    }

    isDesktopMode() {
      return window.innerWidth > 749;
    }

    getSlidesPerView() {
      if (window.innerWidth <= 749) return 4;
      if (window.innerWidth >= 990) return this.productsPerView;
      if (window.innerWidth >= 750) return this.productsPerViewTablet;
      return 2;
    }

    getTrackGap() {
      if (!this.isDesktopMode()) return this.productGap;
      const gap = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--grid-desktop-horizontal-spacing')
      );
      return Number.isFinite(gap) ? gap : this.productGap;
    }

    refreshLayout(animate) {
      this.updateProductsPerView();
      this.updateSlideDimensions();
      this.createDots();
      this.updateCarousel(animate);
    }

    updateProductsPerView() {
      const width = window.innerWidth;
      if (width <= 749) {
        this.currentProductsPerView = 4;
      } else if (width <= 989) {
        this.currentProductsPerView = this.productsPerViewTablet;
      } else {
        this.currentProductsPerView = this.productsPerView;
      }
      this.totalPages = Math.max(1, Math.ceil(this.totalSlides / this.currentProductsPerView));
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }
      this.currentIndex = this.pageToIndex(this.currentPage);
      this.classList.toggle('is-single', this.totalPages <= 1);
    }

    maxStartIndex() {
      return Math.max(0, this.totalSlides - this.currentProductsPerView);
    }

    pageToIndex(page) {
      return Math.min(page * this.currentProductsPerView, this.maxStartIndex());
    }

    getSlideStep() {
      if (!this.slides.length) return 0;
      return this.slides[0].offsetWidth + this.getTrackGap();
    }

    updateSlideDimensions() {
      if (!this.isDesktopMode() || !this.trackContainer || !this.slides.length) {
        if (this.track) this.track.style.removeProperty('--he-slide-width');
        this.slides.forEach(function (slide) {
          slide.style.removeProperty('flex-basis');
          slide.style.removeProperty('max-width');
          slide.style.removeProperty('width');
        });
        return;
      }

      const slidesPerView = this.getSlidesPerView();
      const containerWidth = this.trackContainer.offsetWidth;
      const gap = this.getTrackGap();
      const slideWidth = (containerWidth - gap * (slidesPerView - 1)) / slidesPerView;
      const slideWidthPx = Math.max(slideWidth, 0) + 'px';

      this.track.style.setProperty('--he-slide-width', slideWidthPx);
      this.slides.forEach(function (slide) {
        slide.style.flexBasis = slideWidthPx;
        slide.style.maxWidth = slideWidthPx;
        slide.style.width = slideWidthPx;
      });
    }

    calcBaseOffset() {
      if (!this.isDesktopMode() || !this.slides.length) {
        this.baseOffset = 0;
        return;
      }
      this.baseOffset = -(this.currentIndex * this.getSlideStep());
    }

    createDots() {
      if (!this.dotsContainer) return;
      this.dotsContainer.innerHTML = '';

      for (let i = 0; i < this.totalPages; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'he-shop__dot';
        dot.setAttribute('aria-label', 'Hats page ' + (i + 1));
        dot.addEventListener('click', () => this.goToPage(i));
        this.dotsContainer.appendChild(dot);
      }

      this.updateDots();
    }

    updateDots() {
      if (!this.dotsContainer) return;
      const dots = this.dotsContainer.querySelectorAll('.he-shop__dot');
      const activeIndex = this.currentPage;
      dots.forEach(function (dot, index) {
        dot.classList.toggle('is-active', index === activeIndex);
        dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
      });
    }

    updateCarousel(animate) {
      if (!this.track) return;
      if (animate === undefined) animate = true;

      const isMobile = !this.isDesktopMode();

      if (this.currentPage < 0) this.currentPage = 0;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }

      if (isMobile) {
        this.slides.forEach((slide, index) => {
          const pageIndex = Math.floor(index / this.currentProductsPerView);
          slide.style.display = pageIndex === this.currentPage ? 'block' : 'none';
        });
        this.baseOffset = 0;
        this.track.style.transition = animate ? 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        this.track.style.transform = 'translateX(0px)';
      } else {
        this.currentIndex = this.pageToIndex(this.currentPage);
        this.slides.forEach(function (slide) {
          slide.style.display = 'block';
        });
        this.calcBaseOffset();
        this.track.style.transition = animate
          ? 'transform 0.35s cubic-bezier(0.645, 0.045, 0.355, 1)'
          : 'none';
        this.track.style.transform = 'translateX(' + this.baseOffset + 'px)';
      }

      if (this.prevButton) this.prevButton.disabled = this.currentPage === 0;
      if (this.nextButton) this.nextButton.disabled = this.currentPage >= this.totalPages - 1;

      this.updateDots();

      if (animate) {
        this.track.classList.remove('is-animating');
        void this.track.offsetWidth;
        this.track.classList.add('is-animating');
      }

      setTimeout(() => {
        this.isTransitioning = false;
      }, animate ? 360 : 0);
    }

    prev() {
      if (this.isTransitioning || this.currentPage <= 0) return;
      this.isTransitioning = true;
      this.currentPage--;
      this.currentIndex = this.pageToIndex(this.currentPage);
      this.updateCarousel(true);
    }

    next() {
      if (this.isTransitioning || this.currentPage >= this.totalPages - 1) return;
      this.isTransitioning = true;
      this.currentPage++;
      this.currentIndex = this.pageToIndex(this.currentPage);
      this.updateCarousel(true);
    }

    goToPage(page) {
      if (page < 0 || page >= this.totalPages || page === this.currentPage || this.isTransitioning) {
        return;
      }
      this.isTransitioning = true;
      this.currentPage = page;
      this.currentIndex = this.pageToIndex(page);
      this.updateCarousel(true);
    }

    setupPointerEvents() {
      const area = this.trackContainer || this.track;
      if (!area) return;

      area.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true });
      area.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: true });
      area.addEventListener('touchend', () => this.onPointerEnd());
      area.addEventListener('mousedown', (e) => this.onMouseDown(e));
    }

    onTouchStart(e) {
      if (!e.touches || e.touches.length === 0 || this.isTransitioning) return;
      this.startDrag(e.touches[0].clientX);
    }

    onTouchMove(e) {
      if (!this.isDragging || !e.touches || e.touches.length === 0) return;
      this.continueDrag(e.touches[0].clientX);
    }

    onMouseDown(e) {
      if (this.isTransitioning) return;
      this.startDrag(e.clientX);

      const onMouseMove = (ev) => {
        if (!this.isDragging) return;
        this.continueDrag(ev.clientX);
      };
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        this.onPointerEnd();
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    startDrag(clientX) {
      this.isDragging = true;
      this.touchStartX = clientX;
      this.touchDeltaX = 0;
      this.calcBaseOffset();
      if (this.track) this.track.style.transition = 'none';
    }

    continueDrag(clientX) {
      if (!this.isDragging || this.touchStartX === null || !this.track) return;
      this.touchDeltaX = clientX - this.touchStartX;
      const dragOffset = (this.isDesktopMode() ? this.baseOffset : 0) + this.touchDeltaX;
      this.track.style.transform = 'translateX(' + dragOffset + 'px)';
    }

    onPointerEnd() {
      if (!this.isDragging) return;

      const threshold = 60;
      const delta = this.touchDeltaX;

      this.isDragging = false;
      this.touchStartX = null;
      this.touchDeltaX = 0;

      if (Math.abs(delta) > threshold && !this.isTransitioning) {
        if (delta < 0) this.next();
        else this.prev();
      } else {
        this.updateCarousel(true);
      }
    }
  }

  customElements.define('he-product-carousel', HeProductCarousel);
})();
