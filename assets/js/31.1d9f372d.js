(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{305:function(t,a,s){"use strict";s.r(a);var r=s(13),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("相信很多人写文章会疯狂的喜爱MarkDown这种轻量级标记语言，尤其适用Typora作为编辑器，简直完美。")]),t._v(" "),a("blockquote",[a("p",[t._v("画外音：使用MarkDown+Typora编写博客等文档简直完美")])]),t._v(" "),a("p",[t._v("但是最大的缺陷是添加图片了，使用本地链接给别人发送的时候没法打开，而且一旦更换电脑等，特别麻烦。")]),t._v(" "),a("blockquote",[a("p",[t._v("画外音：使用snipaste进行截图超级方便哦")])]),t._v(" "),a("p",[t._v("因此使用PicGo + GitHub搭建图床，完美的解决了这个问题，本文主要描述如何使用PicGo + GitHub搭建图床")]),t._v(" "),a("h2",{attrs:{id:"_1-下载安装picgo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装picgo"}},[t._v("#")]),t._v(" 1. 下载安装PicGo")]),t._v(" "),a("blockquote",[a("p",[t._v("https://molunerfinn.com/PicGo/")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223029104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223045131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"_2-注册github并创建repority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册github并创建repority"}},[t._v("#")]),t._v(" 2 注册github并创建repority")]),t._v(" "),a("h3",{attrs:{id:"_2-1-注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注册"}},[t._v("#")]),t._v(" 2.1 注册")]),t._v(" "),a("p",[t._v("作为全球最大的同性交友网站，如果是程序员的话这个基本上百分之百会注册")]),t._v(" "),a("blockquote",[a("p",[t._v("https://github.com")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-创建代码仓"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-创建代码仓"}},[t._v("#")]),t._v(" 2.2 创建代码仓")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223231882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n设置成public")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223332727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-3-获取private-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-获取private-token"}},[t._v("#")]),t._v(" 2.3 获取private-token")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223559629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223643944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223719349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322223838653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"_3-设置picgo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置picgo"}},[t._v("#")]),t._v(" 3. 设置picgo")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200322224112965.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"_4-快捷键快速使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-快捷键快速使用"}},[t._v("#")]),t._v(" 4. 快捷键快速使用")]),t._v(" "),a("h3",{attrs:{id:"第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),a("p",[t._v("F1 截图（snipaste截图快捷键，当然你也可以使用其他方式，比如QQ的ctrl+alt+A）")]),t._v(" "),a("h3",{attrs:{id:"第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),a("p",[t._v("Ctrl+Alt+P 上传到github（将粘贴板的图片快速上传）")]),t._v(" "),a("h3",{attrs:{id:"第三部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三部"}},[t._v("#")]),t._v(" 第三部")]),t._v(" "),a("p",[t._v("Ctrl+Alt+v 粘贴链接")])])}),[],!1,null,null,null);a.default=_.exports}}]);