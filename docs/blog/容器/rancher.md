## 安装
### 1.6

```bash
sudo docker run -d --restart=unless-stopped -p 8080:8080 rancher/server
```

### 2.0

```
#杀掉890端口占用
fuser -k -n tcp 80
安装
docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher
```

## 指导文档

docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher