---
ghost_uuid: "9a0a0f51-a691-487d-921c-9673267ad803"
title: "Membuat Driver Modbus dengan Fitur Scaling Berdasarkan Driver Modbus Rapid SCADA"
date: "2026-05-14T22:17:05.000+07:00"
slug: "membuat-driver-modbus-dengan-fitur-scaling-berdasarkan-driver-modbus-rapid-scada"
layout: "post"
excerpt: |
  Panduan copy-then-modify untuk menghindari ketergantungan pada upstream, tanpa perlu rumit mengajukan pull request, dan mendapatkan kendali penuh atas driver yang sesuai kebutuhan.
image: "https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxDfGVufDB8fHx8MTc3ODc2ODI2NHww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@carlgonz?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Carlos Gonzalez</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Rapid Scada"
  - "Edge Computing"
  - "Automation"
  - "Field Experience"
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
url: "https://blog.kiiota.com/membuat-driver-modbus-dengan-fitur-scaling-berdasarkan-driver-modbus-rapid-scada/"
comment_id: "6a05d4173585c0065d6f48cd"
reading_time: 4
access: true
comments: true
---

{% raw %}
<p><em>Ditulis oleh Ketut Kumajaya — 14 Mei 2026</em></p>
<h2 id="pendahuluan">Pendahuluan</h2>
<p>Rapid SCADA menyediakan driver <code>DrvModbus</code> yang handal untuk komunikasi Modbus. Namun, menambahkan fitur khusus seperti <em>scaling</em> (penskalaan nilai <em>raw</em> register ke nilai <em>engineer</em>) memerlukan perubahan kode sumber asli dan proses <em>pull request</em> yang rumit. Solusi praktis adalah <strong>menyalin seluruh driver asli</strong> lalu memodifikasinya menjadi driver mandiri, misalnya <code>DrvSigModbus</code>. Artikel ini memandu langkah demi langkah, termasuk mengintegrasikan fitur scaling dari <a href="https://github.com/RapidScada/scada-v6/pull/105?ref=blog.kiiota.com">PR #105</a> dan perbaikan validasi.</p>
<blockquote>
<p><strong>Prasyarat</strong></p>
<ul>
<li>Windows + VSCode dengan <strong>Git Bash</strong> (termasuk GNU tools: <code>sed</code>, <code>grep</code>, <code>find</code>)</li>
<li><strong>.NET SDK 8.0</strong></li>
<li>Kode sumber Rapid SCADA v6 sudah di-clone</li>
</ul>
</blockquote>
<hr>
<h2 id="langkah-1-%E2%80%93-menyalin-folder-driver-asli">Langkah 1 – Menyalin Folder Driver Asli</h2>
<p>Di terminal Git Bash, masuk ke <code>ScadaComm/OpenDrivers</code>:</p>
<pre><code class="language-bash">cp -r DrvModbus.Common  DrvSigModbus.Common
cp -r DrvModbus.Logic   DrvSigModbus.Logic
cp -r DrvModbus.View    DrvSigModbus.View
</code></pre>
<h2 id="langkah-2-%E2%80%93-mengganti-nama-file-proyek-dan-file-utama">Langkah 2 – Mengganti Nama File Proyek dan File Utama</h2>
<p><strong>2.1 Rename file <code>.csproj</code></strong></p>
<pre><code class="language-bash">mv DrvSigModbus.Common/DrvModbus.Common.csproj  DrvSigModbus.Common/DrvSigModbus.Common.csproj
mv DrvSigModbus.Logic/DrvModbus.Logic.csproj    DrvSigModbus.Logic/DrvSigModbus.Logic.csproj
mv DrvSigModbus.View/DrvModbus.View.csproj      DrvSigModbus.View/DrvSigModbus.View.csproj
</code></pre>
<p><strong>2.2 Rename file <code>.cs</code> dan <code>.xml</code> yang mengandung <code>DrvModbus</code> / <code>DevModbus</code></strong></p>
<pre><code class="language-bash">mv DrvSigModbus.Logic/DrvModbusLogic.cs         DrvSigModbus.Logic/DrvSigModbusLogic.cs
mv DrvSigModbus.Logic/DevModbusLogic.cs         DrvSigModbus.Logic/DevSigModbusLogic.cs

