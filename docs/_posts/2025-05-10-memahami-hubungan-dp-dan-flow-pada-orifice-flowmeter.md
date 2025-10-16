---
ghost_uuid: "6fc2c932-5ab0-4b12-8482-6e007c507923"
title: "Memahami Hubungan Differential Pressure dan Flow pada Orifice Flowmeter"
date: "2025-05-10T23:41:29.000+07:00"
slug: "memahami-hubungan-dp-dan-flow-pada-orifice-flowmeter"
layout: "post"
excerpt: |
  Pendahuluan
  
  
  Flowmeter adalah alat yang digunakan untuk mengukur laju aliran fluida, baik itu cairan, gas, maupun uap. Salah satu jenis flowmeter yang banyak digunakan di industri adalah orifice flowmeter.
  
  
  
  
  
  \"Mengukur aliran fluida dengan akurat adalah hal krusial di industri. Salah satu metode yang paling umum adalah menggunakan orifice flowmeter. Tapi, bagaimana sebenarnya alat ini bekerja?\"
  
  
  
  Orifice flowmeter bekerja dengan prinsip yang sederhana namun efektif. Alat ini menggunakan sebu
image: "/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-dp_vs_flow_diff_range_perspective.png"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "orifice"
  - "flowmeter"
  - "industrial"
categories:
  - "orifice"
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
url: "https://blog.kiiota.com/memahami-hubungan-dp-dan-flow-pada-orifice-flowmeter/"
comment_id: "681f5947f733d603f79ee6da"
reading_time: 12
access: true
comments: true
---

<!--kg-card-begin: markdown--><h2 id="pendahuluan">Pendahuluan</h2>
<p>Flowmeter adalah alat yang digunakan untuk mengukur laju aliran fluida, baik itu cairan, gas, maupun uap. Salah satu jenis flowmeter yang banyak digunakan di industri adalah orifice flowmeter.</p>
<blockquote>
<p>&quot;Mengukur aliran fluida dengan akurat adalah hal krusial di industri. Salah satu metode yang paling umum adalah menggunakan orifice flowmeter. Tapi, bagaimana sebenarnya alat ini bekerja?&quot;</p>
</blockquote>
<p>Orifice flowmeter bekerja dengan prinsip yang sederhana namun efektif. Alat ini menggunakan sebuah pelat dengan lubang di tengahnya (disebut orifice plate) yang dipasang di dalam pipa. Ketika fluida mengalir melalui pipa dan melewati orifice plate, terjadi penyempitan aliran yang menyebabkan perubahan kecepatan dan tekanan fluida.</p>
<p>Perubahan tekanan ini dikenal sebagai <strong>differential pressure (DP)</strong> atau tekanan beda. Secara teknis, prinsip ini didasarkan pada <strong>Hukum Bernoulli</strong>, yang menyatakan bahwa energi total fluida dalam sebuah sistem tertutup adalah konstan. Saat fluida melewati penyempitan (orifice), kecepatannya meningkat dan tekanannya menurun, menciptakan perbedaan tekanan antara sisi sebelum dan sesudah orifice.</p>
<p>Secara sederhana, semakin besar laju aliran (flow) yang melewati orifice, semakin besar pula perbedaan tekanan yang terjadi.</p>
<p>Dalam artikel ini, kita akan menjelajahi lebih jauh tentang hubungan antara differential pressure dan flow pada orifice flowmeter, dimulai dari konsep dasar hingga cara praktis untuk memahami dan menggunakannya.</p>
<h2 id="teori-dasar-hubungan-dp-dan-flow">Teori Dasar Hubungan DP dan Flow</h2>
<p>Hubungan antara differential pressure dan flow pada orifice flowmeter didasarkan pada prinsip Bernoulli dan persamaan kontinuitas. Pada dasarnya, laju aliran (Q) melalui sebuah orifice berbanding lurus dengan akar kuadrat dari differential pressure. Ini dapat dinyatakan dalam persamaan berikut:</p>
<p>\( Q = C \times \sqrt{DP} \)</p>
<p>Di mana:</p>
<ul>
<li><em><strong>Q</strong></em> adalah laju aliran (flow rate).</li>
<li><em><strong>C</strong></em> adalah konstanta yang bergantung pada desain orifice dan sifat fluida.</li>
<li><em><strong>DP</strong></em> adalah differential pressure, yaitu selisih tekanan antara sisi hulu (upstream) dan hilir (downstream) orifice.</li>
</ul>
<p>Hubungan antara DP dan flow pada orifice flowmeter bisa digambarkan seperti berikut:</p>
<div align="center">
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-orifice.svg" alt="orifice" loading="lazy"></p>
</div>
<p>Nilai konstanta <em><strong>C</strong></em> dipengaruhi oleh ukuran orifice, tipe fluida (gas atau cairan), dan kondisi operasi seperti suhu dan tekanan. Secara praktis, konstanta <em><strong>C</strong></em> dapat dihitung dari spesifikasi teknis flowmeter atau dikalibrasi langsung di lapangan. Hal penting yang perlu dipahami adalah bahwa karena hubungan ini bersifat kuadrat, maka kenaikan DP tidak selalu menghasilkan kenaikan flow yang sebanding. Sebagai contoh, jika DP meningkat empat kali lipat, flow hanya meningkat dua kali lipat.</p>
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-dp_vs_flow.svg" alt="dp_vs_flow" loading="lazy"></p>
<p>👇 Berikut script Python yang bisa dijalankan di <a href="https://python-fiddle.com/saved/091c3855-37dc-49f5-804b-cb6acc9243c4?ref=blog.kiiota.com">Python-Fiddle</a> untuk menggambarkan hubungan DP dan flow.</p>
<details>
    <summary><b><i>Perlihatkan script di sini</i></b></summary>
