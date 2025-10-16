---
ghost_uuid: "fe18e9c7-d3ea-4542-b701-83a46cb36702"
title: "Surging pada Kompresor Sentrifugal: Ketika Masalah Besar Berawal dari Modifikasi Kecil"
date: "2025-07-21T22:56:15.000+07:00"
slug: "surging-pada-kompresor-sentrifugal-ketika-masalah-besar-berawal-dari-modifikasi-kecil"
layout: "post"
excerpt: |
  Tulisan ini bukan hanya soal teknis, tapi juga tentang manajemen perubahan, analisis historis, dan ketangguhan menghadapi resistensi.
image: "https://images.unsplash.com/photo-1630941150115-ae465f29ece0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIyfHxzdHJlc3N8ZW58MHx8fHwxNzUzMDI2Nzk3fDA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@yosipri?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Yosi Prihantoro</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "engineering-lessons"
  - "troubleshooting"
categories:
  - "engineering-lessons"
featured: true
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
url: "https://blog.kiiota.com/surging-pada-kompresor-sentrifugal-ketika-masalah-besar-berawal-dari-modifikasi-kecil/"
comment_id: "687e4d206dc008042df8a0ab"
reading_time: 10
access: true
comments: true
---

<div class="kg-card kg-audio-card"><img src="" alt="audio-thumbnail" class="kg-audio-thumbnail kg-audio-hide"><div class="kg-audio-thumbnail placeholder"><svg width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 15.33a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM15 13.83a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.486 6.81A2.25 2.25 0 0 1 17.25 9v5.579a.75.75 0 0 1-1.5 0v-5.58a.75.75 0 0 0-.932-.727.755.755 0 0 1-.059.013l-4.465.744a.75.75 0 0 0-.544.72v6.33a.75.75 0 0 1-1.5 0v-6.33a2.25 2.25 0 0 1 1.763-2.194l4.473-.746Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V5.133a.75.75 0 0 0-.225-.535l-.002-.002-3-2.883A.75.75 0 0 0 18 1.5H3ZM1.409.659A2.25 2.25 0 0 1 3 0h15a2.25 2.25 0 0 1 1.568.637l.003.002 3 2.883a2.25 2.25 0 0 1 .679 1.61V21.75A2.25 2.25 0 0 1 21 24H3a2.25 2.25 0 0 1-2.25-2.25V2.25c0-.597.237-1.169.659-1.591Z"></path></svg></div><div class="kg-audio-player-container"><audio src="https://blog.kiiota.com/content/media/2025/07/surging_id_ID.mp3" preload="metadata"></audio><div class="kg-audio-title">Ketika Masalah Besar Berawal dari Modifikasi Kecil</div><div class="kg-audio-player"><button class="kg-audio-play-icon" aria-label="Play audio"><svg viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"></path></svg></button><button class="kg-audio-pause-icon kg-audio-hide" aria-label="Pause audio"><svg viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"></rect><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"></rect></svg></button><span class="kg-audio-current-time">0:00</span><div class="kg-audio-time">/<span class="kg-audio-duration">6.312</span></div><input type="range" class="kg-audio-seek-slider" max="100" value="0"><button class="kg-audio-playback-rate" aria-label="Adjust playback speed">1×</button><button class="kg-audio-unmute-icon" aria-label="Unmute"><svg viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"></path></svg></button><button class="kg-audio-mute-icon kg-audio-hide" aria-label="Mute"><svg viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"></path></svg></button><input type="range" class="kg-audio-volume-slider" max="100" value="100"></div></div></div><h2 id="pendahuluan">Pendahuluan</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/01_surging_pada_kompresor_sentrifugal_ketika_masalah_besar_berawal_dari_modifikasi_kecil.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Masalah kronis pada <strong>Kompresor Resirkulasi Nitrogen</strong> dan <strong>Booster Ekspander</strong> di unit <strong>Pabrik Pemisah Udara</strong> sudah muncul sejak commissioning, dipicu oleh modifikasi instalasi yang awalnya dimaksudkan untuk memberikan informasi kecepatan ekspander ke ruang kontrol untuk kepentingan operasional, namun berujung pada dampak teknis jangka panjang.</p>
<p>Perlu hampir sepuluh tahun—sejak saya mulai bekerja di industri ini pada 2007 hingga akhirnya terpecahkan di 2017—untuk benar-benar memahami dan menyelesaikan masalah ini. Dalam kurun waktu tersebut dan pasti juga sebelumnya, berbagai upaya telah dilakukan, namun sebagian besar hanya menyentuh gejalanya—bukan akarnya. Dari perspektif saya, artikel ini merekam perjalanan panjang—dari kecurigaan awal, eksperimen lapangan, hingga penyelesaian yang akhirnya mengembalikan sistem ke logika desain aslinya. Silakan memberikan sanggahan jika dirasa ada yang kurang tepat.</p>
<hr>
<h2 id="awal-mula-masalah">Awal Mula Masalah</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/02_awal_mula_masalah.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Sejak awal, masalah ini seperti dipahami dengan premis yang keliru: hampir semua perhatian tertuju pada <strong>kompresor resirkulasi nitrogen</strong>, seolah-olah ia selalu menjadi biang keladi. Namun sejak awal, saya mencurigai ada yang tidak beres—terutama dalam urutan <em>shutdown</em> antara <strong>kompresor resirkulasi nitrogen</strong> dan <strong>booster ekspander</strong>.</p>
<p><strong>DCS menunjukkan bahwa kompresor resirkulasi nitrogen trip terlebih dahulu</strong>, tetapi saya meragukan kebenaran data ini. Ada <strong>kabel interlock</strong> yang memungkinkan kompresor resirkulasi nitrogen trip <strong>atas permintaan dari booster ekspander</strong>, sementara DCS—yang memproses ratusan I/O—bisa mengalami latensi dalam mencatat urutan kejadian, terutama yang terjadi dalam skala milidetik. Ini karena DCS melakukan <em>siklus pemindaian</em> terhadap I/O secara sekuensial, sedangkan sinyal trip bisa muncul <em>tidak sinkron</em>, baik di depan maupun di belakang jalannya siklus.</p>
<p>Demi memastikan urutan <em>shutdown</em> yang sebenarnya, saya merakit sendiri sebuah <strong>PLC Siemens S7</strong> sebagai <em>pencatan even</em> berkecepatan tinggi. Resolusi tinggi menjadi satu-satunya cara untuk secara obyektif membuktikan siapa yang benar-benar lebih dulu trip. Hasil pengujiannya <strong>konsisten</strong>: <strong>100% kejadian menunjukkan bahwa booster-lah yang lebih dulu trip</strong>. Ini disebabkan oleh <strong>pembukaan <em>bypass</em> booster secara mendadak</strong>, yang memicu <strong>surging pada kompresor resirkulasi nitrogen</strong>, akhirnya kompresor resirkulasi nitrogen ikut trip juga melalui perintah interlock. Tentu tidak semua langsung setuju dengan kesimpulan ini—karena memahami cara kerja DCS dan PLC memang memerlukan keahlian teknis yang mendalam.</p>
<blockquote>
<p><strong>Logika Ladder – Deteksi Trip yang Adil</strong></p>
<p>Logika ladder di bawah ini menerapkan sistem deteksi trip yang deterministik dengan menggunakan deteksi <em>rising edge</em> dan penanda memori.<br>
Sistem ini memastikan bahwa input mana pun—kompresor resirkulasi nitrogen atau booster ekspander—yang memicu trip pertama akan dicatat secara objektif, tanpa dipengaruhi oleh urutan pemindaian PLC.</p>
</blockquote>
<details>
<summary>Klik untuk membuka Logika Ladder dan Tabel Simbol PLC</summary>
<pre><code class="language-plaintext">// Detect rising edge of input C60
Rung 1:
|----[ I0.0 ]----[/ M0.3 ]----------------( M0.1 )  // C60 pulse

