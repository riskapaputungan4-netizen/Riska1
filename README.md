# WayinVideo AI - Panduan Ekspor & Hosting Sendiri

Aplikasi **WayinVideo AI** dibuat dengan **Vite + React + TypeScript + Tailwind CSS v4**. Kode ini sudah dikonfigurasi sepenuhnya untuk dapat di-hosting secara mandiri (*self-hosting*) di berbagai platform seperti **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages**, **cPanel**, maupun **VPS (Docker / Nginx)**.

---

## 📥 Langkah 1: Ekspor Kode dari Google AI Studio

Ada 2 cara mudah untuk mengambil file proyek ini:
1. **Opsi A (Rekomendasi - via GitHub)**:
   - Klik ikon menu **Pengaturan / Titik Tiga** di pojok kanan atas Google AI Studio.
   - Pilih **Export to GitHub** atau hubungkan akun GitHub Anda.
   - Proyek akan langsung dibuatkan repositori baru di akun GitHub Anda.
2. **Opsi B (Unduh File ZIP)**:
   - Pilih **Download ZIP** dari menu Google AI Studio.
   - Ekstrak file ZIP tersebut di komputer Anda.

---

## 🚀 Langkah 2: Pilihan Cara Hosting Sendiri

Pilih salah satu metode berikut sesuai preferensi Anda:

### Pilihan 1: Deploy Gratis ke Vercel (Sangat Mudah & Otomatis)
*Cocok untuk pemula, gratis selamanya, sudah dilengkapi SSL HTTPS gratis dan domain kustom.*

1. Buat akun di [Vercel.com](https://vercel.com).
2. Klik **Add New...** > **Project**.
3. Hubungkan repositori GitHub tempat Anda mengekspor proyek ini.
4. Vercel akan mendeteksi otomatis:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik **Deploy**.
6. Selesai! Web app Anda sudah live dalam 1-2 menit dengan URL seperti `https://wayinvideo-ai.vercel.app`. File konfigurasi `vercel.json` sudah disediakan di dalam proyek.

---

### Pilihan 2: Deploy Gratis ke Netlify
1. Buka [Netlify.com](https://netlify.com) dan buat akun.
2. Klik **Add new site** > **Import an existing project** (via GitHub), ATAU seret langsung folder `dist` hasil kompilasi ke halaman Netlify Drop.
3. Konfigurasi build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. File `public/_redirects` sudah disertakan agar routing SPA berjalan lancar tanpa error 404.

---

### Pilihan 3: Hosting di VPS Sendiri (Menggunakan Docker)
Jika Anda memiliki server VPS (seperti DigitalOcean, Linode, AWS, Contabo, Biznet):

1. Pastikan Docker terinstal di VPS Anda.
2. Jalankan perintah build Docker:
   ```bash
   docker build -t wayinvideo-ai .
   ```
3. Jalankan container pada port 80:
   ```bash
   docker run -d -p 80:80 --name wayinvideo wayinvideo-ai
   ```
4. Web app Anda langsung aktif di IP VPS atau domain Anda!

---

### Pilihan 4: Menjalankan di Komputer Lokal (Localhost)
Untuk menguji atau mengembangkan lebih lanjut di laptop/komputer Anda:

1. Buka Terminal / Command Prompt di folder proyek.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembang:
   ```bash
   npm run dev
   ```
4. Buka peramban di `http://localhost:3000`.

---

## 🌐 Menghubungkan Domain Sendiri (Contoh: wayinvideo.com)
Di dashboard Vercel, Netlify, atau Cloudflare:
1. Masuk ke menu **Settings** > **Domains**.
2. Masukkan nama domain Anda (misal: `app.domainanda.com`).
3. Tambahkan DNS Record (**CNAME** atau **A Record**) di penyedia domain Anda sesuai petunjuk yang diberikan.
4. Sertifikat SSL HTTPS akan terpasang secara otomatis dan gratis.
