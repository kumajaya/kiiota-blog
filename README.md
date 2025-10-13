# Technical & Sustainability Digest

![Build Status](https://img.shields.io/github/actions/workflow/status/kumajaya/automation-blog/sync.yml?branch=main)
![License](https://img.shields.io/github/license/kumajaya/automation-blog)
![GitHub Repo Size](https://img.shields.io/github/repo-size/kumajaya/automation-blog)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)

## Deskripsi

Repositori ini menyimpan konten blog dalam bentuk **statis** dan menyediakan mekanisme **sinkronisasi otomatis** dari Ghost CMS. Tujuan utamanya adalah sebagai arsip teknis, backup konten, dan sumber untuk **static site generator** (Jekyll, Hugo, Eleventy) yang dipublikasikan melalui GitHub Pages.

## Struktur Repositori

```
automation-blog/
├── docs/
│   ├── _posts/              # Konten blog dalam format Jekyll
│   ├── sync-ghost.js        # Script sinkronisasi konten dari Ghost API
│   ├── _config.yml          # Konfigurasi Jekyll & Minima
│   ├── index.md             # Halaman utama
│   ├── about.md             # Halaman About
│   ├── _includes/
│   │   ├── custom-head.html   # Head tambahan (PrismJS, KaTeX, FontAwesome)
│   │   └── sub-footer.html    # Footer tambahan (JS PrismJS, KaTeX, Mermaid)
│   └── _layouts/
│       └── post.html        # Override layout post, menambahkan feature_image, excerpt, dsb.
└── .github/
    └── workflows/
        └── sync.yml         # Workflow GitHub Actions untuk sinkronisasi

```

## Sinkronisasi Konten

Konten blog diambil dari Ghost CMS menggunakan **API Ghost** melalui `sync-ghost.js`. Sinkronisasi dijadwalkan dengan workflow GitHub Actions (`sync.yml`) setiap hari:

1. Ambil konten terbaru dari Ghost CMS (`GHOST_API_URL` + `GHOST_API_KEY`)
2. Simpan sebagai markdown di `docs/_posts/`
3. Commit & push otomatis ke repository

Workflow juga dapat dijalankan manual melalui `workflow_dispatch`.

## Publikasi

Repositori dapat langsung digunakan untuk build Jekyll atau static site generator lain. Hasil build dapat dipublikasikan melalui **GitHub Pages**:

[https://kumajaya.github.io/automation-blog/](https://kumajaya.github.io/automation-blog/)

## Setup Lokal

Jika ingin menjalankan situs secara lokal:

1. Clone repository:
   ```bash
   git clone https://github.com/kumajaya/automation-blog.git
   cd automation-blog
   ```

2. Install dependensi Jekyll (Ruby & Bundler harus terpasang):

   ```bash
   bundle install
   ```
3. Jalankan server lokal:

   ```bash
   bundle exec jekyll serve
   ```
4. Buka di browser: `http://localhost:4000`

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
* GitHub: [kumajaya/automation-blog](https://github.com/kumajaya/automation-blog)
