# Kiiota Blog

![Build Status](https://img.shields.io/github/actions/workflow/status/kumajaya/kiiota-blog/sync.yml?branch=main)
![License](https://img.shields.io/github/license/kumajaya/kiiota-blog)
![GitHub Repo Size](https://img.shields.io/github/repo-size/kumajaya/kiiota-blog)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)

## Deskripsi

Repositori ini menyimpan konten blog **[blog.kiiota.com](https://blog.kiiota.com/)** dalam bentuk **statis** dan menyediakan mekanisme **sinkronisasi otomatis** dari Ghost CMS. Tujuan utamanya adalah sebagai arsip teknis, backup konten, dan sumber untuk **static site generator** (Jekyll, Hugo, Eleventy) yang dipublikasikan melalui GitHub Pages.

## Struktur Repositori

```
kiiota-blog/
├── docs/
│   ├── _config.yml          # Konfigurasi Jekyll & Minima
│   ├── index.md             # Halaman utama (loop posting)
│   ├── about.md             # Halaman About
│   │
│   ├── _posts/              # Artikel blog (Markdown dengan frontmatter)
│   ├── pages/               # Halaman statis lain (About, Contact, dsb.)
│   ├── assets/
│   │   └── media/           # Media internal hasil unduhan
│   │
│   ├── _includes/           # Partial HTML untuk head/footer
│   │   ├── custom-head.html
│   │   ├── head.html
│   │   └── sub-footer.html
│   │
│   ├── _layouts/            # Layout override
│   │   └── post.html
│   │
│   └── sync-ghost.js        # Script sinkronisasi konten dari Ghost API
│
└── .github/
    └── workflows/
        └── sync.yml         # Workflow GitHub Actions untuk sinkronisasi
```

## Sinkronisasi Konten

Konten blog diambil dari Ghost CMS menggunakan **Ghost Content API** melalui `sync-ghost.js`. Sinkronisasi dijadwalkan dengan workflow GitHub Actions (`sync.yml`) setiap hari:

1. Ambil konten terbaru dari Ghost CMS (`GHOST_API_URL` + `GHOST_API_KEY`)
2. Simpan sebagai markdown di `_posts/` dan `pages/`
3. Unduh media internal ke `assets/media/`
4. Commit & push otomatis ke repository

## Konfigurasi Secrets & Permissions

Agar workflow sinkronisasi berjalan dengan benar, pastikan menambahkan **GitHub Actions secrets** berikut:

- `GHOST_KIIOTA_API_URL` → base URL Ghost Content API, contoh:
  `https://blog.kiiota.com/ghost/api/content/`
- `GHOST_KIIOTA_API_KEY` → Content API Key dari Ghost Admin → Integrations

Selain itu, aktifkan izin **Read and write permissions** untuk `GITHUB_TOKEN`:
- Masuk ke **Settings → Actions → General → Workflow permissions**
- Pilih **Read and write permissions**

Workflow juga dapat dijalankan manual melalui `workflow_dispatch`.

## Publikasi

Repositori dapat langsung digunakan untuk build Jekyll atau static site generator lain. Hasil build dapat dipublikasikan melalui **GitHub Pages**:

[https://kumajaya.github.io/kiiota-blog/](https://kumajaya.github.io/kiiota-blog/)

### Setup
1. Masuk ke **Settings → Pages**.
2. Pilih:
   - **Branch**: `main`
   - **Folder**: `/docs`
3. Simpan. GitHub akan build Jekyll dari folder `docs/`.

### Custom Domain (opsional)
Jika ingin menggunakan domain khusus (`blog.kiiota.com`):
- Buat file `docs/CNAME` berisi:
  ```
  blog.kiiota.com
  ```
- Arahkan DNS domain ke `kumajaya.github.io`.

### Trigger Build
- Setiap commit ke branch `main` yang menyentuh folder `docs/` akan memicu build GitHub Pages otomatis.
- Build juga bisa dijalankan manual melalui **Actions → Pages build and deployment → Run workflow**.

## Setup Lokal

Jika ingin menjalankan situs secara lokal:

1. Clone repository:
   ```bash
   git clone https://github.com/kumajaya/kiiota-blog.git
   cd kiiota-blog
   ```

2. Install dependensi Jekyll (Ruby & Bundler harus terpasang):
   ```bash
   bundle install
   ```

3. Jalankan server lokal:
   ```bash
   bundle exec jekyll serve
   ```

4. Buka di browser: `http://localhost:4000/kiiota-blog`

## Teknologi & Tools

* **Jekyll** + **Minima** theme
* **PrismJS**: Syntax highlighting
* **KaTeX**: Render formula matematika
* **Mermaid**: Diagram flow & grafis
* GitHub Actions untuk sinkronisasi Ghost CMS

## Lisensi

MIT License – bebas digunakan, dimodifikasi, dan didistribusikan dengan atribusi.

## Penulis

* **Ketut Kumajaya** – Pengembang & kurator repository
* Email: [ketut.kumajaya@gmail.com](mailto:ketut.kumajaya@gmail.com)
* GitHub: [kumajaya/kiiota-blog](https://github.com/kumajaya/kiiota-blog)
