(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{311:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("https://blog.csdn.net/weixin_41143631/article/details/81221777")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/106777805")]),t._v(" "),a("p",[t._v("main.cpp")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <stdio.h>\n\nint main(){\n    printf("Hello world!");\n    return 0;\n}\n\n')])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210408232309852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_1-预处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-预处理"}},[t._v("#")]),t._v(" 1. 预处理")]),t._v(" "),a("p",[t._v("使用预处理器把源文件test.c经过预处理生成test.i文件，预处理用于将所有的#include头文件以及宏定义替换成其真正的内容。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc -E main.cpp -o main.i\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210408232443540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[t._v("#")]),t._v(" 2. 编译")]),t._v(" "),a("p",[t._v("编译阶段是检查语法，生成汇编")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc -S main.cpp -o main.s\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210408232728452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_3-汇编-assemble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-汇编-assemble"}},[t._v("#")]),t._v(" 3. 汇编（Assemble）")]),t._v(" "),a("p",[t._v("使用汇编器将汇编文件test.s转换成目标文件test.o。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc -c main.cpp -o main.o\n")])])]),a("h4",{attrs:{id:"_4-链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-链接"}},[t._v("#")]),t._v(" 4. 链接")]),t._v(" "),a("p",[t._v("将源文件中用到的库函数与汇编生成的目标文件.o合并生成可执行文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc main.o -o main.exe\n")])])]),a("h2",{attrs:{id:"其他学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他学习"}},[t._v("#")]),t._v(" 其他学习")]),t._v(" "),a("p",[t._v("Windows 和 Linux 的加载时链接是由操作系统来完成的，格式在不同的系统下有不同的区别，但是原理还是一样的。")]),t._v(" "),a("p",[t._v("linux下文件的类型是不依赖于其后缀名的，但一般来讲：")]),t._v(" "),a("p",[t._v(".o,是目标文件,相当于windows中的.obj文件")]),t._v(" "),a("p",[t._v(".a为静态库,是好多个.o合在一起,用于静态连接,相当于相当于windows中的 .lib")]),t._v(" "),a("p",[t._v(".so 为共享库,是shared object,用于动态连接的,相当于windows中的.dll")])])}),[],!1,null,null,null);a.default=n.exports}}]);