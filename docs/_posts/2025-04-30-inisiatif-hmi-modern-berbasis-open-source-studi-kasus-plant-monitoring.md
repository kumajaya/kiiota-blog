---
ghost_uuid: "43df3233-1616-42ed-9f6b-a488982171a3"
title: "Inisiatif HMI Modern Berbasis Open Source: Studi Kasus Plant Monitoring"
date: "2025-04-30T11:24:55.000+07:00"
slug: "inisiatif-hmi-modern-berbasis-open-source-studi-kasus-plant-monitoring"
layout: "post"
excerpt: |
  Pengantar
  
  
  Di tengah tuntutan efisiensi dan fleksibilitas dalam dunia otomasi industri, sistem HMI (Human-Machine Interface) menjadi komponen yang sangat vital. HMI yang baik memungkinkan operator untuk memantau dan mengendalikan proses industri secara intuitif, dengan menyediakan visualisasi data dan kondisi sistem secara real-time. Namun, sistem HMI tradisional seringkali terjebak dalam keterbatasan perangkat keras dan perangkat lunak proprietary yang mahal dan kurang fleksibel.
  
  
  
  
  
  \"HMI buk
image: "/kiiota-blog/assets/media/43df3233-1616-42ed-9f6b-a488982171a3-ss-1.png"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "industrial"
  - "automation"
  - "hmi"
