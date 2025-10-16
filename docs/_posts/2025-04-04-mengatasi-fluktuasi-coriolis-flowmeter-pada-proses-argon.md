---
ghost_uuid: "343a41c3-6e34-47e9-93f7-643267dae704"
title: "Mengatasi Fluktuasi Coriolis Flowmeter pada Proses Argon Destilasi Bertingkat"
date: "2025-04-04T00:50:59.000+07:00"
slug: "mengatasi-fluktuasi-coriolis-flowmeter-pada-proses-argon"
layout: "post"
excerpt: |
  Pendahuluan
  
  
  Coriolis flowmeter dikenal sebagai alat ukur aliran massa yang akurat dan tidak bergantung pada densitas atau komposisi fluida. Namun, dalam aplikasi kriogenik seperti pengukuran liquid argon (LAr) pada proses destilasi bertingkat, sering terjadi fluktuasi pengukuran yang mengganggu keandalan data. Salah satu faktor utama penyebab masalah ini adalah tekanan rendah di kolom destilasi. Artikel ini akan membahas tantangan tersebut serta solusi yang dapat diterapkan.
  
  
  
  Mengapa Tekanan
image: "https://images.unsplash.com/photo-1620203853151-496c7228306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fGluZHVzdHJ5fGVufDB8fHx8MTc0MzY5ODc1N3ww&ixlib=rb-4.0.3&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@rgaleriacom?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Ricardo Gomez Angel</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "flowmeter"
  - "coriolis"
