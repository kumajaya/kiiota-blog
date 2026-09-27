---
ghost_uuid: "3410b010-0889-4f12-a3c8-7b41067428e9"
title: "Estimasi Flow Kompresor Sentrifugal: Pendekatan Isothermal Relatif terhadap Titik Desain"
date: "2026-09-26T08:27:04.000+07:00"
slug: "estimasi-flow-kompresor-sentrifugal-pendekatan-isothermal-relatif-terhadap-titik-desain"
layout: "post"
excerpt: |
  Flowmeter tidak selalu tersedia atau bisa dipercaya. Dengan power motor, rasio kompresi, dan temperatur inlet yang sudah ada di DCS, flow kompresor multi-stage bisa diestimasi secara relatif terhadap titik desain.
image: "https://images.unsplash.com/photo-1645571498966-869875a6520c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDkxfHxjZW50cmlmdWdhbHxlbnwwfHx8fDE3OTAzNjAyMjR8MA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@cjtormey?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Caden Tormey</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
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
url: "https://blog.kiiota.com/estimasi-flow-kompresor-sentrifugal-pendekatan-isothermal-relatif-terhadap-titik-desain/"
comment_id: "6ab6ba186692d205326691a6"
reading_time: 16
access: true
comments: true
---

{% raw %}
<h3 id="pendahuluan">Pendahuluan</h3>
<p>Pada banyak unit kompresor sentrifugal, flowmeter tidak selalu tersedia di titik yang dibutuhkan. Kalaupun tersedia, pembacaannya tidak selalu bisa dipercaya: elemen DP yang kotor, range yang tidak sesuai, atau kompensasi tekanan/temperatur yang belum dikonfigurasi. Padahal DCS biasanya sudah punya tiga besaran lain yang cukup andal: <strong>power motor</strong>, <strong>tekanan suction/discharge</strong>, dan <strong>temperatur inlet</strong>.</p>
<p>Tulisan ini membahas cara memakai ketiga besaran itu untuk mengestimasi flow kompresor multi-stage ber-intercooler, dengan pendekatan isothermal yang dikalibrasi relatif terhadap titik desain. Hasilnya bukan pengganti flowmeter. Ini adalah model estimasi yang berguna untuk trending, cross-check instrumen, dan memahami titik operasi kompresor.</p>
<p>Pengaruh masing-masing variabel (daya, temperatur inlet, rasio kompresi) terhadap flow sudah dibahas di artikel <a href="https://blog.kiiota.com/analisis-pengaruh-variasi-kondisi-operasional-terhadap-kapasitas-aliran-kompresor-sentrifugal/">Analisis Pengaruh Variasi Kondisi Operasional terhadap Kapasitas Aliran Kompresor Sentrifugal</a>. Tulisan ini melanjutkannya ke sisi penerapan: kenapa metodenya bekerja, kenapa isothermal, apa saja syaratnya, dan bagaimana menerapkannya di DCS.</p>
<hr>
<h3 id="prinsip-dasar-energi-yang-masuk-sama-dengan-energi-yang-dipakai-gas">Prinsip Dasar: Energi yang Masuk Sama dengan Energi yang Dipakai Gas</h3>
<p>Daya poros kompresor dipakai untuk mengompresi gas. Hubungannya sederhana:</p>
<p>\( P_{shaft} = \frac{\dot{m} \cdot w}{\eta_{comp}} \)</p>
<p>dengan P_shaft adalah daya mekanis yang benar-benar masuk ke poros kompresor, ṁ adalah massa alir, w adalah kerja kompresi per kg gas, dan η_comp adalah efisiensi kompresor (dari daya poros menjadi kerja gas). Jika P_shaft diketahui dan w bisa dihitung dari tekanan dan temperatur, satu-satunya yang tidak diketahui adalah η. Di sinilah masalahnya: efisiensi aktual kompresor hampir tidak pernah diketahui pasti.</p>
<p>Solusinya adalah <strong>tidak menghitung flow absolut</strong>, tetapi membandingkan kondisi aktual terhadap titik desain dari datasheet. Titik desain adalah fakta: pada power sekian, rasio kompresi sekian, dan temperatur inlet sekian, flow-nya sekian. Dengan mengambil rasio aktual terhadap desain, η pada pembilang dan penyebut saling menghapus:</p>
<p>\( \frac{\dot{m}_{real}}{\dot{m}_{design}} = \frac{P_{real}}{P_{design}} \times \frac{w_{design}}{w_{real}} \times \frac{\eta_{comp,real}}{\eta_{comp,design}} \)</p>
<p>Metode ini mengasumsikan faktor terakhir, η_comp,real/η_comp,design, sama dengan 1. Ini adalah <strong>asumsi inti</strong> seluruh metode. Ketidakpastiannya tidak hilang, tetapi dipindahkan: dari "berapa nilai η?" (sulit dijawab) menjadi "apakah η masih dekat dengan desain?" (lebih mudah dinilai secara operasional).</p>
<p>Perlu dicatat, efisiensi kompresor sentrifugal bukan sekadar fungsi "dekat atau jauh dari desain". Efisiensi bergantung pada posisi titik operasi di kurva performa: flow, rasio kompresi, bukaan IGV, dan kondisi internal kompresor. Kondisi steady-state saja tidak cukup. Asumsi η konstan hanya masuk akal selama kompresor masih beroperasi di wilayah kurva yang dekat dengan titik desain dan kondisi internalnya belum berubah.</p>
<p>Dengan kata lain, <strong>model ini bukan alat untuk mengetahui flow secara absolut dari tiga transmitter. Model ini memperkirakan bagaimana flow seharusnya berubah terhadap titik desain, selama karakteristik kompresor dan intercooling belum berubah secara material.</strong></p>
<p>Konsekuensi yang perlu diingat sejak awal: kompresor yang sudah terdegradasi akan tetap menghasilkan estimasi flow yang terlihat "normal", karena model ini mengasumsikan degradasi tidak terjadi. Estimasi ini tidak bisa mendeteksi penurunan efisiensi. Justru selisih antara estimasi dan flowmeter independen (jika ada) yang bisa menjadi indikator degradasi.</p>
<hr>
<h3 id="mengapa-pendekatan-isothermal">Mengapa Pendekatan Isothermal</h3>
<p>Kerja kompresi isothermal reversibel per satuan massa gas ideal adalah:</p>
<p>\( w = R \cdot T_{in} \cdot \ln(PR) \)</p>
<p>Jika dimasukkan ke persamaan rasio di atas, didapat formula estimasi flow:</p>
<p>\( Q_{real} = Q_{design} \times \frac{P_{real}}{P_{design}} \times \frac{T_{design}}{T_{real}} \times \frac{\ln(PR_{design})}{\ln(PR_{real})} \)</p>
<p>Q di sini adalah flow yang melalui kompresor, pada basis yang sama dengan Q_design. Untuk gas dengan komposisi dan kondisi referensi normal yang sama, rasio massa alir sama dengan rasio flow dalam Nm³/h.</p>
<p>Tentu saja tidak ada kompresor sentrifugal yang benar-benar isothermal. Setiap stage tetap mengalami kompresi dengan kenaikan temperatur. Tetapi pada kompresor multi-stage, intercooler mengembalikan temperatur gas mendekati temperatur inlet sebelum masuk stage berikutnya. Polanya adalah kompresi, kenaikan temperatur, pendinginan, lalu kompresi lagi. Yang mendekati kerja isothermal adalah <strong>kerja total seluruh rangkaian itu</strong>, bukan masing-masing stage.</p>
<p>Seberapa dekat bergantung pada jumlah stage, pembagian rasio kompresi antar-stage, dan seberapa efektif intercooler mengembalikan gas ke temperatur inlet. Sebagai gambaran, dengan asumsi gas ideal, k = 1.4, rasio kompresi terbagi rata, intercooling sempurna, dan PR sekitar 5–6, kerja total 2 stage sekitar 13–14% di atas kerja isothermal, 4 stage sekitar 6–7%, dan 6 stage sekitar 4%. Jika intercooling kurang efektif, selisihnya lebih besar. Karena karakteristik ini, kerja isothermal menjadi acuan yang relevan untuk kompresor udara dan nitrogen multi-stage ber-intercooler, termasuk di ASU.</p>
<p>Namun yang lebih penting untuk metode ini bukan seberapa dekat kerja aktual dengan kerja isothermal secara absolut. Karena yang dipakai adalah <strong>rasio</strong> terhadap titik desain, selisih antara kerja aktual dan kerja isothermal sebagian besar akan terhapus, selama selisih itu relatif konstan terhadap perubahan kondisi operasi. Yang menentukan adalah apakah kerja aktual <strong>berubah dengan cara yang sama</strong> seperti kerja isothermal ketika PR dan T_in berubah. Tabel berikut menunjukkan bahwa perubahannya memang sangat mirip.</p>
<p>Alternatifnya adalah pendekatan isentropik. Ada dua bentuk:</p>
<ul>
<li><strong>Isentropik overall:</strong> memperlakukan seluruh kompresor sebagai satu kompresi adiabatik dari P_in stage-1 langsung ke P_out stage-akhir. Bentuk ini mengabaikan intercooler sama sekali, sehingga tidak mewakili mesin yang sebenarnya.</li>
<li><strong>Isentropik per-stage:</strong> menjumlahkan kerja isentropik tiap stage dengan asumsi rasio kompresi terbagi rata dan intercooler mengembalikan gas ke T_in. Bentuk ini paling dekat dengan struktur fisik, tetapi memerlukan jumlah stage dan nilai k (Cp/Cv).<br>
Perbandingan ketiganya pada kompresor 4-stage dengan PR desain 5.07, saat PR aktual menyimpang dari desain (power dan T_in tetap seperti desain):</li>
</ul>
<table>
<thead>
<tr>
<th>Penyimpangan PR</th>
<th>Isothermal</th>
<th>Isentropik per-stage (4 stage)</th>
<th>Isentropik overall</th>
</tr>
</thead>
<tbody>
<tr>
<td>−15%</td>
<td>111.1%</td>
<td>111.8%</td>
<td>113.9%</td>
</tr>
<tr>
<td>−10%</td>
<td>106.9%</td>
<td>107.4%</td>
<td>108.7%</td>
</tr>
<tr>
<td>−5%</td>
<td>103.3%</td>
<td>103.5%</td>
<td>104.1%</td>
</tr>
<tr>
<td>+5%</td>
<td>97.1%</td>
<td>96.9%</td>
<td>96.4%</td>
</tr>
<tr>
<td>+10%</td>
<td>94.5%</td>
<td>94.1%</td>
<td>93.1%</td>
</tr>
<tr>
<td>+15%</td>
<td>92.1%</td>
<td>91.6%</td>
<td>90.1%</td>
</tr>
</tbody>
</table>
<p>Selisih isothermal terhadap bentuk per-stage paling besar sekitar 0.7 poin persentase, sedangkan bentuk overall menyimpang sampai sekitar 2 poin persentase. Secara matematis ini wajar: bentuk isothermal adalah batas bentuk per-stage ketika jumlah stage sangat banyak.</p>
<p>Perhitungan isentropik di tabel ini memakai model ideal: k konstan 1.4, rasio kompresi terbagi rata antar-stage, dan intercooler mengembalikan gas tepat ke T_in. Ini pembanding sederhana, bukan evaluasi sifat termodinamika gas yang rigor.</p>
<p>Jadi pendekatan isothermal memberi hasil yang hampir sama dengan bentuk per-stage. Keuntungan praktisnya, kebutuhan inputnya jauh lebih sedikit:</p>
<ul>
<li>jumlah stage tidak diperlukan,</li>
<li>nilai k tidak diperlukan,</li>
<li>cukup satu baris formula di DCS.<br>
Untuk kompresor multi-stage ber-intercooler, ini kombinasi yang sulit dikalahkan. Bentuk isentropik per-stage tetap berguna sebagai <strong>pembanding silang</strong>. Jika selisih kedua model jauh lebih besar dari yang diperkirakan tabel di atas, asumsi model, data input, atau kondisi operasi perlu diperiksa.</li>
</ul>
<hr>
<h3 id="variabel-yang-dibutuhkan">Variabel yang Dibutuhkan</h3>
<table>
<thead>
<tr>
<th>Variabel</th>
<th>Sumber</th>
<th>Catatan</th>
</tr>
</thead>
<tbody>
<tr>
<td>Power listrik aktual</td>
<td>Relay proteksi / power meter</td>
<td>Gunakan real power (kW), bukan arus</td>
</tr>
<tr>
<td>Efisiensi motor (asumsi)</td>
<td>Datasheet motor</td>
<td>Untuk konversi power listrik ke daya poros</td>
</tr>
<tr>
<td>P_in, P_out aktual</td>
<td>Transmitter tekanan</td>
<td>Tekanan absolut, lokasi sesuai titik referensi datasheet</td>
</tr>
<tr>
<td>T_in aktual</td>
<td>Sensor temperatur suction stage-1</td>
<td>Dikonversi ke Kelvin</td>
</tr>
<tr>
<td>P_shaft, Q, PR, T_in desain</td>
<td>Datasheet kompresor</td>
<td>Titik kalibrasi</td>
</tr>
<tr>
<td>Posisi IGV, status anti-surge</td>
<td>DCS</td>
<td>Untuk syarat validitas estimasi</td>
</tr>
</tbody>
</table>
<p>Beberapa hal yang sering terlewat:</p>
<p><strong>Power, bukan arus.</strong> Arus motor bukan proxy daya yang baik, karena daya listrik adalah P = √3 × V × I × PF. Jika tegangan operasi naik beberapa persen dari nameplate, arus akan turun pada daya yang sama. Real power dari relay proteksi sudah menggabungkan tegangan, arus, dan power factor secara langsung.</p>
<p><strong>Daya poros adalah estimasi.</strong> P_shaft = power listrik × efisiensi motor yang diasumsikan, biasanya dari datasheet. Efisiensi motor aktual bervariasi terhadap beban dan temperatur, sehingga hasilnya bukan pengukuran daya poros. Nilai ini sebaiknya diberi label "estimasi" di historian, bukan "terukur". Jadi rantainya adalah: power listrik terukur, lalu daya poros estimasi, lalu kerja gas, lalu massa alir.</p>
<p>Sebenarnya, karena metode ini memakai rasio terhadap titik desain, efisiensi motor tidak selalu harus dimasukkan secara eksplisit. Jika power listrik pada titik desain diketahui dan efisiensi motor dianggap tidak banyak berubah, rasio power listrik bisa dipakai langsung. Artikel ini tetap memakai daya poros estimasi agar hubungan energinya lebih jelas, dan karena datasheet kompresor biasanya menyatakan titik desain dalam daya poros.</p>
<p><strong>Mechanical losses.</strong> Banyak kompresor multi-stage di ASU adalah tipe integrally geared. Rugi di gearbox, bearing, dan seal kira-kira konstan, tidak sebanding dengan beban. Sementara itu, metode rasio menskalakan seluruh daya poros. Sebagai ilustrasi, jika diasumsikan rugi tetap sebesar 3% dari rated power, pada beban 70% estimasi flow akan terlalu tinggi sekitar 1.3%. Besar rugi sebenarnya berbeda untuk tiap mesin. Dekat titik desain efek ini kecil.</p>
<p><strong>Lokasi transmitter tekanan.</strong> Rasio kompresi adalah variabel utama. Jika tekanan suction diukur sebelum filter atau valve, atau tekanan discharge diukur setelah aftercooler dan piping, PR yang dihitung ikut memasukkan pressure drop di luar kompresor. Pastikan lokasinya sesuai dengan titik referensi pada datasheet.</p>
<p><strong>Basis Nm³/h.</strong> Rasio yang dihasilkan adalah rasio massa alir. Konversi ke Nm³/h berlaku selama komposisi gas dan kondisi referensi sama antara desain dan aktual. Pastikan juga definisi "normal" (0°C atau 15°C) pada Q_desain sama dengan yang dipakai di DCS.</p>
<hr>
<h3 id="contoh-perhitungan">Contoh Perhitungan</h3>
<p>Contoh berikut memakai data nyata recycle air compressor 4-stage di sebuah plant ASU, sebelum dan sesudah posisi IGV dikoreksi karena power motor terlalu tinggi.</p>
<p><strong>Data desain (datasheet):</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td>Daya poros desain</td>
<td>1600 kW</td>
</tr>
<tr>
<td>Flow desain</td>
<td>18500 Nm³/h</td>
</tr>
<tr>
<td>Tekanan suction / discharge desain</td>
<td>0.58 / 2.942 MPa abs (rasio 5.072)</td>
</tr>
<tr>
<td>Temperatur inlet desain</td>
<td>20°C (293.15 K)</td>
</tr>
<tr>
<td>Efisiensi motor</td>
<td>96.42%</td>
</tr>
</tbody>
</table>
<p><strong>Data operasi:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Sebelum koreksi IGV</th>
<th>Sesudah koreksi IGV</th>
</tr>
</thead>
<tbody>
<tr>
<td>Power listrik terukur</td>
<td>1700 kW</td>
<td>1640 kW</td>
</tr>
<tr>
<td>Tekanan suction</td>
<td>0.481 MPaG</td>
<td>0.462 MPaG</td>
</tr>
<tr>
<td>Tekanan discharge</td>
<td>2.71 MPaG</td>
<td>2.67 MPaG</td>
</tr>
<tr>
<td>Rasio tekanan (absolut)</td>
<td>4.828</td>
<td>4.920</td>
</tr>
<tr>
<td>Temperatur inlet</td>
<td>20°C</td>
<td>20°C</td>
</tr>
</tbody>
</table>
<p>Rasio tekanan dihitung dari tekanan absolut, jadi tekanan gauge ditambah 0.101325 MPa: (2.71 + 0.101325) / (0.481 + 0.101325) ≈ 4.828.</p>

