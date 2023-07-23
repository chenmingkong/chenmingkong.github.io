## 1. 参考文档

https://zhuanlan.zhihu.com/p/52085283


## 2. 安装

```bash
wget http://downloads.metabase.com/v0.30.0/metabase.jar
java -jar metabase.jar
```

使用docker进行安装

```bash
docker run -d -p 3000:3000 -v /mnt/docker_data/metabase:/tmp -e "MB_DB_FILE=/tmp/metabase.db" --name metabase metabase/metabase
```

## 3. 使用

默认打开的是3000端口

```
http://47.105.197.196:3000
```