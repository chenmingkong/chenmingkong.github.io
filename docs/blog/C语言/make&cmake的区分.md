## 1. 安装简单

#### gcc/make安装

https://blog.csdn.net/kongmingxiaoxiao/article/details/108557118

https://www.cnblogs.com/attentle/p/12652512.html

#### cmake安装

https://blog.csdn.net/qq_42831939/article/details/106087963


## 2. 区别

#### 2.1 解释一

https://blog.csdn.net/weixin_42491857/article/details/80741060

写程序大体步骤为：

1.用编辑器编写源代码，如.c文件。

2.用编译器编译代码生成目标文件，如.o。

3.用链接器连接目标代码生成可执行文件，如.exe。

但如果源文件太多，一个一个编译时就会特别麻烦，于是人们想到，为什么不设计一种类似批处理的程序，来批处理编译源文件呢，于是就有了make工具，它是一个自动化编译工具，你可以使用一条命令实现完全编译。但是你需要编写一个规则文件，make依据它来批处理编译，这个文件就是makefile，所以编写makefile文件也是一个程序员所必备的技能。

对于一个大工程，编写makefile实在是件复杂的事，于是人们又想，为什么不设计一个工具，读入所有源文件之后，自动生成makefile呢，于是就出现了cmake工具，它能够输出各种各样的makefile或者project文件,从而帮助程序员减轻负担。但是随之而来也就是编写cmakelist文件，它是cmake所依据的规则。所以在编程的世界里没有捷径可走，还是要脚踏实地的。

#### 2.2 解释二

https://www.zhihu.com/question/36609459/answer/89743845

1.gcc是GNU Compiler Collection（就是GNU编译器套件），也可以简单认为是编译器，它可以编译很多种编程语言（括C、C++、Objective-C、Fortran、Java等等）。

2.当你的程序只有一个源文件时，直接就可以用gcc命令编译它。

3.但是当你的程序包含很多个源文件时，用gcc命令逐个去编译时，你就很容易混乱而且工作量大

4.所以出现了make工具
make工具可以看成是一个智能的批处理工具，它本身并没有编译和链接的功能，而是用类似于批处理的方式—通过调用makefile文件中用户指定的命令来进行编译和链接的。

5.makefile是什么？简单的说就像一首歌的乐谱，make工具就像指挥家，指挥家根据乐谱指挥整个乐团怎么样演奏，make工具就根据makefile中的命令进行编译和链接的。

6.makefile命令中就包含了调用gcc（也可以是别的编译器）去编译某个源文件的命令。

7.makefile在一些简单的工程完全可以人工手下，但是当工程非常大的时候，手写makefile也是非常麻烦的，如果换了个平台makefile又要重新修改。

8.这时候就出现了Cmake这个工具，cmake就可以更加简单的生成makefile文件给上面那个make用。当然cmake还有其他功能，就是可以跨平台生成对应平台能用的makefile，你不用再自己去修改了。

9.可是cmake根据什么生成makefile呢？它又要根据一个叫CMakeLists.txt文件（学名：组态档）去生成makefile。

10.到最后CMakeLists.txt文件谁写啊？亲，是你自己手写的。
11.当然如果你用IDE，类似VS这些一般它都能帮你弄好了，你只需要按一下那个三角形

12.cmake是make maker，生成各种可以直接控制编译过程的控制器的配置文件，比如makefile、各种IDE的配置文件。
13.make是一个简单的通过文件时间戳控制自动过程、处理依赖关系的软件，这个自动过程可以是编译一个项目。

## 示例

#### gcc

新建一main.cpp

```cpp
#include <stdio.h>

int main(){
    printf("Hello world!");
    return 0;
}
```

执行

```
gcc main.cpp
a.exe
```

out

```
Hello world!
```

#### make

新建max.c:

```
#include "max.h"  
int max(int a, int b)  
{  
 return a > b ? a : b;
}
```

max.h:

```
int max(int a, int b); 
```

max_num.c:

```
#include <stdio.h>  
#include <stdlib.h>  
#include "max.h"  

int main(void)  
{  
 printf("The bigger one of 3 and 5 is %d\n", max(3, 5));
 system("pause");
 return 0;
} 
```

makefile:

```
max_num.exe: max_num.o max.o  
 gcc -o max_num.exe max_num.o max.o

max_num.o: max_num.c max.h  
 gcc -c max_num.c

max.o: max.c max.h  
 gcc -c max.c
```

gcc前是tab而不是space

执行


#### cmake

参照：https://www.cnblogs.com/cv-pr/p/6206921.html

注意：cmake之前一定要清空build文件夹
