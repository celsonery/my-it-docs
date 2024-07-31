<template><div><h1 id="observer" tabindex="-1"><a class="header-anchor" href="#observer"><span>Observer</span></a></h1>
<h2 id="create-observer" tabindex="-1"><a class="header-anchor" href="#create-observer"><span>Create Observer</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">php artisan make:observer ProductObserver --model=Product</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="active-observer" tabindex="-1"><a class="header-anchor" href="#active-observer"><span>Active Observer</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">In Model:</span>
<span class="line">#[ObservedBy([UserObserver::class])]</span>
<span class="line"></span>
<span class="line">or </span>
<span class="line"></span>
<span class="line">In app/Http/Providers/AppServiceProvider</span>
<span class="line">User::observe(UserObserver::class);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">implements ShouldHandleEventsAfterCommit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