mv DrvSigModbus.View/DrvModbusView.cs           DrvSigModbus.View/DrvSigModbusView.cs
mv DrvSigModbus.View/DevModbusView.cs           DrvSigModbus.View/DevSigModbusView.cs

mv DrvSigModbus.View/Lang/DrvModbus.en-GB.xml   DrvSigModbus.View/Lang/DrvSigModbus.en-GB.xml
mv DrvSigModbus.View/Lang/DrvModbus.ru-RU.xml   DrvSigModbus.View/Lang/DrvSigModbus.ru-RU.xml
</code></pre>
<blockquote>
<p><strong>Catatan:</strong> File seperti <code>ModbusCmd.cs</code>, <code>ModbusUtils.cs</code>, <code>ElemGroup.cs</code> tidak perlu di-rename karena bersifat generik.</p>
</blockquote>
<p><strong>2.3 Tambahkan berkas terjemahan Bahasa Indonesia</strong></p>
<p>Buat file <code>DrvSigModbus.View/Lang/DrvSigModbus.id-ID.xml</code> dengan konten (contoh, bisa diambil dari patch asli):</p>
<pre><code class="language-xml">&lt;?xml version="1.0" encoding="utf-8" ?&gt;
&lt;DrvSigModbusDictionaries&gt;
  &lt;Dictionary key="Scada.Comm.Drivers.DrvSigModbus.View.Controls.CtrlElem"&gt;
    &lt;Phrase key="lblElemScaling"&gt;Skala&lt;/Phrase&gt;
    &lt;Phrase key="lblElemScalingExample"&gt;Misalnya, 0;65535;0;35&lt;/Phrase&gt;
    &lt;!-- tambahkan semua frase sesuai kebutuhan --&gt;
  &lt;/Dictionary&gt;
  &lt;!-- dictionary lainnya --&gt;
&lt;/DrvSigModbusDictionaries&gt;
</code></pre>
<p><strong>2.4 Sesuaikan berkas proyek (<code>.csproj</code>)</strong></p>
<p>Buka <code>DrvSigModbus.View/DrvSigModbus.View.csproj</code> dan pastikan ada baris berikut di dalam <code>&lt;ItemGroup&gt;</code>:</p>
<pre><code class="language-xml">&lt;None Update="Lang\DrvSigModbus.ru-RU.xml"&gt;
  &lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;/None&gt;
&lt;None Update="Lang\DrvSigModbus.en-GB.xml"&gt;
  &lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;/None&gt;
&lt;None Update="Lang\DrvSigModbus.id-ID.xml"&gt;
  &lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;/None&gt;
</code></pre>
<h2 id="langkah-3-%E2%80%93-mengganti-isi-file-namespace-string-referensi">Langkah 3 – Mengganti Isi File (Namespace, String, Referensi)</h2>
<p>Gunakan <code>sed</code> untuk mengganti semua kemunculan nama lama:</p>
<pre><code class="language-bash">find DrvSigModbus.* -type f \( -name "*.cs" -o -name "*.csproj" -o -name "*.xml" \) | \
xargs sed -i \
  -e 's/DrvModbus/DrvSigModbus/g' \
  -e 's/DevModbus/DevSigModbus/g'
</code></pre>
<p><strong>Verifikasi</strong> tidak ada yang tersisa:</p>
<pre><code class="language-bash">grep -r "DrvModbus\|DevModbus" DrvSigModbus.* --include="*.cs" --include="*.csproj" --include="*.xml"
</code></pre>
<p>(Output harus kosong)</p>
<h2 id="langkah-4-%E2%80%93-menambahkan-proyek-ke-solution">Langkah 4 – Menambahkan Proyek ke Solution</h2>
<pre><code class="language-bash">dotnet sln OpenDrivers.sln add \
  DrvSigModbus.Common/DrvSigModbus.Common.csproj \
  DrvSigModbus.Logic/DrvSigModbus.Logic.csproj \
  DrvSigModbus.View/DrvSigModbus.View.csproj
