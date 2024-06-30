## 目的

本文基于vue-press进行编写，用来个人知识管理和一些规划。

vue-press具体参照https://vuepress.vuejs.org/zh/


## 博客展示

https://chenmingkong.github.io

## 发布部署

部署使用actions+pages

- actions文件为`.github/workflows/depoy.yml`，代码提交至master后，自动触发，编译后push到`gh-pages`分支，pages在github中自动关联`gh-pages`分支
