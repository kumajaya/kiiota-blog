---
layout: base
title: "Kiiota Blog"
---

<p class="intro-text">
  Catatan teknis dan refleksi humanis dari dunia otomasi industri —
  dokumentasi, eksperimen, dan narasi yang lahir dari lapangan.
</p>

<div class="posts-container">
{% for post in site.posts %}
  <div class="post-item">
    {% if post.image %}
    <a href="{{ post.url | relative_url }}" class="post-image-link">
      <img src="{{ post.image }}" alt="{{ post.image_alt | default: post.title | escape }}" loading="lazy" class="post-image">
    </a>
    {% endif %}
    <div class="post-text">
      <a href="{{ post.url | relative_url }}" class="post-title">
        {{ post.title }}
      </a>
      <div class="post-meta">
        {{ post.date | date: "%B %d, %Y" }}
        {% if post.author and post.author.size > 0 %} • {{ post.author | join: ", " }}{% endif %}
        — {{ post.excerpt }}
      </div>
    </div>
  </div>
{% endfor %}
</div>

<style>
.intro-text {
  margin-bottom: 2rem;
  color: #4b5563;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.post-item {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.post-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.post-image-link {
  flex: 0 0 200px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

.post-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
}

.post-text {
  flex: 1 1 0;
  min-width: 0;
}

a.post-title {
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
}

.post-meta {
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.25rem;
}

@media (max-width: 640px) {
  .post-item {
    flex-direction: column;
  }
  .post-item a img {
    margin-right: 0;
    margin-bottom: 0.5rem;
    width: 100%;
  }
}
</style>
