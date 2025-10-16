---
ghost_uuid: "45a5777b-7ed1-438a-89bd-9ffd1c30abbe"
title: "📘 Tutorial: Membaca Data Oksigen dan Suhu dari Systech Illinois ZR800 Menggunakan Industruino D21G"
date: "2025-05-03T18:06:12.000+07:00"
slug: "tutorial-membaca-data-oksigen-dan-suhu-dari-systech-illinois-zr800-menggunakan-industruino-d21g"
layout: "post"
excerpt: |
  🔍 Pendahuluan
  
  
  Dalam banyak sistem industri, pemantauan konsentrasi oksigen menjadi bagian penting dari proses keseluruhan. Systech Illinois ZR800 merupakan salah satu perangkat yang umum digunakan untuk tugas ini karena keandalannya dalam membaca kadar oksigen dengan sensor zirconia presisi tinggi.
  
  
  Dalam proyek ini, kita akan mempelajari cara membaca data oksigen dan suhu sensor dari perangkat ZR800 melalui port serial menggunakan Industruino D21G. Data yang diambil akan ditampilkan pada la
image: "/kiiota-blog/assets/media/45a5777b-7ed1-438a-89bd-9ffd1c30abbe-oxygen_analyzers_ZR810-1--1-.jpg"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "microcontroller"
  - "industrial"
  - "automation"
categories:
  - "microcontroller"
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
url: "https://blog.kiiota.com/tutorial-membaca-data-oksigen-dan-suhu-dari-systech-illinois-zr800-menggunakan-industruino-d21g/"
comment_id: "68150bfef733d603f79ee594"
reading_time: 5
access: true
comments: true
---

