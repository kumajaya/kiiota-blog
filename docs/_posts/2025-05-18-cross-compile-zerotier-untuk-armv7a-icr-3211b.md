---
ghost_uuid: "c765ead4-cedf-4223-969a-c72f381be987"
title: "Cross Compile ZeroTier untuk armv7a Advantech ICR-3211B"
date: "2025-05-18T13:34:52.000+07:00"
slug: "cross-compile-zerotier-untuk-armv7a-icr-3211b"
layout: "post"
excerpt: |
  Pendahuluan
  
  
  ZeroTier adalah solusi jaringan global yang menggabungkan fitur VPN, SD-WAN, dan konektivitas IoT dalam satu platform. Dengan ZeroTier, pengguna dapat menghubungkan perangkat mereka ke jaringan pribadi yang aman tanpa perlu konfigurasi kompleks atau perangkat keras tambahan.
  
  
  Beberapa fitur utama ZeroTier:
  
  
   * Koneksi Peer-to-Peer: Perangkat dapat berkomunikasi langsung tanpa harus melewati server pusat.
   * Keamanan Tinggi: Data dienkripsi end-to-end, memastikan privasi dan keama
image: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHZwbnxlbnwwfHx8fDE3NDczODg4NjN8MA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@privecstasy?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Privecstasy</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "zerotier"
  - "icr-3200"
categories:
  - "zerotier"
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
url: "https://blog.kiiota.com/cross-compile-zerotier-untuk-armv7a-icr-3211b/"
comment_id: "6828a025f733d603f79ee9b0"
reading_time: 6
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h2 id="pendahuluan"><strong>Pendahuluan</strong></h2>
<p><strong>ZeroTier</strong> adalah solusi jaringan global yang menggabungkan fitur VPN, SD-WAN, dan konektivitas IoT dalam satu platform. Dengan ZeroTier, pengguna dapat menghubungkan perangkat mereka ke jaringan pribadi yang aman tanpa perlu konfigurasi kompleks atau perangkat keras tambahan.</p>
<p><strong>Beberapa fitur utama ZeroTier:</strong></p>
<ul>
<li><strong>Koneksi Peer-to-Peer</strong>: Perangkat dapat berkomunikasi langsung tanpa harus melewati server pusat.</li>
<li><strong>Keamanan Tinggi</strong>: Data dienkripsi end-to-end, memastikan privasi dan keamanan komunikasi.</li>
<li><strong>Kemudahan Penggunaan</strong>: Instalasi ringan dan dapat digunakan di berbagai sistem operasi serta perangkat.</li>
<li><strong>Manajemen Jaringan</strong>: Memungkinkan pengguna untuk mengontrol dan mengelola jaringan mereka melalui antarmuka web yang intuitif.</li>
</ul>
<blockquote>
<p>&quot;Jika Anda ingin mencoba atau mempelajari lebih lanjut, kunjungi <a href="https://www.zerotier.com/?ref=blog.kiiota.com">situs resmi ZeroTier</a>.&quot;</p>
</blockquote>
<p>Artikel ini menjelaskan <strong>cara melakukan cross-compile ZeroTier client untuk perangkat ICR-3211B dari Advantech</strong>, khususnya berbasis <strong>ARMv7a 32-bit</strong>. Metode ini berguna untuk perangkat seperti router atau sistem berbasis embedded Linux lainnya.</p>
<hr>
<h2 id="persiapan-cross-compile"><strong>Persiapan Cross-Compile</strong></h2>
<ul>
<li><strong>Host Linux atau WSL (Windows Subsystem for Linux)</strong>: Menggunakan distribusi Ubuntu, Debian, atau sejenisnya.</li>
<li><strong>Toolchain khusus ICR-3211B</strong>: Dapat diunduh dari <a href="https://bitbucket.org/bbsmartworx/toolchains/src/master/?ref=blog.kiiota.com">Advantech Toolchains Repository</a>, lebih spesifik <a href="https://bitbucket.org/bbsmartworx/toolchains/raw/ca59bfd00eacd7c86e3d9d9560c01dade4198503/deb/gcc-icr-v3-armv7-linux-gnueabi-7.4.0-3.x86_64.deb?ref=blog.kiiota.com">V3 routers (ARM Cortex-A8)</a> untuk target keluarga ICR-3200.</li>
<li><strong>Koneksi internet</strong> untuk mengunduh dependensi.</li>
</ul>
<h3 id="1-instalasi-toolchain-cross-compiler"><strong>1. Instalasi Toolchain Cross-Compiler</strong></h3>
<pre><code class="language-bash">sudo apt-get install git make pkg-config build-essential  
sudo dpkg -i gcc-icr-v3-armv7-linux-gnueabi-7.4.0-3.x86_64.deb  
</code></pre>
<p>Toolchain akan terinstal di <strong><code>/opt/toolchain/gcc-icr-v3-armv7-linux-gnueabi/</code></strong>.</p>
<h3 id="2-clone-kode-sumber-zerotier"><strong>2. Clone Kode Sumber ZeroTier</strong></h3>
<pre><code class="language-bash">git clone https://github.com/zerotier/ZeroTierOne.git --depth=1  
cd ZeroTierOne  
</code></pre>
<p>Opsi <strong><code>--depth=1</code></strong> memastikan hanya commit terbaru yang diunduh untuk menghemat bandwidth.</p>
<h3 id="3-patch-untuk-perbaikan-deteksi-arsitektur-dan-optimasi"><strong>3. Patch untuk Perbaikan Deteksi Arsitektur dan Optimasi</strong></h3>
<p>Patch berikut disiapkan untuk memperbaiki deteksi arsitektur saat kompilasi dan optimasi ARM Cortex-A8 ICR-3211B. ARMv7a tidak memiliki dukungan native penuh untuk operasi atomic di semua prosesor, sehingga beberapa operasi seperti <strong><code>std::atomic</code></strong> pada C++ atau <strong><code>__atomic_</code></strong> pada GCC memerlukan pustaka tambahan untuk bekerja dengan benar. Untuk menghindari error saat linking, <strong><code>override LDFLAGS+=-latomic</code></strong> ditambahkan. Simpan patch berikut sebagai <strong><code>make-linux-Fix-architecture-detection.patch</code></strong>:</p>
<pre><code class="language-patch">From 0a82874f6d1170205fa50400b3904bcab1e7da56 Mon Sep 17 00:00:00 2001
From: Ketut Kumajaya &lt;ketut.kumajaya@gmail.com&gt;
Date: Sat, 17 May 2025 21:19:46 +0700
Subject: [PATCH] make-linux: Fix architecture detection