categories:
  - "industrial"
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
url: "https://blog.kiiota.com/inisiatif-hmi-modern-berbasis-open-source-studi-kasus-plant-monitoring/"
comment_id: "6810f300f733d603f79ee393"
reading_time: 13
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><h2 id="pengantar">Pengantar</h2>
<p>Di tengah tuntutan efisiensi dan fleksibilitas dalam dunia otomasi industri, sistem HMI (Human-Machine Interface) menjadi komponen yang sangat vital. HMI yang baik memungkinkan operator untuk memantau dan mengendalikan proses industri secara intuitif, dengan menyediakan visualisasi data dan kondisi sistem secara real-time. Namun, sistem HMI tradisional seringkali terjebak dalam keterbatasan perangkat keras dan perangkat lunak proprietary yang mahal dan kurang fleksibel.</p>
<blockquote>
<p>&quot;HMI bukan hanya soal tampilan, tapi tentang bagaimana manusia berinteraksi dengan mesin secara efektif.&quot;</p>
</blockquote>
<p>Seiring berkembangnya teknologi open source, solusi HMI berbasis open source muncul sebagai alternatif yang menarik. Penggunaan perangkat lunak dan platform terbuka tidak hanya mengurangi biaya lisensi, tetapi juga memberikan fleksibilitas tinggi dalam hal kustomisasi dan integrasi dengan berbagai sistem industri yang berbeda. Secara global, semakin banyak industri beralih ke solusi open source untuk meningkatkan fleksibilitas sistem otomasi mereka, mempercepat inovasi, dan mengurangi ketergantungan pada vendor proprietary.</p>
<blockquote>
<p>&quot;Open source bukan hanya pilihan teknologi, tapi strategi untuk membangun sistem yang lebih adaptif dan berkelanjutan.&quot;</p>
</blockquote>
<p>Di sinilah penerapan Rapid SCADA, Node-RED, dan alat bantu lainnya dalam pengembangan sistem HMI menjadi sangat relevan. Rapid SCADA dipilih berkat kombinasi antara skalabilitas, stabilitas, serta komunitas pengembang aktif yang mendukung pengembangan berkelanjutan, menjadikannya platform yang ideal untuk implementasi di berbagai skala proyek industri.</p>
<blockquote>
<p>&quot;Rapid SCADA adalah platform open source untuk membangun sistem SCADA dan HMI berbasis web, yang menawarkan fleksibilitas tinggi, dukungan protokol luas, dan kemampuan kostumisasi mendalam.&quot;</p>
</blockquote>
<p>Artikel ini bertujuan untuk mendokumentasikan inisiatif penerapan HMI modern berbasis open source di salah satu plant industri, dengan fokus pada pemanfaatan Node-RED untuk berkomunikasi dengan PLC, Rapid SCADA untuk monitoring, serta integrasi perangkat keras seperti PLC Siemens S7-300 dan remote I/O MOXA E1242. Dalam artikel ini, kami juga akan membahas tantangan dan solusi yang dihadapi selama implementasi, serta keuntungan dari adopsi teknologi open source dalam sistem HMI yang efisien dan hemat biaya.</p>
<blockquote>
<p>&quot;Di tengah tantangan keterbatasan perangkat proprietary dan kebutuhan skalabilitas, pendekatan open source ini menjadi jawaban yang strategis.&quot;</p>
</blockquote>
<h2 id="arsitektur-sistem">Arsitektur Sistem</h2>
<p>Sistem ini dirancang dengan pendekatan modular, yang memungkinkan skalabilitas dan fleksibilitas tinggi sesuai dengan kebutuhan berbagai ukuran proyek industri. Arsitektur ini juga mendukung berbagai sistem operasi, baik itu Windows, Linux, maupun embedded Linux, sehingga dapat dengan mudah diimplementasikan pada perangkat keras yang ada di lapangan tanpa mengkhawatirkan keterbatasan platform.</p>
<p>Salah satu keputusan penting dalam desain ini adalah penggunaan <strong>OPC UA (Unified Architecture)</strong> sebagai protokol komunikasi utama antara <strong>PLC Siemens S7-300</strong> dan <strong>Rapid SCADA</strong>. OPC UA dipilih karena kemampuannya untuk menjamin komunikasi yang aman, stabil, dan terstandarisasi antar perangkat yang berbeda. Selain itu, protokol ini memungkinkan pengelolaan data secara terstruktur dan real-time dengan menggunakan komunikasi berbasis objek yang dapat memperkaya informasi.</p>
<p>Node-RED bertindak sebagai middleware yang menghubungkan antara PLC dan <strong>Rapid SCADA</strong>. <strong>Node-RED</strong> memungkinkan alur pengolahan data yang lebih fleksibel, termasuk penerapan logika kontrol sederhana, pemetaan data, dan pengolahan sinyal dari berbagai sensor dan perangkat. Node-RED juga memberikan keuntungan dalam hal pemrograman berbasis visual, mempermudah pengembangan, serta memungkinkan integrasi berbagai jenis protokol dan perangkat.</p>
<p><img src="/kiiota-blog/assets/media/43df3233-1616-42ed-9f6b-a488982171a3-architecture.png" alt="System Architecture" loading="lazy"></p>
<p>Selain komunikasi utama antara PLC dan Node-RED, sistem ini juga memperluas akuisisi data analog menggunakan perangkat tambahan. <strong>MOXA E1242</strong> berfungsi sebagai <strong>remote I/O</strong> untuk membaca sinyal 4-20mA dari sensor-sensor seperti pressure transmitter dan level transmitter, dan mengirimkan data tersebut langsung ke Rapid SCADA melalui protokol <strong>Modbus TCP</strong>.</p>
<blockquote>
<p>&quot;Dengan memanfaatkan kombinasi dua protokol — OPC UA dan Modbus TCP — sistem ini mampu menjembatani dunia perangkat keras legacy dengan kebutuhan monitoring modern.&quot;</p>
</blockquote>
<p>Penting untuk dicatat bahwa desain sistem ini tidak bergantung pada vendor perangkat keras tertentu, memberikan kebebasan untuk menggunakan berbagai komponen industri yang berbeda, asalkan mendukung protokol komunikasi yang telah ditetapkan. Hal ini memungkinkan pemanfaatan teknologi terbaru dan penggantian perangkat dengan lebih mudah di masa depan tanpa harus merombak seluruh sistem. Rapid SCADA sendiri secara standar mendukung OPC UA, OPC DA/Classic, Modbus TCP, Modbus RTU, MQTT, dan lain-lain.</p>
<p>Secara keseluruhan, sistem ini tidak hanya memastikan pengumpulan dan pemrosesan data yang efisien, tetapi juga menyediakan fleksibilitas dan interoperabilitas yang tinggi dengan berbagai perangkat keras dan perangkat lunak lainnya.</p>
<blockquote>
<p>&quot;Dengan desain modular ini, sistem tetap fleksibel untuk ekspansi di masa depan, seperti penambahan unit sensor baru atau integrasi dengan platform monitoring lain tanpa perlu rekayasa ulang terlampau besar.&quot;</p>
</blockquote>
<h2 id="desain-hmi">Desain HMI</h2>
<h3 id="konsep-high-performance-hmi">Konsep High Performance HMI</h3>
<p>Desain HMI pada proyek ini mengikuti prinsip <strong>High Performance HMI</strong> yang mengutamakan kejelasan informasi dibandingkan estetika berlebihan, sejalan dengan <strong>standar ISA-101</strong> untuk desain HMI yang efektif. Standar ini menekankan pentingnya tampilan yang sederhana namun informatif, yang memungkinkan operator untuk melakukan tugasnya dengan cepat dan efisien tanpa terganggu oleh informasi yang tidak relevan.</p>
<p>Desain ini mengoptimalkan penggunaan <strong>warna-warna minimalis</strong> yang memberikan umpan balik visual yang jelas. Warna biru digunakan untuk status normal, kuning untuk peringatan, dan merah untuk kondisi alarm kritis. Shading lembut diterapkan untuk menyoroti status alarm tanpa menyebabkan kelelahan visual, sesuai dengan prinsip desain <strong>ISA-101</strong> yang bertujuan untuk menjaga kenyamanan operator selama bekerja dalam waktu lama.</p>
<blockquote>
<p>&quot;Shading merah lembut digunakan hanya untuk mengindikasikan kondisi alarm kritis, menjaga perhatian operator tanpa menyebabkan kelelahan visual.&quot;</p>
</blockquote>
<h3 id="navigasi-dan-struktur-halaman">Navigasi dan Struktur Halaman</h3>
<p>Desain HMI ini mengadopsi prinsip <strong>navigasi intuitif</strong> yang mendukung efisiensi operasional, sebuah konsep yang juga diusung oleh standar <strong>ISA-101</strong>. Setiap halaman HMI dilengkapi dengan <strong>navigasi yang jelas</strong> di bagian atas, memudahkan operator untuk berpindah antar halaman dengan cepat. Pada halaman <strong>Plant Overview</strong>, tombol navigasi berubah warna jika ada alarm aktif pada halaman terkait, memungkinkan operator untuk mengidentifikasi area yang membutuhkan perhatian segera.</p>
<p>Struktur multi-tab pada halaman juga memungkinkan untuk menampilkan berbagai unit atau sistem dalam satu tampilan, mempercepat pengambilan keputusan tanpa membuat layar menjadi berantakan atau membingungkan.</p>
<blockquote>
<p>&quot;Konsep perubahan warna tombol hanya diterapkan di overview untuk menjaga fokus operator dan menghindari kebingungan saat berada di halaman detail.&quot;</p>
</blockquote>
<p>Untuk kenyamanan operator, antarmuka ini dijalankan dalam mode kiosk penuh (fullscreen kiosk mode) menggunakan browser Edge, memastikan fokus penuh pada tampilan proses tanpa gangguan elemen browser dan antarmuka sistem.</p>
<h3 id="penggunaan-svg-dan-drawio">Penggunaan SVG dan draw.io</h3>
<p>Untuk menjaga kualitas grafis yang tinggi, seluruh elemen visual HMI dibuat dalam format <strong>SVG (Scalable Vector Graphics)</strong>, sesuai dengan pedoman desain <strong>ISA-101</strong> yang mendorong penggunaan grafis yang bersih dan tajam. SVG memastikan bahwa gambar tetap jelas dan dapat diskalakan dengan sempurna tanpa kehilangan kualitas visual. Alat yang digunakan untuk desain ini adalah <strong>draw.io</strong>, yang memungkinkan pembuatan diagram dan grafik yang efisien, sekaligus memudahkan integrasi dengan HMI.</p>
<p><img src="/kiiota-blog/assets/media/43df3233-1616-42ed-9f6b-a488982171a3-Screenshot-2025-05-05-090311.png" alt="Daraw.io multi tab" loading="lazy"></p>
<p>Fitur common background dan multi-tab di draw.io membantu mempermudah pengelolaan layout dan mempercepat proses desain secara keseluruhan.</p>
<blockquote>
<p>&quot;Walaupun draw.io bukan dirancang khusus untuk pengembangan HMI, kreativitas dalam menggunakannya menjadi bukti bahwa alat sederhana bisa memberikan hasil profesional. Grafik 11 halaman HMI yang tidak terlalu sederhana hanya kurang dari 350 kB!&quot;</p>
</blockquote>
<h3 id="watermark-profesional">Watermark Profesional</h3>
<p>Sebagai penanda identitas proyek, watermark <strong>&quot;AUTOMATION &amp; INNOVATION INITIATIVE – APRIL 2025&quot;</strong> ditempatkan dengan halus di bagian kiri bawah halaman Plant Overview. Watermark ini bukan hanya untuk estetika, tetapi juga untuk memberikan tanda profesionalisme yang sesuai dengan standar industri, termasuk prinsip <strong>ISA-101</strong> dalam pengelolaan tampilan HMI.</p>
<blockquote>
<p>&quot;Watermark ini menjadi penanda profesionalisme sekaligus pengingat kontribusi departemen terhadap inisiatif modernisasi.&quot;</p>
</blockquote>
<p>Sebagai bagian dari pendekatan HMI berkelanjutan, dua halaman tambahan juga telah disiapkan dengan watermark &quot;RESERVED FOR FUTURE USE&quot;. Hal ini mencerminkan bahwa sistem masih mungkin terus berkembang dan HMI dirancang terbuka untuk ekspansi di masa depan.</p>
<h2 id="keamanan-dan-reliability">Keamanan dan Reliability</h2>
<blockquote>
<p>Dalam mengembangkan sistem HMI, aspek keamanan dan keandalan data menjadi perhatian utama. Desain sistem ini mengadopsi prinsip defense-in-depth dengan memperhatikan komunikasi aman, kontinuitas data, serta akses jarak jauh yang terkontrol.</p>
</blockquote>
<h3 id="komunikasi-read-only">Komunikasi Read-Only</h3>
<p>Rapid SCADA hanya melakukan koneksi read-only ke PLC melalui OPC UA, sesuai dengan prinsip keamanan yang direkomendasikan oleh ISA-99 (Industrial Automation and Control Systems Security). Dengan pendekatan ini, jalur komunikasi data ke PLC bersifat satu arah, sepenuhnya menghindari risiko perintah tulis yang tidak disengaja atau malicious injection.</p>
<blockquote>
<p>&quot;Dengan konfigurasi read-only, potensi kesalahan akibat salah kirim perintah ke PLC dihilangkan sepenuhnya.&quot;</p>
</blockquote>
<h3 id="data-persistence">Data Persistence</h3>
<p>Dengan memanfaatkan contextStorage pada Node-RED, data variabel penting disimpan baik di memory aktif maupun disinkronkan secara periodik ke persistent storage berbasis file system. Pendekatan ini tidak hanya mempertahankan status variabel saat terjadi restart, tetapi juga mempercepat proses recovery sistem, menghindari false zero reading.</p>
<blockquote>
<p>&quot;Fitur ini vital untuk menjaga konsistensi data historis dan mencegah alarm palsu setelah reboot sistem.&quot;</p>
</blockquote>
<h3 id="remote-access">Remote Access</h3>
<p>Untuk akses jarak jauh, sistem menggunakan jaringan overlay ZeroTier dengan server controller mandiri, bukan bergantung pada layanan publik. Hal ini memastikan bahwa jalur komunikasi terenkripsi dan kontrol penuh tetap berada di pihak pengelola sistem, meningkatkan tingkat privasi dan reliability dalam remote operation. ZeroTier memastikan koneksi aman dan seamless, mempercepat troubleshooting dan pengembangan lanjutan tanpa mengganggu operasi.</p>
<p>Untuk menjaga keamanan sistem, konfigurasi firewall dan pengaturan akses dibuat secara ketat. Hanya port dan protokol yang diperlukan saja yang dibuka, dan akses administratif dibatasi sesuai kebutuhan.</p>
<p>Sebagai bagian dari pengamanan sistem, akses jarak jauh ke server juga diamankan dengan SSH (Secure Shell) yang telah diaktifkan dan dikonfigurasi sesuai praktik terbaik, seperti penggunaan autentikasi berbasis key dan pengaturan port non-standar. Referensi pengaturan SSH tersedia di dokumentasi resmi sistem operasi terkait.</p>
<blockquote>
<p>&quot;Keamanan bukan hanya tentang mencegah serangan, tetapi tentang memastikan sistem tetap berfungsi dalam segala kondisi.&quot;</p>
</blockquote>
<h2 id="pengalaman-praktis-implementasi-dan-optimalisasi">Pengalaman Praktis, Implementasi, dan Optimalisasi</h2>
<p>Implementasi sistem ini tidak lepas dari tantangan teknis dan kebutuhan penyesuaian di lapangan. Pengalaman penggunaan Node-RED dalam kasus-kasus sebelumnya sangat berguna di sini. Salah satu fokus utama dalam proses optimasi adalah efisiensi eksekusi script di Node-RED, yang berperan sebagai middleware penghubung antara PLC, Rapid SCADA, dan berbagai perangkat lainnya.</p>
<h3 id="pemrograman-node-red">Pemrograman Node-RED</h3>
<p>Pada awalnya, alur pemrosesan data di Node-RED cukup kompleks dengan function node yang saling terhubung dan melakukan operasi yang sebagian besar bisa disederhanakan. Melalui diskusi, eksplorasi, dan pengujian bersama AI, struktur alur data berhasil diringkas, mengurangi beban CPU, dan mempercepat waktu tanggap (response time) dari sistem monitoring secara keseluruhan.</p>
<blockquote>
<p>&quot;Script JavaScript di dalam function node difokuskan ulang menjadi lebih deklaratif, efisien, dan hanya melakukan parsing saat benar-benar diperlukan.&quot;</p>
</blockquote>
<p>Konfigurasi akhir sistem hanya memerlukan satu node <code>s7 in</code>, satu node <code>opcua-compact-server</code>, dan tiga function node yang terbagi menjadi:</p>
<ol>
<li>Node <code>s7 in</code> untuk berkomunikasi langsung dengan PLC Siemens S7-300 melalui ethernet dengan pengaturan variabel berdasarkan rack, slot, dan input/output. Sebagai contoh untuk membaca 2 modul digital input, 2  digital output, satu analog input, dan satu analog output:</li>
</ol>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-csv">ID0;R0-S5
ID4;R0-S6
QD8;R0-S7
QD12;R0-S8
DB62,REAL0;R1-S5-0
DB62,REAL48;R1-S5-1
DB62,REAL96;R1-S5-2
DB62,REAL144;R1-S5-3
DB62,REAL192;R1-S5-4
DB62,REAL240;R1-S5-5
DB62,REAL288;R1-S5-6
DB62,REAL336;R1-S5-7
DB62,REAL384;R1-S6-0
DB62,REAL432;R1-S6-1
DB62,REAL480;R1-S6-2
DB62,REAL480;R1-S6-3
DB62,REAL576;R1-S6-4
DB62,REAL624;R1-S6-5
DB62,REAL672;R1-S6-6
DB62,REAL960;R1-S6-7
DB62,REAL432;R1-S6-8
</code></pre>
</details>
<ol start="2">
<li>Menuliskan output dari <code>s7 in</code> ke memory context:</li>
</ol>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-javascript">const groups = {};