<!--kg-card-begin: html-->
<!-- ============================================================
  Kalkulator Estimasi Flow Kompresor Sentrifugal
  Pendekatan isothermal relatif terhadap titik desain.
  Tempel seluruh blok ini ke HTML card artikel. Semua style
  dibatasi pada .kfc sehingga tidak memengaruhi tema blog.
  Default tertutup; pembaca klik judul untuk membuka.
============================================================= -->
<style>
.kfc{--bg:#ffffff;--panel:#f6f7f9;--line:#dde1e6;--text:#1c2430;--muted:#5d6878;--accent:#1f3864;--good:#1e7a46;--warn:#a15c00;--bad:#b3261e;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--text);background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:0;max-width:880px;margin:1.5em auto;line-height:1.45;font-size:15px;box-sizing:border-box}
@media (prefers-color-scheme:dark){.kfc{--bg:#161b22;--panel:#1f2630;--line:#323c49;--text:#e6eaf0;--muted:#9aa6b5;--accent:#8fb3ff;--good:#5fd18d;--warn:#f0b35a;--bad:#ff8a80}}
.kfc *{box-sizing:border-box}
.kfc summary{cursor:pointer;padding:14px 18px;font-weight:650;color:var(--accent);list-style:none;display:flex;align-items:center;gap:10px}
.kfc summary::-webkit-details-marker{display:none}
.kfc summary::before{content:"▸";display:inline-block;transition:transform .15s}
.kfc[open] summary::before{transform:rotate(90deg)}
.kfc summary .hint{font-weight:400;color:var(--muted);font-size:.85em}
.kfc[open] summary .hint{display:none}
.kfc .body{padding:0 18px 18px}
@media (max-width:480px){.kfc summary{padding:12px}.kfc .body{padding:0 12px 12px}.kfc input{width:84px}}
.kfc .sub{margin:0 0 14px;color:var(--muted);font-size:.9em}
.kfc .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(250px,100%),1fr));gap:14px}
.kfc fieldset{border:1px solid var(--line);border-radius:8px;padding:10px 12px 12px;margin:0;background:var(--panel);min-width:0}
.kfc legend{font-weight:600;font-size:.9em;padding:0 6px;color:var(--accent)}
.kfc label{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:6px 0;font-size:.88em}
.kfc label span{flex:1;min-width:0}
.kfc input,.kfc select{width:96px;padding:5px 7px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text);font:inherit;font-size:.95em;text-align:right}
.kfc select{width:auto;text-align:left}
.kfc input:focus,.kfc select:focus{outline:2px solid var(--accent);outline-offset:0}
.kfc .unit{width:64px;color:var(--muted);font-size:.85em}
.kfc select.unit{padding:4px 2px;text-align:left}
.kfc label .unit{flex:0 0 64px;width:64px}
.kfc .btns{display:flex;gap:8px;margin:14px 0 4px;flex-wrap:wrap;align-items:center}
.kfc button{font:inherit;font-size:.88em;padding:6px 12px;border-radius:6px;border:1px solid var(--line);background:var(--panel);color:var(--text);cursor:pointer}
.kfc button:hover{border-color:var(--accent)}
.kfc .btns label{margin:0 0 0 auto;gap:6px}
.kfc .res{margin-top:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(190px,100%),1fr));gap:10px}
.kfc .card{border:1px solid var(--line);border-radius:8px;padding:10px 12px;background:var(--panel)}
.kfc .card .k{font-size:.8em;color:var(--muted)}
.kfc .card .v{font-size:1.35em;font-weight:650;font-variant-numeric:tabular-nums}
.kfc .card .n{font-size:.8em;color:var(--muted)}
.kfc .notes{margin-top:12px;font-size:.85em}
.kfc .notes p{margin:4px 0;padding:6px 10px;border-left:3px solid var(--line);background:var(--panel);border-radius:0 6px 6px 0}
.kfc .notes .warn{border-color:var(--warn)}
.kfc .notes .bad{border-color:var(--bad)}
.kfc .notes .ok{border-color:var(--good)}
.kfc .foot{font-size:.78em;color:var(--muted);margin:10px 0 0}
</style>
<details class="kfc" id="kfc">


