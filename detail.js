(function () {
  const root = document.getElementById('product-detail');
  if (!root || !window.PRODUCTS) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');
  const product = window.PRODUCTS[productId];

  if (!product) {
    root.innerHTML = '<section class="detail-error"><h1>Produk tidak ditemukan</h1><p>Tautan detail mungkin tidak lengkap. Silakan kembali ke katalog dan pilih produk yang tersedia.</p><a class="button button-primary" href="index.html#kategori">Kembali ke Katalog</a></section>';
    return;
  }

  document.title = product.name + ' | Detail Produk - Lembar Cerdik Anak';

  const formatRp = value => 'Rp' + Number(value || 0).toLocaleString('id-ID');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const categoryAnchors = {
    'Coding tanpa gadget':'coding',
    'Prasekolah':'prasekolah',
    'Calistung':'calistung',
    'Materi Muslim':'muslim',
    'Semua kategori':'kategori'
  };
  const categoryHref = 'index.html#' + (categoryAnchors[product.category] || 'kategori');
  const categoryBackText = product.kind === 'super' ? 'Kembali ke katalog paket →' : 'Lihat paket lainnya →';
  const detailCtaHeading = product.kind === 'super' ? 'Siap membawa pulang seluruh kategori?' : 'Siap memilih worksheet ini?';
  const detailCtaCopy = product.kind === 'super' ? 'Periksa isi paket dan empat bonus, lalu lanjutkan ke halaman pembelian.' : 'Periksa kembali jumlah halaman dan materi, lalu lanjutkan ke halaman pembelian.';
  const pageStat = product.kind === 'super' ? '2.600+' : Number(product.pageCount || 0).toLocaleString('id-ID');
  const preview = (product.previews || []).filter(Boolean);
  const mainImage = preview[0] || 'assets/hero-preview.jpg';

  const priceHtml = product.originalPrice
    ? `<div class="detail-price"><strong>${formatRp(product.price)}</strong><s>${formatRp(product.originalPrice)}</s><span>Hemat ${formatRp(product.savings)}</span></div>`
    : `<div class="detail-price"><strong>${formatRp(product.price)}</strong></div>`;
  const promoDeadlineHtml = product.id === 'super-bundling'
    ? `<div class="daily-promo-timer daily-promo-timer-detail" data-daily-promo-countdown aria-label="Hitung mundur promo Paket Bundling">
        <div class="daily-promo-info"><span aria-hidden="true" class="daily-promo-icon">◷</span><span><strong>Jangan Lewatkan Harga Spesial Hari Ini!</strong><small>Amankan Paket Bundling Rp98.000 sekarang sebelum periode promo berakhir.</small></span></div>
        <div class="daily-promo-clock" role="timer" aria-label="Waktu tersisa untuk promo hari ini">
          <span><b data-promo-hours>00</b><small>JAM</small></span><i>:</i><span><b data-promo-minutes>00</b><small>MENIT</small></span><i>:</i><span><b data-promo-seconds>00</b><small>DETIK</small></span>
        </div>
      </div>`
    : '';

  const previewHtml = preview.length > 1
    ? `<div class="detail-thumbnails">${preview.map((src, index) => `<button class="detail-thumb${index === 0 ? ' is-active' : ''}" type="button" data-preview="${esc(src)}" aria-label="Lihat pratinjau ${index + 1}"><img src="${esc(src)}" alt="Contoh halaman worksheet ${index + 1}" loading="lazy"></button>`).join('')}</div>`
    : '';

  const itemCards = (product.items || []).map((item, index) => `
    <article class="detail-item-card">
      <span class="detail-item-number">${String(index + 1).padStart(2, '0')}</span>
      <div><h3>${esc(item.name)}</h3><span class="detail-item-pages">${esc(item.pages)}</span><p>${esc(item.summary || '')}</p></div>
    </article>`).join('');

  const highlights = (product.highlights || []).map(text => `<li>${esc(text)}</li>`).join('');
  const benefits = (product.benefits || []).map(text => `<li>${esc(text)}</li>`).join('');
  const note = product.note ? `<aside class="detail-note"><strong>Catatan materi</strong><p>${esc(product.note)}</p></aside>` : '';
  const itemsSection = product.items && product.items.length
    ? `<section class="detail-section"><div class="detail-section-heading"><span class="eyebrow">RINCIAN PAKET</span><h2>Apa saja yang termasuk?</h2><p>Daftar materi dan jumlah halaman mengikuti katalog produk yang diberikan.</p></div><div class="detail-items-grid">${itemCards}</div></section>`
    : `<section class="detail-section"><div class="detail-section-heading"><span class="eyebrow">CONTOH MATERI</span><h2>Aktivitas di dalam worksheet</h2><p>Berikut beberapa jenis aktivitas yang tercantum dalam katalog produk.</p></div><ul class="detail-highlights">${highlights}</ul></section>`;

  root.innerHTML = `
    <section class="detail-product-panel">
      <div class="detail-topline"><span class="eyebrow">${esc(product.category.toUpperCase())}</span><span class="detail-type">${product.kind === 'super' ? 'PAKET BUNDLING' : product.kind === 'bundle' ? 'PAKET KATEGORI' : 'WORKSHEET PDF'}</span></div>
      <div class="detail-hero-grid">
        <div class="detail-gallery">
          <div class="detail-main-image"><img id="detail-main-image" src="${esc(mainImage)}" alt="Pratinjau ${esc(product.name)}"></div>
          ${previewHtml}
          <p class="detail-preview-caption">Pratinjau sebagian halaman worksheet. File PDF lengkap tidak ditampilkan di halaman ini.</p>
        </div>
        <div class="detail-info">
          <span class="product-kicker">${esc(product.category)}</span>
          <h1>${esc(product.name)}</h1>
          <p class="detail-description">${esc(product.description)}</p>
          <div class="detail-stats">
            <div><strong>${esc(pageStat)}</strong><span>Halaman / aktivitas</span></div>
            <div><strong>${esc(product.pdfCount)}</strong><span>File PDF</span></div>
            <div><strong>${esc(product.age)}</strong><span>Usia sasaran</span></div>
          </div>
          ${priceHtml}
          ${promoDeadlineHtml}
          <a class="button button-primary detail-buy-button" id="detail-buy-button" href="${esc(product.buyUrl)}">Lanjutkan ke Pembelian · ${formatRp(product.price)} <span aria-hidden="true">↗</span></a>
          <p class="detail-buy-note" id="detail-buy-note">Setelah meninjau isi paket, lanjutkan pembelian melalui halaman produk Lynk.id.</p>
          <a class="detail-back-inline" href="${categoryHref}">${categoryBackText}</a>
        </div>
      </div>
    </section>
    ${itemsSection}
    <section class="detail-section detail-benefits-section"><div class="detail-section-heading"><span class="eyebrow">MANFAAT AKTIVITAS</span><h2>Hal yang dapat dilatih anak</h2></div><ul class="detail-benefits">${benefits}</ul></section>
    ${note}
    <section class="detail-bottom-cta"><div><span class="eyebrow eyebrow-light">SUDAH COCOK DENGAN KEBUTUHAN ANAK?</span><h2>${detailCtaHeading}</h2><p>${detailCtaCopy}</p></div><a class="button button-white" href="${esc(product.buyUrl)}" id="detail-buy-button-bottom">Lanjutkan Pembelian · ${formatRp(product.price)} ↗</a></section>
  `;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const main = document.getElementById('detail-main-image');
  document.querySelectorAll('.detail-thumb').forEach(button => {
    button.addEventListener('click', () => {
      const src = button.dataset.preview;
      if (main && src) main.src = src;
      document.querySelectorAll('.detail-thumb').forEach(other => other.classList.toggle('is-active', other === button));
    });
  });

  // The supplied source still contains placeholder Lynk.id usernames. Do not send buyers to a dead URL.
  const isPlaceholder = String(product.buyUrl || '').includes('/username/');
  ['detail-buy-button', 'detail-buy-button-bottom'].forEach(id => {
    const button = document.getElementById(id);
    if (!button) return;
    if (isPlaceholder) {
      button.href = '#link-belum-diisi';
      button.addEventListener('click', event => {
        event.preventDefault();
        alert('Tautan pembelian produk ini masih berupa placeholder. Ganti URL Lynk.id di products.js sebelum website dipublikasikan.');
      });
      if (id === 'detail-buy-button') {
        const noteEl = document.getElementById('detail-buy-note');
        if (noteEl) noteEl.textContent = 'Tautan Lynk.id untuk produk ini belum diisi. Admin perlu menggantinya sebelum tombol pembelian dapat digunakan.';
      }
    } else {
      button.target = '_blank';
      button.rel = 'noopener noreferrer';
    }
  });
})();
