---
ghost_uuid: "9ff86893-c6fc-44e8-a833-8299301d47f9"
title: "Analisis Efisiensi Isentropik Kompresor Sentrifugal berdasarkan Temperatur dan Tekanan"
date: "2026-09-26T10:51:16.000+07:00"
slug: "analisis-efisiensi-isentropik-kompresor-sentrifugal-berdasarkan-temperatur-dan-tekanan"
layout: "post"
excerpt: |
  Efisiensi kompresor multi-stage bisa dianalisis dari temperatur dan tekanan setiap stage. Tulisan ini membahas apa yang masih bisa dilakukan jika tekanan antar-stage tidak tersedia, dan cara membedakan masalah stage dari masalah cooler.
image: "https://images.unsplash.com/photo-1748851556700-560d9b7454ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDkxfHxjZW50cmlmdWdhbCUyMGNvbXByZXNzb3J8ZW58MHx8fHwxNzkwMzk0MDY5fDA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@omikron?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Valentin</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Compressor"
  - "Centrifugal"
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
url: "https://blog.kiiota.com/analisis-efisiensi-isentropik-kompresor-sentrifugal-berdasarkan-temperatur-dan-tekanan/"
comment_id: "6ab6c4a16692d205326691bd"
reading_time: 7
access: true
comments: true
---