Rung 2:
|----[ I0.0 ]-----------------------------( M0.3 )  // Save C60 state

// Detect rising edge of input CD10
Rung 3:
|----[ I0.1 ]----[/ M0.4 ]----------------( M0.2 )  // CD10 pulse

Rung 4:
|----[ I0.1 ]-----------------------------( M0.4 )  // Save CD10 state

// Status outputs
Rung 5:
|----[ I0.0 ]-----------------------------( Q0.2 )  // C60 has tripped

Rung 6:
|----[ I0.1 ]-----------------------------( Q0.3 )  // CD10 has tripped

// Determine who tripped first
Rung 7:
|----[ M0.1 ]----[/ M0.0 ]----------------( Q0.0 )  // C60 tripped first
|                                     ----( M0.0 )  // Lock trip detection

Rung 8:
|----[ M0.2 ]----[/ M0.0 ]----------------( Q0.1 )  // CD10 tripped first
|                                     ----( M0.0 )  // Lock trip detection

// Manual reset
Rung 9:
|----[ I0.2 ]---------------------------[RST M0.0]  // Reset trip flag
|                                       [RST Q0.0]
|                                       [RST Q0.1]
|                                       [RST Q0.2]
|                                       [RST Q0.3]

</code></pre>
<table>
<thead>
<tr>
<th><strong>Symbol</strong></th>
<th><strong>Type</strong></th>
<th><strong>Function Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>I0.0</code></td>
<td>Digital Input</td>
<td>Trip signal from compressor C60</td>
</tr>
<tr>
<td><code>I0.1</code></td>
<td>Digital Input</td>
<td>Trip signal from booster expander CD10</td>
</tr>
<tr>
<td><code>I0.2</code></td>
<td>Digital Input</td>
<td>Manual reset button to clear all trip flags</td>
</tr>
<tr>
<td><code>Q0.0</code></td>
<td>Digital Output</td>
<td>Indicates C60 tripped first</td>
</tr>
<tr>
<td><code>Q0.1</code></td>
<td>Digital Output</td>
<td>Indicates CD10 tripped first</td>
</tr>
<tr>
<td><code>Q0.2</code></td>
<td>Digital Output</td>
<td>Status output: C60 has tripped</td>
</tr>
<tr>
<td><code>Q0.3</code></td>
<td>Digital Output</td>
<td>Status output: CD10 has tripped</td>
</tr>
<tr>
<td><code>M0.0</code></td>
<td>Memory Bit</td>
<td>Trip detection flag—only one trip allowed per scan</td>
</tr>
<tr>
<td><code>M0.1</code></td>
<td>Memory Bit</td>
<td>Rising edge detected on C60</td>
</tr>
<tr>
<td><code>M0.2</code></td>
<td>Memory Bit</td>
<td>Rising edge detected on CD10</td>
</tr>
<tr>
<td><code>M0.3</code></td>
<td>Memory Bit</td>
<td>Previous input state of C60 (for edge detection)</td>
</tr>
<tr>
<td><code>M0.4</code></td>
<td>Memory Bit</td>
<td>Previous input state of CD10 (for edge detection)</td>
</tr>
</tbody>
</table>
</details>
<p>Sejak awal commissioning, untuk menurunkan risiko surging, <strong>kompresor resirkulasi nitrogen tidak pernah dijalankan pada performa maksimal</strong>. <em>Bypass</em>-nya cenderung tetap terbuka, dan demi menjaga kestabilan operasi, operator mengembangkan rutinitas harian: <strong>menurunkan kecepatan ekspander</strong> saat suhu lingkungan mulai naik di pagi hari, dan <strong>menaikkannya kembali ketika malam lebih sejuk</strong>—sebuah seni bertahan di antara batas aman desain dan realitas operasional yang terus berubah. Strategi ini cukup efektif: malam hari yang lebih dingin dimanfaatkan untuk meningkatkan performa booster. Sementara siang hari yang panas dijaga agar tetap stabil—karena pada suhu tinggi, risiko <strong>surging</strong> dan <strong>trip</strong> jauh lebih besar.</p>
<p>Namun, mengoperasikan kompresor sentrifugal dengan <em>bypass</em> yang tidak sepenuhnya tertutup membuat seluruh plant menjadi <strong>sangat bising</strong>. Ini adalah kompromi performa yang mahal—menggerus efisiensi energi sekaligus menurunkan kenyamanan kerja akibat kebisingan konstan.</p>
<hr>
<h2 id="eksperimen-dan-investigasi">Eksperimen dan Investigasi</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/03_eksperimen_dan_investigasi.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Strategi operasional dinamis yang diterapkan berdasarkan penilaian terhadap kondisi lingkungan <strong>tidak selalu memberikan hasil yang diharapkan</strong>. Ketika penilaian lingkungan kurang tepat—terlalu cepat atau terlalu lambat dalam merespons perubahan—penyesuaian kecepatan ekspander berulang kali <strong>gagal mencegah surging maupun trip</strong> pada sistem.</p>
<p>Masalah ini justru makin memburuk pada akhir 2016, meskipun sebelumnya telah dilakukan berbagai perbaikan, termasuk penggantian sejumlah komponen kontrol dan sensor. Upaya-upaya tersebut <strong>ternyata hanya menyentuh gejalanya, bukan akar permasalahannya</strong>. Situasinya seperti <strong>berkutat dengan penyakit yang tidak jelas diagnosanya, lalu mencoba berbagai obat yang tidak pernah benar-benar menyembuhkan</strong>.</p>
<p>Manajemen kemudian memutuskan untuk melakukan overhaul total pada kedua mesin—<strong>kompresor resirkulasi nitrogen dan booster ekspander</strong>. Namun, karena keterbatasan personel dari pihak vendor, hanya kompresor resirkulasi nitrogen yang dikerjakan.</p>
<p>Saat dilakukan uji coba pengoperasian kompresor resirkulasi nitrogen tanpa booster ekspander, <strong>mesin mampu berjalan hingga performa maksimal tanpa kendala</strong>. Hasil ini semakin memperkuat keyakinan saya bahwa <strong>kompresor resirkulasi nitrogen bukanlah akar dari permasalahan yang selama ini terjadi</strong>. Hanya beberapa hari setelah plant kembali beroperasi penuh, surging dan trip kembali terjadi—membawa kami kembali ke titik awal kebingungan.</p>
<p>Saya kemudian memutuskan membentuk <strong>tim kecil</strong>, terdiri dari teknisi kontrol, instrumentasi, dan mekanik terpilih—hanya mereka yang boleh terlibat dan mereka hanya menerima perintah dari saya. Bersama-sama, kami menjalankan serangkaian investigasi intensif:</p>
<ul>
<li><strong>Perekaman local panel</strong> menggunakan video real-time secara bergantian, meski sangat tidak nyaman</li>
<li><strong>Pemodelan ulang sinyal trip</strong>, setelah kami memperoleh rekaman berharga dari saat terjadinya gangguan</li>
<li><strong>Evaluasi rangkaian sinyal 4–20</strong>, yang ternyata dibebani tiga perangkat, bukan dua seperti seharusnya</li>
<li><strong>Simulasi dugaan</strong>, dan kami berhasil merekonstruksi ulang akar permasalahannya dengan presisi!</li>
</ul>
<p>Temuan paling krusial datang dari satu hal yang luput sejak awal: <strong>sinyal analog ternyata berasal dari sumber tegangan 5 volt DC</strong>, bukan 24 volt DC seperti saya kira. Ini bukan sekadar perbedaan angka—melainkan perbedaan mendasar dalam kapasitas daya dan toleransi terhadap beban. Ini saya temukan saat dokumen perangkat kontrol kecepatan lama saya bawa pulang dan baca di rumah.</p>
<div style="display: flex; flex-direction: column; align-items: center;">
  <img src="/kiiota-blog/assets/media/fe18e9c7-d3ea-4542-b701-83a46cb36702-surging_design_violation.svg" alt="surging_design_violation" style="max-width:100%; height:auto;">
  <figcaption style="text-align:center; margin-top: 8px;">
    Gambar 1. Pelanggaran Desain—sinyal analog kelebihan beban
  </figcaption>