<summary>Kalkulator estimasi flow <span class="hint">klik untuk membuka</span></summary>
<div class="body">
<p class="sub">Isi dengan data mesin Anda. Tombol "Isi contoh" memuat contoh perhitungan di artikel ini.</p>

<div class="grid">
  <fieldset><legend>Titik desain (datasheet)</legend>
    <label><span>Flow desain</span><input id="kfc_qd" type="number" step="any"><span class="unit">Nm³/h</span></label>
    <label><span>Daya poros desain</span><input id="kfc_psd" type="number" step="any"><span class="unit">kW</span></label>
    <label><span>Tekanan suction desain</span><input id="kfc_p1d" type="number" step="any"><select id="kfc_md" class="unit"><option value="a">abs</option><option value="g">gauge</option></select></label>
    <label><span>Tekanan discharge desain</span><input id="kfc_p2d" type="number" step="any"><span class="unit">bar</span></label>
    <label><span>T inlet desain</span><input id="kfc_td" type="number" step="any"><span class="unit">°C</span></label>
    <label><span>Jumlah stage</span><input id="kfc_n" type="number" step="1" min="1"><span class="unit"></span></label>
  </fieldset>
  <fieldset><legend>Data operasi aktual</legend>
    <label><span>Power listrik</span><input id="kfc_pe" type="number" step="any"><span class="unit">kW</span></label>
    <label><span>Efisiensi motor (nameplate)</span><input id="kfc_eta" type="number" step="any"><span class="unit">%</span></label>
    <label><span>Tekanan suction</span><input id="kfc_p1" type="number" step="any"><select id="kfc_ma" class="unit"><option value="a">abs</option><option value="g">gauge</option></select></label>
    <label><span>Tekanan discharge</span><input id="kfc_p2" type="number" step="any"><span class="unit">bar</span></label>
    <label><span>T inlet</span><input id="kfc_ta" type="number" step="any"><span class="unit">°C</span></label>
  </fieldset>
