---
ghost_uuid: "b7e8c137-ce6b-45b8-bee0-b35e753f72bd"
title: "Merekonstruksi dimensi tangki"
date: "2021-11-24T18:06:00.000+07:00"
slug: "merekonstruksi-dimensi-tangki"
layout: "post"
excerpt: |
  Jika informasi dimensi tangki tidak tersedia atau tidak terpercaya, maka perlu dilakukan rekonstruksi dimensi agar perhitungan volume tangki bisa dilakukan dengan benar
image: "/kiiota-blog/assets/media/b7e8c137-ce6b-45b8-bee0-b35e753f72bd-Screenshot-2021-11-24-at-17-26-29-pi-4-d-2--h-a-3--v-where-v-10-43-0-95--h-4-086--a-d-4---Wolfram-Alpha.png"
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
url: "https://blog.kiiota.com/merekonstruksi-dimensi-tangki/"
comment_id: "619e0effed7ef2758b1db37c"
reading_time: 3
access: true
comments: true
---

{% raw %}
<p>Aplikasi <strong>Vessel Volume</strong> dibuat untuk membantu melakukan perhitungan volume dan berat dari pembacaan indikator level. Aplikasi juga mampu untuk menghitung <em>density</em> cairan berdasarkan informasi tekanan atau temperatur sehingga perhitungan level dan konversinya semakin presisi. Untuk dapat melakukan itu termasuk membuat tabel konversi, aplikasi harus dilengkapi dengan data dimensi tangki yang benar. Kadangkala informasi dimensi tidak tersedia atau tidak terpercaya, aplikasi menjadi tidak berguna atau hasilnya menyimpang. Di sini akan dibahas bagaimana merekonstruksi dimensi tangki sehingga konversi bisa dilakukan dengan lebih akurat. Perhitungan yang digunakan menggunakan pendekatan bentuk tangki <em>ellipsoidal</em>, baik vertikal maupun horisontal.</p><!--kg-card-begin: markdown--><blockquote>
<p><strong>Yang dibutuhkan:</strong></p>
<ol>
<li>Aplikasi <strong>Vessel Volume</strong></li>
<li>Aplikasi <strong>WolframAlpha</strong> baik offline ataupun <a href="https://www.wolframalpha.com/?ref=blog.kiiota.com">online</a> atau aplikasi <strong>Fraction Calculator</strong></li>
<li>Data water volume dan full trycock volume (umumnya 95% water volume) tangki</li>
</ol>
</blockquote>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p><strong>Langkah-langkah untuk tangki vertikal:</strong></p>
<ol>
<li>Lakukan kalibrasi indikator level dan tekanan</li>
<li>Isi tangki sampai full trycock, tidak lebih</li>
<li>Tunggu sampai tekanan stabil untuk memastikan <em>saturated</em></li>
<li>Periksa lagi <em>full trycock</em>, semakin tepat maka perhitungan semakin presisi</li>
<li>Catat pembacaan indikator level dan tekanan</li>
<li>Pilih jenis produk dan unit yang sesuai di aplikasi Vessel Volume</li>
<li>Masukkan data tekanan (dalam <em>absolute pressure</em>) dan level dari langkah 5 ke aplikasi Vessel Volume, aplikasi akan otomatis menghitung level cairan sebenarnya di dalam tangki</li>
<li>Hitung diameter tangki dengan formula: $$\scriptsize{\frac{\Pi}{4}d^2\left(h-\frac{a}{3}\right)=v\text{ where } v=x,h=y,a=\frac{d}{4}}$$ atau dalam bentuk input WolframAlpha <a href="https://www.wolframalpha.com/input/?i=pi%2F4d%5E2%28h-a%2F3%29%3Dv+where+v%3Dx%2C+h%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4d^2(h-a/3)=v where v=x, h=y, a=d/4</a>, x diganti dengan volume <em>full trycock</em> tangki dalam meter kubik dan y diganti dengan level cairan dalam meter atau <a href="https://www.wolframalpha.com/input/?i=pi%2F4*d%5E2*%28h-a%2F3%29%3Dv+where+v%3D231*x%2C+h%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>(h-a/3)=v where v=231*x, h=y, a=d/4</a>, x dalam US gallon dan y dalam inch)</li>
<li>Hitung <em>straight lenght</em> tangki dengan formula: $$\scriptsize{\frac{\Pi}{4}d^2l+\frac{\Pi}{3}d^2a=v\text{ where }v=x,d=y,a=\frac{d}{4}}$$ atau dalam bentuk input WolframAlpha <a href="https://www.wolframalpha.com/input/?i=pi%2F4d%5E2l%2Bpi%2F3d%5E2a%3Dv+where+v%3Dx%2C+d%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>l+pi/3<em>d^2</em>a=v where v=x, d=y, a=d/4</a>, x diganti dengan <em>water volume</em> tangki dalam meter kubik dan y diganti dengan diameter hasil perhitungan langkah 8 dalam meter atau <a href="https://www.wolframalpha.com/input/?i=pi%2F4*d%5E2*l%2Bpi%2F3*d%5E2*a%3Dv+where+v%3D231*x%2C+d%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>l+pi/3<em>d^2</em>a=v where v=231*x, d=y, a=d/4</a>, x dalam US gallon dan y dalam inch)</li>
<li>Kembali ke aplikasi Vessel Volume. Pilih bentuk tangki vertikal dan <em>head ellipsoidal</em>, masukkan data-data hasil perhitungan sebelumnya di kolom yang sesuai</li>
<li>Jika hasil perhitungan menunjukkan level <em>full trycock</em> melewati straight lenght, maka ada kemungkinan terjadi penyimpangan. Perlu dilakukan pengisian sampai full <em>water volume</em>, ulangi kembali langkah 5 – 7</li>
<li>Hitung kembali diameter tangki dengan formula: $$\scriptsize{\frac{\Pi}{4}d^2l+\frac{\Pi}{3}d^2a=v\text{ where }v=x,l=y-2a,a=\frac{d}{4}}$$ atau dalam bentuk input WolframAlpha <a href="https://www.wolframalpha.com/input/?i=pi%2F4d%5E2l%2Bpi%2F3d%5E2a%3Dv+where+v%3Dx%2C+l%3Dy-2*a%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>l+pi/3<em>d^2</em>a=v where v=x, l=y-2*a, a=d/4</a>, x diganti dengan <em>full water volume</em> tangki dalam meter kubik dan y diganti dengan level cairan dalam meter atau <a href="https://www.wolframalpha.com/input/?i=pi%2F4*d%5E2*l%2Bpi%2F3*d%5E2*a%3Dv+where+v%3D231*x%2C+l%3Dy-2*a%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>l+pi/3<em>d^2</em>a=v where v=231<em>x, l=y-2</em>a, a=d/4</a>, x dalam US gallon dan y dalam inch). Setelah diameter ditemukan, <em>straight lenght</em> bisa dihitung</li>
<li>Laporkan hasil perhitungan ke maintainer aplikasi Vessel Volume untuk bersama-sama melakukan pemeriksaan</li>
<li>Buat tabel konversi dengan <em>working pressure</em> yang sesuai berdasarkan data aplikasi Vessel Volume yang sudah terperiksa dan tersedia di list aplikasi</li>
</ol>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p><strong>Langkah-langkah untuk tangki horisontal:</strong></p>
<p>Pada prinsipnya menggunakan teknik yang sama dengan cara sebelumnya dengan beberapa pengecualian:</p>
<ol>
<li>Langkah 2: Isi tangki sampai <em>full water volume</em></li>
<li>Langkah 7: Data yang diperoleh adalah level cairan dalam tangki sekaligus diameter tangki</li>
<li>Langkah 8: Tidak diperlukan</li>
<li>Langkah 9: Hitung <em>straight lenght</em> tangki menggunakan formula: $$\scriptsize{\frac{\Pi}{4}d^2l+\frac{\Pi}{3}d^2a=v\text{ where }v=x,d=y,a=\frac{d}{4}}$$ atau dalam bentuk input WolframAlpha <a href="https://www.wolframalpha.com/input/?i=pi%2F4d%5E2l%2Bpi%2F3d%5E2a%3Dv+where+v%3Dx%2C+d%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4<em>d^2</em>l+pi/3<em>d^2</em>a=v where v=x, d=y, a=d/4</a>, x diganti dengan <em>water volume</em> tangki dalam meter kubik dan y diganti dengan diameter tangki dalam meter atau <a href="https://www.wolframalpha.com/input/?i=pi%2F4d%5E2l%2Bpi%2F3d%5E2a%3Dv+where+v%3D231x%2C+d%3Dy%2C+a%3Dd%2F4&ref=blog.kiiota.com">pi/4d^2l+pi/3d^2a=v where v=231x, d=y, a=d/4</a>, x dalam US gallon dan y dalam inch)</li>
<li>Langkah 10: Pilih bentuk tangki horisontal dan <em>head ellipsoidal</em>.</li>
</ol>
<!--kg-card-end: markdown--><blockquote>Juga dimungkinkan untuk melakukan rekonstruksi berdasarkan tabel konversi yang disediakan oleh pabrikan tangki. Seringkali pabrikan tidak memberikan data dimensi tangki secara jelas tetapi memberikan tabel konversi. Data pabrikan umumnya adalah konversi dalam 1 atm kecuali disebutkan berbeda. Level dan trycock volume tersedia, tidak perlu melakukan pengisian tangki sampai full trycock atau full water volume.</blockquote><p>Setelah data dimensi tangki tersedia, maka konversi akan bisa dilakukan untuk berbagai macam produk yang didukung oleh aplikasi Vessel Volume dan dalam berbagai <em>working pressure</em> dalam jangkauan yang lebar, tidak terbatas pada 1 atm yang di dunia nyata sulit dicapai. Atau karena kebutuhannya maka tangki perlu dioperasikan pada tekanan yang lebih tinggi.</p>
{% endraw %}