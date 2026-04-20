---
ghost_uuid: "fb00653f-0889-4487-ab15-8b5d894be9b0"
title: "Booster Expander dalam Sistem Cryogenic: Konsep Dasar hingga Monitoring Operasional"
date: "2026-04-19T09:34:56.000+07:00"
slug: "booster-expander-dalam-sistem-cryogenic-konsep-dasar-hingga-monitoring-operasional"
layout: "post"
excerpt: |
  Booster expander bukan dua mesin yang bekerja berdampingan. Ini adalah satu sistem energi — di mana expander menentukan batas, dan booster hanya mengikuti. Memahami ini mengubah cara kita membaca performa, vibrasi, dan stabilitas mesin di lapangan.
image: "https://images.unsplash.com/photo-1605141313002-fde711766543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGJhc2ljJTIwa25vd2xlZGdlfGVufDB8fHx8MTc3NjU2MjYyMHww&ixlib=rb-4.1.0&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@meganwatson?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Megan Watson</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
author:
  - "Ketut Putu Kumajaya"
tags:
  - "Practical Engineering"
  - "Field Experience"
  - "Distributed Control System"
  - "Air Separation Unit"
categories:
  - "practical-engineering"
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
url: "https://blog.kiiota.com/booster-expander-dalam-sistem-cryogenic-konsep-dasar-hingga-monitoring-operasional/"
comment_id: "69e42abd3585c0065d6f475a"
reading_time: 13
access: true
comments: true
---

{% raw %}
<p><em>Ditulis oleh Ketut Kumajaya — 19 April 2026</em></p>
<h2 id="pendahuluan">Pendahuluan</h2>
<p>Dalam sistem Air Separation Unit (ASU), booster expander adalah salah satu komponen rotating equipment yang paling sering disalahpahami. Banyak operator memandangnya sebagai dua mesin terpisah — sebuah expander dan sebuah kompresor booster — yang kebetulan terhubung pada satu shaft.</p>
<p>Padahal pemahaman yang tepat justru sebaliknya:</p>
<blockquote>
<p>Booster bukan mesin utama yang dibantu expander. Booster adalah beban — expander adalah prime mover yang memutarnya.</p>
</blockquote>
<p>Dengan kata lain, booster tidak menentukan kemampuan sistem. Ia hanya mengikuti energi yang disediakan oleh expander. Ini bukan sekadar konsep, melainkan batasan fisika yang menentukan bagaimana sistem harus dioperasikan.</p>
<p>Artikel ini membahas konsep dasar booster expander, hubungan energi di dalamnya, serta pendekatan monitoring berbasis rasio yang lebih tepat untuk operasional sehari-hari.</p>
<hr>
<h2 id="konsep-dasar-satu-sistem-energi">Konsep Dasar: Satu Sistem Energi</h2>
<p>Booster expander terdiri dari dua komponen utama dalam satu shaft:</p>
<ul>
<li><strong>Expander</strong> — gas bertekanan tinggi diekspansikan, menghasilkan kerja melalui ekstraksi enthalpy, memutar shaft, dan menghasilkan efek pendinginan yang signifikan.</li>
<li><strong>Booster</strong> — memanfaatkan energi tersebut untuk mengkompresi gas di sisi booster.</li>
</ul>
<p>Keduanya bukan dua mesin independen, melainkan satu sistem energi yang saling terikat.</p>
<blockquote>
<p>Energi yang tersedia dari expander adalah batas atas dari kerja yang dapat dilakukan oleh booster.</p>
</blockquote>
<p>Penting untuk dipahami bahwa energi expander bukanlah nilai tetap — ia sangat dinamis, dipengaruhi oleh kondisi inlet (temperatur dan tekanan), posisi nozzle, serta backpressure di sisi outlet. Inilah sebabnya kapasitas booster bisa terasa berubah meskipun tidak ada yang diubah di sisi booster itu sendiri — sumber energinya yang berfluktuasi.</p>
<p>Pendinginan pada expander bukan sekadar akibat penurunan tekanan seperti yang terjadi pada ekspansi melalui valve (efek Joule-Thomson), tetapi karena ekstraksi kerja dari gas. Inilah sebabnya expander jauh lebih efektif menghasilkan temperatur rendah dibandingkan ekspansi melalui valve biasa.</p>
<hr>

