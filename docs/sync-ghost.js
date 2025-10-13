const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_API_KEY = process.env.GHOST_API_KEY;

const POSTS_PATH = path.join(__dirname, '_posts');
const MEDIA_PATH = path.join(__dirname, 'assets/media');
const BASE_URL = '/automation-blog'; // Base path GitHub Pages

// Helper untuk sanitize YAML
function sanitizeForYAML(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ');
}

// Download file dari URL ke path lokal jika belum ada
async function downloadFile(url, dest) {
  if (fs.existsSync(dest)) return console.log(`Already exists: ${dest}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Downloaded: ${dest}`);
}

// Extract semua image src dari HTML content
function extractImages(html) {
  const regex = /<img [^>]*src=["']([^"']+)["'][^>]*>/g;
  const urls = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function syncPosts() {
  try {
    const res = await fetch(`${GHOST_API_URL}?key=${GHOST_API_KEY}&include=tags`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    const data = await res.json();

    if (!fs.existsSync(POSTS_PATH)) fs.mkdirSync(POSTS_PATH, { recursive: true });
    if (!fs.existsSync(MEDIA_PATH)) fs.mkdirSync(MEDIA_PATH, { recursive: true });

    for (const post of data.posts) {
      const fileName = `${post.published_at.substr(0,10)}-${post.slug}.md`;
      const filePath = path.join(POSTS_PATH, fileName);

      const title = sanitizeForYAML(post.title);
      const excerpt = sanitizeForYAML(post.custom_excerpt || post.excerpt || '');
      const tags = post.tags && post.tags.length > 0
        ? post.tags.map(t => `"${sanitizeForYAML(t.name)}"`).join(', ')
        : '';

      // Download feature_image jika ada
      let feature_image = '';
      if (post.feature_image) {
        const urlObj = new URL(post.feature_image);
        const mediaFileName = path.basename(urlObj.pathname);
        const mediaPath = path.join(MEDIA_PATH, mediaFileName);
        await downloadFile(post.feature_image, mediaPath);
        feature_image = `${BASE_URL}/assets/media/${mediaFileName}`;
      }

      const feature_image_caption = sanitizeForYAML(post.feature_image_caption || '');

      // Download semua img di konten HTML
      let contentHtml = post.html;
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

      const content = `---
title: "${title}"
date: ${post.published_at.substr(0,10)}
tags: [${tags}]
excerpt: "${excerpt}"
feature_image: "${feature_image}"
feature_image_caption: "${feature_image_caption}"
---

${contentHtml}
`;

      fs.writeFileSync(filePath, content);
      console.log(`Synced post: ${fileName}`);
    }

    console.log(`Total posts synced: ${data.posts.length}`);
    return data.posts.length;

  } catch (err) {
    console.error('Sync failed:', err);
    process.exit(1);
  }
}

syncPosts();
