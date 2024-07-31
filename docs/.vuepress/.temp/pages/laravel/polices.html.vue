<template><div><h1 id="polices" tabindex="-1"><a class="header-anchor" href="#polices"><span>Polices</span></a></h1>
<h2 id="create-police" tabindex="-1"><a class="header-anchor" href="#create-police"><span>Create Police</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php artisan make:policy ProductPolice <span class="token parameter variable">--model</span><span class="token operator">=</span>Product</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="manager-access" tabindex="-1"><a class="header-anchor" href="#manager-access"><span>Manager Access</span></a></h2>
<ul>
<li>In app/Http/Polices/ProductPolice.php</li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token keyword">return</span> <span class="token variable">$user</span><span class="token operator">-></span><span class="token property">role_id</span> <span class="token operator">==</span> <span class="token class-name static-context">RoleEnum</span><span class="token operator">::</span><span class="token constant">ADMIN</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="on-productcontroller-witch-methods-insert" tabindex="-1"><a class="header-anchor" href="#on-productcontroller-witch-methods-insert"><span>On ProductController witch methods insert</span></a></h1>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">authorize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'viewAny'</span><span class="token punctuation">,</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">or</span> </span>
<span class="line"></span>
<span class="line"><span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">authorize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'viewAny'</span><span class="token punctuation">,</span> <span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


