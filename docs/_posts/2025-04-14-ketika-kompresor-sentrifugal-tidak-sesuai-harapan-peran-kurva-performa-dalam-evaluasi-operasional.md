---
ghost_uuid: "055e65bc-73b2-4047-b9ea-8cf5ea988b5e"
title: "Ketika Kompresor Sentrifugal Tidak Sesuai Harapan: Peran Kurva Performa dalam Evaluasi Operasional"
date: "2025-04-14T18:17:14.000+07:00"
slug: "ketika-kompresor-sentrifugal-tidak-sesuai-harapan-peran-kurva-performa-dalam-evaluasi-operasional"
layout: "post"
excerpt: |
  1. Pendahuluan
  
  
  Kompresor sentrifugal sering digunakan untuk aplikasi udara tekan dalam industri proses karena kemampuannya memberikan aliran kontinu dan efisiensi relatif tinggi. Namun, dalam beberapa kasus, meskipun peralatan baru dan sesuai spesifikasi, hasil operasional seperti tekanan buang dan aliran bisa saja tidak mencapai target yang diharapkan.
  
  
  Dalam kondisi seperti ini, langkah pertama yang penting dilakukan adalah memeriksa kembali kurva performa dari vendor. Kurva ini merupakan r
image: "/kiiota-blog/assets/media/055e65bc-73b2-4047-b9ea-8cf5ea988b5e-blog.png"
image_alt: ""
image_caption: ""
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
url: "https://blog.kiiota.com/ketika-kompresor-sentrifugal-tidak-sesuai-harapan-peran-kurva-performa-dalam-evaluasi-operasional/"
comment_id: "67fc9330f733d603f79ee1b1"
reading_time: 12
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h3 id="1-pendahuluan">1. Pendahuluan</h3>
<p>Kompresor sentrifugal sering digunakan untuk aplikasi udara tekan dalam industri proses karena kemampuannya memberikan aliran kontinu dan efisiensi relatif tinggi. Namun, dalam beberapa kasus, meskipun peralatan baru dan sesuai spesifikasi, hasil operasional seperti tekanan buang dan aliran bisa saja tidak mencapai target yang diharapkan.</p>
<p>Dalam kondisi seperti ini, langkah pertama yang penting dilakukan adalah memeriksa kembali kurva performa dari vendor. Kurva ini merupakan representasi visual dari karakteristik mesin yang dapat digunakan untuk menilai apakah titik operasi aktual sudah optimal atau justru berada di zona yang tidak sesuai dengan kebutuhan sistem.</p>
<h3 id="2-studi-kasus-kompresor-sentrifugal-baru-tidak-mencapai-tekanan-target">2. Studi Kasus: Kompresor Sentrifugal Baru Tidak Mencapai Tekanan Target</h3>
<p>Unit yang digunakan adalah sebuah kompresor sentrifugal tiga tingkat yang secara desain bekerja dengan aliran 12767 Nm³/h, tekanan buang 680 kPa abs, dan daya poros 1090 kW, yang dipasang pada sistem <em>air separation unit</em> (ASU). Motor terpasang memiliki spesifikasi daya 1120 kW dengan efisiensi 95.9% sehingga daya poros sebenarnya 1074.1 kW. Meskipun kompresor dalam kondisi baru, pengamatan di lapangan menunjukkan bahwa:</p>
<ul>
<li>IGV (Inlet Guide Vanes) sudah terbuka penuh (100%) untuk memaksimalkan kapasitas aliran</li>
<li>Namun, tekanan buang tetap tidak mencapai target proses</li>
<li>Arus listrik yang terbaca di panel lokal berbeda dari yang di panel utama (77 A vs 97 A)</li>
</ul>
<p>IGV atau <em>Inlet Guide Vanes</em> adalah bilah pengarah yang mengatur jumlah udara masuk ke impeller untuk mengendalikan kapasitas kompresor. Posisi IGV sangat menentukan karakteristik aliran dan tekanan yang dihasilkan.</p>
<p>Hal ini menimbulkan pertanyaan: apakah kompresor gagal bekerja sesuai desain? Atau, apakah sistem operasionalnya yang belum selaras dengan karakteristik mesin?</p>
<h3 id="3-pendekatan-membaca-ulang-kurva-performa">3. Pendekatan: Membaca Ulang Kurva Performa</h3>
<p>Untuk menjawab pertanyaan ini, dilakukan digitalisasi ulang kurva performa vendor menggunakan WebPlotDigitizer, lalu divisualisasikan dengan Python. Kurva yang digunakan mencakup berbagai kondisi IGV: 20%, 40%, 60%, 80%, dan 100%.</p>
<p>Tujuannya adalah untuk:</p>
<ul>
<li>Menentukan posisi titik operasi aktual di dalam kurva performa</li>
<li>Menilai apakah unit bekerja di zona optimal (flow vs tekanan atau flow vs power)</li>
<li>Mengidentifikasi kemungkinan overkapasitas atau misalignment antara kebutuhan dan output</li>
</ul>
<blockquote>
<p><em>Catatan: Visualisasi kurva performa dan kode Python dilampirkan di akhir laporan ini.</em></p>
</blockquote>
<h3 id="4-temuan-dari-kurva-performa">4. Temuan dari Kurva Performa</h3>
<p>Plot ulang menunjukkan bahwa:</p>
<ul>
<li>Pada IGV 100%, pada tekanan yang relatif rendah 601.3 kPa abs, titik flow berada di sisi kanan titik desain → flow besar sampai 12958 Nm³/h</li>
<li>Pada IGV 100%, pada flow yang relatif besar itu titik power hanya sedikit di bawah titik desain → power besar sampai 1084.38 kW</li>
<li>Pada IGV 80%, jika dioperasikan pada pressure 640.65 kPa abs, titik flow berada di sisi kiri titik desain → flow 12416 Nm³/h mungkin masih memenuhi kebutuhan proses</li>
<li>Pada IGV 80%, pada flow 12416 Nm³/h itu titik power berada di bawah titik desain → power 1035.4 kW tidak melanggar spesifikasi motor</li>
<li>Kompresor secara teknis bekerja sesuai kurva, namun tidak di titik yang mendukung kebutuhan tekanan sistem</li>
<li>Titik kerja tidak mendekati design point, justru melewati zona efisiensi optimal dan melanggar batasan spesifikasi motor</li>
</ul>
<h3 id="5-memahami-zona-optimal-dalam-kurva-performa">5. Memahami Zona Optimal dalam Kurva Performa</h3>
<p>Kurva performa kompresor biasanya menunjukkan hubungan antara aliran (flow), tekanan buang, dan daya (power) pada berbagai bukaan IGV. Zona optimal berada di sekitar <em>design point</em>, di mana mesin beroperasi dengan efisiensi maksimum—tekanan tercapai dengan konsumsi daya minimal.</p>
<p>Jika titik operasi terlalu jauh ke kanan (flow besar, tekanan turun), kompresor cenderung bekerja di luar zona efisien:</p>
<ul>
<li>Konsumsi daya meningkat lebih cepat dibanding kenaikan tekanan</li>
<li>Risiko terjadinya <em>surge</em> atau <em>stonewall</em> meningkat</li>
<li>Proses downstream bisa terganggu akibat tekanan yang tidak memadai</li>
<li>Pengoperasian motor secara terus-menerus pada beban tinggi menurunkan umur pakai motor</li>
</ul>
<p>Oleh karena itu, penting untuk menyesuaikan parameter operasi agar tetap berada di dalam zona performa ideal.</p>
<h3 id="6-pelajaran-penting">6. Pelajaran Penting</h3>
<p>Studi ini menegaskan bahwa saat kompresor tidak memberikan hasil seperti yang diharapkan, bukan berarti unit bermasalah. Justru, kurva performa bisa menjadi alat diagnosis yang sangat kuat untuk:</p>
<ul>
<li>Memverifikasi apakah sistem kontrol (misalnya IGV setting) sudah sesuai</li>
<li>Menyesuaikan target operasional dengan zona performa ideal</li>
<li>Menghindari pemborosan energi akibat bekerja di area non-efisien</li>
<li>Mempertimbangkan umur pakai motor akibat beban tinggi</li>
</ul>
<h3 id="7-rekomendasi">7. Rekomendasi</h3>
<ol>
<li>Validasi ulang sensor arus motor untuk memastikan data kontrol representatif terhadap kondisi aktual</li>
<li>Evaluasi ulang logika pembukaan IGV dalam sistem kontrol, terutama selama fase load build-up, mungkin pembukaan IGV terlalu agresif karena informasi arus yang salah</li>
<li>Lakukan uji coba pembatasan IGV secara manual pada kisaran 85–90% untuk mengevaluasi dampaknya terhadap peningkatan tekanan buang</li>
<li>Evaluasi sistem intake udara, termasuk kemungkinan pengaruh cone filter dan layout suction pipeline terhadap tekanan hisap</li>
<li>Lakukan pengecekan sistem downstream untuk memastikan tidak terdapat potensi yang menyebabkan tekanan balik (back pressure) tidak cukup untuk mendukung pembentukan tekanan buang sesuai kebutuhan</li>
<li>Evaluasi kesesuaian titik kerja dengan design point untuk memastikan efisiensi optimal dan umur pakai</li>
</ol>
<h3 id="8-kesimpulan">8. Kesimpulan</h3>
<p>Kurva performa kompresor sentrifugal menyimpan informasi penting yang tidak hanya berguna saat desain awal, tetapi juga saat menghadapi kendala operasional. Dalam studi kasus ini, meskipun unit baru dan bekerja sesuai desain, pengoperasian tanpa penyesuaian menyebabkan hasil yang tidak sesuai dengan kebutuhan sistem.</p>
<p>Evaluasi titik kerja terhadap kurva performa memungkinkan tim operasional untuk memahami di mana posisi kompresor saat ini dan bagaimana mendekatkannya kembali ke zona optimal. Dengan memahami peta performa ini, tim operasional dapat menghindari asumsi keliru bahwa “alat rusak”, padahal yang diperlukan hanyalah sinkronisasi antara kebutuhan proses dan karakteristik mesin.</p>
<hr>
<h3 id="lampiran-a-visualisasi-kurva-performa">Lampiran A. Visualisasi Kurva Performa</h3>
<p><img src="/kiiota-blog/assets/media/055e65bc-73b2-4047-b9ea-8cf5ea988b5e-ZH1120-6_Flow_vs_Pressure.svg" alt="ZH1120-6_Flow_vs_Pressure" loading="lazy"></p>
<p style="text-align: center;"><b>Gambar A1.</b> Flow vs pressure (hasil visualisasi Python)</p>
<p><img src="/kiiota-blog/assets/media/055e65bc-73b2-4047-b9ea-8cf5ea988b5e-ZH1120-6_Flow_vs_Power.svg" alt="ZH1120-6_Flow_vs_Power" loading="lazy"></p>
<p style="text-align: center;"><b>Gambar A2.</b> Flow vs shaft power (hasil visualisasi Python)</p>
<hr>
<h3 id="lampiran-b-script-python-untuk-visualisasi-kurva-performa">Lampiran B. Script Python untuk Visualisasi Kurva Performa</h3>
<p><strong>Script B1.</strong> Flow vs pressure</p>
<!--kg-card-end: markdown--><pre><code class="language-javascript"># Script: flow_vs_pressure.py
# Dibuat oleh: Ketut Kumajaya dengan bantuan AI (ChatGPT - OpenAI)
# Tujuan: Visualisasi hubungan antara flow dan pressure kompresor sentrifugal

