---
ghost_uuid: "1219c62b-8d56-4045-8170-ffda99da4a32"
title: "Pengetahuan praktis pengukuran level menggunakan DP transmitter"
date: "2021-11-28T13:04:21.000+07:00"
slug: "pengetahuan-praktis-pengukuran-level-menggunakan-dp-transmitter"
layout: "post"
excerpt: |
  Banyak referensi mengenai pengukuran level cairan dalam bejana bertekanan menggunakan DP transmitter di luar sana, di sini kita hanya akan membahas praktisnya saja untuk pemula. Pemula? Bahkan yang sudah puluhan tahun di gas industri masih banyak yang kebingungan.
image: "https://images.unsplash.com/photo-1571214309501-f9a2e6bec9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHN0b3JhZ2UlMjB0YW5rfGVufDB8fHx8MTYzODAxNDg2NQ&ixlib=rb-1.2.1&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@kmitchhodge?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">K. Mitch Hodge</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
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
url: "https://blog.kiiota.com/pengetahuan-praktis-pengukuran-level-menggunakan-dp-transmitter/"
comment_id: "61a21f24af359003beb4eac1"
reading_time: 4
access: true
comments: true
---

{% raw %}
<p>Mari kita mulai dengan sebuah gambar penggunaan differential pressure transmitter untuk mengukur misalnya cairan oksigen dalam sebuah bejana tertutup/bertekanan. Karena oksigen cair termasuk cryogenic liquid, maka diperlukan bejana berdinding ganda dengan ruang sangat vacuum di antaranya untuk meminimalisir transfer panas dari luar. Untuk menyederhanakan, bejana sisi luar tidak digambarkan di sini.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/kiiota-blog/assets/media/1219c62b-8d56-4045-8170-ffda99da4a32-level_measurement.svg" class="kg-image" alt loading="lazy" width="450" height="600"><figcaption>Pengukuran Level Bejana Bertekanan</figcaption></figure><p>Pengukuran level cairan di dalam bejana yang bertekanan di atas tekanan atmosfir memanfaat sepenuhnya kemampuan DP <em>transmitter </em>dengan menghubungkan kedua sisi H dan L seperti ditunjukkan gambar di atas.</p><p>DP <em>transmitter </em>memungkinkan penghilangan otomatis tekanan yang muncul di sisi L dari tekanan total yang terbaca di sisi H. Seperti yang digambarkan di atas, L dihubungkan ke sisi paling atas dan H dihubungkan ke sisi paling bawah bejana. Setiap kenaikan tekanan di atas permukaan cairan (P) akan diteruskan ke segala arah termasuk menuju ke kedua sisi DP <em>transmitter</em>, baik L maupun H. Karena tekanan keduanya saling berlawanan arah, maka selisihnya menjadi nol. Hanya tekanan hidrostatis cairan (W) yang muncul di sisi H yang berpengaruh terhadap DP transmitter, proportional dengan kenaikan level cairan.</p><blockquote>Kondisi tekanan permukaan tidak mempengaruhi pengukuran level cairan DP<em> transmitter</em>. DP transmitter hanya mengukur level cairan dan hanya level cairan yang terukur.</blockquote><p>Jadi, nilai yang terbaca di DP <em>transmitter</em> hanyalah tekanan hidrostatis cairan – misalnya dalam mmH<sub>2</sub>O – yang besarnya merupakan hasil perkalian level (h) dengan <em>specific gravity</em> (SG) sehingga untuk menentukan level di dalam bejana menjadi: $$ \small W=h\times SG\Rightarrow h=\frac{W}{SG} $$ SG adalah <em>specific gravity</em> atau <em>relative density</em> yang maksudnya adalah rasio <em>density</em> suatu bahan dibandingkan dengan <em>density</em> referensi, dalam hal ini air pada 4°C. Untuk memudahkan, <em>density</em> air yang digunakan diambil dari satuan kg/liter karena nilainya tepat 1.0 sehingga SG cairan yang digunakan adalah: $$ \small SG=\frac{\textit{density}}{\textit{1.0}} $$ Jadi, SG yang digunakan adalah <i>density</i> cairan itu sendiri yang dari dalam satuan kg/liter seperti referensi tetapi kehilangan satuannya karena pembagian di atas.</p><!--kg-card-begin: markdown--><p><strong>Contoh:</strong></p>
<ol>
<li>Sebuah bejana yang berisi cairan yang <i>density</i>-nya 1.141 kg/liter menunjukkan pengukuran pada DP <i>transmitter</i> sebesar 10000 mmH<sub>2</sub>O. Berapa level cairan di dalam bejana? $$ \small h=\frac{10000}{1.141}=8764.2\text{ mm}=8.8\text{ m} $$</li>
<li>Sebuah bejana yang berisi cairan yang <i>density</i>-nya 0.808 kg/liter menunjukkan pengukuran pada DP <i>transmitter</i> sebesar 10000 mmH<sub>2</sub>O. Berapa level cairan di dalam bejana? $$ \small h=\frac{10000}{0.808}=12376.2\text{ mm}=12.4\text{ m} $$</li>
</ol>
<!--kg-card-end: markdown--><p>Penggunaan <em>density </em>cairan yang benar menjadi penting untuk bisa menentukan nilai level dengan tepat. Untuk beberapa cairan diketahui sebagai berikut, tetapi ingat itu pada kondisi tertentu:</p><!--kg-card-begin: markdown--><table>
<thead>
<tr>
<th>Cairan</th>
<th>Density (kg/lt)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Oksigen</strong></td>
<td>1.141 @ 1 atm</td>
</tr>
<tr>
<td><strong>Nitrogen</strong></td>
<td>0.808 @ 1 atm</td>
</tr>
<tr>
<td><strong>Argon</strong></td>
<td>1.395 @ 1 atm</td>
</tr>
<tr>
<td><strong>Karbon Dioksida</strong></td>
<td>1.014 @ 21.4 atm</td>
</tr>
<tr>
<td><strong>Nitrous Oksida</strong></td>
<td>1.216 @ 1 atm</td>
</tr>
</tbody>
</table>
<!--kg-card-end: markdown--><p>Pada kondisi berbeda – misalnya bejana beroperasi pada tekanan 7 barg atau bahkan 27 barg – maka density juga akan berbeda atau bahkan sangat jauh berbeda. Anda bisa menggunakan aplikasi <a href="https://blog.kiiota.com/aplikasi-gas-conversion/">Gas Conversion</a> untuk menemukan density yang tepat untuk berbagai macam kondisi tekanan.</p><!--kg-card-begin: markdown--><table>
<thead>
<tr>
<th>Cairan</th>
<th>Density (kg/lt)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Oksigen</strong></td>
<td>1.000 @ 7 barg</td>
</tr>
<tr>
<td><strong>Nitrogen</strong></td>
<td>0.687 @ 7 barg</td>
</tr>
<tr>
<td><strong>Nitrogen</strong></td>
<td>0.492 @ 27 barg</td>
</tr>
<tr>
<td><strong>Argon</strong></td>
<td>1.222 @ 7 barg</td>
</tr>
<tr>
<td><strong>Karbon Dioksida</strong></td>
<td>1.035 @ 18 barg</td>
</tr>
<tr>
<td><strong>Nitrous Oksida</strong></td>
<td>1.035 @ 12 barg</td>
</tr>
</tbody>
</table>
<!--kg-card-end: markdown--><p>Di sini diberikan contoh ekstrim nitrogen pada 1 atm (0 barg), pada 7 barg, dan pada 27 barg. Mari kita aplikasikan hal tersebut pada sebuah tangki yang diketahui dari dokumen tangki <em>full trycock</em> pada 8.837 m, 8837 mm. Mulai di sini kita akan menyebut tangki saja dibandingkan bejana yang formal.</p><!--kg-card-begin: markdown--><table>
<thead>
<tr>
<th style="text-align:center">Tekanan (barg)</th>
<th style="text-align:center">W (mmH<sub>2</sub>O)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0 (-195.7°C)</td>
<td style="text-align:center">$$ 8837\times 0.808=7140.3 $$</td>
</tr>
<tr>
<td style="text-align:center">7 (-172.7°C)</td>
<td style="text-align:center">$$ 8837\times 0.687=6071.0 $$</td>
</tr>
<tr>
<td style="text-align:center">27 (-151.0°C)</td>
<td style="text-align:center">$$ 8837\times 0.492=4347.8 $$</td>
</tr>
</tbody>
</table>
<!--kg-card-end: markdown--><p>Pada kondisi <em>density </em>(berat dibandingkan volume) yang semakin rendah, maka pembacaan <em>full trycock</em> di DP <em>transmitter </em>tangki yang dimaksud akan semakin rendah pula. Itu bukanlah misteri! Penjelasan praktisnya, liquid semakin mengembang dan membutuhkan ruang semakin besar jika semakin menghangat. Nilai <em>full trycock</em> pada 7140 mmH<sub>2</sub>O seperti tercantum dalam tabel konversi dari pembuat tangki tidak akan pernah tercapai karena temperatur cairan hampir tidak mungkin mencapai temperatur standar nitrogen -195.7°C saat sudah sekian waktu di tangki produksi, melewati pompa transfer, sekian waktu di tangki transporter, melewati lagi pompa transfer. Saat dibutuhkan tekanan kerja misalnya ke 27 barg, maka cairan perlu dihangatkan melewati <em>pressure building system</em> (PB) agar menciptakan tekanan permukaan 27 barg itu. Semakin hangat cairan, semakin besar ruang yang dibutuhkan, semakin besar tekanan permukaan, semakin kecil <em>density</em>.</p><blockquote>Tidaklah tepat jika masih menggunakan tabel konversi yang pada 1 atm dari pembuat tangki jika kemudian tangki dioperasikan pada kondisi <em>medium/high pressure</em>. Hubungi kami jika membutuhkan tabel konversi pada tekanan kerja berbeda.</blockquote><p>Mari kita lihat kembali contoh tangki di atas yang dimensi keseluruhan <em>inner vessel</em> diketahui dari dokumen tangki. Aplikasi <a href="https://blog.kiiota.com/aplikasi-vessel-volume/">Vessel Volume</a> dengan mudah menghitung kapasitas keseluruhannya sebagai berikut:</p><!--kg-card-begin: markdown--><table>
<thead>
<tr>
<th style="text-align:center">Tekanan (barg)</th>
<th style="text-align:center">Volume (lt)</th>
<th style="text-align:center">Weight (kg)</th>
<th style="text-align:center">Gas (m<sup>3</sup>)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">30000</td>
<td style="text-align:center">24225</td>
<td style="text-align:center">21498</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">30000</td>
<td style="text-align:center">20594</td>
<td style="text-align:center">18276</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center">30000</td>
<td style="text-align:center">14773</td>
<td style="text-align:center">13110</td>
</tr>
</tbody>
</table>
<!--kg-card-end: markdown--><p>Volume tangki yang tersedia tentu tetap sesuai dengan spesifikasi fisik 30000 liter, mampu menampung cairan sebanyak 30000 liter tetapi berat cairan tersebut dan konversinya ke gas (pada 1 atm, 30°C) sangat jauh berbeda untuk kondisi yang berbeda. Jadi, tidak mungkin kita memaksakan 24.2 ton produk masuk ke tangki saat kita akan operasikan tangki itu pada tekanan 27 barg! Untuk target kondisi tersebut, jika pengisian dari posisi kosong cukup isi tangki sebanyak 14.8 ton saja atau jika tidak dari posisi kosong cukup pada penunjukan DP <em>transmitter </em>sampai 4348 mmH<sub>2</sub>O saja. Ingat, DP <em>transmitter </em>proportional terhadap berat, pengisian sampai 4348 mmH<sub>2</sub>O pada tekanan berapapun di bawah 27 barg dipastikan tidak akan melewati <em>full trycock</em> tangki saat kondisi nantinya cairan mengembang untuk mencapai tekanan 27 barg.</p><p>Bagaimana? Mendapatkan pencerahan? Sementara tulisan ini akan saya terbitkan dahulu, akan ada <em>update </em>lagi di kesempatan berikutnya sekiranya masih ada misteri yang perlu penjelasan praktis.</p>
{% endraw %}