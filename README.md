# UNIKI V.1 · v1.2.1 — Digital Community Management Platform

**Connect • Share • Belong**

Sejarah perubahan keluaran: [`CHANGELOG.md`](CHANGELOG.md).

UNIKI ialah PWA local-first untuk mengurus operasi komuniti. Logo yang dibekalkan digunakan sebagai logo aplikasi, ikon PWA, favicon dan identiti pada halaman log masuk.

## Jalankan aplikasi

Tiada dependency atau proses build diperlukan. Dari folder ini, jalankan server HTTP statik:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Buka `http://localhost:4173`. Untuk pemasangan/offline, gunakan HTTPS (atau localhost), buka menu Chrome/Edge dan pilih **Install app / Add to Home Screen**. Service worker akan cache app shell; buka aplikasi sekali ketika online dahulu.

Untuk GitHub Pages, letakkan kandungan folder ini di root repository, aktifkan Pages dan gunakan URL HTTPS. Manifest dan resource aplikasi menggunakan laluan relatif.

## Build native

Arahan penuh ada dalam [`BUILD-NATIVE-MY.md`](BUILD-NATIVE-MY.md). Projek Capacitor Android sedia dijana di `android/`; APK debug hasil build berada di `release/android/UNIKI-V1-v1.2.1-debug.apk`. Windows x64 app (`UNIKI.exe`) bersama fail Inno Setup dibekalkan dalam `release/UNIKI-V1-Windows-x64-Inno-Input-v1.2.1.tar.xz`; extract untuk mendapatkan folder `release/UNIKI-win32-x64/`, kemudian compile `inno/UNIKI.iss` dengan Inno Setup 6 pada Windows.

**Output v1.2.1:** `release/UNIKI-V1-PWA-v1.2.1.zip`, `release/android/UNIKI-V1-v1.2.1-debug.apk`, `release/UNIKI-V1-Windows-x64-Inno-Input-v1.2.1.tar.xz` dan manual `release/UNIKI-V1-Manual-Pengguna-v1.2.1.docx`. Semak checksum dalam `release/SHA256SUMS.txt`. APK ialah debug-signed untuk ujian; arkib Windows mengandungi executable/fail Electron serta skrip Inno. Fail installer `.exe` Inno perlu dikompilasi pada Windows dengan Inno Setup 6.

## Fungsi yang boleh digunakan dalam browser build ini

- Persediaan workspace kali pertama; akaun Owner pertama, log masuk, ingat sesi pada peranti dan pemulihan password menggunakan kunci pemulihan local.
- Password di-hash dengan PBKDF2 melalui Web Crypto. Tiada password plaintext disimpan.
- IndexedDB untuk data komuniti dan lampiran; data boleh dibaca/ditambah/dikemas kini/dipadam secara local.
- Permission modul menggunakan lima tindakan: View, Add, Edit, Delete, Approve. UI dan service functions menyemak permission sebelum menulis/memadam data.
- Modul ahli, isi rumah, pengumuman, acara, kejadian, aduan, sukarelawan, mesyuarat, dokumen, pendapatan, perbelanjaan, bayaran, terimaan dan resit.
- Daftar acara, kapasiti, daftar peserta, rekod kehadiran; workflow status untuk kejadian dan aduan.
- Aliran kewangan lengkap untuk Bayar dan Terima bayaran: **Bayaran → Maklumat → Bukti → Semak → Simpan → Status → Kemaskini Kewangan**. Butang + Rekod Bayaran memulakan aliran; lampiran boleh dimuat naik pada langkah Bukti. Borang menyimpan tarikh, amaun bil dan amaun separa, pihak transaksi, kaedah, nombor rujukan, akaun/bank, kategori/tujuan, catatan dan bukti.
- Status pembayaran keluar meliputi Menunggu Pembayaran, Belum Dibayar, Bayaran Sebahagian, Bayaran Lewat, Sudah Dibayar, Dibatalkan dan Refund. Status terimaan meliputi Menunggu Pengesahan, Menunggu Bayaran, Bayaran Sebahagian Diterima, Bayaran Diterima, Bayaran Penuh Diterima, Ditolak dan Refund. Amaun/refund disahkan serta dikira bersih selepas approval.
- Setiap baris dalam Ikhtisar, Pendapatan, Perbelanjaan, Bayar dan Terima bayaran menyediakan tindakan **Paparkan resit** dan **Cetak resit**. Rekod belum disahkan boleh dipaparkan/dicetak sebagai pratonton jelas bertanda **DRAF**; selepas approver meluluskan, nombor resit rasmi dijana.
- Halaman **Resit rasmi** mengumpulkan semua resit dijana daripada Pendapatan, Perbelanjaan, Bayar, Terima bayaran serta refund; resit boleh dilihat dan dicetak semula.
- Tindakan Edit, Padam (rekod belum dibayar sahaja), Batal, Catatan, kemas kini status dan kelulusan mengikut permission. Perubahan kewangan/rekod sensitif memerlukan password akaun semasa. Perubahan medan kewangan pada pendapatan/perbelanjaan yang telah diluluskan memerlukan kelulusan semula jika editor tiada permission Approve. Butiran utama transaksi yang sudah mempunyai resit dikunci untuk mengelakkan resit lama ditulis semula; gunakan refund/pelarasan sebagai transaksi berasingan dan tambah catatan susulan melalui Catatan. Resit rasmi bernombor serta boleh dicetak.
- Jejak audit merekod pengguna, peranan, masa, modul, rekod dan ringkasan perubahan termasuk catatan, kelulusan, pembatalan serta cetakan resit; Owner/role yang mempunyai Audit · View boleh menyemaknya.
- Dashboard komuniti/kewangan, ringkasan laporan dan carta bulanan ringkas.
- Import ahli daripada CSV dengan preview, validasi serta duplicate check. Eksport CSV boleh dibuka dengan Excel. Print/PDF menggunakan dialog cetak browser.
- Lampiran dokumen/pengumuman/rekod sebagai data local (maksimum 10 MB setiap fail).
- Jejak audit, carian global, tema light/dark, paparan responsif dan shell PWA offline.
- Logo komuniti boleh dimuat naik melalui Tetapan → Maklumat komuniti (PNG/JPG/WebP, maksimum 3 MB), disimpan setempat dan dipaparkan pada resit bercetak; logo UNIKI digunakan sebagai fallback.
- UNIKI AI Helper ialah **local rule-based helper**, bukan model generatif. Ia hanya membuat kiraan/lookup terhad mengikut permission dan tidak menghantar data ke cloud.
- Fail backup `.uniki.json` dienkripsi AES-256-GCM; kunci diperoleh daripada password backup menggunakan PBKDF2. Ada juga snapshot pemulihan dalam IndexedDB.
- Factory reset Owner dengan kod keselamatan, password dan pengesahan kedua.

