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
reading_time: 12
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
<li><strong>Isentropik per-stage:</strong> menjumlahkan kerja isentropik tiap stage dengan asumsi rasio kompresi terbagi rata dan intercooler mengembalikan gas ke T_in. Bentuk ini paling dekat dengan struktur fisik, tetapi memerlukan jumlah stage dan nilai k (Cp/Cv).</li>
</ul>
<p>Perbandingan ketiganya pada kompresor 4-stage dengan PR desain 5.07, saat PR aktual menyimpang dari desain (power dan T_in tetap seperti desain):</p>
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
<li>cukup satu baris formula di DCS.</li>
</ul>
<p>Untuk kompresor multi-stage ber-intercooler, ini kombinasi yang sulit dikalahkan. Bentuk isentropik per-stage tetap berguna sebagai <strong>pembanding silang</strong>. Jika selisih kedua model jauh lebih besar dari yang diperkirakan tabel di atas, asumsi model, data input, atau kondisi operasi perlu diperiksa.</p>
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
<p>Contoh berikut memakai kompresor udara 4-stage dengan angka ilustratif.</p>
<p><strong>Data desain:</strong></p>
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
<td>Rasio kompresi desain</td>
<td>5.07</td>
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
<p><strong>Data aktual:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td>Power listrik terukur</td>
<td>1700 kW</td>
</tr>
<tr>
<td>Rasio kompresi aktual</td>
<td>4.825</td>
</tr>
<tr>
<td>Temperatur inlet aktual</td>
<td>20°C</td>
</tr>
</tbody>
</table>
<p>Daya poros aktual:</p>
<p>\( P_{shaft} = 1700 \times 0.9642 \approx 1639.1 \text{ kW} \)</p>
<p>Estimasi flow:</p>
<p>\( Q_{real} = 18500 \times \frac{1639.1}{1600} \times \frac{293.15}{293.15} \times \frac{\ln(5.07)}{\ln(4.825)} = 18500 \times 1.0244 \times 1 \times 1.0315 \approx 19548 \text{ Nm}^3/\text{h} \)</p>
<p>atau sekitar 105.7% desain. Sebagai pembanding silang, bentuk isentropik per-stage menghasilkan sekitar 19583 Nm³/h (105.9%).</p>
<p>Jika temperatur inlet naik menjadi 30°C (303.15 K) dengan power dan rasio kompresi yang sama:</p>
<p>\( Q_{real} = 18500 \times 1.0244 \times \frac{293.15}{303.15} \times 1.0315 \approx 18903 \text{ Nm}^3/\text{h} \)</p>
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
<li>anti-surge/recycle valve tertutup, atau recycle flow diketahui dan dikurangkan.</li>
</ul>
<p>Perlu dicatat, saat anti-surge valve membuka, kompresor biasanya juga sedang beroperasi mendekati batas surge, jauh dari titik desain. Jadi estimasi flow melalui kompresor pada kondisi itu pun sebaiknya dibaca dengan hati-hati.</p>
<p><strong>Estimasi cenderung terlalu tinggi jika:</strong></p>
<ul>
<li><strong>IGV lebih menutup</strong> pada beban parsial. Pada kompresor fixed-speed, efisiensi turun saat IGV menutup, sehingga asumsi η konstan tidak berlaku lagi.</li>
<li><strong>Kompresor terdegradasi</strong> (fouling, keausan, clearance melebar). Efisiensi turun, tetapi model tetap menganggapnya sama dengan desain.</li>
<li><strong>Intercooler kotor atau cooling water hangat.</strong> Gas masuk stage berikutnya lebih panas, sehingga kerja aktual lebih besar dari kerja isothermal yang diasumsikan.</li>
<li><strong>Beban jauh di bawah desain.</strong> Mechanical losses yang konstan menjadi porsi yang lebih besar dari daya poros.</li>
</ul>
<p>Untuk arah penyimpangan yang dibahas di atas, penyimpangan umumnya mendorong estimasi ke arah yang sama: <strong>flow terlihat lebih besar dari sebenarnya</strong>. Kesalahan pengukuran power atau tekanan tetap bisa mendorong ke dua arah. Ini perlu diingat saat membaca estimasi pada beban parsial.</p>
<p><strong>Ketidakpastian.</strong> Tidak tepat memberikan satu angka ketidakpastian yang berlaku untuk seluruh rentang operasi tanpa analisis ketidakpastian dan validasi terhadap flowmeter independen. Ada dua jenis sumber yang sifatnya berbeda:</p>
<ul>
<li><strong>Ketidakpastian pengukuran:</strong> akurasi power, efisiensi motor, transmitter tekanan dan temperatur. Kontribusinya dapat dievaluasi dari spesifikasi akurasi masing-masing instrumen.</li>
<li><strong>Ketidakpastian model:</strong> perubahan efisiensi kompresor akibat IGV, fouling, efektivitas intercooling, dan posisi titik operasi. Kontribusi ini kecil di dekat titik desain, tetapi bisa menjadi dominan saat kondisi menjauh darinya.</li>
</ul>
<p>Dalam implementasi praktis, total error beberapa persen di sekitar titik desain bukan hal yang mengejutkan, tetapi besar sebenarnya hanya bisa ditentukan melalui validasi terhadap pengukuran independen. Yang jelas, kedua sumber ini jauh lebih besar daripada selisih antara model isothermal dan isentropik per-stage. Jadi pemilihan model bukan sumber ketidakpastian utama. Yang lebih menentukan adalah kualitas data dan seberapa dekat kondisi operasi dengan titik desain.</p>
<p>Model ini juga tidak punya indikator bawaan yang memberi tahu bahwa estimasi sudah keluar dari rentang validitasnya. Karena itu syarat validitas perlu dibangun secara eksplisit di DCS.</p>
<hr>
<h3 id="implementasi-di-dcs">Implementasi di DCS</h3>
<p>Formula isothermal cukup dijalankan sebagai kalkulasi berjalan. Yang membuatnya layak dipakai operasional bukan formulanya, tetapi logika validitas di sekelilingnya.</p>
<p><strong>Syarat operasi stabil</strong> sebaiknya disusun di logika supervisory, di luar function block perhitungan, dari beberapa permissive:</p>
<ul>
<li>kompresor running dan tidak trip,</li>
<li>posisi IGV dalam rentang tertentu di sekitar posisi desain,</li>
<li>power, tekanan, dan temperatur stabil (misalnya perubahan dalam jendela waktu tertentu di bawah batas),</li>
<li>on-delay timer 30–60 detik sebelum status stabil dinyatakan TRUE, agar transient benar-benar meluruh.</li>
</ul>
<p>Status anti-surge valve sebaiknya dikirim sebagai sinyal terpisah, bukan digabung ke syarat stabil. Dengan begitu, DCS bisa membedakan "estimasi flow kompresor valid" dari "estimasi flow ke proses valid".</p>
<p><strong>Nilai dan status harus selalu berpasangan.</strong> Estimasi flow hanya boleh dipakai jika status validnya TRUE. Jika output di-reset ke 0 saat tidak valid, logic downstream yang lalai memeriksa status bisa salah membaca "estimasi tidak valid" sebagai "kompresor tidak mengalirkan gas". Karena itu contoh di bawah memakai pola <strong>nilai valid terakhir + status</strong>: output hanya diperbarui saat perhitungan berhasil, dan status valid turun ke FALSE saat tidak. Pola ini tetap memerlukan disiplin yang sama, karena nilai yang "membeku" juga bisa menyesatkan jika statusnya diabaikan. Historian dan trend sebaiknya dikonfigurasi agar selalu merekam nilai bersama statusnya.</p>
<p>Contoh function block berikut menghitung estimasi isothermal sebagai nilai utama, dan model isentropik ideal (rasio kompresi terbagi rata) sebagai pembanding silang:</p>
<pre><code class="language-iecst">(*==============================================================
  FUNCTION BLOCK: FB_CompressorFlowEstimate
  Estimasi flow MELALUI kompresor multi-stage ber-intercooler dari
  power, rasio kompresi, dan temperatur inlet, relatif ke titik
  desain.
    - Q_estimate : model isothermal (utama)
    - Q_check    : model isentropik ideal, rasio kompresi terbagi
                   rata, k = 1.4 (pembanding silang, bukan kondisi
                   aktual tiap stage)
  Output mempertahankan nilai valid terakhir. Nilai hanya boleh
  dipakai jika Valid = TRUE (flow kompresor) atau
  Valid_Process = TRUE (flow ke proses).
  Stable_Operation dan ASV_Closed berasal dari logika supervisory
  di luar FB ini (running, IGV, stabilitas, on-delay timer).
================================================================*)
FUNCTION_BLOCK FB_CompressorFlowEstimate
VAR_INPUT
    P_elec_kW        : REAL;   (* power listrik terukur, kW *)
    Eff_motor_assumed: REAL;   (* efisiensi motor yang diasumsikan, 0-1 *)
    P_in_abs         : REAL;   (* tekanan suction, absolut *)
    P_out_abs        : REAL;   (* tekanan discharge, absolut, satuan sama *)
    T_in_C           : REAL;   (* temperatur inlet stage-1, degC *)
    P_shaft_design   : REAL;   (* daya poros desain, kW *)
    Q_design         : REAL;   (* flow desain, Nm3/h *)
    PR_design        : REAL;   (* rasio kompresi desain *)
    T_design_C       : REAL;   (* temperatur inlet desain, degC *)
    N_stage          : INT;    (* jumlah stage, untuk pembanding silang *)
    Stable_Operation : BOOL;   (* dari logika supervisory *)
    ASV_Closed       : BOOL;   (* anti-surge / recycle valve tertutup *)
