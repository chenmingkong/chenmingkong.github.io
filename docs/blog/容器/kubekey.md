https://kubesphere.com.cn/docs/quick-start/all-in-one-on-linux/

## 1. 安装KubeKey

#### （1）先执行以下命令以确保您从正确的区域下载 KubeKey。

```
export KKZONE=cn
```

#### （2）执行以下命令下载 KubeKey。

```bash
cd /mnt/windows_share/kubekey
curl -sfL https://get-kk.kubesphere.io | VERSION=v1.0.1 sh -
```

#### （3）然后，使kk成为全局可执行文件

```
cp ./kk /usr/local/bin 
```

## 2. 使用kk安装kubesphere和kubernetes

#### 安装依赖tools

```
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common conntrack
```

#### （1）创建一个配置文件模版

```
kk create config --with-kubernetes v1.18.6 --with-kubesphere v3.0.0 -f ./config-kubesphere.yaml
```

#### （2）修改配置文件，添加上节点信息（节点名称，ip等）

```
apiVersion: kubekey.kubesphere.io/v1alpha1
kind: Cluster
metadata:
  name: sample
spec:
  hosts:
  - {name: master, address: 192.168.1.108, internalAddress: 192.168.1.108, user: root, password: 12345678}
  - {name: slave, address: 192.168.1.110, internalAddress: 192.168.1.110, user: root, password: 12345678}
  roleGroups:
    etcd:
    - master
    master: 
    - master
    worker:
    - master
    - slave
  controlPlaneEndpoint:
    domain: lb.kubesphere.local
    address: ""
    port: "6443"
  kubernetes:
    version: v1.18.6
    imageRepo: kubesphere
    clusterName: cluster.local
  network:
    plugin: calico
    kubePodsCIDR: 10.233.64.0/18
    kubeServiceCIDR: 10.233.0.0/18
  registry:
    registryMirrors: []
    insecureRegistries: []
  addons: []


---
apiVersion: installer.kubesphere.io/v1alpha1
kind: ClusterConfiguration
metadata:
  name: ks-installer
  namespace: kubesphere-system
  labels:
    version: v3.0.0
spec:
  local_registry: ""
  persistence:
    storageClass: ""
  authentication:
    jwtSecret: ""
  etcd:
    monitoring: true
    endpointIps: localhost
    port: 2379
    tlsEnable: true
  common:
    es:
      elasticsearchDataVolumeSize: 20Gi
      elasticsearchMasterVolumeSize: 4Gi
      elkPrefix: logstash
      logMaxAge: 7
    mysqlVolumeSize: 20Gi
    minioVolumeSize: 20Gi
    etcdVolumeSize: 20Gi
    openldapVolumeSize: 2Gi
    redisVolumSize: 2Gi
  console:
    enableMultiLogin: false  # enable/disable multi login
    port: 30880
  alerting:
    enabled: false
  auditing:
    enabled: false
  devops:
    enabled: false
    jenkinsMemoryLim: 2Gi
    jenkinsMemoryReq: 1500Mi
    jenkinsVolumeSize: 8Gi
    jenkinsJavaOpts_Xms: 512m
    jenkinsJavaOpts_Xmx: 512m
    jenkinsJavaOpts_MaxRAM: 2g
  events:
    enabled: false
    ruler:
      enabled: true
      replicas: 2
  logging:
    enabled: false
    logsidecarReplicas: 2
  metrics_server:
    enabled: true
  monitoring:
    prometheusMemoryRequest: 400Mi
    prometheusVolumeSize: 20Gi
  multicluster:
    clusterRole: none  # host | member | none
  networkpolicy:
    enabled: false
  notification:
    enabled: false
  openpitrix:
    enabled: false
  servicemesh:
    enabled: false
```

#### （3）执行及安装kubernetes v1.18.6和kubesphere v3.0.0

```
kk create cluster -f ./config-kubesphere.yaml
```

## 3. 一些错误


#### (1)错误1

```
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR ExternalEtcdVersion]: couldn't load external etcd's certificate and key pair /etc/ssl/etcd/ssl/node-slave.pem, /etc/ssl/etcd/ssl/node-slave-key.pem: open /etc/ssl/etcd/ssl/node-slave.pem: no such file or directory
	[ERROR ExternalEtcdClientCertificates]: /etc/ssl/etcd/ssl/node-slave.pem doesn't exist
	[ERROR ExternalEtcdClientCertificates]: /etc/ssl/etcd/ssl/node-slave-key.pem doesn't exist
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher: Process exited with status 1  node=192.168.1.108
WARN[13:26:20 CST] Task failed ...                              
WARN[13:26:20 CST] error: interrupted by error
```

在master节点执行
```
 sudo -E /bin/sh -c "/usr/local/bin/kubeadm init --config=/etc/kubernetes/kubeadm-config.yaml"
 ls -lh /etc/ssl/etcd/ssl/
 ```
 
 原来在/etc/ssl/etcd/ssl/中真不存在node-node3-key.pem、node-node3.pem，真么办？原来是我选择的是member模式。

> 解决方案

```
cp /etc/ssl/etcd/ssl/member-slave-key.pem /etc/ssl/etcd/ssl/node-slave-key.pem
cp /etc/ssl/etcd/ssl/member-slave.pem /etc/ssl/etcd/ssl/node-slave.pem
```


#### (2) 错误2

```
error: the server doesn't have a resource type "secret": Process exited with status 1 
Error: Failed to get cluster status: Failed to patch kubeadm secret: Failed to exec command: sudo -E /bin/sh -c "/usr/local/bin/kubectl patch -n kube-system secret kubeadm-certs -p '{\"data\": {\"external-etcd-ca.crt\": \"\"}}'" 
error: the server doesn't have a resource type "secret": Process exited with status 1
```

证书时间过期了，好像超过两个小时就有问题了，所以我直接删除直接重新搞了下就好了

```
kk dalete cluster -f ./config-kubesphere.yaml
```

#### (3) 错误3
```
[ERROR FileExisting-conntrack]: conntrack not found in system path
```

缺少依赖(所有节点都安装下)
```
apt-get install conntrack
```

查看kubesphere状态

kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f

kubectl get pod -A

重启

kubectl -n kubesphere-system rollout restart deploy/ks-installer

查看pod日志

kubectl logs ks-apiserver-5cf84f7895-vz8tx -n kubesphere-system

https://blog.csdn.net/networken/article/details/109010032

https://blog.csdn.net/iteye_14723/article/details/107560279?spm=1001.2014.3001.5501