{% raw %}
<h3 id="pendahuluan">Pendahuluan</h3>
<p>Kompresor yang kurang efisien membutuhkan kerja lebih besar untuk menaikkan tekanan yang sama, dan kerja tambahan itu muncul sebagai temperatur discharge yang lebih tinggi. Karena itu efisiensi isentropik sebuah stage bisa dihitung hanya dari <strong>temperatur dan tekanan</strong>, tanpa flowmeter.</p>
<p>Pada kompresor single-stage, perhitungannya langsung. Pada kompresor multi-stage dengan intercooler, rumusnya sama, tetapi harus diterapkan <strong>per stage</strong>. Tulisan ini membahas kenapa, apa yang masih bisa dilakukan jika tekanan antar-stage tidak tersedia, dan bagaimana membaca efisiensi stage bersama kinerja cooler. Contohnya diambil dari kompresor recycle nitrogen 4-stage yang juga dipakai di artikel <a href="https://blog.kiiota.com/analisis-pengaruh-variasi-kondisi-operasional-terhadap-kapasitas-aliran-kompresor-sentrifugal/">Analisis Pengaruh Variasi Kondisi Operasional terhadap Kapasitas Aliran Kompresor Sentrifugal</a>.</p>
<hr>
<h3 id="rumus-efisiensi-isentropik">Rumus Efisiensi Isentropik</h3>
<p>Pada kompresi ideal tanpa rugi (isentropik), temperatur discharge hanya ditentukan oleh temperatur suction dan rasio tekanan r = P_out/P_in:</p>
<p>\( T_{out,isen} = T_{in} \times r^{(k-1)/k} \)</p>
<p>Pada kompresi nyata yang praktis adiabatik, kerja yang dibutuhkan lebih besar, sehingga temperatur discharge aktual lebih tinggi. Perbandingan kenaikan temperatur ideal dan aktual adalah efisiensi isentropik:</p>
<p>\( \eta = \frac{T_{out,isen} - T_{in}}{T_{out,aktual} - T_{in}} \)</p>
<p>Temperatur dalam Kelvin, dan untuk udara atau nitrogen (k−1)/k ≈ 0.2857. Ini pendekatan gas ideal; pada tekanan stage akhir, sifat gas nyata sedikit menyimpang, tetapi penyimpangan itu relatif tetap sehingga tidak mengganggu perbandingan terhadap nilai historis.</p>
<p>Rumus ini berlaku untuk <strong>satu proses kompresi tanpa pendinginan di tengahnya</strong>: suction dan discharge pada kompresor single-stage, atau satu stage pada kompresor multi-stage, dengan temperatur discharge diukur sebelum cooler.</p>
<p>Hasilnya cukup peka terhadap sensor. Sebagai ilustrasi, pada stage dengan rasio tekanan sekitar 1.5 dan temperatur seperti contoh di bawah, error 1°C pada temperatur discharge atau error 1% pada rasio tekanan menggeser efisiensi sekitar 2 poin. Karena itu angka efisiensi lebih bisa dipercaya sebagai <strong>tren</strong> daripada sebagai nilai absolut.</p>
<hr>
<h3 id="kenapa-harus-per-stage">Kenapa Harus Per Stage</h3>
<p>Godaan yang sering muncul adalah memakai temperatur suction stage 1, temperatur discharge stage akhir, dan rasio tekanan overall. Hasilnya bisa ratusan persen; pada kompresor contoh di bawah, sekitar 480%.</p>
<p>Penyebabnya adalah cooler. Rumus di atas menghitung kenaikan temperatur seolah seluruh kompresi terjadi tanpa pendinginan, sedangkan temperatur di discharge stage akhir hanya "mengingat" kenaikan temperatur stage terakhir. Panas yang sudah dibuang cooler di antara stage tidak ada di dalam persamaan.</p>
<p>Ada alasan kedua yang lebih penting dalam praktik: <strong>degradasi stage awal hampir tidak terlihat di ujung kompresor</strong>. Dalam model ilustratif kompresor 4-stage dengan efektivitas cooler 85%, jika efisiensi stage 1 turun dari 80% ke 75%, temperatur discharge stage 1 naik sekitar 3°C. Tetapi cooler 1 membuang hampir semua kenaikan itu, dan yang sampai ke discharge stage akhir hanya sekitar 0.02°C. Masalah di stage 1 jauh lebih mudah ditemukan dari pengukuran stage 1 sendiri.</p>
<hr>
<h3 id="contoh-kompresor-recycle-nitrogen-4-stage">Contoh: Kompresor Recycle Nitrogen 4-Stage</h3>
<p>Snapshot DCS berikut memiliki temperatur suction dan discharge setiap stage, tetapi tekanan hanya tersedia di suction stage 1 dan discharge stage akhir. Rasio tekanan overall sekitar 6.09.</p>
<table>
<thead>
<tr>
<th>Stage</th>
<th>Suction</th>
<th>Discharge</th>
<th>Kenaikan temperatur</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>31°C</td>
<td>87°C</td>
<td>56°C</td>
</tr>
<tr>
<td>2</td>
<td>32°C</td>
<td>77°C</td>
<td>45°C</td>
</tr>
<tr>
<td>3</td>
<td>32°C</td>
<td>84°C</td>
<td>52°C</td>
</tr>
<tr>
<td>4</td>
<td>33°C</td>
<td>74°C</td>
<td>41°C</td>
</tr>
</tbody>
</table>
<p>Tanpa tekanan antar-stage, ada dua hal yang tetap bisa dihitung.</p>
<p><strong>1. Estimasi efisiensi rata-rata stage.</strong> Selama temperatur suction setiap stage hampir sama, jumlah kenaikan temperatur ideal semua stage relatif tidak sensitif terhadap cara rasio tekanan dibagi. Pada contoh ini, pembagian yang cukup berbeda (misalnya 1.70/1.55/1.50/1.54) hanya mengubah jumlahnya kurang dari 0.1%. Jadi efisiensi rata-rata bisa diperkirakan dari rasio tekanan overall saja, dengan asumsi pembagian rata:</p>
<p>\( \bar{\eta} = \frac{\sum_i T_{in,i} \left( PR^{(k-1)/(k \cdot n)} - 1 \right)}{\sum_i \left( T_{out,i} - T_{in,i} \right)} \)</p>
<p>dengan n jumlah stage. Hasilnya adalah rata-rata berbobot oleh kenaikan temperatur aktual. Pada snapshot ini, estimasi efisiensi rata-rata stage sekitar <strong>86.6%</strong>.</p>
<p>Sebagai pembanding, dari data desain kompresor ini (96000 Nm³/h, daya poros 6850 kW, rasio tekanan 5.94, suction 37°C), dengan asumsi rasio tekanan terbagi rata, c_p rata-rata, dan rugi mekanis sekitar 1.5%, estimasi efisiensi desainnya sekitar <strong>86.5%</strong>. Secara keseluruhan, kompresor masih bekerja dekat efisiensi desainnya.</p>
<p><strong>2. Efisiensi per stage dengan asumsi rasio tekanan terbagi rata.</strong> Jika rasio tekanan overall dibagi rata (akar pangkat empat dari 6.09, sekitar 1.57 per stage), efisiensi keempat stage menjadi:</p>
<table>
<thead>
<tr>
<th>Stage</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
</tr>
</thead>
<tbody>
<tr>
<td>Efisiensi, asumsi rasio rata</td>
<td>75%</td>
<td>93%</td>
<td>81%</td>
<td>103%</td>
</tr>
</tbody>
</table>
<p>Stage 4 di atas 100%, jadi angka ini tidak bisa ditafsirkan sebagai efisiensi stage sebenarnya. Penyebab utamanya bias dari asumsi pembagian rata: stage 1 kemungkinan memikul rasio lebih besar, stage 4 lebih kecil. Error sensor atau sifat gas bisa menambah, tetapi tidak cukup menjelaskan selisih sebesar ini.</p>
<p>Tetapi selama pembagian rasio antar-stage tidak banyak berubah, bias ini juga <strong>relatif stabil</strong>. Polanya cenderung tetap: stage 1 terbaca lebih rendah dan stage 4 lebih tinggi. Karena itu angka ini tetap berguna jika dibandingkan dengan <strong>nilainya sendiri saat kompresor sehat</strong>, sama seperti approach cooler dibandingkan dengan nilainya saat bersih. Jika stage 1 biasanya terbaca 75% lalu turun ke 71% pada kondisi operasi serupa, stage 1 memburuk.</p>
<p>Jika tekanan antar-stage tersedia, rumus yang sama dipakai dengan rasio tekanan stage yang sebenarnya, dan hasilnya mendekati efisiensi stage sebenarnya.</p>
<hr>
<h3 id="kinerja-cooler">Kinerja Cooler</h3>
<p>Cooler menentukan temperatur suction stage berikutnya. Kerja kompresi sebanding dengan temperatur suction absolut, sehingga suction 5°C lebih panas menambah kerja stage itu sekitar 1.6%. Cooler yang memburuk tidak mengubah efisiensi stage, tetapi menaikkan konsumsi daya.</p>
<p>Dari temperatur gas masuk dan keluar cooler serta temperatur cooling water, ada tiga indikator:</p>
<ul>
<li><strong>Approach</strong>: temperatur gas keluar dikurangi temperatur cooling water masuk. Semakin besar, semakin buruk.</li>
<li><strong>Efektivitas</strong> (berbasis temperatur): seberapa besar bagian dari beda temperatur maksimum yang berhasil dimanfaatkan cooler. Nilainya setara dengan efektivitas heat exchanger sebenarnya jika kapasitas panas air jauh lebih besar dari gas, seperti pada contoh ini.</li>
<li><strong>Kenaikan temperatur cooling water</strong>: petunjuk beban panas dan flow air.</li>
</ul>
<p>\( \varepsilon = \frac{T_{gas,masuk} - T_{gas,keluar}}{T_{gas,masuk} - T_{cw,masuk}} \)</p>
<p>Pada kompresor contoh, dengan cooling water masuk 30°C:</p>
<table>
<thead>
<tr>
<th>Cooler</th>
<th>Gas masuk</th>
<th>Gas keluar</th>
<th>Approach</th>
<th>Efektivitas</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cooler 1</td>
<td>87°C</td>
<td>32°C</td>
<td>2°C</td>
<td>96%</td>
</tr>
<tr>
<td>Cooler 2</td>
<td>77°C</td>
<td>32°C</td>
<td>2°C</td>
<td>96%</td>
</tr>
<tr>
<td>Cooler 3</td>
<td>84°C</td>
<td>33°C</td>
<td>3°C</td>
<td>94%</td>
</tr>
<tr>
<td>Aftercooler</td>
<td>74°C</td>
<td>32°C</td>
<td>2°C</td>
<td>95%</td>
</tr>
</tbody>
</table>
<p>Approach pada snapshot ini sekitar 2–3°C. Baik atau buruknya tetap dinilai terhadap desain atau nilai saat bersih dari cooler itu sendiri. Angka ini konsisten dengan kenaikan temperatur cooling water gabungan yang hanya sekitar 4.4°C: flow air besar dibanding panas yang dibuang, sehingga gas bisa didinginkan sangat dekat ke temperatur air. Pada approach sekecil ini, selisih 1°C antar-cooler perlu dibaca dengan mempertimbangkan akurasi sensor.</p>
<p>Kombinasi ketiga indikator membantu menebak jenis masalah cooler. Secara kualitatif, model heat exchanger sederhana memberi pola berikut:</p>
<table>
<thead>
<tr>
<th>Kejadian</th>
<th>Approach</th>
<th>Efektivitas</th>
<th>Kenaikan T air</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fouling</td>
<td>naik tajam</td>
<td>turun</td>
<td>turun</td>
</tr>
<tr>
<td>Flow cooling water berkurang</td>
<td>naik sedikit</td>
<td>turun sedikit</td>
<td>naik tajam</td>
</tr>
<tr>
<td>Cooling water masuk lebih panas</td>
<td>turun sedikit</td>
<td>tetap</td>
<td>turun sedikit</td>
</tr>
<tr>
<td>Stage sebelumnya memburuk</td>
<td>naik sedikit</td>
<td>tetap</td>
<td>naik sedikit</td>
</tr>
</tbody>
</table>
<p>Baris terakhir penting: approach ikut naik sedikit ketika stage sebelumnya memburuk, karena gas yang masuk cooler lebih panas. Efektivitas tidak ikut berubah, sehingga lebih bersih sebagai indikator kondisi cooler.</p>
<hr>
<h3 id="membaca-stage-dan-cooler-bersama">Membaca Stage dan Cooler Bersama</h3>
<p>Efisiensi stage memakai temperatur suction stage itu sendiri. Jika cooler sebelumnya kotor, suction memang lebih panas, tetapi kenaikan suction itu sendiri tidak berarti efisiensi stage turun. Sebaliknya, gas yang lebih panas dari stage yang memburuk tidak dengan sendirinya mengubah efektivitas cooler, selama kondisi cooler lainnya sama. Keduanya membantu memisahkan dua sumber masalah yang gejalanya mirip. Tabel berikut adalah pola diagnosis awal, bukan kepastian penyebab:</p>
<table>
<thead>
<tr>
<th>Efisiensi stage</th>
<th>Efektivitas cooler sebelumnya</th>
<th>Indikasi</th>
</tr>
</thead>
<tbody>
<tr>
<td>Turun</td>
<td>Normal</td>
<td>Masalah di stage: fouling impeller, keausan, clearance</td>
</tr>
<tr>
<td>Normal</td>
<td>Turun</td>
<td>Masalah di cooler: fouling atau flow air kurang</td>
</tr>
<tr>
<td>Turun</td>
<td>Turun</td>
<td>Keduanya, atau penyebab bersama</td>
</tr>
<tr>
<td>Normal</td>
<td>Normal, tetapi suction naik</td>
<td>Cooling water lebih panas</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="menampilkan-di-dcs">Menampilkan di DCS</h3>
<p>Semua indikator ini bisa dihitung terus-menerus dan ditampilkan berdampingan dengan referensinya, misalnya rasio tekanan aktual di samping nilai desainnya:</p>
<ul>
<li>rasio tekanan overall, dengan referensi desain,</li>
<li>efisiensi rata-rata stage, dengan referensi desain,</li>
<li>efisiensi setiap stage (asumsi rasio rata), dengan referensi nilai stage itu saat sehat,</li>
<li>approach dan efektivitas setiap cooler, dengan referensi nilai saat bersih.</li>
</ul>
<p>Referensi "saat sehat" cukup diambil dari rata-rata periode ketika kompresor diketahui normal dan steady. Validitas angka dinilai oleh yang membaca: saat kompresor mati atau transient, nilainya memang tidak bermakna.</p>
<p>Function block berikut sengaja dibuat minimal.</p>
<p><strong>Efisiensi satu stage</strong>, satu instance per stage:</p>
<pre><code class="language-iecst">(* Efisiensi satu stage. PR = rasio tekanan overall dan N_Stage = jumlah
   stage (asumsi rasio rata), atau PR = rasio stage sebenarnya dan
   N_Stage = 1 jika tekanan antar-stage tersedia. *)
