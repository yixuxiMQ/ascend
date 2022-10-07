import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as s,e as t,f as c,r as l}from"./app.52cc2d6a.js";const i={},u=n("h1",{id:"\u4E8C\u53C9\u6811\u7684\u904D\u5386",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E8C\u53C9\u6811\u7684\u904D\u5386","aria-hidden":"true"},"#"),s(" \u4E8C\u53C9\u6811\u7684\u904D\u5386")],-1),r=n("hr",null,null,-1),k={class:"task-list-container"},d={class:"task-list-item"},v=n("p",null,[n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",disabled:"disabled"}),n("label",{class:"task-list-item-label",for:"task-item-0"}," ## \u4EFB\u52A1\uFF1A")],-1),m={class:"task-list-container"},b={class:"task-list-item"},h=n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",disabled:"disabled"},null,-1),f={class:"task-list-item-label",for:"task-item-1"},y={href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"},_={class:"task-list-item"},w=n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",disabled:"disabled"},null,-1),g={class:"task-list-item-label",for:"task-item-2"},x={href:"https://leetcode-cn.com/problems/binary-tree-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},j={class:"task-list-item"},T=n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",disabled:"disabled"},null,-1),N={class:"task-list-item-label",for:"task-item-3"},V={href:"https://leetcode-cn.com/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},B=c(`<hr><h2 id="\u4E00\u3001\u524D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u524D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u4E00\u3001\u524D\u5E8F\u904D\u5386</h2><ul><li><p>\u9012\u5F52\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FED\u4EE3\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> n<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h2 id="\u4E8C\u3001\u4E2D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u3001\u4E2D\u5E8F\u904D\u5386</h2><ul><li><p>\u9012\u5F52\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FED\u4EE3\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> n<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h2 id="\u4E09\u3001\u540E\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u540E\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u4E09\u3001\u540E\u5E8F\u904D\u5386</h2><ul><li><p>\u9012\u5F52\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FED\u4EE3\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// code...</span>
<span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> n<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,11);function E(I,L){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,r,n("ul",k,[n("li",d,[v,n("ul",m,[n("li",b,[n("p",null,[h,n("label",f,[n("a",y,[s("144.\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386"),t(a)])])])]),n("li",_,[n("p",null,[w,n("label",g,[n("a",x,[s("94.\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386"),t(a)])])])]),n("li",j,[n("p",null,[T,n("label",N,[n("a",V,[s("145.\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386"),t(a)])])])])])])]),B])}const q=p(i,[["render",E],["__file","\u4E8C\u53C9\u6811\u7684\u904D\u5386.html.vue"]]);export{q as default};
