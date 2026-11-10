(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('#main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka menu');
      });
    });
  }

  const initializedSliders = new Set();
  document.querySelectorAll('[data-slider-target]').forEach(function (button) {
    const target = document.getElementById(button.dataset.sliderTarget);
    if (!target) return;

    if (!initializedSliders.has(target)) {
      initializedSliders.add(target);
      const controls = Array.from(document.querySelectorAll('[data-slider-target="' + target.id + '"]'));
      const syncControls = function () {
        const maxScroll = Math.max(0, target.scrollWidth - target.clientWidth);
        controls.forEach(function (control) {
          const atStart = target.scrollLeft <= 2;
          const atEnd = target.scrollLeft >= maxScroll - 2;
          control.disabled = control.dataset.direction === 'prev' ? atStart : atEnd;
        });
      };
      target.addEventListener('scroll', syncControls, { passive: true });
      window.addEventListener('resize', syncControls);
      syncControls();
    }

    button.addEventListener('click', function () {
      const direction = button.dataset.direction === 'prev' ? -1 : 1;
      const firstCard = target.querySelector('article');
      const gap = parseFloat(window.getComputedStyle(target).gap) || 18;
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : target.clientWidth * 0.8;
      target.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    });
  });

  // Enrich each catalogue card with the verified count and send every card to its detail page.
  if (window.PRODUCTS) {
    document.querySelectorAll('.product-card[data-product-id]').forEach(function (card) {
      const product = window.PRODUCTS[card.dataset.productId];
      if (!product) return;

      const includes = card.querySelector('.product-includes');
      if (includes && !card.querySelector('.product-count')) {
        const count = document.createElement('p');
        count.className = 'product-count';
        count.textContent = product.countLabel;
        includes.insertAdjacentElement('afterend', count);
      }

      const price = card.querySelector('.product-price');
      if (price) {
        const current = '<span class="product-price-current">' + formatRupiah(product.price) + '</span>';
        if (product.originalPrice) {
          price.innerHTML = current +
            '<span class="product-price-meta"><s class="product-price-old">' + formatRupiah(product.originalPrice) + '</s>' +
            '<small class="product-price-saving">Hemat ' + formatRupiah(product.savings) + '</small></span>';
        } else {
          price.innerHTML = current;
        }
      }

      const action = card.querySelector('.product-buy-row a');
      if (action) {
        action.href = 'detail.html?product=' + encodeURIComponent(product.id);
        action.target = '_self';
        action.removeAttribute('rel');
        action.textContent = product.kind === 'super' ? 'Lihat Detail Paket Bundling' : 'Lihat Detail';
      }

      card.addEventListener('click', function (event) {
        if (event.target.closest('a, button')) return;
        window.location.href = card.dataset.detailUrl;
      });
      card.addEventListener('keydown', function (event) {
        if (event.target !== card) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.location.href = card.dataset.detailUrl;
        }
      });
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  function formatRupiah(value) {
    return 'Rp' + Number(value || 0).toLocaleString('id-ID');
  }
})();