import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import interp1d

# Data IGV 20%
inlet_20 = [
    7500.17, 7568.40, 7633.52, 7695.54, 7754.46, 7800.97, 7832.33,
    7884.70, 7913.64, 7943.62, 7985.79, 8010.81, 8038.87, 8058.98,
    8080.69, 8100.74, 8115.73, 8127.61, 8130.92, 8145.19, 8154.49
]
pressure_20 = [
    627.96, 615.78, 602.34, 588.03, 573.94, 558.74, 546.65,
    530.08, 516.25, 499.89, 481.09, 466.39, 450.74, 432.01,
    418.61, 401.45, 384.80, 369.69, 352.67, 328.48, 315.78
]

# Data IGV 40%
inlet_40 = [
    9652.29, 9720.51, 9788.73, 9856.95, 9925.18, 9993.40, 10061.62, 10129.84,
    10198.07, 10266.29, 10334.51, 10402.73, 10467.86, 10532.98, 10598.10,
    10647.71, 10700.43, 10756.25, 10802.77, 10849.28, 10886.49, 10920.32,
    10960.92, 10982.63, 11007.43, 11036.12, 11053.95, 11072.56, 11087.62,
    11098.14, 11109.77
]
pressure_40 = [
    813.40, 810.10, 803.89, 800.96, 792.75, 787.17, 779.56, 773.35,
    763.49, 754.65, 743.36, 734.65, 721.96, 709.51, 696.47, 686.36,
    671.25, 657.85, 643.83, 629.30, 617.73, 601.57, 587.88, 573.78,
    561.29, 546.28, 529.28, 511.98, 495.84, 476.96, 461.30
]

