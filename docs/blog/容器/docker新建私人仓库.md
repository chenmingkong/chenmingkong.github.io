
## 概念

Docker 包括三个基本概念

    镜像（Image）
    容器（Container）
    仓库（Repository）

- 镜像
镜像是只读的。
镜像可以想象成操作系统的安装镜像（例如CentOS6.8.ISO）。

- 容器
容器是从镜像创建的运行实例。它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。
可以理解成 我们通过镜像安装操作系统，我们可以开机，关机，等操作。

- 仓库
仓库是集中存放镜像文件的场所。
有时候会把仓库和仓库注册服务器（Registry）混为一谈，并不严格区分。
实际上，仓库注册服务器上往往存放着多个仓库。
每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。
一个仓库中可能有centos ubuntu fedora等镜像，然后ubuntu可以有12 13 15 16等版本则使用标签标明。
仓库分为公开仓库（Public）和私有仓库（Private）两种形式。

## 创建私有仓库
```
docker run -d -p 5000:5000 --name myregistry -v /myregistry:/var/lib/registry registry
```
docker私有仓库服务器，默认是基于https传输的，所以我们需要在客户端192.168.1.160做相关设置，不使用https传输
```
vi /etc/docker/daemon.json
```

添加
```
{ "insecure-registries":["192.168.1.104:5000"]}
```

验证
```
http://192.168.1.104:5000/v2/
```

打标签
```
docker tag registry 192.168.1.104:5000/registry
```
上传到私有仓库
```
docker push 192.168.1.104:5000/registry
```

## 界面化私有仓库

```
docker run -d -e ENV_DOCKER_REGISTRY_HOST=47.105.197.196 -e ENV_DOCKER_REGISTRY_PORT=5000 -p 8088:80 konradkleine/docker-registry-frontend:v2
```
