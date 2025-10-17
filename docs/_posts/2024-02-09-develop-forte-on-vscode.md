---
ghost_uuid: "be9d91b4-2e4d-4f02-9832-3d43075a1a86"
title: "Develop 4diac FORTE on Visual Studio Code"
date: "2024-02-09T21:58:14.000+07:00"
slug: "develop-forte-on-vscode"
layout: "post"
excerpt: |
  From Wikipedia:
  
  Visual Studio Code, also commonly referred to as VS Code,[9] is a source-code editor developed by Microsoft for Windows, Linux and macOS.[10] Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add functionality.
  
  Aside from the whole idea of being lightweight and starting quickly, Visual Studio Code has much
image: "/kiiota-blog/assets/media/be9d91b4-2e4d-4f02-9832-3d43075a1a86-vscode-1.png"
image_alt: ""
image_caption: ""
author:
  - "Ketut Putu Kumajaya"
tags:
  - "4diac Forte"
  - "VSCode"
categories:
  - "forte"
featured: true
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
url: "https://blog.kiiota.com/develop-forte-on-vscode/"
comment_id: "65c464280949ff03f1941f95"
reading_time: 8
access: true
comments: true
---

{% raw %}
<p><em>From <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code?ref=blog.kiiota.com">Wikipedia</a></em>:</p><blockquote><strong>Visual Studio Code</strong>, also commonly referred to as <strong>VS Code</strong>,<sup><a href="https://en.wikipedia.org/wiki/Visual_Studio_Code?ref=blog.kiiota.com#cite_note-10">[9]</a></sup> is a <a href="https://en.wikipedia.org/wiki/Source-code_editor?ref=blog.kiiota.com">source-code editor</a> developed by <a href="https://en.wikipedia.org/wiki/Microsoft?ref=blog.kiiota.com">Microsoft</a> for <a href="https://en.wikipedia.org/wiki/Windows?ref=blog.kiiota.com">Windows</a>, <a href="https://en.wikipedia.org/wiki/Linux?ref=blog.kiiota.com">Linux</a> and <a href="https://en.wikipedia.org/wiki/MacOS?ref=blog.kiiota.com">macOS</a>.<sup><a href="https://en.wikipedia.org/wiki/Visual_Studio_Code?ref=blog.kiiota.com#cite_note-TechCrunch-11">[10]</a></sup> Features include support for <a href="https://en.wikipedia.org/wiki/Debugging?ref=blog.kiiota.com">debugging</a>, <a href="https://en.wikipedia.org/wiki/Syntax_highlighting?ref=blog.kiiota.com">syntax highlighting</a>, <a href="https://en.wikipedia.org/wiki/Intelligent_code_completion?ref=blog.kiiota.com">intelligent code completion</a>, <a href="https://en.wikipedia.org/wiki/Snippet_(programming)?ref=blog.kiiota.com">snippets</a>, <a href="https://en.wikipedia.org/wiki/Code_refactoring?ref=blog.kiiota.com">code refactoring</a>, and embedded <a href="https://en.wikipedia.org/wiki/Git?ref=blog.kiiota.com">Git</a>. Users can change the <a href="https://en.wikipedia.org/wiki/Theme_(computing)?ref=blog.kiiota.com">theme</a>, <a href="https://en.wikipedia.org/wiki/Keyboard_shortcut?ref=blog.kiiota.com">keyboard shortcuts</a>, preferences, and install <a href="https://en.wikipedia.org/wiki/Plug-in_(computing)?ref=blog.kiiota.com">extensions</a> that add functionality.</blockquote><p>Aside from the whole idea of being lightweight and starting quickly, Visual Studio Code has much features that was adapted from Visual Studio technology and available for several different operating system. The code in the <a href="https://github.com/Microsoft/vscode/?ref=blog.kiiota.com" rel="nofollow">Visual Studio Code repository</a> is open source under the MIT License. Although the Community edition of Microsoft Visual Studio is available free of charge, in my opinion Visual Studio Code is a better IDE choice for 4diac FORTE development or any other open source project in general.</p><p>We can quickly develop FORTE with standard features in Visual Studio Code but we will take a bit long journey to build FORTE with almost complete features including Modbus, LuaJIT, MQTT, and OPC UA. Let's start it!</p><h2 id="preparing-build-tools-for-forte">Preparing build tools for FORTE</h2><!--kg-card-begin: markdown--><ol>
<li><strong>Download and install <a href="http://https//git-scm.com/download/win?ref=blog.kiiota.com">64-bit Git for Windows</a></strong></li>
<li><strong>Download and install <a href="https://cmake.org/download/?ref=blog.kiiota.com">64-bit CMake for Windows</a></strong></li>
<li><strong>Download and install <a href="https://www.python.org/downloads/?ref=blog.kiiota.com">64-bit Python for Windows</a></strong></li>
<li><strong>Download and install <a href="https://strawberryperl.com/?ref=blog.kiiota.com">64-bit Perl for Windows</a></strong></li>
<li><strong>Download and install <a href="https://www.msys2.org/?ref=blog.kiiota.com">MSYS2</a></strong></li>
</ol>
<!--kg-card-end: markdown--><p>When MSYS2 is ready for you and a terminal for the UCRT64 environment launched, check MSYS2 update via pacman:</p><pre><code class="language-javascript">$ pacman -Suy</code></pre><figure class="kg-card kg-image-card"><img src="/kiiota-blog/assets/media/be9d91b4-2e4d-4f02-9832-3d43075a1a86-msys2-update.PNG" class="kg-image" alt loading="lazy" width="721" height="412"></figure><p>In some cases, certain core packages will get updated and pacman will prompt you to close all terminals:</p><pre><code class="language-javascript">:: To complete this update all MSYS2 processes including this terminal will be closed.
   Confirm to proceed [Y/n]</code></pre><p>After confirming you need to start a new terminal and run the update again (<code>pacman -Suy</code>) to update the remaining non-core packages.</p><!--kg-card-begin: markdown--><ol start="6">
