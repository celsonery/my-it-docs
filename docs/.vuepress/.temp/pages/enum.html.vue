<template><div><p>Create ENUM</p>
<h1 id="create-the-enum-class" tabindex="-1"><a class="header-anchor" href="#create-the-enum-class"><span>Create the ENUM Class</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">php artisan make:enum RoleEnum</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="edit-app-roleenum-created" tabindex="-1"><a class="header-anchor" href="#edit-app-roleenum-created"><span>Edit app/RoleEnum created</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">enum RoleEnum: int</span>
<span class="line">{</span>
<span class="line">	case ADMIN = 1;</span>
<span class="line">	case CUSTOMER = 2;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="join-enum-to-user" tabindex="-1"><a class="header-anchor" href="#join-enum-to-user"><span>Join Enum to User</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Add "'role_id' => RoleEnum::class" at casts() method in User Model</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