FUNCTION_BLOCK FB_StageEfficiency
VAR_INPUT
    T_in_C   : REAL;   (* suction stage, degC *)
    T_out_C  : REAL;   (* discharge stage, sebelum cooler, degC *)
    PR       : REAL;   (* rasio tekanan, absolut *)
    N_Stage  : REAL;
    Eta_Base : REAL;   (* nilai saat sehat, 0-1 *)
END_VAR
VAR_OUTPUT
    Eta       : REAL;  (* 0-1 *)
    Eta_Index : REAL;  (* %, 100 = sama dengan saat sehat *)
END_VAR

IF (T_out_C &gt; T_in_C) AND (PR &gt; 1.0) AND (N_Stage &gt; 0.0) THEN
    Eta := (T_in_C + 273.15) * (EXPT(PR, 0.2857 / N_Stage) - 1.0)
           / (T_out_C - T_in_C);
    IF Eta_Base &gt; 0.0 THEN
        Eta_Index := Eta / Eta_Base * 100.0;
    END_IF;
END_IF;

END_FUNCTION_BLOCK
</code></pre>
<p><strong>Efisiensi rata-rata stage</strong> dari rasio tekanan overall:</p>
<pre><code class="language-iecst">(* Efisiensi rata-rata stage, kompresor 4-stage, dari PR overall *)
FUNCTION_BLOCK FB_AverageStageEfficiency
VAR_INPUT
    T_in_C  : ARRAY[1..4] OF REAL;
    T_out_C : ARRAY[1..4] OF REAL;
    PR      : REAL;
