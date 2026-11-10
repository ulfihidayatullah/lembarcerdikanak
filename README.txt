LEMBAR CERDIK ANAK — WEBSITE KATALOG + HALAMAN DETAIL
====================================================

FILE UTAMA
- index.html       Halaman katalog utama, empat paket kategori, dan Paket Bundling.
- detail.html      Template halaman detail produk (dibuka dengan ?product=ID).
- styles.css       Gaya website, responsivitas, katalog, dan halaman detail.
- script.js        Navigasi, pengisian harga card, dan navigasi card ke detail.
- products.js      Data lima produk yang ditampilkan: empat paket kategori + Paket Bundling.
- detail.js        Menampilkan detail produk berdasarkan ID dari products.js.
- daily-promo.js   Hitung mundur promo pada Paket Bundling.
- favicon.svg      Ikon tab browser yang mengikuti logo Lembar Cerdik Anak.
- assets/          Sampul paket, preview worksheet, dan gambar pendukung.

SUSUNAN KATALOG
- Seluruh pilihan worksheet berada dalam satu slider horizontal yang dapat digeser.
- Empat paket kategori ditampilkan bersama: Coding, Prasekolah, Calistung, dan Muslim.
- Setiap paket kategori berharga Rp48.000.
- Paket Bundling berisi seluruh empat kategori dan empat bonus dengan harga Rp98.000.
- Pilihan produk satuan Rp19.000 sudah dihapus dari katalog dan data produk aktif.
- Judul section "PILIH SESUAI KEBUTUHAN ANAK" ditampilkan rata tengah di atas katalog; section lama berisi judul "Pilih, dapatkan, lalu mulai belajar bersama" telah dihapus.

CARA MENJALANKAN
1. Ekstrak ZIP ke satu folder.
2. Pastikan index.html, detail.html, styles.css, script.js, products.js, detail.js, daily-promo.js, dan folder assets berada di lokasi yang sama.
3. Buka index.html untuk melihat katalog.
4. Klik salah satu paket untuk membuka halaman detail.
5. Dari halaman detail, pembeli melanjutkan ke tautan Lynk.id produk terkait.
6. Untuk hosting statis, unggah seluruh isi folder tanpa mengubah struktur direktori.

WAJIB SEBELUM PUBLIKASI
1. Buka products.js dan ganti seluruh URL https://lynk.id/username/... dengan URL produk Lynk.id yang sebenarnya.
2. Uji tombol pembelian setelah URL diganti. Saat ini sistem sengaja menahan tautan placeholder dan menampilkan peringatan agar calon pembeli tidak diarahkan ke URL palsu.
3. PDF asli tidak disertakan dalam ZIP data. Halaman detail menggunakan informasi katalog dan gambar preview yang tersedia; pastikan PDF final dan alur pengiriman produk sudah siap di Lynk.id.
4. Pastikan hak/lisensi komersial dan izin mengubah merek untuk seluruh PDF sebelum penjualan.
5. Verifikasi jumlah Coding Level 2 pada PDF asli: judul katalog menyebut 43 halaman total, sedangkan rincian aktivitas menyebut 41 halaman isi.

HARGA
- Paket kategori Coding, Prasekolah, Calistung, atau Muslim: Rp48.000 per paket.
- Paket Bundling (empat kategori + empat bonus): Rp98.000.
- Harga pembanding Paket Bundling: Rp192.000; hemat Rp94.000.

PROMO
- Countdown ditampilkan pada kartu Paket Bundling di index.html dan halaman detail Paket Bundling.
- Timer menghitung mundur sampai pergantian hari WIB (Asia/Jakarta).
- Copy promo yang tampil: "Amankan Paket Bundling Rp98.000 sekarang sebelum periode promo berakhir."
- Keterangan lama tentang pembaruan promo harian telah dihapus.