</div>
<p>Lebih lanjut, <strong>output tersebut ternyata dibebani tiga perangkat</strong>, padahal dalam desain awal hanya dirancang untuk dua. Kombinasi tegangan rendah dan jumlah beban berlebih ini menimbulkan <strong>distorsi sinyal</strong> yang nyata. Semakin tinggi kecepatan operasi, semakin besar arus yang ditarik, dan <strong>tegangan mulai merosot</strong> akibat drop tegangan di tiap beban.</p>
<p>Hingga pada titik tertentu, <strong>sumber 5 volt DC tak mampu lagi mempertahankan level tegangan minimum</strong>, dan sinyal analog tiba-tiba anjlok. Di sinilah masalah puncaknya muncul—<strong>kontrol anti surging pada booster ekspander membaca kondisi ini sebagai gangguan serius</strong>, dan merespons secara agresif meski sebenarnya tidak diperlukan.</p>
<div style="display: flex; flex-direction: column; align-items: center;">
  <img src="/kiiota-blog/assets/media/fe18e9c7-d3ea-4542-b701-83a46cb36702-Voltage_vs_Speed.svg" alt="Voltage_vs_Speed" style="max-width:100%; height:auto;">
  <figcaption style="text-align:center; margin-top: 8px;">
    Gambar 2. Pelanggaran Desain—penurunan kecepatan memicu respon anti surge yang tidak perlu
  </figcaption>
