---
ghost_uuid: "a1215085-212d-4479-b1d8-0e1ac8f8a3c0"
title: "Aplikasi Vessel Volume"
date: "2021-11-25T17:02:28.000+07:00"
slug: "aplikasi-vessel-volume"
layout: "post"
excerpt: |
  Aplikasi ini adalah sebuah pencapaian, rangkuman dari riset bertahun-tahun bagaimana cara menghitung volume cairan cryogenic dan non-cryogenic di dalam tangki dengan penyimpangan yang rendah.
image: "/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-photo1638264139.jpeg"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Vessel Volume"
categories:
  - "vessel-volume"
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
url: "https://blog.kiiota.com/aplikasi-vessel-volume/"
comment_id: "619f1ae4664261b1a275633b"
reading_time: 4
access: true
comments: true
---

{% raw %}
<p>Saat mengembangkan telemetri, perumusan penghitungan volume tangki sangat diperlukan karena informasi yang dikirimkan dari <em>remote terminal</em> hanyalah data level (terkini harus disertai juga dengan tekanan). Data itu tidak mungkin digunakan untuk mencari nilai tertentu dari tabel konversi, tidak efisien dan penyimpangannya bisa besar.</p><!--kg-card-begin: html--><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3259792147934954"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-3259792147934954"
     data-ad-slot="7759992442"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><!--kg-card-end: html--><p>Tangki ada dalam berbagai macam bentuk: <em>ellipsoidal</em> (2:1 <em>elliptical</em>), <em>spherical</em> (<em>hemispherical</em>), <em>torispherical</em> (ASME F&amp;D, <em>standard</em> F&amp;D, 80:10 F&amp;D) dan <em>flat heads</em>, baik vertikal maupun horisontal. Perhitungan volume tangki vertikal bisa menggunakan pendekatan linear dengan sedikit kesalahan di bagian <em>bottom head</em> – dan <em>top head</em> – tetapi pendekatan linear tidak berlaku sama sekali untuk tangki horisontal karena kenaikan volume tangki horisontal tidak pernah berbanding lurus dengan level. Referensi perhitungan yang digunakan adalah tulisan <strong><em>Calculating Tank Volume</em></strong> karya <em>Dan Jones, Ph.D., P.E</em>, seorang ahli kimia proses Stockhausen Louisiana, LLC. Aplikasi Vessel Volume kemudian dikembangkan secara bertahap mulai dari rumusan menggunakan bahasa Python kemudian diadaptasi ke Excel dan akhirnya sebagai aplikasi web dengan JavaScript. Vessel Volume dimungkinkan pula sebagai aplikasi berdiri sendiri untuk Android dan iPhone dengan bantuan Cordova.</p><p>Ada empat bagian dari aplikasi Vessel Volume yang akan dijelaskan di sini. Bagian pertama adalah masukan data-data dimensi tangki. Ada beberapa tipe tangki yang disertakan untuk dapat dipilih langsung dari <em>database</em> (sementara ada 65 tipe dari berbagai macam merk) tetapi tetap dimungkinkan untuk memasukkan data secara manual.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-data-1.png" class="kg-image" alt loading="lazy" width="691" height="844" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/data-1.png 600w, /kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-data-1.png 691w"><figcaption>Gambar 1. Data Dimensi Tangki</figcaption></figure><p>Bagian kedua adalah hasil dari perhitungan volume berdasarkan masukan data bagian pertama. Bentuk tangki dan posisi level digambarkan secara <em>real time</em>, cukup menarik.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-volume-result.png" class="kg-image" alt loading="lazy" width="691" height="841" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/volume-result.png 600w, /kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-volume-result.png 691w"><figcaption>Gambar 2. Hasil Perhitungan Volume</figcaption></figure><p>Dengan dua bagian di atas ternyata tidaklah cukup untuk melakukan perhitungan volume cairan di dalam tangki dengan benar karena berat jenis cairan di dalamnya tidaklah tetap, berubah-ubah tergantung temperatur. Level cairan di dalam tangki tidak bisa diduga dengan tepat berdasarkan pembacaan indikator level jika berat jenis yang digunakan tidak sesuai.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-level.png" class="kg-image" alt loading="lazy" width="344" height="457"><figcaption>Gambar 3. Pengukuran Level menggunakan DP Transmitter</figcaption></figure><p>Dari gambar 3 diketahui bahwa level cairan di dalam tangki ditemukan dengan membagi pengukuran DP transmitter dengan <em>specific gravity</em>. Definisi <em>specific gravity</em> adalah perbandingan <em>density</em> cairan terhadap <em>density</em> air. Jika <em>density</em> cairan berubah, maka hasil perhitungan level cairan juga ikut berubah. Jadi, meskipun rumusan volume tangki sudah diketahui, dimensi tangki diketahui, tetapi jika <em>density</em> cairan yang digunakan salah, maka perhitungan volume akan menghasilkan nilai yang salah. Tabel konversi bawaan pabrik biasanya menggunakan <em>standard density</em> cairan pada 1 atm kecuali dinyatakan lain. Kenyataannya tidak ada tangki yang kita operasikan pada 1 atm, pasti lebih tinggi.</p><p>Untuk beberapa tangki yang tersedia sensor temperatur, <em>density</em> cairan bisa dihitung berdasarkan temperatur terukur tetapi hal itu tidak dimungkinkan untuk tangki lainnya yang tidak tersedia sensor. Untuk keperluan ini maka temperatur dihitung dari <em>saturated vapor pressure</em>. Temperatur dihitung dari tekanan tercipta dalam bejana tertutup, kemudian hasilnya digunakan untuk menduga <em>density</em>. Perhitungan ini ditambahkan ke aplikasi Vessel Volume sehingga kemudian aplikasi mampu menghitung volume tangki pada <em>density</em> cairan yang berbeda-beda. Menduga <em>density</em> berdasarkan <em>saturated vapor pressure</em> menggunakan rumus yang berbeda-beda tergantung jenis cairan masing-masing. Sementara ini Vessel Volume mendukung oksigen, nitrogen, argon, karbondioksida, dan nitrous oksida.</p><!--kg-card-begin: html--><p>
