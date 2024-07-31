<template><div><h1 id="enum" tabindex="-1"><a class="header-anchor" href="#enum"><span>Enum</span></a></h1>
<h2 id="create-the-enum-class" tabindex="-1"><a class="header-anchor" href="#create-the-enum-class"><span>Create the ENUM Class</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">php artisan make:enum RoleEnum</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="edit-the-app-enums-roleenum-php-created-file" tabindex="-1"><a class="header-anchor" href="#edit-the-app-enums-roleenum-php-created-file"><span>Edit the app/Enums/RoleEnum.php created file</span></a></h2>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name-definition class-name">RoleEnum</span><span class="token punctuation">:</span> <span class="token keyword type-declaration">int</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">case</span> <span class="token constant">CUSTOMER</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join-enum-to-user" tabindex="-1"><a class="header-anchor" href="#join-enum-to-user"><span>Join Enum to User</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Add "'role_id' => RoleEnum::class" at casts() method in User Model</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


