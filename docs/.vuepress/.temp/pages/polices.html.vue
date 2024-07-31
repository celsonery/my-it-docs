<template><div><p>Create Polices</p>
<h1 id="create-police" tabindex="-1"><a class="header-anchor" href="#create-police"><span>Create Police</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">php artisan make:policy ProductPolice --model=Product</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="manager-access" tabindex="-1"><a class="header-anchor" href="#manager-access"><span>Manager Access</span></a></h1>
<ul>
<li>In app/Http/Polices/ProductPolice.php</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">return $user->role_id == RoleEnum::ADMIN;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="on-productcontroller-witch-methods-insert" tabindex="-1"><a class="header-anchor" href="#on-productcontroller-witch-methods-insert"><span>On ProductController witch methods insert</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Gate::authorize('viewAny', Product::class);</span>
<span class="line"></span>
<span class="line">or </span>
<span class="line"></span>
<span class="line">Gate::authorize('viewAny', $product);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