for (const [k, v] of Object.entries(msg.payload)) {
    const p = k.split(&quot;-&quot;);
    const gk = p.length &gt;= 3 ? `${p[0]}-${p[1]}` : p[0];
    (groups[gk] ??= {})[k] = v;
}

Object.entries(groups).forEach(([k, v]) =&gt; flow.set(k, v));

return msg;
</code></pre>
</details>
<ol start="3">
<li>Menyimpan data context ke persistent storage dengan interval 5 menit:</li>
</ol>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-javascript">const keys = flow.keys();
let synced = [];

// Loop dan simpan ke persistent
keys.forEach(key =&gt; {
    const value = flow.get(key);
    if (value !== undefined) {
        flow.set(key, value, &quot;file&quot;);
        synced.push(key);
    }
});

msg.payload = {
    message: &quot;Sinkronisasi ke persistent selesai.&quot;,
    total: synced.length,
    keys: synced
};

return msg;
</code></pre>
</details>
<ol start="4">
<li>Melakukan restore dari persistent memory ke context memory, yang dieksekusi segera setelah Node-RED restart:</li>
</ol>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-javascript">const keys = flow.keys(&quot;file&quot;);
let synced = [];

keys.forEach(key =&gt; {
    const value = flow.get(key, &quot;file&quot;);
    if (value) {
        flow.set(key, value);  // restore ke memory biasa (non-persistent)
        synced.push(key);
    }
});

