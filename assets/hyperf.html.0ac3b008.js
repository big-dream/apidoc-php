import{D as c}from"./DownloadFe.d30515d8.js";import{f as i,o as l,c as r,b as n,d as a,e as s,w as d,a as p,r as t,u}from"./app.7106b467.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const h=n("h1",{id:"hyperf安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hyperf安装","aria-hidden":"true"},"#"),a(" Hyperf安装")],-1),v={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"在安装本插件时，确保你已成功安装Hyperf的项目并成功运行",-1),b={href:"https://hyperf.wiki/2.2/#/zh-cn/quick-start/install",target:"_blank",rel:"noopener noreferrer"},f=p(`<h2 id="_1、安装插件" tabindex="-1"><a class="header-anchor" href="#_1、安装插件" aria-hidden="true">#</a> 1、安装插件</h2><p>进入项目根目录，执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require hg/apidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、生成配置文件" tabindex="-1"><a class="header-anchor" href="#_2、生成配置文件" aria-hidden="true">#</a> 2、生成配置文件</h2><p>项目根目录下执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php bin/hyperf.php vendor:publish hg/apidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>命令执行后在将在<code>config/autoload</code>目录下生成<code>apidoc.php</code>配置文件</p></blockquote><h2 id="_3、注册apidoc路由" tabindex="-1"><a class="header-anchor" href="#_3、注册apidoc路由" aria-hidden="true">#</a> 3、注册Apidoc路由</h2><p>将以下代码复制到<code>config/routes.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>providers<span class="token punctuation">\\</span>HyperfService</span><span class="token operator">::</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、添加前端页面" tabindex="-1"><a class="header-anchor" href="#_4、添加前端页面" aria-hidden="true">#</a> 4、添加前端页面</h2>`,11),_=n("p",null,"下载完成后解压，将apidoc文件夹拷贝到你的项目 public 目录下",-1),g={href:"http://xn--6qqv7i2xdt95b/apidoc/",target:"_blank",rel:"noopener noreferrer"},x=p(`<h2 id="配置异常响应" tabindex="-1"><a class="header-anchor" href="#配置异常响应" aria-hidden="true">#</a> 配置异常响应</h2><p>由于框架会对全局异常进行处理，如apidoc的异常未被正确响应，会导致页面打不开或报错，配置以下异常处理来解决问题。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 找到你的项目所配置的异常处理类，本示例为</span>
<span class="token comment">// App\\Exception\\Handler\\AppExceptionHandler.php</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$throwable</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ResponseInterface</span> <span class="token variable">$response</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Apidoc 异常处理</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$throwable</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>exception<span class="token punctuation">\\</span>HttpException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 格式化输出</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$throwable</span><span class="token operator">-&gt;</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$throwable</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">JSON_UNESCAPED_UNICODE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 阻止异常冒泡</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">withStatus</span><span class="token punctuation">(</span><span class="token variable">$throwable</span><span class="token operator">-&gt;</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withBody</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SwooleStream</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//....</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=i({__name:"hyperf.html",setup(w){return(q,$)=>{const e=t("ExternalLinkIcon"),o=t("ClientOnly");return l(),r("div",null,[h,n("div",v,[m,n("p",null,[a("安装方法参考："),n("a",b,[a("Hyperf2.x安装文档"),s(e)])])]),f,s(o,null,{default:d(()=>[s(u(c))]),_:1}),_,n("p",null,[a("打开浏览器访问 "),n("a",g,[a("http://你的域名/apidoc/"),s(e)]),a(" ，出现接口文档页面，表示安装成功。")]),x])}}}),H=k(y,[["__file","hyperf.html.vue"]]);export{H as default};