<li><strong>Install MinGW-w64 gcc, make, and autotools from inside MSYS2 terminal:</strong></li>
</ol>
<!--kg-card-end: markdown--><pre><code class="language-javascript">$ pacman -S mingw-w64-ucrt-x86_64-gcc
$ pacman -S mingw-w64-ucrt-x86_64-make
$ pacman -S mingw-w64-ucrt-x86_64-autotools
$ ln -sf /ucrt64/bin/mingw32-make.exe /ucrt64/bin/make.exe</code></pre><p>GNU autotools with automake, autoconf, and libtool inside needed by libmodbus build from source.</p><!--kg-card-begin: markdown--><ol start="7">
<li><strong>Update MSYS2 PATH variable to tell MSYS2 where to find native Windows utilities (Git, CMake, Python):</strong></li>
</ol>
<!--kg-card-end: markdown--><pre><code class="language-javascript">$ echo "PATH=\$PATH:/c/Program\ Files/Git/bin:/c/Program\ Files/CMake/bin:/c/Program\ Files/Python312:/c/Program\ Files/Python312/Scripts" &gt;&gt; ~/.bash_profile
$ exit</code></pre><p>Preparing build tools for FORTE build on Windows finish. Yes, actually we can build FORTE completely on MSYS2 terminal without a nice IDE.</p><!--kg-card-begin: markdown--><ol start="8">
<li><strong>Build FORTE library dependencies on MSYS2 terminal</strong></li>
</ol>
<!--kg-card-end: markdown--><p>Start MSYS2 terminal again to compile two library dependencies for FORTE that must be compiled in UNIX like terminal on Windows. Follow these steps to build libmodbus:</p><blockquote>Update: Run autoreconf-2.69 before running ./autogen.sh to force libmodbus to use autoconf version 2.69</blockquote><pre><code class="language-javascript">$ mkdir -p /c/Users/$(whoami)/vscode/forte/sources
$ mkdir -p /c/Users/$(whoami)/vscode/forte/install/x86_w64
$ cd /c/Users/$(whoami)/vscode/forte/sources
$ git clone https://github.com/stephane/libmodbus.git --depth=1
$ cd libmodbus
$ autoreconf-2.69
$ ./autogen.sh
$ ./configure --with-pic --enable-static --enable-shared=no --disable-tests --prefix=/c/Users/$(whoami)/vscode/forte/install/x86_w64
$ make -j4
$ make install
$ make clean</code></pre><p>And follow these steps to build LuaJIT:</p><pre><code class="language-javascript">$ cd /c/Users/$(whoami)/vscode/forte/sources
$ git clone https://github.com/LuaJIT/LuaJIT.git --depth=1
$ cd LuaJIT
$ make -j4 CFLAGS=-DLUAJIT_ENABLE_LUA52COMPAT TARGET_SYS=Windows
$ make install PREFIX=/c/Users/$(whoami)/vscode/forte/install/x86_w64
$ rm /c/Users/$(whoami)/vscode/forte/install/x86_w64/bin/luajit*
$ rm /c/Users/$(whoami)/vscode/forte/install/x86_w64/lib/libluajit*
$ cp src/luajit.exe /c/Users/$(whoami)/vscode/forte/install/x86_w64/bin
$ cp src/lua51.dll /c/Users/$(whoami)/vscode/forte/install/x86_w64/bin
$ make clean</code></pre><p>Clone the rest FORTE library dependencies, we will build it later on Visual Studio Code:</p><pre><code class="language-javascript">$ cd /c/Users/$(whoami)/vscode/forte/sources
$ git clone https://github.com/Mbed-TLS/mbedtls.git --depth=1
$ cd mbedtls
$ python -m pip install --user -r scripts/basic.requirements.txt
$ git submodule update --init --depth 1
$ cd ../
$ git clone https://github.com/eclipse/paho.mqtt.c.git --depth=1
$ git clone https://github.com/open62541/open62541.git -b pack/v1.3.9 --depth=1
$ cd open62541
$ git submodule update --init --recursive --depth 1
$ cd</code></pre><h2 id="preparing-visual-studio-code-for-forte">Preparing Visual Studio Code for FORTE</h2><!--kg-card-begin: markdown--><ol>
<li><strong>Set Windows PATH variable</strong></li>
</ol>
<!--kg-card-end: markdown--><p>Enter "Edit the system environment variables" in the Search bar and click the button "Environment Variables". Change the PATH variable and add the path where your MinGW-w64 has been installed to e.g., C:\msys64\ucrt64\bin. Strawberry Perl includes their own make and cmake version, make sure their environment settings have a lower priority than our MinGW-w64 and the official CMake installation environment settings. Also check Python environment setting according to the previous settings in MSYS2 PATH variable.</p><!--kg-card-begin: markdown--><ol start="2">
<li><strong>Install Visual Studio Code</strong></li>
</ol>
<!--kg-card-end: markdown--><p>Download the latest version of <a href="https://code.visualstudio.com/?ref=blog.kiiota.com">Visual Studio Code</a>, follow their installation <a href="https://code.visualstudio.com/docs/setup/windows?ref=blog.kiiota.com">guide </a>for Windows and read the <a href="https://code.visualstudio.com/docs/getstarted/userinterface?ref=blog.kiiota.com">basic introduction</a> to Visual Studio Code user interface. Install C/C++ Extension Pack from Extensions Side Bar (Ctrl+Shift+X). This extension includes C/C++, C/C++ Themes, and CMake Tools extension, a suitable extension for FORTE development.</p><!--kg-card-begin: markdown--><ol start="3">
<li><strong>Build MBed TLS library on Visual Studio Code</strong></li>
</ol>
<ul>
<li>Run Visual Studio Code</li>
<li>Open Mbed TLS source code folder (Ctrl+K+O), find it depend on your user name e.g., C:\Users\user\vscode\forte\sources\mbedtls</li>
<li>CMake Tools will auto detect it as a CMake project and will fail to configure. Click Cancel on the error message dialog and open CMake Tools extension on Side Bar</li>
<li>Open View - Command Pallete... (Ctrl+Shift+P), type <code>cmake kit</code> and click <code>CMake: Select a Kit</code>, make sure a compiler from C:\msys64\ucrt64\bin is selected</li>
<li>Open Command Pallete, type <code>cmake var</code> and click <code>CMake: Select Variant</code>, select <code>Release</code></li>
<li>Open Command Pallete, type <code>cmake edit</code> and click <code>CMake: Edit CMake Cache</code>. Search and set some entries as follow:</li>
</ul>
<!--kg-card-end: markdown--><pre><code class="language-javascript">CMAKE_INSTALL_PREFIX:PATH=C:/Users/user/vscode/forte/install/x86_w64
ENABLE_PROGRAMS:BOOL=OFF
ENABLE_TESTING:BOOL=OFF
GEN_FILES:BOOL=ON</code></pre><!--kg-card-begin: markdown--><ul>
<li>Open Command Pallete, type <code>cmake conf</code> and click <code>CMake: Configure</code>, CMake configuration should run and be successful</li>
<li>Open Command Pallete, type <code>cmake build</code> and select <code>CMake: Build</code>, CMake build should run and be successful</li>
<li>To install Mbed TLS to C:/Users/user/vscode/forte/install/x86_w64, run <code>CMake: Install</code> from Command Pallete.</li>
</ul>
<p>The steps above seem complicated, but if you get used to them, you will find them easy. Explore the CMake Tools GUI further to find shortcuts for all the features we've done.</p>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><ol start="4">
<li><strong>Build Paho MQTT library on Visual Studio Code</strong></li>
</ol>
<ul>
<li>Follow previous step to build Mbed TLS and change CMakeCache.txt as follow:</li>
</ul>
<!--kg-card-end: markdown--><pre><code class="language-javascript">CMAKE_INSTALL_PREFIX:PATH=C:/Users/user/vscode/forte/install/x86_w64
PAHO_BUILD_SHARED:BOOL=FALSE
PAHO_BUILD_STATIC:BOOL=TRUE
PAHO_ENABLE_TESTING:BOOL=OFF
PAHO_HIGH_PERFORMANCE:BOOL=TRUE</code></pre><!--kg-card-begin: markdown--><ul>
<li>Run <code>Cmake: Build</code> and then end with <code>CMake: Install</code></li>
</ul>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><ol start="5">
<li><strong>Build open62541 OPC UA library on Visual Studio Code</strong></li>
</ol>
<ul>
<li>Follow previous step to build Mbed TLS and change CMakeCache.txt as follow:</li>
</ul>
<!--kg-card-end: markdown--><pre><code class="language-javascript">CMAKE_INSTALL_PREFIX:PATH=C:/Users/user/vscode/forte/install/x86_w64
UA_ENABLE_AMALGAMATION:BOOL=ON
UA_ENABLE_DISCOVERY:BOOL=ON
UA_ENABLE_DISCOVERY_MULTICAST:BOOL=ON
UA_ENABLE_ENCRYPTION:STRING=MBEDTLS</code></pre><!--kg-card-begin: markdown--><ul>
<li>Run <code>CMake: Configure</code>, CMake will automatically set:</li>
</ul>
<!--kg-card-end: markdown--><pre><code class="language-javascript">MBEDCRYPTO_LIBRARY:FILEPATH=C:/Users/user/vscode/forte/install/x86_w64/lib/libmbedcrypto.a
MBEDTLS_INCLUDE_DIRS:PATH=C:/Users/user/vscode/forte/install/x86_w64/include
MBEDTLS_LIBRARY:FILEPATH=C:/Users/user/vscode/forte/install/x86_w64/lib/libmbedtls.a
MBEDX509_LIBRARY:FILEPATH=C:/Users/user/vscode/forte/install/x86_w64/lib/libmbedx509.a</code></pre><!--kg-card-begin: markdown--><ul>
<li>Run <code>Cmake: Build</code> and then end with <code>CMake: Install</code></li>
</ul>
<!--kg-card-end: markdown--><blockquote>We already build all FORTE library dependencies and ready to develop it on a lightweight and quick IDE Visual Studio Code with support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.</blockquote><h2 id="developing-forte-on-visual-studio-code">Developing FORTE on Visual Studio Code</h2><!--kg-card-begin: markdown--><ol>
<li>Open Visual Studio Code</li>
<li>Close open folder or just open a new Window (Ctrl+Shift+N)</li>
<li>Open Command Pallete (Ctrl+Shift+P), type <code>terminal</code> and click on <code>Terminal: Create New Terminal (With Profile)</code> and select <code>Git Bash</code> Run the following commands on VS Code Terminal to clone FORTE develop branch source code and then create a new local branch named as local:</li>
</ol>
<!--kg-card-end: markdown--><pre><code class="language-javascript">$ cd /c/Users/$(whoami)/vscode/forte/sources
$ git clone https://github.com/eclipse-4diac/4diac-forte.git --depth=100
$ cd 4diac-forte
$ git checkout -b local</code></pre><blockquote>Update: All my pull requests to FORTE source code have been accepted, no need to applying them manually anymore.</blockquote><!--kg-card-begin: markdown--><ol start="4">
<li>Open FORTE source code folder 4diac-forte and follow previous step when building Mbed TLS library. On the first configuration error, click Cancel on the error dialog, change CMakeCache.txt as follow:</li>
</ol>
<!--kg-card-end: markdown--><pre><code class="language-javascript">CMAKE_INSTALL_PREFIX:PATH=C:/Users/user/vscode/forte/install/x86_w64
FORTE_ARCHITECTURE:STRING=Win32</code></pre><!--kg-card-begin: markdown--><ol start="5">
<li>Run CMake configuration again, this time should be successful</li>
<li>Run CMake build to compile FORTE with basic feature without Modbus, LuaJIT, MQTT, and OPC UA.</li>
</ol>
<!--kg-card-end: markdown--><p>Configuring CMake for a complex project like FORTE is much easier by using the CMake GUI application. Open it and set source directory to e.g., C:/Users/user/vscode/forte/sources/4diac-forte and build directory to e.g., C:/Users/user/vscode/forte/sources/4diac-forte/build, CMake GUI will open the CMake configuration that we initially created on VS Code. It may be necessary to regenerate Makefile to show related CMake config by clicking the Generate button again after making a change.</p><figure class="kg-card kg-code-card"><pre><code class="language-javascript">FORTE_COM_MODBUS=ON
FORTE_COM_MODBUS_LIB_DIR=C:/Users/user/vscode/forte/install/x86_w64</code></pre><figcaption>Modbus Configuration</figcaption></figure><figure class="kg-card kg-code-card"><pre><code class="language-javascript">FORTE_COM_OPC_UA=ON
FORTE_COM_OPC_UA_ENCRYPTION=ON
FORTE_COM_OPC_UA_ENCRYPTION_INCLUDE_DIR=C:/Users/user/vscode/forte/install/x86_w64/include
FORTE_COM_OPC_UA_ENCRYPTION_LIB_DIR=C:/Users/user/vscode/forte/install/x86_w64/lib
FORTE_COM_OPC_UA_ENCRYPTION_MBEDTLS=ON
FORTE_COM_OPC_UA_INCLUDE_DIR=C:/Users/user/vscode/forte/install/x86_w64/include
FORTE_COM_OPC_UA_LIB=libopen62541.a
FORTE_COM_OPC_UA_LIB_DIR=C:/Users/user/vscode/forte/install/x86_w64/lib
FORTE_COM_OPC_UA_MULTICAST=ON
FORTE_COM_OPC_UA_CLIENT_PUB_INTERVAL=1000.0
FORTE_COM_OPC_UA_SERVER_PUB_INTERVAL=1000.0</code></pre><figcaption>OPC UA Configuration</figcaption></figure><figure class="kg-card kg-code-card"><pre><code class="language-javascript">FORTE_COM_PAHOMQTT=ON
FORTE_COM_PAHOMQTT_INCLUDE_DIR=C:/Users/user/vscode/forte/install/x86_w64/include
FORTE_COM_PAHOMQTT_LIB=libpaho-mqtt3a-static.a
FORTE_COM_PAHOMQTT_LIB_DIR=C:/Users/user/vscode/forte/install/x86_w64/lib</code></pre><figcaption>MQTT Configuration</figcaption></figure><figure class="kg-card kg-code-card"><pre><code class="language-javascript">FORTE_USE_LUATYPES=LuaJIT
LUAJIT_INCLUDE_DIR=C:/Users/user/vscode/forte/install/x86_w64/include/luajit-2.1
LUAJIT_LIBRARY=C:/Users/user/vscode/forte/install/x86_w64/bin/lua51.dll</code></pre><figcaption>LuaJIT Configuration</figcaption></figure><figure class="kg-card kg-code-card"><pre><code class="language-javascript">CMAKE_C_STANDARD_LIBRARIES=
CMAKE_CXX_STANDARD_LIBRARIES=-lws2_32 -lcrypt32 -lbcrypt</code></pre><figcaption>Libraries Configuration</figcaption></figure><figure class="kg-card kg-code-card"><pre><code class="language-javascript">FORTE_COM_HTTP=ON
FORTE_COM_SER=ON
FORTE_EXTERNAL_MODULES_DIRECTORY=C:/Users/user/vscode/forte/ext_modules
FORTE_MODULE_CONVERT=ON
FORTE_MODULE_IEC61131=ON
FORTE_MODULE_RECONFIGURATION=ON
FORTE_MODULE_RT_Events=ON
FORTE_MODULE_SIGNALPROCESSING=ON
FORTE_MODULE_UTILS=ON
FORTE_IPLayerRecvBufferSize=25000
</code></pre><figcaption>The rest FORTE Configuration</figcaption></figure><p>After Makefile configuration finish without any error, we can back to VS Code to build, install, and learn more about FORTE underlying features. FORTE's weakness is the documentation is incomplete so we need to learn it from source level.</p><blockquote>Update: We can create CMake configuration settings as settings.json inside .vscode directory in FORTE source code root directory. With this settings, we can configure and build FORTE completely on VS Code IDE. </blockquote><figure class="kg-card kg-code-card"><pre><code class="language-javascript">{
    "cmake.configureOnOpen": false,
    "cmake.configureSettings": {
      "CMAKE_BUILD_TYPE": "Release",
      "CMAKE_INSTALL_PREFIX": "C:/Users/user/vscode/forte/install/x86_w64",
      "CMAKE_CXX_STANDARD_LIBRARIES": "-lws2_32 -lcrypt32 -lbcrypt",
      "FORTE_ARCHITECTURE": "Win32",
      "FORTE_LOGLEVEL": "LOGINFO",
      "FORTE_COM_ETH": true,
      "FORTE_COM_FBDK": true,
      "FORTE_COM_LOCAL": true,
      "FORTE_COM_RAW":true,
      "FORTE_COM_STRUCT_MEMBER":true,
      "FORTE_COM_SER": true,
      "FORTE_MODULE_CONVERT": true,
      "FORTE_MODULE_IEC61131": true,
      "FORTE_MODULE_RECONFIGURATION": true,
      "FORTE_MODULE_RT_Events": true,
      "FORTE_MODULE_SIGNALPROCESSING": true,
      "FORTE_MODULE_UTILS": true,
      "FORTE_EXTERNAL_MODULES_DIRECTORY": "C:/Users/user/vscode/forte/ext_modules",
      "FORTE_COM_HTTP": true,
      "FORTE_COM_MODBUS": true,
      "FORTE_COM_MODBUS_LIB_DIR": "C:/Users/user/vscode/forte/install/x86_w64",
      "FORTE_COM_PAHOMQTT": true,
      "FORTE_COM_PAHOMQTT_INCLUDE_DIR": "C:/Users/user/vscode/forte/install/x86_w64/include",
      "FORTE_COM_PAHOMQTT_LIB_DIR": "C:/Users/user/vscode/forte/install/x86_w64/lib",
      "FORTE_COM_PAHOMQTT_LIB": "libpaho-mqtt3a-static.a",
      "FORTE_COM_OPC_UA": true,
      "FORTE_COM_OPC_UA_INCLUDE_DIR": "C:/Users/user/vscode/forte/install/x86_w64/include",
      "FORTE_COM_OPC_UA_LIB_DIR": "C:/Users/user/vscode/forte/install/x86_w64/lib",
      "FORTE_COM_OPC_UA_LIB": "libopen62541.a",
      "FORTE_COM_OPC_UA_MULTICAST": true,
      "FORTE_COM_OPC_UA_ENCRYPTION": true,
      "FORTE_COM_OPC_UA_ENCRYPTION_MBEDTLS": true,
      "FORTE_COM_OPC_UA_ENCRYPTION_INCLUDE_DIR": "C:/Users/user/vscode/forte/install/x86_w64/include",
      "FORTE_COM_OPC_UA_ENCRYPTION_LIB_DIR": "C:/Users/user/vscode/forte/install/x86_w64/lib",
      "FORTE_USE_LUATYPES": "LuaJIT",
      "LUAJIT_INCLUDE_DIR": "C:/Users/user/vscode/forte/install/x86_w64/include/luajit-2.1",
      "LUAJIT_LIBRARY": "C:/Users/user/vscode/forte/install/x86_w64/bin/lua51.dll",
      "FORTE_IPLayerRecvBufferSize": "25000"
    },
    "C_Cpp.default.includePath": [
      "${workspaceFolder}/**",
      "C:/Users/user/vscode/forte/install/x86_w64/include",
      "C:/Users/user/vscode/forte/install/x86_w64/include/luajit-2.1",
      "C:/Users/user/vscode/forte/install/x86_w64/include/mbedtls",
      "C:/Users/user/vscode/forte/install/x86_w64/include/modbus"
    ]
}</code></pre><figcaption>.vscode/settings.json</figcaption></figure><p><a href="https://code.visualstudio.com/docs/editor/intellisense?ref=blog.kiiota.com">Visual Studio Code IntelliSense</a>:</p><blockquote>IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."</blockquote><p>VS Code also supports <a href="https://code.visualstudio.com/docs/remote/wsl-tutorial?ref=blog.kiiota.com">remote programming to WSL</a>. In the case of FORTE, I needed to build FORTE using musl libc for a bit outdated device but a compiler with musl libc was not available on Windows.</p><p>I also use VS Code to develop Arduino applications via PlatformIO extension and with VS Code features I can contribute more to a multiplatform C# project that I use at daily basis for years.</p><p>Maybe I will share FORTE libraries dependencies so you don't need to build all the dependencies from source code and focus directly to VS Code and FORTE.</p>
{% endraw %}