<pre><code class="language-js">
import numpy as np
import matplotlib.pyplot as plt

# Fungsi untuk menghitung flow berdasarkan DP
def calculate_flow(dp_values, C=1.0):
    return C * np.sqrt(dp_values)

# Fungsi untuk menggambar grafik hubungan DP dan Flow
def plot_flow_vs_dp(C=1.0, dp_max=100, num_points=500):
    dp_values = np.linspace(0, dp_max, num_points)
    flow_values = calculate_flow(dp_values, C)

    plt.figure(figsize=(10, 6))
    plt.plot(dp_values, flow_values, label=f'C = {C}')
    plt.title('Hubungan Differential Pressure (DP) dan Flow pada Orifice Flowmeter')
    plt.xlabel('Differential Pressure (DP)')
    plt.ylabel('Flow Rate (Q)')
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.legend()
    # Simpan grafik jika diperlukan
    # plt.savefig('dp_vs_flow.svg', dpi=300)
    plt.show()

# Contoh penggunaan
if __name__ == &quot;__main__&quot;:
    # Anda dapat mengubah nilai C dan dp_max
    plot_flow_vs_dp(C=1.0, dp_max=100)
</code></pre>
</details>
<h2 id="penerapan-praktis-dan-contoh-perhitungan">Penerapan Praktis dan Contoh Perhitungan</h2>
<p>Untuk memahami hubungan antara DP dan flow dalam aplikasi nyata, kita akan menggunakan sebuah contoh sederhana.</p>
<h3 id="contoh-perhitungan">Contoh Perhitungan</h3>
<p>Misalkan kita memiliki sebuah orifice flowmeter dengan konstanta <em><strong>C = 0,8</strong></em> dan kita ingin mengetahui flow saat DP terbaca 25 kPa.</p>
<p>\( Q = C \times \sqrt{DP} \)</p>
<p>\( Q = 0,8 \times \sqrt{25} \)</p>
<p>\( Q = 0,8 \times 5 = 4 \text{ unit aliran } \)</p>
<p>Jika DP meningkat menjadi 100 kPa, maka:</p>
<p>\( Q = 0,8 \times \sqrt{100} \)</p>
<p>\( Q = 0,8 \times 10 = 8 \text{ unit aliran } \)</p>
<p>Perhatikan bahwa ketika DP meningkat 4 kali lipat (dari 25 menjadi 100), flow hanya meningkat 2 kali lipat.</p>
<blockquote>
<p>&quot;Contoh ini menunjukkan bahwa hubungan antara DP dan flow bersifat non-linear, artinya peningkatan DP tidak selalu menghasilkan peningkatan flow yang sebanding.&quot;</p>
</blockquote>
<h3 id="range-dp-dan-flow-dari-vendor">Range DP dan Flow dari Vendor</h3>
<p>Biasanya, vendor flowmeter akan menyediakan dokumen teknis yang menyebutkan range DP dan range flow secara langsung. Misalnya, sebuah orifice flowmeter dapat memiliki range DP 0-5 kPa yang berkorelasi dengan range flow 0-4000 Nm³/h.</p>
<p>Dokumen ini biasanya sudah dikalibrasi berdasarkan karakteristik fisik orifice, sifat fluida, dan kondisi operasi. Pengguna cukup mengacu pada range tersebut tanpa perlu menghitung ulang konstanta <em><strong>C</strong></em>. Namun, orifice flowmeter sering kali dioperasikan pada kondisi yang berbeda dari desain (design pressure dan temperature). Hal ini menyebabkan perbedaan densitas fluida dari kondisi desain. Oleh karena itu, untuk menjaga akurasi pengukuran, dilakukan kompensasi flow dengan memperhitungkan kondisi operasi aktual.</p>
<blockquote>
<p>&quot;Penting untuk selalu memeriksa dokumen spesifikasi vendor sebelum melakukan perhitungan, karena range desain flowmeter ditentukan oleh karakteristik fisik orifice dan kondisi operasi.&quot;</p>
</blockquote>
<h3 id="kompensasi-flow-untuk-kondisi-operasi">Kompensasi Flow untuk Kondisi Operasi</h3>
<p>Misalnya, sebuah flowmeter dengan range 0 - 6000 Nm³/h didesain untuk suhu 25°C (298 K) dan tekanan 1 bar (2,01325 bar absolut). Jika kondisi operasi berubah menjadi 30°C (303 K) dan 1,2 bar (2,21325 bar absolut), maka flow yang misalnya terbaca 5000 Nm³/h harus dikompensasikan. Meskipun <strong>ISO 5167</strong> tidak memberikan rumus kompensasi secara langsung, standar ini menekankan pentingnya mempertimbangkan kondisi operasi aktual — termasuk tekanan dan suhu — dalam perhitungan aliran menggunakan orifice flowmeter.</p>
<p>Beberapa vendor besar (Moore, Rosemount, Siemens) memberikan referensi berikut untuk kompensasi tekanan dan temperatur:</p>
<div align="center">
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-procidia.svg" alt="procidia" loading="lazy"></p>
</div>
<p>Berdasarkan referensi di atas, maka jika sinyal sudah mendapatkan akar kuadrat dari transmitter atau DCS, maka perhitungan kompensasi akan menjadi:</p>
<div align="center">
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-dcs.svg" alt="dcs" loading="lazy"></p>
</div>
<p>Jika tekanan operasi (P) dan suhu operasi (T) berbeda dari kondisi desain (Pd, Td), maka flow aktual (Q) dapat dihitung sebagai berikut:</p>
<p>\( Q = Q_d \times \sqrt{\frac{P}{P_d} \times \frac{T_d}{T}} \)</p>
<p>Di mana:</p>
<ul>
<li><em><strong>Q</strong></em> adalah flow aktual.</li>
<li><em><strong>Qd</strong></em> adalah flow desain.</li>
<li><em><strong>P</strong></em> adalah tekanan absolut operasi.</li>
<li><em><strong>Pd</strong></em> adalah tekanan absolut desain.</li>
<li><em><strong>T</strong></em> adalah suhu operasi dalam Kelvin.</li>
<li><em><strong>Td</strong></em> adalah suhu desain dalam Kelvin.</li>
</ul>
<p>\( \begin{aligned}
Q &= 5000 \times \sqrt{\frac{2.21325}{2.01325} \times \frac{298}{303}} \\
Q &= 5000 \times \sqrt{1.09934 \times 0.9835} \\
Q &= 5000 \times \sqrt{1.0812} \\
Q &\approx 5199 \text{ Nm}^3/\text{h}
\end{aligned} \)</p>
<p>Flow yang terbaca sebesar <strong>5000 Nm³/h</strong> perlu dikompensasi berdasarkan perubahan tekanan dan suhu. Setelah koreksi, flow sebenarnya <strong>5199 Nm³/h</strong>. Kenaikan tekanan menyebabkan flow meningkat, tetapi kenaikan suhu sedikit mengurangi densitas gas, sehingga peningkatan tidak sepenuhnya proporsional.</p>
<p>Dengan memahami konsep ini, pengguna dapat memastikan bahwa pembacaan flow pada orifice flowmeter tetap akurat meskipun kondisi operasi berubah.</p>
<p>👇 Berikut script Python yang bisa dijalankan di <a href="https://python-fiddle.com/saved/9a89900b-5e51-4692-aaa5-a0ba87250379?ref=blog.kiiota.com">Python-Fiddle</a> untuk melakukan koreksi flow.</p>
<details>
    <summary><b><i>Perlihatkan script di sini</i></b></summary>
