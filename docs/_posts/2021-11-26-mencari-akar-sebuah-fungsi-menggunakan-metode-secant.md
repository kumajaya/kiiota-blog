---
ghost_uuid: "366114e8-5dd0-46d0-b99e-8c4a7bf0104e"
title: "Mencari akar sebuah fungsi menggunakan metode secant"
date: "2021-11-26T01:14:20.000+07:00"
slug: "mencari-akar-sebuah-fungsi-menggunakan-metode-secant"
layout: "post"
excerpt: |
  Artikel ini untuk mengeksplorasi kemampuan Ghost menampilkan formula matematika \( {\LaTeX} \), menguji dukungan syntax highlighting dan line numbering kode sumber agar konten teknis lebih menarik.
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI1fHxtYXRofGVufDB8fHx8MTYzNzk5NDY0OQ&ixlib=rb-1.2.1&q=80&w=2000"
image_alt: ""
image_caption: "<span style=\"white-space: pre-wrap;\">Photo by </span><a href=\"https://unsplash.com/@antoine1003?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Antoine Dautry</span></a><span style=\"white-space: pre-wrap;\"> / </span><a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\"><span style=\"white-space: pre-wrap;\">Unsplash</span></a>"
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
url: "https://blog.kiiota.com/mencari-akar-sebuah-fungsi-menggunakan-metode-secant/"
comment_id: "619f9dd5664261b1a275660b"
reading_time: 3
access: true
comments: true
---

{% raw %}
<p><a href="https://en.wikipedia.org/wiki/Secant_method?ref=blog.kiiota.com">Metode secant</a> digunakan untuk mencari akar persamaan \( f(x) = 0 \). Metode ini dimulai dari dua taksiran berbeda \( x_1 \) dan \( x_2 \)  untuk akarnya. Ini adalah prosedur iteratif yang melibatkan interpolasi linier ke akar. Iterasi berhenti jika perbedaan antara dua nilai antara lebih kecil dari faktor konvergensi. Contoh fungsi sederhana:</p><p>\[ 2+x=5 \]</p><p>akan dengan mudah dibalik sehingga nilai \( x \) bisa ditemukan dengan fungsi:</p><p>\[ x=5-2 \]</p><p>Bagaimana jika fungsinya adalah:</p><p>\( \scriptsize y=4.86\times e^{\left( \frac{1}{x}\left( -5.94\times(1-x)+1.36\times(1-x)^{1.5}-0.47\times(1-x)^2 -1.54\times(1-x)^{4.5} \right) \right)} \)</p><p>Berapa nilai \( x \) jika \( y \) diketahui? Di sini kita memerlukan sebuah algoritma untuk membantu menemukan akar dari sebuah fungsi yang kompleks. Tulisan di sini terbatas pada metode secant dan sebuah contoh implementasi nyata.</p><p>Algoritma ini awalnya penulis perlukan karena ada kebutuhan untuk menghitung <em>vapor temperature liquid</em> Argon yang kemudian akan digunakan untuk menghitung <em>liquid density</em>. Penulis menemukan referensi dan properti <em>liquid</em> Argon yang cukup lengkap dari <a href="https://lar.bnl.gov/properties/basic.html?ref=blog.kiiota.com">BNL Group</a> tetapi alih-alih menggunakan <em>Antoine equtation</em> yang lebih sederhana dan mudah dibalik, ternyata menggunakan <em>Wagner equtation</em> yang rumit.</p><p>Mari kita mulai dengan membaca referensi dan kode dari <a href="https://www.geeksforgeeks.org/program-to-find-root-of-an-equations-using-secant-method/?ref=blog.kiiota.com">GeeksforGeeks</a>, implementasi JavaScript saya salin di sini:</p><pre><code class="language-javascript">// JavaScript Program to find root of an
// equations using secant method

// function takes value of x and returns f(x)
function f(x)
{
	// we are taking equation as x^3+x-1
	let f = Math.pow(x, 3) + x - 1;
	return f;
}

function secant(x1, x2, E)
{
	let n = 0, xm, x0, c;
	if (f(x1) * f(x2) &lt; 0) {
		do {
			// calculate the intermediate value
			x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));

			// check if x0 is root of equation or not
			c = f(x1) * f(x0);

			// update the value of interval
			x1 = x2;
			x2 = x0;

			// update number of iteration
			n++;

			// if x0 is the root of equation then break the loop
			if (c == 0)
				break;
			xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
		} while (Math.abs(xm - x0) &gt;= E); // repeat the loop
								// until the convergence

		document.write("Root of the given equation=" + x0.toFixed(6) + "&lt;br&gt;");
		document.write("No. of iterations = " + n + "&lt;br&gt;");
	} else
		document.write("Can not find a root in the given interval");
}

// Driver code
	// initializing the values
	let x1 = 0, x2 = 1, E = 0.0001;
	secant(x1, x2, E);