</div>
<details>
<summary>Klik untuk membuka skrip plotting Python di atas</summary>
<pre><code class="language-javascript">import numpy as np
import matplotlib.pyplot as plt

# Current range (mA)
current_mA = np.linspace(4, 20, 1000)

# Convert to RPM (0–45000 RPM)
rpm = (current_mA - 4) / 16 * 45000

# Load resistances (ohms)
resistors = [125, 250, 350]
colors = ['tab:blue', 'tab:orange', 'tab:red']

# Output voltage for each resistance
voltages = {R: current_mA / 1000 * R for R in resistors}

plt.figure(figsize=(10, 6))

for i, R in enumerate(resistors):
    voltage = voltages[R]
    label = f'{R} Ω Load' if R &lt; 350 else f'{R} Ω Load (design violation)'
    linestyle = '-' if R &lt; 350 else '--'  # Dashed line indicates thermal shift or excessive load

    plt.plot(rpm, voltage, label=label, color=colors[i], linestyle=linestyle)

    # Find where voltage reaches 5V
    idx_5 = np.argmin(np.abs(voltage - 5))
    rpm_at_5V = rpm[idx_5]
    plt.axvline(rpm_at_5V, color=colors[i], linestyle=':', alpha=0.6)
    plt.text(rpm_at_5V, 5.3, f'{int(rpm_at_5V)} RPM', rotation=90,
             verticalalignment='bottom', horizontalalignment='right',
             fontsize=8, color=colors[i])

