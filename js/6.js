(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{618:function(n,e,o){n.exports='<h2 id="事件循环">事件循环</h2>\n<p>eventloop 简化模型.</p>\n<p><img src="'+o(619)+'" alt="流程图"></p>\n<h3 id="1-任务队列">1. 任务队列</h3>\n<p>出列与入列.</p>\n<pre><code>function Queue() {\n    const messages = []\n    const popMessage = () =&gt; {\n        return messages.pop()\n    }\n    const pushMessage = () =&gt; {\n        return messages\n    }\n    return {\n        pop: popMessage,\n        push: pushMessage\n    }\n}\nconst microQueue = new Queue() // 宏任务队列\nconst macroQueue = new Queue() // 微任务队列</code></pre><h3 id="2-注册表">2. 注册表</h3>\n<p>注册表提供了其他模块与 js 引擎进行交互的功能,具体实现方式可能是<code>while(true)</code>,也可能是观察订阅模式.</p>\n<pre><code>function Observable(fn, tag = true) {\n    const notification = () =&gt; {\n        if (tag) {\n            microQueue.add(fn)\n        } else {\n            macroQueue.add(fn)\n        }\n    }\n    return {\n        notification\n    }\n}\n// registry注册了外部与Observable的关系,外部调用Observable.notification,registry为其他模块与js引擎交互的唯一方式,且能够做记录与进行调试.\nconst registry = {}</code></pre><h3 id="3-js-运行">3. js 运行</h3>\n<pre><code>// 执行传入的函数\nconst execute = fn =&gt; {\n    if (typeof fn === &#39;function&#39;) {\n        fn()\n        return true\n    }\n    return false\n}\n\n// 执行微任务队列中的所有任务\nconst executeMicro = () =&gt; {\n    let task = microQueue.pop()\n    let tag = true\n    while (tag) {\n        tag = task()\n        task = microQueue.pop()\n    }\n}\n\nconst processNextTick() {\n    dosomething1()\n\n    executeMicro()\n    execute(macroQueue.pop())\n\n    dosomething2()\n}\n\n// 事件循环\nwhile(true) {\n    processNextTick()\n}</code></pre>'},619:function(n,e,o){n.exports=o.p+"img/eventloop.2bd012.jpg"},620:function(n,e){n.exports='<h1 id="问题">问题</h1>\n<h2 id="1-引用外部-css-样式文件">1. 引用外部 css 样式文件</h2>\n<h3 id="11-问题描述">1.1 问题描述</h3>\n<p>&emsp;&emsp;在引用外部 css 文件(例如 github-markdown.css)时,因为对 sass 文件进行了模块化配置,因此这些 css 样式文件如果在 sass 文件中导入,会生成<code>*.d.ts</code>文件,在打包过程中会给类名添加哈希值,因此在 html 标签上直接添加 class 无法与模块化的样式进行匹配.</p>\n<h3 id="12-解决方法">1.2 解决方法</h3>\n<ol>\n<li>导入模块化样式,设置 class,这样做可能会有未满足某些模块化命名问题.例如<code>markdown-body</code>不满足驼峰命名.</li>\n<li>将<code>css</code>文件与<code>sass</code>文件区分,webpack 中 css 样式不进行模块化配置,在<code>css</code>文件中导入引用的样式表,这样做也可以解决问题.</li>\n</ol>\n<h2 id="2-代码分离">2. 代码分离</h2>\n'},621:function(n,e){n.exports='<h1 id="问题">问题</h1>\n<h2 id="1-如何添加路由动画">1. 如何添加路由动画</h2>\n<ol>\n<li>Switch 组件用于迭代所有 Route 子元素,渲染与当前位置匹配的第一个子元素.</li>\n<li>react-motion 的 Motion 组件可用于制作单组件动画效果.</li>\n</ol>\n<p>&emsp;&emsp;可用 react-motion 制作入场动画.那么如何制作出场动画呢?出场动画必然涉及到 dom 操作,需要显示声明组件的销毁,那么必然涉及到 Switch 组件对 Route 组件的某些操作,如何用 hooks 实现呢?可以用<code>react-transition-group</code>库实现.</p>\n<ol start="3">\n<li>组件切换动画可以使用 TransitionMotion 组件.</li>\n</ol>\n<h2 id="2-markdown-代码高亮，并且记忆当前阅读位置">2. markdown 代码高亮，并且记忆当前阅读位置</h2>\n<h3 id="21-markdown-代码高亮">2.1 markdown 代码高亮</h3>\n<p>&emsp;&emsp;使用 highlight.js 库实现代码高亮，highlightBlock 接口可以使传入的 DOM 节点代码高亮。即在 DOM 渲染后调用 highlightBlock 函数。因此可以在 componentDidMount 钩子中调用。</p>\n<h3 id="22-记忆当前阅读位置">2.2 记忆当前阅读位置</h3>\n<p>&emsp;&emsp; 通过 localStorage 保存阅读文章的<code>window.scrollY</code></p>\n'},638:function(n,e,o){"use strict";o.r(e);var t=o(1),s=o.n(t),c=o(246),i=o(618),r=o.n(i),p=o(620),a=o.n(p),u=o(621),d=o.n(u),h=function(){return(h=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++)for(var s in e=arguments[o])Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n}).apply(this,arguments)};e.default=function(n){var e={"/blog/eventloop":{md:r.a,name:"eventloop"},"/question/webpack":{md:a.a,name:"webpack"},"/question/react":{md:d.a,name:"react"}};return s.a.createElement(c.a,h({},e[n.location.pathname]))}}}]);