<!--kg-card-begin: markdown--><h3 id="%F0%9F%94%8D-pendahuluan">🔍 Pendahuluan</h3>
<p>Dalam banyak sistem industri, pemantauan konsentrasi oksigen menjadi bagian penting dari proses keseluruhan. Systech Illinois ZR800 merupakan salah satu perangkat yang umum digunakan untuk tugas ini karena keandalannya dalam membaca kadar oksigen dengan sensor <strong>zirconia</strong> presisi tinggi.</p>
<p>Dalam proyek ini, kita akan mempelajari cara membaca data oksigen dan suhu sensor dari perangkat ZR800 melalui port serial menggunakan Industruino D21G. Data yang diambil akan ditampilkan pada layar LCD dan juga dikirimkan ke output analog untuk integrasi lebih lanjut. Proyek ini cocok bagi pemula yang ingin memahami dasar komunikasi serial dan pengolahan data sensor dalam konteks sistem industri terintegrasi.</p>
<h3 id="%F0%9F%92%A0-persiapan">💠 Persiapan</h3>
<h4 id="mengapa-memilih-visual-studio-code-platformio">Mengapa Memilih Visual Studio Code + PlatformIO?</h4>
<p>Kombinasi Visual Studio Code dengan PlatformIO IDE menawarkan sejumlah keunggulan dibandingkan Arduino IDE, terutama untuk proyek yang lebih kompleks:</p>
<ul>
<li><strong>Manajemen Proyek Terstruktur</strong>: PlatformIO mendukung struktur proyek yang lebih modular dan profesional.</li>
<li><strong>Auto-completion dan IntelliSense</strong>: Fitur cerdas ini membantu mempercepat penulisan kode dan mengurangi kesalahan.</li>
<li><strong>Integrasi Git</strong>: Mempermudah pengelolaan versi kode menggunakan Git langsung dari editor.</li>
<li><strong>Dukungan Multi-board</strong>: Cocok jika Anda bekerja dengan berbagai jenis mikrokontroler dalam satu workspace.</li>
<li><strong>Manajemen Dependensi Otomatis</strong>: PlatformIO dapat secara otomatis mengunduh dan mengelola library yang dibutuhkan.</li>
</ul>
<p>PlatformIO cocok untuk pemula yang ingin naik kelas ke lingkungan pengembangan yang lebih profesional.</p>
<h4 id="perangkat-keras">Perangkat Keras</h4>
<p><img src="/kiiota-blog/assets/media/45a5777b-7ed1-438a-89bd-9ffd1c30abbe-INDIOD21G_SPL-1-.jpg" alt="Industruino D21G" loading="lazy"><br>
<em>Gambar 1: Industruino D21G, gambar diperoleh dari <a href="https://www.mouser.com/c/?marcom=173724648&ref=blog.kiiota.com">Mouser Electronics</a>.</em></p>
<p>Industruino D21G adalah mikrokontroler berbasis Arduino yang dirancang untuk aplikasi industri. Perangkat ini memiliki fitur seperti casing DIN-rail, layar LCD bawaan, terminal konektor yang solid, isolated digital input/output, isolated analog input/output presisi, chip serial RS-485, RTC, dan flash memory tertanam, dan kompatibilitas dengan modul komunikasi tambahan, menjadikannya cocok untuk proyek yang membutuhkan keandalan di lingkungan industri.</p>
<ul>
<li><strong>Systech Illinois ZR800</strong>: Perangkat pengukur oksigen.</li>
<li><strong>Industruino D21G</strong>: Platform mikrokontroler berbasis Arduino dengan LCD terintegrasi.</li>
<li><strong>Kabel USB</strong>: Untuk menghubungkan Industruino ke komputer untuk keperluan pemrograman.</li>
<li><strong>Kabel Serial RS-485</strong>: Untuk menghubungkan ZR800 ke Industruino.</li>
</ul>
<p><img src="/kiiota-blog/assets/media/45a5777b-7ed1-438a-89bd-9ffd1c30abbe-oxygen_analyzers_ZR810-1-.jpg" alt="Systech Illinois ZR800" loading="lazy"><br>
<em>Gambar 2: Systech Illinois ZR800, gambar diperoleh dari <a href="https://industrialphysics.com/product/zr800-oxygen-analyzers/?ref=blog.kiiota.com">Industrial Physics</a>.</em></p>
<p>ZR800 menggunakan komunikasi serial RS-485 untuk mengirimkan data pengukuran ke Industruino. Industruino D21G telah dilengkapi dengan port RS-485 secara default, sehingga tidak memerlukan modul tambahan untuk konektivitas ini. Konfigurasi wiring tetap perlu memperhatikan polaritas (A/B) dan kecepatan baudrate yang disesuaikan dengan pengaturan default dari ZR800.</p>
<p>ZR800 dilengkapi dengan sensor berbasis zirconia, yang digunakan untuk mengukur konsentrasi oksigen secara presisi dalam berbagai aplikasi industri. Sensor zirconia bekerja berdasarkan prinsip elektrokimia padat dan mampu memberikan pembacaan yang stabil dan tahan terhadap lingkungan ekstrem, menjadikannya ideal untuk pemantauan gas proses, kontrol kualitas, dan sistem keamanan termasuk sebagai oxygen sensor pada sistem pembakaran kendaraan.</p>
<h4 id="perangkat-lunak">Perangkat Lunak</h4>
<ul>
<li><strong>Git for Windows</strong>: Sistem kontrol versi.</li>
<li><strong>Visual Studio Code (VSCode)</strong>: Editor kode sumber.</li>
<li><strong>PlatformIO IDE</strong>: Ekstensi untuk VSCode yang mendukung pengembangan proyek embedded.</li>
<li><strong>Platform Industruino D21G</strong>: Dapat diinstal melalui PlatformIO.</li>
</ul>
<blockquote>
<p>&quot;<strong>Catatan</strong>: Platform Industruino D21G yang digunakan dalam proyek ini merupakan hasil penyesuaian pribadi yang telah saya lakukan pada proyek sebelumnya. Karena bahkan sampai saat ini belum tersedia dukungan resmi dari pihak Industruino untuk PlatformIO, saya memodifikasi sendiri konfigurasi board dan file platform agar kompatibel. Tujuan utama penyesuaian ini adalah untuk memanfaatkan kemudahan manajemen proyek, integrasi library, dan fitur produktivitas lain yang ditawarkan PlatformIO.&quot;</p>
</blockquote>
<h3 id="%E2%9A%99%EF%B8%8F-langkah-langkah-instalasi">⚙️ Langkah-langkah Instalasi</h3>
<ol>
<li>
<p><strong>Instal Git for Windows</strong> dari <a href="https://git-scm.com/download/win?ref=blog.kiiota.com">git-scm.com</a>.</p>
</li>
<li>
<p><strong>Instal Visual Studio Code</strong>: Unduh dan instal dari <a href="https://code.visualstudio.com/?ref=blog.kiiota.com">situs resmi VSCode</a>.</p>
</li>
<li>
<p><strong>Instal PlatformIO IDE</strong>:</p>
<ul>
<li>Buka VSCode.</li>
<li>Masuk ke Extension Manager.</li>
<li>Cari &quot;PlatformIO IDE&quot; dan instal ekstensi tersebut.</li>
</ul>
</li>
<li>
<p><strong>Instal Platform Industruino D21G</strong>:</p>
<ul>
<li>Buka PlatformIO Home.</li>
<li>Masuk ke menu <em>Platforms</em> &gt; <em>Advanced Installation</em>.</li>
<li>Masukkan URL berikut: <code>https://github.com/kumajaya/platform-atmelsam#industruino</code> dan klik <em>Install</em>.</li>
<li>Setelah instalasi selesai, Industruino D21G akan tersedia dalam menu pemilihan board di PlatformIO.</li>
</ul>
</li>
<li>
<p><strong>Kloning Repository ZR800</strong>:</p>
<ul>
<li>Buka terminal atau command prompt.</li>
<li>Jalankan perintah: <code>git clone https://github.com/kumajaya/zr800.git</code></li>
<li>Buka folder proyek di VSCode.</li>
</ul>
</li>
</ol>
<h3 id="%F0%9F%A7%AA-struktur-proyek">🧪 Struktur Proyek</h3>
<p>Berikut adalah struktur folder dalam proyek:</p>
<ul>
<li><code>include/</code>: Berisi file header.</li>
<li><code>lib/</code>: Berisi pustaka tambahan.</li>
<li><code>src/</code>: Berisi kode sumber utama.</li>
<li><code>test/</code>: Berisi kode untuk pengujian.</li>
<li><code>platformio.ini</code>: File konfigurasi untuk PlatformIO.</li>
</ul>
<h3 id="%F0%9F%93%91-bagian-kode-c-untuk-membaca-data-serial-zr800">📑 Bagian Kode C++ untuk Membaca Data Serial ZR800</h3>
<pre><code class="language-c++">/*
  Copyright (c) 2025 Ketut P. Kumajaya.  All right reserved.

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Suite 500, Boston, MA 02110-1335, USA
*/

