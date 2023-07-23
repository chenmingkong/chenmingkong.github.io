
## 1. 什么是事务

Transaction：一个最小的不可再分的工作单元；通常一个事务对应一个完整的业务(例如银行账户转账业务，该业务就是一个最小的工作单元)

- 原子性：一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。

- 一致性：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。

- 隔离性：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。

- 持久性：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。



## 2. mysql事务

在 MySQL只有部分引擎支持事务， 例如 Innodb 数据库引擎的数据库或表才支持事务，查询当前运行的所有事务：

```
select * from information_schema.innodb_trx
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210301220759911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

> information_schema这张数据表保存了MySQL服务器所有数据库的信息。如数据库名，数据库的表，表栏的数据类型与访问权限等。再简单点，这台MySQL服务器上，到底有哪些数据库、各个数据库有哪些表，每张表的字段类型是什么，各个数据库要什么权限才能访问，等等信息都保存在information_schema表里面。

MYSQL 事务处理主要有两种方法：

1、用 BEGIN, ROLLBACK, COMMIT来实现

- BEGIN 开始一个事务
- ROLLBACK 事务回滚
- COMMIT 事务确认

2、直接用 SET 来改变 MySQL 的自动提交模式:

- SET AUTOCOMMIT=0 禁止自动提交
- SET AUTOCOMMIT=1 开启自动提交

```
 SHOW VARIABLES LIKE '%AUTOCOMMIT%';
```

## 3. mysql锁

### 3.2 粒度锁

### （1）全局锁

全局锁就是对整个数据库实例加锁。MySQL提供了一个加全局读锁的方法，命令是Flush tables with read lock。当需要让整个库处于只读状态的时候，可以使用这个命令，之后其他线程的以下语句会被阻塞：数据更新语句（数据的增删改）、数据定义语句（包括建表、修改表结构等）和更新类事务的提交语句。

全局锁的典型使用场景是，做全库逻辑备份。

### （2）表锁

开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高，并发度最低。

这些存储引擎通过总是一次性同时获取所有需要的锁以及总是按相同的顺序获取表锁来避免死锁。

### （3）行锁

> MyISAM 和 MEMORY 存储引擎采用的是表级锁（table-level locking）

> BDB 存储引擎采用的是页面锁（page-level locking），但也支持表级锁

> InnoDB 存储引擎既支持行级锁（row-level locking），也支持表级锁，但默认情况下是采用行级锁。


> 一句话：MySQL的行锁是在引擎层由各个引擎自己实现的。但不是所有的引擎都支持行锁，比如MyISAM引擎就不支持行锁，行级锁并不是直接锁记录，而是锁索引

InnoDB 实现了以下两种类型的行锁：

- 共享锁（S）：允许一个事务去读一行，阻止其他事务获得相同数据集的排他锁。 
- 排他锁（X）：允许获得排他锁的事务更新数据，阻止其他事务取得相同数据集的共享读锁和排他写锁。


获取行锁争用情况

> 历史出现的锁的问题，lock wait timeout exceeded; try restarting transaction

> 原因：事务的默认等待时长是50秒，由于出现锁，导致执行事务超时

如何解决？

我们可以用下面三张表来查原因：

- innodb_trx 当前运行的所有事务
- innodb_locks 当前出现的锁
- innodb_lock_waits 锁等待的对应关系

```
SELECT * FROM information_schema.innodb_trx;
SELECT * FROM information_schema.innodb_locks;
SELECT * FROM information_schema.innodb_lock_waits;
```

或者用一个视图

```
SELECT * FROM sys.innodb_lock_waits;
```