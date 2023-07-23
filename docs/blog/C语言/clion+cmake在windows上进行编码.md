## 1. 通过mingw安装make和gcc

https://blog.csdn.net/kongmingxiaoxiao/article/details/108557118

## 2. 安装clion

## 3. clion进行新建cmake任务和调测

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328233148394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)


调测

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328233226663.png)


## 4. cmd框进行编码

```
mkdir build 
cd build 
cmake -G "Unix Makefiles" ../
make
untitled2.exe
```

## 5. 常见错误

#### (1) 

```
cl    is not a full path and was not found in the PATH.
```

或者

```
windows The CMAKE_CXX_COMPILER:clis not a full path and was not found in the PATH.
```

解决：

cmake 后面加`-G "Unix Makefiles"`即可

#### （2）

```
Run Build Command(s):nmake /nologo cmTC_95d55\fast && 系统找不到指定的文件。
```

解决：

删除所有缓存，例如build目录下所有文件及其他提示的缓存文件即可