# Data IGV 60%
inlet_60 = [
    10191.86, 10260.09, 10328.31, 10396.53, 10464.75, 10532.98, 10601.20, 10669.42,
    10737.64, 10805.87, 10874.09, 10942.31, 11010.53, 11078.76, 11146.98, 11215.20,
    11283.43, 11351.65, 11419.87, 11488.09, 11553.21, 11579.57, 11636.94, 11698.96,
    11752.46, 11805.78, 11841.61, 11894.33, 11947.04, 11966.89, 12004.55, 12022.71,
    12044.21, 12066.58, 12078.53, 12087.21
]
pressure_60 = [
    858.92, 856.78, 854.24, 850.78, 846.98, 842.75, 836.76, 832.78,
    827.58, 819.64, 814.50, 806.89, 797.94, 790.48, 781.44, 770.03,
    761.64, 749.39, 737.24, 723.00, 709.30, 700.42, 691.41, 675.79,
    663.46, 648.02, 634.90, 618.01, 601.07, 584.32, 567.88, 547.77,
    525.01, 505.40, 485.42, 470.22
]

# Data IGV 80%
inlet_80 = [
    10557.78, 10626.01, 10694.23, 10743.85, 10839.54, 10898.90, 10967.12, 11045.68,
    11100.46, 11182.64, 11240.01, 11313.40, 11376.46, 11426.07, 11531.51, 11599.73,
    11667.95, 11734.11, 11804.40, 11871.38, 11945.80, 12015.27, 12079.61, 12133.11,
    12193.35, 12250.95, 12297.46, 12378.09, 12418.40, 12455.61, 12495.93, 12526.94,
    12551.75, 12567.25, 12579.65, 12607.56
]
pressure_80 = [
    888.76, 886.83, 884.06, 883.17, 877.49, 875.44, 871.65, 866.20, 862.54, 856.28,
    851.87, 844.39, 838.62, 833.94, 821.34, 812.44, 803.38, 794.22, 782.08, 771.18,
    757.78, 744.73, 732.72, 720.12, 704.86, 690.41, 679.23, 656.69, 642.96, 628.29,
    609.95, 597.01, 579.41, 565.94, 552.40, 522.38
]

