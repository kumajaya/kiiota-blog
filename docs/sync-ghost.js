const fs = require('fs');
const path = require('path');

const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_API_KEY = process.env.GHOST_API_KEY;
const POSTS_PATH = path.join(__dirname, '_posts');

function sanitizeForYAML(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, ' ');
}

async function syncPosts() {
  try {
    const res = await fetch(`${GHOST_API_URL}?key=${GHOST_API_KEY}&include=tags`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);

    const data = await res.json();
    if (!fs.existsSync(POSTS_PATH)) fs.mkdirSync(POSTS_PATH, { recursive: true });

    data.posts.forEach(post => {
      const fileName = `${post.published_at.substr(0,10)}-${post.slug}.md`;
      const filePath = path.join(POSTS_PATH, fileName);

      const title = sanitizeForYAML(post.title);
      const excerpt = sanitizeForYAML(post.custom_excerpt || post.excerpt || '');
      const feature_image = sanitizeForYAML(post.feature_image);
      const feature_image_caption = sanitizeForYAML(post.feature_image_caption);
      const tags = post.tags && post.tags.length > 0
        ? post.tags.map(t => `"${sanitizeForYAML(t.name)}"`).join(', ')
        : '';

      const content = `---
title: "${title}"
date: ${post.published_at.substr(0,10)}
tags: [${tags}]
excerpt: "${excerpt}"
feature_image: "${feature_image}"
feature_image_caption: "${feature_image_caption}"
---

${post.html}
`;

      fs.writeFileSync(filePath, content);
      console.log(`Synced: ${fileName}`);
    });

    console.log(`Total posts synced: ${data.posts.length}`);
    return data.posts.length;

  } catch (err) {
    console.error('Sync failed:', err);
    process.exit(1);
  }
}

syncPosts();