## Batasan penting edisi ini

Ini ialah aplikasi local-first pada setiap profil/peranti, bukan backend multi-device. Dalam workspace ini turut disediakan wrapper native dan APK Android debug yang telah dibina. Batasan yang masih terpakai:

- APK yang disertakan ialah **debug build** bertandatangan debug key, untuk ujian/pemasangan dalaman sahaja. APK Play Store memerlukan signing key organisasi, semakan privacy/versioning dan ujian peranti sebenar.
- Windows app telah dipaketkan sebagai direktori Electron x64, termasuk `UNIKI.exe`; `inno/UNIKI.iss` boleh digunakan dengan Inno Setup 6 untuk menghasilkan installer. Installer Inno belum dikompilasi di persekitaran Linux ini dan app belum code-signed; SmartScreen boleh memberi amaran.
- Uji pemasangan, update/upgrade dan pemulihan data pada peranti sebenar sebelum penggunaan produksi.
- Local Wi-Fi sync, QR pairing/scan dan IP receiver belum diimplementasikan sebagai network service. Skrin sync menerangkan keperluan companion service dan tidak berpura-pura bahawa data telah disegerakkan.
- Cloud sync, payment gateway, AI Cloud dan e-mel reset password belum dikonfigurasi. Tiada data dihantar kepada provider luar.
- Excel `.xlsx` import belum tersedia; CSV dengan header yang diterangkan pada UI disokong. CSV export boleh dibuka dalam Excel. PDF dijana melalui fungsi Print browser.
- Data IndexedDB tidak dienkripsi pada tahap database. Akses local boleh dipintas oleh pemilik peranti/devtools dan storan browser boleh dipadam oleh OS/browser. Backup luar peranti dan keselamatan akaun OS tetap diperlukan.
- Role/permission dalam client-only PWA membantu kawalan operasi dan privasi paparan, tetapi **bukan pengganti backend security boundary** untuk organisasi yang mempunyai pengguna/peranti tidak dipercayai. Untuk penggunaan produksi multi-user, pindahkan service/data layer ke backend authenticated dengan database, audit immutable, rate limits, server-side RBAC, encrypted transport, migration dan pemulihan bencana.

## Fail utama

- `index.html`, `styles.css`, `app.js` — aplikasi UI dan service/data layer browser.
- `sw.js`, `manifest.json` — shell PWA dan pemasangan.
- `assets/uniki-logo.png`, `assets/icon-192.png`, `assets/icon-512.png` — branding dan ikon.
- `example-members.csv` — contoh format import ahli.

## Import ahli CSV

Header yang diterima termasuk:

```text
name,phone,email,category,location,joined,status
```

Alias Bahasa Melayu `nama`, `telefon`, `kategori`, `kawasan`, `tarikh menyertai` turut diterima. Duplicate email/telefon dipaparkan sebelum import dan disemak sekali lagi semasa penyimpanan.

## Nota operasi

- Jangan tutup tab atau bersihkan data browser sebelum membuat backup.
- Simpan password backup berasingan; ia tidak boleh dipulihkan jika terlupa.
- Factory reset memadam workspace termasuk akaun, audit log dan snapshot setempat.
- Versi ini menggunakan satu profil data bagi setiap browser origin/peranti; private/incognito mode tidak sesuai untuk data berterusan.
