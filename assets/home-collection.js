(function () {
  document.querySelectorAll('[data-card-variant-thumbs]').forEach(function (row) {
    var card = row.closest('.product-card-wrapper');
    if (!card) return;

    var mainImg = card.querySelector('.card__media img.motion-reduce');
    var mainLink = card.querySelector('a.card__media');
    var titleLink = card.querySelector('.card__content .card__heading a');

    row.querySelectorAll('.card-variant-thumbs__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (mainImg && btn.dataset.src) {
          mainImg.src = btn.dataset.src;
          if (btn.dataset.srcset) {
            mainImg.srcset = btn.dataset.srcset;
          }
        }

        if (btn.dataset.url) {
          if (mainLink) mainLink.href = btn.dataset.url;
          if (titleLink) titleLink.href = btn.dataset.url;
        }

        row.querySelectorAll('.card-variant-thumbs__btn').forEach(function (other) {
          other.classList.remove('is-active');
          other.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      });
    });
  });
})();