#include &quot;SerialRS485.h&quot;

void SerialRS485Class::begin(unsigned long baudrate)
{
    RS485.setPins(1, 9, 10); // Set different pins for DE and RE
    RS485.begin(baudrate);
    RS485.receive(); // enable reception
}

String SerialRS485Class::request(const char *command)
{
    String response = &quot;&quot;;

    RS485.beginTransmission(); // enable transmission
    RS485.print(command);
    RS485.endTransmission(); // disable transmission
    unsigned long startTime = millis();
    while (millis() - startTime &lt; 150) // 150 ms timeout
    {
        if (RS485.available())
        {
            char c = RS485.read();
            response += c;
            startTime = millis(); // reset timeout if data is received
        }
    }

    return response;
}

SerialRS485Class SerialRS485;
</code></pre>
<h3 id="%F0%9F%94%A4-kompilasi-dan-unggah-kode">🔤 Kompilasi dan Unggah Kode</h3>
<ol>
<li><strong>Buka Proyek di VSCode</strong>: Pastikan Anda membuka folder proyek <code>zr800</code>.</li>
<li><strong>Pilih Board</strong>: Pastikan board yang dipilih adalah Industruino D21G.</li>
<li><strong>Kompilasi Proyek</strong>: Klik ikon centang (✔️) di bagian bawah VSCode untuk memulai proses kompilasi.</li>
<li><strong>Unggah Kode ke Industruino</strong>: Klik ikon panah kanan (➡️) untuk mengunggah kode ke perangkat.</li>
</ol>
<h3 id="%F0%9F%93%8A-fitur-utama">📊 Fitur Utama</h3>
<ul>
<li><strong>Pembacaan Data</strong>: Membaca data oksigen dan suhu dari ZR800 melalui port serial.</li>
<li><strong>Tampilan LCD</strong>: Menampilkan data yang diperoleh pada layar LCD Industruino.</li>
<li><strong>Output Analog</strong>: Mengirimkan data ke output analog untuk keperluan lain.</li>
<li><strong>Pengaturan</strong>: Mengubah kecerahan LCD, baudrate, rentang pembacaan, dan kalibrasi output analog.</li>
</ul>
<h3 id="%F0%9F%94%8E-catatan-reflektif">🔎 Catatan Reflektif</h3>
<p>Di lingkungan industri yang masih konservatif dan mengandalkan solusi tradisional, <strong>kemampuan pemrograman dan pemanfaatan solusi open source menjadi nilai tambah yang signifikan</strong>. Dengan keterampilan ini, kita dapat mengembangkan sistem yang <strong>lebih fleksibel, mudah dikustomisasi, dan hemat biaya</strong> dibanding pendekatan proprietary. Solusi open source memungkinkan <strong>pengembangan cepat tanpa ketergantungan vendor</strong>, serta membuka ruang untuk <strong>eksperimen dan inovasi berbiaya rendah</strong>. Meskipun resistensi kadang muncul dari pihak yang belum terbiasa dengan pendekatan ini, <strong>generasi engineer baru yang menguasai Python, C/C++, atau JavaScript semakin banyak bermunculan</strong>. Perusahaan yang progresif perlu melihat ini sebagai peluang untuk membina dan memfasilitasi pengembangan talenta internal menuju otomatisasi industri yang lebih cerdas.</p>
<h3 id="%F0%9F%A7%A0-kesimpulan">🧠 Kesimpulan</h3>
<p>Proyek ini dimulai dari masalah sederhana, yaitu <strong>kerusakan pada analog output ZR800</strong>. Namun, hal tersebut justru mendorong untuk mencari solusi yang lebih fleksibel dan terjangkau menggunakan pemrograman dan teknologi open-source, yang membawa manfaat lebih besar dari sekadar perbaikan masalah awal.</p>
<p>Proyek ini memberikan pemahaman dasar tentang komunikasi serial dan pengolahan data sensor dalam sistem embedded. Dengan menggunakan Industruino D21G, kita dapat dengan mudah mengintegrasikan perangkat seperti ZR800 ke dalam sistem monitoring atau kontrol.</p>
<p>Selain itu, penggunaan PlatformIO memberikan banyak keuntungan, terutama dalam hal manajemen proyek yang terstruktur, integrasi library yang efisien, serta proses build dan upload yang lebih fleksibel. Meskipun awalnya membutuhkan usaha keras untuk kompatibilitas dengan Industruino D21G, hasilnya sepadan dengan kemudahan dan produktivitas yang diperoleh selama pengembangan.</p>
<h4 id="%F0%9F%92%A1-kode-sumber-proyek-ini-tersedia-secara-terbuka">💡 Kode sumber proyek ini tersedia secara terbuka.</h4>
<p>Silakan kunjungi <a href="https://github.com/kumajaya/zr800?ref=blog.kiiota.com">github.com/kumajaya/zr800</a> dan coba sendiri — mungkin Anda bisa mengembangkannya lebih jauh sesuai kebutuhan.</p>
<p align="center"> <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://github.com/kumajaya/zr800&size=150x150" alt="QR Code to GitHub Repository"> </p>
<!--kg-card-end: markdown-->