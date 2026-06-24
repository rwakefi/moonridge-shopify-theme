(function () {
  function bindPressFeedback(root) {
    var scope = root || document;
    scope.querySelectorAll('.moonridge-carousel-btn').forEach(function (button) {
      if (button.dataset.mrPressBound) return;
      button.dataset.mrPressBound = 'true';

      button.addEventListener('mousedown', function () {
        if (!button.disabled) button.classList.add('is-pressed');
      });

      ['mouseup', 'mouseleave'].forEach(function (eventName) {
        button.addEventListener(eventName, function () {
          button.classList.remove('is-pressed');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      bindPressFeedback();
    });
  } else {
    bindPressFeedback();
  }

  document.addEventListener('shopify:section:load', function (event) {
    bindPressFeedback(event.target);
  });
})();
