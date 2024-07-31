<template><div><h1 id="breeze-in-api" tabindex="-1"><a class="header-anchor" href="#breeze-in-api"><span>Breeze in API</span></a></h1>
<h2 id="install-breeze-package" tabindex="-1"><a class="header-anchor" href="#install-breeze-package"><span>Install Breeze Package</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">composer</span> require laravel/breeze</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="install-breeze" tabindex="-1"><a class="header-anchor" href="#install-breeze"><span>Install Breeze</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php artisan breeze:install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Then choose 'Api only'</p>
</blockquote>
<h2 id="configuring-breeze" tabindex="-1"><a class="header-anchor" href="#configuring-breeze"><span>Configuring Breeze</span></a></h2>
<h4 id="open-the-bootstrap-app-php-file" tabindex="-1"><a class="header-anchor" href="#open-the-bootstrap-app-php-file"><span>Open the bootstrap/app.php file</span></a></h4>
<blockquote>
<p>Remove or comment the 'EnsureFrontendRequestsAreStateful' middleware</p>
</blockquote>
<h4 id="edit-the-app-http-controllers-auth-authenticatedsessioncontroller-php" tabindex="-1"><a class="header-anchor" href="#edit-the-app-http-controllers-auth-authenticatedsessioncontroller-php"><span>Edit the app/Http/Controllers/Auth/AuthenticatedSessionController.php</span></a></h4>
<blockquote>
<p>Change: login method</p>
</blockquote>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">from<span class="token punctuation">:</span> </span>
<span class="line"><span class="token variable">$request</span><span class="token operator">>></span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">regenerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">to<span class="token punctuation">:</span></span>
<span class="line"><span class="token variable">$token</span> <span class="token operator">=</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'access_token'</span><span class="token punctuation">)</span><span class="token operator">>></span>plainTextToken<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'token'</span> <span class="token operator">=></span> <span class="token variable">$token</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Change: destroy method</p>
</blockquote>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">from<span class="token punctuation">:</span> </span>
<span class="line"><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">guard</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'web'</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$request</span><span class="token operator">>></span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$request</span><span class="token operator">>></span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">regenerateToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">to<span class="token punctuation">:</span></span>
<span class="line"><span class="token variable">$request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">currentAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Token revoked!'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="edit-the-app-http-controllers-auth-registeredusercontroller-php" tabindex="-1"><a class="header-anchor" href="#edit-the-app-http-controllers-auth-registeredusercontroller-php"><span>Edit the app/Http/Controllers/Auth/RegisteredUserController.php</span></a></h4>
<blockquote>
<p>Change: store method</p>
</blockquote>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">from<span class="token punctuation">:</span></span>
<span class="line">Auth<span class="token punctuation">:</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">to<span class="token punctuation">:</span></span>
<span class="line"><span class="token variable">$oken</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token operator">>></span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">>></span>plainTextToken<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'token'</span> <span class="token operator">=></span> <span class="token variable">$token</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="move-from-web-php-to-api-php-the-following-line" tabindex="-1"><a class="header-anchor" href="#move-from-web-php-to-api-php-the-following-line"><span>Move from web.php to api.php the following line:</span></a></h4>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token keyword">require</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'/auth.php'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="edit-the-routes-auth-php" tabindex="-1"><a class="header-anchor" href="#edit-the-routes-auth-php"><span>Edit the routes/auth.php</span></a></h4>
<blockquote>
<p>Change route logout</p>
</blockquote>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">from<span class="token punctuation">:</span></span>
<span class="line"><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">to<span class="token punctuation">:</span></span>
<span class="line"><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth:sanctum'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


