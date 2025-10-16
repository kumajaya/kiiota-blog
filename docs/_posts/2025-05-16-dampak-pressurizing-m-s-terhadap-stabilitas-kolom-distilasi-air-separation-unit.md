---
ghost_uuid: "b61d6633-e441-4ed1-9cfd-eac89bb9c0c7"
title: "Dampak Pressurizing M/S terhadap Stabilitas Kolom Distilasi Air Separation Unit"
date: "2025-05-16T01:09:04.000+07:00"
slug: "dampak-pressurizing-m-s-terhadap-stabilitas-kolom-distilasi-air-separation-unit"
layout: "post"
excerpt: |
  Pendahuluan
  
  
  Proses regenerasi molecular sieve (M/S) dalam air separation unit (ASU) memiliki peran penting dalam menjaga efisiensi adsorpsi dan pemurnian awal pasokan gas. Namun, tahap pressurizing dalam proses ini sering kali menyebabkan fluktuasi tekanan dalam kolom distilasi, yang dapat memengaruhi pemisahan fraksional nitrogen, oksigen, dan argon.
  
  
  Tulisan ini akan menguraikan bagaimana pressurizing M/S memengaruhi stabilitas tekanan kolom distilasi, serta menjelaskan strategi optimasi ko
image: "https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGluZHVzdHJ5fGVufDB8fHx8MTc0NzMzMDgwMHww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@umityildirim?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Ümit Yıldırım</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "air separation unit"
categories:
  - "air-separation-unit"
