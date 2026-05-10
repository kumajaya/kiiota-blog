---
ghost_uuid: "faea23f3-9650-4f75-a8a0-f8d65605975f"
title: "Memahami Cara Kerja PID Control pada DCS Supcon"
date: "2026-05-09T16:38:18.000+07:00"
slug: "memahami-cara-kerja-pid-control-pada-dcs-supcon"
layout: "post"
excerpt: |
  DCS Supcon menggunakan proportional band dan reciprocal integral time — bukan gain dan integral time langsung. Salah baca parameter ini berarti tuning yang terasa sudah benar ternyata jauh dari optimal.
image: "https://images.unsplash.com/photo-1579719558505-ad4a5fee0847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxjb250cm9sfGVufDB8fHx8MTc3ODMxNjQyNnww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@ibrahimboran?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Ibrahim Boran</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Distributed Control System"
  - "Engineering Lessons"
  - "Field Experience"
categories:
  - "distributed-control-system"
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
url: "https://blog.kiiota.com/memahami-cara-kerja-pid-control-pada-dcs-supcon/"
comment_id: "69feed393585c0065d6f4812"
reading_time: 6
access: true
comments: true
---

{% raw %}
<p><em>Ditulis oleh Ketut Kumajaya — 9 Mei 2026</em></p>
<h1 id="pendahuluan">Pendahuluan</h1>
<p>Pada banyak sistem kontrol industri, PID controller merupakan algoritma utama untuk menjaga variabel proses seperti pressure, flow, temperature, dan level tetap berada pada setpoint. Salah satu hal yang sering membingungkan engineer ketika menggunakan DCS Supcon adalah bentuk parameter PID-nya yang sedikit berbeda dibanding beberapa PLC atau DCS modern lain.</p>
<p>Pada Supcon:</p>
<ul>
<li>Parameter <strong>P</strong> menggunakan <strong>Proportional Band (%)</strong></li>
<li>Parameter <strong>I</strong> menggunakan <strong>nilai reciprocal dari Integral Time ($1/T_I$)</strong></li>
<li>Derivative menggunakan bentuk <strong>filtered derivative</strong></li>
</ul>
<p>Akibatnya:</p>
<ul>
<li>Semakin <strong>kecil</strong> nilai P → controller semakin agresif</li>
<li>Semakin <strong>besar</strong> nilai I → integral semakin agresif</li>
</ul>
<p>Ini berbeda dengan beberapa sistem lain yang menggunakan proportional gain langsung maupun integral time langsung.</p>
<hr>
<h1 id="apa-itu-pid-controller">Apa itu PID Controller?</h1>
<p>PID controller adalah algoritma kontrol yang menghitung output berdasarkan tiga komponen: Proportional, Integral, dan Derivative. Ketiganya bekerja bersama untuk menjaga process variable (PV) tetap berada di setpoint (SP).</p>
<h2 id="proportional-p">Proportional (P)</h2>
<p>Komponen P menghasilkan output yang proporsional terhadap besar error saat ini — selisih antara SP dan PV. Semakin besar error, semakin besar output yang dihasilkan.</p>
<p>P bekerja instan: begitu error muncul, output langsung berubah. Kelemahannya, P saja hampir selalu meninggalkan offset permanen — PV mendekati SP tapi tidak pernah benar-benar mencapainya.</p>
<h2 id="integral-i">Integral (I)</h2>
<p>Komponen I menjumlahkan error dari waktu ke waktu. Selama error masih ada, integral terus terakumulasi dan mendorong output hingga offset benar-benar hilang.</p>
<p>I bertugas menghilangkan offset yang ditinggalkan oleh P. Namun integral yang terlalu agresif dapat menyebabkan overshoot dan oscillation karena output terus didorong bahkan saat PV sudah mendekati SP.</p>
<h2 id="derivative-d">Derivative (D)</h2>
<p>Komponen D membaca kecepatan perubahan error. Bila PV bergerak cepat menuju SP, derivative mulai mengurangi output lebih awal — seperti rem sebelum mencapai target.</p>
<p>D membantu mengurangi overshoot dan mempercepat stabilisasi. Namun derivative sangat sensitif terhadap noise sehingga tidak selalu digunakan, terutama pada proses dengan sinyal yang tidak bersih.</p>
<hr>
<h1 id="struktur-pid-pada-supcon">Struktur PID pada Supcon</h1>
<p>Dokumen Supcon menunjukkan formula dasar berikut:</p>
<p>$$\frac{U(s)}{E(s)} = \frac{1}{P} + \frac{1}{T_I s} + \frac{T_D s}{1+\frac{T_D}{K_d}s}$$</p>
<p>Dengan:</p>
<ul>
<li>$U(s)$ = output controller</li>
<li>$E(s)$ = error</li>
<li>$P$ = proportional band</li>
<li>$T_I$ = integral time</li>
<li>$T_D$ = derivative time</li>
<li>$K_d$ = derivative filter gain</li>
</ul>
<p>Error didefinisikan sebagai:</p>
<p>$$e(t) = SP(t) - PV(t)$$</p>
<p>Di mana:</p>
<ul>
<li>$SP$ = setpoint</li>
<li>$PV$ = process variable</li>
</ul>
<hr>
<h1 id="komponen-proportional-p">Komponen Proportional (P)</h1>
<p>Bagian proportional pada Supcon:</p>
<p>$$U_P(s)=\frac{1}{P}E(s)$$</p>
<p>Karena Supcon menggunakan proportional band, hubungan dengan gain klasik menjadi:</p>
<p>$$K_p=\frac{100}{P}$$</p>
<h2 id="makna-praktis">Makna Praktis</h2>
<p>Semakin kecil P:</p>
<ul>
<li>gain semakin besar</li>
<li>respons controller semakin agresif</li>
</ul>
<p>Semakin besar P:</p>
<ul>
<li>gain semakin kecil</li>
<li>controller semakin lembut</li>
</ul>
<hr>
<h2 id="contoh">Contoh</h2>
<h3 id="p-100">P = 100%</h3>
<p>$K_p=\frac{100}{100}=1$</p>
<h3 id="p-600">P = 600%</h3>
<p>$K_p=\frac{100}{600}=0.167$</p>
<p>Artinya:</p>
<ul>
<li>P 100% sekitar 6 kali lebih agresif dibanding P 600%.</li>
</ul>
<hr>
<h1 id="cara-kerja-integral-i">Cara Kerja Integral (I)</h1>
<p>Bagian integral pada Supcon:</p>
<p>$$U_I(s)=\frac{1}{T_I s}E(s)$$</p>
<p>Dalam domain waktu:</p>
<p>$$u_I(t)=\frac{1}{T_I}\int e(t),dt$$</p>
<p>Integral bertugas:</p>
<ul>
<li>menghilangkan offset</li>
<li>memastikan PV akhirnya mencapai SP</li>
</ul>
<hr>
<h2 id="parameter-i-sebagai-reciprocal">Parameter I sebagai Reciprocal</h2>
<p>Penting dipahami: <strong>parameter I yang diinput di DCS Supcon bukan $T_I$ langsung, melainkan nilai reciprocal-nya</strong>.</p>
<p>Dokumentasi Supcon menyebutkan bahwa I ditampilkan sebagai reciprocal, dan nilai yang terlalu kecil dapat menyebabkan overflow perhitungan. Nilai minimum yang diizinkan adalah 1/60 = 0.02 menit.</p>
<p>Hubungannya:</p>
<p>$$I_{input} = \frac{1}{T_I}$$</p>
<p>Artinya:</p>
<table>
<thead>
<tr>
<th>I (input DCS)</th>
<th>T_I aktual</th>
<th>Karakter</th>
</tr>
</thead>
<tbody>
<tr>
<td>0.02 menit</td>
<td>50 menit</td>
<td>sangat lambat</td>
</tr>
<tr>
<td>0.17 menit</td>
<td>6 menit</td>
<td>lambat</td>
</tr>
<tr>
<td>1 menit</td>
<td>1 menit</td>
<td>sedang</td>
</tr>
<tr>
<td>2 menit</td>
<td>0.5 menit</td>
<td>agresif</td>
</tr>
<tr>
<td>6 menit</td>
<td>10 detik</td>
<td>sangat agresif</td>
</tr>
</tbody>
</table>
<p><strong>Kesimpulan: I besar → integral lebih agresif.</strong></p>
<p>Ini kebalikan dari intuisi engineer yang terbiasa dengan sistem yang menggunakan integral time langsung.</p>
<hr>
<h2 id="karakter-integral">Karakter Integral</h2>
<p>Semakin besar $I_{input}$:</p>
<ul>
<li>integral semakin cepat</li>
<li>offset dihilangkan lebih agresif</li>
</ul>
<p>Semakin kecil $I_{input}$:</p>
<ul>
<li>integral semakin lambat</li>
<li>loop lebih tenang</li>
</ul>
<hr>
<h1 id="cara-kerja-derivative-d">Cara Kerja Derivative (D)</h1>
<p>Bagian derivative pada Supcon:</p>
<p>$$U_D(s)=\frac{T_D s}{1+\frac{T_D}{K_d}s}E(s)$$</p>
<p>Derivative berfungsi:</p>
<ul>
<li>memprediksi arah perubahan PV</li>
<li>mengurangi overshoot</li>
<li>mempercepat stabilisasi</li>
</ul>
<p>Namun Supcon tidak menggunakan derivative ideal murni, melainkan derivative yang sudah difilter.</p>
<hr>
<h1 id="mengapa-derivative-difilter">Mengapa Derivative Difilter?</h1>
<p>Derivative sangat sensitif terhadap noise.</p>
<p>Tanpa filter:</p>
<p>$$U_D(s)=T_D sE(s)$$</p>
<p>Sedikit noise pada PV dapat menghasilkan perubahan output besar.</p>
<p>Karena itu Supcon menambahkan filter low-pass:</p>
<p>$$\frac{T_D s}{1+\frac{T_D}{K_d}s}$$</p>
<p>Agar derivative tetap stabil untuk aplikasi industri.</p>
<hr>
<h1 id="dpi-mode-pada-supcon">D_PI Mode pada Supcon</h1>
<p>Supcon menyediakan mode penting bernama <strong>D_PI</strong>.</p>
<p>Pada mode ini:</p>
<ul>
<li>derivative hanya diterapkan ke PV</li>
<li>bukan ke error</li>
</ul>
<p>Formula discrete yang digunakan:</p>
<p>$$u_d(n)=\frac{T_D}{K_d T_s+T_D}u_d(n-1)+K_d\left[y(n)-y(n-1)\right]$$</p>
<p>Dengan:</p>
<ul>
<li>$y(n)$ = PV sekarang</li>
<li>$y(n-1)$ = PV sebelumnya</li>
<li>$u_d(n)$ = derivative output sekarang</li>
<li>$u_d(n-1)$ = derivative output sebelumnya</li>
<li>$T_s$ = sampling time</li>
</ul>
<hr>
<h1 id="mengapa-dpi-penting">Mengapa D_PI Penting?</h1>
<p>Jika derivative diterapkan langsung pada error:</p>
<p>$$\frac{d}{dt}(SP-PV)$$</p>
<p>Maka perubahan mendadak pada SP akan menghasilkan:</p>
<ul>
<li>derivative kick</li>
<li>lonjakan output besar</li>
</ul>
<p>Pada plant nyata ini bisa berbahaya:</p>
<ul>
<li>valve bergerak mendadak</li>
<li>pressure spike</li>
<li>instabilitas proses</li>
</ul>
<p>Karena itu Supcon menggunakan derivative terhadap PV saja.</p>
<p>Ini merupakan praktik industri yang baik.</p>
<hr>
<h2 id="kapan-mengaktifkan-dpi">Kapan Mengaktifkan D_PI?</h2>
<p>Aktifkan D_PI ketika:</p>
<ul>
<li>loop menggunakan derivative (D &gt; 0)</li>
<li>setpoint loop sering diubah oleh operator atau oleh major loop cascade</li>
<li>proses sensitif terhadap lonjakan output mendadak — misalnya pressure loop, recycle valve, atau cryogenic process</li>
</ul>
<p>Dengan D_PI aktif, perubahan SP tidak akan memicu derivative kick karena derivative hanya menghitung perubahan PV, bukan perubahan error.</p>
<hr>
<h2 id="kapan-derivative-sebaiknya-tidak-dipakai-sama-sekali">Kapan Derivative Sebaiknya Tidak Dipakai Sama Sekali?</h2>
<p>Derivative tidak diperlukan — bahkan kontraproduktif — pada kondisi berikut:</p>
<ul>
<li><strong>Flow loop</strong> — sinyal flow transmitter mengandung noise tinggi; derivative akan memperkuat noise dan membuat valve hunting</li>
<li><strong>Level loop</strong> — proses lambat dan toleran terhadap offset kecil; derivative tidak memberikan manfaat signifikan</li>
<li><strong>Loop dengan transmitter noise tinggi</strong> — noise sekecil apapun akan diperkuat oleh derivative, meskipun sudah difilter</li>
<li><strong>Loop yang sudah stabil dengan PI saja</strong> — menambahkan D tanpa alasan jelas hanya menambah kompleksitas tuning</li>
</ul>
<p>Sebagai panduan praktis: aktifkan derivative hanya bila ada masalah spesifik yang ingin diatasi — overshoot berlebihan atau respons yang terlalu lambat pada proses dengan dead time besar seperti temperature loop.</p>
<hr>
<h2 id="dpi-pada-cascade-control">D_PI pada Cascade Control</h2>
<p>Perlu diperhatikan: <strong>mode D_PI tidak berlaku pada minor loop di cascade control</strong>.</p>
<p>Ketika minor loop menerima setpoint dari major loop, differential action pada minor loop tetap menggunakan formula derivative original terhadap error, bukan terhadap PV. Hal ini karena setpoint minor loop berubah secara dinamis mengikuti output major loop, sehingga metode PV differential tidak dapat diterapkan.</p>
<p>Implikasinya pada aplikasi seperti compressor atau ASU: bila derivative diaktifkan pada secondary loop cascade, perlu diperhitungkan bahwa derivative kick tetap dapat terjadi saat major loop memberikan perubahan setpoint yang signifikan.</p>
<hr>
<h1 id="bentuk-lengkap-pid-supcon">Bentuk Lengkap PID Supcon</h1>
<p>Secara konseptual dalam domain waktu:</p>
<p>$$u(t)=\frac{1}{P}e(t)+\frac{1}{T_I}\int e(t),dt+T_D\frac{de(t)}{dt}$$</p>
<p>Walaupun implementasi aktualnya menggunakan:</p>
<ul>
<li>derivative filter</li>
<li>discrete execution</li>
<li>anti-reset windup</li>
<li>mode D_PI</li>
</ul>
<hr>
<h1 id="interpretasi-parameter-supcon">Interpretasi Parameter Supcon</h1>
<h2 id="proportional-band">Proportional Band</h2>
<table>
<thead>
<tr>
<th>P (%)</th>
<th>Karakter</th>
</tr>
</thead>
<tbody>
<tr>
<td>1000</td>
<td>sangat lembut</td>
</tr>
<tr>
<td>600</td>
<td>lembut</td>
</tr>
<tr>
<td>300</td>
<td>sedang</td>
</tr>
<tr>
<td>100</td>
<td>agresif</td>
</tr>
<tr>
<td>50</td>
<td>sangat agresif</td>
</tr>
</tbody>
</table>
<p>Range yang diizinkan: minimum 6.25%, maximum 204800%.</p>
<hr>
<h2 id="integral-time-i-sebagai-reciprocal">Integral Time (I sebagai reciprocal)</h2>
<p>I input adalah $1/T_I$ — semakin besar nilai I yang diinput, semakin agresif integral. Lihat tabel konversi lengkap di bagian "Parameter I sebagai Reciprocal" di atas.</p>
<p>Range yang diizinkan: minimum 0.02 menit (= 1/60), maximum sama dengan D.</p>
<hr>
<h2 id="derivative-time">Derivative Time</h2>
<table>
<thead>
<tr>
<th>D (detik)</th>
<th>Karakter</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>derivative nonaktif</td>
</tr>
<tr>
<td>kecil</td>
<td>efek derivative kecil</td>
</tr>
<tr>
<td>besar</td>
<td>derivative kuat</td>
</tr>
</tbody>
</table>
<p>Range yang diizinkan: minimum 0s, maximum 3276.8s.</p>
<hr>
<h1 id="karakter-tuning-berdasarkan-jenis-proses">Karakter Tuning Berdasarkan Jenis Proses</h1>
<p>Tabel berikut memberikan range tipikal sebagai <strong>starting point</strong> tuning awal. Nilai final harus selalu disesuaikan dengan dinamika aktual loop di plant masing-masing — ukuran equipment, span transmitter, dan karakteristik valve sangat mempengaruhi hasil akhir.</p>
<table>
<thead>
<tr>
<th>Proses</th>
<th>P tipikal (%)</th>
<th>I tipikal (input)</th>
<th>D</th>
<th>Alasan</th>
</tr>
</thead>
<tbody>
<tr>
<td>Flow</td>
<td>50–200</td>
<td>1–5</td>
<td>Tidak perlu</td>
<td>Proses cepat, butuh respons agresif</td>
</tr>
<tr>
<td>Pressure</td>
<td>100–500</td>
<td>0.3–2</td>
<td>Jarang</td>
<td>Rentan oscillation, coupling antar equipment</td>
</tr>
<tr>
<td>Temperature</td>
<td>300–1000</td>
<td>0.05–0.3</td>
<td>Opsional</td>
<td>Proses lambat, integral agresif bisa windup</td>
</tr>
<tr>
<td>Level</td>
<td>500–2000</td>
<td>0.02–0.1</td>
<td>Tidak perlu</td>
<td>Tank sebagai buffer, cukup proportional-dominant</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="flow-control">Flow Control</h2>
<p>Flow adalah proses tercepat — dead time kecil, time constant kecil.</p>
<p>Starting point yang umum digunakan:</p>
<ul>
<li>P: 50–200% (agresif)</li>
<li>I: 1–5 (agresif, $T_I$ aktual 0.2–1 menit)</li>
<li>D: tidak diperlukan, noise pada flow transmitter membuat derivative kontraproduktif</li>
</ul>
<hr>
<h2 id="pressure-control">Pressure Control</h2>
<p>Pressure sering memiliki coupling antar equipment — terutama pada header bersama atau sistem compressor dengan recycle.</p>
<p>Starting point yang umum digunakan:</p>
<ul>
<li>P: 100–500% (sedang)</li>
<li>I: 0.3–2 (sedang, $T_I$ aktual 0.5–3 menit)</li>
<li>D: jarang digunakan, perlu hati-hati terhadap oscillation</li>
</ul>
<hr>
<h2 id="temperature-control">Temperature Control</h2>
<p>Proses thermal memiliki time constant besar dan dead time yang signifikan.</p>
<p>Starting point yang umum digunakan:</p>
<ul>
<li>P: 300–1000% (lembut)</li>
<li>I: 0.05–0.3 (lambat, $T_I$ aktual 3–20 menit)</li>
<li>D: opsional, dapat membantu pada proses dengan dead time besar</li>
</ul>
<p>Integral yang terlalu agresif pada temperature loop berisiko windup karena proses lambat merespons.</p>
<hr>
<h2 id="level-control">Level Control</h2>
<p>Tank berfungsi sebagai buffer — tidak perlu mengejar setpoint terlalu agresif.</p>
<p>Starting point yang umum digunakan:</p>
<ul>
<li>P: 500–2000% (lembut, proportional-dominant)</li>
<li>I: 0.02–0.1 (sangat lambat, $T_I$ aktual 10–50 menit)</li>
<li>D: tidak diperlukan</li>
</ul>
<hr>
<h1 id="kesalahan-umum-saat-tuning-supcon">Kesalahan Umum Saat Tuning Supcon</h1>
<h2 id="salah-interpretasi-p">Salah interpretasi P</h2>
<p>Karena Supcon menggunakan proportional band, banyak engineer salah interpretasi:</p>
<p>Mereka mengira P besar = agresif. Padahal pada Supcon, P besar = lembut.</p>
<h2 id="salah-interpretasi-i">Salah interpretasi I</h2>
<p>Karena Supcon menampilkan I sebagai reciprocal, banyak engineer mengira I kecil = agresif.</p>
<p>Padahal pada Supcon: <strong>I besar = agresif</strong> (karena $I = 1/T_I$, nilai besar berarti waktu integral singkat).</p>
<p>Akibat kedua kesalahan ini:</p>
<ul>
<li>tuning menjadi terlalu lambat</li>
<li>atau justru terlalu agresif tanpa disadari</li>
</ul>
<hr>
<h1 id="kesimpulan">Kesimpulan</h1>
<p>PID pada Supcon menggunakan:</p>
<ul>
<li>proportional band untuk P</li>
<li>reciprocal integral time untuk I</li>
<li>filtered derivative untuk D</li>
</ul>
<p>Karakter utamanya:</p>
<ul>
<li><strong>P kecil → lebih agresif</strong></li>
<li><strong>I besar → lebih agresif</strong> (karena $I = 1/T_I$)</li>
<li>derivative menggunakan filter untuk mengurangi noise</li>
<li>tersedia mode D_PI untuk menghindari derivative kick, kecuali pada minor loop cascade</li>
</ul>
<p>Memahami interpretasi parameter ini sangat penting sebelum melakukan tuning di plant nyata, terutama pada sistem seperti:</p>
<ul>
<li>compressor</li>
<li>Air Separation Unit</li>
<li>cryogenic process</li>
<li>pressure loop</li>
<li>recycle control</li>
<li>flow regulation</li>
</ul>

{% endraw %}