<pre><code class="language-js">
from math import sqrt

# Fungsi untuk menghitung kompensasi flow
def kompensasi_flow(Qd, Pd, Td, P, T):
    &quot;&quot;&quot; 
    Menghitung flow aktual berdasarkan kondisi operasi
    
    Qd : Flow desain (Nm³/h)
    Pd : Tekanan desain (barA)
    Td : Suhu desain (K)
    P  : Tekanan operasi (barA)
    T  : Suhu operasi (K)
    
    Output: Flow aktual yang telah dikompensasi (Nm³/h)
    &quot;&quot;&quot;
    Qa = Qd * sqrt((P / Pd) * (Td / T))
    return Qa

# Contoh penggunaan
Qd = 5000  # Flow desain dalam Nm³/h
Pd = 1 + 1.01325   # Tekanan desain dalam bar absolut
Td = 25 + 273.15   # Suhu desain dalam Kelvin (25°C)

P_actual = 1.2 + 1.01325   # Tekanan operasi dalam bar absolut
T_actual = 30 + 273.15   # Suhu operasi dalam Kelvin (30°C)

Qa = kompensasi_flow(Qd, Pd, Td, P_actual, T_actual)

print(f&quot;Flow yang telah dikompensasi: {Qa:.2f} Nm³/h&quot;)
</code></pre>
</details>
<h2 id="kesalahan-umum-dan-solusi">Kesalahan Umum dan Solusi</h2>
<p>Penggunaan orifice flowmeter tidak terlepas dari potensi kesalahan. Berikut adalah beberapa kesalahan umum dan solusinya:</p>
<ol>
<li>
<p><strong>Pemasangan Tidak Tepat:</strong> Orifice plate harus dipasang sesuai arah aliran dan posisi yang benar. <strong>Solusi</strong>: Pastikan arah aliran sesuai dengan tanda pada flowmeter, gasket tidak menutupi lubang orifice.</p>
</li>
<li>
<p><strong>Panjang Pipa Lurus Tidak Tepat:</strong> Panjang pipa lurus sisi upstream dan downstream yang tidak sesuai mengakibatkan distorsi, turbulensi, dan kecepatan aliran yang tidak merata. <strong>Solusi</strong>: Sesuai dengan <strong>ISO 5167-2</strong>, sisi upstream minimal <strong>10D</strong> (10 kali diameter pipa) dan sisi downstream minimal <strong>5D</strong> (5 kali diameter pipa).</p>
</li>
<li>
<p><strong>Pemilihan Ukuran Tidak Tepat:</strong> Ukuran orifice yang terlalu kecil atau besar dapat menyebabkan pembacaan DP yang tidak akurat, atau bahkan menyebabkan DP over range (DP yang melebihi batas pengukuran), yang akan membuat flowmeter tidak dapat memberikan pembacaan yang valid. <strong>Solusi</strong>: Gunakan ukuran orifice yang sesuai dengan range flow yang diinginkan dan pastikan DP berada dalam batas pengukuran.</p>
</li>
<li>
<p><strong>Perubahan Kondisi Operasi:</strong> Perubahan suhu atau tekanan tanpa kompensasi akan mengakibatkan pembacaan flow tidak akurat. <strong>Solusi</strong>: Gunakan kompensasi flow seperti yang dijelaskan pada bagian sebelumnya.</p>
</li>
<li>
<p><strong>Kontaminasi atau Kotoran:</strong> Kotoran yang menumpuk pada orifice plate akan mengganggu aliran. <strong>Solusi</strong>: Bersihkan orifice plate secara berkala menggunakan air bersih dan kain lembut, hindari bahan kimia atau alat tajam yang dapat merusak permukaan.</p>
</li>
<li>
<p><strong>Kerusakan pada DP Transmitter:</strong> Jika transmitter tidak berfungsi dengan baik, pembacaan DP menjadi tidak akurat. <strong>Solusi</strong>: Lakukan kalibrasi dan pengujian berkala.</p>
</li>
</ol>
<h3 id="kasus-sizing-ulang-karena-dp-over-range">Kasus Sizing Ulang karena DP Over Range</h3>
<p>Jika differential pressure orifice flowmeter melebihi batas desain, misalnya DP yang dirancang hanya 0-5 kPa untuk flow 0-4000 Nm³/h, dan ternyata DP beroperasi di melebihi kisaran 5 kPa, maka diperlukan sizing ulang untuk menentukan range flow yang sesuai.</p>
<p><strong>Contoh Perhitungan:</strong></p>
<p>Misalkan range DP desain awal adalah 0-5 kPa, dan range flow adalah 0-4000 Nm³/h. Jika DP diubah menjadi 0-10 kPa, maka range flow baru dapat dihitung menggunakan hubungan antara DP dan flow yang berbanding lurus dengan akar kuadrat DP.</p>
<p>Menggunakan rumus:</p>
<p>\( Q₂ = Q₁ \times \sqrt{\frac{DP₂}{DP₁}} \)</p>
<p>Dengan memasukkan nilai-nilai yang diketahui:</p>
<p>\( Q₂ = 4000 \times \sqrt{\frac{10}{5}} = 4000 \times \sqrt{2} \approx 4000 \times 1.414 = 5657 \, \text{Nm}^3/\text{h} \)</p>
<p>Jadi, jika range DP diubah dari 0-5 kPa menjadi 0-10 kPa, maka range flow yang baru adalah sekitar <strong>5657 Nm³/h</strong>. Hal ini menunjukkan bahwa jika DP meningkat, maka range flow juga akan meningkat, dan penting untuk memilih orifice dengan ukuran yang tepat untuk memastikan alat beroperasi dalam range yang optimal.</p>
<blockquote>
<p>&quot;Sizing ulang diperlukan jika flowmeter sering beroperasi di luar range desain, atau jika terjadi peningkatan kapasitas produksi.&quot;</p>
</blockquote>
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-dp_vs_flow_resizing.svg" alt="dp_vs_flow_resizing" loading="lazy"></p>
<p>👇 Berikut script Python yang bisa dijalankan di <a href="https://python-fiddle.com/saved/789596b8-3b57-4a34-beee-7dd8ce64407c?ref=blog.kiiota.com">Python-Fiddle</a> untuk menggambarkan DP dan flow di skala range berbeda.</p>
<details>
    <summary><b><i>Perlihatkan script di sini</i></b></summary>