---
 make-linux.mk | 7 ++++++-
 1 file changed, 6 insertions(+), 1 deletion(-)

diff --git a/make-linux.mk b/make-linux.mk
index efc1bad..e47397b 100644
--- a/make-linux.mk
+++ b/make-linux.mk
@@ -334,7 +334,12 @@ endif

 # ARM32 hell -- use conservative CFLAGS
 ifeq ($(ZT_ARCHITECTURE),3)
-       ifeq ($(shell if [ -e /usr/bin/dpkg ]; then dpkg --print-architecture; fi),armel)
+       ifeq ($(shell $(CC) -dM -E - &lt;/dev/null | grep -q __ARM_ARCH_7A__ &amp;&amp; echo 1),1)
+               override CFLAGS+=-march=armv7-a -mtune=cortex-a8 -mfloat-abi=softfp -mfpu=vfpv3 -O2
+               override CXXFLAGS+=-march=armv7-a -mtune=cortex-a8 -mfloat-abi=softfp -mfpu=vfpv3 -O2
+               override LDFLAGS+=-latomic
+               ZT_USE_ARM32_NEON_ASM_CRYPTO=0
+       else ifeq ($(shell $(CC) -dM -E - &lt;/dev/null | grep -q __ARMEL__ &amp;&amp; echo 1),1)
                override CFLAGS+=-march=armv5t -mfloat-abi=soft -msoft-float -mno-unaligned-access -marm
                override CXXFLAGS+=-march=armv5t -mfloat-abi=soft -msoft-float -mno-unaligned-access -marm
                ZT_USE_ARM32_NEON_ASM_CRYPTO=0
