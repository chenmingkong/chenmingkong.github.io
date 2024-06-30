module.exports = {
    title: '知识管理',
    head: [
        ['link', { rel: 'icon', href: '/cainiao404.png' }]
    ],
    description: '我的日常记录',
    themeConfig: {
        logo: '/cainiao404.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: '技术博客', link: '/blog/'},
            {text: '样例文档', link: '/demo/'},
            {text: '读书分享', link: '/read/'},
            {
                text: '更多规划',
                ariaLabel: '更多规划',
                items: [
                    {
                        text: '规划模板',
                        link: '/plan/'
                    },
                    {
                        text: '年度计划',
                        items: [
                            {
                                text: '2023年进展',
                                link: '/plan/2023/progress.html'
                            }
                        ]
                    }
                ]
            },
        ],
        sidebar: {
            sidebarDepth: 0,
            '/blog/': [
                {
                    title: 'AI',
                    sidebarDepth: 1,
                    children: [
                        ['AI/AI使用心得', 'AI使用心得'],
                        ['AI/AI常用网址', 'AI常用网址'],
                        ['AI/promptFlow入门', 'promptFlow入门'],
                    ]
                },
                {
                    title: 'C语言',
                    sidebarDepth: 1,
                    children: [
                        ['C语言/windows上安装gcc和make', 'windows上安装gcc和make'],
                        ['C语言/make&cmake的区分', 'make&cmake的区分'],
                        ['C语言/c语言编译过程解析', 'c语言编译过程解析'],
                        ['C语言/clion+cmake在windows上进行编码', 'clion+cmake在windows上进行编码'],
                    ]
                },
                {
                    title: 'Go语言',
                    sidebarDepth: 1,
                    children: [
                        ['Go语言/Windows上安装go语言开发包和简答使用', 'Windows上安装go语言开发包和简答使用'],
                    ]
                },
                {
                    title: 'Java语言',
                    sidebarDepth: 1,
                    children: [
                        ['Java语言/java中log4j的使用', 'java中log4j的使用'],
                        ['Java语言/java中的builder实现详解', 'java中的builder实现详解'],
                        ['Java语言/java中的深拷贝和浅拷贝', 'java中的深拷贝和浅拷贝'],
                        ['Java语言/二叉树', '二叉树'],
                        ['Java语言/函数式编程', '函数式编程'],
                        ['Java语言/常用类型之间的转换', '常用类型之间的转换'],
                    ]
                },
                {
                    title: 'Python语言',
                    sidebarDepth: 1,
                    children: [
                        ['Python语言/Flask学习', 'Flask学习'],
                        ['Python语言/web框架', 'web框架'],
                    ]
                },
                {
                    title: '前端',
                    sidebarDepth: 1,
                    children: [
                        ['前端/npm和package_json', 'npm和package_json'],
                        ['前端/vue', 'vue'],
                    ]
                },
                {
                    title: '容器',
                    sidebarDepth: 1,
                    children: [
                        ['容器/docker新建私人仓库', 'docker新建私人仓库'],
                        ['容器/kubekey', 'kubekey'],
                        ['容器/kubekey安装（all-in one）模式', 'kubekey安装（all-in one）模式'],
                        ['容器/rancher', 'rancher'],
                        ['容器/K8s资源定义', 'K8s资源定义'],
                    ]
                },
                {
                    title: '数据库',
                    sidebarDepth: 1,
                    children: [
                        ['数据库/mysq基础1-安装、常用命令、慢查询设置', 'mysq基础1-安装、常用命令、慢查询设置'],
                        ['数据库/mysq基础2-经典运维工具percona-toolkit', 'mysq基础2-经典运维工具percona-toolkit'],
                        ['数据库/mysq基础3-数据表分区', 'mysq基础3-数据表分区'],
                        ['数据库/mysql基础4-mysql执行过程查看', 'mysql基础4-mysql执行过程查看'],
                        ['数据库/mysql基础5-索引及慢查询优化', 'mysql基础5-索引及慢查询优化'],
                        ['数据库/mysql基础6-范式和反范式', 'mysql基础6-范式和反范式'],
                        ['数据库/mysql基础7-innodb存储引擎介绍', 'mysql基础7-innodb存储引擎介绍'],
                        ['数据库/mysql基础8-xtrbackup数据备份工具', 'mysql基础8-xtrbackup数据备份工具'],
                        ['数据库/mysql基础9-事务和锁', 'mysql基础9-事务和锁'],
                        ['数据库/nysql高可用方案', 'nysql高可用方案'],
                        ['数据库/一次痛苦的数据库优化', '一次痛苦的数据库优化'],
                    ]
                },
                {
                    title: '常见工具',
                    sidebarDepth: 1,
                    children: [
                        ['工具/Ambassador系列', 'Ambassador系列'],
                        ['工具/elasticsearch安装', 'elasticsearch安装'],
                        ['工具/elasticsearch入门', 'elasticsearch入门'],
                        ['工具/Metabase使用教程', 'Metabase使用教程'],
                        ['工具/nginx安装', 'nginx安装'],
                        ['工具/picGo+gitee实现图床', 'picGo+gitee实现图床'],
                        ['工具/PicGo + GitHub搭建图床', 'PicGo + GitHub搭建图床'],
                        ['工具/使用rsync和inotify-tools实现服务器文件自动备份', '使用rsync和inotify-tools实现服务器文件自动备份'],
                    ]
                },
            ],
            '/demo/': [
                {
                    title: '设计',
                    sidebarDepth: 1,
                    children: [
                        ['设计/需求设计文档', '需求设计文档'],
                        ['设计/软件设计（4+1视图）文档', '软件设计（4+1视图）文档'],
                        ['设计/软件设计（简单）文档', '软件设计（简单）文档'],
                    ]
                },

            ],
            '/read/': [
                {
                    title: '读书分享',
                    sidebarDepth: 1,
                    children: [
                        ['', '我的书单'],
                        ['天朝的崩溃', '天朝的崩溃'],
                        ['西方现代思想讲义', '西方现代思想讲义'],
                    ]
                }
            ],
        },

        lastUpdated: 'Last Updated', // string | boolean
        repo: 'chenmingkong/chenmingkong.github.io',
        repoLabel: '查看源码',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'

    }
}