<pre><code class="language-js">
import numpy as np
import matplotlib.pyplot as plt

# Definisikan nilai DP dan Flow awal
DP1 = 5  # DP desain lama (kPa)
Flow1 = 4000  # Flow desain lama (Nm³/h)

# Rentang DP baru yang diinginkan
DP2 = 10  # DP desain baru (kPa)

# Hitung flow baru berdasarkan rumus Q2 = Q1 * sqrt(DP2/DP1)
Flow2 = Flow1 * np.sqrt(DP2 / DP1)

# Menampilkan hasil perhitungan
print(f&quot;Flow desain lama (Q1): {Flow1} Nm³/h&quot;)
print(f&quot;Flow desain baru (Q2) setelah DP diubah menjadi {DP2} kPa: {Flow2:.2f} Nm³/h&quot;)

# Membuat grafik untuk menggambarkan hubungan DP dan Flow
DP_values = np.linspace(0.1, 10, 100)  # Range DP dari 0.1 kPa hingga 10 kPa
Flow_values = Flow1 * np.sqrt(DP_values / DP1)  # Menghitung flow untuk berbagai nilai DP

# Plot grafik
plt.figure(figsize=(10, 6))
plt.plot(DP_values, Flow_values, label=&quot;Hubungan DP dan Flow&quot;, linewidth=2)