# Find where voltage reaches 4.8V
idx_4 = np.argmin(np.abs(voltage - 4.8))
rpm_at_4 = rpm[idx_4]
plt.axvline(rpm_at_4, color=colors[2], linestyle=':', alpha=0.6)
plt.text(rpm_at_4, 5.3, f'{int(rpm_at_4)} RPM', rotation=90,
            verticalalignment='bottom', horizontalalignment='right',
            fontsize=8, color=colors[2])

# Compliance limit line
plt.axhline(5, color='black', linestyle='--', label='Maximum Voltage (5 V)')

# Warning voltage line
plt.axhline(4.8, color='red', linestyle='--', label='Voltage Drop Due to Load (4.8 V)')

# Labels and titles
plt.title('Analog Speed Signal Distortion Due to Voltage Drop')
plt.xlabel('Expander Speed (RPM)')
plt.ylabel('Analog Voltage (V)')
plt.grid(True)
plt.legend()
plt.xlim(0, 45000)
plt.ylim(0, 7)
plt.tight_layout()

# Export as SVG
plt.savefig("Voltage_vs_Speed.svg", format='svg')
plt.show()
</code></pre>
</details>
<p>Akhirnya jelas: <strong>modifikasi rangkaian awal—yang niatnya hanya untuk menampilkan informasi di ruang kontrol—secara tidak sengaja menciptakan anomali pengukuran</strong>. Gangguan kecil ini, yang selama bertahun-tahun tersembunyi di balik asumsi dan rutinitas, justru menjadi penyebab utama gangguan sistemik yang kompleks dan mahal.</p>
<hr>
<h2 id="modifikasi-kecil-hasil-besar">Modifikasi Kecil, Hasil Besar</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/04_modifikasi_kecil_hasil_besar.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Setelah berhasil merekonstruksi akar masalahnya, saya menyusun presentasi singkat untuk menjelaskan apa yang sebenarnya terjadi, disertai solusi yang sangat sederhana: <strong>mengembalikan rangkaian ke desain awalnya</strong>. Solusi ini saya yakini aman dan tepat, karena tidak melibatkan perubahan logika atau perangkat, melainkan hanya mengoreksi modifikasi rangkaian yang terbukti keliru.</p>
<div style="display: flex; flex-direction: column; align-items: center;">
  <img src="/kiiota-blog/assets/media/fe18e9c7-d3ea-4542-b701-83a46cb36702-surging_fix.svg" alt="surging_fix" style="max-width:100%; height:auto;">
  <figcaption style="text-align:center; margin-top: 8px;">
    Gambar 3. Koreksi yang Diusulkan—konsep pemisahan sinyal untuk mengurangi risiko kelebihan beban analog
  </figcaption>