END_VAR
VAR_OUTPUT
    Q_estimate       : REAL;   (* estimasi flow isothermal, Nm3/h *)
    Pct_of_design    : REAL;   (* Q_estimate dalam % desain *)
    Q_check          : REAL;   (* estimasi isentropik ideal, Nm3/h *)
    Model_dev_pct    : REAL;   (* selisih Q_check terhadap Q_estimate, % *)
    P_shaft_est      : REAL;   (* daya poros estimasi, kW - BUKAN terukur *)
    CalcValid        : BOOL;   (* rumus berhasil dihitung; BUKAN jaminan data instrumen benar *)
    Valid            : BOOL;   (* flow melalui kompresor valid *)
    Valid_Process    : BOOL;   (* flow ke proses valid *)
END_VAR
VAR CONSTANT
    C_TO_K    : REAL := 273.15;
    EXPONENT  : REAL := 0.2857;  (* (k-1)/k, k = 1.4 untuk udara/N2 *)
    EFF_MIN   : REAL := 0.80;    (* batas plausibilitas, sesuaikan *)
    EFF_MAX   : REAL := 1.00;
    PR_MIN    : REAL := 1.5;     (* plausibilitas PR, sesuaikan per mesin *)
    PR_MAX    : REAL := 10.0;
    T_MIN_C   : REAL := -10.0;   (* plausibilitas T_in, sesuaikan *)
    T_MAX_C   : REAL := 60.0;
