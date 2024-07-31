<template><div><h1 id="using-laravel-breeze-in-api" tabindex="-1"><a class="header-anchor" href="#using-laravel-breeze-in-api"><span>Using Laravel Breeze in API</span></a></h1>
<h2 id="install-breeze-package" tabindex="-1"><a class="header-anchor" href="#install-breeze-package"><span>Install Breeze Package</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">composer require laravel/breeze</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="install-breeze" tabindex="-1"><a class="header-anchor" href="#install-breeze"><span>Install Breeze</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">php artisan breeze:install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Then choose 'Api only'</p>
</blockquote>
<h2 id="configuring-breeze" tabindex="-1"><a class="header-anchor" href="#configuring-breeze"><span>Configuring Breeze</span></a></h2>
<h4 id="open-the-bootstrap-app-php-file" tabindex="-1"><a class="header-anchor" href="#open-the-bootstrap-app-php-file"><span>Open the bootstrap/app.php file</span></a></h4>
<ul>
<li>Remove or comment the 'EnsureFrontendRequestsAreStateful' middleware</li>
</ul>
<h4 id="edit-the-app-http-controllers-auth-authenticatedsessioncontroller-php" tabindex="-1"><a class="header-anchor" href="#edit-the-app-http-controllers-auth-authenticatedsessioncontroller-php"><span>Edit the app/Http/Controllers/Auth/AuthenticatedSessionController.php</span></a></h4>
<ul>
<li>Change: login method</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">from: </span>
<span class="line">$request->session()->regenerate();</span>
<span class="line"></span>
<span class="line">return response()->noContent();</span>
<span class="line"></span>
<span class="line">to:</span>
<span class="line">$token = auth()->user()->createToken('access_token')->plainTextToken;</span>
<span class="line"></span>
<span class="line">return response()->json(['token' => $token]);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Change: destroy method</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">from: </span>
<span class="line">Auth::guard('web')->logout();</span>
<span class="line">$request->session()->invalidate();</span>
<span class="line">$request->session()->regenerateToken();</span>
<span class="line">return response()->noContent();</span>
<span class="line"></span>
<span class="line">to:</span>
<span class="line">$request()->user()->currentAccessToken()->delete();</span>
<span class="line"></span>
<span class="line">return response()->json(['message' => 'Token revoked!']);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="edit-the-app-http-controllers-auth-registeredusercontroller-php" tabindex="-1"><a class="header-anchor" href="#edit-the-app-http-controllers-auth-registeredusercontroller-php"><span>Edit the app/Http/Controllers/Auth/RegisteredUserController.php</span></a></h4>
<ul>
<li>Change: store method</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">from:</span>
<span class="line">Auth:login($user);</span>
<span class="line">return response()->noContent();</span>
<span class="line"></span>
<span class="line">to:</span>
<span class="line">$oken = $user->createToken('auth_token')->plainTextToken;</span>
<span class="line">return response()->json(['token' => $token]);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="move-from-web-php-to-api-php-the-following-line" tabindex="-1"><a class="header-anchor" href="#move-from-web-php-to-api-php-the-following-line"><span>Move from web.php to api.php the following line:</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">require __DIR__ . '/auth.php'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="edit-the-routes-auth-php" tabindex="-1"><a class="header-anchor" href="#edit-the-routes-auth-php"><span>Edit the routes/auth.php</span></a></h4>
<ul>
<li>Change route logout</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">from:</span>
<span class="line">middleware('auth')</span>
<span class="line"></span>
<span class="line">to:</span>
<span class="line">middleware('auth:sanctum')</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


