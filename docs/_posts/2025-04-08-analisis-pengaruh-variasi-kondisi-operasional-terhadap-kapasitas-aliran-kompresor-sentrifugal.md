---
ghost_uuid: "feb232c9-7c89-4085-8b51-dfda1ca6e468"
title: "Analisis Pengaruh Variasi Kondisi Operasional terhadap Kapasitas Aliran Kompresor Sentrifugal"
date: "2025-04-08T21:04:04.000+07:00"
slug: "analisis-pengaruh-variasi-kondisi-operasional-terhadap-kapasitas-aliran-kompresor-sentrifugal"
layout: "post"
excerpt: |
  Pendahuluan
  
  
  Kompresor sentrifugal merupakan peralatan vital dalam berbagai industri proses, termasuk pada unit pemisah udara (ASU). Dalam pengoperasiannya, kapasitas aliran kompresor dapat dipengaruhi oleh beberapa faktor seperti temperatur inlet, rasio kompresi, dan daya motor. Artikel ini membahas bagaimana variasi kondisi operasional tersebut mempengaruhi kapasitas aliran kompresor sentrifugal berdasarkan pendekatan isothermal dan efisiensi kompresor yang diasumsikan tetap.
  
  
  
  
  Contoh Spesi
image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDYxfHxhbmFseXNpc3xlbnwwfHx8fDE3NDQxMjA3NDZ8MA&ixlib=rb-4.0.3&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@chrisliverani?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Chris Liverani</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "compressor"
  - "centrifugal"
categories:
  - "compressor"
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
url: "https://blog.kiiota.com/analisis-pengaruh-variasi-kondisi-operasional-terhadap-kapasitas-aliran-kompresor-sentrifugal/"
comment_id: "67ef5fb2c10c6903d551a649"
reading_time: 4
access: true
comments: true
---

