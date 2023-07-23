:: 生成静态文件
echo "======begin to npm build======="
call npm run docs:build

:: 进入生成的文件夹
echo "======begin to git push======="
cd docs/.vuepress/dist

:: git变更及推送

git push -f https://github.com/chenmingkong/knowledge-management.git gh-pages

cd ../../..
