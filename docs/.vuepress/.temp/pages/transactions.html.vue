<template><div><h1 id="begin-transaction" tabindex="-1"><a class="header-anchor" href="#begin-transaction"><span>Begin Transaction</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">DB:Begin Transaction</span>
<span class="line"></span>
<span class="line">	SQL Queries</span>
<span class="line"></span>
<span class="line">DB:Commit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$product = DB::transaction(function () use ($request) {</span>
<span class="line">	$product_data = $request->except("skus");</span>
<span class="line">	$product_data['slug'] = Str::slug($product_data['name'])</span>
<span class="line"></span>
<span class="line">	$product = Product::create($product_data);</span>
<span class="line"></span>
<span class="line">	$skus = $product->skus()->createMany($request->get('sku'));</span>
<span class="line"></span>
<span class="line">	foreach ($skus as $key => $sku) {</span>
<span class="line">		foreach ($request->sku[$key]['images'] as $index => $image) {</span>
<span class="line">			$path = $image['url']->store('products');</span>
<span class="line"></span>
<span class="line">			$sku->images()->create([</span>
<span class="line">				'url' => $path,</span>
<span class="line">				'cover' => $index == 0</span>
<span class="line">			]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return $product->load('skus.images');</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">return $product;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


