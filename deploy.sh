#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo "======begin to build======="
# npm run docs:build
yarn add -D vuepress
yarn docs:build

# 进入生成的文件夹
echo "======begin to push======="

