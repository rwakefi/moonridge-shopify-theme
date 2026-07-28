if (!customElements.get('hat-branding')) {
  customElements.define(
    'hat-branding',
    class HatBranding extends HTMLElement {
      constructor() {
        super();
        this.selection = null;
        this.zoomRatio = 2.4;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onZoomPointerMove = this.onZoomPointerMove.bind(this);
      }

      connectedCallback() {
        this.openButton = this.querySelector('[data-hat-branding-open]');
        this.openLabel = this.querySelector('[data-hat-branding-open-label]');
        this.status = this.querySelector('[data-hat-branding-status]');
        this.modal = this.querySelector('[data-hat-branding-modal]');
        this.dialog = this.querySelector('[data-hat-branding-dialog]');
        this.lettersInput = this.querySelector('[data-hat-branding-letters]');
        this.agreeInput = this.querySelector('[data-hat-branding-agree]');
        this.errorEl = this.querySelector('[data-hat-branding-error]');
        this.submitButton = this.querySelector('[data-hat-branding-submit]');
        this.previewFrame = this.querySelector('[data-hat-branding-zoom-trigger]');
        this.maxLetters = Number(this.dataset.maxLetters || 2);

        this.openButton?.addEventListener('click', () => this.open());
        this.querySelectorAll('[data-hat-branding-close]').forEach((el) => {
          el.addEventListener('click', () => this.close());
        });
        this.submitButton?.addEventListener('click', () => this.submit());
        this.lettersInput?.addEventListener('input', () => this.normalizeLetters());
        this.querySelectorAll('[data-hat-branding-location]').forEach((input) => {
          input.addEventListener('change', () => this.updatePreview());
          // Click covers re-selecting the already-checked option and some mobile label quirks.
          input.addEventListener('click', () => this.updatePreview());
        });
        this.querySelectorAll('.hat-branding-modal__location').forEach((label) => {
          label.addEventListener('click', () => {
            requestAnimationFrame(() => this.updatePreview());
          });
        });
        this.previewFrame?.addEventListener('click', (event) => this.toggleZoom(event));
        this.updatePreview();
      }

      disconnectedCallback() {
        document.removeEventListener('keydown', this.onKeyDown);
        document.body.classList.remove('hat-branding-open');
        this.endZoom();
      }

      open() {
        if (!this.modal) return;
        this.clearError();
        this.modal.hidden = false;
        document.body.classList.add('hat-branding-open');
        document.addEventListener('keydown', this.onKeyDown);
        requestAnimationFrame(() => {
          (this.lettersInput || this.dialog)?.focus();
        });
      }

      close() {
        if (!this.modal) return;
        this.endZoom();
        this.modal.hidden = true;
        document.body.classList.remove('hat-branding-open');
        document.removeEventListener('keydown', this.onKeyDown);
        this.setLoading(false);
        this.openButton?.focus();
      }

      onKeyDown(event) {
        if (event.key === 'Escape') {
          if (this.previewFrame?.classList.contains('is-zoomed')) {
            this.endZoom();
            return;
          }
          this.close();
        }
      }

      normalizeLetters() {
        if (!this.lettersInput) return;
        const cleaned = this.lettersInput.value.replace(/[^a-zA-Z]/g, '').slice(0, this.maxLetters);
        this.lettersInput.value = cleaned.toUpperCase();
      }

      selectedLocation() {
        const checked = this.querySelector('[data-hat-branding-location]:checked');
        return checked ? checked.value.trim() : '';
      }

      updatePreview() {
        const checked = this.querySelector('[data-hat-branding-location]:checked');
        const url = checked?.getAttribute('data-preview-image') || '';
        const zoomUrl = checked?.getAttribute('data-preview-zoom') || url;
        const focus = checked?.getAttribute('data-preview-focus') || 'center';
        const img = this.querySelector('[data-hat-branding-preview-img]');
        const frame = this.previewFrame;

        this.endZoom();

        if (!img) return;

        if (url) {
          // Clear Shopify image_tag srcset so src swaps actually change the visible photo.
          img.removeAttribute('srcset');
          img.removeAttribute('sizes');
          img.src = url;
          img.srcset = `${url} 1200w`;
          img.sizes = '(min-width: 750px) 280px, 70vw';
          img.dataset.zoomSrc = zoomUrl;
          img.hidden = false;
          img.removeAttribute('hidden');
          img.className = `hat-branding-modal__preview-image hat-branding-modal__preview-image--${focus}`;
          if (frame) {
            frame.hidden = false;
            frame.removeAttribute('hidden');
          }
        } else {
          img.hidden = true;
          img.setAttribute('hidden', '');
          img.removeAttribute('src');
          img.removeAttribute('srcset');
          if (frame) {
            frame.hidden = true;
            frame.setAttribute('hidden', '');
          }
        }
      }

      toggleZoom(event) {
        if (!this.previewFrame || this.previewFrame.hidden) return;
        const img = this.querySelector('[data-hat-branding-preview-img]');
        if (!img || img.hidden || !img.src) return;

        if (this.previewFrame.classList.contains('is-zoomed')) {
          this.endZoom();
          return;
        }

        this.startZoom(img, event);
      }

      startZoom(image, event) {
        if (!this.previewFrame) return;

        const lens = document.createElement('div');
        lens.className = 'hat-branding-modal__preview-zoom-lens';
        lens.setAttribute('aria-hidden', 'true');
        lens.style.backgroundImage = `url("${image.dataset.zoomSrc || image.currentSrc || image.src}")`;
        this.previewFrame.appendChild(lens);
        this.zoomLens = lens;
        this.previewFrame.classList.add('is-zoomed');
        this.previewFrame.setAttribute('aria-label', 'Exit zoom');

        this.moveZoom(event);
        this.previewFrame.addEventListener('pointermove', this.onZoomPointerMove);
      }

      moveZoom(event) {
        if (!this.zoomLens || !this.previewFrame) return;
        const rect = this.previewFrame.getBoundingClientRect();
        const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
        const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        this.zoomLens.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
        this.zoomLens.style.backgroundSize = `${rect.width * this.zoomRatio}px`;
      }

      onZoomPointerMove(event) {
        this.moveZoom(event);
      }

      endZoom() {
        if (this.previewFrame) {
          this.previewFrame.classList.remove('is-zoomed');
          this.previewFrame.setAttribute('aria-label', 'Zoom branding photo');
          this.previewFrame.removeEventListener('pointermove', this.onZoomPointerMove);
        }
        this.zoomLens?.remove();
        this.zoomLens = null;
      }

      clearError() {
        if (!this.errorEl) return;
        this.errorEl.hidden = true;
        this.errorEl.textContent = '';
      }

      showError(message) {
        if (!this.errorEl) return;
        this.errorEl.hidden = false;
        this.errorEl.textContent = message;
      }

      setLoading(isLoading) {
        if (!this.submitButton) return;
        this.submitButton.classList.toggle('loading', isLoading);
        this.submitButton.toggleAttribute('disabled', isLoading);
        this.submitButton.setAttribute('aria-disabled', isLoading ? 'true' : 'false');
      }

      validate() {
        const location = this.selectedLocation();
        const letters = (this.lettersInput?.value || '').trim();
        const agreed = Boolean(this.agreeInput?.checked);

        if (!location) {
          this.showError('Please choose a branding location.');
          return null;
        }
        if (letters.length !== this.maxLetters) {
          this.showError(`Please enter exactly ${this.maxLetters} letters.`);
          this.lettersInput?.focus();
          return null;
        }
        if (!agreed) {
          this.showError('Please agree that custom branded hats cannot be returned or exchanged.');
          return null;
        }

        return { location, letters };
      }

      orderProperties({ location, letters }) {
        return {
          Letters: letters,
          'Branding Location': location,
          'For Hat': this.dataset.productTitle || '',
          'Returns Disclaimer': 'Agreed — custom branded hats are final sale (no returns or exchanges)',
        };
      }

      syncHatFormProperties(selection) {
        const form =
          document.getElementById(`product-form-${this.dataset.sectionId}`) ||
          document.querySelector('[data-type="add-to-cart-form"]');
        if (!form) return;

        const props = this.orderProperties(selection);
        props['Hat Branding'] = 'Yes — $25';

        Object.entries(props).forEach(([name, value]) => {
          let input = Array.from(form.querySelectorAll('input[data-hat-branding-prop]')).find(
            (el) => el.getAttribute('data-hat-branding-prop') === name
          );
          if (!input) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = `properties[${name}]`;
            input.setAttribute('data-hat-branding-prop', name);
            form.appendChild(input);
          }
          input.value = value;
        });
      }

      markAdded({ location, letters }) {
        this.selection = { location, letters };
        this.syncHatFormProperties({ location, letters });
        if (this.openLabel) {
          this.openLabel.textContent = `Branding Added: ${letters} · ${location}`;
        }
        this.openButton?.classList.add('is-added');
        if (this.status) {
          this.status.hidden = false;
          this.status.textContent =
            '2 Letters and branding location are saved on the order. Custom branded hats are final sale.';
        }
      }

      async submit() {
        this.clearError();
        const selection = this.validate();
        if (!selection) return;

        const variantId = this.dataset.variantId;
        if (!variantId) {
          this.showError('Branding is temporarily unavailable.');
          return;
        }

        this.setLoading(true);

        const cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        const properties = this.orderProperties(selection);
        const body = {
          id: Number(variantId),
          quantity: 1,
          properties,
          sections: ['cart-icon-bubble'],
          sections_url: window.location.pathname,
        };

        // Still request drawer/notification sections when present so counts stay in sync,
        // but we intentionally do not open the cart UI after branding is added.
        if (cart && typeof cart.getSectionsToRender === 'function') {
          const sectionIds = cart.getSectionsToRender().map((section) => section.id);
          body.sections = Array.from(new Set(['cart-icon-bubble', ...sectionIds]));
        }

        try {
          const response = await fetch(window.routes.cart_add_url, {
            ...fetchConfig('javascript'),
            body: JSON.stringify(body),
          });
          const data = await response.json();

          if (data.status) {
            this.showError(data.description || data.message || 'Could not add branding to cart.');
            this.setLoading(false);
            return;
          }

          // Also store on cart attributes so values appear under Order → Additional details
          try {
            await fetch(window.routes.cart_update_url, {
              ...fetchConfig(),
              body: JSON.stringify({
                attributes: {
                  Letters: selection.letters,
                  'Branding Location': selection.location,
                  'Hat Branding For': this.dataset.productTitle || '',
                },
              }),
            });
          } catch (attributeError) {
            console.warn('Hat branding cart attributes could not be saved', attributeError);
          }

          this.markAdded(selection);
          this.close();
          this.refreshCartIcon(data);

          if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
            publish(PUB_SUB_EVENTS.cartUpdate, {
              source: 'hat-branding',
              productVariantId: variantId,
              cartData: data,
            });
          }
        } catch (error) {
          console.error(error);
          this.showError('Could not add branding to cart. Please try again.');
          this.setLoading(false);
        }
      }

      refreshCartIcon(parsedState) {
        const bubble = document.getElementById('cart-icon-bubble');
        if (!bubble) return;

        const applySectionHtml = (sectionHtml) => {
          if (!sectionHtml) return false;
          const sectionEl = new DOMParser()
            .parseFromString(sectionHtml, 'text/html')
            .querySelector('.shopify-section');
          if (!sectionEl) return false;
          bubble.innerHTML = sectionEl.innerHTML;
          return true;
        };

        if (applySectionHtml(parsedState?.sections?.['cart-icon-bubble'])) return;

        fetch(`${window.location.pathname}?sections=cart-icon-bubble`)
          .then((response) => response.json())
          .then((sections) => {
            applySectionHtml(sections?.['cart-icon-bubble']);
          })
          .catch(() => {});
      }
    }
  );
}