msg.payload = {
    message: &quot;Restore ke memory selesai.&quot;,
    total: synced.length,
    keys: synced
};

return msg;
</code></pre>
</details>
<ol start="5">
<li>Kemudian script untuk konfigurasi address space node <code>opcua-compact-server</code>:</li>
</ol>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-javascript">function constructAlarmAddressSpace(server, addressSpace, eventObjects, done) {
  const opcua = coreServer.choreCompact.opcua;
  const { LocalizedText, Variant, DataType } = opcua;
  const namespace = addressSpace.getOwnNamespace();

  const flexServerInternals = this;

  const rootFolder = addressSpace.findNode(&quot;RootFolder&quot;);
  node.warn(&quot;Constructing dynamic address space for OPC UA...&quot;);
  coreServer.debugLog(&quot;Constructing dynamic address space for OPC UA...&quot;);

  const myPLC = namespace.addFolder(addressSpace.rootFolder.objects, {
    browseName: &quot;S7-300&quot;
  });

  // Fungsi umum untuk setup rack input analog/digital
  function setupRackVariables(rackName, count, dataType, keyFormat = i =&gt; `${rackName}-${i}`) {
    const variables = [];

    for (let i = 0; i &lt; count; i++) {
      const key = `${rackName}.${keyFormat(i)}`;

      // Cek apakah nilai sudah ada, jika belum maka set ke nol
      if (flexServerInternals.sandboxFlowContext.get(key) === undefined) {
        flexServerInternals.sandboxFlowContext.set(key, 0);
        node.warn(`Init value for ${key} = 0`);
        coreServer.debugLog(`Init value for ${key} = 0`);
      }

    }

    const rackFolder = namespace.addFolder(myPLC, {
      browseName: rackName
    });

    for (let i = 0; i &lt; count; i++) {
      const browseName = keyFormat(i);
      const ctxKey = `${rackName}.${browseName}`;

      const variable = namespace.addVariable({
        organizedBy: rackFolder,
        browseName: browseName,
        nodeId: `ns=1;s=${browseName}`,
        dataType: dataType,
        value: {
          get: function () {
            const val = flexServerInternals.sandboxFlowContext.get(ctxKey);
            coreServer.debugLog(`Read ${ctxKey} = ${val}`);
            return new Variant({ dataType: dataType, value: val });
          }
        }
      });

      variables.push(variable);
    }

    return variables;
  }

  // Setup analog inputs/outputs
  const inputAnalogRacks = [
    &quot;R1-S5&quot;, &quot;R1-S6&quot;
  ];
  const analogInputs = inputAnalogRacks.map(rack =&gt; setupRackVariables(rack, 8, DataType.Double));

  // Setup digital inputs/outputs
  const digitalConfig = [
    { rack: &quot;R0&quot;, start: 5, end: 8 }
  ];
  const digitalInputs = digitalConfig.map(cfg =&gt;
    setupRackVariables(cfg.rack, cfg.end - cfg.start + 1, DataType.UInt32, i =&gt; `${cfg.rack}-S${cfg.start + i}`)
  );

  coreServer.debugLog(&quot;Dynamic address space construction for OPC UA completed.&quot;);
  node.warn(&quot;Dynamic address space construction for OPC UA completed.&quot;);

  done();
}

