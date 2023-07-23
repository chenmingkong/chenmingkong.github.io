https://blog.csdn.net/weixin_41143631/article/details/81221777

https://zhuanlan.zhihu.com/p/106777805

main.cpp

```
#include <stdio.h>

int main(){
    printf("Hello world!");
    return 0;
}

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210408232309852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)



#### 1. 预处理

使用预处理器把源文件test.c经过预处理生成test.i文件，预处理用于将所有的#include头文件以及宏定义替换成其真正的内容。

```
gcc -E main.cpp -o main.i
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210408232443540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

#### 2. 编译

编译阶段是检查语法，生成汇编

```
gcc -S main.cpp -o main.s
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210408232728452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

#### 3. 汇编（Assemble）

使用汇编器将汇编文件test.s转换成目标文件test.o。

```
gcc -c main.cpp -o main.o
```

#### 4. 链接

将源文件中用到的库函数与汇编生成的目标文件.o合并生成可执行文件

```
gcc main.o -o main.exe
```

## 其他学习


Windows 和 Linux 的加载时链接是由操作系统来完成的，格式在不同的系统下有不同的区别，但是原理还是一样的。
 
linux下文件的类型是不依赖于其后缀名的，但一般来讲：

.o,是目标文件,相当于windows中的.obj文件

.a为静态库,是好多个.o合在一起,用于静态连接,相当于相当于windows中的 .lib

.so 为共享库,是shared object,用于动态连接的,相当于windows中的.dll