# Data IGV 100%
inlet_100 = [
    10929.91, 10998.13, 11066.35, 11134.58, 11202.80, 11271.02, 11339.24, 11407.47,
    11475.69, 11543.91, 11612.13, 11680.36, 11748.58, 11816.80, 11885.02, 11953.25,
    12021.47, 12089.69, 12157.91, 12226.14, 12294.36, 12362.58, 12427.70, 12492.83,
    12561.05, 12626.17, 12685.09, 12737.81, 12784.32, 12821.53, 12864.95, 12886.66,
    12931.10, 12950.01, 12983.67, 12992.09, 13004.94, 13018.76, 13023.10, 13044.81,
    13051.01
]
pressure_100 = [
    909.44, 907.57, 904.34, 901.62, 899.01, 896.12, 891.25, 886.49,
    883.04, 877.43, 872.67, 866.15, 859.07, 852.16, 844.62, 836.52,
    827.91, 818.16, 808.08, 796.58, 785.30, 774.14, 760.83, 747.62,
    733.86, 718.76, 703.50, 689.25, 676.99, 663.47, 648.50, 635.19,
    620.26, 605.85, 590.80, 577.23, 561.42, 544.26, 529.44, 511.23,
    497.42
]

# Interpolasi linier untuk IGV 90%
#pressure_90 = pressure_80 + 0.5 * (np.interp(inlet_80, inlet_100, pressure_100) - pressure_80)
#inlet_90 = inlet_80 + 0.5 * (np.interp(inlet_80, inlet_100, inlet_100) - inlet_80)  # opsional, bisa pakai inlet_80 langsung


