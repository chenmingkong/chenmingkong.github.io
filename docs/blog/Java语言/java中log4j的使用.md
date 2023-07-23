##  1. 配置

### 1.1 maven 引入依赖

```
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>

```

### 1.2设置配置文件

在resource目录下新建log4g.properties文件，内容如下

 ![](https://gitee.com/chenmingkong/picture-bed/raw/master/img/20220116213844.png)

```
log4j.rootLogger=INFO, stdout
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m%n
```

## 2. 使用

如果不想每次都写private  final Logger logger = LoggerFactory.getLogger(XXX.class); 可以用注解@Log4j

> @Log4j注解是lombok的，什么是Lombok可以自行百度，需要引入maven依赖和安装idea插件

![](https://gitee.com/chenmingkong/picture-bed/raw/master/img/20220116215928.png)