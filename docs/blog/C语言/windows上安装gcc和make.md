## 1. 下载

### 官网下载链接

<https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/>

### 下载压缩包

不要下载链接中的绿色按钮，往下拉下载免安装压缩包

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200912234526589.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70#pic_center)

## 2. 安装

### 解压

解压到任一文件夹下

### 设置环境变量

将bin目录设置为环境变量

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200912234832223.png#pic_center)

### 修改make名称

将bin目录下的mingw32-make.exe复制一份修改名称为make.exe

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200912235353678.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70#pic_center)



## 3. 验证

```bash
gcc --version
make --version
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200912235323762.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70#pic_center)