REVISI GAMBAR TERBARU
- Sampul card Coding menggunakan assets/cover-coding-bundle.jpg.
- Sampul card Calistung menggunakan assets/cover-calistung-bundle.jpg.
- Galeri detail Paket Calistung menampilkan halaman isi worksheet yang dirender dari PDF asli: Huruf Vokal AIUEO halaman 2, Aku Bisa Membaca halaman 4, Aku Bisa Menulis halaman 2, dan Aku Bisa Berhitung halaman 2.
- Layout, judul, deskripsi, harga, dan tombol card dipertahankan.


REVISI VISUAL 4 KATEGORI
- Sampul katalog Prasekolah dan Muslim diperbarui ke format kumpulan empat tema worksheet dalam susunan 2 x 2.
- Galeri detail Coding dan Calistung kini menggunakan gambar komposit dengan teks keterangan di kiri dan kumpulan halaman worksheet asli di kanan.
- Galeri detail Prasekolah dan Muslim tetap menggunakan empat gambar tema yang telah ada.
- Layout HTML/CSS, teks produk, harga, dan tombol pembelian tidak diubah.
- Gambar detail Coding dan Calistung dibuat dari halaman isi PDF yang diberikan, bukan halaman sampul.


SOCIAL MEDIA & INSTAGRAM DM
- Instagram: https://www.instagram.com/lembarcerdikanak/
- Threads: https://www.threads.net/@lembarcerdikanak
- TikTok: https://www.tiktok.com/@lembarcerdikanak
- Floating DM: https://ig.me/m/lembarcerdikanak
- Social media section ditambahkan sebelum footer.
- Floating DM copy: 'Ada yang ingin ditanyakan? Yuk, DM kami di Instagram!'


PEMBARUAN SOCIAL MEDIA FOOTER
- Social media tidak lagi ditampilkan sebagai section besar.
- Instagram, Threads, dan TikTok dipindahkan ke footer sebagai tautan kecil berjajar.
- Floating DM Instagram tetap aktif dengan ajakan bertanya.


REVISI RESPONSIVE FOOTER DAN CHAT ICON
- Tautan Instagram, Threads, dan TikTok ditempatkan dalam footer-bottom yang responsif.
- Pada layar kecil, hak cipta, tautan social media, dan kembali ke atas tersusun rapi.
- Floating Instagram DM disederhanakan menjadi ikon chat bulat.
- Ikon chat memiliki animasi detak jantung dan ripple halus.
- Animasi otomatis dinonaktifkan untuk pengguna yang memilih reduced motion.


PEMBARUAN SAMPUL, CTA PROMO, DAN PAKET BUNDLING
- Empat sampul kategori menggunakan aset 1:1 terbaru dari pengguna.
- Sampul card ditampilkan dengan rasio persegi dan object-fit contain agar tidak gepeng/terpotong.
- Tombol 'Klaim Harga Spesial + Bonus!' berada tepat di bawah navigasi slider dan mengarah ke #paket-bundling.
- Tombol CTA memiliki animasi pulse/glow dan ikon panah ke bawah.
- Card Paket Bundling menampilkan empat sampul: Coding, Prasekolah, Calistung, dan Muslim.
- Empat aset sampul dioptimalkan dalam format WebP dengan transparansi.


PEMBARUAN LAYOUT WEBSITE (REVISI LANJUTAN)
- Menghapus seluruh section final CTA yang memuat kalimat 'Pilih satu tema untuk memulai, atau bawa pulang semuanya sekaligus.'
- Menghapus deskripsi 'Worksheet PDF untuk menemani aktivitas belajar anak di rumah.' dari footer.
- Pada layar HP (maks. 760px), empat sampul Paket Bundling ditampilkan dalam grid 2x2 yang lebih ringkas, terpusat, dan tetap mempertahankan rasio 1:1.
- Pada layar sangat kecil (maks. 380px), grid diperkecil lagi agar tidak memenuhi layar.


REVISI PAKET BUNDLING — SATU BARIS DI SEMUA DEVICE
- Empat gambar sampul Paket Bundling selalu tampil dalam satu baris (4 kolom).
- Aturan satu baris berlaku pada desktop, tablet, dan mobile.
- Pada layar kecil, gap dan radius diperkecil agar empat gambar tetap muat.
- Semua gambar mempertahankan rasio 1:1 dan object-fit contain.
