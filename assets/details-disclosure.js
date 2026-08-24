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
    this.hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    this.desktopQuery = window.matchMedia('(min-width: 990px)');
    this.openOnHover = this.openOnHover.bind(this);
    this.closeOnLeave = this.closeOnLeave.bind(this);
    this.blockClickToggle = this.blockClickToggle.bind(this);
    this.onHoverModeChange = this.bindHoverBehavior.bind(this);

    this.bindHoverBehavior();
    this.hoverQuery.addEventListener('change', this.onHoverModeChange);
    this.desktopQuery.addEventListener('change', this.onHoverModeChange);
  }

  get hoverEnabled() {
    return this.hoverQuery.matches && this.desktopQuery.matches;
  }

  bindHoverBehavior() {
    const summary = this.mainDetailsToggle.querySelector('summary');
    this.removeEventListener('pointerenter', this.openOnHover);
    this.removeEventListener('pointerleave', this.closeOnLeave);
    summary.removeEventListener('click', this.blockClickToggle);

    if (!this.hoverEnabled) return;

    this.addEventListener('pointerenter', this.openOnHover);
    this.addEventListener('pointerleave', this.closeOnLeave);
    summary.addEventListener('click', this.blockClickToggle);
  }

  openOnHover() {
    if (!this.hoverEnabled) return;
    clearTimeout(this.closeTimer);
    this.closeSiblings();
    this.open();
  }

  closeOnLeave() {
    if (!this.hoverEnabled) return;
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
    if (!this.hoverEnabled) return;
    if (this.mainDetailsToggle.hasAttribute('open') && event.detail > 0) {
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