// This code is contributed by Surbhi Tyagi.</code></pre><p>Anda bisa melakukan pengujian <em>script </em>di atas di <a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_editor&ref=blog.kiiota.com">JavaScript Online Editor</a> milik <a href="https://www.w3schools.com/?ref=blog.kiiota.com">W3Schools</a> dengan sepenuhnya mengganti seluruh bagian <em>script </em>dengan <em>script </em>di atas.</p><p>Selanjutnya kalaupun Anda masih bingung, mari kita sederhanakan fungsi dari BNL:</p><p>\[ \scriptsize p_b=p_c\times e^{\frac{T_c}{T}\left(a_1\phi+a_2\phi^{1.5}+a_3\phi^2+a_4\phi^{4.5}\right)} \]</p><p>dengan: \( \scriptsize \phi=(1-T/T_c), \quad T_c = 150.687 \text{K}, \quad p_c = 4.863 \text{MPa}, \quad a_1 = -5.9409785, \\ a_2 = 1.3553888, \quad a_3 = -0.46497607, \quad a_4 = -1.5399043 \)</p><p>menjadi: \( \scriptsize y=p_c\times e^{{\left( \frac{1}{x}\left( a_1\times(1-x)+a_2\times(1-x)^{1.5}+a_3\times(1-x)^{2}+a_4\times(1-x)^{4.5} \right) \right)}}\allowbreak \)</p><p>atau bentuk input WolframAlpha:</p><pre><code>y=4.863*e^(1/x*(-5.9409785*(1-x) + 1.3553888*(1-x)^1.5 - 0.46497607*(1-x)^2 - 1.5399043*(1-x)^4.5))</code></pre><p>Kemudian kita memerlukan nilai \( x_1 \) dan \( x_2 \), <a href="https://www.wolframalpha.com/?ref=blog.kiiota.com">WolframAlpha </a>bisa membantu menemukan nilai <a href="https://www.wolframalpha.com/input/?i=y%3D4.863*e%5E%281%2Fx*%28-5.9409785*%281-x%29+%2B+1.3553888*%281-x%29%5E1.5+%2B+-0.46497607*%281-x%29%5E2+%2B+-1.5399043*%281-x%29%5E4.5%29%29+where+x%3D83.8058%2F150.687&ref=blog.kiiota.com">x1</a> dan <a href="https://www.wolframalpha.com/input/?i=y%3D4.863*e%5E%281%2Fx*%28-5.9409785*%281-x%29+%2B+1.3553888*%281-x%29%5E1.5+%2B+-0.46497607*%281-x%29%5E2+%2B+-1.5399043*%281-x%29%5E4.5%29%29+where+x%3D150.687%2F150.687&ref=blog.kiiota.com">x2</a> itu. Kemudian kembali lagi ke <a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_editor&ref=blog.kiiota.com">JavaScript Online Editor</a> milik W3Schools dengan sepenuhnya mengganti seluruh <em>script </em>dengan <em>script </em>berikut:</p><pre><code class="language-javascript">// JavaScript Program to find root of an
// equations using secant method

// function takes value of x and returns f(x)
function f(x, y)
{
	// we are taking equation as 4.863*e^(1/x*(-5.9409785*(1-x) + 1.3553888*(1-x)^1.5 + -0.46497607*(1-x)^2 + -1.5399043*(1-x)^4.5))
	let f = (-y + 4.863 * Math.exp((-5.9409785*(1 - x) + 1.3553888*Math.pow(1 - x,1.5) - 0.46497607*Math.pow(1 - x,2) - 1.5399043*Math.pow(1 - x,4.5))/x));
	return f;
}

function secant(x1, x2, E, y)
{
	let n = 0, xm, x0, c;
	if (f(x1, y) * f(x2, y) &lt; 0) {
		do {
			// calculate the intermediate value
			x0 = (x1 * f(x2, y) - x2 * f(x1, y)) / (f(x2, y) - f(x1, y));

			// check if x0 is root of equation or not
			c = f(x1, y) * f(x0, y);

			// update the value of interval
			x1 = x2;
			x2 = x0;

			// update number of iteration
			n++;

			// if x0 is the root of equation then break the loop
			if (c == 0)
				break;
			xm = (x1 * f(x2, y) - x2 * f(x1, y)) / (f(x2, y) - f(x1, y));
		} while (Math.abs(xm - x0) &gt;= E); // repeat the loop
								// until the convergence

		document.write("Root of the given equation=" + (x0*150.687).toFixed(6) + "&lt;br&gt;"); // temperature in K
		document.write("No. of iterations = " + n + "&lt;br&gt;");
	} else
		document.write("Can not find a root in the given interval");
}

// Driver code
	// initializing the values
	let x1 = 0.556158, x2 = 1.0, E = 0.00000001;
	secant(x1, x2, E, 0.101325); // pressure in MPa


// This code is contributed by Surbhi Tyagi, modified by Ketut Putu Kumajaya.</code></pre><p>Dengan metode secant di atas maka kita bisa menduga temperatur<em> liquid</em> Argon berdasarkan <em>saturated pavor pressure</em>-nya. Dari temperatur, kemudian kita bisa menghitung <em>density</em>.</p>
{% endraw %}