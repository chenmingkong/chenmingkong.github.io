[TOC]

在日常使用文件服务器时，由于可能宕机等原因，需要有一个实时备份的服务器实现高可用本文使用rsync + inotify-tools实现文件在不同服务器
的自动备份。

参考文档：
https://blog.51cto.com/ljohn/2047156

特别感谢！！！


## 1. 安装所需工具

#### 1.1 rsync 安装

```
apt-get install rsync
```

#### 1.2 xinetd 安装

即extended internet daemon，是新一代的网络守护进程服务程序，又叫超级Internet服务器，常用来管理多种轻量级Internet服务。Xinetd提供类似于inetd+tcp_wrapper的功能，但是更加强大和安全。

```
apt-get install xinetd

#启动
service xinetd start
#停止
service xinetd stop
#重启
service xinetd restart
```

配置文件是`/etc/xinetd.conf`，但是它只包括默认值，并包含/etc/xinetd.d目录中的配置文件

#### 1.3 inotify-tools 安装

源码路径

https://github.com/inotify-tools/inotify-tools/wiki

```
apt-get install inotify-tools
```

## 2. 准备服务器

准备两台服务器：

备份服务器：192.168.1.103

主服务器：192.168.1.107

即实时自动同步主服务器文件到备份服务器

## 3. 备份服务器配置

#### 3.1 xinetd的启动rsync配置

新建配置文件

```
# vim /etc/xinetd.d/rsync
service rsync
{
        disable = no            #修改为no
        flags           = IPv6
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/bin/rsync
        server_args     = --daemon
        log_on_failure  += USERID
}
```

启动xinetd

```
/etc/init.d/xinetd start 
```

#### 3.2 创建rsync配置文件

新建rsync配置文件

```
vim /etc/rsyncd.conf
```

```
log file = /var/log/rsyncd.log
pid file = /var/run/rsyncd.pid
lock file = /var/run/rsync.lock
secrets file = /etc/rsync.pass
motd file = /etc/rsyncd.Motd
uid = root
gid = root
port =873
use chroot = no
read only = no
list = no
timeout = 600
auth users = root
hosts allow = 192.168.1.0/24
[app_rsync_client]
path = /app/rsync_client
comment = app_rsync_client
```

参数说明：

| rsyncd.conf参数     | 参数说明                                                     |
| ------------------- | ------------------------------------------------------------ |
| uid=rsync           | rsync使用的用户。                                            |
| gid=rsync           | rsync使用的用户组（用户所在的组）                            |
| use chroot=no       | 如果为true，daemon会在客户端传输文件前“chroot to the path”。这是一种安全配置，因为我们大多数都在内网，所以不配也没关系 |
| max connections=200 | 设置最大连接数，默认0，意思无限制，负值为关闭这个模块        |
| timeout=400         | 默认为0，表示no timeout，建议300-600（5-10分钟）             |
| pid file            | rsync daemon启动后将其进程pid写入此文件。如果这个文件存在，rsync不会覆盖该文件，而是会终止 |
| lock file           | 指定lock文件用来支持“max connections”参数，使得总连接数不会超过限制 |
| log file            | 不设或者设置错误，rsync会使用rsyslog输出相关日志信息         |
| ignore errors       | 忽略I/O错误                                                  |
| read only=false     | 指定客户端是否可以上传文件，默认对所有模块为true             |
| list=false          | 是否允许客户端可以查看可用模块列表，默认为可以               |
| hosts allow         | 指定可以联系的客户端主机名或和ip地址或地址段，默认情况没有此参数，即都可以连接 |
| hosts deny          | 指定不可以联系的客户端主机名或ip地址或地址段，默认情况没有此参数，即都可以连接 |
| auth users          | 指定以空格或逗号分隔的用户可以使用哪些模块，用户不需要在本地系统中存在。默认为所有用户无密码访问 |
| secrets file        | 指定用户名和密码存放的文件，格式；用户名；密码，密码不超过8位 |
| [backup]            | 这里就是模块名称，需用中括号扩起来，起名称没有特殊要求，但最好是有意义的名称，便于以后维护 |
| path                | 这个模块中，daemon使用的文件系统或目录，目录的权限要注意和配置文件中的权限一致，否则会遇到读写的问题 |

新建密码文件

```
vim /etc/rsync.pass
```

```
root:12345678
```

> 格式 用户名:密码    可以设置多个，每行一个用户名:密码

#### 3.3 赋权重启

```
chmod 600 /etc/rsyncd.conf 
chmod 600 /etc/rsync.pass 
service xinetd restart
```

## 4. 主服务器配置

#### 4.1 xinetd的启动rsync配置

新建配置文件

```
# vim /etc/xinetd.d/rsync
service rsync
{
        disable = no            #修改为no
        flags           = IPv6
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/bin/rsync
        server_args     = --daemon
        log_on_failure  += USERID
}
```

启动xinetd

```
/etc/init.d/xinetd start 
```

#### 4.2 新建密码文件

```
# vim /etc/passwd.txt
123456

# chmod 600 /etc/passwd.txt
```

> 主服务密码不需要配置文件和备份服务器rsync需要的同步文件格式不一样，需要特别注意！

#### 4.3 测试

在`/app/rsync_server/`目录下新建一文件 

```
mkdir -pv /app/rsync_server && touch /app/rsync_server/test.txt
```

执行同步命令

```
rsync -avH --port=873 --progress --delete /app/rsync_server/ root@192.168.1.103::app_rsync_client --password-file=/etc/passwd.txt
```

> 在主服务器rsync文件到备份服务器的时候，如果失败，日志在备份服务器/var/log/rsyncd.log，可查看相关日志进行问题定位

## 5. 使用inotify-tools实现自动同步

#### 5.1 主服务器配置inotify-tools

在 `/etc/sysctl.conf`后添加

```
fs.inotify.max_queued_events = 99999999
fs.inotify.max_user_watches = 99999999
fs.inotify.max_user_instances = 65535
```
且立即生效

```
sysctl  -p
```

> max_queued_events：inotify队列最大长度，如果值太小，会出现"** Event Queue Overflow **"错误，导致监控文件不准确

> max_user_watches：要同步的文件包含多少目录，可以用：find /app/rsync_server/ -type d | wc -l 统计，必须保证max_user_watches值大于统计结果（这里/app/rsync_server/为同步文件目录）

> max_user_instances：每个用户创建inotify实例最大值

#### 5.2 新建实时同步脚本

/usr/local/inotify/rsync.sh

```
#!/bin/bash
src_dir="/app/rsync_server/"
dst_dir="app_rsync_client"
exclude_dir="/usr/local/inotify/exclude.list"
rsync_user="root"
rsync_passwd="/etc/passwd.txt"
dst_ip="192.168.1.103"
rsync_command(){
echo rsync -avH --port=873 --progress --delete --exclude-from=$exclude_dir $src_dir $rsync_user@$ip::$dst_dir --password-file=$rsync_passwd
rsync -avH --port=873 --progress --delete --exclude-from=$exclude_dir $src_dir $rsync_user@$ip::$dst_dir --password-file=$rsync_passwd
}
for ip in $dst_ip;do
     rsync_command
done
    /usr/bin/inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%T %w%f%e' -e close_write,modify,delete,create,attrib,move $src_dir \
| while read file;do
   for ip in $dst_ip;do
       rsync_command
       echo "${file} was rsynced" >> /tmp/rsync.log 2>&1
   done
 done
```

执行相关脚本即可

```
chmod +x /usr/local/inotify/rsync.sh
touch /usr/local/inotify/exclude.list
bash /usr/local/inotify/rsync.sh
```