(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{316:function(e,t,s){"use strict";s.r(t);var n=s(13),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"percona-toolkit详解和安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#percona-toolkit详解和安装"}},[e._v("#")]),e._v(" percona-toolkit详解和安装")]),e._v(" "),t("p",[e._v("这是一套由Percona所开发、运用于MySQL的一套命令行工具集，该工具集里包含了数据库主从一致性检查、查找重复索引、服务器信息汇总、分析日志等很多有用功能。")]),e._v(" "),t("p",[e._v("安装待补充。。。")]),e._v(" "),t("h2",{attrs:{id:"pt-query-digest详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pt-query-digest详解"}},[e._v("#")]),e._v(" pt-query-digest详解")]),e._v(" "),t("p",[e._v("pt-query-digest是percona-toolkit中用于分析mysql慢查询的一个工具，它可以分析binlog、General log、slowlog，也可以通过SHOWPROCESSLIST或者通过tcpdump抓取的MySQL协议数据来进行分析。可以把分析结果输出到文件中，分析过程是先对查询语句的条件进行参数化，然后对参数化以后的查询进行分组统计，统计出各查询的执行时间、次数、占比等，可以借助分析结果找出问题进行优化。")]),e._v(" "),t("p",[e._v("参数详解")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pt-query-digest [OPTIONS] [FILES] [DSN]\n--create-review-table  当使用--review参数把分析结果输出到表中时，如果没有表就自动创建。\n--create-history-table  当使用--history参数把分析结果输出到表中时，如果没有表就自动创建。\n--filter  对输入的慢查询按指定的字符串进行匹配过滤后再进行分析\n--limit    限制输出结果百分比或数量，默认值是20,即将最慢的20条语句输出，如果是50%则按总响应时间占比从大到小排序，输出到总和达到50%位置截止。\n--host  mysql服务器地址\n--user  mysql用户名\n--password  mysql用户密码\n--history 将分析结果保存到表中，分析结果比较详细，下次再使用--history时，如果存在相同的语句，且查询所在的时间区间和历史表中的不同，则会记录到数据表中，可以通过查询同一CHECKSUM来比较某类型查询的历史变化。\n--review 将分析结果保存到表中，这个分析只是对查询条件进行参数化，一个类型的查询一条记录，比较简单。当下次使用--review时，如果存在相同的语句分析，就不会记录到数据表中。\n--output 分析结果输出类型，值可以是report(标准分析报告)、slowlog(Mysql slow log)、json、json-anon，一般使用report，以便于阅读。\n--since 从什么时间开始分析，值为字符串，可以是指定的某个”yyyy-mm-dd [hh:mm:ss]”格式的时间点，也可以是简单的一个时间值：s(秒)、h(小时)、m(分钟)、d(天)，如12h就表示从12小时前开始统计。\n--until 截止时间，配合—since可以分析一段时间内的慢查询。\n")])])]),t("p",[e._v("例如")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#!/bin/bash\nDIR="$( cd "$( dirname "$0"  )" && pwd  )"\ncd ${DIR}\n\n#配置Archery数据库的连接地址\narchery_db_host="127.0.0.1"\narchery_db_port=3306\narchery_db_user="root"\narchery_db_password="123456"\narchery_db_database="archery"\n\n#被分析实例的慢日志位置，建议定期清理日志文件，否则会影响分析效率\nslowquery_file="/home/mysql/log_slow.log"\n\n#pt-query-digest可执行文件路径\npt_query_digest="/usr/bin/pt-query-digest"\n\n#被分析实例的连接信息\nhostname="mysql_host:mysql_port" # 需要和Archery实例配置中的内容保持一致，用于筛选，配置错误会导致数据无法展示\n\n#获取上次分析时间，初始化时请删除last_analysis_time_$hostname文件，可分析全部日志数据\nif [[ -s last_analysis_time_${hostname} ]]; then\n    last_analysis_time=`cat last_analysis_time_${hostname}`\nelse\n    last_analysis_time=\'1000-01-01 00:00:00\'\nfi\n\n#收集日志\n#RDS需要增加--no-version-check选项\n${pt_query_digest} \\\n--user=${archery_db_user} --password=${archery_db_password} --port=${archery_db_port} \\\n--review h=${archery_db_host},D=${archery_db_database},t=mysql_slow_query_review  \\\n--history h=${archery_db_host},D=${archery_db_database},t=mysql_slow_query_review_history  \\\n--no-report --limit=100% --charset=utf8 \\\n--since "$last_analysis_time" \\\n--filter="\\$event->{Bytes} = length(\\$event->{arg}) and \\$event->{hostname}=\\"$hostname\\"  and \\$event->{client}=\\$event->{ip} " \\\n${slowquery_file} > /tmp/analysis_slow_query.log\n\nif [[ $? -ne 0 ]]; then\necho "failed"\nelse\necho `date +"%Y-%m-%d %H:%M:%S"`>last_analysis_time_${hostname}\nfi\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);