</code></pre>
</details>
<p>Struktur ini cukup untuk menangani seluruh kebutuhan pembacaan data dari PLC dan pengiriman data ke Rapid SCADA, mencerminkan efisiensi struktural yang tinggi.</p>
<p>Selain itu, pembacaan sinyal digital juga dioptimalkan menggunakan pendekatan block read DWORD 32-bit. Teknik ini memungkinkan sistem membaca seluruh status digital input/output dalam satu blok register, alih-alih satu per satu. Pendekatan ini tidak hanya meningkatkan efisiensi komunikasi antara PLC dan middleware, tetapi juga mempercepat waktu refresh data secara keseluruhan tanpa membebani sistem komunikasi atau CPU. Teknik ini menjadi sangat relevan dalam sistem yang memiliki lebih banyak kanal digital dibandingkan analog dan memerlukan tanggapan real-time.</p>
<blockquote>
<p>&quot;Perlu diperhatikan bahwa internal data PLC Siemens S7-300 menggunakan format <strong>big-endian</strong>, sedangkan komputer berbasis x86 (seperti PC tempat Node-RED atau SCADA dijalankan) umumnya menggunakan <strong>little-endian</strong>. Akibatnya, saat membaca data multibyte seperti WORD, INT, DWORD, DINT, atau REAL diperlukan <strong>penyesuaian urutan byte</strong> (byte swap) agar nilai yang dibaca benar.&quot;</p>
</blockquote>
<p>Proses <em>tagging</em> data yang sempat direncanakan untuk dilakukan di tahap persiapan <em>address space</em> OPC UA dalam Node-RED diubah untuk dilakukan langsung di Rapid SCADA setelah ekstraksi bit. Tagging data analog juga dilakukan di Rapid SCADA agar aktivitas ini terpusat di satu tempat. Pendekatan ini membuktikan bahwa efisiensi dan fleksibilitas dapat dicapai tanpa mengorbankan kejelasan data, selama peran masing-masing komponen dalam arsitektur sistem dirancang secara tepat.</p>
<p>Selain optimasi teknis, aspek keberlanjutan juga menjadi perhatian. Untuk itu, dilakukan mirroring variabel penting dari memory context ke persistent storage di Node-RED. Strategi ini terbukti mengurangi false reading dan zero state saat sistem mengalami restart, sehingga meminimalisasi alarm palsu yang dapat mengganggu operator.</p>
<h4 id="mengakses-dokumentasi-online">Mengakses Dokumentasi Online</h4>
<p>Untuk mempelajari lebih lanjut tentang Node-RED dan memanfaatkan berbagai fitur yang ditawarkannya, Anda bisa mengunjungi dokumentasi resmi Node-RED secara online. Dokumentasi ini menyediakan panduan lengkap, tutorial, dan referensi API yang sangat berguna untuk mengembangkan aplikasi otomatisasi menggunakan Node-RED.</p>
<p>Anda dapat mengakses dokumentasi tersebut di sini:<br>
👉 <a href="https://nodered.org/docs?ref=blog.kiiota.com">Dokumentasi Node-RED</a></p>
<p>Di dalam dokumentasi, Anda akan menemukan:</p>
<ul>
<li><strong>Instalasi dan Konfigurasi</strong>: Langkah-langkah untuk memulai dengan Node-RED di berbagai platform.</li>
<li><strong>Tutorial dan Contoh Proyek</strong>: Panduan praktis untuk mengembangkan aplikasi berdasarkan kebutuhan spesifik Anda.</li>
<li><strong>Referensi API</strong>: Penjelasan mendalam tentang setiap fungsi dan node yang tersedia di Node-RED.</li>
</ul>
<p>Yang paling penting setelah instalasi adalah mengamankan Node-RED, Anda bisa membaca petunjuknya di:<br>
👉 <a href="https://nodered.org/docs/user-guide/runtime/securing-node-red?ref=blog.kiiota.com">Securing Node-RED</a></p>
<p>Untuk otomatis menjalankan Node-RED pada saat Windows startup, mengikuti petunjuk dokumen online, pada beberapa kesempatan Windows Task Scheduler gagal melakukan start. Untuk ini dibutuhkan opsi lain yang lebih handal:<br>
👉 <a href="https://nssm.cc/usage?ref=blog.kiiota.com">NSSM - the Non-Sucking Service Manager</a></p>
<p>Jangan ragu untuk mengeksplorasi seluruh dokumentasi agar dapat memanfaatkan Node-RED secara maksimal dalam proyek Anda!</p>
<p>Untuk informasi lebih mendalam tentang penggunaan dan konfigurasi Rapid SCADA, Anda dapat mengakses dokumentasi resmi secara online melalui tautan berikut:<br>
👉 <a href="https://rapidscada.net/docs/en/latest/software-overview/introduction?ref=blog.kiiota.com">Dokumentasi Rapid SCADA</a></p>
<p>Dokumentasi ini menyediakan panduan lengkap mengenai instalasi, konfigurasi, serta fitur-fitur penting yang dapat membantu Anda memaksimalkan penggunaan Rapid SCADA dalam proyek Anda. Detail mengenai Rapid SCADA dalam artikel ini akan segera ditambahkan.</p>
<h3 id="navigasi-kembali-dalam-mode-kiosk">Navigasi Kembali dalam Mode Kiosk</h3>
<p>Dalam mode kiosk fullscreen menggunakan Microsoft Edge, operator tidak memiliki akses navigasi standar browser seperti tombol kembali pada browser untuk kembali ke halaman utama setelah misalnya mereka melihat trend. Untuk mengatasi ini, digunakan sebuah <em>floating button</em> yang dijalankan menggunakan skrip <strong>AutoHotkey</strong>. Tombol ini memungkinkan operator untuk kembali ke halaman utama HMI kapan pun diperlukan, tanpa keluar dari tampilan fullscreen.</p>
<details>
    <summary><b><i>Perlihatkan di sini</i></b></summary>
