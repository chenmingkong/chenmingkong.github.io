## 1. 索引和分区

分区和索引作为一个常见的数据库效率提高手段。本文基于实际场景进行简单的分析和整理。

> 索引和分区的关系

mysql分区后每个分区成了独立的文件，虽然从逻辑上还是一张表其实已经分成了多张独立的表，由于Innodb数据和索引都是保存在".ibd"文件当中（从INNODB_SYS_INDEXES系统表中也可以得到每个索引都是对应各自的分区(primary key和unique也不例外）），所以分区表的索引也是随着各个分区单独存储。

在INNODB_SYS_INDEXES系统表中:

type代表索引的类型，当我们在分区表中创建索引时其实也是在每个分区中创建索引，每个分区维护各自的索引（其实也就是local index）

```
0:一般的索引(非主键或者唯一)：
1:(GEN_CLUST_INDEX)不存在主键索引的表,会自动生成一个6个字节的标示值
2:unique索引
3:primary索引;
```

> 当具有索引的表进行分区的时候

对于一般的索引(非主键或者唯一)没什么问题，由于索引树中只保留了索引key和主键key(如果存在主键则是主键的key否则就是系统自动生成的6个的key)不受分区的影响；但是如果表中存在主键就不一样了，虽然在每个分区文件中都存在主键索引但是主键索引需要保证全局的唯一性就是所有分区中的主键的值都必须唯一（唯一键也是一样的道理），**所以在创建分区时如果表中存在主键或者唯一键那么分区列必须包含主键或者唯一键的部分或者全部列**（全部列还好理解，部分列也可以个人猜测是为了各个分区和主键建立关系），由于需要保证全局性又要保证插入数据更新数据到具体的分区所以就需要将分区和主键建立关系,由于通过一般的索引进行查找其它非索引字段需要通过主键如果主键不能保证全局唯一性的话那么就需要去每个分区查找了，这样性能可想而知。

## 2. 案例1（正常分区）

#### 场景描述

> 有一构建记录表，由于数据量较大，每年数据量已经达到300万+，在时间查询中由于特殊原因，还需要关联其他表进行查询，因此查询效率很低，尤其在多条件查询的时候，就算给查询条件增加索引，也会出现查询秒级的情况，因此按照时间进行分区

#### 分区策略

> 每年记录分区一次，没季度记录子分区一次（如果后面数据量更大，考虑按照月份进行子分区的可能性）

#### 表结构

```
DROP TABLE IF EXISTS `t_record`;
CREATE TABLE `t_record` (
  `name` VARCHAR (255) NOT NULL,
  `type` VARCHAR (255) NOT NULL,
  `create_time` DATETIME NOT NULL,
  INDEX idx_create_time(`create_time`)
) ;
```

示例数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110220116504.png)

#### 分区sql

> 分区前

（1） 只有一个.idb文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110220500305.png)

（2）查询

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110220745582.png)

> 分区后

（1）分区sql    

```
ALTER TABLE t_record 
PARTITION BY RANGE(YEAR(create_time))
SUBPARTITION BY HASH(QUARTER(create_time ))
SUBPARTITIONS 4 (
    PARTITION p2019 VALUES LESS THAN (2020),
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN maxvalue
);
```

（2）按照分区分为多个idb了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110222109652.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

```
SELECT 
  partition_name part,
  partition_expression expr,
  partition_description descr,
  table_rows 
FROM
  information_schema.partitions 
WHERE table_schema = SCHEMA() 
  AND table_name = 't_record' ;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110222905811.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

（3）查看执行分区

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110223709736.png)


## 3. 案例2（特殊场景）

当我们对一个有主键（自增id）的记录表按照时间进行分区的时候，面临的问题就比较尴尬，时间不可能作为唯一索引或者主键（比如存储时间或者创建时间，都有可能重复），我们也很少看到将时间作为主键的（作为普通索引进行区间查询还是比较场景），所以的话这种情况就比较头疼

> 这种场景我们可以把id和时间作为一个联合主键

#### 表结构

```
DROP TABLE IF EXISTS `t_record_id` ;

CREATE TABLE `t_record_id` (
  `id` INT (8) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (255) NOT NULL,
  `type` VARCHAR (255) NOT NULL,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`id`, `create_time`)
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110224435651.png)

#### 分区

```
ALTER TABLE t_record_id 
PARTITION BY RANGE(YEAR(create_time))
SUBPARTITION BY HASH(QUARTER(create_time ))
SUBPARTITIONS 4 (
    PARTITION p2019 VALUES LESS THAN (2020),
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN maxvalue
);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110224952947.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

#### 查询效率

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210110224647148.png)