END_VAR
VAR
    PR, T_in_K, T_des_K : REAL;
    q_iso, n, a_n       : REAL;
    h_des, h_act        : REAL;
END_VAR

(* Status turun di awal scan; nilai output TIDAK di-reset
   (pola nilai valid terakhir + status) *)
CalcValid := FALSE;
Valid := FALSE;
Valid_Process := FALSE;

(* Validasi referensi desain dan input *)
IF (P_shaft_design &lt;= 0.0) OR (Q_design &lt;= 0.0)
   OR (PR_design &lt; PR_MIN) OR (PR_design &gt; PR_MAX)
   OR (P_in_abs &lt;= 0.0) OR (P_out_abs &lt;= 0.0) OR (P_elec_kW &lt;= 0.0)
   OR (Eff_motor_assumed &lt; EFF_MIN) OR (Eff_motor_assumed &gt; EFF_MAX)
   OR (T_in_C &lt; T_MIN_C) OR (T_in_C &gt; T_MAX_C) THEN
    RETURN;
END_IF;

PR := P_out_abs / P_in_abs;
IF (PR &lt; PR_MIN) OR (PR &gt; PR_MAX) THEN
    RETURN;
END_IF;

T_in_K  := T_in_C + C_TO_K;
T_des_K := T_design_C + C_TO_K;
IF T_des_K &lt;= 0.0 THEN
    RETURN;
END_IF;

(* Model utama: isothermal, linear terhadap daya.
   LN/LOG: basis logaritma tidak berpengaruh karena yang dipakai rasio. *)
P_shaft_est := P_elec_kW * Eff_motor_assumed;
q_iso := Q_design
       * (P_shaft_est / P_shaft_design)
       * (T_des_K / T_in_K)
       * (LN(PR_design) / LN(PR));

Q_estimate    := q_iso;
Pct_of_design := q_iso / Q_design * 100.0;
CalcValid     := TRUE;

(* Pembanding silang: isentropik ideal, rasio kompresi terbagi rata *)
IF N_stage &gt;= 1 THEN
    n   := INT_TO_REAL(N_stage);
    a_n := EXPONENT / n;
    h_des := T_des_K * n * (EXPT(PR_design, a_n) - 1.0);
    h_act := T_in_K  * n * (EXPT(PR, a_n) - 1.0);
    IF (h_des &gt; 0.0) AND (h_act &gt; 0.0) THEN
        Q_check := Q_design * (P_shaft_est / P_shaft_design) / (h_act / h_des);
        Model_dev_pct := (Q_check - q_iso) / q_iso * 100.0;
    END_IF;