</div>

<div class="btns">
  <button type="button" id="kfc_ex">Isi contoh</button>
  <button type="button" id="kfc_clr">Kosongkan</button>
</div>

<div class="res" id="kfc_cards"></div>
<div class="notes" id="kfc_notes"></div>
<p class="foot">Estimasi model, bukan pengukuran. Mengasumsikan efisiensi kompresor dan efektivitas intercooling sama dengan desain, operasi steady-state, dan titik operasi dekat desain. Hasilnya adalah flow melalui kompresor, bukan otomatis flow ke proses. Tekanan dalam bar; untuk input gauge, tekanan atmosfer 1.01325 bar ditambahkan. Pilihan abs/gauge di baris suction berlaku juga untuk discharge pada kelompok yang sama. Pembanding isentropik memakai k = 1.4 dan rasio tekanan terbagi rata.</p>
</div>

<script>
(function(){
  var root=document.getElementById('kfc'); if(!root) return;
  var A=0.2857;
  var ids=['qd','psd','p1d','p2d','td','n','pe','eta','p1','p2','ta'];
  var ex={qd:18500,psd:1600,p1d:5.8,p2d:29.42,td:20,n:4,pe:1700,eta:96.42,p1:4.81,p2:27.1,ta:20};
  function el(k){return root.querySelector('#kfc_'+k);}
  function val(k){var x=parseFloat(el(k).value);return isFinite(x)?x:NaN;}
  function f(x,d){return isFinite(x)?x.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d,useGrouping:false}):'—';}
  function card(k,v,n){return '<div class="card"><div class="k">'+k+'</div><div class="v">'+v+'</div><div class="n">'+(n||'')+'</div></div>';}

  function calc(){
    var d={};ids.forEach(function(k){d[k]=val(k);});
    var patm=1.01325;
    var od=el('md').value==='g'?patm:0, oa=el('ma').value==='g'?patm:0;
    var prd=(d.p2d+od)/(d.p1d+od), pra=(d.p2+oa)/(d.p1+oa);
    var tdK=d.td+273.15, taK=d.ta+273.15, eta=d.eta/100;
    var cards=root.querySelector('#kfc_cards'), notes=root.querySelector('#kfc_notes');
    var ok=d.qd>0&&d.psd>0&&d.pe>0&&eta>0&&eta<=1&&prd>1&&pra>1&&tdK>0&&taK>0;
    if(!ok){cards.innerHTML='';notes.innerHTML='<p class="warn">Lengkapi data desain dan data operasi. Tekanan discharge harus lebih besar dari suction.</p>';return;}

    var ps=d.pe*eta, kP=ps/d.psd, kT=tdK/taK, kPR=Math.log(prd)/Math.log(pra);
    var q=d.qd*kP*kT*kPR;
    var h='';
    h+=card('Estimasi flow',f(q,0)+' Nm³/h',f(q/d.qd*100,1)+'% desain');
    h+=card('Daya poros estimasi',f(ps,1)+' kW',f(kP*100,1)+'% daya poros desain');
    h+=card('Rasio tekanan',f(pra,3),'Desain '+f(prd,3)+' ('+(pra>=prd?'+':'')+f((pra/prd-1)*100,1)+'%)');
    var qc=NaN, dev=NaN;
    if(d.n>=1){
      var an=A/d.n, hr=(taK*(Math.pow(pra,an)-1))/(tdK*(Math.pow(prd,an)-1));
      qc=d.qd*kP/hr; dev=(qc-q)/q*100;
      h+=card('Pembanding isentropik','≈ '+f(qc,0)+' Nm³/h',f(d.n,0)+' stage, selisih '+(dev>=0?'+':'')+f(dev,1)+'%');
    }
    cards.innerHTML=h;

    var n=[], dPR=(pra/prd-1)*100;
    if(Math.abs(dPR)>10) n.push(['bad','Rasio tekanan '+f(dPR,1)+'% dari desain. Jauh dari titik kalibrasi; estimasi hanya indikatif.']);
    else if(Math.abs(dPR)>5) n.push(['warn','Rasio tekanan '+f(dPR,1)+'% dari desain. Presisi estimasi mulai menurun.']);
    if(kP<0.8) n.push(['warn','Daya poros '+f(kP*100,0)+'% desain. Pada beban parsial, IGV yang lebih menutup dan rugi mekanis yang konstan membuat estimasi cenderung terlalu tinggi.']);
    if(kP>1.1) n.push(['warn','Daya poros '+f(kP*100,0)+'% desain. Titik operasi cukup jauh di atas desain.']);
    if(Math.abs(d.ta-d.td)>10) n.push(['warn','T inlet berbeda '+f(d.ta-d.td,0)+'°C dari desain. Faktor temperatur sudah dikoreksi, tetapi pastikan intercooler dan cooling water juga normal.']);
    if(isFinite(dev)&&Math.abs(dev)>2) n.push(['warn','Selisih dengan pembanding isentropik '+f(dev,1)+'%, lebih besar dari yang biasa terjadi. Periksa data input dan kondisi operasi.']);
    if(!n.length) n.push(['ok','Titik operasi dekat desain. Estimasi paling bisa dipercaya pada kondisi seperti ini, selama kompresor steady dan anti-surge valve tertutup.']);
    notes.innerHTML=n.map(function(x){return '<p class="'+x[0]+'">'+x[1]+'</p>';}).join('');
  }

  function fill(o){ids.forEach(function(k){el(k).value=(o&&o[k]!==undefined)?o[k]:'';});if(o){el('md').value='a';el('ma').value='g';}calc();}
  root.addEventListener('input',calc);
  root.addEventListener('change',calc);
  root.querySelector('#kfc_ex').addEventListener('click',function(){fill(ex);});
  root.querySelector('#kfc_clr').addEventListener('click',function(){fill(null);});
  fill(ex);
})();
</script>
</details>
<!-- ================= akhir kalkulator ================= -->
<!--kg-card-end: html-->
<p>Sebelum koreksi, daya poros:</p>
<p>\( P_{shaft} = 1700 \times 0.9642 \approx 1639.14 \text{ kW} \)</p>
<p>Estimasi flow:</p>
<p>\( Q_{real} = 18500 \times \frac{1639.14}{1600} \times \frac{293.15}{293.15} \times \frac{\ln(5.072)}{\ln(4.828)} = 18500 \times 1.02446 \times 1 \times 1.0314 \approx 19548 \text{ Nm}^3/\text{h} \)</p>
<p>atau sekitar 105.7% desain. Sebagai pembanding silang, bentuk isentropik per-stage menghasilkan sekitar 19583 Nm³/h (105.9%).</p>
<p>Sesudah IGV diturunkan, power turun ke 1640 kW (daya poros sekitar 1581.29 kW) dan rasio tekanan naik ke 4.920:</p>
<p>\( Q_{real} = 18500 \times 0.9883 \times 1 \times 1.0192 \approx 18635 \text{ Nm}^3/\text{h} \)</p>
<p>atau sekitar 100.7% desain, dengan pembanding isentropik sekitar 18655 Nm³/h. Koreksi IGV mengembalikan flow ke sekitar desain dan power ke bawah rating motor.</p>
<p>Pengaruh temperatur inlet juga perlu dilihat. Jika pada kondisi sebelum koreksi temperatur inlet 30°C (303.15 K), dengan power dan rasio tekanan yang sama:</p>
<p>\( Q_{real} = 18500 \times 1.02446 \times \frac{293.15}{303.15} \times 1.0314 \approx 18903 \text{ Nm}^3/\text{h} \)</p>
<p>atau sekitar 102.2% desain. Kenaikan temperatur inlet 10°C menurunkan estimasi flow sekitar 3.5 poin persentase pada daya yang sama. Ini menunjukkan kenapa faktor T_in tidak boleh diabaikan, terutama di iklim tropis dengan variasi temperatur siang dan malam yang signifikan.</p>
<p>Cara membaca hasilnya juga penting. Angka "105.7%" jangan dibaca sebagai presisi satu desimal, tetapi sebagai "sedikit di atas desain".</p>
<hr>
<h3 id="batas-validitas">Batas Validitas</h3>
<p>Model ini dikalibrasi pada satu titik: titik desain. Semakin jauh titik operasi dari titik itu, semakin besar kemungkinan asumsinya tidak lagi berlaku.</p>
<p><strong>Apa yang sebenarnya diestimasi.</strong> Model berbasis power ini mengestimasi <strong>flow yang melewati kompresor</strong>, bukan net flow yang masuk ke proses downstream. Dalam kondisi steady-state, dengan kebocoran dan perubahan inventory yang dapat diabaikan:</p>
<p>\( \dot{m}_{comp} = \dot{m}_{process} + \dot{m}_{recycle} \)</p>
<p>Saat anti-surge atau recycle valve membuka, sebagian gas kembali ke suction, dan kompresor tetap menyerap daya untuk gas tersebut. Estimasinya bisa tetap benar sebagai flow melalui kompresor, tetapi bisa berbeda signifikan dari flow ke proses. Model ini tidak dapat membedakan keduanya.</p>
<p>Karena itu syarat validitasnya dibagi dua.</p>
<p><strong>Valid sebagai estimasi flow melalui kompresor jika:</strong></p>
<ul>
<li>kondisi steady-state, bukan saat start-up atau transient,</li>
<li>pengukuran power, tekanan, dan temperatur valid,</li>
<li>posisi IGV dekat posisi desain, dan titik operasi masih di wilayah kurva yang dekat dengan titik desain,</li>
<li>intercooler bekerja normal dan temperatur cooling water mendekati desain.</li>
</ul>
<p><strong>Valid sebagai estimasi flow ke proses jika, di samping syarat di atas:</strong></p>
<ul>
<li>anti-surge/recycle valve tertutup, atau recycle flow diketahui dan dikurangkan.<br>
Perlu dicatat, saat anti-surge valve membuka, kompresor biasanya juga sedang beroperasi mendekati batas surge, jauh dari titik desain. Jadi estimasi flow melalui kompresor pada kondisi itu pun sebaiknya dibaca dengan hati-hati.</li>
</ul>
<p><strong>Estimasi cenderung terlalu tinggi jika:</strong></p>
<ul>
<li><strong>IGV lebih menutup</strong> pada beban parsial. Pada kompresor fixed-speed, efisiensi turun saat IGV menutup, sehingga asumsi η konstan tidak berlaku lagi.</li>
<li><strong>Kompresor terdegradasi</strong> (fouling, keausan, clearance melebar). Efisiensi turun, tetapi model tetap menganggapnya sama dengan desain.</li>
<li><strong>Intercooler kotor atau cooling water hangat.</strong> Gas masuk stage berikutnya lebih panas, sehingga kerja aktual lebih besar dari kerja isothermal yang diasumsikan.</li>
<li><strong>Beban jauh di bawah desain.</strong> Mechanical losses yang konstan menjadi porsi yang lebih besar dari daya poros.<br>
Untuk arah penyimpangan yang dibahas di atas, penyimpangan umumnya mendorong estimasi ke arah yang sama: <strong>flow terlihat lebih besar dari sebenarnya</strong>. Kesalahan pengukuran power atau tekanan tetap bisa mendorong ke dua arah. Ini perlu diingat saat membaca estimasi pada beban parsial.</li>
</ul>
<p><strong>Ketidakpastian.</strong> Tidak tepat memberikan satu angka ketidakpastian yang berlaku untuk seluruh rentang operasi tanpa analisis ketidakpastian dan validasi terhadap flowmeter independen. Ada dua jenis sumber yang sifatnya berbeda:</p>
<ul>
<li><strong>Ketidakpastian pengukuran:</strong> akurasi power, efisiensi motor, transmitter tekanan dan temperatur. Kontribusinya dapat dievaluasi dari spesifikasi akurasi masing-masing instrumen.</li>
<li><strong>Ketidakpastian model:</strong> perubahan efisiensi kompresor akibat IGV, fouling, efektivitas intercooling, dan posisi titik operasi. Kontribusi ini kecil di dekat titik desain, tetapi bisa menjadi dominan saat kondisi menjauh darinya.<br>
Dalam implementasi praktis, total error beberapa persen di sekitar titik desain bukan hal yang mengejutkan, tetapi besar sebenarnya hanya bisa ditentukan melalui validasi terhadap pengukuran independen. Yang jelas, kedua sumber ini jauh lebih besar daripada selisih antara model isothermal dan isentropik per-stage. Jadi pemilihan model bukan sumber ketidakpastian utama. Yang lebih menentukan adalah kualitas data dan seberapa dekat kondisi operasi dengan titik desain.</li>
</ul>
<p>Model ini juga tidak punya indikator bawaan yang memberi tahu bahwa estimasi sudah keluar dari rentang validitasnya. Karena itu syarat validitas perlu dibangun secara eksplisit di DCS.</p>
<hr>
<h3 id="implementasi-di-dcs">Implementasi di DCS</h3>
<p>Formula isothermal cukup dijalankan sebagai kalkulasi berjalan. Function block di bawah sengaja dibuat minimal: hanya menghitung, dengan pengecekan seperlunya agar tidak terjadi pembagian dengan nol. Validitas hasil dinilai oleh yang membacanya, dengan konteks operasi yang terlihat di layar DCS:</p>
<ul>
<li>kompresor running dan steady, bukan saat start-up atau transient,</li>
<li>posisi IGV di sekitar posisi desain,</li>
<li>untuk flow ke proses, anti-surge/recycle valve tertutup.</li>
</ul>
<p>Saat kompresor mati atau sedang transient, angka yang keluar memang tidak bermakna.</p>
<p><strong>Model isothermal</strong>, sebagai estimasi utama:</p>
<pre><code class="language-iecst">(* Estimasi flow melalui kompresor, model isothermal,
   relatif terhadap titik desain. PR dalam tekanan absolut. *)
