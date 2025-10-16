---
ghost_uuid: "3fcb6204-d1aa-413a-b936-c5bb5a9e10f6"
title: "Aplikasi Gas Conversion"
date: "2021-11-26T17:48:01.000+07:00"
slug: "aplikasi-gas-conversion"
layout: "post"
excerpt: |
  Fitur dari aplikasi Vessel Volume yang dibuka untuk publik. Untuk melakukan konversi volume cairan ke volume gas dan berat, begitu juga sebaliknya. Produk yang didukung meliputi oksigen, nitrogen, argon, karbon dioksida, dan nitrous oksida.
image: "https://images.unsplash.com/photo-1631571772417-4585cb47814f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxnYXN8ZW58MHx8fHwxNjM3OTk0ODEz&ixlib=rb-1.2.1&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@itscakefortea?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">david Griffiths</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Vessel Volume"
categories:
  - "vessel-volume"
featured: false
visibility: "public"
primary_author: "Ketut Putu Kumajaya"
codeinjection_head: |
  <style>
      .container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          min-height: 800px;
      }
  
      .responsive-iframe {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border: none;
      }
  </style>
codeinjection_foot: ""
canonical_url: ""
og_title: ""
og_description: ""
og_image: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
url: "https://blog.kiiota.com/aplikasi-gas-conversion/"
comment_id: "61a048f2664261b1a27567aa"
reading_time: 1
access: true
comments: true
---

{% raw %}
<p>Ini adalah bagian dari aplikasi Vessel Volume yang dipisahkan menjadi aplikasi web tersendiri. Yang unik dibandingkan konversi lainnya adalah di sini <em>density</em> cairan bisa disesuaikan tidak melulu <em>density</em> pada 1 atm (0 barg). Dengan memasukkan nilai <em>saturated pavor pressure</em> atau <em>saturated temperature</em>, maka <em>density</em> yang digunakan otomatis disesuaikan. Konversi ke <em>actual volume</em> gas juga bisa dirubah ke temperatur yang diinginkan, bisa 30°C atau mungkin 25°C. Satuan bisa disesuaikan menurut keperluan.</p><blockquote><strong>Tips!</strong> $$\small \text{bar}_\text{absolute} = \text{bar}_\text{gauge} + 1.01325$$</blockquote><!--kg-card-begin: html--><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3259792147934954"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-3259792147934954"
     data-ad-slot="7759992442"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><!--kg-card-end: html--><!--kg-card-begin: html--><div class="container"> 
  <iframe class="responsive-iframe" src="https://kumajaya.github.io/gasconv/"></iframe>
</div><!--kg-card-end: html-->
{% endraw %}