# Target pressures
target_pressure_100 = 601.3
target_pressure_80 = 640.65
target_pressure_60 = 680.0
target_pressure_design = 680.0
target_inlet_design = 12767.0


# Fungsi Moving Average
def moving_average(data, window_size):
    return np.convolve(data, np.ones(window_size)/window_size, mode='valid')


# Fungsi gabungan smoothing dan interpolasi
def smooth_and_interpolate(inlet, pressure, window_size=5):
    smoothed_inlet = moving_average(inlet, window_size)
    smoothed_pressure = moving_average(pressure, window_size)
    interp = interp1d(smoothed_inlet, smoothed_pressure, kind='linear')
    inlet_smooth = np.linspace(min(smoothed_inlet), max(smoothed_inlet), 500)
    pressure_smooth = interp(inlet_smooth)
    return inlet_smooth, pressure_smooth


# Fungsi anotasi titik dengan panah
def annotate_point(x, y, label, color, offset=(30, 15)):
    plt.plot(x, y, 'o', color=color)
    plt.annotate(f'{label:.0f} Nm³/h', xy=(x, y),
                 xytext=(x + offset[0], y + offset[1]),
                 arrowprops=dict(facecolor=color, arrowstyle='-&gt;'), color=color)


# Proses smoothing dan interpolasi
inlet_20_smooth, pressure_20_smooth = smooth_and_interpolate(inlet_20, pressure_20)
inlet_40_smooth, pressure_40_smooth = smooth_and_interpolate(inlet_40, pressure_40)
inlet_60_smooth, pressure_60_smooth = smooth_and_interpolate(inlet_60, pressure_60)
inlet_80_smooth, pressure_80_smooth = smooth_and_interpolate(inlet_80, pressure_80)
inlet_100_smooth, pressure_100_smooth = smooth_and_interpolate(inlet_100, pressure_100)


# Titik pertemuan untuk tekanan target
target_inlet_100 = inlet_100_smooth[np.argmin(np.abs(pressure_100_smooth - target_pressure_100))]
target_inlet_80 = inlet_80_smooth[np.argmin(np.abs(pressure_80_smooth - target_pressure_80))]
target_inlet_60 = inlet_60_smooth[np.argmin(np.abs(pressure_60_smooth - target_pressure_60))]


# Plot
plt.figure(figsize=(10, 6))
plt.plot(inlet_20_smooth, pressure_20_smooth, color='orange')
plt.plot(inlet_40_smooth, pressure_40_smooth, color='magenta')
plt.plot(inlet_60_smooth, pressure_60_smooth, color='green')
plt.plot(inlet_80_smooth, pressure_80_smooth, color='blue')
plt.plot(inlet_100_smooth, pressure_100_smooth, color='red')
plt.text(inlet_20_smooth[0] + 50, pressure_20_smooth[0], 'IGV 20%', color='orange')
plt.text(inlet_40_smooth[0] + 50, pressure_40_smooth[0], 'IGV 40%', color='magenta')
plt.text(inlet_60_smooth[0] + 50, pressure_60_smooth[0], 'IGV 60%', color='green')
plt.text(inlet_80_smooth[0] + 50, pressure_80_smooth[0], 'IGV 80%', color='blue')
plt.text(inlet_100_smooth[0] + 50, pressure_100_smooth[0], 'IGV 100%', color='red')

# Garis horizontal
plt.axhline(y=target_pressure_100, color='red', linestyle='--')
plt.axhline(y=target_pressure_80, color='blue', linestyle='--')
plt.axhline(y=target_pressure_design, color='black', linestyle='--')