FUNCTION_BLOCK FB_FlowIsothermal
VAR_INPUT
    P_elec_kW      : REAL;   (* power listrik terukur, kW *)
    Eff_motor      : REAL;   (* efisiensi motor yang diasumsikan, 0-1 *)
    PR             : REAL;   (* rasio tekanan aktual *)
    T_in_C         : REAL;   (* temperatur inlet stage 1, degC *)
    P_shaft_design : REAL;   (* daya poros desain, kW *)
    Q_design       : REAL;   (* flow desain, Nm3/h *)
    PR_design      : REAL;   (* rasio tekanan desain *)
    T_design_C     : REAL;   (* temperatur inlet desain, degC *)
END_VAR
VAR_OUTPUT
    Q_estimate     : REAL;   (* Nm3/h *)
    Pct_of_design  : REAL;   (* % *)
    P_shaft_est    : REAL;   (* daya poros estimasi, kW *)
END_VAR

P_shaft_est := P_elec_kW * Eff_motor;

IF (PR &gt; 1.0) AND (PR_design &gt; 1.0) AND (P_shaft_design &gt; 0.0) THEN
    Q_estimate := Q_design * (P_shaft_est / P_shaft_design)
                * ((T_design_C + 273.15) / (T_in_C + 273.15))
                * (LN(PR_design) / LN(PR));
    Pct_of_design := Q_estimate / Q_design * 100.0;
