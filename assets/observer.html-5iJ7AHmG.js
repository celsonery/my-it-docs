import{_ as s,c as e,o as a,d as n}from"./app-BFU7G7a2.js";const t={},r=n(`<h1 id="observer" tabindex="-1"><a class="header-anchor" href="#observer"><span>Observer</span></a></h1><h2 id="create-observer" tabindex="-1"><a class="header-anchor" href="#create-observer"><span>Create Observer</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan make:observer ProductObserver <span class="token parameter variable">--model</span><span class="token operator">=</span>Product</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="active-observer" tabindex="-1"><a class="header-anchor" href="#active-observer"><span>Active Observer</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">In Model<span class="token punctuation">:</span></span>
<span class="line"><span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">ObservedBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute-class-name class-name">UserObserver</span><span class="token operator">::</span><span class="token constant">class</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">or</span> </span>
<span class="line"></span>
<span class="line">In app<span class="token operator">/</span>Http<span class="token operator">/</span>Providers<span class="token operator">/</span>AppServiceProvider</span>
<span class="line"><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token class-name static-context">UserObserver</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">implements</span> ShouldHandleEventsAfterCommit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,7),l=[r];function i(p,c){return a(),e("div",null,l)}const d=s(t,[["render",i],["__file","observer.html.vue"]]),v=JSON.parse('{"path":"/laravel/observer.html","title":"Observer","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Create Observer","slug":"create-observer","link":"#create-observer","children":[]},{"level":2,"title":"Active Observer","slug":"active-observer","link":"#active-observer","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"updatedTime":1722391888000,"contributors":[{"name":"Celso Nery","email":"celso.nery@gmail.com","commits":1}]},"filePathRelative":"laravel/observer.md"}');export{d as comp,v as data};