featured: false
visibility: "public"
primary_author: "Ketut Putu Kumajaya"
codeinjection_head: ""
codeinjection_foot: ""
canonical_url: ""
og_title: ""
og_description: ""
og_image: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
url: "https://blog.kiiota.com/dampak-pressurizing-m-s-terhadap-stabilitas-kolom-distilasi-air-separation-unit/"
comment_id: "682624ddf733d603f79ee8ea"
reading_time: 2
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h2 id="pendahuluan"><strong>Pendahuluan</strong></h2>
<p>Proses regenerasi molecular sieve (M/S) dalam air separation unit (ASU) memiliki peran penting dalam menjaga efisiensi adsorpsi dan pemurnian awal pasokan gas. Namun, tahap <strong>pressurizing</strong> dalam proses ini sering kali menyebabkan fluktuasi tekanan dalam kolom distilasi, yang dapat memengaruhi pemisahan fraksional nitrogen, oksigen, dan argon.</p>
<p>Tulisan ini akan menguraikan bagaimana pressurizing M/S memengaruhi stabilitas tekanan kolom distilasi, serta menjelaskan strategi optimasi kontrol gas nitrogen (GAN) dan waste gas untuk menjaga kestabilan sistem.</p>
<hr>
<h2 id="dampak-pressurizing-terhadap-kolom-distilasi"><strong>Dampak Pressurizing terhadap Kolom Distilasi</strong></h2>
<p>Pressurizing M/S berlangsung dalam siklus terjadwal, di mana adsorben dipulihkan tekanannya menggunakan feed air dari air compressor. Selama proses ini, sistem mengalami beberapa perubahan penting:</p>
<h3 id="1%EF%B8%8F%E2%83%A3-pengurangan-feed-dry-air-ke-kolom-bawah"><strong>1️⃣ Pengurangan Feed Dry Air ke Kolom Bawah</strong></h3>
<ul>
<li>Saat pressurizing M/S berlangsung, flow air compressor cukup banyak digunakan untuk mengembalikan tekanan tower M/S, sehingga pasokan feed dry air ke kolom bawah berkurang.</li>
<li>Penambahan penggunaan udara tekan untuk pressurizing M/S mengurangi jumlah udara yang masuk ke kolom distilasi.</li>
<li>Penurunan pasokan ini bukan karena performa air compressor yang menurun (bahkan mungkin meningkat karena tersedia ruang lebih luas di downstream compressor), melainkan karena alokasi udara yang meningkat untuk proses regenerasi M/S.</li>
</ul>
<h3 id="2%EF%B8%8F%E2%83%A3-penurunan-tekanan-kolom-atas"><strong>2️⃣ Penurunan Tekanan Kolom Atas</strong></h3>
<ul>
<li>Karena feed dry air ke kolom bawah berkurang, distribusi tekanan dalam kolom distilasi terganggu, menyebabkan penurunan tekanan kolom atas.</li>
<li>Pada saat yang sama venting valve ke atmosfir yang mendadak membuka jika tidak disertai dengan kontrol flow regenerasi yang responsif, maka flow regenerasi yang sebenarnya dibuang bisa mendadak meningkat sehingga mengakibatkan penurunan tekanan kolom atas.</li>
<li>Hal ini berpengaruh terhadap keseimbangan pemisahan gas, karena tekanan yang lebih rendah dapat mengubah tekanan parsial nitrogen, oksigen, dan argon di dalam kolom distilasi.</li>
</ul>
<h3 id="3%EF%B8%8F%E2%83%A3-perubahan-titik-didih-akibat-fluktuasi-tekanan"><strong>3️⃣ Perubahan Titik Didih akibat Fluktuasi Tekanan</strong></h3>
<ul>
<li>Penurunan tekanan dalam kolom distilasi mengubah titik didih masing-masing komponen gas.</li>
<li>Ini dapat mempengaruhi efisiensi separasi fraksional, karena tekanan yang tidak stabil menyebabkan ketidakseimbangan dalam komposisi produk.</li>
<li>Jika tekanan turun terlalu drastis, kemurnian nitrogen, oksigen, dan argon bisa terganggu.</li>
</ul>
<p>Pengamatan tren DCS menunjukkan adanya <strong>fluktuasi tekanan yang signifikan</strong> selama pressurizing, terutama pada <strong>GAN yang dikendalikan berdasarkan flow</strong>.</p>
<hr>
<h2 id="peran-waste-gas-dalam-menahan-tekanan-kolom"><strong>Peran Waste Gas dalam Menahan Tekanan Kolom</strong></h2>
<p>Dalam sistem ASU, <strong>waste gas</strong> memiliki peran penting dalam menjaga kestabilan tekanan kolom:</p>
<ul>
<li>Stabilitas waste gas: Selama pressurizing, venting waste gas biasanya dikurangi untuk mempertahankan tekanan karena pada dasarnya pada tahap ini flow regenerasi terbuang.</li>
<li>Fluktuasi GAN: GAN yang dikendalikan berdasarkan flow cenderung menyebabkan tekanan turun drastis selama pressurizing.</li>
</ul>
<p>Waste gas dapat memberikan kompensasi parsial terhadap tekanan kolom, namun <strong>ketidakseimbangan tetap terjadi</strong> jika <strong>pengendalian GAN berbasis flow</strong>.</p>
<hr>
<h2 id="mengapa-flow-control-pada-gan-menyebabkan-ketidakseimbangan"><strong>Mengapa Flow Control pada GAN Menyebabkan Ketidakseimbangan?</strong></h2>
<p>Kontrol GAN berbasis flow memiliki keterbatasan dalam mempertahankan kestabilan tekanan, karena:</p>
<ul>
<li>GAN dilepaskan dalam jumlah tetap tanpa mempertimbangkan fluktuasi tekanan kolom.</li>
<li>Selama pressurizing, kolom kehilangan feed gas, tetapi flow control tetap berusaha mempertahankan aliran.</li>
<li>Tekanan waste gas lebih stabil karena venting dikurangi, sementara GAN menunjukkan fluktuasi signifikan.</li>
</ul>
<hr>
<h2 id="strategi-optimasi-pressure-control-untuk-gan"><strong>Strategi Optimasi Pressure Control untuk GAN</strong></h2>
<p>Untuk mengurangi ketidakseimbangan, penerapan <strong>kontrol berbasis tekanan (pressure control)</strong> lebih tepat. Strategi yang dapat diterapkan meliputi:</p>
<h3 id="1%EF%B8%8F%E2%83%A3-venting-gan-berbasis-tekanan"><strong>1️⃣ Venting GAN berbasis tekanan</strong></h3>
<p>Menyesuaikan venting GAN berdasarkan <strong>tekanan tetap</strong>, bukan <strong>flow tetap</strong>. Bahkan bila perlu implementasi kontrol dengan set point kondisional.</p>
<h3 id="2%EF%B8%8F%E2%83%A3-optimasi-kontrol-waste-gas"><strong>2️⃣ Optimasi kontrol waste gas</strong></h3>
<p>Menggunakan waste gas untuk membantu menjaga stabilitas tekanan.</p>
<h3 id="3%EF%B8%8F%E2%83%A3-analisis-tren-dcs"><strong>3️⃣ Analisis tren DCS</strong></h3>
<p>Mengevaluasi dan menetapkan parameter PID control yang optimal.</p>
<hr>
<h2 id="kesimpulan-dan-rekomendasi"><strong>Kesimpulan dan Rekomendasi</strong></h2>
<p>✅ Pressurizing M/S berpotensi menyebabkan penurunan tekanan kolom, yang berdampak terhadap pemisahan gas karena penurununan flow dry air.<br>
✅ Waste gas dapat membantu menstabilkan tekanan, tetapi fluktuasi GAN tetap menjadi tantangan jika menggunakan flow control.<br>
✅ Pressure control lebih efektif dibandingkan flow control dalam menjaga kestabilan tekanan selama pressurizing.<br>
✅ Optimasi kontrol GAN berbasis pressure meningkatkan stabilitas sistem dan efisiensi pemisahan gas.</p>
<p>Dengan penerapan <strong>strategi pressure control pada GAN</strong>, sistem ASU dapat lebih stabil dalam menghadapi <strong>efek regenerasi M/S</strong>, memastikan <strong>kualitas pemisahan gas tetap optimal dan efisiensi operasional meningkat</strong>. 🚀</p>
<!--kg-card-end: markdown-->
{% endraw %}