# Tambahkan garis vertikal dan horizontal
plt.axvline(DP1, color='r', linestyle='--', label=f&quot;DP1 = {DP1} kPa&quot;)
plt.axvline(DP2, color='g', linestyle='--', label=f&quot;DP2 = {DP2} kPa&quot;)
plt.axhline(Flow1, color='r', linestyle=':', label=f&quot;Flow1 = {Flow1} Nm³/h&quot;)
plt.axhline(Flow2, color='g', linestyle=':', label=f&quot;Flow2 = {Flow2:.2f} Nm³/h&quot;)

# Tambahkan teks di tengah garis horizontal (Flow)
plt.text(DP_values[-1] * 0.375, Flow1, f&quot;{Flow1} Nm³/h&quot;, color='r', fontsize=10, verticalalignment='bottom', horizontalalignment='center')
plt.text(DP_values[-1] * 0.85, Flow2, f&quot;{Flow2:.2f} Nm³/h&quot;, color='g', fontsize=10, verticalalignment='bottom', horizontalalignment='center')

# Tambahkan teks di tengah garis vertikal (DP) dengan rotasi vertikal
plt.text(DP1, Flow_values[-1] * 0.575, f&quot;{DP1} kPa&quot;, color='r', fontsize=10, verticalalignment='center', horizontalalignment='right', rotation=90)
plt.text(DP2, Flow_values[-1] * 0.85, f&quot;{DP2} kPa&quot;, color='g', fontsize=10, verticalalignment='center', horizontalalignment='right', rotation=90)