categories:
  - "flowmeter"
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
url: "https://blog.kiiota.com/mengatasi-fluktuasi-coriolis-flowmeter-pada-proses-argon/"
comment_id: "67eebaa7c10c6903d551a4f2"
reading_time: 3
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h2 id="pendahuluan"><strong>Pendahuluan</strong></h2>
<p>Coriolis flowmeter dikenal sebagai alat ukur aliran massa yang akurat dan tidak bergantung pada densitas atau komposisi fluida. Namun, dalam aplikasi kriogenik seperti pengukuran <strong>liquid argon (LAr) pada proses destilasi bertingkat</strong>, sering terjadi <strong>fluktuasi pengukuran</strong> yang mengganggu keandalan data. Salah satu faktor utama penyebab masalah ini adalah <strong>tekanan rendah di kolom destilasi</strong>. Artikel ini akan membahas tantangan tersebut serta solusi yang dapat diterapkan.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><h2 id="mengapa-tekanan-rendah-di-kolom-destilasi-menjadi-masalah"><strong>Mengapa Tekanan Rendah di Kolom Destilasi Menjadi Masalah?</strong></h2>
<p>Kolom destilasi bertingkat bekerja dengan memisahkan komponen berdasarkan titik didihnya. Pada kolom <strong>pemurnian argon</strong>, tekanan sering kali lebih rendah dibandingkan bagian lain dalam sistem. Tekanan rendah ini dapat menyebabkan <strong>flashing</strong>, yaitu perubahan sebagian liquid argon menjadi gas sebelum mencapai flowmeter. Akibatnya, Coriolis flowmeter yang dirancang untuk mengukur fluida dalam <strong>fase cair</strong> akan membaca nilai yang tidak stabil karena adanya <strong>dua fase (liquid + gas)</strong> dalam aliran.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><h2 id="perbandingan-destilasi-konvensional-vs-hydrogen-deoxidation-process"><strong>Perbandingan: Destilasi Konvensional vs. Hydrogen Deoxidation Process</strong></h2>
<p>Menariknya, beberapa proses destilasi yang menggunakan <strong>hydrogen deoxidation process</strong> dapat menjaga tekanan kolom argon lebih tinggi. Berikut beberapa perbedaannya:</p>
<!--kg-card-end: markdown--><!--kg-card-begin: html--><table>
<thead>
<tr>
<th>Parameter</th>
<th>Destilasi Konvensional</th>
<th>Hydrogen Deoxidation Process</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sumber Energi</td>
<td>Panas dari sistem pendingin</td>
<td>Reaksi hidrogen dengan oksigen</td>
</tr>
<tr>
<td>Tekanan di Kolom Argon</td>
<td>Cenderung lebih rendah</td>
<td>Lebih tinggi, lebih stabil</td>
</tr>
<tr>
<td>Risiko Flashing</td>
<td>Tinggi</td>
<td>Lebih kecil</td>
</tr>
<tr>
<td>Stabilitas Flowmeter</td>
<td>Fluktuatif</td>
<td>Lebih stabil</td>
</tr>
</tbody>
</table><!--kg-card-end: html--><!--kg-card-begin: markdown--><p>Hydrogen deoxidation process memberikan energi tambahan yang meningkatkan <strong>laju evaporasi nitrogen dan oksigen</strong>, memungkinkan argon untuk terkonsentrasi lebih cepat dan menjaga tekanan lebih tinggi, sehingga mengurangi risiko flashing sebelum masuk ke Coriolis flowmeter. Selain itu, dalam beberapa sistem, <strong>reciprocating compressor</strong> digunakan untuk membantu mempertahankan tekanan yang lebih tinggi di kolom destilasi dengan cara <strong>meningkatkan tekanan gas yang dihasilkan dalam proses ini</strong>.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><h2 id="solusi-untuk-menstabilkan-pengukuran-coriolis-flowmeter"><strong>Solusi untuk Menstabilkan Pengukuran Coriolis Flowmeter</strong></h2>
<p>Jika peningkatan tekanan kolom argon tidak memungkinkan, beberapa solusi berikut dapat diterapkan:</p>
<ol>
<li><strong>Memasang Back Pressure Regulator (BPR)</strong>
<ul>
<li>BPR dipasang <strong>setelah Coriolis flowmeter</strong> untuk menjaga tekanan upstream tetap cukup tinggi agar menghindari flashing sebelum flowmeter.</li>
<li>Gunakan <strong>BPR kriogenik</strong> yang dirancang untuk <strong>menangani temperatur rendah dan gas inert</strong>.</li>
</ul>
</li>
<li><strong>Menambahkan Buffer Tank atau Phase Separator</strong>
<ul>
<li>Buffer tank dapat meredam fluktuasi tekanan dan memastikan <strong>argon tetap dalam fase cair</strong> saat melewati flowmeter.</li>
<li>Phase separator dapat membantu mengeluarkan gas sebelum fluida mencapai sensor pengukuran.</li>
</ul>
</li>
<li><strong>Optimasi Jalur Pipa dan Insulasi</strong>
<ul>
<li>Pastikan <strong>jalur pipa sebelum flowmeter tidak mengalami ekspansi tiba-tiba</strong> yang dapat menyebabkan flashing.</li>
<li>Gunakan <strong>vacuum jacketed piping</strong> untuk menjaga suhu dan mencegah pemanasan yang bisa memicu penguapan.</li>
<li>Jika vacuum jacketed line sulit dimodifikasi, pertimbangkan <strong>loop bypass vertikal atau phase separator sebelum flowmeter</strong> untuk memisahkan gas lebih awal.</li>
</ul>
</li>
<li><strong>Pemasangan Coriolis Flowmeter di Jalur Vertikal</strong>
<ul>
<li><strong>Jika memungkinkan</strong>, pemasangan flowmeter pada <strong>jalur vertikal dengan aliran ke atas</strong> bisa membantu mengeluarkan gas yang mungkin terbentuk dalam aliran.</li>
<li>Jika flowmeter harus dipasang di jalur menurun, pastikan <strong>ada venting atau separator sebelum flowmeter</strong> agar hanya cairan yang masuk.</li>
</ul>
</li>
<li><strong>Mengubah Range Coriolis Flowmeter untuk Mengatasi Lonjakan Flow</strong>
<ul>
<li>Jika fluktuasi pengukuran disebabkan oleh <strong>lonjakan tiba-tiba dalam aliran yang menyebabkan terpancung (cutoff flow)</strong>, memperlebar turndown ratio flowmeter bisa membantu menjaga data akumulasi tetap berjalan.</li>
<li><strong>Keuntungan</strong>:
<ul>
<li>Menghindari hilangnya data akibat flow yang sesekali keluar dari range sensor.</li>
<li>Meningkatkan fleksibilitas dalam kondisi operasional yang bervariasi.</li>
</ul>
</li>
<li><strong>Batasan</strong>:
<ul>
<li>Jika fluktuasi berasal dari flashing atau gangguan tekanan, pelebaran range tidak akan mengatasi masalah inti.</li>
<li>Pastikan <strong>akurasi di flow rendah tetap terjaga</strong>, karena beberapa Coriolis flowmeter bisa mengalami penurunan akurasi di area low flow.</li>
</ul>
</li>
</ul>
</li>
<li><strong>Monitoring dan Adjusting Tekanan Kolom Destilasi</strong>
<ul>
<li>Jika memungkinkan, <strong>sesuaikan parameter operasional</strong> untuk menjaga tekanan kolom lebih stabil.</li>
<li>Pastikan sistem <strong>venting storage tank</strong> bekerja optimal agar tidak menyebabkan backpressure berlebih.</li>
</ul>
</li>
</ol>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><h2 id="kesimpulan"><strong>Kesimpulan</strong></h2>
<p>Fluktuasi pengukuran Coriolis flowmeter dalam aplikasi liquid argon sering kali disebabkan oleh tekanan rendah yang memicu flashing. Jika sistem destilasi tidak menggunakan hydrogen deoxidation process yang dapat membantu menjaga tekanan, solusi seperti <strong>BPR, buffer tank, loop bypass vertikal, atau optimasi jalur pipa</strong> dapat diterapkan untuk meningkatkan stabilitas pengukuran. <strong>Jika perubahan pada vacuum jacketed line sulit</strong>, maka solusi berbasis peralatan tambahan seperti <strong>phase separator atau pemasangan flowmeter pada jalur vertikal</strong> dapat membantu meningkatkan reliabilitas sistem.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p>Jika lonjakan flow menyebabkan pembacaan tidak stabil atau terpancung, memperlebar range Coriolis flowmeter bisa menjadi solusi sementara untuk menjaga kualitas data akumulasi. Namun, jika lonjakan terus terjadi, perlu dilakukan analisis lebih lanjut terhadap <strong>flashing, back pressure, atau pengaruh sistem downstream</strong>.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p>Dengan pemahaman yang lebih baik tentang efek tekanan rendah dan cara mengatasinya, reliabilitas pengukuran dalam sistem kriogenik dapat ditingkatkan secara signifikan.</p>
<!--kg-card-end: markdown-->
{% endraw %}