<pre><code class="language-autohotkey">#Requires AutoHotkey v2.0

homeURL := &quot;http://localhost:10008&quot;
imagePath := A_ScriptDir &quot;\button.png&quot;

; Ukuran tombol dan posisi
buttonWidth := 30
buttonHeight := 220
guiX := 0
guiY := 250

; Buat GUI tanpa border dan caption
myGui := Gui(&quot;+AlwaysOnTop -Caption +ToolWindow -Border&quot;)
myGui.Opt(&quot;+LastFound&quot;)
myGui.BackColor := &quot;FF00FF&quot;

; Tambahkan tombol HOME
pic := myGui.AddPicture(&quot;x0 y0&quot; &quot; w&quot; buttonWidth &quot; h&quot; buttonHeight &quot; BackgroundTrans&quot;, imagePath)
pic.OnEvent(&quot;Click&quot;, HomeAction)

; Tampilkan GUI dengan gambar tombol
myGui.Show(&quot;x&quot; guiX &quot; y&quot; guiY &quot; NoActivate&quot;)
WinSetTransColor(&quot;FF00FF&quot;, myGui.Hwnd)

HomeAction(*) {
    Run(&quot;msedge.exe &quot; homeURL &quot; --kiosk --edge-kiosk-type=fullscreen&quot;)
}

