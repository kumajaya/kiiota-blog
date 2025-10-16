---
ghost_uuid: "7b80b787-70ed-49b5-a228-9d154f76d335"
title: "Menghubungkan Grafana dan Rapid SCADA"
date: "2025-05-25T23:24:49.000+07:00"
slug: "menghubungkan-grafana-dan-rapid-scada"
layout: "post"
excerpt: |
  Artikel ini menjelaskan implementasi proxy server yang menghubungkan antara Grafana dan Rapid SCADA versi 6. Proxy ini bertugas untuk menangani autentikasi berbasis cookie, mengakses data historis dari endpoint SCADA, dan mengubah format respons agar sesuai dengan format data time series Grafana.
  
  
  
  Arsitektur Singkat
  
  
  Berikut arsitektur umum alur komunikasi antara Grafana dan Rapid SCADA:
  
  
  Grafana --> [Basic Auth] --> ScadaGrafanaProxy --> [Cookie Session] --> Rapid SCADA 6 API
  
  
  
   * Grafana:
image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGRhc2hib2FyZHxlbnwwfHx8fDE3NDgxODg2NzR8MA&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "Photo by <a href=\"https://unsplash.com/@dawson2406?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Stephen Dawson</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "rapid-scada,"
  - "grafana"
categories:
  - "rapid-scada"
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
url: "https://blog.kiiota.com/menghubungkan-grafana-dan-rapid-scada/"
comment_id: "683336ea0d2fe02486c0993b"
reading_time: 5
access: true
comments: true
---

{% raw %}
<!--kg-card-begin: markdown--><p>Artikel ini menjelaskan implementasi proxy server yang menghubungkan antara Grafana dan Rapid SCADA versi 6. Proxy ini bertugas untuk menangani autentikasi berbasis cookie, mengakses data historis dari endpoint SCADA, dan mengubah format respons agar sesuai dengan format data time series Grafana.</p>
<h3 id="arsitektur-singkat">Arsitektur Singkat</h3>
<p>Berikut arsitektur umum alur komunikasi antara Grafana dan Rapid SCADA:</p>
<pre><code>Grafana --&gt; [Basic Auth] --&gt; ScadaGrafanaProxy --&gt; [Cookie Session] --&gt; Rapid SCADA 6 API
</code></pre>
<ul>
<li><strong>Grafana</strong>: Mengirim permintaan data historis.</li>
<li><strong>ScadaGrafanaProxy</strong>: Middleware berbasis Node.js yang mengautentikasi pengguna dan meneruskan permintaan ke Rapid SCADA.</li>
<li><strong>Rapid SCADA 6</strong>: Menyediakan endpoint <code>/Api/Main/GetHistData</code> dengan autentikasi berbasis sesi.</li>
</ul>
<h3 id="struktur-file-utama">Struktur File Utama</h3>
<pre><code>.
├── server.js          # Entrypoint dan autentikasi dasar
├── grafanaRouter.js   # Routing permintaan Grafana
├── scadaClient.js     # Login SCADA &amp; manajemen cookie
├── config.js          # Konfigurasi aplikasi
├── .env               # Variabel lingkungan untuk konfigurasi
</code></pre>
<h3 id="penjelasan-tiap-komponen">Penjelasan Tiap Komponen</h3>
<ul>
<li>
<p><strong><code>server.js</code></strong><br>
Titik masuk utama aplikasi. Menginisialisasi Express dan menggunakan middleware Basic Auth untuk membatasi akses dari klien seperti Grafana. Semua permintaan kemudian diteruskan ke <code>grafanaRouter.js</code>.</p>
</li>
<li>
<p><strong><code>grafanaRouter.js</code></strong><br>
Menangani rute <code>/Api/Main/GetHistData</code>. Modul ini bertanggung jawab untuk:</p>
<ul>
<li>Memastikan sesi login SCADA masih valid.</li>
<li>Melakukan permintaan ke SCADA.</li>
<li>Mengubah format respons SCADA menjadi array of objects <code>{ timestamp, channel, value }</code> agar cocok dengan format Grafana.</li>
</ul>
</li>
<li>
<p><strong><code>scadaClient.js</code></strong><br>
Berisi fungsi untuk login ke Rapid SCADA dan menyimpan cookie sesi yang valid. Cookie hanya diperbarui jika dibutuhkan.</p>
</li>
<li>
<p><strong><code>config.js</code> dan <code>.env</code></strong><br>
Semua informasi konfigurasi diambil dari <code>.env</code>, seperti kredensial dan URL. File <code>config.js</code> hanya membaca dari environment variable menggunakan <code>dotenv</code>.</p>
</li>
</ul>
<h3 id="contoh-isi-env">Contoh Isi <code>.env</code></h3>
<pre><code class="language-env">PROXY_PORT=3000
PROXY_USER=admin
PROXY_PASS=secret
SCADA_BASE_URL=http://localhost:10008
SCADA_USERNAME=admin
SCADA_PASSWORD=secret
</code></pre>
<h3 id="kode-serverjs">Kode <code>server.js</code></h3>
<pre><code class="language-javascript">const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('basic-auth');
const grafanaRouter = require('./grafanaRouter');
const config = require('./config');

