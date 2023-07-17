(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{312:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-ubuntu-安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ubuntu-安装mysql"}},[a._v("#")]),a._v(" 1. ubuntu 安装mysql")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("apt-get install mysql-server\n")])])]),s("h2",{attrs:{id:"_2-配置可以远端登录和操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置可以远端登录和操作"}},[a._v("#")]),a._v(" 2. 配置可以远端登录和操作")]),a._v(" "),s("h4",{attrs:{id:"_1-设置监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置监听"}},[a._v("#")]),a._v(" （1）设置监听")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf \n")])])]),s("p",[a._v("注释掉bind-address = 127.0.0.1， 即")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# bind-address = 127.0.0.1\n")])])]),s("p",[a._v("重启服务")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo /etc/init.d/mysql restart\n")])])]),s("h4",{attrs:{id:"_2-修改用户表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改用户表"}},[a._v("#")]),a._v(" （2）修改用户表")]),a._v(" "),s("p",[a._v("登录数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -u root -p \n")])])]),s("p",[a._v("选择数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use mysql; \n")])])]),s("p",[a._v("修改root用户可以在所有机器登录（root只是举例，%表示所有机器）")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("update user set host = '%' where user = 'root'; \n")])])]),s("p",[a._v("重启服务")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo /etc/init.d/mysql restart\n")])])]),s("h2",{attrs:{id:"_3-设置慢查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置慢查询"}},[a._v("#")]),a._v(" 3.设置慢查询")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW VARIABLES;\nSHOW VARIABLES LIKE 'slow_query%';\nSET GLOBAL slow_query_log_file= '/var/log/mysql/slow_query.log';\nSET GLOBAL slow_query_log=ON;\nSET GLOBAL long_query_time=0.00;\n")])])]),s("p",[a._v("解决慢查询时，not found (Errcode: 13 - Permission denied)的问题")]),a._v(" "),s("p",[a._v("（1）"),s("code",[a._v("slow_query_log_file")]),a._v("设置为"),s("code",[a._v("/var/log/mysql/slow_query.log")]),a._v("，不要设置其他路径目录；")]),a._v(" "),s("p",[a._v("（2）关闭selinux(未测试)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim  /etc/selinux/config\n")])])]),s("p",[a._v("将SELINUX项改成：SELINUX=disabled")]),a._v(" "),s("p",[a._v("重启系统。")]),a._v(" "),s("h2",{attrs:{id:"_4-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用命令"}},[a._v("#")]),a._v(" 4. 常用命令")]),a._v(" "),s("h5",{attrs:{id:"重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[a._v("#")]),a._v(" 重启")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/etc/init.d/mysql restart\n")])])]),s("h5",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[a._v("#")]),a._v(" 登录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -uroot -p12345678 -h192.168.1.103\n")])])]),s("h5",{attrs:{id:"查看所有数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据库"}},[a._v("#")]),a._v(" 查看所有数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("show databases;\n")])])]),s("h5",{attrs:{id:"进入某个数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入某个数据库"}},[a._v("#")]),a._v(" 进入某个数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use 库名;\n")])])]),s("h5",{attrs:{id:"建库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建库"}},[a._v("#")]),a._v(" 建库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("create database 库名; \n")])])]),s("h5",{attrs:{id:"显示库中的数据表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示库中的数据表"}},[a._v("#")]),a._v(" 显示库中的数据表")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("show tables; \n")])])]),s("h5",{attrs:{id:"显示数据表的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示数据表的结构"}},[a._v("#")]),a._v(" 显示数据表的结构")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("describe 表名; \n")])])]),s("h5",{attrs:{id:"显示表中的记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示表中的记录"}},[a._v("#")]),a._v(" 显示表中的记录：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select * from 表名\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);