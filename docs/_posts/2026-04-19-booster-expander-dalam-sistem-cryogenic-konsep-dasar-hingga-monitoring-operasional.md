---
ghost_uuid: "fb00653f-0889-4487-ab15-8b5d894be9b0"
title: "Booster Expander dalam Sistem Cryogenic: Konsep Dasar hingga Monitoring Operasional"
date: "2026-04-19T09:34:56.000+07:00"
slug: "booster-expander-dalam-sistem-cryogenic-konsep-dasar-hingga-monitoring-operasional"
layout: "post"
excerpt: |
  Booster expander bukan dua mesin yang bekerja berdampingan. Ini adalah satu sistem energi — di mana expander menentukan batas, dan booster hanya mengikuti. Memahami ini mengubah cara kita membaca performa, vibrasi, dan stabilitas mesin di lapangan.
image: "https://images.unsplash.com/photo-1605141313002-fde711766543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGJhc2ljJTIwa25vd2xlZGdlfGVufDB8fHx8MTc3NjU2MjYyMHww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@meganwatson?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Megan Watson</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Practical Engineering"
  - "Field Experience"
  - "Distributed Control System"
  - "Air Separation Unit"
categories:
  - "practical-engineering"
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
url: "https://blog.kiiota.com/booster-expander-dalam-sistem-cryogenic-konsep-dasar-hingga-monitoring-operasional/"
comment_id: "69e42abd3585c0065d6f475a"
reading_time: 8
access: true
comments: true
---