const app = express();

// Basic Auth middleware
app.use((req, res, next) =&gt; {
  const user = basicAuth(req);
  if (!user || user.name !== config.proxy.username || user.pass !== config.proxy.password) {
    res.set('WWW-Authenticate', 'Basic realm=&quot;GrafanaDataProxy&quot;');
    return res.status(401).send('Authentication required.');
  }
  next();
});

app.use(bodyParser.json());
app.use('/', grafanaRouter);

// Error handling middleware
app.use((err, req, res, next) =&gt; {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(config.proxy.port, () =&gt; {
  console.log(`SCADA Grafana Proxy listening on port ${config.proxy.port}`);
});
</code></pre>
<h3 id="kode-scadaclientjs">Kode <code>scadaClient.js</code></h3>
<pre><code class="language-javascript">const axios = require('axios');
const config = require('./config');

let cookieJar = [];

async function login() {
  const url = `${config.scada.baseUrl}/Api/Auth/Login`;
  const payload = {
    Username: config.scada.username,
    Password: config.scada.password,
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Accept: 'application/json;charset=utf-8',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    console.log(`[CLIENT] Login status: ${response.status}`);
    const setCookieHeaders = response.headers['set-cookie'];
    if (!setCookieHeaders) {
      throw new Error('[CLIENT] No set-cookie header received from SCADA.');
    }

    if (response.data?.success === false) {
      throw new Error('[CLIENT] SCADA login failed: ' + (response.data?.message || 'Unknown error'));
    }

    cookieJar = setCookieHeaders.map(cookie =&gt; cookie.split(';')[0]);
  } catch (err) {
    console.error('[CLIENT] Login to SCADA failed:', err.message);
    throw err;
  }
}

function getSessionCookies() {
  return cookieJar;
}

async function ensureLogin() {
  if (!cookieJar.length) {
    await login();
  }
}

async function forceLogin() {
  cookieJar = [];
  await login();
}

module.exports = {
  login,
  getSessionCookies,
  ensureLogin,
  forceLogin,
};
</code></pre>
<h3 id="kode-grafanarouterjs">Kode <code>grafanaRouter.js</code></h3>
<pre><code class="language-javascript">const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('./config');
const { getSessionCookies, ensureLogin, forceLogin } = require('./scadaClient');

router.get('/Api/Main/GetHistData', async (req, res) =&gt; {
  if (!req.query || !req.query.cnlNums || !req.query.startTime || !req.query.endTime) {
    return res.status(400).json({ message: '[ROUTER] Missing required query parameters' });
  }

  const url = `${config.scada.baseUrl}/Api/Main/GetHistData`;

  try {
    await ensureLogin();
    const cookies = getSessionCookies();

    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json;charset=utf-8',
        Cookie: cookies.join('; '),
        'User-Agent': 'Mozilla/5.0',
      },
      params: req.query,
    });

    console.log('[ROUTER] Fetching data from SCADA with params:', req.query);
    try {
      const transformed = transformSCADAResponse(response);
      return res.json(transformed);
    } catch (transformError) {
      return res.status(500).json({
        message: '[ROUTER] Error transforming SCADA response',
        details: transformError.message,
      });
    }
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn(`[ROUTER] Session expired. Re-authenticating...`);
      await forceLogin();
      const cookies = getSessionCookies();

      try {
        const retryResponse = await axios.get(url, {
          headers: {
            Accept: 'application/json;charset=utf-8',
            Cookie: cookies.join('; '),
            'User-Agent': 'Mozilla/5.0',
          },
          params: req.query,
        });

        return res.json(transformSCADAResponse(retryResponse));
      } catch (retryError) {
        return res.status(retryError.response?.status || 500).json({
          message: '[ROUTER] Error after retrying login',
          details: retryError.response?.data || retryError.message,
        });
      }
    }

    res.status(error.response?.status || 500).json({
      message: '[ROUTER] Error forwarding request to SCADA',
      details: error.response?.data || error.message,
    });
  }
});