# Garis vertikal
plt.axvline(x=target_inlet_100, color='red', linestyle='--')
plt.axvline(x=target_inlet_80, color='blue', linestyle='--')
plt.axvline(x=target_inlet_design, color='black', linestyle='--')

# Anotasi target pressure
plt.text(inlet_20_smooth[0] + 1000, target_pressure_100 + 5, f'{target_pressure_100:.1f} kPa', color='red')
plt.text(inlet_20_smooth[0] + 1000, target_pressure_80 + 5, f'{target_pressure_80:.1f} kPa', color='blue')
plt.text(inlet_20_smooth[0] + 1000, target_pressure_design + 5, f'{target_pressure_design:.1f} kPa', color='black')

# Anotasi titik
annotate_point(target_inlet_100, target_pressure_100, target_inlet_100, 'red')
annotate_point(target_inlet_80, target_pressure_80, target_inlet_80, 'blue')
annotate_point(target_inlet_design, target_pressure_design, target_inlet_design, 'black')

# Label dan style
plt.title("Inlet Flow vs Discharge Pressure ZH1120-6", fontsize=14)
plt.xlabel("Inlet flow, Nm³/h")
plt.ylabel("Discharge pressure, kPa abs")
plt.grid(True)
plt.tight_layout()

# Simpan sebagai SVG
#plt.savefig("ZH1120-6_Flow_vs_Pressure.svg", format='svg')

# Tampilkan
plt.show()

# Output
print(f"Inlet flow pada tekanan {target_pressure_100:.2f} kPa untuk IGV 100%: {target_inlet_100:.2f} Nm³/h")
print(f"Inlet flow pada tekanan {target_pressure_80:.2f} kPa untuk IGV 80%: {target_inlet_80:.2f} Nm³/h")
print(f"Inlet flow pada tekanan {target_pressure_60:.2f} kPa untuk IGV 60%: {target_inlet_60:.2f} Nm³/h")</code></pre><!--kg-card-begin: markdown--><p>📎 Bisa langsung dicoba di: 👉 <a href="https://python-fiddle.com/examples/matplotlib?ref=blog.kiiota.com">Online Matplotlib Compiler</a></p>
<p><strong>Script B2.</strong> Flow vs shaft power</p>
<!--kg-card-end: markdown--><pre><code class="language-javascript"># Script: flow_vs_power.py
# Dibuat oleh: Ketut Kumajaya dengan bantuan AI (ChatGPT - OpenAI)
# Tujuan: Visualisasi hubungan antara flow dan power kompresor sentrifugal

import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import interp1d

# Data IGV 20%
inlet_20 = [
    7485.07, 7569.87, 7638.09, 7706.30, 7774.52, 7842.74, 7910.95, 7976.07,
    8031.88, 8081.49, 8117.28, 8150.72
]
power_20 = [
    671.00, 667.91, 664.08, 660.01, 654.77, 648.76, 639.89, 628.72,
    618.33, 606.20, 596.72, 587.87
]

# Data IGV 40%
inlet_40 = [
    9659.77, 9727.98, 9796.20, 9864.42, 9932.63, 10000.85, 10069.06, 10137.28, 
    10205.50, 10273.71, 10341.93, 10410.15, 10478.36, 10546.58, 10614.79, 10683.01, 
    10751.23, 10819.44, 10887.66, 10955.88, 11024.09, 11079.90
]
power_40 = [
    904.33, 905.68, 907.72, 908.35, 908.88, 909.94, 911.55, 911.55, 
    911.55, 911.55, 911.55, 910.48, 908.88, 908.06, 906.46, 904.13, 
    900.35, 896.93, 892.92, 885.95, 877.23, 869.55
]

