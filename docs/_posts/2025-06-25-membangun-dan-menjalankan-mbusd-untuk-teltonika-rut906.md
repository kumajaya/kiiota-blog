---
ghost_uuid: "4fa12608-a32c-44d9-9ac2-191690cf93b0"
title: "Membangun dan Menjalankan mbusd untuk Teltonika RUT906"
date: "2025-06-25T13:35:13.000+07:00"
slug: "membangun-dan-menjalankan-mbusd-untuk-teltonika-rut906"
layout: "post"
excerpt: |
  💡 Teltonika RUT906: Router Kecil, Kemampuan Besar
  
  
  Teltonika RUT906 adalah router industri ringkas berbasis Linux (RutOS/OpenWrt) yang mendukung konektivitas seluler, ethernet, WiFi, GPS, dan I/O digital. Dirancang untuk otomasi industri, perangkat ini sering digunakan sebagai edge device dalam ekosistem IIoT, SCADA, dan sistem telemetri.
  
  
  Salah satu kemungkinan RUT906 adalah kemampuannya menjalankan daemon pengguna seperti mbusd, untuk komunikasi Modbus TCP↔RTU. Namun, tidak semua daemon ter
image: "https://images.unsplash.com/photo-1554098415-4052459dc340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fHJvdXRlcnxlbnwwfHx8fDE3NTA3NTM0MjN8MA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@hostreviews?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Stephen Phillips - Hostreviews.co.uk</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
categories:
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
url: "https://blog.kiiota.com/membangun-dan-menjalankan-mbusd-untuk-teltonika-rut906/"
comment_id: "685b9470496d78041aafa209"
reading_time: 3
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h2 id="%F0%9F%92%A1-teltonika-rut906-router-kecil-kemampuan-besar">💡 Teltonika RUT906: Router Kecil, Kemampuan Besar</h2>
<p>Teltonika RUT906 adalah router industri ringkas berbasis Linux (RutOS/OpenWrt) yang mendukung konektivitas seluler, ethernet, WiFi, GPS, dan I/O digital. Dirancang untuk otomasi industri, perangkat ini sering digunakan sebagai edge device dalam ekosistem IIoT, SCADA, dan sistem telemetri.</p>
<p>Salah satu kemungkinan RUT906 adalah kemampuannya menjalankan daemon pengguna seperti mbusd, untuk komunikasi Modbus TCP↔RTU. Namun, tidak semua daemon tersedia dalam firmware default-nya. Karena itu, kadang kita perlu menyusun sendiri binary yang sesuai—terutama untuk deployment ringan, statik, dan tanpa dependensi eksternal.</p>
<hr>
<h2 id="%F0%9F%94%A7-persiapan-environment">🔧 Persiapan Environment</h2>
<p><strong>Asumsi:</strong> Anda telah melakukan kompilasi awal SDK RUT906 sesuai dengan petunjuk resmi dari Teltonika, sehingga direktori <code>staging_dir</code> telah tersedia dan terisi lengkap.</p>
<pre><code class="language-sh">cd ~/rut906
export STAGING_DIR=~/rut906/rutos-ramips-rut9m-sdk/staging_dir
export PATH=$STAGING_DIR/toolchain-mipsel_24kc_gcc-8.4.0_musl/bin:$PATH
</code></pre>
<hr>
<h2 id="%E2%9A%99%EF%B8%8F-toolchaincmake">⚙️ toolchain.cmake</h2>
<p><code>nano toolchain.cmake</code>:</p>
<pre><code class="language-cmake">set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_C_COMPILER   mipsel-openwrt-linux-gcc)
set(CMAKE_CXX_COMPILER mipsel-openwrt-linux-g++)
set(CMAKE_FIND_ROOT_PATH ~/rut906/rutos-ramips-rut9m-sdk/staging_dir/toolchain-mipsel_24kc_gcc-8.4.0_musl)
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
set(CMAKE_CXX_FLAGS &quot;${CMAKE_CXX_FLAGS} -static-libgcc -static-libstdc++&quot;)
</code></pre>
<hr>
<h2 id="%F0%9F%94%A8-build-steps">🔨 Build Steps</h2>
<pre><code class="language-sh">git clone https://github.com/kumajaya/mbusd.git --depth=1
mkdir -p mbusd/build
cd mbusd/build
cmake -DCMAKE_TOOLCHAIN_FILE=../../toolchain.cmake -DCMAKE_INSTALL_PREFIX=/usr ..
make
mipsel-openwrt-linux-strip mbusd
</code></pre>
<p>Verifikasi output:</p>
<pre><code class="language-sh">file mbusd
# Hasil yang diharapkan: statically linked, stripped MIPS ELF
</code></pre>
<hr>
<h2 id="%F0%9F%8E%81-instalasi-nano-dan-mbusd">🎁 Instalasi <code>nano</code> dan <code>mbusd</code></h2>
<p>Sebagian pengguna mungkin nyaman dengan <code>vi</code>, tapi saya pribadi lebih cocok dengan <code>nano</code>. Sayangnya, <code>nano</code> tidak tersedia secara default di RutOS. Berikut langkah-langkah yang saya lakukan untuk memasangnya di RUT906 yang berbasis OpenWrt 21.02.0 (<code>mipsel_24kc</code>):</p>
<h3 id="1-salin-mbusd-kemudian-login-ke-rut906-via-ssh">1. Salin <code>mbusd</code> kemudian login ke RUT906 via <code>ssh</code></h3>
<pre><code class="language-sh">scp mbusd root@192.168.1.1:/home/root/
ssh root@192.168.1.1
</code></pre>
<p>Gunakan password yang sama dengan akses WebUI.</p>
<h3 id="2-periksa-arsitektur-sistem-dan-versi">2. Periksa arsitektur sistem dan versi</h3>
<pre><code class="language-sh">cat /etc/os-release
</code></pre>
<p>Pastikan nilai <code>OPENWRT_ARCH</code> dan <code>VERSION</code> sesuai.</p>
<h3 id="3-unduh-dan-pasang-nano">3. Unduh dan pasang <code>nano</code></h3>
<p>Saya menggunakan paket dari repositori OpenWrt 21.02.0:</p>
<pre><code class="language-sh">wget https://downloads.openwrt.org/releases/21.02.0/packages/mipsel_24kc/packages/nano-full_7.2-2_mipsel_24kc.ipk
opkg install nano-full_7.2-2_mipsel_24kc.ipk
</code></pre>
<h3 id="4-atasi-error-xterm-256color">4. Atasi error <code>xterm-256color</code></h3>
<p>Saat pertama kali dijalankan, muncul error:</p>
<pre><code>Error opening terminal: xterm-256color.
</code></pre>
<p>Solusinya, tambahkan environment variable berikut:</p>
<pre><code class="language-sh">export TERMINFO=/usr/local/usr/share/terminfo
</code></pre>
<p>Agar permanen, tambahkan ke <code>/etc/profile</code>.</p>
<h3 id="5-perbaiki-error-nanorc">5. Perbaiki error <code>nanorc</code></h3>
<p><code>nano</code> juga mengeluh soal file highlight yang tidak ditemukan:</p>
<pre><code>Error in /etc/nanorc on line 6: Error expanding /usr/share/nano/*.nanorc
</code></pre>
<p>Solusinya: ubah baris <code>/usr/share/nano/*.nanorc</code> menjadi <code>/usr/local/usr/share/nano/*.nanorc</code> di <code>/etc/nanorc</code>.</p>
<hr>
<p>Setelah semua beres, <code>nano</code> bisa digunakan dengan nyaman tanpa perlu mengingat kombinasi <code>:wq</code>. Editor favorit saya kini resmi bisa dipakai di RUT906.</p>
<blockquote>
<p><code>vi</code> boleh tetap tinggal di sistem, tapi saya tidak akan memanggilnya lagi 😄</p>
</blockquote>
<hr>
<h2 id="%F0%9F%A7%A9-konfigurasi-uci">🧩 Konfigurasi UCI</h2>
<p><code>nano /etc/config/mbusd</code>:</p>
<pre><code class="language-sh">config instance '1'
    option enabled '1'
    option config_file '/etc/mbusd/mbusd-rs485.conf'
    option log_output '-'
    option readonly '-o'
config instance '2'
    option enabled '0'
    option config_file '/etc/mbusd/mbusd-rs232.conf'
    option log_output '-'
    option readonly '-o'
</code></pre>
<p>Tambahkan instance lain jika diperlukan.</p>
<hr>
<h2 id="%F0%9F%97%B3%EF%B8%8F-skrip-init-etcinitdmbusd">🗳️ Skrip Init <code>/etc/init.d/mbusd</code></h2>
<p><code>nano /etc/init.d/mbusd</code>:</p>
<pre><code class="language-sh">#!/bin/sh /etc/rc.common

USE_PROCD=1
START=99
STOP=10

CONFIG=&quot;mbusd&quot;
APP=&quot;/usr/local/usr/bin/mbusd&quot;

set_service() {
    local section=&quot;$1&quot;

    config_get ENABLED &quot;$section&quot; &quot;enabled&quot; &quot;0&quot;
    [ &quot;$ENABLED&quot; != &quot;1&quot; ] &amp;&amp; return 1

    config_get config_file &quot;$section&quot; &quot;config_file&quot; &quot;/etc/mbusd/mbusd-rs485.conf&quot;
    config_get log_output &quot;$section&quot; &quot;log_output&quot; &quot;-&quot;
    config_get readonly &quot;$section&quot; &quot;readonly&quot; &quot; &quot;

    procd_open_instance &quot;$section&quot;
    procd_set_param command &quot;$APP&quot; -d -v2 -L &quot;$log_output&quot; -c &quot;$config_file&quot; &quot;$readonly&quot;
    procd_set_param respawn ${respawn_threshold:-0} ${respawn_timeout:-6} ${respawn_retry:-0}
    procd_close_instance
}

start_service() {
    config_load &quot;$CONFIG&quot;
    config_foreach set_service
}

service_triggers() {
    procd_add_reload_trigger &quot;$CONFIG&quot;
}
</code></pre>
<hr>
<h2 id="%F0%9F%9A%80-aktivasi-service">🚀 Aktivasi Service</h2>
<pre><code class="language-sh">chmod +x /etc/init.d/mbusd
/etc/init.d/mbusd enable
/etc/init.d/mbusd start
</code></pre>
<hr>
<h2 id="%F0%9F%93%A6-status-final">📦 Status Final</h2>
<ul>
<li>✅ Binary: statically linked, stripped, MIPS32 R2</li>
<li>✅ Multi-instance UCI support</li>
<li>✅ Init-script terintegrasi dengan <code>procd</code></li>
<li>✅ Akses Modbus dibatasi <code>read-only</code></li>
</ul>
<hr>
<h2 id="%E2%9C%8D%EF%B8%8F-penutup">✍️ Penutup</h2>
<p>Proses membangun <code>mbusd</code> untuk RUT906 ini bukan sekadar soal kompilasi, tapi juga tentang memahami ekosistem perangkat embedded dan menyesuaikan build agar benar-benar sesuai dengan kebutuhan sistem target.</p>
<p>Dengan toolchain yang tepat, konfigurasi CMake yang presisi, dan sedikit intuisi teknikal, kita dapat menghasilkan binary statik yang siap digunakan tanpa dependensi tambahan, cocok untuk perangkat industri yang mengutamakan keandalan.</p>
<p>Semoga dokumentasi ini bisa menjadi referensi bagi Anda yang ingin men-deploy layanan serupa di perangkat Teltonika lainnya, atau sekadar menambah wawasan mengenai proses kompilasi lintas platform. Motif sebenarnya di sini adalah mencegah akses <code>write</code> dari pihak lain ke perangkat Modbus yang terhubung.</p>
<p>Jika Anda menemukan bagian yang bisa diperbaiki, atau ingin berdiskusi seputar integrasi layanan di RUT906, jangan ragu untuk menghubungi saya. Mari sama-sama kita dorong interoperabilitas di dunia IIoT! 🚀</p>
<!--kg-card-end: markdown-->
{% endraw %}