--
2.43.0
</code></pre>
<p>kemudian terapkan ke kode sumber ZeroTier:</p>
<pre><code class="language-bash">git apply make-linux-Fix-architecture-detection.patch
</code></pre>
<h3 id="4-konfigurasi-cross-compile"><strong>4. Konfigurasi Cross Compile</strong></h3>
<p>Konfigurasi toolchain cross compile sebagai berikut:</p>
<pre><code class="language-bash">export CC=/opt/toolchain/gcc-icr-v3-armv7-linux-gnueabi/bin/armv7-linux-gnueabi-gcc
export CXX=/opt/toolchain/gcc-icr-v3-armv7-linux-gnueabi/bin/armv7-linux-gnueabi-g++
export LD=/opt/toolchain/gcc-icr-v3-armv7-linux-gnueabi/bin/armv7-linux-gnueabi-ld
</code></pre>
<h3 id="5-kompilasi-zerotier"><strong>5. Kompilasi ZeroTier</strong></h3>
<p>Kompilasi ZeroTier dengan sejumlah thread prosesor yang tersedia agar prosesnya berlangsung cepat. Bila perlu, lakukan <strong><code>strip</code></strong> setelah kompilasi agar ukuran binary ZeroTier menjadi sangat kecil:</p>
<pre><code class="language-bash">make -j$(nproc)
/opt/toolchain/gcc-icr-v3-armv7-linux-gnueabi/bin/armv7-linux-gnueabi-strip --strip-all zerotier-one
</code></pre>
<h3 id="6-menyalin-binary-ke-target"><strong>6. Menyalin Binary ke Target</strong></h3>
<p>Setelah kompilasi selesai, binary ZeroTier yang dihasilkan dapat ditemukan di direktori <em><code>ZeroTierOne/</code></em>. Anda bisa menyalinnya ke perangkat menggunakan SCP atau metode lain:</p>
<pre><code class="language-bash">scp zerotier-one root@ip-target:/usr/sbin/
</code></pre>
<h3 id="7-verifikasi"><strong>7. Verifikasi</strong></h3>
<p>Login ke perangkat ARMv7a dan jalankan binary untuk memastikan berhasil:</p>
<pre><code class="language-bash">ssh root@ip-target
cd /usr/sbin
ln -sf zerotier-one zerotier-idtool
ln -sf zerotier-one zerotier-cli
zerotier-one -h
</code></pre>
<hr>
<h2 id="menjalankan-zerotier-di-icr-3211b"><strong>Menjalankan ZeroTier di ICR-3211B</strong></h2>
<p>Pada <strong>sistem minimalis seperti ICR-3211B</strong>, layanan <strong>systemd</strong> tidak tersedia, sehingga tidak bisa menggunakan <strong><code>systemctl</code></strong>. Sebagai solusi, kita akan menggunakan <strong>skrip init</strong> untuk mengelola ZeroTier secara langsung dan memastikan layanan tetap berjalan setelah reboot atau jika mengalami crash.</p>
<h3 id="1-menambahkan-skrip-startup-dan-monitoring-ke-sistem"><strong>1. Menambahkan Skrip Startup dan Monitoring ke Sistem</strong></h3>
<p>Simpan skrip berikut sebagai <strong><code>/etc/rc.d/init.d/zerotier-one</code></strong>:</p>
<pre><code class="language-bash">#!/bin/sh

DAEMON=&quot;zerotier-one&quot;
DATADIR=&quot;/var/data/zerotier-one&quot;
PIDFILE=&quot;$DATADIR/$DAEMON.pid&quot;
WALL_CHAIN=&quot;srv_$DAEMON&quot;
LOCAL_PORT=9993
EXTRA_OPTS=&quot;-d -p$LOCAL_PORT $DATADIR&quot;

. /etc/rc.d/init.d/functions

start() {
    if [ -f &quot;$PIDFILE&quot; ] &amp;&amp; ps | grep -v grep | grep &quot;$(cat $PIDFILE)&quot; &gt; /dev/null 2&gt;&amp;1; then
        echo &quot;$DAEMON is already running.&quot;
    else
        echo &quot;Starting $DAEMON...&quot;
        mkdir -p &quot;$DATADIR&quot; /var/lib
        ln -sf &quot;$DATADIR&quot; /var/lib/zerotier-one
        add_chain $WALL_CHAIN
        add_rule $WALL_CHAIN udp $LOCAL_PORT
        add_chain6 $WALL_CHAIN
        add_rule6 $WALL_CHAIN udp $LOCAL_PORT
        logger -t &quot;$DAEMON&quot; &quot;$DAEMON service start&quot;
        nohup &quot;$DAEMON&quot; $EXTRA_OPTS &amp;&gt; /dev/null &amp;
        echo $! &gt; &quot;$PIDFILE&quot;
        echo &quot;Started.&quot;
    fi
}

stop() {
    if [ -f &quot;$PIDFILE&quot; ] &amp;&amp; ps | grep -v grep | grep &quot;$(cat $PIDFILE)&quot; &gt; /dev/null 2&gt;&amp;1; then
        echo &quot;Stopping $DAEMON...&quot;
        kill -9 &quot;$(cat $PIDFILE)&quot; &amp;&amp; rm -f &quot;$PIDFILE&quot;
        sleep 2
        del_chain $WALL_CHAIN
        del_chain6 $WALL_CHAIN
        logger -t &quot;$DAEMON&quot; &quot;$DAEMON service stop&quot;
        echo &quot;Stopped.&quot;
    else
        echo &quot;$DAEMON is not running.&quot;
    fi
}

