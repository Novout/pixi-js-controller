import{o as n,c as s,d as a}from"./app.cd4ede27.js";const p='{"title":"Simple Context","description":"","frontmatter":{},"relativePath":"examples/simple-context.md","lastUpdated":1614802858748}',t={},o=a('<h1 id="simple-context"><a class="header-anchor" href="#simple-context" aria-hidden="true">#</a> Simple Context</h1><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">PIXI</span> <span class="token keyword">from</span> <span class="token string">&#39;pixi.js&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Controller<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">BUTTON</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pixi-controller&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;example.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">loader<span class="token punctuation">,</span> resources</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Sprite</span><span class="token punctuation">(</span>resources<span class="token punctuation">.</span>example<span class="token punctuation">.</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Mouse<span class="token punctuation">.</span><span class="token function">isButtonDown</span><span class="token punctuation">(</span><span class="token constant">BUTTON</span><span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">if</span><span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Mouse<span class="token punctuation">.</span><span class="token function">isButtonDown</span><span class="token punctuation">(</span><span class="token constant">BUTTON</span><span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;right&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      \n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Keyboard<span class="token punctuation">.</span><span class="token function">isKeyDown</span><span class="token punctuation">(</span><span class="token string">&#39;ArrowLeft&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        example<span class="token punctuation">.</span>x <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Keyboard<span class="token punctuation">.</span><span class="token function">isKeyDown</span><span class="token punctuation">(</span><span class="token string">&#39;ArrowRight&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        example<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Keyboard<span class="token punctuation">.</span><span class="token function">isKeyDown</span><span class="token punctuation">(</span><span class="token string">&#39;ArrowUp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyW&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        example<span class="token punctuation">.</span>y <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Controller<span class="token punctuation">.</span>Keyboard<span class="token punctuation">.</span><span class="token function">isKeyDown</span><span class="token punctuation">(</span><span class="token string">&#39;ArrowDown&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        example<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n      Controller<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',2);t.render=function(a,p,t,c,e,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
