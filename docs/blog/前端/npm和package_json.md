## npm是什么

npm是前端开发广泛使用的包管理工具，它让js开发者分享、复用代码更方便。可以重复的框架代码被称为包（package）或者模块(module),一个包可是是一个文件夹里放着几个文件夹，还有一个package.json文件。

npm的作用就是让我们把可复用的框架代码发布到一个地方，可以供大家一起使用。

## package.json文件作用

- 作为一个描述文件，描述了你的项目依赖那些包

- 允许我们使用“语义版本规则”，指明你项目依赖的版本

- 让你的构建更好的与其他人共享  

## package.json文件创建

`npm init`就可以创建一个package.json文件

`npm init --yes` 可以跳过所有的问题

## package.json下载指定依赖的包

我们需要在package.json文件中指定项目依赖的包，别人拿到项目的时候，可以使用以下直接下载有依赖

```
npm install
```

包依赖有2种方式

```
dependencies，在生产环境中需要用到的依赖
devDependencies，在开发、测试环境中用到的依赖
```

## package.json样例

至少要有两部分内容

- name：全部小写，没有空格，可以使用下划线或者横线
- version：x.x.x的格式，符合语义化规则

 其他内容

- description：描述信息，有助于搜索
- main：入口文件，一般都是index.js
- scripts：支持的脚本，默认是一个空的test
- author：作者信息
- license：默认是MIT
- keywords：关键字，有助于人们使用npm search搜索时候发现你的项目

```
{
  "name": "elasticsearch-head",
  "version": "0.0.0",
  "description": "Front end for an elasticsearch cluster",
  "main": "_site/index.html",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "start": "grunt server",
    "test": "grunt jasmine",
    "proxy": "node proxy/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mobz/elasticsearch-head.git"
  },
  "author": "",
  "license": "Apache2",
  "gitHead": "0c2ac0b5723b493e4454baa7398f386ecb829412",
  "readmeFilename": "README.textile",
  "devDependencies": {
    "grunt": "1.0.1",
    "grunt-contrib-concat": "1.0.1",
    "grunt-contrib-watch": "1.0.0",
    "grunt-contrib-connect": "1.0.2",
    "grunt-contrib-copy": "1.0.0",
    "grunt-contrib-clean": "1.0.0",
    "grunt-contrib-jasmine": "1.0.3",
    "karma": "1.3.0",
    "grunt-karma": "2.0.0",
    "http-proxy": "1.16.x"
  }
}

```