{% raw %}
<h1 id="booster-expander-dalam-sistem-cryogenic-konsep-dasar-hingga-monitoring-operasional">Booster Expander dalam Sistem Cryogenic: Konsep Dasar hingga Monitoring Operasional</h1>
<h2 id="pendahuluan">Pendahuluan</h2>
<p>Dalam sistem Air Separation Unit (ASU), booster expander adalah salah satu komponen rotating equipment yang paling sering disalahpahami. Banyak operator memandangnya sebagai dua mesin terpisah — sebuah expander dan sebuah kompresor booster — yang kebetulan terhubung pada satu shaft.</p>
<p>Padahal pemahaman yang tepat justru sebaliknya:</p>
<blockquote>
<p>Booster bukan mesin utama yang dibantu expander. Booster adalah beban — expander adalah prime mover yang memutarnya.</p>
</blockquote>
<p>Dengan kata lain, booster tidak menentukan kemampuan sistem. Ia hanya mengikuti energi yang disediakan oleh expander. Ini bukan sekadar konsep, melainkan batasan fisika yang menentukan bagaimana sistem harus dioperasikan.</p>
<p>Artikel ini membahas konsep dasar booster expander, hubungan energi di dalamnya, serta pendekatan monitoring berbasis rasio yang lebih tepat untuk operasional sehari-hari.</p>
<hr>
<h2 id="konsep-dasar-satu-sistem-energi">Konsep Dasar: Satu Sistem Energi</h2>
<p>Booster expander terdiri dari dua komponen utama dalam satu shaft:</p>
<ul>
<li><strong>Expander</strong> — gas bertekanan tinggi diekspansikan, menghasilkan kerja melalui ekstraksi enthalpy, memutar shaft, dan menghasilkan efek pendinginan yang signifikan.</li>
<li><strong>Booster</strong> — memanfaatkan energi tersebut untuk mengkompresi gas di sisi booster.</li>
</ul>
<p>Keduanya bukan dua mesin independen, melainkan satu sistem energi yang saling terikat.</p>
<blockquote>
<p>Energi yang tersedia dari expander adalah batas atas dari kerja yang dapat dilakukan oleh booster.</p>
</blockquote>
<p>Penting untuk dipahami bahwa energi expander bukanlah nilai tetap — ia sangat dinamis, dipengaruhi oleh kondisi inlet (temperatur dan tekanan), posisi nozzle, serta backpressure di sisi outlet. Inilah sebabnya kapasitas booster bisa terasa berubah meskipun tidak ada yang diubah di sisi booster itu sendiri — sumber energinya yang berfluktuasi.</p>
<p>Pendinginan pada expander bukan sekadar akibat penurunan tekanan seperti yang terjadi pada ekspansi melalui valve (efek Joule-Thomson), tetapi karena ekstraksi kerja dari gas. Inilah sebabnya expander jauh lebih efektif menghasilkan temperatur rendah dibandingkan ekspansi melalui valve biasa.</p>
<hr>
<h2 id="keseimbangan-energi-dan-dampaknya-di-lapangan">Keseimbangan Energi dan Dampaknya di Lapangan</h2>
<p>Secara fundamental:</p>
<p>$$W_{expander} = W_{booster} + W_{losses}$$</p>
<p>Dimana losses meliputi:</p>
<ul>
<li>losses mekanis (bearing, seal, leakage)</li>
<li>losses aerodinamis internal</li>
</ul>
<p>Namun operator tidak melihat persamaan ini secara langsung. Yang terlihat adalah manifestasinya:</p>
<ul>
<li>vibrasi meningkat</li>
<li>speed tidak stabil</li>
<li>mesin terasa tidak "smooth"</li>
<li>bahkan trip</li>
</ul>
<p>Ketika keseimbangan energi terganggu, sistem keluar dari design point dan memicu:</p>
<ul>
<li>perubahan pola aliran di impeller</li>
<li>munculnya unbalanced aerodynamic forces</li>
<li>berkembang menjadi rotor instability</li>
</ul>
<p>Dalam jangka panjang:</p>
<blockquote>
<p>Kondisi ini mempercepat keausan bearing dan menurunkan keandalan mesin.</p>
</blockquote>
<p>Vibrasi sering didiagnosis sebagai masalah mekanis — bearing, alignment, atau balancing. Padahal di lapangan, vibrasi pada booster expander sangat sering berakar dari energy mismatch di sisi aerodinamis, bukan dari komponen mekanis itu sendiri. Mengejar solusi mekanis tanpa memeriksa keseimbangan energi proses adalah langkah yang bisa membuang waktu dan biaya.</p>
<p>Dengan kata lain, menjaga keseimbangan energi bukan hanya soal performa — tetapi juga umur equipment.</p>
<hr>
<h2 id="power-torsi-dan-speed-batasan-yang-tidak-bisa-dinegosiasikan">Power, Torsi, dan Speed: Batasan yang Tidak Bisa Dinegosiasikan</h2>
<p>$$W = \tau \times \omega$$</p>
<p>Karena expander dan booster berada pada satu shaft:</p>
<ul>
<li>kecepatan rotasi selalu sama</li>
<li>keseimbangan torsi harus terpenuhi</li>
</ul>
<p>$$\tau_{expander} = \tau_{booster} + \tau_{losses}$$</p>
<p>Implikasi paling penting:</p>
<blockquote>
<p>Ini bukan batasan kontrol — ini batasan fisika. Booster tidak bisa dipaksa bekerja melebihi energi yang disediakan expander.</p>
</blockquote>
<p>Jika batas ini dilanggar, sistem tidak langsung berhenti — ia akan bereaksi dengan cara tertentu sebelum akhirnya tidak stabil:</p>
<ul>
<li>flow di kedua sisi berubah secara otomatis</li>
<li>rasio ekspansi dan kompresi bergeser dari design point</li>
<li>titik operasi berpindah ke zona yang kurang efisien atau tidak stabil</li>
<li>speed turun, vibrasi meningkat, dan potensi trip meningkat</li>
</ul>
<p>Memahami mekanisme ini membantu operator mengenali tanda-tanda awal ketidakseimbangan sebelum sistem mencapai kondisi kritis.</p>
<hr>
<h2 id="parameter-utama-rasio-ekspansi-dan-rasio-kompresi">Parameter Utama: Rasio Ekspansi dan Rasio Kompresi</h2>
<p>Catatan krusial:</p>
<blockquote>
<p>Semua perhitungan harus menggunakan tekanan absolut (bar abs / psia). Menggunakan tekanan gauge akan menghasilkan rasio yang salah dan interpretasi kondisi operasi yang keliru.</p>
</blockquote>
<p><strong>Rasio Ekspansi (Expander):</strong></p>
<p>$$ER = \frac{P_{inlet}}{P_{outlet}}$$</p>
<p><strong>Rasio Kompresi (Booster):</strong></p>
<p>$$CR = \frac{P_{discharge}}{P_{suction}}$$</p>
<p><strong>Mengapa bukan differential pressure (ΔP)?</strong></p>
<p>ΔP hanya menunjukkan selisih absolut tanpa memperhitungkan kondisi suction.</p>
<table>
<thead>
<tr>
<th>Suction (bar abs)</th>
<th>Discharge (bar abs)</th>
<th>ΔP (bar)</th>
<th>CR</th>
</tr>
</thead>
<tbody>
<tr>
<td>5.0</td>
<td>6.0</td>
<td>1.0</td>
<td>1.20</td>
</tr>
<tr>
<td>4.0</td>
<td>5.0</td>
<td>1.0</td>
<td>1.25</td>
</tr>
</tbody>
</table>
<blockquote>
<p>ΔP yang sama tidak selalu mencerminkan kondisi operasi yang sama.</p>
</blockquote>
<p>Dengan sistem DCS, rasio dapat dihitung secara real-time, sehingga lebih representatif dibanding ΔP.</p>
<hr>
<h2 id="temperatur-adalah-konsekuensi-bukan-target">Temperatur Adalah Konsekuensi, Bukan Target</h2>
<p>$$T_{outlet} = T_{inlet} \times \left(\frac{P_{outlet}}{P_{inlet}}\right)^{\frac{\gamma-1}{\gamma}}$$</p>
<p>Temperatur outlet adalah fungsi langsung dari rasio tekanan.</p>
<blockquote>
<p>Rasio adalah penyebab. Temperatur adalah akibat.</p>
</blockquote>
<p>Jika rasio sesuai design dan kondisi inlet normal, maka temperatur akan mengikuti secara alami.</p>
<blockquote>
<p>Mengejar temperatur tanpa memperhatikan rasio sama seperti memperbaiki gejala tanpa menyentuh penyebabnya.</p>
</blockquote>
<hr>
<h2 id="opening-nozzle-expander-satu-tuas-untuk-seluruh-sistem">Opening Nozzle Expander: Satu Tuas untuk Seluruh Sistem</h2>
<p>Opening nozzle (pada beberapa vendor dikenal sebagai VIGV atau segmental nozzle) adalah satu-satunya manipulated variable utama. Lebih tepat dipahami bukan sebagai pengatur flow semata, melainkan sebagai <strong>pengatur energi</strong> — karena yang sesungguhnya dikendalikan adalah enthalpy drop di sisi expander, yang menentukan berapa besar energi tersedia untuk memutar shaft dan menggerakkan booster. Perubahannya mempengaruhi seluruh sistem:</p>
<div style="overflow-x: auto; margin: 1em 0;">
  <div class="mermaid">
    ---
    config:
      theme: neutral
    ---
    flowchart TD
        A("Opening Nozzle ↑"):::nozzle
        B("Flow Expander ↑"):::expander
        C("Energi Expander ↑"):::expander
        D("Torsi Shaft ↑"):::shaft
        E("Speed ↑"):::shaft
        F("Booster Work ↑"):::booster
        G("Flow Booster ↑"):::booster
        H("Rasio Kompresi Berubah"):::output
        A --&gt; B
        B --&gt; C
        C --&gt;|Menghasilkan| D
        D --&gt; E
        E --&gt; F
        F --&gt; G
        G --&gt; H
        classDef nozzle fill:#fff2cc,stroke:#bf9000,stroke-width:2px,color:#000
        classDef expander fill:#cfe2f3,stroke:#1155cc,stroke-width:2px,color:#000
        classDef shaft fill:#d9ead3,stroke:#38761d,stroke-width:2px,color:#000
        classDef booster fill:#fce5cd,stroke:#e69138,stroke-width:2px,color:#000
        classDef output fill:#d9d2e9,stroke:#351c75,stroke-width:2px,color:#000
  </div>
  <figcaption style="text-align:center; font-size:14px; color:#555;">
    Pengaruh Opening Nozzle terhadap Keseimbangan Sistem Booster Expander
  </figcaption>
