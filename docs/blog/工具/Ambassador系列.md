https://blog.csdn.net/twingao/article/details/103791718

什么是AmbassadorAmbassador？

> 是一个基于envoy proxy构建的，kubernetes原生的开源微服务网关。Ambassador在构建之初就致力于支持多个独立的团队，这些团队需要为最终用户快速发布、监控和更新服务。Ambassador还可以用来处理Kubernetes ingress和负载均衡的能力。

Ambassador架构

![img](https://upload-images.jianshu.io/upload_images/14871146-0dcae8cb18297b27.png?imageMogr2/auto-orient/strip|imageView2/2)

Ambassador也是具有控制平面和数据平面的。数据平面自然是老伙计envoy，Ambassador的控制平面负责监听k8中的service资源的变化，并将配置下发envoy，实际的流量转发通过envoy来完成


鉴权可能会用的参考：

https://blog.csdn.net/twingao/article/details/103791718

https://cloud.tencent.com/developer/article/1632465

https://www.cnblogs.com/cuishuai/p/9806007.html

https://www.jianshu.com/p/d00af1d82300

官方指导：

https://www.getambassador.io/docs/latest/tutorials/getting-started/