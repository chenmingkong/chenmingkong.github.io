查看一个sql的查询过程只需要前面加explain即可

例如

```
EXPLAIN SELECT * FROM t_record WHERE create_time >= '2021-01-01';
```

参数很多，可以慢慢理解：

- id:选择标识符，id从往小执行 

- select_type:表示查询的类型

```
(1) SIMPLE(简单SELECT，不使用UNION或子查询等)
(2) PRIMARY(子查询中最外层查询，查询中若包含任何复杂的子部分，最外层的select被标记为PRIMARY)
(3) UNION(UNION中的第二个或后面的SELECT语句)
(4) DEPENDENT UNION(UNION中的第二个或后面的SELECT语句，取决于外面的查询)
(5) UNION RESULT(UNION的结果，union语句中第二个select开始后面所有select)
(6) SUBQUERY(子查询中的第一个SELECT，结果不依赖于外部查询)
(7) DEPENDENT SUBQUERY(子查询中的第一个SELECT，依赖于外部查询)
(8) DERIVED(派生表的SELECT, FROM子句的子查询)
(9) UNCACHEABLE SUBQUERY(一个子查询的结果不能被缓存，必须重新评估外链接的第一行)
```

- table:输出结果集的表

- partitions:匹配的分区

- type:表示表的连接类型

```
ALL、index、range、 ref、eq_ref、const、system、NULL（从左到右，性能从差到好）
```

*特别注意ALL，ALL的话全表查询，数据量大的时候效率很低很低。。。*

- possible_keys:表示查询时，可能使用的索引

- key:表示实际使用的索引

- key_len:索引字段的长度

*key_len是根据表定义计算而得，不损失精确性的情况下，长度越短越好*

- ref:列与索引的比较

- rows:扫描出的行数(估算的行数)

- filtered:按表条件过滤的行百分比

- Extra:执行情况的描述和说明