</div>
<blockquote>
<p>Tidak ada perubahan kecil di sistem ini — satu adjustment akan menggeser seluruh keseimbangan sistem.</p>
</blockquote>
<p><strong>Profil Vendor sebagai Peta Energi</strong></p>
<p>Vendor biasanya menyediakan tabel performa yang mencakup speed, flow, tekanan, temperatur, dan posisi nozzle.</p>
<blockquote>
<p>Setiap titik dalam tabel tersebut adalah kondisi di mana keseimbangan energi tercapai. Profil vendor adalah peta keseimbangan energi sistem.</p>
</blockquote>
<p>Vendor umumnya tidak hanya menyediakan data untuk 100% pembebanan, tetapi juga untuk beberapa titik lain — misalnya 90% dan 110%. Setiap titik pembebanan memiliki profil keseimbangan energi tersendiri dengan rasio, speed, flow, dan posisi nozzle yang berbeda. Pendekatan monitoring berbasis rasio berlaku di semua titik pembebanan tersebut — operator tinggal mengacu ke profil yang sesuai dengan kondisi operasi aktual, tanpa perlu mengekstrapolasi sendiri.</p>
<hr>
<h2 id="bypass-valve-booster-harus-full-close">Bypass Valve Booster: Harus Full Close</h2>
<p>Dalam kondisi operasi normal:</p>
<blockquote>
<p>Bypass valve harus full close.</p>
</blockquote>
<p>Jika terbuka:</p>
<ul>
<li>energi kompresi terbuang</li>
<li>efisiensi menurun</li>
<li>kondisi operasi menjadi bias</li>
</ul>
<p><strong>Fenomena Lapangan</strong></p>
<p>Sering ditemukan bypass yang sudah lama tidak pernah full close dan dianggap normal. Kemungkinan penyebabnya adalah prosedur startup yang kurang terkoordinasi — nozzle dinaikkan terlalu cepat sementara bypass belum cukup ditutup, sehingga speed melonjak dan bypass dibiarkan terbuka sebagai solusi sementara yang kemudian bertahan.</p>
<blockquote>
<p>Jika sistem hanya stabil saat bypass terbuka, kemungkinan besar sistem belum berada pada titik operasi yang benar.</p>
</blockquote>
<hr>
<h2 id="seal-gas-dan-lube-oil-parameter-pendukung-yang-tidak-boleh-diabaikan">Seal Gas dan Lube Oil: Parameter Pendukung yang Tidak Boleh Diabaikan</h2>
<p>Di luar keseimbangan energi proses, ada dua sistem pendukung yang dapat menghasilkan gejala yang sama di lapangan — khususnya pada vibrasi dan bearing temperature — dan sering luput dari perhatian dalam diagnostik awal.</p>
<p>Dengan kata lain:</p>
<blockquote>
<p>Tidak semua vibrasi berasal dari ketidakseimbangan energi, tetapi semua kemungkinan harus dipisahkan dengan jelas sebelum tindakan diambil.</p>
</blockquote>
<p><strong>Seal gas pressure:</strong></p>
<p>Seal gas berfungsi mencegah process gas masuk ke area bearing. Jika tekanan seal gas tidak mencukupi atau tidak stabil:</p>
<ul>
<li>process gas dapat merembes masuk ke bearing area</li>
<li>karakteristik pelumasan terganggu</li>
<li>bearing temperature naik dan vibrasi meningkat</li>
</ul>
<p><strong>Lube oil:</strong></p>
<p>Tekanan dan kondisi oli secara langsung menentukan kualitas film pelumasan di bearing. Jika tekanan oli terlalu rendah atau oli terkontaminasi:</p>
<ul>
<li>film oli tidak terbentuk sempurna</li>
<li>terjadi kontak metal-to-metal</li>
<li>bearing temperature naik dan vibrasi meningkat</li>
</ul>
<p>Perlu diperhatikan bahwa gejala yang muncul dari masalah seal gas atau lube oil dapat sangat mirip dengan gejala akibat ketidakseimbangan energi, seperti:</p>
<ul>
<li>peningkatan vibrasi</li>
<li>kenaikan bearing temperature</li>
<li>operasi yang terasa tidak stabil</li>
</ul>
<blockquote>
<p>Sebelum menyimpulkan bahwa vibrasi berasal dari ketidakseimbangan energi atau masalah mekanis struktural, kondisi seal gas dan lube oil perlu diperiksa terlebih dahulu — keduanya adalah variabel independen yang dapat menghasilkan gejala serupa.</p>
</blockquote>
<hr>
<h2 id="prosedur-startup-melewati-critical-speed-dengan-benar">Prosedur Startup: Melewati Critical Speed dengan Benar</h2>
<p>Contoh sistem dengan dua critical speed (misal 6.000 dan 9.000 RPM):</p>
<p><strong>Fase 1 — Menuju Critical Speed Pertama</strong></p>
<ul>
<li>Naikkan nozzle dengan cepat</li>
<li>Lewati critical speed pertama sesegera mungkin</li>
<li>Bypass masih terbuka</li>
</ul>
<p><strong>Fase 2 — Antar Critical Speed</strong></p>
<ul>
<li>Mulai koordinasi nozzle dan bypass secara proporsional</li>
<li>Hindari berlama-lama di zona ini</li>
</ul>
<p><strong>Fase 3 — Setelah Critical Speed Kedua</strong></p>
<ul>
<li>Semua critical speed terlewati</li>
<li>Koordinasi penuh, nozzle naik proporsional dengan bypass closing</li>
<li>Target: bypass full close</li>
</ul>
<blockquote>
<p>Yang berbahaya bukan melewati critical speed, tetapi terlalu lama berada di dalamnya.</p>
</blockquote>
<p>Untuk sistem dengan satu critical speed, prosedur menjadi dua fase — cepat melewati critical speed, lalu koordinasi penuh hingga bypass full close.</p>
<hr>
<h2 id="monitoring-berbasis-rasio">Monitoring Berbasis Rasio</h2>
<p>Pendekatan monitoring terbaik adalah membandingkan rasio aktual dengan design secara bersamaan untuk kedua sisi:</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Formula</th>
<th>Makna</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rasio Ekspansi</td>
<td>$ER = P_{inlet} / P_{outlet}$</td>
<td>Performa expander</td>
</tr>
<tr>
<td>Rasio Kompresi</td>
<td>$CR = P_{discharge} / P_{suction}$</td>
<td>Performa booster</td>
</tr>
</tbody>
</table>
<p>Namun yang lebih powerful adalah melihat <strong>hubungan antara ER dan CR</strong>, bukan hanya masing-masing secara terpisah. Pola korelasi keduanya memberikan informasi diagnostik yang jauh lebih kaya:</p>
<table>
<thead>
<tr>
<th>Pola</th>
<th>Interpretasi</th>
</tr>
</thead>
<tbody>
<tr>
<td>ER naik, CR tidak mengikuti</td>
<td>Energy mismatch — energi expander tidak terserap optimal oleh booster</td>
</tr>
<tr>
<td>ER stabil, CR naik</td>
<td>Kemungkinan masalah downstream booster</td>
</tr>
<tr>
<td>ER turun, CR turun bersamaan</td>
<td>Pergeseran kondisi operasi secara keseluruhan — periksa inlet expander dan nozzle</td>
</tr>
<tr>
<td>ER &amp; CR keduanya menyimpang dari design</td>
<td>Sistem di luar design envelope — kembalikan ke profil vendor</td>
</tr>
</tbody>
</table>
<p>Pendekatan berbasis pola korelasi ini adalah langkah menuju condition-based monitoring yang lebih proaktif.</p>
<hr>
<h2 id="panduan-interpretasi-untuk-operator">Panduan Interpretasi untuk Operator</h2>
<table>
<thead>
<tr>
<th>Kondisi</th>
<th>Kemungkinan Penyebab</th>
<th>Indikasi Vibrasi</th>
<th>Tindakan</th>
</tr>
</thead>
<tbody>
<tr>
<td>ER tinggi</td>
<td>P inlet tinggi / outlet rendah</td>
<td>Meningkat</td>
<td>Periksa upstream</td>
</tr>
<tr>
<td>CR tinggi</td>
<td>Discharge tinggi</td>
<td>Meningkat</td>
<td>Periksa downstream</td>
</tr>
<tr>
<td>ER &amp; CR menyimpang</td>
<td>Di luar design envelope</td>
<td>Instability</td>
<td>Kembali ke profil vendor</td>
</tr>
<tr>
<td>Speed fluktuatif</td>
<td>Ketidakseimbangan energi</td>
<td>Fluktuatif</td>
<td>Evaluasi nozzle &amp; bypass</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="estimasi-flow">Estimasi Flow</h2>
<p>Pendekatan berbasis keseimbangan energi dengan asumsi proses isentropik dan efisiensi konstan:</p>
<p>$$\dot{m}_{expander} = \frac{W_{expander}}{\Delta h} \times \frac{1}{\eta_{expander}}$$</p>
<p>$$\dot{m}_{booster} = \frac{W_{booster}}{\Delta h} \times \eta_{booster}$$</p>
<p>Catatan penting:</p>
<ul>
<li>Formula ini valid dengan asumsi <strong>medium gas yang digunakan konsisten dengan kondisi design</strong>. Jika terjadi perubahan komposisi gas yang signifikan, diperlukan koreksi terhadap density atau molecular weight.</li>
<li>Estimasi paling akurat di sekitar design point.</li>
<li>Efisiensi berubah terhadap flow dan speed — pada kondisi low load, estimasi menjadi kurang presisi.</li>
</ul>
<hr>
<h2 id="implementasi-di-dcs">Implementasi di DCS</h2>
<h3 id="python">Python</h3>
<pre><code class="language-python"># Input
P_exp_inlet     = 6.0   # bar abs
P_exp_outlet    = 1.4   # bar abs
P_bst_suction   = 5.5   # bar abs
P_bst_discharge = 6.2   # bar abs