# Data IGV 60%
inlet_60 = [
    10205.50, 10273.71, 10329.53, 10410.15, 10478.36, 10546.58, 10614.79, 10683.01,
    10751.23, 10819.44, 10887.66, 10955.88, 11024.09, 11092.31, 11160.52, 11228.74,
    11296.96, 11365.17, 11433.39, 11501.60, 11569.82, 11638.04, 11706.25, 11774.47,
    11842.69, 11910.90, 11977.88, 12047.33
]
power_60 = [
    968.49, 970.04, 971.81, 974.31, 977.38, 978.93, 980.77, 981.94,
    983.91, 985.19, 986.78, 987.17, 989.11, 989.50, 989.60, 989.50,
    990.47, 989.50, 989.55, 989.65, 987.96, 987.32, 984.60, 982.81,
    980.64, 978.01, 973.62, 967.12
]

# Data IGV 80%
inlet_80 = [
    10521.77, 10589.99, 10658.20, 10726.42, 10794.64, 10862.85, 10931.07, 10999.29,
    11067.50, 11135.72, 11203.93, 11272.15, 11340.37, 11408.58, 11476.80, 11545.02,
    11613.23, 11681.45, 11749.66, 11817.88, 11886.10, 11954.31, 12022.53, 12090.74,
    12158.96, 12227.18, 12295.39, 12363.61, 12431.83, 12500.04, 12568.26, 12614.77
]
power_80 = [
    1009.13, 1011.60, 1014.22, 1016.99, 1019.89, 1022.27, 1024.74, 1026.58,
    1029.78, 1031.43, 1033.37, 1034.78, 1036.18, 1037.88, 1039.87, 1041.08,
    1041.66, 1042.82, 1043.26, 1043.26, 1043.26, 1043.26, 1043.16, 1043.26,
    1042.29, 1041.22, 1039.87, 1037.39, 1035.12, 1032.50, 1029.10, 1025.82
]

# Data IGV 100%
inlet_100 = [
    10931.07, 10999.29, 11067.50, 11135.72, 11203.93, 11272.15, 11340.37,
    11408.58, 11476.80, 11545.02, 11613.23, 11681.45, 11749.66, 11817.88,
    11886.10, 11954.31, 12022.53, 12090.74, 12158.96, 12227.18, 12295.39,
    12363.61, 12431.83, 12500.04, 12568.26, 12636.47, 12704.69, 12772.91,
    12841.12, 12909.34, 12977.56, 13036.47
]
power_100 = [
    1051.74, 1054.60, 1057.56, 1061.49, 1064.98, 1067.40, 1071.13,
    1074.33, 1076.32, 1078.45, 1080.10, 1082.28, 1084.13, 1086.26,
    1087.81, 1088.25, 1089.46, 1091.25, 1092.08, 1092.66, 1094.45,
    1094.45, 1094.45, 1094.40, 1093.38, 1092.32, 1091.20, 1089.41,
    1087.37, 1085.39, 1082.28, 1077.45
]

# Interpolasi linier untuk IGV 90%
#power_90 = power_80 + 0.5 * (np.interp(inlet_80, inlet_100, power_100) - power_80)
#inlet_90 = inlet_80 + 0.5 * (np.interp(inlet_80, inlet_100, inlet_100) - inlet_80)  # opsional, bisa pakai inlet_80 langsung


# Target powers
target_inlet_100 = 12957.74
target_inlet_80 = 12416.38
target_inlet_60 = 11678.15
target_inlet_design = 12767.0
target_power_design = 1090.0


# Fungsi Moving Average
def moving_average(data, window_size):
    return np.convolve(data, np.ones(window_size)/window_size, mode='valid')


# Fungsi gabungan smoothing dan interpolasi
def smooth_and_interpolate(inlet, power, window_size=5):
    smoothed_inlet = moving_average(inlet, window_size)
    smoothed_power = moving_average(power, window_size)
    interp = interp1d(smoothed_inlet, smoothed_power, kind='linear')
    inlet_smooth = np.linspace(min(smoothed_inlet), max(smoothed_inlet), 500)
    power_smooth = interp(inlet_smooth)
    return inlet_smooth, power_smooth


# Fungsi anotasi titik dengan panah
def annotate_point(x, y, label, color, offset=(30, 15)):
    plt.plot(x, y, 'o', color=color)
    plt.annotate(f'{label:.2f} kW', xy=(x, y),
                 xytext=(x + offset[0], y + offset[1]),
                 arrowprops=dict(facecolor=color, arrowstyle='-&gt;'), color=color)