# Tambahkan judul dan label sumbu
plt.title(&quot;Hubungan Differential Pressure (DP) dan Flow pada Orifice Flowmeter&quot;)
plt.xlabel(&quot;Differential Pressure (DP) [kPa]&quot;)
plt.ylabel(&quot;Flow Rate [Nm³/h]&quot;)

# Atur grid dan legenda
plt.grid(True, linestyle='--', alpha=0.6)
plt.legend()
plt.tight_layout()

# Simpan grafik sebagai file jika diperlukan
# plt.savefig('dp_vs_flow_resizing.svg', dpi=300)

# Tampilkan grafik
plt.show()
</code></pre>
</details>
<h3 id="simulasi-pengukuran-dan-efek-kompensasi">Simulasi Pengukuran dan Efek Kompensasi</h3>
<p>Untuk melihat efek dari kompensasi terhadap flowmeter yang diskalakan ulang, kita melakukan simulasi dan visualisasi seperti pada grafik berikut:</p>
<p><img src="/kiiota-blog/assets/media/6fc2c932-5ab0-4b12-8482-6e007c507923-dp_vs_flow_interactive.svg" alt="dp_vs_flow_interactive" loading="lazy"></p>
<ul>
<li><strong>Garis biru</strong> menunjukkan hubungan antara DP dan flow tanpa kompensasi.</li>
<li><strong>Garis hijau</strong> menunjukkan hubungan dengan kompensasi.</li>
<li><strong>Titik merah</strong> menunjukkan hasil pengukuran aktual tanpa kompensasi.</li>
<li><strong>Titik ungu</strong> menunjukkan hasil pengukuran setelah dikompensasi.</li>
</ul>
<p>Hasil ini menggambarkan bahwa flow rate aktual tanpa kompensasi lebih tinggi dibandingkan flow rate terkoreksi. Hal ini disebabkan oleh tekanan operasi yang lebih rendah dari desain, sehingga massa gas yang mengalir sebenarnya lebih sedikit.</p>
<p>👇 Berikut script Python yang bisa dijalankan di <a href="https://python-fiddle.com/saved/43b6d02a-ec3a-4a9b-9921-06ee90cafc1b?ref=blog.kiiota.com">Python-Fiddle</a> untuk menggambarkan efek kompensasi. Secara interaktif script meminta user memilih mode perhitungan berdasarkan DP atau flow.</p>
<details>
    <summary><b><i>Perlihatkan script di sini</i></b></summary>