# Design
ER_design = 6.0 / 1.4
CR_design = 6.2 / 5.5

# Rasio aktual (dengan proteksi division by zero)
ER_actual = P_exp_inlet / P_exp_outlet if P_exp_outlet &gt; 0 else 0
CR_actual = P_bst_discharge / P_bst_suction if P_bst_suction &gt; 0 else 0

# Deviasi terhadap design (%)
ER_deviation = (ER_actual - ER_design) / ER_design * 100 if ER_design &gt; 0 else 0
CR_deviation = (CR_actual - CR_design) / CR_design * 100 if CR_design &gt; 0 else 0

print(f"ER Aktual : {ER_actual:.3f} (Design: {ER_design:.3f}, Deviasi: {ER_deviation:.2f}%)")
print(f"CR Aktual : {CR_actual:.3f} (Design: {CR_design:.3f}, Deviasi: {CR_deviation:.2f}%)")
</code></pre>
<p>📎 Bisa langsung dicoba di: 👉 <a href="https://onecompiler.com/python?ref=blog.kiiota.com">Python Online Compiler</a></p>
<h3 id="structured-text-plc-dcs">Structured Text (PLC / DCS)</h3>
<pre><code class="language-pascal">(* Input Variables *)
VAR
    P_EXP_INLET     : REAL;  (* Tekanan inlet expander, bar abs *)
    P_EXP_OUTLET    : REAL;  (* Tekanan outlet expander, bar abs *)
    P_BST_SUCTION   : REAL;  (* Tekanan suction booster, bar abs *)
    P_BST_DISCHARGE : REAL;  (* Tekanan discharge booster, bar abs *)
    ER_DESIGN       : REAL;  (* Rasio ekspansi design *)
    CR_DESIGN       : REAL;  (* Rasio kompresi design *)
