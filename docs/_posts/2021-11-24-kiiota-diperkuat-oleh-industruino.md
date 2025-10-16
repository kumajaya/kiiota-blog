---
ghost_uuid: "1526a8a6-f65f-4ca8-be01-8e357fd669b0"
title: "Kiiota ditenagai oleh Industruino, Arduino, VS Code, dan PlatformIO"
date: "2021-11-24T01:16:49.000+07:00"
slug: "kiiota-diperkuat-oleh-industruino"
layout: "post"
excerpt: |
  Kami memilih Industruino untuk membangun Kiiota remote terminal unit dengan alasan kemudahan integrasi, dukungan pustaka yang luas Arduino, dan jaminan kehandalan standar industri.
image: "/kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-ir_attachment_207.jpeg"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Kiiota"
categories:
  - "kiiota"
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
url: "https://blog.kiiota.com/kiiota-diperkuat-oleh-industruino/"
comment_id: "619d1d005ba74e5326e584c0"
reading_time: 2
access: true
comments: true
---

{% raw %}
<p><strong>Tentang Industruino</strong></p><p><strong>Industruino </strong>adalah perangkat yang kompatibel dengan Arduino berfitur lengkap yang ditempatkan di kotak DIN-rail + area <em>prototyping </em>+ LCD <em>onboard </em>+ panel membran. Dengan produk ini kita akan dapat menginstal aplikasi Arduino secara permanen dalam waktu singkat.</p><p>Baik digunakan untuk proyek otomatisasi, pencatat data, atau instalasi seni interaktif, Industruino menawarkan ketangguhan dengan sertifikat standar industri, banyak fitur, dan biaya terjangkau.</p><blockquote>Kiiota <em>remote terminal unit</em> dibangun menggunakan perangkat keras Industruino. Kode sumber menggunakan pustaka-pustaka Arduino standar yang stabil dan dipelihara dengan baik.</blockquote><hr><p><strong>Tentang Arduino</strong></p><p><strong>Arduino </strong>adalah perusahaan perangkat keras dan perangkat lunak <em>open source</em>, proyek, dan komunitas pengguna yang merancang dan memproduksi <em>single board microcontroller</em> dan kit <em>microcontroller</em> untuk membangun perangkat digital. Produk perangkat kerasnya dilisensikan di bawah lisensi CC-BY-SA, sedangkan perangkat lunak dilisensikan di bawah GNU Lesser General Public License (LGPL) atau GNU General Public License (GPL), yang mengizinkan pembuatan papan Arduino dan distribusi perangkat lunak oleh siapa pun. <em>Board </em>Arduino tersedia secara komersial dari situs web resmi atau melalui distributor resmi.</p><p>Arduino <em>Integrated Development Environment</em> (IDE) adalah aplikasi lintas platform (untuk Windows, macOS, dan Linux) yang ditulis dalam bahasa pemrograman Java. Berasal dari IDE untuk bahasa Processing and Wiring. Kode sumber untuk IDE dirilis di bawah Lisensi Publik Umum GNU, versi 2.</p><blockquote>Dalam pengembangan Kiiota digunakan Microsoft Visual Studio Code dengan ekstensi PlatformIO IDE yang lebih profesional dalam pengembangan kode yang kompleks, meskipun untuk itu perlu dilakukan beberapa perubahan dalam kode sumber Industruino.</blockquote><figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-vscode_platformio-1.png" class="kg-image" alt loading="lazy" width="175" height="75"></figure><hr><p>Industruino siap untuk banyak hal karena sudah dilengkapi dengan 8 digital input/output, 4 kanal analog input (0-5V/0-10V/0-20mA/4-20mA), 2 kanal analog output 0-10V, dan koneksi RS485.</p><figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-ir_attachment_8352-2.jpeg" class="kg-image" alt loading="lazy" width="900" height="675" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/ir_attachment_8352-2.jpeg 600w, /kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-ir_attachment_8352-2.jpeg 900w" sizes="(min-width: 720px) 720px"></figure><p>Menggunakan Industruino sebagai basis pengembangan Kiiota sementara ini adalah solusi terbaik karena dengan sifat modularnya telah tersedia pula modul GSM untuk koneksi data yang siap diintegrasikan dengan mudah, standar perlindungan yang setara untuk kehandalan dalam periode waktu pemakain yang panjang.</p><figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-ir_attachment_8260.jpeg" class="kg-image" alt loading="lazy" width="900" height="600" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/ir_attachment_8260.jpeg 600w, /kiiota-blog/assets/media/1526a8a6-f65f-4ca8-be01-8e357fd669b0-ir_attachment_8260.jpeg 900w" sizes="(min-width: 720px) 720px"></figure><p>Kiiota handal karena didukung oleh perangkat keras, perangkat lunak, dan developer yang handal, berpengalaman, <em>open source minded</em>. Basis kode pemrograman dan formula sudah teruji bertahun-tahun sebelum Kiiota itu sendiri lahir. Menghitung volume tangki dalam berbagai bentuk, baik vertikal maupun horisontal bukanlah masalah besar. Memperkirakan <em>density cryogenic liquid</em> dalam tangki bukan pula persoalan. Telemetri bukan hanya menyampaikan data tetapi bagaimana data itu diproses sehingga memberikan informasi dengan kesalahan sekecil-kecilnya.</p>
{% endraw %}