status() {
    echo -n &quot;$DAEMON is &quot;
    if [ -f &quot;$PIDFILE&quot; ] &amp;&amp; ps | grep -v grep | grep &quot;$(cat $PIDFILE)&quot; &gt; /dev/null 2&gt;&amp;1; then
        echo &quot;running (PID: $(cat $PIDFILE))&quot;
    else
        echo &quot;not running.&quot;
    fi
}

restart() {
    echo &quot;Restarting $DAEMON...&quot;
    stop
    sleep 3
    start
}

case &quot;$1&quot; in
    start) start ;;
    stop) stop ;;
    restart) restart ;;
    status) status ;;
    *) echo &quot;Usage: $0 {start|stop|restart|status}&quot; ;;
esac

exit 0
</code></pre>
<p>Simpan skrip berikut sebagai <strong><code>/usr/sbin/zerotier-watchdog</code></strong> untuk memastikan layanan selalu tetap berjalan:</p>
<pre><code class="language-bash">#!/bin/sh

DAEMON=&quot;zerotier-one&quot;
PIDFILE=&quot;/var/data/zerotier-one/$DAEMON.pid&quot;
CHECK_INTERVAL=15  # Check every 15 seconds

while true; do
    if [ -f &quot;$PIDFILE&quot; ] &amp;&amp; ps | grep -v grep | grep &quot;$(cat $PIDFILE)&quot; &gt; /dev/null 2&gt;&amp;1; then
        echo &quot;$DAEMON is running.&quot;
    else
        logger -t &quot;$DAEMON&quot; &quot;$DAEMON stopped. Restarting...&quot;
        service $DAEMON start
    fi
    sleep &quot;$CHECK_INTERVAL&quot;
done
</code></pre>
<h3 id="2-mengaktifkan-skrip-startup"><strong>2. Mengaktifkan Skrip Startup</strong></h3>
<p>Setelah menyimpan skrip di <strong><code>/etc/rc.d/init.d/zerotier</code></strong>, jalankan perintah berikut untuk <strong>mengaktifkan startup otomatis</strong>:</p>
<pre><code class="language-bash">chmod +x /etc/rc.d/init.d/zerotier-one
cd /etc/rc.d/rc.start
ln -sf /etc/rc.d/init.d/zerotier-one rc.99.zerotier-one
</code></pre>
<p>Di halaman web ICR-3211B, ubah <strong>startup script</strong> menjadi:</p>
<pre><code class="language-bash">#!/bin/sh
#
# This script will be executed *after* all the other init scripts.
# You can put your own initialization stuff in here.
chmod 777 /dev/net/tun