</div>
<p>Dengan penuh keyakinan, saya sampaikan proposal ini dalam rapat manajemen. Namun, yang terjadi justru di luar dugaan: <strong>saya tidak diizinkan melakukan eksekusi</strong>, dan diarahkan untuk menunggu teknisi dari vendor datang melakukan klarifikasi dan perbaikan. Padahal, selama bertahun-tahun, pihak vendor maupun pihak lain tidak pernah berhasil menyelesaikan masalah ini secara tuntas.</p>
<p>Saya mencoba kembali, kali ini lewat pendekatan personal setelah rapat, untuk menjelaskan duduk perkaranya secara teknis. Tetapi hasilnya tetap sama: tidak diberi ruang untuk bertindak.</p>
<p>Pada titik ini, saya mulai merasa bahwa <strong>hambatan yang saya hadapi bukan lagi teknis, tetapi politis</strong>. Sebuah ironi, ketika pemahaman yang mendalam terhadap masalah justru bukan menjadi dasar kepercayaan.</p>
<p>Karena dukungan dari vendor tak kunjung pasti, saya sudah menetapkan dalam hati: kapan pun plant kembali trip, maka solusi yang saya siapkan akan langsung saya eksekusi. Dan tentu hari itu benar-benar datang. Tetap dengan prosedur, saya meminta izin kepada atasan langsung sebelum bertindak. Untungnya, perangkat kontrol kecepatan yang belum lama saya ganti memiliki dua kanal output–menghilangkan kebutuhan splitter sinyal yang sempat direncanakan sebelumnya. Dengan sedikit modifikasi program, saya set keduanya untuk mengeluarkan sinyal identik—satu untuk kontrol anti surging, dan satu lagi dipakai bersama untuk tampilan lokal serta sinyal ke DCS. Modifikasi rangkaian menjadi <strong>jauh lebih sederhana—dan lebih aman</strong>.</p>
<div style="display: flex; flex-direction: column; align-items: center;">
  <img src="/kiiota-blog/assets/media/fe18e9c7-d3ea-4542-b701-83a46cb36702-surging_final.svg" alt="surging_final" style="max-width:100%; height:auto;">
  <figcaption style="text-align:center; margin-top: 8px;">
    Gambar 4. Implementasi Final—output analog ganda menyelesaikan distorsi sinyal
  </figcaption>
