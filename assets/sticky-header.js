class StickyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.header = document.querySelector('.section-header');
    this.headerLock = document.querySelector('.site-header-lock');
    this.headerIsAlwaysSticky =
      this.getAttribute('data-sticky-type') === 'always' ||
      this.getAttribute('data-sticky-type') === 'reduce-logo-size' ||
      Boolean(this.headerLock);
    this.headerBounds = {};

    this.setHeaderHeight();

    this.onResizeHandler = this.setHeaderHeight.bind(this);
    window.matchMedia('(max-width: 990px)').addEventListener(
      'change',
      this.onResizeHandler
    );
    window.addEventListener('resize', this.onResizeHandler);

    if (this.headerIsAlwaysSticky) {
      this.header.classList.add('shopify-section-header-sticky');
    }

    this.currentScrollTop = 0;
    this.preventReveal = false;
    this.predictiveSearch = this.querySelector('predictive-search');

    this.onScrollHandler = this.onScroll.bind(this);
    this.hideHeaderOnScrollUp = () => (this.preventReveal = true);

    this.addEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
    window.addEventListener('scroll', this.onScrollHandler, false);

    this.createObserver();
  }

  setHeaderHeight() {
    const lock = this.headerLock || this.header;
    document.documentElement.style.setProperty(
      '--header-height',
      `${lock.offsetHeight}px`
    );
  }

  disconnectedCallback() {
    this.removeEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
    window.removeEventListener('scroll', this.onScrollHandler);
    if (this.onResizeHandler) {
      window.removeEventListener('resize', this.onResizeHandler);
    }
  }

  createObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
      this.headerBounds = entries[0].intersectionRect;
      obs.disconnect();
    });

    observer.observe(this.headerLock || this.header);
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (this.predictiveSearch && this.predictiveSearch.isOpen) return;

    if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
      this.header.classList.add('scrolled-past-header');
      if (this.preventHide) return;
      requestAnimationFrame(this.hide.bind(this));
    } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
      this.header.classList.add('scrolled-past-header');
      if (!this.preventReveal) {
        requestAnimationFrame(this.reveal.bind(this));
      } else {
        window.clearTimeout(this.isScrolling);

        this.isScrolling = setTimeout(() => {
          this.preventReveal = false;
        }, 66);

        requestAnimationFrame(this.hide.bind(this));
      }
    } else if (scrollTop <= this.headerBounds.top) {
      this.header.classList.remove('scrolled-past-header');
      requestAnimationFrame(this.reset.bind(this));
    }

    this.currentScrollTop = scrollTop;
  }

  hide() {
    if (this.headerIsAlwaysSticky) return;
    this.header.classList.add(
      'shopify-section-header-hidden',
      'shopify-section-header-sticky'
    );
    this.closeMenuDisclosure();
    this.closeSearchModal();
  }

  reveal() {
    if (this.headerIsAlwaysSticky) return;
    this.header.classList.add('shopify-section-header-sticky', 'animate');
    this.header.classList.remove('shopify-section-header-hidden');
  }

  reset() {
    if (this.headerIsAlwaysSticky) return;
    this.header.classList.remove(
      'shopify-section-header-hidden',
      'shopify-section-header-sticky',
      'animate'
    );
  }

  closeMenuDisclosure() {
    this.disclosures = this.disclosures || this.header.querySelectorAll('header-menu');
    this.disclosures.forEach(disclosure => disclosure.close());
  }

  closeSearchModal() {
    this.searchModal = this.searchModal || this.header.querySelector('details-modal');
    if (this.searchModal) this.searchModal.close(false);
  }
}

customElements.define('sticky-header', StickyHeader);