nohup zerotier-watchdog &amp;&gt; /dev/null &amp;
</code></pre>
<h3 id="3-verifikasi-debugging"><strong>3. Verifikasi &amp; Debugging</strong></h3>
<ul>
<li><strong>Pastikan layanan berjalan:</strong></li>
</ul>
<pre><code class="language-bash">service zerotier-one start
service zerotier-one status
ip a
</code></pre>
<ul>
<li><strong>Periksa log jika ada masalah:</strong><br>
Setelah reboot, periksa kembali log dan status jaringan melalui antarmuka web ICR-3211B untuk memastikan ZeroTier berjalan normal.</li>
</ul>
<hr>
<h2 id="bergabung-ke-jaringan-zerotier"><strong>Bergabung ke Jaringan ZeroTier</strong></h2>
<p>Setelah ZeroTier berhasil berjalan di ICR-3211B, langkah berikutnya adalah <strong>bergabung ke jaringan ZeroTier</strong> agar perangkat dapat berkomunikasi dengan sistem lain.</p>
<h3 id="1-dapatkan-network-id"><strong>1. Dapatkan Network ID</strong></h3>
<p>Sebelum menghubungkan perangkat, pastikan Anda memiliki <strong>Network ID</strong> dari jaringan yang telah dibuat di <strong>ZeroTier Central</strong>.</p>
<ul>
<li>Login ke <strong>ZeroTier Central</strong>: <a href="https://my.zerotier.com/?ref=blog.kiiota.com">https://my.zerotier.com</a></li>
<li>Buat atau pilih jaringan yang ingin digunakan.</li>
<li>Catat <strong>Network ID</strong> (biasanya berupa string angka, misalnya <code>abcdef1234567890</code>).</li>
</ul>
<p>Anda bisa meminta <strong>Network ID</strong> ke administrator jaringan jika menggunakan jaringan ZeroTier private self hosted.</p>
<h3 id="2-bergabung-ke-jaringan-dari-icr-3211b"><strong>2. Bergabung ke Jaringan dari ICR-3211B</strong></h3>
<p>Gunakan perintah berikut di perangkat ICR-3211B:</p>
<pre><code class="language-bash">zerotier-cli join &lt;NETWORK_ID&gt;
</code></pre>
<p>Contoh:</p>
<pre><code class="language-bash">zerotier-cli join abcdef1234567890 
</code></pre>
<h3 id="3-verifikasi-koneksi"><strong>3. Verifikasi Koneksi</strong></h3>
<p>Setelah bergabung ke jaringan, pastikan perangkat telah berhasil terkoneksi:</p>
<pre><code class="language-bash">zerotier-cli info 
</code></pre>
<p>Jika berhasil, output akan menunjukkan <strong>status jaringan aktif</strong>, seperti:</p>
<pre><code class="language-bash">200 info &lt;ztaddr&gt; &lt;ver&gt; ONLINE
</code></pre>
<p>Jika jaringan memerlukan <strong>persetujuan manual</strong>, masuk ke ZeroTier Central, lalu <strong>izinkan perangkat bergabung</strong> ke jaringan atau minta persetujuan ke administrator jaringan private yang digunakan.</p>
<h3 id="4-cek-ip-address-di-zerotier"><strong>4. Cek IP Address di ZeroTier</strong></h3>
<p>Gunakan perintah berikut untuk melihat IP yang diberikan oleh jaringan ZeroTier:</p>
<pre><code class="language-bash">zerotier-cli listnetworks
</code></pre>
<p>Hasilnya akan menunjukkan <strong>IP yang diberikan</strong>, misalnya:</p>
<pre><code class="language-bash">200 listnetworks abcdef1234567890 &lt;name&gt; &lt;mac&gt; OK PRIVATE &lt;dev&gt; 10.10.10.15/24
</code></pre>
<h3 id="5-uji-koneksi-antar-perangkat"><strong>5. Uji Koneksi Antar Perangkat</strong></h3>
<p>Gunakan <strong>ping</strong> untuk menguji konektivitas antar perangkat yang terhubung ke ZeroTier:</p>
<pre><code class="language-bash">ping &lt;IP_DEVICE_LAIN&gt;
</code></pre>
<p>Misalnya jika perangkat lain memiliki IP <strong>10.10.10.20</strong>:</p>
<pre><code class="language-bash">ping 10.10.10.20
</code></pre>
<p>Jika ping berhasil, berarti koneksi melalui <strong>ZeroTier</strong> sudah aktif!</p>
<p>Sekarang, <strong>ICR-3211B telah terhubung ke jaringan ZeroTier</strong> dan siap digunakan untuk komunikasi dengan perangkat lain.</p>
<hr>
<h2 id="penutup"><strong>Penutup</strong></h2>
<p>Dengan langkah-langkah yang telah dijelaskan, ZeroTier-One kini dapat berjalan optimal di ICR-3211B, meskipun tanpa dukungan systemd. Cross-compiling, penerapan patch arsitektur, serta skrip startup dan monitoring layanan memastikan bahwa sistem tetap stabil dan terhubung tanpa perlu intervensi manual.</p>
<p>Keunggulan dari pendekatan ini:</p>
<ul>
<li><strong>Portabilitas:</strong> Dapat digunakan pada perangkat ARMv7a lainnya dengan sedikit modifikasi.</li>
<li><strong>Keamanan:</strong> Firewall diaktifkan untuk melindungi komunikasi jaringan.</li>
<li><strong>Reliabilitas:</strong> Layanan otomatis restart jika ada kegagalan proses.</li>
</ul>
<p>Jika Anda ingin melakukan penyesuaian lebih lanjut—misalnya optimasi sumber daya atau penerapan kebijakan keamanan tambahan—artikel ini bisa menjadi dasar yang kuat. ZeroTier memungkinkan konektivitas fleksibel dan aman, sehingga cocok untuk berbagai implementasi di sistem embedded Linux lainnya.</p>
<p><strong>Tetap eksplorasi dan selamat mencoba!</strong></p>
<!--kg-card-end: markdown-->
{% endraw %}