{% raw %}
<h3 id="pendahuluan">Pendahuluan</h3>
<p>Kompresor sentrifugal merupakan peralatan vital dalam berbagai industri proses, termasuk pada unit pemisah udara (ASU). Dalam pengoperasiannya, kapasitas aliran kompresor dapat dipengaruhi oleh beberapa faktor seperti temperatur inlet, rasio kompresi, dan daya motor. Artikel ini membahas bagaimana variasi kondisi operasional tersebut mempengaruhi kapasitas aliran kompresor sentrifugal berdasarkan pendekatan isothermal dan efisiensi kompresor yang diasumsikan tetap.</p>
<hr>
<h3 id="contoh-spesifikasi-desain-kompresor">Contoh Spesifikasi Desain Kompresor</h3>
<ul>
<li><strong>Tipe</strong>: Sentrifugal multi-stage</li>
<li><strong>Medium</strong>: Nitrogen</li>
<li><strong>Flow Desain</strong>: 96000 Nm³/h</li>
<li><strong>Jangkauan Kendali</strong>: 75% ~ 105%</li>
<li><strong>Inlet Pressure</strong>: 0.522 MPa abs</li>
<li><strong>Outlet Pressure</strong>: 3.1 MPa abs</li>
<li><strong>Inlet Temperature</strong>: 37°C</li>
<li><strong>Shaft Power</strong>: 6850 kW</li>
<li><strong>Efisiensi Motor</strong>: 97.6%</li>
</ul>
<hr>
<h3 id="dasar-teori-koreksi-kapasitas-aliran">Dasar Teori Koreksi Kapasitas Aliran</h3>
<p>Untuk menyederhanakan analisis, proses kompresi dianggap isothermal, dan efisiensi kompresor dianggap tetap. Hubungan antara perubahan parameter dan kapasitas aliran (<span>Q<sub><i>real</i><sub></sub></sub></span>) dapat dihitung menggunakan persamaan koreksi sebagai berikut:</p>
<p>\( Q_{real} = Q_{design} \times \sqrt{\left( \frac{T_{design}}{T_{real}} \cdot \frac{PR_{design}}{PR_{real}} \cdot \frac{P_{real}}{P_{design}} \right)} \)</p>
<p>Rasio kompresi (PR) dihitung berdasarkan tekanan absolut pada outlet dan inlet kompresor:</p>
<p>\( PR = \frac{Press_{outlet}}{Press_{inlet}} \)</p>
<p>di mana:</p>
<ul>
<li><em>Q</em>: Kapasitas aliran (misalnya dalam Nm³/h)</li>
<li><em>T</em>: temperatur inlet dalam Kelvin</li>
<li><em>PR</em>: rasio kompresi (outlet/inlet dalam tekanan absolut)</li>
<li><em>P</em>: shaft power (misalnya dalam kW)</li>
</ul>
<blockquote>
<p>Akar pangkat dua digunakan dalam persamaan koreksi kapasitas aliran karena hubungan daya terhadap aliran gas dalam kompresor sentrifugal bersifat kuadratis. Artinya, jika daya meningkat dua kali lipat, maka aliran gas hanya meningkat √2 kali lipat, bukan dua kali lipat. Hubungan ini juga berlaku pada perubahan temperatur dan rasio kompresi dalam asumsi isothermal dan efisiensi konstan.</p>
</blockquote>
<h3 id="catatan-tentang-proses-isothermal-dan-peran-intercooleraftercooler">Catatan tentang Proses Isothermal dan Peran Intercooler/Aftercooler</h3>
<p>Dalam perhitungan ini digunakan pendekatan proses isothermal, yaitu mengasumsikan bahwa suhu gas tetap konstan selama proses kompresi. Hal ini menyederhanakan perhitungan karena perubahan energi internal diabaikan, dan hanya kerja tekanan yang dihitung.</p>
<p>Namun secara nyata, kompresor sentrifugal bekerja mendekati <strong>proses adiabatik</strong> — gas dikompresi tanpa pertukaran panas sempurna, sehingga suhu gas meningkat. Untuk menurunkan suhu gas kembali dan meningkatkan efisiensi keseluruhan, sistem biasanya dilengkapi dengan <strong>intercooler</strong> (di antara stage) dan <strong>aftercooler</strong> (di akhir proses kompresi). Pendinginan ini berfungsi:</p>
<ul>
<li>Menurunkan suhu gas sebelum masuk stage berikutnya → mengurangi beban kerja stage berikutnya,</li>
<li>Menurunkan temperatur akhir sebelum masuk ke sistem proses downstream → menjaga integritas peralatan.</li>
</ul>
<p>Dengan <strong>pendinginan antar tahap yang cukup efisien</strong>, suhu gas mendekati kondisi awal di setiap tahap. Oleh karena itu, dalam estimasi kapasitas aliran dengan asumsi isothermal, pendekatan ini tetap <strong>relevan dan cukup akurat</strong> untuk perbandingan performa kompresor antar kondisi operasi.</p>
<hr>
<h3 id="contoh-perhitungan-kapasitas-jika-daya-motor-7800-kw-kondisi-lain-tetap-seperti-desain">Contoh perhitungan kapasitas jika daya motor 7800 kW, kondisi lain tetap seperti desain</h3>
<p>Dengan motor 7800 kW dan efisiensi 97.6%, daya poros (shaft power) adalah:</p>
<p>\( P_{shaft} = 7800 \times 0.976 = 7612.8 \text{ kW} \)</p>
<p>Menggunakan formula:</p>
<p>\( Q_{real} = 96000 \times \sqrt{ \frac{7612.8}{6850} } = 101204.11 \text{ Nm}^3/\text{h} \)</p>
<h3 id="contoh-perhitungan-daya-motor-jika-kapasitas-100800-nm%C2%B3h-kondisi-lain-tetap-seperti-desain">Contoh perhitungan daya motor jika kapasitas 100800 Nm³/h, kondisi lain tetap seperti desain</h3>
<p>Jika diketahui flow aktual sebesar 100800 Nm³/h, dengan temperatur inlet dan rasio kompresi tetap sama seperti desain, maka daya motor yang dibutuhkan dapat dihitung dengan membalik formula:</p>
<p>\( P_{real} = P_{design} \times \left( \frac{Q_{real}}{Q_{design}} \right)^2 \)</p>
<p>\( P_{real} = \frac{6850}{0.976} \times \left( \frac{100800}{96000} \right)^2 = 7018.44 \times 1.1025 = 7737.83 \text{ kW} \)</p><hr>
<h3 id="hasil-perhitungan-dan-analisis">Hasil Perhitungan dan Analisis</h3>
<h3 id="1-variasi-daya-motor-kondisi-lain-tetap-seperti-desain">1. Variasi Daya Motor (kondisi lain tetap seperti desain)</h3>
<table>
<thead>
<tr>
<th>Motor Power (kW)</th>
<th>Shaft Power (kW)</th>
<th>Flow (Nm³/h)</th>
</tr>
</thead>
<tbody>
<tr>
<td>6600</td>
<td>6441.60</td>
<td>93094</td>
</tr>
<tr>
<td>6700</td>
<td>6539.20</td>
<td>93797</td>
</tr>
<tr>
<td>6800</td>
<td>6636.80</td>
<td>94494</td>
</tr>
<tr>
<td><strong>7018</strong></td>
<td><strong>6850.00</strong></td>
<td><strong>96000</strong></td>
</tr>
<tr>
<td>7100</td>
<td>6929.60</td>
<td>96556</td>
</tr>
<tr>
<td>7200</td>
<td>7027.20</td>
<td>97234</td>
</tr>
<tr>
<td>7300</td>
<td>7124.80</td>
<td>97907</td>
</tr>
</tbody>
</table>
<figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/feb232c9-7c89-4085-8b51-dfda1ca6e468-Variasi_Daya_Motor.svg" class="kg-image" alt="" loading="lazy" width="960" height="576"></figure><p><em>Analisis:</em><br>Kapasitas aliran meningkat seiring dengan bertambahnya daya poros. Peningkatan flow sekitar 5% dari desain membutuhkan kenaikan daya sebesar 10.3%.</p><h3 id="2-variasi-temperatur-inlet-daya-dan-rasio-kompresi-tetap">2. Variasi Temperatur Inlet (daya dan rasio kompresi tetap)</h3>
<table>
<thead>
<tr>
<th>Inlet Temp (°C)</th>
<th>Inlet Temp (K)</th>
<th>Flow (Nm³/h)</th>
</tr>
</thead>
<tbody>
<tr>
<td>45</td>
<td>318.15</td>
<td>94785</td>
</tr>
<tr>
<td>41</td>
<td>314.15</td>
<td>95387</td>
</tr>
<tr>
<td>39</td>
<td>312.15</td>
<td>95692</td>
</tr>
<tr>
<td><strong>37</strong></td>
<td><strong>310.15</strong></td>
<td><strong>96000</strong></td>
</tr>
<tr>
<td>35</td>
<td>308.15</td>
<td>96311</td>
</tr>
<tr>
<td>33</td>
<td>306.15</td>
<td>96625</td>
</tr>
<tr>
<td>30</td>
<td>303.15</td>
<td>97102</td>
</tr>
</tbody>
</table>
<figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/feb232c9-7c89-4085-8b51-dfda1ca6e468-Variasi_Temp_Inlet.svg" class="kg-image" alt="" loading="lazy" width="960" height="576"></figure><p><em>Analisis:</em><br>Penurunan temperatur inlet menyebabkan peningkatan densitas gas, yang pada kondisi daya tetap, menghasilkan peningkatan kapasitas aliran. Mengoperasikan pada temperatur inlet yang lebih rendah meningkatkan efisiensi.</p><h3 id="3-variasi-rasio-kompresi-daya-dan-temperatur-inlet-tetap">3: Variasi Rasio Kompresi (daya dan temperatur inlet tetap)</h3>
<table>
<thead>
<tr>
<th>PR = Pout / Pin</th>
<th>Flow (Nm³/h)</th>
</tr>
</thead>
<tbody>
<tr>
<td>6.20</td>
<td>93955</td>
</tr>
<tr>
<td>6.10</td>
<td>94722</td>
</tr>
<tr>
<td>6.00</td>
<td>95508</td>
</tr>
<tr>
<td><strong>5.94</strong></td>
<td><strong>96000</strong></td>
</tr>
<tr>
<td>5.85</td>
<td>96725</td>
</tr>
<tr>
<td>5.75</td>
<td>97562</td>
</tr>
<tr>
<td>5.65</td>
<td>98422</td>
</tr>
</tbody>
</table>
<figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/feb232c9-7c89-4085-8b51-dfda1ca6e468-Variasi_Rasio_Kompresi.svg" class="kg-image" alt="" loading="lazy" width="960" height="576"></figure><p><em>Analisis:</em><br>Rasio kompresi yang lebih tinggi membutuhkan lebih banyak daya, sehingga kapasitas aliran menurun secara gradual jika daya tetap. Pada tekanan inlet yang lebih rendah dengan target outlet yang tetap meningkatkan rasio kompresi, menurunkan efisiensi. Tetapi kondisi proses tetap harus diperhatikan karena mungkin proses membutuhkan kondisi tekanan yang lebih tinggi dibandingkan flow yang lebih besar.</p><hr>
<h3 id="formula-python">Formula Python</h3>
<p>Berikut contoh penerapan kalkulasi dalam bahasa Python:</p>

