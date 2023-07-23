## 1. ubuntu 安装mysql

```
apt-get install mysql-server
```

## 2. 配置可以远端登录和操作

#### （1）设置监听

```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf 
```

注释掉bind-address = 127.0.0.1， 即

```
# bind-address = 127.0.0.1
```
重启服务 

```
sudo /etc/init.d/mysql restart
```

#### （2）修改用户表

登录数据库 

```
mysql -u root -p 
```
选择数据库 

```
use mysql; 
```

修改root用户可以在所有机器登录（root只是举例，%表示所有机器） 

```
update user set host = '%' where user = 'root'; 
```

重启服务 

```
sudo /etc/init.d/mysql restart
```

## 3.设置慢查询

```
SHOW VARIABLES;
SHOW VARIABLES LIKE 'slow_query%';
SET GLOBAL slow_query_log_file= '/var/log/mysql/slow_query.log';
SET GLOBAL slow_query_log=ON;
SET GLOBAL long_query_time=0.00;
```

解决慢查询时，not found (Errcode: 13 - Permission denied)的问题

（1）`slow_query_log_file`设置为`/var/log/mysql/slow_query.log`，不要设置其他路径目录；


（2）关闭selinux(未测试)
```
vim  /etc/selinux/config
```
将SELINUX项改成：SELINUX=disabled

重启系统。



## 4. 常用命令 


##### 重启

```
/etc/init.d/mysql restart
```

##### 登录

```
mysql -uroot -p12345678 -h192.168.1.103
```

##### 查看所有数据库

```
show databases;
```

##### 进入某个数据库

```
use 库名;
```

##### 建库

```
create database 库名; 
```

##### 显示库中的数据表

```
show tables; 
```

##### 显示数据表的结构

```
describe 表名; 
```

##### 显示表中的记录： 

```
select * from 表名
```
