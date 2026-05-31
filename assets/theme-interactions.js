(function () {
  function initMagneticButtons() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.querySelectorAll('.button, .header-button, .sticky-booking-cta').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var position = btn.getBoundingClientRect();
        var x = e.clientX - position.left - position.width / 2;
        var y = e.clientY - position.top - position.height / 2;
        btn.style.transform = 'translate(' + x * 0.08 + 'px, ' + y * 0.08 + 'px)';
        btn.style.transition = 'none';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transition = 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)';
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  function initShopPayStyles() {
    document.querySelectorAll('gravity-button').forEach(function (button) {
      var shadowRoot = button.shadowRoot;
      if (!shadowRoot || shadowRoot.querySelector('[data-moonridge-shop-pay]')) return;

      var style = document.createElement('style');
      style.setAttribute('data-moonridge-shop-pay', 'true');
      style.textContent =
        '.gravity-button{background-color:#312110!important;color:white!important;border-radius:5px!important;padding:12px 20px!important;font-size:16px!important}';
      shadowRoot.appendChild(style);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMagneticButtons();

    if (window.moonridgeEnableShopPayStyles) {
      initShopPayStyles();
      window.setTimeout(initShopPayStyles, 2000);
    }
  });
})();
