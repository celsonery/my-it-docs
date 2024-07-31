<template><div><h1 id="swoole" tabindex="-1"><a class="header-anchor" href="#swoole"><span>Swoole</span></a></h1>
<h2 id="install-swoole" tabindex="-1"><a class="header-anchor" href="#install-swoole"><span>Install swoole</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">apt</span> <span class="token function">install</span> php-pear</span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> gcc <span class="token function">make</span> autoconf glibc-headers gcc-c++ libstdc++-devel curl-devel</span>
<span class="line">pecl <span class="token function">install</span> swoole</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-swoole" tabindex="-1"><a class="header-anchor" href="#configure-swoole"><span>Configure swoole</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php <span class="token parameter variable">-i</span> <span class="token operator">|</span> <span class="token function">grep</span> php.ini</span>
<span class="line"><span class="token function">vim</span> <span class="token punctuation">..</span>.php.ini</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Add swoole extension</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token assign-left variable">extension</span><span class="token operator">=</span>swoole.so</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>In your project install laravel/octane</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">composer</span> require laravel/octane</span>
<span class="line"><span class="token function">composer</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> --no-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuring-your-application" tabindex="-1"><a class="header-anchor" href="#configuring-your-application"><span>Configuring your application</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php artisan octane:install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>And choose swoole option
This option add OCTANE_SERVER=swoole in you .env file</p>
</blockquote>
<h2 id="running-your-application-with-octane-in-laravel" tabindex="-1"><a class="header-anchor" href="#running-your-application-with-octane-in-laravel"><span>Running your application with octane in laravel</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php artisan octane:start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>This will running the octane local server</p>
</blockquote>
<h2 id="create-service-in-systemd-to-run-octane" tabindex="-1"><a class="header-anchor" href="#create-service-in-systemd-to-run-octane"><span>Create service in systemd to run octane</span></a></h2>
<p>Please see <RouteLink to="/linux/systemd-service.html">/linux/systemd-service.md</RouteLink></p>
</div></template>


