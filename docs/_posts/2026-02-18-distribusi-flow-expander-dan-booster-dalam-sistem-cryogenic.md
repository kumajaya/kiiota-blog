---
ghost_uuid: "ee60405a-a7d1-40ba-9b72-e6a0461afc06"
title: "Distribusi Flow Expander dan Booster dalam Sistem Cryogenic"
date: "2026-02-18T21:32:30.000+07:00"
slug: "distribusi-flow-expander-dan-booster-dalam-sistem-cryogenic"
layout: "post"
excerpt: |
  Dalam sistem cryogenic, keseimbangan energi antara expander dan booster bukan hanya soal flow total. Rasio flow, rasio kompresi, dan rasio ekspansi adalah kunci menjaga stabilitas operasi, efisiensi energi, dan mencegah vibrasi.
image: "https://images.unsplash.com/photo-1728403295457-57cf37d59a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHx0dXJiaW5lfGVufDB8fHx8MTc3MTQyNDkyM3ww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@csgboyer?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Chris Boyer</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Air Separation Unit"
  - "Engineering Lessons"
  - "Field Experience"
categories:
  - "air-separation-unit"
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
url: "https://blog.kiiota.com/distribusi-flow-expander-dan-booster-dalam-sistem-cryogenic/"
comment_id: "6995cb8e200d1e46d94ba83f"
reading_time: 2
access: true
comments: true
---

{% raw %}
<p>Dalam sistem cryogenic atau gas separation modern, <strong>expander</strong> dan <strong>booster</strong> bekerja sebagai satu kesatuan mekanis. Expander berfungsi sebagai penggerak (motor) yang menghasilkan energi dari ekspansi gas dingin, sementara booster bertindak sebagai beban berupa centrifugal compressor yang mengonsumsi energi tersebut. Keseimbangan keduanya menentukan <strong>stabilitas operasi, efisiensi energi, dan umur peralatan</strong>.</p>
<h2 id="landasan-teori">Landasan Teori</h2>
<ul>
<li><strong>Expander</strong>: menurunkan temperatur gas melalui ekspansi isentropik, sekaligus menghasilkan energi mekanis pada shaft. Energi ini digunakan untuk menggerakkan booster.</li>
<li><strong>Booster</strong>: menaikkan tekanan gas (umumnya recycle nitrogen atau udara kering) agar sesuai dengan kebutuhan proses. Beban booster harus seimbang dengan energi expander agar tidak terjadi mismatch.</li>
<li><strong>Distribusi Flow</strong>: Rasio flow expander terhadap booster menjadi indikator utama apakah energi yang dihasilkan expander cukup, berlebih, atau kurang dibandingkan kebutuhan booster.</li>
<li><strong>Rasio Kompresi Booster</strong>: perbandingan <strong>tekanan keluar absolute (discharge abs)</strong> dan <strong>tekanan masuk absolute (suction abs)</strong> booster. Rasio ini menentukan beban kerja booster. Jika terlalu tinggi sementara energi expander kurang, booster bisa mendekati surge dan menimbulkan vibrasi.</li>
<li><strong>Rasio Ekspansi Expander</strong>: perbandingan <strong>tekanan masuk absolute</strong> dan <strong>tekanan keluar absolute</strong> expander. Rasio ini menentukan seberapa besar energi mekanis yang dihasilkan expander. Jika terlalu tinggi, energi berlebih bisa memicu vibrasi akibat torsi berlebihan pada shaft.</li>
</ul>
<p>📌 <em>Catatan: semua rasio kompresi dan ekspansi harus dihitung dari tekanan absolut, bukan tekanan gauge.</em></p>
<p>Dengan demikian, <strong>matching energi</strong> harus dilihat secara holistik: flow ratio, rasio kompresi, dan rasio ekspansi.</p>
<h2 id="contoh-data-operasi-dan-analisis-flow">Contoh Data Operasi dan Analisis Flow</h2>
<table>
<thead>
<tr>
<th>Mode</th>
<th>Flow Expander (Nm³/h)</th>
<th>Flow Booster (Nm³/h)</th>
<th>Rasio Exp/Booster</th>
<th>Interpretasi Utama</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>38.300</td>
<td>56.100</td>
<td>0,683</td>
<td>Expander dominan, energi spesifik tinggi, perlu monitoring vibrasi</td>
</tr>
<tr>
<td>2</td>
<td>37.000</td>
<td>57.473</td>
<td>0,644</td>
<td>Rasio terendah, booster lebih dominan, efisiensi expander menurun</td>
</tr>
<tr>
<td>3</td>
<td>36.700</td>
<td>55.964</td>
<td>0,656</td>
<td>Kondisi menengah, relatif stabil</td>
</tr>
<tr>
<td>4</td>
<td>35.800</td>
<td>55.547</td>
<td>0,645</td>
<td>Flow expander terendah, booster stabil, efisiensi sistem sedikit turun</td>
</tr>
</tbody>
</table>
<h3 id="catatan-penting">Catatan Penting</h3>
<ul>
<li>Rasio <strong>&lt;1</strong> dalam contoh ini adalah kondisi normal: booster selalu menerima flow lebih besar dibanding expander.</li>
<li>Rasio <strong>0,64–0,68</strong> sesuai dengan desain dalam contoh ini, di mana expander tidak boleh terlalu dominan.</li>
<li><strong>Energi berlebih (expander dominan)</strong> → vibrasi karena torsi berlebihan.</li>
<li><strong>Energi kurang (booster dominan)</strong> → vibrasi karena booster mendekati surge.</li>
<li><strong>Rasio kompresi dan ekspansi</strong> harus dijaga di sekitar nilai desain agar matching energi tetap terjaga.</li>
</ul>
<h2 id="kesimpulan">Kesimpulan</h2>
<ol>
<li><strong>Distribusi flow expander–booster</strong> adalah indikator utama keseimbangan energi, lebih penting daripada sekadar melihat flow absolut di booster.</li>
<li><strong>Rasio kompresi booster</strong> dan <strong>rasio ekspansi expander</strong> harus selalu diperhatikan bersama flow ratio, karena ketiganya membentuk neraca energi yang menjaga stabilitas operasi.</li>
<li>Vibrasi bisa muncul baik saat energi expander berlebih maupun kurang, sehingga pemantauan harus dilakukan secara holistik: flow ratio, kompresi, ekspansi, serta kondisi mekanis (bearing, shaft).</li>
<li>Dengan menjaga distribusi flow dan rasio sesuai desain, sistem cryogenic dapat beroperasi stabil, efisien, dan aman.</li>
</ol>

{% endraw %}