END_VAR

(* Output Variables *)
VAR
    ER_ACTUAL    : REAL;  (* Rasio ekspansi aktual *)
    CR_ACTUAL    : REAL;  (* Rasio kompresi aktual *)
    ER_DEVIATION : REAL;  (* Deviasi ER, % *)
    CR_DEVIATION : REAL;  (* Deviasi CR, % *)
END_VAR

(* Kalkulasi Rasio *)
IF P_EXP_OUTLET &gt; 0.0 THEN
    ER_ACTUAL := P_EXP_INLET / P_EXP_OUTLET;
END_IF;

IF P_BST_SUCTION &gt; 0.0 THEN
    CR_ACTUAL := P_BST_DISCHARGE / P_BST_SUCTION;
END_IF;

(* Deviasi terhadap design *)
IF ER_DESIGN &gt; 0.0 THEN
    ER_DEVIATION := (ER_ACTUAL - ER_DESIGN) / ER_DESIGN * 100.0;
END_IF;

IF CR_DESIGN &gt; 0.0 THEN
    CR_DEVIATION := (CR_ACTUAL - CR_DESIGN) / CR_DESIGN * 100.0;
END_IF;
</code></pre>
<hr>
<h2 id="kesimpulan">Kesimpulan</h2>
<p>Booster expander bukan dua mesin terpisah, melainkan satu sistem energi yang saling terikat.</p>
<p>Expander adalah sumber energi. Booster adalah beban yang mengikuti. Energi dari expander adalah batas atas yang tidak bisa dilanggar — ini bukan soal kontrol, tetapi hukum fisika.</p>
<p>Parameter utama yang harus dijaga adalah rasio — rasio ekspansi menentukan performa expander, rasio kompresi menentukan performa booster. Temperatur bukan target utama, melainkan konsekuensi dari rasio yang tercapai.</p>
<p>Opening nozzle adalah satu tuas yang menggeser seluruh keseimbangan sistem — mempengaruhi speed, flow, rasio, dan temperatur secara bersamaan.</p>
<p>Bypass valve harus berada dalam kondisi full close saat operasi normal. Jika tidak, energi terbuang dan kondisi operasi yang sebenarnya menjadi tidak terlihat.</p>
<p>Profil vendor bukan sekadar referensi, melainkan peta keseimbangan energi yang harus dijaga.</p>
<p>Dengan memahami hubungan ini dan mengimplementasikan monitoring berbasis rasio di DCS, operator tidak hanya membaca angka — tetapi memahami kondisi sistem secara menyeluruh.</p>
<p>Booster expander bukan sistem yang bisa dikontrol secara bebas — ia adalah sistem yang harus dipahami batas energinya. Operator yang memahami energi tidak menunggu alarm untuk bereaksi; mereka membaca perilaku mesin dan mengenali ketidakseimbangan sebelum menjadi masalah.</p>
<blockquote>
<p>Pada akhirnya, yang dijaga bukan sekadar parameter — tetapi keseimbangan energi sistem secara keseluruhan.</p>
</blockquote>

{% endraw %}