</div>
<p>Hanya dengan <strong>seutas kabel 30 cm</strong> dan satu <strong>obeng kecil</strong>, saya menyambung ulang output analog yang selama ini menjadi sumber masalah tersembunyi.<br>
Setelah diperbaiki, <em>kontrol anti surging</em> pada booster ekspander saya uji ulang — dan hasilnya tak terbantahkan: <strong>sistem pulih total</strong>, <strong>tanpa anomali</strong>.</p>
<blockquote>
<p>"Kadang, perbaikan besar dimulai dari hal yang tampak sepele—asal kita cukup gigih mencarinya dan tidak menganggap sebuah masalah pasti abadi."</p>
</blockquote>
<hr>
<h2 id="efek-langsung-dan-tidak-langsung">Efek Langsung dan Tidak Langsung</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/05_efek_langsung_dan_tidak_langsung.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Modifikasi kecil ini membawa dampak besar terhadap performa plant, baik secara teknis maupun ekonomis:</p>
<ul>
<li><strong>Kompresor resirkulasi nitrogen kini dapat beroperasi dengan <em>bypass</em> tertutup sepenuhnya</strong>, memungkinkan sistem berjalan mendekati performa desain. Nitrogen tak lagi berputar-putar tanpa tujuan, sekaligus mengurangi beban pada sistem pendingin.</li>
<li><strong>Kompresor sentrifugal menjadi senyap</strong>, tidak ada lagi suara khas peluit dari aliran <em>bypass</em>—sebuah <em>keheningan yang menandakan efisiensi</em>.</li>
<li><strong>Konsumsi energi dan dengan demikian tagihan listrik menurun drastis</strong>, karena siklus nitrogen yang tidak efektif telah dieliminasi, dan kebutuhan untuk start ulang mesin jauh berkurang.</li>
<li><strong>Produksi nitrogen dan argon meningkat</strong>, seiring proses yang berjalan lebih stabil dan optimal sesuai rancangan awal.</li>
</ul>
<p>Tentu saja, perubahan ini tidak langsung terasa seketika. Butuh waktu untuk <strong>membongkar pola operasi</strong> yang sudah terbentuk selama bertahun-tahun dan <strong>membangun keyakinan terhadap perubahan</strong> yang sudah dilakukan memerlukan perubahan lanjutan pada proses.</p>
<p>Saya sendiri saat itu belum memiliki kemampuan untuk menghitung kapasitas plant secara independen. Tapi menurut informasi, modifikasi ini <em>disebut-sebut memberikan dampak nyata</em>:</p>
<blockquote>
<p><strong>Penghematan lebih dari 1 miliar rupiah per bulan</strong><br>
Kombinasi dari penurunan konsumsi listrik dan peningkatan output produksi.</p>
</blockquote>
<p>Angka pastinya bisa diperdebatkan. Tapi suara kompresor yang tak lagi menjerit—itu bukti paling nyata bahwa perubahan sudah terjadi.</p>
<hr>
<h2 id="tantangan-budaya-dan-persepsi">Tantangan Budaya dan Persepsi</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/06_tantangan_budaya_dan_persepsi.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Tantangan terbesar dalam menyelesaikan masalah sering kali bukanlah teknis, melainkan budaya kerja dan struktur pengambilan keputusan. Dalam sistem yang kompleks dan telah lama beroperasi, tidak jarang <strong>tak ada satu pun individu yang benar-benar memahami persoalan secara utuh</strong>. Pemahaman tersebar dan terfragmentasi — sebagian ada di engineer, sebagian di operator, sebagian lagi tersembunyi dalam dokumentasi yang jarang disentuh kembali.</p>
<p>Dalam kondisi seperti ini, arah <em>troubleshooting</em> lebih banyak ditentukan oleh siapa yang memiliki kewenangan, bukan oleh siapa yang paling memahami persoalan. Solusi pun kerap dibentuk oleh intuisi, kebiasaan, atau tekanan untuk segera “memulihkan operasi” — bukan oleh hasil diagnosa yang mendalam.</p>
<p>Bukan karena sistem sengaja dibiarkan menyimpang dari desain, melainkan karena <strong>upaya-upaya menemukan akar masalah berulang kali menemui jalan buntu</strong>. Ketika berbagai pendekatan tak kunjung membuahkan hasil, organisasi akhirnya memilih jalan yang dianggap paling aman: bertahan pada konfigurasi yang stabil meskipun menyimpang. Selama sistem masih berjalan dan tidak terjadi kerusakan fatal, kondisi ini perlahan diterima sebagai kenormalan baru.</p>
<p>Namun ketika gangguan makin sering terjadi, rutinitas penanganan tak lagi cukup. <strong>Diperlukan keberanian untuk mengajukan narasi tandingan</strong> — membuka kemungkinan bahwa akar masalah belum benar-benar tersentuh, bahwa ada sesuatu yang selama ini luput dari pemahaman kolektif kita.</p>
<p>Perubahan sejati biasanya baru memiliki ruang ketika tekanan sudah cukup tinggi, data sudah cukup kuat, dan rasa frustrasi sudah cukup mendalam. Di titik ini, pendekatan baru akhirnya punya peluang untuk dicoba — dan perbaikan yang nyata bisa mulai terjadi.</p>
<hr>
<h2 id="penutup">Penutup</h2>
<audio controls="">
  <source src="https://blog.kiiota.com/content/media/2025/07/07_penutup.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<p>Ini bukan semata urusan memperbaiki rangkaian atau logika kontrol, melainkan <strong>upaya menata ulang kepercayaan terhadap desain awal</strong>—dan lebih dari itu, <strong>keberanian untuk mengoreksi sistem yang selama ini dianggap sudah final</strong>.</p>