END_VAR
VAR_OUTPUT
    Eta_avg : REAL;   (* 0-1 *)
    Sum_dT  : REAL;   (* degC *)
END_VAR
VAR
    i : INT;
    r_a, sum_ideal : REAL;
END_VAR

IF PR &gt; 1.0 THEN
    r_a := EXPT(PR, 0.2857 / 4.0);
    sum_ideal := 0.0;
    Sum_dT := 0.0;
    FOR i := 1 TO 4 DO
        sum_ideal := sum_ideal + (T_in_C[i] + 273.15) * (r_a - 1.0);
        Sum_dT := Sum_dT + (T_out_C[i] - T_in_C[i]);
    END_FOR;
    IF Sum_dT &gt; 0.0 THEN
        Eta_avg := sum_ideal / Sum_dT;
    END_IF;
END_IF;

END_FUNCTION_BLOCK
</code></pre>
<p><strong>Kinerja cooler</strong>, satu instance per cooler:</p>
<pre><code class="language-iecst">(* Kinerja satu cooler *)
FUNCTION_BLOCK FB_CoolerPerformance
VAR_INPUT
    T_gas_in_C  : REAL;
    T_gas_out_C : REAL;
    T_cw_in_C   : REAL;
    T_cw_out_C  : REAL;
END_VAR
VAR_OUTPUT
    Approach      : REAL;   (* degC *)
    Effectiveness : REAL;   (* 0-1 *)
    CW_dT         : REAL;   (* degC *)