<!--kg-card-begin: html-->
<script src="https://gist.github.com/kumajaya/d756def7e69c4197a800e178def8ad2f.js"></script>
<!--kg-card-end: html-->
<p>📎 Bisa langsung dicoba di: 👉 <a href="https://onecompiler.com/python?ref=blog.kiiota.com">Python Online Compiler</a></p>
<h3 id="formula-structured-text">Formula Structured Text</h3>
<p>Contoh penerapan kalkulasi dalam bahasa Structured Text (ST) untuk sistem kontrol PLC atau DCS:</p>

<!--kg-card-begin: html-->
<script src="https://gist.github.com/kumajaya/0e1a98b99d824d67b14f5f8a00e4afaf.js"></script>
<!--kg-card-end: html-->
<h3 id="formula-wolframalpha">Formula WolframAlpha</h3>
<p>Contoh penerapan kalkulasi untuk WolframAlpha:</p>
<p>📎 Link siap jalan: 👉 <a href="https://www.wolframalpha.com/input?i=Q%3DQ1*sqrt%28%28T1%2FT%29*%28P1%2FP%29*%28H%2FH1%29%29+where+Q1%3D96000%2CT1%3D310.15%2CT%3D310.15%2CP1%3D5.94%2CP%3D5.94%2CH1%3D7018%2CQ%3D100800&ref=blog.kiiota.com">Klik di sini untuk mencari daya motor</a></p>
<hr>
<h3 id="kesimpulan">Kesimpulan</h3>
<p>Analisis variasi ini menunjukkan bahwa kapasitas aliran kompresor sentrifugal sangat dipengaruhi oleh parameter daya poros, temperatur masuk, dan rasio kompresi. Dalam sistem yang dikendalikan dengan motor tetap, pemahaman pengaruh ini penting untuk optimasi beban dan pemanfaatan maksimum kapasitas tanpa risiko overloading. Pemilihan motor dengan kapasitas sedikit lebih besar dari kebutuhan desain — seperti 7800 kW untuk desain 7000 kW — merupakan keputusan engineering yang logis untuk menjamin fleksibilitas operasi.</p>
<hr>
<p>Artikel ini ditulis dengan bantuan kecerdasan buatan dengan arahan, penyesuaian, dan validasi oleh penulis.</p>

{% endraw %}