<p>Saya bahkan sempat berpikir, <em>“Kalau saja output perangkat kontrol kecepatan baru kebetulan 12 volt atau 24 volt, mungkin masalah ini selesai dengan sendirinya.”</em> Tapi bisa jadi, saya tidak akan pernah tahu sumber masalah yang sebenarnya.</p>
<p>Setelah dua dekade berjalan dalam kondisi yang menyimpang, akhirnya sistem ini bekerja sebagaimana mestinya. Bukan karena alatnya berubah, tapi karena cara kita memahaminya yang berubah. Sebuah proses panjang yang menghadirkan <strong>pembelajaran teknis sekaligus manajerial yang tak ternilai</strong>.</p>
<hr>
<p><strong>Catatan Penulis</strong></p>
<p>Tulisan ini bukan hanya soal teknis, tapi juga tentang <strong>manajemen perubahan</strong>, <strong>analisis historis</strong>, dan <strong>ketangguhan menghadapi resistensi</strong>.</p>
<blockquote>
<p>Massa otot bukan segalanya —  neuronlah yang membuat otak bekerja lebih cepat. 🧠⚡</p>
</blockquote>
<p style="text-align:center; font-size:0.95em; color:#555; margin-top:2em;">
  Dan jika semuanya gagal...
</p>
<a href="https://www.youtube.com/watch?v=BGednQsQ-h8&ref=blog.kiiota.com" target="_blank" rel="noopener noreferrer" style="display:inline-block; position:relative; text-decoration:none; margin-top:2em;" onmouseover="this.firstElementChild.style.filter='brightness(0.8) contrast(1.2)'" onmouseout="this.firstElementChild.style.filter='none'">
  <img src="https://img.youtube.com/vi/BGednQsQ-h8/hqdefault.jpg" alt="Limp Bizkit - The Truth" style="width:100%; max-width:200px; border:0; display:block; margin:0 auto; border-radius:8px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_play_button_icon_%282017%29.svg" alt="Play" style="position:absolute; top:50%; left:50%; width:36px; height:36px; transform:translate(-50%,-50%); opacity:0.85;">
</a>
<figcaption style="text-align:center; font-size:0.9em; font-style:italic; margin-top:6px; color:#444;">
  Terkadang, satu-satunya keadilan yang tersisa... adalah menyampaikan <strong>kebenaran</strong>.
</figcaption>