END_VAR

Approach := T_gas_out_C - T_cw_in_C;
CW_dT    := T_cw_out_C - T_cw_in_C;
IF T_gas_in_C &gt; T_cw_in_C THEN
    Effectiveness := (T_gas_in_C - T_gas_out_C) / (T_gas_in_C - T_cw_in_C);
END_IF;

END_FUNCTION_BLOCK
</code></pre>
<hr>
<h3 id="hubungan-dengan-estimasi-flow">Hubungan dengan Estimasi Flow</h3>
<p>Di artikel <a href="https://blog.kiiota.com/estimasi-flow-kompresor-sentrifugal-pendekatan-isothermal-relatif-terhadap-titik-desain/">Estimasi Flow Kompresor Sentrifugal: Pendekatan Isothermal Relatif terhadap Titik Desain</a>, flow diestimasi dengan asumsi efisiensi kompresor sama dengan desain. Efisiensi rata-rata stage adalah cara langsung untuk memeriksa asumsi itu: selama nilainya stabil di sekitar desain, estimasi flow bisa dipercaya. Jika efisiensi turun sementara estimasi flow masih memakai efisiensi desain, estimasi flow cenderung terlalu tinggi.</p>
<p>Temperatur per stage juga memberi estimasi flow kedua dari neraca energi: daya yang diterima gas dibagi c_p dan jumlah kenaikan temperatur semua stage. Cara ini tidak memerlukan asumsi efisiensi isentropik, tetapi tetap membutuhkan estimasi rugi mekanis dan c_p. Pada contoh ini hasilnya sekitar 94000–97000 Nm³/h. Estimasi berbasis desain, sekitar 95800 Nm³/h pada basis normal yang sama, berada dalam rentang itu. Dua pendekatan model yang berbeda memberi angka yang berdekatan, dan selisihnya dari waktu ke waktu bisa dipantau sebagai indikator perubahan kondisi kompresor.</p>
<hr>
<h3 id="kesimpulan">Kesimpulan</h3>
<p>Efisiensi isentropik kompresor sentrifugal bisa dianalisis dari temperatur dan tekanan, asalkan per stage. Suction stage pertama dan discharge stage terakhir tidak bisa dipakai untuk satu efisiensi overall pada kompresor multi-stage dengan intercooler, dan degradasi stage awal hampir tidak terlihat di sana.</p>
<p>Jika tekanan antar-stage tidak tersedia, efisiensi setiap stage tidak bisa diketahui secara absolut. Yang masih bisa dihitung adalah estimasi berbasis asumsi rasio rata: efisiensi rata-rata yang bisa dibandingkan dengan desain, dan efisiensi per stage yang dibandingkan dengan nilainya sendiri saat sehat. Dibaca bersama approach dan efektivitas cooler, yang memakai sensor yang sama, masalah di stage dan masalah di cooler bisa dipilah langsung dari layar DCS.</p>
<hr>
<p>Artikel ini ditulis dengan bantuan kecerdasan buatan dengan arahan, penyesuaian, dan validasi oleh penulis.</p>

{% endraw %}