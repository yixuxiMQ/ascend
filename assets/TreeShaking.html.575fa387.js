import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.52cc2d6a.js";const p={},t=e(`<h1 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h1><hr><h3 id="\u4E00\u3001\u4EC0\u4E48\u662Ftree-shaking" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662Ftree-shaking" aria-hidden="true">#</a> \u4E00\u3001\u4EC0\u4E48\u662F<code>Tree Shaking</code>\uFF1F</h3><ol><li>\u8FD9\u662F\u4E00\u4E2A\u672F\u8BED\uFF0C\u5728\u8BA1\u7B97\u673A\u4E2D\u8868\u793A\u6D88\u9664\u6B7B\u4EE3\u7801\uFF08 dead_code \uFF09</li><li>\u6700\u65E9\u7684\u8D77\u6E90\u4E8ELISP\uFF0C\u7528\u4E8E\u6D88\u9664\u672A\u8C03\u7528\u7684\u4EE3\u7801\uFF08\u7EAF\u51FD\u6570\u65E0\u526F\u4F5C\u7528\uFF0C\u53EF\u4EE5\u653E\u5FC3\u6D88\u9664\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u8981\u6C42\u6211\u4EEC\u5728\u8FDB\u884C\u51FD\u6570\u5F0F\u7F16\u7A0B\u65F6\uFF0C\u5C3D\u91CF\u4F7F\u7528\u7EAF\u51FD\u6570\u7684\u539F\u56E0\u4E4B\u4E00\uFF09</li><li>\u4E4B\u540E<code>Tree Shaking</code>\u4E5F\u88AB\u5E94\u7528\u4E8E\u5176\u4ED6\u8BED\u8A00\uFF0C\u6BD4\u5982JavaScript\u3001Dart</li></ol><hr><h3 id="\u4E8C\u3001javascript\u4E2D\u7684-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001javascript\u4E2D\u7684-tree-shaking" aria-hidden="true">#</a> \u4E8C\u3001JavaScript\u4E2D\u7684 Tree Shaking</h3><ol><li>\u5BF9JavaScript\u8FDB\u884C Tree Shaking \u662F\u6E90\u81EA\u6253\u5305\u5DE5\u5177 rollup</li><li>\u56E0\u4E3A Tree Shaking \u4F9D\u8D56\u4E8E ES Module \u7684\u9759\u6001\u8BED\u6CD5\u5206\u6790\uFF08\u4E0D\u6267\u884C\u4EFB\u4F55\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u660E\u786E\u77E5\u9053\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF09</li><li>webpack2 \u6B63\u5F0F\u5185\u7F6E\u652F\u6301\u4E86 ES2015 \u6A21\u5757\uFF0C\u548C\u68C0\u6D4B\u672A\u4F7F\u7528\u6A21\u5757\u7684\u80FD\u529B</li><li>webpack4 \u65F6\u6B63\u5F0F\u6269\u5C55\u4E86\u8FD9\u4E2A\u80FD\u529B\uFF0C\u5E76\u4E14\u901A\u8FC7 package.json \u7684 sideEffects \u5C5E\u6027\u4F5C\u4E3A\u6807\u8BB0\uFF0C\u544A\u77E5 webpack \u5728\u7F16\u8BD1\u65F6\u54EA\u91CC\u7684\u6587\u4EF6\u53EF\u4EE5\u5B89\u5168\u7684\u5220\u9664</li><li>webpack5 \u4E2D\uFF0C\u4E5F\u63D0\u4F9B\u4E86\u5BF9\u90E8\u5206 CommonJS \u7684 Tree Shaking \u7684\u652F\u6301</li></ol><hr><h3 id="\u4E09\u3001webpack-\u5B9E\u73B0-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001webpack-\u5B9E\u73B0-tree-shaking" aria-hidden="true">#</a> \u4E09\u3001webpack \u5B9E\u73B0 Tree Shaking</h3><ol><li>webpack\u5B9E\u73B0 Tree Shaking \u91C7\u7528\u4E86\u4E24\u79CD\u4E0D\u540C\u7684\u65B9\u6848\uFF1A <ol><li><strong>usedExports</strong>\uFF1A\u901A\u8FC7\u6807\u8BB0\u67D0\u4E9B\u51FD\u6570\u662F\u5426\u88AB\u4F7F\u7528\uFF0C\u4E4B\u540E\u901A\u8FC7 Terser \u6765\u8FDB\u884C\u4F18\u5316\u7684 <ol><li>\u5C06mode\u8BBE\u7F6E\u4E3Adevelopment\u6A21\u5F0F\uFF1A <ul><li>\u4E3A\u4E86\u53EF\u4EE5\u770B\u5230 usedExports \u5E26\u6765\u7684\u6548\u679C\uFF0C\u9700\u8981\u8BBE\u7F6E\u4E3A development \u6A21\u5F0F</li><li>\u56E0\u4E3A\u5728 production \u6A21\u5F0F\u4E0B\uFF0C webpack \u9ED8\u8BA4\u7684\u4E00\u4E9B\u4F18\u5316\u4F1A\u5E26\u6765\u5F88\u5927\u7684\u5F71\u54CD</li></ul></li><li>\u8BBE\u7F6E usedExports \u4E3A true \u548C false \u5BF9\u6BD4\u6253\u5305\u540E\u7684\u4EE3\u7801\uFF1A <ul><li>\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u4F1A\u6709\u4E00\u6BB5\u6CE8\u91CA\uFF1A unused harmony export mul</li><li>\u8FD9\u6BB5\u6CE8\u91CA\u7684\u610F\u4E49\u5C31\u662F\u4E3A\u4E86\u544A\u77E5 Terser \u5728\u4F18\u5316\u65F6\uFF0C\u53EF\u4EE5\u5220\u9664\u6389\u8FD9\u6BB5\u4EE3\u7801</li></ul></li><li>\u5C06 optimization\u4E2D\u7684minimize \u8BBE\u7F6E\u4E3A true\uFF1A <ul><li>usedExports \u8BBE\u7F6E\u4E3A false \u65F6\uFF0Cmul \u51FD\u6570\u6CA1\u6709\u88AB\u79FB\u9664\u6389</li><li>usedExports \u8BBE\u7F6E\u4E3A true \u65F6\uFF0Cmul \u51FD\u6570\u88AB\u79FB\u9664\u6389\u4E86</li></ul></li><li>\u603B\u4E4B\uFF0C<strong>usedExports \u5B9E\u73B0 Tree Shaking \u662F\u7ED3\u5408 Terser \u6765\u5B8C\u6210\u7684</strong></li></ol></li><li><strong>sideEffects</strong>\uFF1A\u8DF3\u8FC7\u6574\u4E2A\u6A21\u5757/\u6587\u4EF6\uFF0C\u76F4\u63A5\u68C0\u6D4B\u6587\u4EF6\u662F\u5426\u6709\u526F\u4F5C\u7528 <ol><li>sideEffects \u7528\u4E8E\u544A\u77E5 webpack compiler \u54EA\u4E9B\u6A21\u5757\u662F\u6709\u526F\u4F5C\u7528\u7684\uFF1A <ul><li>\u526F\u4F5C\u7528\u7684\u610F\u601D\u662F\u8FD9\u91CC\u9762\u7684\u4EE3\u7801\u6709\u6267\u884C\u4E00\u4E9B\u7279\u6B8A\u7684\u4EFB\u52A1\uFF0C\u4E0D\u80FD\u4EC5\u4EC5\u901A\u8FC7 export \u6765\u5224\u65AD\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u4E49</li></ul></li><li>\u5728 package.json \u4E2D\u8BBE\u7F6E sideEffects \u7684\u503C\uFF1A <ul><li>\u5982\u679C\u5C06 sideEffects \u8BBE\u7F6E\u4E3A false\uFF0C\u5C31\u662F\u544A\u77E5 webpack \u53EF\u4EE5\u5B89\u5168\u7684\u5220\u9664\u672A\u7528\u5230\u7684 exports</li><li>\u5982\u679C\u5E0C\u671B\u6709\u4E00\u4E9B\u4FDD\u7559\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u6570\u7EC4</li></ul></li><li>\u6BD4\u5982\u6709\u4E00\u4E2A format.js\u548Cstyle.css\u6587\u4EF6\uFF1A <ul><li>\u8BE5\u6587\u4EF6\u5728\u5BFC\u5165\u65F6\u6CA1\u6709\u4F7F\u7528\u4EFB\u4F55\u53D8\u91CF\u6765\u63A5\u6536</li><li>\u90A3\u4E48\u6253\u5305\u540E\u7684\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u4FDD\u7559 format.js\u3001style.css \u76F8\u5173\u7684\u4EE3\u7801</li></ul></li></ol></li></ol></li></ol><hr><h3 id="\u56DB\u3001css-\u5B9E\u73B0-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001css-\u5B9E\u73B0-tree-shaking" aria-hidden="true">#</a> \u56DB\u3001CSS \u5B9E\u73B0 Tree Shaking</h3><ol><li><p>\u8BA4\u8BC6 PurgeCSS</p><ol><li>PurgeCSS \u662F\u4E00\u4E2A\u7528\u6765\u5220\u9664\u672A\u4F7F\u7528\u7684 CSS \u4EE3\u7801\u7684\u5DE5\u5177\u3002\u53EF\u4EE5\u5C06\u5B83\u4F5C\u4E3A\u4F60\u7684\u5F00\u53D1\u6D41\u7A0B\u4E2D\u7684\u4E00\u4E2A\u73AF\u8282\u3002 \u5F53\u4F60\u6784\u5EFA\u4E00\u4E2A\u7F51\u7AD9\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u51B3\u5B9A\u4F7F\u7528\u4E00\u4E2A CSS \u6846\u67B6\uFF0C\u4F8B\u5982 TailwindCSS\u3001Bootstrap\u3001MaterializeCSS\u3001Foundation \u7B49\uFF0C\u4F46\u662F\uFF0C\u4F60\u6240\u7528\u5230\u7684\u4E5F\u53EA\u662F\u6846\u67B6\u7684\u4E00\u5C0F\u90E8\u5206\u800C\u5DF2\uFF0C\u5927\u91CF CSS \u6837\u5F0F\u5E76\u672A\u88AB\u4F7F\u7528\u3002</li><li>PurgeCSS \u901A\u8FC7\u5206\u6790\u4F60\u7684\u5185\u5BB9\u548C CSS \u6587\u4EF6\uFF0C\u9996\u5148\u5B83\u5C06 CSS \u6587\u4EF6\u4E2D\u4F7F\u7528\u7684\u9009\u62E9\u5668\u4E0E\u5185\u5BB9\u6587\u4EF6\u4E2D\u7684\u9009\u62E9\u5668\u8FDB\u884C\u5339\u914D\uFF0C\u7136\u540E\u5B83\u4F1A\u4ECE CSS \u4E2D\u5220\u9664\u672A\u4F7F\u7528\u7684\u9009\u62E9\u5668\uFF0C\u4ECE\u800C\u751F\u6210\u66F4\u5C0F\u7684 CSS \u6587\u4EF6\u3002</li></ol></li><li><p>webpack\u63D2\u4EF6</p><ol><li><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> purgecss-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\uFF1A\u914D\u5408 mini-css-extract-plugin \u63D2\u4EF6\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> glob <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;glob&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> PurgecssPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;purgecss-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token constant">PATHS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;styles&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">PurgecssPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">paths</span><span class="token operator">:</span> glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PATHS</span><span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/**/*</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>  <span class="token punctuation">{</span> <span class="token literal-property property">nodir</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol>`,13),l=[t];function o(i,c){return s(),a("div",null,l)}const k=n(p,[["render",o],["__file","TreeShaking.html.vue"]]);export{k as default};