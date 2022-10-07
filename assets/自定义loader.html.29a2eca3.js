import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.52cc2d6a.js";const p={},e=t(`<h1 id="\u81EA\u5B9A\u4E49-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 loader</h1><hr><h3 id="\u4E00\u3001\u81EA\u5B9A\u4E49-loader" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u81EA\u5B9A\u4E49-loader" aria-hidden="true">#</a> \u4E00\u3001\u81EA\u5B9A\u4E49 loader</h3><ol><li>\u521B\u5EFA\u81EA\u5DF1\u7684 loader <ol><li>loader \u662F\u7528\u4E8E\u5BF9\u6A21\u5757\u7684\u6E90\u4EE3\u7801\u8FDB\u884C\u8F6C\u6362\uFF08\u5904\u7406\uFF09\uFF0C\u6BD4\u5982css-loader\u3001style-loader\u3001babel-loader</li><li>\u81EA\u5B9A\u4E49loader\uFF1A <ol><li>loader\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u5BFC\u51FA\u4E3A\u51FD\u6570\u7684JavaScript\u6A21\u5757</li><li>loader runner \u5E93\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u7136\u540E\u5C06\u4E0A\u4E00\u4E2A loader \u4EA7\u751F\u7684\u7ED3\u679C\u6216\u8005\u8D44\u6E90\u6587\u4EF6\u4F20\u5165\u8FDB\u53BB</li></ol></li><li>loader\u53EF\u63A5\u53D7\u7684\u4E09\u4E2A\u53C2\u6570 <ol><li>content \u6E90\u6587\u4EF6\u5185\u5BB9</li><li>map sourcemap\u6570\u636E</li><li>mate \u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u4EFB\u4F55\u5185\u5BB9</li></ol></li></ol></li></ol><hr><h3 id="\u4E8C\u3001\u540C\u6B65\u548C\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u540C\u6B65\u548C\u5F02\u6B65" aria-hidden="true">#</a> \u4E8C\u3001\u540C\u6B65\u548C\u5F02\u6B65</h3><ol><li><p>\u540C\u6B65loader</p><ol><li><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// this.callback \u65B9\u6CD5\u5219\u66F4\u7075\u6D3B\uFF0C\u56E0\u4E3A\u5B83\u5141\u8BB8\u4F20\u9012\u591A\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F content\u3002</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F20\u9012map\uFF0C\u8BA9source-map\u4E0D\u4E2D\u65AD</span>
  <span class="token comment">// \u4F20\u9012meta\uFF0C\u8BA9\u4E0B\u4E00\u4E2Aloader\u63A5\u6536\u5230\u5176\u4ED6\u53C2\u6570</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u8C03\u7528 callback() \u51FD\u6570\u65F6\uFF0C\u603B\u662F\u8FD4\u56DE undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>\u5F02\u6B65loader</p><ol><li><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FDB\u884C\u5F02\u6B65\u64CD\u4F5C</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u540C\u6B65\u8BA1\u7B97\u8FC7\u4E8E\u8017\u65F6\uFF0C\u5728 Node.js \u8FD9\u6837\u7684\u5355\u7EBF\u7A0B\u73AF\u5883\u4E0B\u8FDB\u884C\u6B64\u64CD\u4F5C\u5E76\u4E0D\u662F\u597D\u7684\u65B9\u6848\uFF0C\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u5730\u4F7F<strong>\u81EA\u5B9A\u4E49 loader \u5F02\u6B65\u5316</strong>\u3002\u4F46\u5982\u679C\u8BA1\u7B97\u91CF\u5F88\u5C0F\uFF0C\u540C\u6B65 loader \u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p></li></ol></li></ol><hr><h3 id="\u4E09\u3001\u4F20\u5165\u548C\u83B7\u53D6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F20\u5165\u548C\u83B7\u53D6\u53C2\u6570" aria-hidden="true">#</a> \u4E09\u3001\u4F20\u5165\u548C\u83B7\u53D6\u53C2\u6570</h3><ol><li><p>\u901A\u8FC7webpack\u5B98\u65B9\u63D0\u4F9B\u7684\u4E00\u4E2A\u89E3\u6790\u5E93 loader-utils \uFF0C\u6765\u83B7\u53D6\u4F20\u5165\u53C2\u6570</p></li><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> loader-utils <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token punctuation">{</span>
	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;my-loader&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tober&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// my-loader.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> getOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E3A\u5F02\u6B65\u53C2\u6570</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u83B7\u53D6\u53C2\u6570</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;my-loader&#39;</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h3 id="\u56DB\u3001\u6821\u9A8C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6821\u9A8C\u53C2\u6570" aria-hidden="true">#</a> \u56DB\u3001\u6821\u9A8C\u53C2\u6570</h3><ol><li><p>\u901A\u8FC7webpack\u5B98\u65B9\u63D0\u4F9B\u7684\u6821\u9A8C\u5E93 schema-utils \uFF0C\u6821\u9A8C\u53C2\u6570</p></li><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> schema-utils <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// myLoader-schema.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u586B\u5199\u4F60\u7684\u540D\u79F0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u586B\u5199\u4F60\u7684\u5E74\u9F84&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;additionalProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>



<span class="token comment">// my-loader.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> getOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> validate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;schema-utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myLoaderSchema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../schema/myLoader-schema.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E3A\u5F02\u6B65\u53C2\u6570</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u83B7\u53D6\u53C2\u6570</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u53C2\u6570\u6821\u9A8C</span>
  <span class="token function">validate</span><span class="token punctuation">(</span>myLoaderSchema<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;my-loader&#39;</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","\u81EA\u5B9A\u4E49loader.html.vue"]]);export{d as default};
