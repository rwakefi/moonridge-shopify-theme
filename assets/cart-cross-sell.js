if (!customElements.get('cart-cross-sell')) {
  customElements.define(
    'cart-cross-sell',
    class CartCrossSell extends HTMLElement {
      connectedCallback() {
        this.abortController = new AbortController();
        this.load();
      }

      disconnectedCallback() {
        this.abortController?.abort();
      }

      async load() {
        const ids = (this.dataset.productIds || '')
          .split(',')
          .map((id) => id.trim())
          .filter(Boolean)
          .slice(0, 3);
        const limit = Number(this.dataset.limit) || 4;

        if (!ids.length) {
          this.remove();
          return;
        }

        try {
          const fallback = this.parentElement?.querySelector('[data-cross-sell-fallback]');
          const fallbackHasItems = Boolean(fallback?.querySelector('.cart-addons__item'));
          let items = await this.collect(ids, 'complementary', limit);

          // Related is "more like this." Use it only when there is no curated
          // add-on collection to fall back on. Complementary is the real
          // frequently-bought-together list.
          if (!items.length && !fallbackHasItems) {
            items = await this.collect(ids, 'related', limit);
          }
          if (!this.isConnected) return;

          if (!items.length) {
            this.remove();
            return;
          }

          const list = this.querySelector('[data-cross-sell-list]');
          list.innerHTML = items.map((item) => item.outerHTML).join('');
          this.hidden = false;
          if (fallback) fallback.hidden = true;
        } catch (error) {
          if (error.name === 'AbortError') return;
          this.remove();
        }
      }

      async collect(ids, intent, limit) {
        const pages = await Promise.all(ids.map((id) => this.fetchSection(id, intent)));
        const seen = new Set(ids);
        const items = [];

        pages.forEach((doc) => {
          if (!doc) return;
          doc.querySelectorAll('[data-cross-sell-item]').forEach((item) => {
            const productId = item.dataset.productId;
            if (!productId || seen.has(productId) || items.length >= limit) return;
            if (!item.querySelector('.cart-addons__title')) return;
            seen.add(productId);
            items.push(item);
          });
        });

        return items;
      }

      async fetchSection(productId, intent) {
        const url = new URL(this.dataset.url, window.location.origin);
        url.searchParams.set('section_id', this.dataset.sectionId);
        url.searchParams.set('product_id', productId);
        url.searchParams.set('intent', intent);
        url.searchParams.set('limit', this.dataset.limit || '4');

        const response = await fetch(url.toString(), { signal: this.abortController.signal });
        if (!response.ok) return null;

        const html = await response.text();
        return new DOMParser().parseFromString(html, 'text/html');
      }
    }
  );
}