END_IF;

Valid         := CalcValid AND Stable_Operation;
Valid_Process := Valid AND ASV_Closed;

END_FUNCTION_BLOCK
</code></pre>
<p>Beberapa catatan penerapan:</p>
<ul>
<li>Nama fungsi <code>LN</code>, <code>EXPT</code>, dan <code>INT_TO_REAL</code> mengikuti IEC 61131-3. Sesuaikan jika platform memakai nama lain, misalnya <code>POW</code> untuk pangkat atau <code>LOG</code> untuk logaritma.</li>
<li>Dengan asumsi ideal yang dipakai di artikel ini, <code>Model_dev_pct</code> berada di bawah sekitar 1% untuk penyimpangan PR sampai ±15%. Pada mesin sebenarnya selisihnya bisa lebih besar, karena pembagian rasio kompresi, efektivitas intercooling, dan sifat gas tidak persis mengikuti asumsi model. Gunakan nilai ini untuk melihat tren atau lonjakan mendadak, bukan sebagai alarm "model benar/salah".</li>
<li>Untuk kompresor dengan data desain seperti contoh di atas, FB ini menghasilkan sekitar 19548 Nm³/h untuk <code>Q_estimate</code> dan sekitar 19583 Nm³/h untuk <code>Q_check</code>. Angka ini bisa dipakai untuk menguji implementasi.</li>
<li>Batas plausibilitas (<code>EFF_MIN</code>/<code>EFF_MAX</code>, <code>PR_MIN</code>/<code>PR_MAX</code>, <code>T_MIN_C</code>/<code>T_MAX_C</code>) hanya contoh. Sesuaikan dengan range instrumen dan karakteristik tiap mesin. Batas ini hanya pemeriksaan kewajaran data, bukan batas penerimaan performa kompresor. <code>CalcValid</code> hanya berarti rumus berhasil dihitung; kebenaran data instrumen tetap harus dipastikan di logika supervisory. Kode ini adalah contoh ilustratif, bukan kode siap produksi.</li>
<li>Keberadaan tag di DCS tidak otomatis berarti datanya siap dipakai. Verifikasi range, scaling, lokasi sensor, kondisi instrumen, dan sinkronisasi waktu antar-sensor sebelum hasilnya dijadikan dasar keputusan.</li>
</ul>
<hr>
<h3 id="kesimpulan">Kesimpulan</h3>
<p>Flow yang melewati kompresor multi-stage ber-intercooler bisa diestimasi dari power, rasio kompresi, dan temperatur inlet, tanpa flowmeter, dengan mengkalibrasi relatif terhadap titik desain. Pendekatan isothermal adalah pilihan yang tepat untuk jenis kompresor ini. Perubahan hasilnya sangat mirip dengan model isentropik per-stage, tetapi kebutuhan inputnya jauh lebih sedikit dan mudah diterapkan di DCS.</p>
<p>Kekuatan metode ini ada pada kesederhanaannya. Keterbatasannya ada pada asumsi intinya: efisiensi kompresor dan efektivitas intercooler dianggap sama dengan desain. Model ini bukan alat untuk mengetahui flow secara absolut dari tiga transmitter, melainkan cara memperkirakan bagaimana flow seharusnya berubah terhadap titik desain. Karena itu estimasi ini paling berguna untuk <strong>trending relatif</strong> di sekitar titik desain, dengan logika validitas yang eksplisit di DCS, dan dengan kesadaran bahwa hasilnya adalah flow melalui kompresor, bukan otomatis flow ke proses. Jika flowmeter independen tersedia, selisih keduanya justru menjadi informasi yang berharga: tanda awal bahwa efisiensi kompresor atau intercooler mulai berubah.</p>
<p>Tulisan berikutnya akan membahas sisi lain dari data yang sama: apa yang bisa dan tidak bisa disimpulkan dari temperatur suction dan discharge kompresor multi-stage, dan mengapa "efisiensi overall" dari T_in stage-1 dan T_out stage-akhir menyesatkan.</p>
<hr>
<p>Artikel ini ditulis dengan bantuan kecerdasan buatan dengan arahan, penyesuaian, dan validasi oleh penulis.</p>

{% endraw %}