router.get('/health', (req, res) =&gt; res.send('SCADA Grafana Proxy is running'));

function transformSCADAResponse(response) {
  const { data } = response;
  if (!data?.data?.timestamps || !data?.data?.trends || !data?.data?.cnlNums) {
    console.error('[ROUTER] SCADA response format invalid:', data);
    throw new Error('[ROUTER] Invalid SCADA response format');
  }

  const timestamps = data.data.timestamps.map(ts =&gt; ts.ms);

  return (data.data.trends || []).flatMap((trendValues, index) =&gt; {
    const channel = data.data.cnlNums?.[index] ?? null;
    return (trendValues || []).map((item, i) =&gt; ({
      timestamp: timestamps?.[i] ?? null,
      channel,
      value: item?.d?.val ?? null,
    }));
});

}

module.exports = router;
</code></pre>
<h3 id="kesimpulan">Kesimpulan</h3>
<p>Proxy ini memungkinkan Grafana untuk mengambil data historis dari Rapid SCADA dengan cara yang lebih mudah, aman, dan terstruktur. Pendekatan cookie session Rapid SCADA 6 lebih andal dibanding basic auth, serta format JSON hasilnya dapat digunakan langsung oleh plugin data source seperti Infinity atau JSON API.</p>
<p>Dengan desain modular, kita dapat memperluas proxy ini untuk endpoint Rapid SCADA lainnya atau menambahkan fitur autentikasi tambahan jika diperlukan.</p>
<p>👉 Kode sumber lengkap tersedia di: <a href="https://github.com/kumajaya/scada-grafana-proxy?ref=blog.kiiota.com">https://github.com/kumajaya/scada-grafana-proxy</a></p>
<h3 id="konfigurasi-infinity-datasource-di-grafana">Konfigurasi Infinity Datasource di Grafana</h3>
<p>Untuk menghubungkan Grafana dengan <code>ScadaGrafanaProxy</code>, kita bisa menggunakan plugin <a href="https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/?ref=blog.kiiota.com">Infinity Datasource</a>, yang mendukung permintaan HTTP ke endpoint JSON/REST.</p>
<h4 id="langkah-langkah">Langkah-langkah:</h4>
<ol>
<li>
<p><strong>Install Infinity Plugin</strong><br>
Di Grafana, buka menu <strong>Plugins</strong>, cari <strong>Infinity</strong>, dan install.</p>
</li>
<li>
<p><strong>Tambahkan Datasource Baru</strong></p>
<ul>
<li>
<p>Masuk ke <strong>Configuration &gt; Data Sources</strong>.</p>
</li>
<li>
<p>Pilih <strong>Infinity</strong>.</p>
</li>
<li>
<p>Atur sebagai berikut:</p>
<ul>
<li><strong>Name</strong>: Beri nama unik, misalnya <code>bekasi-infinity-datasource</code></li>
<li><strong>Authentication</strong>: Pilih <em>Basic Auth</em>, dan masukkan <code>admin:secret</code> (atau sesuai <code>.env</code>)</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Membuat Panel di Dashboard</strong></p>
<h5 id="konfigurasi-untuk-rapid-scada-6">Konfigurasi Untuk <strong>Rapid SCADA 6</strong>:</h5>
<ul>
<li>
<p>Pilih <strong>bekasi-infinity-datasource</strong> sebagai datasource.</p>
</li>
<li>
<p>Pilih <strong>Type</strong>: JSON</p>
</li>
<li>
<p><strong>Method</strong>: <code>GET</code></p>
</li>
<li>
<p><strong>URL</strong>: <code>http://&lt;ip_proxy&gt;:3000/Api/Main/GetHistData</code></p>
<ul>
<li>
<p><strong>URL Query Params</strong>:</p>
<ul>
<li><code>archiveBit</code>: Tipe arsip Rapid SCADA (1: minutes data, 2: hours data), bisa juga diatur dengan variabel kustom misalnya <code>${_archiveBit}</code></li>
<li><code>startTime</code>: Tanggal mulai dalam format ISO (<code>${__from:date:iso}</code>)</li>
<li><code>endTime</code>: Tanggal akhir dalam format ISO (<code>${__to:date:iso}</code>)</li>
<li><code>endInclusive</code>: Untuk menyertakan batas waktu di dalam range atau tidak (<code>true</code> atau <code>false</code>)</li>
<li><code>cnlNums</code>: Daftar channel number (misalnya: <code>101,102</code>)</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Untuk <strong>Root selector</strong> dikosongkan.</p>
</li>
<li>
<p>Tambahkan <strong>Columns selector</strong>:</p>
<ul>
<li><code>timestamp</code>: Time field format sebagai <code>Time (UNIX ms)</code> agar Grafana dapat mengenali timestamp</li>
<li><code>value</code>: Nilai pengukuran sebagai <code>Number</code></li>
<li><code>channel</code>: Channel pengukuran (untuk group by) sebagai <code>String</code></li>
</ul>
</li>
</ul>
<h5 id="konfigurasi-untuk-rapid-scada-5-dengan-grafanadataprovider-plugin">Konfigurasi Untuk <strong>Rapid SCADA 5</strong> dengan <strong><code>GrafanaDataProvider</code></strong> plugin:</h5>
<ul>
<li>Pilih <code>bekasi-infinity-datasource</code> sebagai datasource.</li>
<li>Pilih <strong>Type</strong>: JSON</li>
<li><strong>Method</strong>: <code>POST</code></li>
<li><strong>URL</strong>: <code>http://&lt;ip_proxy&gt;:3000/api/trends/query</code>
<ul>
<li><strong>Body Content Type</strong>: JSON</li>
</ul>
</li>
</ul>
</li>
</ol>
<pre><code>{
    &quot;range&quot;: {
        &quot;from&quot;: &quot;${__from:date:iso}&quot;,
        &quot;to&quot;: &quot;${__to:date:iso}&quot;
    },
    &quot;intervalMs&quot;: &quot;${__interval_ms}&quot;,
    &quot;targets&quot;: [
        {
            &quot;target&quot;: &quot;101&quot;
        },
        {
            &quot;target&quot;: &quot;102&quot;
        }
    ]
}
</code></pre>
<ul>
<li>
<p>Untuk <strong>Root selector</strong> dikosongkan.</p>
</li>
<li>
<p>Tambahkan <strong>Columns selector</strong>:</p>
<ul>
<li><code>timestamp</code>: Time field format sebagai <code>Time (UNIX ms)</code> agar Grafana dapat mengenali timestamp</li>
<li><code>value</code>: Nilai pengukuran sebagai <code>Number</code></li>
<li><code>target</code>: Target pengukuran (untuk group by) sebagai <code>String</code></li>
</ul>
</li>
</ul>
<ol start="4">
<li><strong>Transformation</strong><br>
Tambahkan <strong>Prepare time series</strong> dengan format <code>Multi-frame time series</code>.</li>
</ol>
<h4 id="contoh-url-dengan-parameter-tanpa-url-encode">Contoh URL dengan parameter (tanpa URL encode):</h4>
<pre><code>http://localhost:3000/Api/Main/GetHistData?archiveBit=2&amp;startTime=2025-05-25T00:00:00.000Z&amp;endTime=2025-05-25T23:59:59.000Z&amp;endInclusive=true&amp;cnlNums=101,102&amp;
</code></pre>
<h3 id="faq-singkat">FAQ Singkat</h3>
<p><strong>Q: Apakah proxy ini aman digunakan di jaringan publik?</strong><br>
A: Proxy ini mengimplementasikan Basic Auth untuk membatasi akses, namun disarankan untuk menggunakannya di belakang VPN atau reverse proxy dengan HTTPS jika digunakan di jaringan terbuka.</p>
<p><strong>Q: Apa yang terjadi jika session cookie kedaluwarsa?</strong><br>
A: Proxy akan secara otomatis melakukan login ulang ke SCADA dan mencoba kembali permintaan dari Grafana.</p>
<p><strong>Q: Format data seperti apa yang dikembalikan oleh endpoint <code>/Api/Main/GetHistData</code>?</strong><br>
A: Format data asli berbasis timestamp array, channel number array, dan nilai tren. Proxy mengubahnya menjadi array objek <code>{ timestamp, channel, value }</code> agar lebih mudah digunakan di Grafana.</p>
<p><strong>Q: Apakah bisa digunakan untuk SCADA versi 5?</strong><br>
A: Tidak langsung. Rapid SCADA v5 memiliki autentikasi berbeda dan tidak menggunakan endpoint REST seperti versi 6.</p>
<p><strong>Q: Bisakah ditambahkan endpoint untuk data realtime atau status channel?</strong><br>
A: Ya, kamu bisa menambahkan rute baru dan menggunakan pendekatan serupa di <code>grafanaRouter.js</code>, lalu sesuaikan transformasi data sesuai kebutuhan.</p>
<!--kg-card-end: markdown-->
{% endraw %}