<pre><code class="language-js">import math
import numpy as np
import matplotlib.pyplot as plt

# Parameter desain dari dokumen orifice FE-106
DP_design = 10  # kPa
Flow_design = 5656.85  # Nm³/h
P_design_gauge = 700  # kPa
T_design = 37 + 273.15  # K

# Parameter operasi
P_actual_gauge = 200  # kPa
T_actual = 35 + 273.15  # K

# Konversi ke tekanan absolut (dalam kPa)
P_design_abs = P_design_gauge + 101.325  # kPa (700 kPa gauge + 101.325 kPa atmosfer)
P_actual_abs = P_actual_gauge + 101.325  # kPa (200 kPa gauge + 101.325 kPa atmosfer)

# Formula dalam format LaTeX
formula_dp = r&quot;$DP = \left(\frac{Q}{Q_{\text{design}}}\right)^2 \times DP_{\text{design}}$&quot;
formula_flow = r&quot;$Q = Q_{\text{design}} \times \sqrt{\frac{DP}{DP_{\text{design}}}}$&quot;
formula_corrected_flow = r&quot;$Q_{\text{corrected}} = Q \times \sqrt{\frac{P}{P_{\text{design}}} \times \frac{T_{\text{design}}}{T}}$&quot;

# Fungsi untuk perhitungan utama
def calculate_dp(flow, flow_design, dp_design):
    return (flow / flow_design) ** 2 * dp_design

def calculate_flow(dp, flow_design, dp_design):
    return flow_design * np.sqrt(dp / dp_design)

def calculate_corrected_flow(flow, p_actual_abs, p_design_abs, t_actual, t_design):
    return flow * np.sqrt((p_actual_abs / p_design_abs) * (t_design / t_actual))

# Meminta input dari pengguna
mode = input(&quot;Masukkan mode (flow/DP): &quot;).strip().lower()

if mode == &quot;flow&quot;:
    Flow_actual = float(input(&quot;Masukkan flow aktual (Nm³/h): &quot;))
    DP_actual = calculate_dp(Flow_actual, Flow_design, DP_design)
elif mode == &quot;dp&quot;:
    DP_actual = float(input(&quot;Masukkan DP aktual (kPa): &quot;))
    Flow_actual = calculate_flow(DP_actual, Flow_design, DP_design)
else:
    print(&quot;Mode tidak dikenali. Pilih 'flow' atau 'DP'.&quot;)
    exit()

# Koreksi flow untuk kondisi operasi
Flow_corrected = calculate_corrected_flow(Flow_actual, P_actual_abs, P_design_abs, T_actual, T_design)

# Menampilkan hasil perhitungan
print(&quot;\nHasil Perhitungan:&quot;)
print(f&quot;DP aktual: {DP_actual:.2f} kPa&quot;)
print(f&quot;Flow aktual tanpa kompensasi: {Flow_actual:.2f} Nm³/h&quot;)
print(f&quot;Flow terkoreksi untuk kondisi operasi: {Flow_corrected:.2f} Nm³/h\n&quot;)

# Plotting dengan numpy untuk visualisasi lebih halus
dp_values = np.linspace(0, DP_design, 500)
flow_values = calculate_flow(dp_values, Flow_design, DP_design)
flow_corrected_values = calculate_corrected_flow(flow_values, P_actual_abs, P_design_abs, T_actual, T_design)

plt.figure(figsize=(10, 6))

# Plot imajiner transparan untuk formula
plt.plot(dp_values, dp_values, label=rf'{formula_dp}', color='white', alpha=0, zorder=-1)

# Plot utama
plt.plot(dp_values, flow_values, label=f'{formula_flow}', color='blue')
plt.plot(dp_values, flow_corrected_values, label=f'{formula_corrected_flow}', color='green')

plt.legend(fontsize=10, loc=&quot;best&quot;, frameon=True, framealpha=0.8, bbox_to_anchor=(1.05, 1))

# Titik data aktual
plt.scatter(DP_actual, Flow_actual, color='red')
plt.scatter(DP_actual, Flow_corrected, color='purple')

# Garis referensi
plt.axhline(y=Flow_actual, color='gray', linestyle='--', alpha=0.7)
plt.axhline(y=Flow_corrected, color='gray', linestyle='--', alpha=0.7)
plt.axvline(x=DP_actual, color='gray', linestyle='--', alpha=0.7)

