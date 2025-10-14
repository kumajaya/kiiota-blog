/**
 * Script sinkronisasi Ghost → Jekyll/GitHub Pages
 * ------------------------------------------------
 * - Mengambil post dari Ghost API (dengan authors & tags)
 * - Menghasilkan file Markdown di folder `_posts`
 * - Mengunduh semua media (feature_image & <img> di konten) ke `assets/media`
 * - Menulis frontmatter YAML yang kaya metadata (SEO, sosial, dsb.)
 *
 * NOTE:
 * - Membutuhkan Node.js v18+ (karena `fetch` & `replaceAll` sudah built-in)
 * - Field `feature_image` diganti menjadi `image`
 * - Field `feature_image_caption` diganti menjadi `image_caption`
 *   → pastikan template Jekyll/Hugo membaca field baru ini
 */

const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Konfigurasi dari environment variable
const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_API_KEY = process.env.GHOST_API_KEY;

// Path output
const POSTS_PATH = path.join(__dirname, '_posts');
const MEDIA_PATH = path.join(__dirname, 'assets/media');
const BASE_URL = '/automation-blog';   // Base path untuk GitHub Pages
const LAYOUT_DEFAULT = 'post';         // Default layout Jekyll

// Utility: sanitize string agar aman ditulis ke YAML frontmatter
function sanitizeForYAML(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')  // escape backslash
    .replace(/"/g, '\\"')    // escape double quote
    .replace(/\r?\n/g, ' '); // ganti newline dengan spasi
}

// Utility: download file dari URL ke path lokal (skip jika sudah ada)
async function downloadFile(url, dest) {
  if (fs.existsSync(dest)) return console.log(`Already exists: ${dest}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Downloaded: ${dest}`);
}

// Utility: extract semua <img src="..."> dari HTML content
function extractImages(html) {
  const regex = /<img [^>]*src=["']([^"']+)["'][^>]*>/g;
  const urls = [];
  let match;
  while ((match = regex.exec(html)) !== null) urls.push(match[1]);
  return urls;
}

// Fungsi utama: sinkronisasi post Ghost → Markdown Jekyll
async function syncPosts() {
  try {
    // 1. Fetch posts dari Ghost API
    const res = await fetch(`${GHOST_API_URL}?key=${GHOST_API_KEY}&include=authors,tags`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    const data = await res.json();

    // 2. Pastikan folder output ada
    if (!fs.existsSync(POSTS_PATH)) fs.mkdirSync(POSTS_PATH, { recursive: true });
    if (!fs.existsSync(MEDIA_PATH)) fs.mkdirSync(MEDIA_PATH, { recursive: true });

    // 3. Loop setiap post → generate file Markdown
    for (const post of data.posts) {
      const datePrefix = post.published_at.substr(0, 10);
      const fileName = `${datePrefix}-${post.slug}.md`;
      const filePath = path.join(POSTS_PATH, fileName);

      // 3a. Susun frontmatter standar
      const fm = {
        title: sanitizeForYAML(post.title),
        date: post.published_at, // ISO string (bisa dipotong ke YYYY-MM-DD jika perlu)
        slug: post.slug,
        layout: LAYOUT_DEFAULT,
        excerpt: sanitizeForYAML(post.custom_excerpt || post.excerpt || ''),
        image: '', // akan diisi jika ada feature_image
        image_caption: sanitizeForYAML(post.feature_image_caption || ''),
        author: post.authors ? post.authors.map(a => sanitizeForYAML(a.name)) : [],
        tags: post.tags ? post.tags.map(t => sanitizeForYAML(t.name)) : [],
        categories: post.primary_tag ? [sanitizeForYAML(post.primary_tag.name)] : []
      };

      // 3b. Tambahkan field metadata Ghost (SEO, sosial, dsb.)
      fm.featured = post.featured || false;
      fm.visibility = post.visibility || '';
      fm.primary_author = post.primary_author ? sanitizeForYAML(post.primary_author.name) : '';
      fm.codeinjection_head = post.codeinjection_head || '';
      fm.codeinjection_foot = post.codeinjection_foot || '';
      fm.canonical_url = post.canonical_url || '';
      fm.og_title = post.og_title || '';
      fm.og_description = post.og_description || '';
      fm.og_image = post.og_image || '';
      fm.twitter_title = post.twitter_title || '';
      fm.twitter_description = post.twitter_description || '';
      fm.twitter_image = post.twitter_image || '';
      fm.custom_excerpt = post.custom_excerpt || '';
      fm.url = post.url || '';
      fm.comment_id = post.comment_id || '';
      fm.reading_time = post.reading_time || 0;
      fm.access = post.access !== undefined ? post.access : true;
      fm.comments = post.comments !== undefined ? post.comments : false;
      fm.feature_image_alt = post.feature_image_alt || '';

      // 3c. Download feature_image (jika ada) → simpan ke assets/media
      if (post.feature_image) {
        const urlObj = new URL(post.feature_image);
        const mediaFileName = path.basename(urlObj.pathname);
        const mediaPath = path.join(MEDIA_PATH, mediaFileName);
        await downloadFile(post.feature_image, mediaPath);
        fm.image = `${BASE_URL}/assets/media/${mediaFileName}`;
      }

      // 3d. Download semua <img> di konten HTML → rewrite path
      let contentHtml = post.html || '';
      const imgUrls = extractImages(contentHtml);
      for (const imgUrl of imgUrls) {
        try {
          const urlObj = new URL(imgUrl);
          const mediaFileName = path.basename(urlObj.pathname);
          const mediaPath = path.join(MEDIA_PATH, mediaFileName);
          await downloadFile(imgUrl, mediaPath);
          contentHtml = contentHtml.replaceAll(imgUrl, `${BASE_URL}/assets/media/${mediaFileName}`);
        } catch (e) {
          console.warn(`Skipping invalid URL: ${imgUrl}`);
        }
      }

      // 3e. Tulis file Markdown dengan frontmatter + konten HTML
      let frontMatter = '---\n';
      for (const [key, value] of Object.entries(fm)) {
        if (Array.isArray(value)) {
          frontMatter += `${key}:\n`;
          value.forEach(item => frontMatter += `  - "${item}"\n`);
        } else if (typeof value === 'string') {
          frontMatter += `${key}: "${value}"\n`;
        } else {
          frontMatter += `${key}: ${value}\n`;
        }
      }
      frontMatter += '---\n\n';

      fs.writeFileSync(filePath, frontMatter + contentHtml, 'utf-8');
      console.log(`Synced post: ${fileName}`);
    }

    console.log(`Total posts synced: ${data.posts.length}`);
    return data.posts.length;

  } catch (err) {
    console.error('Sync failed:', err);
    process.exit(1);
  }
}

// Jalankan sinkronisasi
syncPosts();