</code></pre>
<h2 id="langkah-5-%E2%80%93-build-baseline-dan-commit">Langkah 5 – Build Baseline dan Commit</h2>
<pre><code class="language-bash">dotnet build DrvSigModbus.Logic/DrvSigModbus.Logic.csproj
dotnet build DrvSigModbus.View/DrvSigModbus.View.csproj
</code></pre>
<p>Pastikan tidak ada error. Lalu commit:</p>
<pre><code class="language-bash">git add .
git commit -m "Add DrvSigModbus as baseline copy of DrvModbus"
</code></pre>
<h2 id="langkah-6-%E2%80%93-menambahkan-fitur-scaling-dari-pr-105">Langkah 6 – Menambahkan Fitur Scaling dari PR #105</h2>
<p><strong>6.1 Dari root project Rapid SCADA, unduh patch dan adaptasi ke DrvSigModbus</strong></p>
<pre><code class="language-bash">curl -L https://github.com/kumajaya/scada-v6/commit/ce3f6324822f3295fb8e6f412a7a13412ee5cdc7.patch \
  | sed -e 's|DrvModbus\.Common|DrvSigModbus.Common|g' \
        -e 's|DrvModbus\.Logic|DrvSigModbus.Logic|g' \
        -e 's|DrvModbus\.View|DrvSigModbus.View|g' \
        -e 's|DevModbusLogic|DevSigModbusLogic|g' \
        -e 's|DrvModbus\.en-GB|DrvSigModbus.en-GB|g' \
        -e 's|DrvModbus\.ru-RU|DrvSigModbus.ru-RU|g' \
  &gt; /tmp/sigmodbus-scaling.patch
</code></pre>
<p><strong>6.2 Terapkan patch</strong></p>
<pre><code class="language-bash">git apply --check /tmp/sigmodbus-scaling.patch   # dry-run
git apply /tmp/sigmodbus-scaling.patch
</code></pre>
<p><strong>6.3 Build ulang dan commit</strong></p>
<pre><code class="language-bash">dotnet build ScadaComm/OpenDrivers/DrvSigModbus.Logic/DrvSigModbus.Logic.csproj
dotnet build ScadaComm/OpenDrivers/DrvSigModbus.View/DrvSigModbus.View.csproj
git add .
git commit -m "DrvSigModbus: add scaling feature for UShort/Short registers"
</code></pre>
<h2 id="langkah-7-%E2%80%93-perbaikan-validasi-overflow-dan-ui">Langkah 7 – Perbaikan Validasi (Overflow dan UI)</h2>
<p><strong>7.1 Di <code>ModbusCmd.cs</code> (mencegah overflow pada reverse scaling)</strong></p>
<p>Cari metode <code>SetCmdData</code>, setelah <code>Math.Round(rawVal, 0)</code> tambahkan:</p>
<pre><code class="language-csharp">if (ElemType == ElemType.UShort &amp;&amp; (rawVal &lt; 0 || rawVal &gt; 65535))
    throw new ArgumentException($"Scaled value {rawVal} is out of range for UShort (0-65535).");
if (ElemType == ElemType.Short &amp;&amp; (rawVal &lt; -32768 || rawVal &gt; 32767))
    throw new ArgumentException($"Scaled value {rawVal} is out of range for Short (-32768-32767).");