END_IF;

END_FUNCTION_BLOCK
</code></pre>
<p><strong>Model isentropik per-stage</strong>, sebagai pembanding silang:</p>
<pre><code class="language-iecst">(* Estimasi flow melalui kompresor, model isentropik per-stage
   dengan rasio tekanan terbagi rata dan k = 1.4, relatif terhadap
   titik desain. Pembanding silang untuk FB_FlowIsothermal. *)
FUNCTION_BLOCK FB_FlowIsentropic
VAR_INPUT
    P_elec_kW      : REAL;   (* power listrik terukur, kW *)
    Eff_motor      : REAL;   (* efisiensi motor yang diasumsikan, 0-1 *)
    PR             : REAL;   (* rasio tekanan aktual *)
    T_in_C         : REAL;   (* temperatur inlet stage 1, degC *)
    P_shaft_design : REAL;   (* daya poros desain, kW *)
    Q_design       : REAL;   (* flow desain, Nm3/h *)
    PR_design      : REAL;   (* rasio tekanan desain *)
    T_design_C     : REAL;   (* temperatur inlet desain, degC *)
    N_Stage        : REAL;   (* jumlah stage *)
END_VAR
VAR_OUTPUT
    Q_estimate     : REAL;   (* Nm3/h *)
    Pct_of_design  : REAL;   (* % *)
