"use strict";(self.webpackChunkblog_demo_aurora=self.webpackChunkblog_demo_aurora||[]).push([[9256],{8045:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-4b326a15",path:"/plugin/coze/",title:"Vuepress-plugin-coze",lang:"zh-CN",frontmatter:{tag:["coze","说说","plugin"],categories:["plugin"]},excerpt:"",headers:[{level:2,title:"introduce",slug:"introduce",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"截图",slug:"截图",children:[]},{level:2,title:"用户注册",slug:"用户注册",children:[{level:3,title:"秘钥获取",slug:"秘钥获取",children:[]},{level:3,title:"注册",slug:"注册",children:[]}]},{level:2,title:"主题中展示说说",slug:"主题中展示说说",children:[]},{level:2,title:"插件配置信息",slug:"插件配置信息",children:[]}],git:{}}},3156:(s,a,n)=>{n.r(a),n.d(a,{default:()=>as});var e=n(6252);const o=(0,e._)("h1",{id:"vuepress-plugin-coze",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#vuepress-plugin-coze","aria-hidden":"true"},"#"),(0,e.Uk)(" Vuepress-plugin-coze")],-1),t=(0,e._)("h2",{id:"introduce",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#introduce","aria-hidden":"true"},"#"),(0,e.Uk)(" introduce")],-1),l=(0,e.Uk)("这是Vuepress2的一个插件，该插件提供在线发布，修改说说，相册功能，支持文件上传，登录注册，点赞，评论等，使用简单，只需在"),p={href:"https://console.leancloud.app/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("leancloud"),c=(0,e.Uk)("中获取到正确的"),i=(0,e._)("code",null,"appId",-1),u=(0,e.Uk)(","),g=(0,e._)("code",null,"appKey",-1),d=(0,e.Uk)("便可以在任何地方使用"),m=(0,e.uE)('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p>因为该插件是基于Vuepress2的，所以在使用该插件之前，请确保你使用的版本为<code>Vuepress2</code></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-coze\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n         <span class="token string">&#39;vuepress-plugin-coze&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;leanCloud中得到的appId&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">&#39;leanCloud中得到的appKey&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">masterKey</span><span class="token operator">:</span> <span class="token string">&#39;leanCloud中得到的masterKey&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">//下面这些是可选的</span>\n            <span class="token literal-property property">avatarPath</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/avatar-aurora.png&#39;</span><span class="token punctuation">,</span><span class="token comment">//说说头像url</span>\n            <span class="token literal-property property">registerPath</span><span class="token operator">:</span> <span class="token string">&#39;/aurora-register&#39;</span><span class="token punctuation">,</span> <span class="token comment">//自定义插件默认提供的注册页面路由，请在前面加上/</span>\n            <span class="token literal-property property">onlyAdministrator</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//是否运行其他注册的用户发布说说，true表示只有管理员可以发布</span>\n\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>运行你的vuepress应用，待启动完成之后，分别访问<code>/aurora-register</code>和<code>/aurora-coze</code>进行用户注册和说说展示</p></blockquote><h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2><ul><li>说说展示(<code>此效果在我主题中</code>)</li></ul>',7),h=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108190928615",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108190928615.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),b=(0,e._)("ul",null,[(0,e._)("li",null,"发布说说界面")],-1),k=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108191227820",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108191227820.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),y=(0,e._)("ul",null,[(0,e._)("li",null,"相册")],-1),_=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211110233924959",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211110233924959.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),z=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"提供的注册界面"),(0,e._)("blockquote",null,[(0,e._)("p",null,"此界面是该插件自动提供的，并且插件也提供了一个没有任何样式的全局组件，你可以自己进行css编写")])])],-1),v=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108191311008",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108191311008.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),f=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"点赞，评论，编写"),(0,e._)("blockquote",null,[(0,e._)("p",null,"因为时间问题，目前说说评论暂未实现")])])],-1),x=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108191613515",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108191613515.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),P=(0,e.Uk)("如果你在使用该插件及"),U={href:"https://aurora.xcye.xyz",target:"_blank",rel:"noopener noreferrer"},j=(0,e.Uk)("Aurora主题"),S=(0,e.Uk)("的过程中，有任何的问题，都可以通过以下方式联系我"),q=(0,e.uE)('<table><thead><tr><th>QQ</th><th>主题交流群</th><th>微信</th></tr></thead><tbody><tr><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1" style="zoom:33%;"></td><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1" alt="image-20211024233827133" style="zoom:33%;"></td><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1" alt="image-20211024233735110" style="zoom:39%;"></td></tr></tbody></table><h2 id="用户注册" tabindex="-1"><a class="header-anchor" href="#用户注册" aria-hidden="true">#</a> 用户注册</h2><h3 id="秘钥获取" tabindex="-1"><a class="header-anchor" href="#秘钥获取" aria-hidden="true">#</a> 秘钥获取</h3>',3),C=(0,e.Uk)("该插件的说说存储于"),E=(0,e._)("code",null,"leancloud",-1),K=(0,e.Uk)(",进入"),V={href:"https://console.leancloud.app/",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Uk)("leanCloud国际版"),W=(0,e.Uk)("("),w=(0,e._)("code",null,"一定要使用国际版，国内版我没测试过",-1),A=(0,e.Uk)(")，你如果没有"),M=(0,e._)("code",null,"leanCloud",-1),Q=(0,e.Uk)("账户的话，需要先创建一个有效账户，"),D=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192136530",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192136530.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),H=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192241757",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192241757.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),L=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192330231",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192330231.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),N=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192405575",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192405575.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Y=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192519797",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192519797.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Z=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108192639202",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108192639202.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),B=(0,e.uE)('<h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h3><table><thead><tr><th>路由</th><th>描述</th></tr></thead><tbody><tr><td>/aurora-register</td><td>注册用户，登出操作</td></tr><tr><td>/aurora-coze</td><td>说说默认展示页面</td></tr></tbody></table><blockquote><p><code>/aurora-register</code>是默认注册用户，登出操作页面的路由，如果你在插件配置中设置了<code>registerPath</code>值，那么注册，登出的路由将是<code>registerPath</code>对应值</p></blockquote><p>现在访问<code>/aurora-register</code>路由，注册用户(<code>第一个注册的用户，默认为管理员</code>)，你将看到下面页面</p>',4),F=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108193700352",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108193700352.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),G=(0,e._)("p",null,"输入正确信息点击注册",-1),J=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108193812105",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108193812105.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),O=(0,e._)("p",null,[(0,e.Uk)("现在访问"),(0,e._)("code",null,"/aurora-coze"),(0,e.Uk)("页面")],-1),R=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108193856216",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108193856216.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),T=(0,e.uE)('<p>恭喜你，设置成功</p><h2 id="主题中展示说说" tabindex="-1"><a class="header-anchor" href="#主题中展示说说" aria-hidden="true">#</a> 主题中展示说说</h2><p>如果你设置成功，那么便可以将<code>CozeMood</code>组件放在你主题中的任何位置，这是插件注册的全局组件</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CozeMood</span> <span class="token attr-name">@coze-success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeSuccess<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="插件配置信息" tabindex="-1"><a class="header-anchor" href="#插件配置信息" aria-hidden="true">#</a> 插件配置信息</h2>',5),X={href:"https://aurora.xcye.xyz/plugin/coze/config.html",target:"_blank",rel:"noopener noreferrer"},$=(0,e.Uk)("插件配置信息"),ss={},as=(0,n(3744).Z)(ss,[["render",function(s,a){const n=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,t,(0,e._)("p",null,[l,(0,e._)("a",p,[r,(0,e.Wm)(n)]),c,i,u,g,d]),m,h,b,k,y,_,z,v,f,x,(0,e._)("p",null,[P,(0,e._)("a",U,[j,(0,e.Wm)(n)]),S]),q,(0,e._)("p",null,[C,E,K,(0,e._)("a",V,[I,(0,e.Wm)(n)]),W,w,A,M,Q]),D,H,L,N,Y,Z,B,F,G,J,O,R,T,(0,e._)("p",null,[(0,e._)("a",X,[$,(0,e.Wm)(n)])])],64)}]])}}]);