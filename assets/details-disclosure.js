class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
    this.desktopQuery = window.matchMedia('(min-width: 990px)');
    this.openOnHover = this.openOnHover.bind(this);
    this.closeOnLeave = this.closeOnLeave.bind(this);
    this.blockClickToggle = this.blockClickToggle.bind(this);

    this.addEventListener('pointerenter', this.openOnHover);
    this.addEventListener('pointerleave', this.closeOnLeave);
    this.mainDetailsToggle.querySelector('summary').addEventListener('click', this.blockClickToggle);
  }

  isMouseDesktop(event) {
    if (!this.desktopQuery.matches) return false;
    if (event && event.pointerType === 'touch') return false;
    return true;
  }

  openOnHover(event) {
    if (!this.isMouseDesktop(event)) return;
    clearTimeout(this.closeTimer);
    this.closeSiblings();
    this.open();
  }

  closeOnLeave(event) {
    if (!this.isMouseDesktop(event)) return;
    clearTimeout(this.closeTimer);
    this.closeTimer = setTimeout(() => this.close(), 120);
  }

  closeSiblings() {
    document.querySelectorAll('header-menu').forEach((menu) => {
      if (menu !== this) {
        clearTimeout(menu.closeTimer);
        menu.close();
      }
    });
  }

  open() {
    this.mainDetailsToggle.setAttribute('open', '');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', true);
  }

  blockClickToggle(event) {
    if (!this.desktopQuery.matches) return;
    if (event.pointerType === 'touch') return;
    if (!(event.detail > 0)) return;

    const href = this.mainDetailsToggle.querySelector('summary')?.getAttribute('data-href');
    if (href) {
      event.preventDefault();
      window.location.assign(href);
      return;
    }

    if (this.mainDetailsToggle.hasAttribute('open')) {
      event.preventDefault();
    }
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);
