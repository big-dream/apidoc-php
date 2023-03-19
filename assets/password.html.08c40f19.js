import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,b as s,d as n,e as o,w as i,a as c,r as l}from"./app.c9770b21.js";const r={},d=c(`<h1 id="访问密码" tabindex="-1"><a class="header-anchor" href="#访问密码" aria-hidden="true">#</a> 访问密码</h1><h2 id="全局密码" tabindex="-1"><a class="header-anchor" href="#全局密码" aria-hidden="true">#</a> 全局密码</h2><p>配置文件<code>apidoc.php</code>中的 auth 设置如下，即可在访问文档页面时需输入密码访问：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// apidoc.php</span>
<span class="token comment">// 权限认证配置</span>
<span class="token string single-quoted-string">&#39;auth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">// 是否启用密码验证</span>
    <span class="token string single-quoted-string">&#39;enable&#39;</span>     <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 验证密码</span>
    <span class="token string single-quoted-string">&#39;password&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;123456&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 密码加密盐</span>
    <span class="token string single-quoted-string">&#39;secret_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;apidoc#hg_code&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 有效期</span>
    <span class="token string single-quoted-string">&#39;expire&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用-版本独立密码" tabindex="-1"><a class="header-anchor" href="#应用-版本独立密码" aria-hidden="true">#</a> 应用/版本独立密码</h2><p>apidoc.php配置文件将指定应用/版本，设置<code>password</code>字段，便可开启该应用的访问密码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// /config/apidoc.php</span>

<span class="token string single-quoted-string">&#39;apps&#39;</span>           <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;后台管理&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\admin\\controller&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;演示示例&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;items&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;V1.0&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\demo\\controller\\v1&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;v1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;V2.0&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\demo\\controller\\v2&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;v2&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;456&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上配置，访问<code>admin</code>应用需要使用<code>123</code>进行密码校验；访问<code>demo 的v2</code>时需要<code>456</code>进行密码校验</p>`,8),u={class:"custom-container warning"},g=s("p",{class:"custom-container-title"},"注意",-1);function k(m,v){const a=l("RouterLink");return e(),p("div",null,[d,s("div",u,[g,s("p",null,[n("由于Apidoc的异常状态会经过框架的异常处理，所以如果框架的异常处理函数，无正常返回401状态码时，可能会导致开启密码访问功能后，页面报错。可参考"),o(a,{to:"/help/problems/500.html#%E8%AE%BF%E9%97%AE%E6%8E%88%E6%9D%83%E9%94%99%E8%AF%AF"},{default:i(()=>[n("常见问题-访问授权错误")]),_:1})])])])}const q=t(r,[["render",k],["__file","password.html.vue"]]);export{q as default};