END_VAR
VAR
    a_n, h_des : REAL;
END_VAR

IF (PR &gt; 1.0) AND (PR_design &gt; 1.0) AND (P_shaft_design &gt; 0.0) AND (N_Stage &gt; 0.0) THEN
    a_n   := 0.2857 / N_Stage;
    h_des := (T_design_C + 273.15) * (EXPT(PR_design, a_n) - 1.0);
    Q_estimate := Q_design * (P_elec_kW * Eff_motor / P_shaft_design)
                * h_des / ((T_in_C + 273.15) * (EXPT(PR, a_n) - 1.0));
    Pct_of_design := Q_estimate / Q_design * 100.0;
END_IF;

END_FUNCTION_BLOCK
</code></pre>
<p>Beberapa catatan penerapan:</p>
<ul>
<li>Nama fungsi <code>LN</code> dan <code>EXPT</code> mengikuti IEC 61131-3. Sesuaikan jika platform memakai nama lain, misalnya <code>POW</code> untuk pangkat atau <code>LOG</code> untuk logaritma. Basis logaritma tidak berpengaruh karena yang dipakai rasio.</li>
<li>PR dihitung dari tekanan absolut. Jika transmitter dalam tekanan gauge, tambahkan tekanan atmosfer sebelum dibagi.</li>
<li>Selisih kedua model bisa ditampilkan langsung di DCS, misalnya (Q isentropik − Q isothermal) / Q isothermal × 100%. Dengan asumsi ideal yang dipakai di artikel ini, selisihnya di bawah sekitar 1% untuk penyimpangan PR sampai ±15%. Pada mesin sebenarnya bisa lebih besar; gunakan untuk melihat tren atau lonjakan mendadak.</li>
<li>Untuk kondisi sebelum koreksi IGV pada contoh di atas, <code>FB_FlowIsothermal</code> menghasilkan sekitar 19548 Nm³/h dan <code>FB_FlowIsentropic</code> sekitar 19583 Nm³/h. Angka ini bisa dipakai untuk menguji implementasi.</li>
<li>Keberadaan tag di DCS tidak otomatis berarti datanya siap dipakai. Verifikasi range, scaling, lokasi sensor, dan kondisi instrumen sebelum hasilnya dijadikan dasar keputusan.</li>
</ul>
<hr>
<h3 id="kesimpulan">Kesimpulan</h3>
<p>Flow yang melewati kompresor multi-stage ber-intercooler bisa diestimasi dari power, rasio kompresi, dan temperatur inlet, tanpa flowmeter, dengan mengkalibrasi relatif terhadap titik desain. Pendekatan isothermal adalah pilihan yang tepat untuk jenis kompresor ini. Perubahan hasilnya sangat mirip dengan model isentropik per-stage, tetapi kebutuhan inputnya jauh lebih sedikit dan mudah diterapkan di DCS.</p>
<p>Kekuatan metode ini ada pada kesederhanaannya. Keterbatasannya ada pada asumsi intinya: efisiensi kompresor dan efektivitas intercooler dianggap sama dengan desain. Model ini bukan alat untuk mengetahui flow secara absolut dari tiga transmitter, melainkan cara memperkirakan bagaimana flow seharusnya berubah terhadap titik desain. Karena itu estimasi ini paling berguna untuk <strong>trending relatif</strong> di sekitar titik desain, dengan logika validitas yang eksplisit di DCS, dan dengan kesadaran bahwa hasilnya adalah flow melalui kompresor, bukan otomatis flow ke proses. Jika flowmeter independen tersedia, selisih keduanya justru menjadi informasi yang berharga: tanda awal bahwa efisiensi kompresor atau intercooler mulai berubah.</p>
<p>Tulisan berikutnya akan membahas sisi lain dari data yang sama: apa yang bisa dan tidak bisa disimpulkan dari temperatur suction dan discharge kompresor multi-stage, dan mengapa "efisiensi overall" dari T_in stage-1 dan T_out stage-akhir menyesatkan.</p>
<hr>
<p>Artikel ini ditulis dengan bantuan kecerdasan buatan dengan arahan, penyesuaian, dan validasi oleh penulis.</p>

{% endraw %}