Referensi:
<ul>
  <li><a href="http://www.ddbst.com/calculation.html?ref=blog.kiiota.com" target="_blank"><b>DDBST Online Calculation</b></a></li>
  <li><a href="https://webbook.nist.gov/?ref=blog.kiiota.com" target="_blank"><b>NIST Chemistry WebBook</b></a></li>
  <li><a href="https://lar.bnl.gov/properties/basic.html?ref=blog.kiiota.com" target="_blank"><b>LAr Basic Properties</b></a></li>
  <li><a href="https://books.google.co.id/books?id=N8RcH8juG_YC&lpg=PP1&hl=id&pg=PA103&ref=blog.kiiota.com#v=onepage&q&f=true" target="_blank"><b>Physical Properties of Liquids and Gases</b></a></li>
  <li><a href="http://edge.rit.edu/edge/P07106/public/Nox.pdf?ref=blog.kiiota.com" target="_blank"><b>Thermophysical Properties of Nitrous Oxide</b></a></li>
</ul>
</p><!--kg-card-end: html--><p>Di bagian tiga bisa dimasukkan tekanan tangki atau temperatur jika memungkinkan sebagai dasar perhitungan <em>density</em>. Nilai <em>transmitter reading</em> yang terkait dengan level di bagian pertama akan otomatis berubah jika tekanan atau temperatur dirubah atau sebaliknya level akan berubah jika nilai <em>transmitter reading</em> dirubah pada nilai tekanan/temperatur yang sudah ditentukan.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-product.png" class="kg-image" alt loading="lazy" width="691" height="557" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/product.png 600w, /kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-product.png 691w"><figcaption>Gambar 4. Data Tekanan atau Temperatur</figcaption></figure><p>Bagian empat adalah akhir dari rangkaian kerja aplikasi Vessel Volume. Nilai pembacaan indikator level yang dimasukkan di <em>transmitter reading</em> bagian tiga akan secara langsung dihitung sehingga kita memperoleh hasil volume cairan dan berat cairan + berat gas di dalam tangki, termasuk konversinya ke fasa gas.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-product-result.png" class="kg-image" alt loading="lazy" width="691" height="488" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/product-result.png 600w, /kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-product-result.png 691w"><figcaption>Gambar 5. Hasil Perhitungan Keseluruhan</figcaption></figure><p>Tombol tiga garis di bagian kiri atas digunakan untuk membuka menu samping untuk keperluan beberapa hal.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-top-menu-1.png" class="kg-image" alt loading="lazy" width="691" height="62" srcset="https://blog.kiiota.com/content/images/size/w600/2021/11/top-menu-1.png 600w, /kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-top-menu-1.png 691w"><figcaption>Gambar 6. Tombol Tiga Garis</figcaption></figure><!--kg-card-begin: markdown--><p>Di menu samping bisa melakukan beberapa hal:</p>
<ul>
<li><strong>About</strong> untuk membuka informasi tentang aplikasi</li>
<li><strong>Unit</strong> untuk merubah unit yang digunakan aplikasi</li>
<li><strong>Conversion</strong> untuk membuka fitur konversi</li>
<li><strong>Online Data Sync</strong> untuk memperbaharui <em>database</em> tangki secara <em>online</em></li>
<li><strong>Encryption</strong> untuk keperluan enkripsi data</li>
<li><strong>Contact</strong> untuk menghubungi developer aplikasi</li>
</ul>
<!--kg-card-end: markdown--><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-side-menu.png" class="kg-image" alt loading="lazy" width="180" height="462"><figcaption>Gambar 7. Menu Samping</figcaption></figure><p>Fitur konversi dari volume cairan ke berat dan gas atau sebaliknya di aplikasi Vessel Volume berbeda dengan umumnya karena di sini <em>density</em> cairan bisa disesuaikan tidak melulu <em>density</em> pada 1 atm.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-conversion-3.png" class="kg-image" alt loading="lazy" width="600" height="599" srcset="/kiiota-blog/assets/media/a1215085-212d-4479-b1d8-0e1ac8f8a3c0-conversion-3.png 600w"><figcaption>Gambar 8. Dialog untuk Melakukan Konversi</figcaption></figure><!--kg-card-begin: html--><blockquote>Karena demikian berharganya, maka akses ke aplikasi <a href="https://iiot.kiiota.com/vessel/?ref=blog.kiiota.com" target="_blank"><b>Vessel Volume</b></a> dilindungi dengan password. Hubungi kami jika membutuhkan bantuan untuk hal-hal yang terkait dengan pembahasan di artikel ini.<blockquote><!--kg-card-end: html-->
{% endraw %}