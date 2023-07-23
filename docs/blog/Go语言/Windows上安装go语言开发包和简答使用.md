## 1. 下载

到go官网下载Windows安装包

> https://golang.google.cn/dl/

![https://golang.google.cn/dl/](https://img-blog.csdnimg.cn/20200517220751363.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)


## 2. 一路安装即可

![https://golang.google.cn/dl/](https://img-blog.csdnimg.cn/20200517221055828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

![https://golang.google.cn/dl/](https://img-blog.csdnimg.cn/20200517221438295.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)


## 3. 配置环境变量

- GOROOT

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517222336997.png)

- Path

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517222219253.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

- GOPATH

后续代码目录，新建系统变量 GOPATH，将其指向你的代码目录：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517222447574.png)

## 4. 测试

``` bat
go env
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517222710732.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)


## 5. 我的第一个go程序

新建一个`hello.go`文件

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

执行

```bat
go run hello.go
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517223803387.png)

