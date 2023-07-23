索引就和书的目录一样，通过查看目录能够快速找到要查找内容，**对于一个数据量较大的数据表来说，千万不要全表查询，一定要包含索引**；


### 索引失效的场景

其实加索引并不难，但是再表关联等的时候会出现索引失效的场景，可通过`EXPLAIN`查看执行过程，在增加了索引的情况下，`type`为`ALL`的时候则索引失效。

这里简单写下此次优化过程中索引失效的一些场景：

对于一构建记录表，包含version

```
DROP TABLE IF EXISTS `t_record_info` ;

CREATE TABLE `t_record_info` (
  `name` VARCHAR(64) NOT NULL,
  `type` INT(2) NOT NULL,
  `version` VARCHAR(64) NOT NULL,
  `create_time` DATETIME NOT NULL,
  KEY `idx_create_time` (`create_time`),
  KEY `idx_version` (`version`)
);

INSERT INTO `t_record_info` VALUE ("a",0,"version1",'2020-12-01');
INSERT INTO `t_record_info` VALUE ("b",1,"version2",'2021-01-01');
INSERT INTO `t_record_info` VALUE ("b",0,"version1",'2021-02-01');
```

对于一version表

```
DROP TABLE IF EXISTS `t_version`;

CREATE TABLE `t_version` (
  `version_name` VARCHAR(64) NOT NULL,
  `depart` VARCHAR(64) NOT NULL,
  KEY `idx_version_name` (`version_name`),
  KEY `depart` (`depart`)
);

INSERT INTO `t_version` VALUE ("version1",'d1');
INSERT INTO `t_version` VALUE ("version2",'d1');
INSERT INTO `t_version` VALUE ("version3",'d2');
INSERT INTO `t_version` VALUE ("version4",'d2');
```

#### （1） 不等于，部分like（开头%开始）

尽量避免where的时候使用<> 或者 !=操作，因为mysql支持<, <=, > ,=, BETWEEN, IN等

- 失效的场景

```
EXPLAIN SELECT * FROM t_record_info WHERE VERSION LIKE '%d%'
```

- OK的场景

```
EXPLAIN SELECT * FROM t_record_info WHERE VERSION LIKE 'd%'
```

#### （2）IN子查询

当version进行in子查询的时候

```
EXPLAIN SELECT * FROM t_record_info 
WHERE VERSION IN (SELECT version_name FROM t_version WHERE depart = 'd1');
```

会发现`t_record_info`的version索引会失效，type会成`ALL`

##### 解决策略

（1）使用exit代码

```
代码省略
```

（2）使用关联表

```
EXPLAIN SELECT * FROM t_record_info AS a 
LEFT JOIN t_version AS b
ON a.`version` = b.`version_name`
WHERE b.`depart` = 'd1';
```

（3）使用业务代码独立（采用）

查询两次，第二次的时候直接使用in的

```
SELECT version_name FROM t_version WHERE depart = 'd1'
```

业务代码先计算出version列表（也可以使用临时表进行存储），然后再查询

```
SELECT * FROM t_record_info WHERE VERSION IN ('version1','version2')
```


### 一些建议

（1）最左匹配原则

尽量把最常用的字段放在最前面

（2）尽量把离散值较高的字段往前放

（3） 查询时，有的列是非等值条件，有点是等值条件，则等值条件字段放在前面