<!--kg-card-begin: html-->
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Booster Expander — Cryostar HA1660A</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f8f6; color: #1a1a18; padding: 1rem; }
  .scene { display: flex; flex-direction: column; align-items: center; padding: 1.5rem 1rem; gap: 1.2rem; max-width: 680px; margin: 0 auto; }
  .mode-toggle { display: flex; background: #e8e8e4; padding: 4px; border-radius: 20px; gap: 4px; border: 1px solid rgba(0,0,0,0.1); }
  .tgl-btn { border: none; padding: 6px 18px; border-radius: 16px; cursor: pointer; font-size: 11px; font-weight: 600; transition: all 0.2s; color: #666; background: transparent; }
  .tgl-btn.active { background: #185FA5; color: white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
  .label-row { display: flex; justify-content: space-around; width: 100%; max-width: 620px; }
  .label-box { text-align: center; }
  .label-title { font-size: 14px; font-weight: 500; }
  .label-sub { font-size: 11px; color: #666; margin-top: 2px; }
  .bar-wrap { width: 100%; max-width: 620px; }
  .bar-label { font-size: 11px; color: #666; margin-bottom: 3px; display: flex; justify-content: space-between; }
  .bar-bg { background: #e8e8e4; border-radius: 4px; height: 7px; overflow: hidden; }
  .bar-fill { height: 7px; border-radius: 4px; transition: width 0.08s; }
  .controls { display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 620px; }
  .ctrl { display: flex; align-items: center; gap: 10px; }
  .ctrl label { font-size: 12px; color: #666; width: 150px; flex-shrink: 0; }
  .ctrl input[type=range] { flex: 1; }
  .ctrl span { font-size: 12px; font-weight: 500; min-width: 40px; text-align: right; }
  .stats { display: flex; gap: 8px; width: 100%; max-width: 620px; flex-wrap: wrap; }
  .stat { flex: 1; min-width: 90px; background: #e8e8e4; border-radius: 8px; padding: 8px 10px; }
  .stat .sl { font-size: 10px; color: #666; margin-bottom: 3px; }
  .stat .sv { font-size: 15px; font-weight: 500; }
  .ok { color: #1D9E75 !important; }
  .warn { color: #BA7517 !important; }
  .danger { color: #E24B4A !important; }
  .spec-row { display: flex; gap: 8px; width: 100%; max-width: 620px; }
  .spec-card { flex: 1; background: #e8e8e4; border-radius: 8px; padding: 8px 10px; border-left: 3px solid; }
  .spec-card .sc-title { font-size: 11px; font-weight: 500; margin-bottom: 4px; }
  .spec-card .sc-row { font-size: 11px; color: #555; line-height: 1.6; }
  .badge { display: inline-block; font-size: 10px; padding: 2px 10px; border-radius: 4px; background: #fdf6e3; color: #b58900; font-weight: 600; }
  .design-note { font-size: 10px; color: #888; text-align: center; }
</style>
</head>
<body>
<div class="scene">

  <div class="mode-toggle">
    <button id="btn-warm" class="tgl-btn active" onclick="switchMode('warm')">Warm Unit</button>
    <button id="btn-cold" class="tgl-btn" onclick="switchMode('cold')">Cold Unit</button>
  </div>

  <div style="text-align:center;">
    <div class="badge" id="main-badge">Warm Unit · TC 200/45-AS · HA1660A</div>
  </div>

  <div class="spec-row">
    <div class="spec-card" style="border-color:#185FA5;">
      <div class="sc-title" style="color:#185FA5;">Expander — design</div>
      <div class="sc-row" id="spec-exp"></div>
    </div>
    <div class="spec-card" style="border-color:#888780;">
      <div class="sc-title" style="color:#5F5E5A;">Shaft — design</div>
      <div class="sc-row" id="spec-shaft"></div>
    </div>
    <div class="spec-card" style="border-color:#BA7517;">
      <div class="sc-title" style="color:#BA7517;">Booster — design</div>
      <div class="sc-row" id="spec-bst"></div>
    </div>
  </div>

  <div class="label-row">
    <div class="label-box">
      <div class="label-title" style="color:#185FA5;">Expander</div>
      <div class="label-sub" id="lbl-exp">TC 200/45-AS · prime mover</div>
    </div>
    <div class="label-box">
      <div class="label-title" style="color:#5F5E5A;">Shaft</div>
      <div class="label-sub" id="lbl-shaft">Bearing 45</div>
    </div>
    <div class="label-box">
      <div class="label-title" style="color:#BA7517;">Booster</div>
      <div class="label-sub" id="lbl-bst">beban · 1.231 kW design</div>
    </div>
  </div>

  <canvas id="c" width="620" height="210" style="max-width:100%;"></canvas>

  <div class="bar-wrap">
    <div class="bar-label"><span>Energi expander (cold production)</span><span id="ep-val">0 kW</span></div>
    <div class="bar-bg"><div class="bar-fill" id="ebar" style="background:#378ADD;"></div></div>
  </div>
  <div class="bar-wrap">
    <div class="bar-label"><span>Power dikonsumsi booster</span><span id="bp-val">0 kW</span></div>
    <div class="bar-bg"><div class="bar-fill" id="bbar" style="background:#EF9F27;"></div></div>
  </div>
  <div class="bar-wrap">
    <div class="bar-label"><span>Bearing losses</span><span id="bl-val">0 kW</span></div>
    <div class="bar-bg"><div class="bar-fill" id="bl-bar" style="background:#B4B2A9;"></div></div>
  </div>

  <div class="controls">
    <div class="ctrl">
      <label>Opening nozzle expander</label>
      <input type="range" min="0" max="100" value="77" id="nozzle" step="1">
      <span id="nozzle-out">77%</span>
    </div>
    <div class="ctrl">
      <label>Bypass booster</label>
      <input type="range" min="0" max="100" value="0" id="bypass" step="1">
      <span id="bypass-out">0%</span>
    </div>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="sl">Speed shaft</div>
      <div class="sv" id="sv">0 RPM</div>
    </div>
    <div class="stat">
      <div class="sl">ER aktual / design</div>
      <div class="sv" id="er">—</div>
    </div>
    <div class="stat">
      <div class="sl">CR aktual / design</div>
      <div class="sv" id="cr">—</div>
    </div>
    <div class="stat">
      <div class="sl">Cold production est.</div>
      <div class="sv" id="cp">0 kW</div>
    </div>
    <div class="stat">
      <div class="sl">Status</div>
      <div class="sv ok" id="st">Normal</div>
    </div>
  </div>

  <div class="design-note" id="design-note">Design point: nozzle 77.5%</div>

</div>

<script>
const data = {
  warm: {
    badge: "Warm Unit · TC 200/45-AS · HA1660A",
    tagExp: "TC 200/45-AS", bearing: "45",
    speed: 28100, loss: 27, bLossPct: 2.1,
    designNozzle: 77.5,
    exp: { pin: 30.80, pout: 5.39, er: 5.71, tin: -5.0, tout: -101 },
    bst: { pin: 30.90, pout: 51.30, cr: 1.66, tin: 40, tout: 101, pwr: 1231 },
    cold: 1258
  },
  cold: {
    badge: "Cold Unit · TC 200/50B-AS · HA1660A",
    tagExp: "TC 200/50B-AS", bearing: "50B",
    speed: 24628, loss: 55, bLossPct: 6.6,
    designNozzle: 67.0,
    exp: { pin: 70.70, pout: 5.43, er: 13.02, tin: -96.5, tout: -178 },
    bst: { pin: 51.18, pout: 71.10, cr: 1.39, tin: 40, tout: 78, pwr: 775 },
    cold: 830
  }
};

let mode = 'warm';
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;
const CY = H / 2;

let angle = 0, speed = 0, targetSpeed = 0;
let nozzle = 77, bypass = 0;

function switchMode(m) {
  mode = m;
  document.getElementById('btn-warm').className = 'tgl-btn' + (m === 'warm' ? ' active' : '');
  document.getElementById('btn-cold').className = 'tgl-btn' + (m === 'cold' ? ' active' : '');
  const d = data[m];
  document.getElementById('main-badge').textContent = d.badge;
  document.getElementById('spec-exp').innerHTML = `P inlet: ${d.exp.pin.toFixed(2)} bar abs<br>P outlet: ${d.exp.pout.toFixed(2)} bar abs<br>ER: ${d.exp.er} &nbsp;|&nbsp; T in: ${d.exp.tin.toFixed(1)} °C`;
  document.getElementById('spec-shaft').innerHTML = `Speed: ${d.speed.toLocaleString('id-ID')} RPM<br>Bearing losses: ${d.loss} kW<br>Medium: Pure N₂`;
  document.getElementById('spec-bst').innerHTML = `P inlet: ${d.bst.pin.toFixed(2)} bar abs<br>P outlet: ${d.bst.pout.toFixed(2)} bar abs<br>CR: ${d.bst.cr} &nbsp;|&nbsp; Power: ${d.bst.pwr.toLocaleString('id-ID')} kW`;
  document.getElementById('lbl-exp').textContent = `${d.tagExp} · prime mover`;
  document.getElementById('lbl-shaft').textContent = `Bearing ${d.bearing}`;
  document.getElementById('lbl-bst').textContent = `beban · ${d.bst.pwr.toLocaleString('id-ID')} kW design`;
  document.getElementById('bl-val').textContent = `${d.loss} kW`;
  document.getElementById('bl-bar').style.width = `${d.bLossPct}%`;
  document.getElementById('design-note').textContent = `Design point: nozzle ${d.designNozzle}%`;

  // Reset nozzle slider ke design nozzle mode baru
  nozzle = d.designNozzle;
  document.getElementById('nozzle').value = nozzle;
  document.getElementById('nozzle-out').textContent = nozzle.toFixed(1) + '%';
  speed = 0;
}

document.getElementById('nozzle').oninput = function () {
  nozzle = +this.value;
  document.getElementById('nozzle-out').textContent = nozzle + '%';
};
document.getElementById('bypass').oninput = function () {
  bypass = +this.value;
  document.getElementById('bypass-out').textContent = bypass + '%';
};

function lerp(a, b, t) { return a + (b - a) * t; }

function drawImpeller(cx, cy, r, blades, ang, color, active) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
  for (let i = 0; i < blades; i++) {
    ctx.save(); ctx.rotate((i / blades) * Math.PI * 2);
    ctx.beginPath(); ctx.moveTo(0, 0);
    ctx.bezierCurveTo(r * 0.25, -r * 0.18, r * 0.65, -r * 0.32, r, -r * 0.12);
    ctx.bezierCurveTo(r * 0.82, r * 0.06, r * 0.25, r * 0.09, 0, 0);
    ctx.fillStyle = active ? color + 'bb' : color + '55';
    ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  ctx.beginPath(); ctx.arc(0, 0, r * 0.16, 0, Math.PI * 2);
  ctx.fillStyle = color; ctx.fill(); ctx.restore();
}

function drawCasing(cx, cy, r, color) {
  ctx.beginPath(); ctx.arc(cx, cy, r + 14, 0, Math.PI * 2);
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([]); ctx.stroke();
}

function drawShaft(x1, x2, cy, spd, dSpeed) {
  const alpha = Math.min(1, spd / dSpeed);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x1, cy - 7); ctx.lineTo(x2, cy - 7);
  ctx.lineTo(x2, cy + 7); ctx.lineTo(x1, cy + 7); ctx.closePath();
  ctx.fillStyle = `rgba(136,135,128,${0.25 + alpha * 0.5})`; ctx.fill();
  ctx.strokeStyle = '#888780'; ctx.lineWidth = 1; ctx.stroke();
  const n = 10;
  for (let i = 0; i < n; i++) {
    const raw = x1 + ((i / n) * (x2 - x1) + (angle * 28) % (x2 - x1));
    const px = ((raw - x1) % (x2 - x1)) + x1;
    ctx.beginPath(); ctx.moveTo(px, cy - 7); ctx.lineTo(px - 10, cy + 7);
    ctx.strokeStyle = `rgba(95,94,90,${0.3 + alpha * 0.3})`; ctx.lineWidth = 1; ctx.stroke();
  }
  ctx.restore();
}

function drawFlow(cx, cy, r, dir, color, intensity) {
  if (intensity < 0.05) return;
  const t = (Date.now() / 450) % 1;
  for (let i = 0; i < 4; i++) {
    const frac = ((t + i / 4) % 1);
    const sx = cx + dir * (r + 16);
    const ex = sx + dir * 50 * frac;
    const yo = (i - 1.5) * 11;
    ctx.beginPath(); ctx.moveTo(sx, cy + yo); ctx.lineTo(ex, cy + yo);
    ctx.strokeStyle = color + Math.floor(intensity * 160).toString(16).padStart(2, '0');
    ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.stroke(); ctx.setLineDash([]);
    if (frac > 0.7) {
      ctx.beginPath();
      ctx.moveTo(ex, cy + yo - 4); ctx.lineTo(ex + dir * 6, cy + yo); ctx.lineTo(ex, cy + yo + 4);
      ctx.strokeStyle = color + 'cc'; ctx.lineWidth = 1.5; ctx.stroke();
    }
  }
}

function drawBypass(bstX, r, frac) {
  if (frac < 0.02) return;
  const t = (Date.now() / 850) % 1;
  ctx.beginPath(); ctx.setLineDash([5, 4]);
  ctx.moveTo(bstX + r + 10, CY - 12);
  ctx.bezierCurveTo(bstX + r + 55, CY - 72, bstX - r - 55, CY - 72, bstX - r - 10, CY - 12);
  ctx.strokeStyle = `rgba(186,117,23,${frac * 0.85})`; ctx.lineWidth = 2; ctx.stroke(); ctx.setLineDash([]);
  const bpx = bstX + r + 10 + t * (-r * 2 - 20);
  const bpy = CY - 12 - Math.sin(t * Math.PI) * 62;
  ctx.beginPath(); ctx.arc(bpx, bpy, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(186,117,23,${frac * 0.9})`; ctx.fill();
  ctx.font = '10px sans-serif'; ctx.fillStyle = `rgba(186,117,23,${frac * 0.9})`;
  ctx.textAlign = 'center'; ctx.fillText('recycle', bstX, CY - 80);
}

function drawDesignMarker(nozzleEl, designNozzle) {
  // Draw marker on nozzle slider at design point position
  const pct = designNozzle / 100;
  const rect = nozzleEl.getBoundingClientRect();
  // Canvas-based indicator instead
}

function frame() {
  requestAnimationFrame(frame);
  ctx.clearRect(0, 0, W, H);

  const d = data[mode];
  const nFrac = nozzle / 100;
  const bFrac = bypass / 100;
  const designFrac = d.designNozzle / 100;

  // Performance relative to design nozzle
  const performanceFactor = Math.min(1.25, Math.max(0, nFrac / designFrac));
  const effectiveFactor = Math.max(0, performanceFactor - bFrac * 0.45);

  targetSpeed = effectiveFactor * d.speed;
  speed = lerp(speed, targetSpeed, 0.04);
  const spd = speed / d.speed;
  angle += spd * 0.11;

  const expX = 130, bstX = 490, impR = 65;

  const erActual = (d.exp.er * performanceFactor).toFixed(2);
  const effectiveLoadForCR = Math.max(0, performanceFactor - bFrac * 0.4);
  const crActual = Math.max(1, d.bst.cr * effectiveLoadForCR).toFixed(2);
  const coldEst = Math.round(d.cold * performanceFactor);
  const powerEst = Math.round(d.bst.pwr * effectiveLoadForCR);
  const rpm = Math.round(speed / 100) * 100;

  drawFlow(expX, CY, impR, -1, '#378ADD', performanceFactor * 0.9);
  drawFlow(bstX, CY, impR, 1, '#EF9F27', Math.max(0, performanceFactor * 0.9 - bFrac * 0.5));
  drawBypass(bstX, impR, bFrac);
  drawShaft(expX + impR + 14, bstX - impR - 14, CY, speed, d.speed);
  drawCasing(expX, CY, impR, '#185FA5');
  drawImpeller(expX, CY, impR, 8, -angle * 1.3, '#378ADD', true);
  drawCasing(bstX, CY, impR, '#BA7517');
  drawImpeller(bstX, CY, impR, 7, angle * 1.2, '#EF9F27', bFrac < 0.05);

  ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillStyle = '#666';
  ctx.fillText(`N₂ · ${d.exp.pin.toFixed(2)} bar abs · ${d.exp.tin.toFixed(0)} °C`, expX, CY - impR - 22);
  ctx.fillText(`N₂ · ${d.bst.pin.toFixed(2)} bar abs · ${d.bst.tin.toFixed(0)} °C`, bstX, CY - impR - 22);
  ctx.fillStyle = '#378ADDcc';
  ctx.fillText(`→ ${d.exp.pout.toFixed(2)} bar · ${d.exp.tout} °C`, expX, CY + impR + 26);
  ctx.fillStyle = '#BA7517cc';
  ctx.fillText(`→ ${d.bst.pout.toFixed(2)} bar · ${d.bst.tout} °C`, bstX, CY + impR + 26);

  // Design point marker on canvas
  ctx.font = '9px sans-serif'; ctx.textAlign = 'left';
  ctx.fillStyle = Math.abs(nozzle - d.designNozzle) < 2 ? '#1D9E75' : '#BA7517';
  ctx.fillText(`▲ design: ${d.designNozzle}%`, 8, H - 6);

  document.getElementById('ebar').style.width = Math.min(100, performanceFactor * 100).toFixed(0) + '%';
  document.getElementById('ep-val').textContent = coldEst.toLocaleString('id-ID') + ' kW';
  document.getElementById('bbar').style.width = Math.min(100, effectiveLoadForCR * 100).toFixed(0) + '%';
  document.getElementById('bp-val').textContent = powerEst.toLocaleString('id-ID') + ' kW';
  document.getElementById('sv').textContent = rpm.toLocaleString('id-ID') + ' RPM';
  document.getElementById('er').textContent = erActual + ' / ' + d.exp.er;
  document.getElementById('cr').textContent = crActual + ' / ' + d.bst.cr;
  document.getElementById('cp').textContent = coldEst.toLocaleString('id-ID') + ' kW';

  const st = document.getElementById('st');
  const pct = speed / d.speed;
  if (pct < 0.2) { st.textContent = 'Terlalu lambat'; st.className = 'sv danger'; }
  else if (bFrac > 0.25) { st.textContent = 'Boros energi'; st.className = 'sv warn'; }
  else if (pct > 1.1) { st.textContent = 'Overspeed'; st.className = 'sv danger'; }
  else if (Math.abs(nozzle - d.designNozzle) <= 3 && bFrac < 0.05) { st.textContent = 'Design point'; st.className = 'sv ok'; }
  else if (pct > 0.75) { st.textContent = 'Normal'; st.className = 'sv ok'; }
  else { st.textContent = 'Partial load'; st.className = 'sv warn'; }
}

switchMode('warm');
frame();
</script>
</body>
</html>
<!--kg-card-end: html-->
<hr>
<h2 id="keseimbangan-energi-dan-dampaknya-di-lapangan">Keseimbangan Energi dan Dampaknya di Lapangan</h2>
<p>Secara fundamental:</p>
<p>$$W_{expander} = W_{booster} + W_{losses}$$</p>
<p>Dimana losses meliputi:</p>
<ul>
<li>losses mekanis (bearing, seal, leakage)</li>
<li>losses aerodinamis internal</li>
</ul>
<p>Namun operator tidak melihat persamaan ini secara langsung. Yang terlihat adalah manifestasinya:</p>
<ul>
<li>vibrasi meningkat</li>
<li>speed tidak stabil</li>
<li>mesin terasa tidak "smooth"</li>
<li>bahkan trip</li>
</ul>
<p>Ketika keseimbangan energi terganggu, sistem keluar dari design point dan memicu:</p>
<ul>
<li>perubahan pola aliran di impeller</li>
<li>munculnya unbalanced aerodynamic forces</li>
<li>berkembang menjadi rotor instability</li>
</ul>
<p>Dalam jangka panjang:</p>
<blockquote>
<p>Kondisi ini mempercepat keausan bearing dan menurunkan keandalan mesin.</p>
</blockquote>
<p>Vibrasi sering didiagnosis sebagai masalah mekanis — bearing, alignment, atau balancing. Padahal di lapangan, vibrasi pada booster expander sangat sering berakar dari energy mismatch di sisi aerodinamis, bukan dari komponen mekanis itu sendiri. Mengejar solusi mekanis tanpa memeriksa keseimbangan energi proses adalah langkah yang bisa membuang waktu dan biaya.</p>
<p>Dengan kata lain, menjaga keseimbangan energi bukan hanya soal performa — tetapi juga umur equipment.</p>
<hr>
<h2 id="power-torsi-dan-speed-batasan-yang-tidak-bisa-dinegosiasikan">Power, Torsi, dan Speed: Batasan yang Tidak Bisa Dinegosiasikan</h2>
<p>$$W = \tau \times \omega$$</p>
<p>Karena expander dan booster berada pada satu shaft:</p>
<ul>
<li>kecepatan rotasi selalu sama</li>
<li>keseimbangan torsi harus terpenuhi</li>
</ul>
<p>$$\tau_{expander} = \tau_{booster} + \tau_{losses}$$</p>
<p>Implikasi paling penting:</p>
<blockquote>
<p>Ini bukan batasan kontrol — ini batasan fisika. Booster tidak bisa dipaksa bekerja melebihi energi yang disediakan expander.</p>
</blockquote>
<p>Jika batas ini dilanggar, sistem tidak langsung berhenti — ia akan bereaksi dengan cara tertentu sebelum akhirnya tidak stabil:</p>
<ul>
<li>flow di kedua sisi berubah secara otomatis</li>
<li>rasio ekspansi dan kompresi bergeser dari design point</li>
<li>titik operasi berpindah ke zona yang kurang efisien atau tidak stabil</li>
<li>speed turun, vibrasi meningkat, dan potensi trip meningkat</li>
</ul>
<p>Memahami mekanisme ini membantu operator mengenali tanda-tanda awal ketidakseimbangan sebelum sistem mencapai kondisi kritis.</p>
<hr>
<h2 id="parameter-utama-rasio-ekspansi-dan-rasio-kompresi">Parameter Utama: Rasio Ekspansi dan Rasio Kompresi</h2>
<p>Catatan krusial:</p>
<blockquote>
<p>Semua perhitungan harus menggunakan tekanan absolut (bar abs / psia). Menggunakan tekanan gauge akan menghasilkan rasio yang salah dan interpretasi kondisi operasi yang keliru.</p>
</blockquote>
<p><strong>Rasio Ekspansi (Expander):</strong></p>
<p>$$ER = \frac{P_{inlet}}{P_{outlet}}$$</p>
<p><strong>Rasio Kompresi (Booster):</strong></p>
<p>$$CR = \frac{P_{discharge}}{P_{suction}}$$</p>
<p><strong>Mengapa bukan differential pressure (ΔP)?</strong></p>
<p>ΔP hanya menunjukkan selisih absolut tanpa memperhitungkan kondisi suction.</p>
<table>
<thead>
<tr>
<th>Suction (bar abs)</th>
<th>Discharge (bar abs)</th>
<th>ΔP (bar)</th>
<th>CR</th>
</tr>
</thead>
<tbody>
<tr>
<td>5.0</td>
<td>6.0</td>
<td>1.0</td>
<td>1.20</td>
</tr>
<tr>
<td>4.0</td>
<td>5.0</td>
<td>1.0</td>
<td>1.25</td>
</tr>
</tbody>
</table>
<blockquote>
<p>ΔP yang sama tidak selalu mencerminkan kondisi operasi yang sama.</p>
</blockquote>
<p>Dengan sistem DCS, rasio dapat dihitung secara real-time, sehingga lebih representatif dibanding ΔP.</p>
<hr>
<h2 id="temperatur-adalah-konsekuensi-bukan-target">Temperatur Adalah Konsekuensi, Bukan Target</h2>
<p>$$T_{outlet} = T_{inlet} \times \left(\frac{P_{outlet}}{P_{inlet}}\right)^{\frac{\gamma-1}{\gamma}}$$</p>
<p>Temperatur outlet adalah fungsi langsung dari rasio tekanan.</p>
<blockquote>
<p>Rasio adalah penyebab. Temperatur adalah akibat.</p>
</blockquote>
<p>Jika rasio sesuai design dan kondisi inlet normal, maka temperatur akan mengikuti secara alami.</p>
<blockquote>
<p>Mengejar temperatur tanpa memperhatikan rasio sama seperti memperbaiki gejala tanpa menyentuh penyebabnya.</p>
</blockquote>
<hr>
<h2 id="opening-nozzle-expander-satu-tuas-untuk-seluruh-sistem">Opening Nozzle Expander: Satu Tuas untuk Seluruh Sistem</h2>
<p>Opening nozzle (pada beberapa vendor dikenal sebagai VIGV atau segmental nozzle) adalah satu-satunya manipulated variable utama. Lebih tepat dipahami bukan sebagai pengatur flow semata, melainkan sebagai <strong>pengatur energi</strong> — karena yang sesungguhnya dikendalikan adalah enthalpy drop di sisi expander, yang menentukan berapa besar energi tersedia untuk memutar shaft dan menggerakkan booster. Perubahannya mempengaruhi seluruh sistem:</p>
<div style="overflow-x: auto; margin: 1em 0;">
  <div class="mermaid">
    ---
    config:
      theme: neutral
    ---
    flowchart TD
        A("Opening Nozzle ↑"):::nozzle
        B("Flow Expander ↑"):::expander
        C("Energi Expander ↑"):::expander
        D("Torsi Shaft ↑"):::shaft
        E("Speed ↑"):::shaft
        F("Booster Work ↑"):::booster
        G("Flow Booster ↑"):::booster
        H("Rasio Kompresi Berubah"):::output
        A --&gt; B
        B --&gt; C
        C --&gt;|Menghasilkan| D
        D --&gt; E
        E --&gt; F
        F --&gt; G
        G --&gt; H
        classDef nozzle fill:#fff2cc,stroke:#bf9000,stroke-width:2px,color:#000
        classDef expander fill:#cfe2f3,stroke:#1155cc,stroke-width:2px,color:#000
        classDef shaft fill:#d9ead3,stroke:#38761d,stroke-width:2px,color:#000
        classDef booster fill:#fce5cd,stroke:#e69138,stroke-width:2px,color:#000
        classDef output fill:#d9d2e9,stroke:#351c75,stroke-width:2px,color:#000
  </div>
  <figcaption style="text-align:center; font-size:14px; color:#555;">
    Pengaruh Opening Nozzle terhadap Keseimbangan Sistem Booster Expander
  </figcaption>
</div>
<blockquote>
<p>Tidak ada perubahan kecil di sistem ini — satu adjustment akan menggeser seluruh keseimbangan sistem.</p>
</blockquote>
<p><strong>Profil Vendor sebagai Peta Energi</strong></p>
<p>Vendor biasanya menyediakan tabel performa yang mencakup speed, flow, tekanan, temperatur, dan posisi nozzle.</p>
<blockquote>
<p>Setiap titik dalam tabel tersebut adalah kondisi di mana keseimbangan energi tercapai. Profil vendor adalah peta keseimbangan energi sistem.</p>
</blockquote>
<p>Vendor umumnya tidak hanya menyediakan data untuk 100% pembebanan, tetapi juga untuk beberapa titik lain — misalnya 90% dan 110%. Setiap titik pembebanan memiliki profil keseimbangan energi tersendiri dengan rasio, speed, flow, dan posisi nozzle yang berbeda. Pendekatan monitoring berbasis rasio berlaku di semua titik pembebanan tersebut — operator tinggal mengacu ke profil yang sesuai dengan kondisi operasi aktual, tanpa perlu mengekstrapolasi sendiri.</p>
<hr>
<h2 id="bypass-valve-booster-anti-surge-dan-implikasinya-terhadap-energi">Bypass Valve Booster: Anti-Surge dan Implikasinya terhadap Energi</h2>
<p>Dalam sistem booster, bypass valve merupakan bagian dari sistem <strong>anti-surge protection</strong>, yang berfungsi menjaga kompresor tetap berada pada daerah operasi yang stabil.</p>
<p>Fungsinya meliputi:</p>
<ul>
<li>menjaga flow minimum melalui booster</li>
<li>mencegah surge akibat aliran yang terlalu rendah</li>
<li>melindungi impeller dari instabilitas aerodinamis</li>
</ul>
<blockquote>
<p>Bypass valve bekerja dalam domain <strong>perilaku aliran (flow stability)</strong>, bukan dalam domain keseimbangan energi sistem.</p>
</blockquote>
<p>Namun dari sudut pandang energi, ada implikasi yang sangat penting.</p>
<p>Dalam kondisi operasi normal:</p>
<blockquote>
<p>Bypass valve seharusnya berada pada posisi <strong>full close</strong>.</p>
</blockquote>
<p>Ini bukan sekadar prosedur, tetapi konsekuensi dari sistem yang sudah seimbang:</p>
<ul>
<li>sistem tidak lagi membutuhkan recirculation untuk menjaga stabilitas</li>
<li>seluruh energi dari expander diserap oleh booster</li>
<li>tidak ada flow yang “diputar ulang” tanpa kontribusi proses</li>
</ul>
<p>Jika bypass tetap terbuka:</p>
<ul>
<li>energi kompresi terbuang</li>
<li>efisiensi menurun</li>
<li>sebagian flow hanya bersirkulasi tanpa menghasilkan kerja proses</li>
<li>kondisi operasi menjadi bias terhadap design</li>
</ul>
<blockquote>
<p>Sistem yang stabil karena bypass terbuka belum tentu sistem yang benar secara energi.</p>
</blockquote>
<p><strong>Fenomena Lapangan</strong></p>
<p>Sering ditemukan bypass yang tidak pernah benar-benar full close dan dianggap sebagai kondisi normal. Dalam banyak kasus, hal ini berawal dari fase startup yang kurang terkoordinasi:</p>
<ul>
<li>nozzle dinaikkan terlalu cepat</li>
<li>energi expander meningkat sebelum sistem siap</li>
<li>speed melonjak</li>
<li>bypass dibiarkan terbuka sebagai solusi sementara</li>
</ul>
<p>Yang menjadi masalah, kondisi sementara ini kemudian bertahan dan diwariskan sebagai “kenormalan”.</p>
<blockquote>
<p>Jika sistem hanya stabil saat bypass terbuka, kemungkinan besar sistem belum berada pada titik operasi yang benar.</p>
</blockquote>
<hr>
<h2 id="shut-off-valve-expander-isolasi-sumber-energi-sistem">Shut-Off Valve Expander: Isolasi Sumber Energi Sistem</h2>
<p>Jika bypass valve bekerja dalam menjaga stabilitas aliran selama operasi normal, maka shut-off valve berada pada level yang berbeda: <strong>isolasi total sumber energi sistem</strong>.</p>
<blockquote>
<p>Shut-off valve bukan lagi bagian dari kontrol proses, tetapi bagian dari sistem keselamatan yang memutus hubungan antara sumber energi dan rotating equipment.</p>
</blockquote>
<p>Pada kondisi trip, fokus sistem berubah dari <em>stability control</em> menjadi <em>energy isolation</em>.</p>
<p>Shut-off valve pada inlet expander berfungsi untuk:</p>
<ul>
<li>menghentikan aliran gas ke expander</li>
<li>mengisolasi sumber energi dari sistem shaft</li>
<li>menghilangkan driving force utama pada turbin expander</li>
<li>memastikan proses rundown terjadi secara terkendali dan terprediksi</li>
</ul>
<p>Secara konsep energi:</p>
<pre><code>Normal Operation:
Gas → Expander → Energy Extraction → Shaft → Booster

Trip Condition:
Gas Flow Isolated → Energy Supply Cut → Shaft Decays Naturally
</code></pre>
<p>Yang penting dipahami adalah bahwa tanpa shut-off valve, expander masih dapat “menerima energi residual” dari sistem upstream meskipun kondisi trip sudah aktif. Dalam kondisi tertentu, ini dapat menyebabkan:</p>
<ul>
<li>rundown yang tidak terkontrol</li>
<li>beban dinamis tambahan pada shaft</li>
<li>peningkatan stress pada bearing selama deceleration</li>
<li>potensi secondary mechanical issue akibat transien yang tidak terisolasi</li>
</ul>
<blockquote>
<p>Shutdown yang aman bukan hanya menghentikan operasi, tetapi memastikan tidak ada lagi energi baru yang masuk ke sistem.</p>
</blockquote>
<hr>
<h2 id="perbedaan-konseptual-yang-perlu-dipahami">Perbedaan Konseptual yang Perlu Dipahami</h2>
<table>
<thead>
<tr>
<th>Aspek</th>
<th>Bypass Valve</th>
<th>Shut-Off Valve</th>
</tr>
</thead>
<tbody>
<tr>
<td>Peran utama</td>
<td>Stabilitas aliran (anti-surge)</td>
<td>Isolasi energi</td>
</tr>
<tr>
<td>Domain</td>
<td>Flow dynamics</td>
<td>Energy boundary</td>
</tr>
<tr>
<td>Kondisi normal</td>
<td>Menutup (ideal)</td>
<td>Terbuka</td>
</tr>
<tr>
<td>Kondisi trip</td>
<td>Tidak utama</td>
<td>Menutup cepat dan pasti</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="penegasan-arsitektur-sistem">Penegasan Arsitektur Sistem</h2>
<blockquote>
<p>Bypass valve menjaga sistem tetap stabil dalam domain operasi.<br>
Shut-off valve memastikan sistem benar-benar terputus dari sumber energi saat keluar dari domain operasi.</p>
</blockquote>
<p>Dengan kata lain:</p>
<ul>
<li>bypass valve bekerja <strong>di dalam sistem</strong></li>
<li>shut-off valve bekerja <strong>di batas sistem</strong></li>
</ul>
<p>Keduanya tidak saling menggantikan, karena bekerja pada dua level yang berbeda: <em>operational stability vs energy isolation boundary</em>.</p>
<hr>
<h2 id="seal-gas-dan-lube-oil-parameter-pendukung-yang-tidak-boleh-diabaikan">Seal Gas dan Lube Oil: Parameter Pendukung yang Tidak Boleh Diabaikan</h2>
<p>Di luar keseimbangan energi proses, ada dua sistem pendukung yang dapat menghasilkan gejala yang sama di lapangan — khususnya pada vibrasi dan bearing temperature — dan sering luput dari perhatian dalam diagnostik awal.</p>
<p>Dengan kata lain:</p>
<blockquote>
<p>Tidak semua vibrasi berasal dari ketidakseimbangan energi, tetapi semua kemungkinan harus dipisahkan dengan jelas sebelum tindakan diambil.</p>
</blockquote>
<p><strong>Seal gas pressure:</strong></p>
<p>Seal gas berfungsi mencegah process gas masuk ke area bearing. Jika tekanan seal gas tidak mencukupi atau tidak stabil:</p>
<ul>
<li>process gas dapat merembes masuk ke bearing area</li>
<li>karakteristik pelumasan terganggu</li>
<li>bearing temperature naik dan vibrasi meningkat</li>
</ul>
<p><strong>Lube oil:</strong></p>
<p>Tekanan dan kondisi oli secara langsung menentukan kualitas film pelumasan di bearing. Jika tekanan oli terlalu rendah atau oli terkontaminasi:</p>
<ul>
<li>film oli tidak terbentuk sempurna</li>
<li>terjadi kontak metal-to-metal</li>
<li>bearing temperature naik dan vibrasi meningkat</li>
</ul>
<p>Perlu diperhatikan bahwa gejala yang muncul dari masalah seal gas atau lube oil dapat sangat mirip dengan gejala akibat ketidakseimbangan energi, seperti:</p>
<ul>
<li>peningkatan vibrasi</li>
<li>kenaikan bearing temperature</li>
<li>operasi yang terasa tidak stabil</li>
</ul>
<blockquote>
<p>Sebelum menyimpulkan bahwa vibrasi berasal dari ketidakseimbangan energi atau masalah mekanis struktural, kondisi seal gas dan lube oil perlu diperiksa terlebih dahulu — keduanya adalah variabel independen yang dapat menghasilkan gejala serupa.</p>
</blockquote>
<hr>
<h2 id="prosedur-startup-melewati-critical-speed-dengan-benar">Prosedur Startup: Melewati Critical Speed dengan Benar</h2>
<p>Contoh sistem dengan dua critical speed (misal 15.500 dan 19.000 RPM):</p>
<p><strong>Fase 1 — Menuju Critical Speed Pertama</strong></p>
<ul>
<li>Naikkan nozzle dengan cepat</li>
<li>Lewati critical speed pertama sesegera mungkin</li>
<li>Bypass masih terbuka</li>
</ul>
<p><strong>Fase 2 — Antar Critical Speed</strong></p>
<ul>
<li>Mulai koordinasi nozzle dan bypass secara proporsional</li>
<li>Hindari berlama-lama di zona ini</li>
</ul>
<p><strong>Fase 3 — Setelah Critical Speed Kedua</strong></p>
<ul>
<li>Semua critical speed terlewati</li>
<li>Koordinasi penuh, nozzle naik proporsional dengan bypass closing</li>
<li>Target: bypass full close</li>
</ul>
<blockquote>
<p>Yang berbahaya bukan melewati critical speed, tetapi terlalu lama berada di dalamnya.</p>
</blockquote>
<p>Untuk sistem dengan satu critical speed, prosedur menjadi dua fase — cepat melewati critical speed, lalu koordinasi penuh hingga bypass full close.</p>
<hr>
<h2 id="monitoring-berbasis-rasio">Monitoring Berbasis Rasio</h2>
<p>Pendekatan monitoring terbaik adalah membandingkan rasio aktual dengan design secara bersamaan untuk kedua sisi:</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Formula</th>
<th>Makna</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rasio Ekspansi</td>
<td>$ER = P_{inlet} / P_{outlet}$</td>
<td>Performa expander</td>
</tr>
<tr>
<td>Rasio Kompresi</td>
<td>$CR = P_{discharge} / P_{suction}$</td>
<td>Performa booster</td>
</tr>
</tbody>
</table>
<p>Namun yang lebih powerful adalah melihat <strong>hubungan antara ER dan CR</strong>, bukan hanya masing-masing secara terpisah. Pola korelasi keduanya memberikan informasi diagnostik yang jauh lebih kaya:</p>
<table>
<thead>
<tr>
<th>Pola</th>
<th>Interpretasi</th>
</tr>
</thead>
<tbody>
<tr>
<td>ER naik, CR tidak mengikuti</td>
<td>Energy mismatch — energi expander tidak terserap optimal oleh booster</td>
</tr>
<tr>
<td>ER stabil, CR naik</td>
<td>Kemungkinan masalah downstream booster</td>
</tr>
<tr>
<td>ER turun, CR turun bersamaan</td>
<td>Pergeseran kondisi operasi secara keseluruhan — periksa inlet expander dan nozzle</td>
</tr>
<tr>
<td>ER &amp; CR keduanya menyimpang dari design</td>
<td>Sistem di luar design envelope — kembalikan ke profil vendor</td>
</tr>
</tbody>
</table>
<p>Pendekatan berbasis pola korelasi ini adalah langkah menuju condition-based monitoring yang lebih proaktif.</p>
<hr>
<h2 id="panduan-interpretasi-untuk-operator">Panduan Interpretasi untuk Operator</h2>
<table>
<thead>
<tr>
<th>Kondisi</th>
<th>Kemungkinan Penyebab</th>
<th>Indikasi Vibrasi</th>
<th>Tindakan</th>
</tr>
</thead>
<tbody>
<tr>
<td>ER tinggi</td>
<td>P inlet tinggi / outlet rendah</td>
<td>Meningkat</td>
<td>Periksa upstream</td>
</tr>
<tr>
<td>CR tinggi</td>
<td>Discharge tinggi</td>
<td>Meningkat</td>
<td>Periksa downstream</td>
</tr>
<tr>
<td>ER &amp; CR menyimpang</td>
<td>Di luar design envelope</td>
<td>Instability</td>
<td>Kembali ke profil vendor</td>
</tr>
<tr>
<td>Speed fluktuatif</td>
<td>Ketidakseimbangan energi</td>
<td>Fluktuatif</td>
<td>Evaluasi nozzle &amp; bypass</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="estimasi-flow">Estimasi Flow</h2>
<p>Pendekatan berbasis keseimbangan energi dengan asumsi proses isentropik dan efisiensi konstan:</p>
<p>$$\dot{m}_{expander} = \frac{W_{expander}}{\Delta h} \times \frac{1}{\eta_{expander}}$$</p>
<p>$$\dot{m}_{booster} = \frac{W_{booster}}{\Delta h} \times \eta_{booster}$$</p>
<p>Catatan penting:</p>
<ul>
<li>Formula ini valid dengan asumsi <strong>medium gas yang digunakan konsisten dengan kondisi design</strong>. Jika terjadi perubahan komposisi gas yang signifikan, diperlukan koreksi terhadap density atau molecular weight.</li>
<li>Estimasi paling akurat di sekitar design point.</li>
<li>Efisiensi berubah terhadap flow dan speed — pada kondisi low load, estimasi menjadi kurang presisi.</li>
</ul>
<hr>
<h2 id="implementasi-di-dcs">Implementasi di DCS</h2>
<h3 id="python">Python</h3>
<pre><code class="language-python"># Input
P_exp_inlet     = 6.0   # bar abs
P_exp_outlet    = 1.4   # bar abs
P_bst_suction   = 5.5   # bar abs
P_bst_discharge = 6.2   # bar abs

# Design
ER_design = 6.0 / 1.4
CR_design = 6.2 / 5.5

# Rasio aktual (dengan proteksi division by zero)
ER_actual = P_exp_inlet / P_exp_outlet if P_exp_outlet &gt; 0 else 0
CR_actual = P_bst_discharge / P_bst_suction if P_bst_suction &gt; 0 else 0

# Deviasi terhadap design (%)
ER_deviation = (ER_actual - ER_design) / ER_design * 100 if ER_design &gt; 0 else 0
CR_deviation = (CR_actual - CR_design) / CR_design * 100 if CR_design &gt; 0 else 0

print(f"ER Aktual : {ER_actual:.3f} (Design: {ER_design:.3f}, Deviasi: {ER_deviation:.2f}%)")
print(f"CR Aktual : {CR_actual:.3f} (Design: {CR_design:.3f}, Deviasi: {CR_deviation:.2f}%)")
</code></pre>
<p>📎 Bisa langsung dicoba di: 👉 <a href="https://onecompiler.com/python?ref=blog.kiiota.com">Python Online Compiler</a></p>
<h3 id="structured-text-plc-dcs">Structured Text (PLC / DCS)</h3>
<pre><code class="language-pascal">(* Input Variables *)
VAR
    P_EXP_INLET     : REAL;  (* Tekanan inlet expander, bar abs *)
    P_EXP_OUTLET    : REAL;  (* Tekanan outlet expander, bar abs *)
    P_BST_SUCTION   : REAL;  (* Tekanan suction booster, bar abs *)
    P_BST_DISCHARGE : REAL;  (* Tekanan discharge booster, bar abs *)
    ER_DESIGN       : REAL;  (* Rasio ekspansi design *)
    CR_DESIGN       : REAL;  (* Rasio kompresi design *)
END_VAR

(* Output Variables *)
VAR
    ER_ACTUAL    : REAL;  (* Rasio ekspansi aktual *)
    CR_ACTUAL    : REAL;  (* Rasio kompresi aktual *)
    ER_DEVIATION : REAL;  (* Deviasi ER, % *)
    CR_DEVIATION : REAL;  (* Deviasi CR, % *)
END_VAR

(* Kalkulasi Rasio *)
IF P_EXP_OUTLET &gt; 0.0 THEN
    ER_ACTUAL := P_EXP_INLET / P_EXP_OUTLET;
END_IF;

IF P_BST_SUCTION &gt; 0.0 THEN
    CR_ACTUAL := P_BST_DISCHARGE / P_BST_SUCTION;
END_IF;

(* Deviasi terhadap design *)
IF ER_DESIGN &gt; 0.0 THEN
    ER_DEVIATION := (ER_ACTUAL - ER_DESIGN) / ER_DESIGN * 100.0;
END_IF;

IF CR_DESIGN &gt; 0.0 THEN
    CR_DEVIATION := (CR_ACTUAL - CR_DESIGN) / CR_DESIGN * 100.0;
END_IF;
</code></pre>
<hr>
<h2 id="kesimpulan">Kesimpulan</h2>
<p>Booster expander bukan dua mesin terpisah, melainkan satu sistem energi yang saling terikat.</p>
<p>Expander adalah sumber energi. Booster adalah beban yang mengikuti. Energi dari expander adalah batas atas yang tidak bisa dilanggar — ini bukan soal kontrol, tetapi hukum fisika.</p>
<p>Parameter utama yang harus dijaga adalah rasio — rasio ekspansi menentukan performa expander, rasio kompresi menentukan performa booster. Temperatur bukan target utama, melainkan konsekuensi dari rasio yang tercapai.</p>
<p>Opening nozzle adalah satu tuas yang menggeser seluruh keseimbangan sistem — mempengaruhi speed, flow, rasio, dan temperatur secara bersamaan.</p>
<p>Bypass valve harus berada dalam kondisi full close saat operasi normal. Jika tidak, energi terbuang dan kondisi operasi yang sebenarnya menjadi tidak terlihat.</p>
<p>Profil vendor bukan sekadar referensi, melainkan peta keseimbangan energi yang harus dijaga.</p>
<p>Dengan memahami hubungan ini dan mengimplementasikan monitoring berbasis rasio di DCS, operator tidak hanya membaca angka — tetapi memahami kondisi sistem secara menyeluruh.</p>
<p>Booster expander bukan sistem yang bisa dikontrol secara bebas — ia adalah sistem yang harus dipahami batas energinya. Operator yang memahami energi tidak menunggu alarm untuk bereaksi; mereka membaca perilaku mesin dan mengenali ketidakseimbangan sebelum menjadi masalah.</p>
<blockquote>
<p>Pada akhirnya, yang dijaga bukan sekadar parameter — tetapi keseimbangan energi sistem secara keseluruhan.</p>
</blockquote>

{% endraw %}