# Proses smoothing dan interpolasi
inlet_20_smooth, power_20_smooth = smooth_and_interpolate(inlet_20, power_20)
inlet_40_smooth, power_40_smooth = smooth_and_interpolate(inlet_40, power_40)
inlet_60_smooth, power_60_smooth = smooth_and_interpolate(inlet_60, power_60)
inlet_80_smooth, power_80_smooth = smooth_and_interpolate(inlet_80, power_80)
inlet_100_smooth, power_100_smooth = smooth_and_interpolate(inlet_100, power_100)


# Titik pertemuan untuk tekanan target
target_power_100 = power_100_smooth[np.argmin(np.abs(inlet_100_smooth - target_inlet_100))]
target_power_80 = power_80_smooth[np.argmin(np.abs(inlet_80_smooth - target_inlet_80))]
target_power_60 = power_60_smooth[np.argmin(np.abs(inlet_60_smooth - target_inlet_60))]


# Plot
plt.figure(figsize=(10, 6))
plt.plot(inlet_20_smooth, power_20_smooth, color='orange')
plt.plot(inlet_40_smooth, power_40_smooth, color='magenta')
plt.plot(inlet_60_smooth, power_60_smooth, color='green')
plt.plot(inlet_80_smooth, power_80_smooth, color='blue')
plt.plot(inlet_100_smooth, power_100_smooth, color='red')
plt.text(inlet_20_smooth[0] + 50, power_20_smooth[0], 'IGV 20%', color='orange')
plt.text(inlet_40_smooth[0] - 400, power_40_smooth[0] + 5, 'IGV 40%', color='magenta')
plt.text(inlet_60_smooth[0] - 400, power_60_smooth[0] + 5, 'IGV 60%', color='green')
plt.text(inlet_80_smooth[0] - 400, power_80_smooth[0] + 5, 'IGV 80%', color='blue')
plt.text(inlet_100_smooth[0] - 400, power_100_smooth[0] + 5, 'IGV 100%', color='red')

# Garis horizontal
plt.axhline(y=target_power_100, color='red', linestyle='--')
plt.axhline(y=target_power_80, color='blue', linestyle='--')
plt.axhline(y=target_power_design, color='black', linestyle='--')

# Garis vertikal
plt.axvline(x=target_inlet_100, color='red', linestyle='--')
plt.axvline(x=target_inlet_80, color='blue', linestyle='--')
plt.axvline(x=target_inlet_design, color='black', linestyle='--')

# Anotasi target flow
plt.text(target_inlet_100 - 100, power_20_smooth[0], f'{target_inlet_100:.0f} Nm³/h', color='red', rotation=90, fontsize=10)
plt.text(target_inlet_80 - 100, power_20_smooth[0], f'{target_inlet_80:.0f} Nm³/h', color='blue', rotation=90, fontsize=10)
plt.text(target_inlet_design - 100, power_20_smooth[0], f'{target_inlet_design:.0f} Nm³/h', color='black', rotation=90, fontsize=10)

# Anotasi titik
annotate_point(target_inlet_100, target_power_100, target_power_100, 'red')
annotate_point(target_inlet_80, target_power_80, target_power_80, 'blue')
annotate_point(target_inlet_design, target_power_design, target_power_design, 'black')

# Label dan style
plt.title("Inlet Flow vs Coupling Power ZH1120-6", fontsize=14)
plt.xlabel("Inlet flow, Nm³/h")
plt.ylabel("Coupling power, kW")
plt.grid(True)
plt.tight_layout()

# Simpan sebagai SVG
#plt.savefig("ZH1120-6_Flow_vs_Power.svg", format='svg')

# Tampilkan
plt.show()

# Output
print(f"Coupling power pada flow {target_inlet_100:.2f} Nm³/h untuk IGV 100%: {target_power_100:.2f} kW")
print(f"Coupling power pada flow {target_inlet_80:.2f} Nm³/h untuk IGV 80%: {target_power_80:.2f} kW")
print(f"Coupling power pada flow {target_inlet_60:.2f} Nm³/h untuk IGV 60%: {target_power_60:.2f} kW")</code></pre>
{% endraw %}