<template><div><h1 id="systemd-service" tabindex="-1"><a class="header-anchor" href="#systemd-service"><span>Systemd service</span></a></h1>
<h2 id="create-a-new-service-in-systemd" tabindex="-1"><a class="header-anchor" href="#create-a-new-service-in-systemd"><span>Create a new service in systemd</span></a></h2>
<blockquote>
<p>Create or edit the file in /etc/systemd/system/???.service</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">vim</span> /etc/systemd/system/octane.service</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Add this content in your file</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>Laravel Octane Server</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>simple</span>
<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">Group</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/var/www/html</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/php artisan octane:start <span class="token parameter variable">--server</span><span class="token operator">=</span>swoole <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0</span>
<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>always</span>
<span class="line"><span class="token assign-left variable">StandardOutput</span><span class="token operator">=</span>file:/var/log/octane.log</span>
<span class="line"><span class="token assign-left variable">StandardError</span><span class="token operator">=</span>file:/var/log/octane-error.log</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Reload systemd to add your script to systemd</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl daemon-reload</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Now you can use the systemd to run your process</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl <span class="token operator">&lt;</span>start<span class="token operator">|</span>stop<span class="token operator">|</span>restart<span class="token operator">|</span>reload<span class="token operator">|</span>status<span class="token operator">></span> octane.service</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>To start this service, you need enabled it</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl <span class="token builtin class-name">enable</span> octane.service</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