; Ganti kursor default Picture control ke &quot;Hand&quot;
IDC_HAND := 32649
hCursor := DllCall(&quot;LoadCursor&quot;, &quot;Ptr&quot;, 0, &quot;UInt&quot;, IDC_HAND, &quot;Ptr&quot;)
DllCall(&quot;SetClassLongPtr&quot;, &quot;Ptr&quot;, pic.Hwnd, &quot;Int&quot;, -12, &quot;Ptr&quot;, hCursor)  ; GCLP_HCURSOR = -12
</code></pre>
</details>
<p>Skrip ini menampilkan tombol di kiri bagian atas layar. Saat diklik, tombol ini akan membuka kembali halaman utama HMI dalam mode app window Edge, memastikan alur kerja operator tetap lancar.</p>
<p>Setelah script AutoHotkey dikompilasi menjadi file .exe, software AutoHotkey itu sendiri segera dihapus dari sistem untuk meminimalkan potensi penyalahgunaan atau eksekusi skrip tak dikenal oleh pihak yang tidak berwenang.</p>
<p>Dengan seluruh penjelasan di atas, yang tidak kalah penting adalah observasi terhadap perilaku operator dan kebutuhannya untuk dapat melakukan monitoring dengan baik. Beberapa halaman HMI perlu disederhanakan untuk meningkatkan keterbacaan dan meminimalkan ambiguitas. Tag-tag yang aktif juga diberi penanda khusus agar tidak membingungkan saat plant berada dalam mode uji atau parsial.</p>
<blockquote>
<p>&quot;Optimalisasi bukan hanya soal teknis, tetapi juga soal memahami kebiasaan operator dan menciptakan tampilan yang benar-benar mendukung mereka.&quot;</p>
</blockquote>
<p>Semua pembelajaran ini menjadi pondasi untuk sistem yang lebih efisien dan berkelanjutan. Fleksibilitas platform open source sangat membantu, karena memungkinkan iterasi cepat tanpa bergantung pada vendor eksternal.</p>
<h2 id="penutup">Penutup</h2>
<p>Transformasi ini bukan sekadar pergantian platform, tetapi representasi dari adopsi mindset baru: fleksibilitas, efisiensi, dan keberanian mengintegrasikan teknologi terbuka dalam lingkungan industri konservatif.</p>
<blockquote>
<p>&quot;Perjalanan ini menunjukkan bahwa dengan kombinasi pengalaman nyata dan kreativitas, keterbatasan bisa diubah menjadi keunggulan kompetitif.&quot;</p>
</blockquote>
<p>Melalui implementasi sistem HMI berbasis open source ini, manfaat nyata telah dirasakan: biaya implementasi yang lebih rendah, kemudahan integrasi lintas platform, serta kemampuan adaptasi yang lebih tinggi terhadap kebutuhan spesifik plant. Lebih dari sekadar pencapaian teknis, inisiatif ini menjadi bukti bahwa inovasi bisa tumbuh dari keterbatasan, dan bahwa pendekatan open source layak dipertimbangkan secara serius dalam otomasi industri modern.</p>
<blockquote>
<p>&quot;Ketika teknologi terbuka dipadukan dengan pemahaman proses yang kuat, hasilnya bukan hanya sistem yang efisien — tetapi juga tim yang lebih berdaya dan siap menghadapi perubahan.&quot;</p>
</blockquote>
<hr>
<p><strong>Catatan:</strong> Artikel ini menghindari penyebutan langsung informasi korporasi yang sensitif untuk menjaga kerahasiaan, namun tetap mengedepankan kekuatan inovasi yang diterapkan.</p>
<!--kg-card-end: markdown-->
{% endraw %}