# Fungsi anotasi dinamis
def place_annotation(x, y, text, color, x_offset):
    y_offset = 500 if y &lt; (Flow_design * 0.85) else -500  # Penyesuaian posisi
    plt.annotate(
        text,
        xy=(x, y),
        xytext=(x + x_offset, y + y_offset),
        arrowprops=dict(facecolor=color, arrowstyle=&quot;-&gt;&quot;),
        fontsize=10,
        color=color,
        bbox=dict(facecolor=&quot;white&quot;, edgecolor=color, alpha=0.8, boxstyle=&quot;round,pad=0.3&quot;),
    )

# Anotasi dengan posisi dinamis
design_text = r&quot;${_{\text{design}}}$&quot;
corrected_text = r&quot;${_{\text{corrected}}}$&quot;

place_annotation(
    DP_actual, Flow_actual,
    f'DP{design_text}: {DP_design:.2f} kPa\nQ{design_text}: {Flow_design:.2f} Nm³/h\nDP: {DP_actual:.2f} kPa\nQ: {Flow_actual:.2f} Nm³/h',
    'red', x_offset=-2
)

place_annotation(
    DP_actual, Flow_corrected,
    f'P{design_text}: {P_design_gauge:.2f} kPa\nT{design_text}: {T_design:.2f} K\nP: {P_actual_gauge:.2f} kPa\nT: {T_actual:.2f} K\nQ{corrected_text}: {Flow_corrected:.2f} Nm³/h',
    'purple', x_offset=0.5
)

# Pengaturan tampilan plot
plt.title('Flow vs Differential Pressure Dengan dan Tanpa Kompensasi')
plt.xlabel('Differential Pressure (kPa)')
plt.ylabel('Flow (Nm³/h)')
plt.grid(True, linestyle='--', alpha=0.6)
plt.legend()
plt.tight_layout()

# Simpan grafik jika diperlukan
# plt.savefig('dp_vs_flow_interactive.svg', dpi=300)

# Tampilkan grafik
plt.show()
</code></pre>
</details>
<h2 id="referensi-tambahan">Referensi Tambahan</h2>
<p>Jika ingin lebih memahami tentang orifice flowmeter dan cara kerja pengukuran aliran menggunakan perbedaan tekanan, Anda bisa membaca artikel berikut:</p>
<ul>
<li>
<p><strong>Emerson</strong> - Pengukuran Flow dengan Differential Pressure<br>
Penjelasan dasar tentang metode pengukuran aliran menggunakan perbedaan tekanan.<br>
<a href="https://www.emerson.com/en-us/automation/measurement-instrumentation/pressure-measurement/about-differential-pressure-dp-flow-measurement?ref=blog.kiiota.com">Baca di sini</a></p>
</li>
<li>
<p><strong>Dwyer Instruments</strong> - Dasar Flowmeter Differential Pressure<br>
Memahami prinsip kerja flowmeter DP dengan bahasa sederhana.<br>
<a href="https://www.dwyeromega.com/en-us/resources/differential-pressure-flow-meter?ref=blog.kiiota.com">Baca di sini</a></p>
</li>
<li>
<p><strong>Wikipedia</strong> - Orifice Plate<br>
Informasi lebih lengkap tentang orifice plate, termasuk cara perhitungannya.<br>
<a href="https://en.wikipedia.org/wiki/Orifice_plate?ref=blog.kiiota.com">Baca di sini</a></p>
</li>
</ul>
<h2 id="kesimpulan">Kesimpulan</h2>
<p>Memahami hubungan antara differential pressure dan flow pada orifice flowmeter sangat penting untuk memastikan akurasi pengukuran. Dengan memahami prinsip dasar, cara perhitungan termasuk melakukan skala ulang, serta potensi kesalahan, pengguna dapat lebih percaya diri dalam menggunakan dan mengoptimalkannya. Script-script Python yang disertakan di sini diharapkan bisa menjadi tool praktis untuk melakukan analisa cepat dan interaktif terhadap masalah yang muncul terkait orifice flowmeter.</p>
<!--kg-card-end: markdown-->