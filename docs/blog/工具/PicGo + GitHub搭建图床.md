相信很多人写文章会疯狂的喜爱MarkDown这种轻量级标记语言，尤其适用Typora作为编辑器，简直完美。

> 画外音：使用MarkDown+Typora编写博客等文档简直完美

但是最大的缺陷是添加图片了，使用本地链接给别人发送的时候没法打开，而且一旦更换电脑等，特别麻烦。

> 画外音：使用snipaste进行截图超级方便哦

因此使用PicGo + GitHub搭建图床，完美的解决了这个问题，本文主要描述如何使用PicGo + GitHub搭建图床

## 1. 下载安装PicGo

> https://molunerfinn.com/PicGo/

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223029104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223045131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

## 2 注册github并创建repority

###  2.1 注册

作为全球最大的同性交友网站，如果是程序员的话这个基本上百分之百会注册

> https://github.com

### 2.2 创建代码仓

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223231882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)
设置成public

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223332727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)
### 2.3 获取private-token

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223559629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223643944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223719349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322223838653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)
## 3. 设置picgo
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200322224112965.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

## 4. 快捷键快速使用

### 第一步

F1 截图（snipaste截图快捷键，当然你也可以使用其他方式，比如QQ的ctrl+alt+A）

### 第二步

Ctrl+Alt+P 上传到github（将粘贴板的图片快速上传）

### 第三部
Ctrl+Alt+v 粘贴链接