</code></pre>
<p><strong>7.2 Validasi input di UI (<code>CtrlElem.cs</code> dan <code>CtrlCmd.cs</code>)</strong></p>
<ul>
<li>Tambahkan <code>using System.Drawing;</code></li>
<li>Pada event handler <code>txtScaling_TextChanged</code> (atau <code>txtCmdScaling_TextChanged</code>), lakukan validasi format (4 angka, min≠max) dan beri warna latar merah jika salah. Contoh:</li>
</ul>
<pre><code class="language-csharp">try
{
    double[] scaling = ModbusUtils.ParseDoubleArray(scalingText);
    if (scaling.Length != 4 || scaling[0] == scaling[1] || scaling[2] == scaling[3])
        txtElemScaling.BackColor = Color.LightCoral;
    else
    {
        elemTag.Elem.Scaling = scalingText;
        txtElemScaling.BackColor = SystemColors.Window;
    }
}
catch
{
    txtElemScaling.BackColor = Color.LightCoral;
}
</code></pre>
<p><strong>7.3 Amend commit terakhir</strong></p>
<pre><code class="language-bash">git add .
git commit --amend --no-edit
</code></pre>
<h2 id="langkah-8-%E2%80%93-memperbarui-deskripsi-driver">Langkah 8 – Memperbarui Deskripsi Driver</h2>
<p>Buka <code>DrvSigModbus.View/DrvSigModbusView.cs</code> dan ubah properti <code>Descr</code> menjadi:</p>
<pre><code class="language-csharp">public override string Descr
{
    get
    {
        return Locale.IsRussian ?
            "Взаимодействует с контроллерами по протоколу Modbus с поддержкой масштабирования.\n\n" +
            ... :
            "Interacts with controllers via Modbus protocol with scaling support.\n\n" +
            ...;
    }
}
</code></pre>
<p>Amend commit terakhir:</p>
<pre><code class="language-bash">git add .
git commit --amend --no-edit
</code></pre>
<h2 id="langkah-9-%E2%80%93-membangun-dan-men-deploy-driver">Langkah 9 – Membangun dan Men-deploy Driver</h2>
<pre><code class="language-bash">dotnet build ScadaComm/OpenDrivers/DrvSigModbus.Logic/DrvSigModbus.Logic.csproj -c Release
dotnet build ScadaComm/OpenDrivers/DrvSigModbus.View/DrvSigModbus.View.csproj -c Release

cp ScadaComm/OpenDrivers/DrvSigModbus.Logic/bin/Release/netstandard2.0/DrvSigModbus.Common.dll  "C:/Program Files/SCADA/ScadaComm/Drv/"
cp ScadaComm/OpenDrivers/DrvSigModbus.Logic/bin/Release/netstandard2.0/DrvSigModbus.Logic.dll   "C:/Program Files/SCADA/ScadaComm/Drv/"

cp ScadaComm/OpenDrivers/DrvSigModbus.View/bin/Release/net8.0-windows/DrvSigModbus.Common.dll   "C:/Program Files/SCADA/ScadaAdmin/Lib/"
cp ScadaComm/OpenDrivers/DrvSigModbus.View/bin/Release/net8.0-windows/DrvSigModbus.View.dll     "C:/Program Files/SCADA/ScadaAdmin/Lib/"
cp ScadaComm/OpenDrivers/DrvSigModbus.View/bin/Release/net8.0-windows/Lang/DrvSigModbus.*.xml   "C:/Program Files/SCADA/ScadaAdmin/Lang/"
</code></pre>
<p>Restart layanan <code>ScadaComm6</code>. Kemudian buka <strong>ScadaAdmin</strong> → <strong>Configuration Database</strong> → <strong>Secondary Tables</strong> → <strong>Device Types</strong>, tambah baris baru:</p>
<ul>
<li><strong>Name</strong>: <code>Sig Modbus</code></li>
<li><strong>Driver</strong>: <code>DrvSigModbus</code></li>
</ul>
<p>Saat membuat perangkat, pilih <strong>Device Type</strong> = <code>Sig Modbus</code>.</p>
<h2 id="langkah-10-%E2%80%93-menghasilkan-patch-final">Langkah 10 – Menghasilkan Patch Final</h2>
<p>Untuk distribusi atau arsip:</p>
<pre><code class="language-bash">git format-patch -1 HEAD --stdout &gt; sigmodbus-scaling-final.patch
</code></pre>
<p>Patch ini dapat diterapkan di repositori lain dengan <code>git am</code>.</p>
<hr>
<h2 id="kesimpulan">Kesimpulan</h2>
<p>Dengan panduan ini, Anda memiliki driver <code>DrvSigModbus</code> yang mandiri, mendukung scaling linear untuk <code>UShort</code>/<code>Short</code>, validasi overflow, UI responsif, dan tiga bahasa (Inggris, Rusia, Indonesia).</p>
<p>Pendekatan <em>copy then modify</em> dipilih untuk menghindari ketergantungan pada upstream, tanpa perlu mengajukan PR, serta memberikan kendali penuh atas kode. Perubahan dari upstream dapat diadaptasi secara manual sesuai kebutuhan. Strategi ini pragmatis, kokoh, dan ideal untuk lingkungan industri yang mengutamakan stabilitas.</p>

{% endraw %}