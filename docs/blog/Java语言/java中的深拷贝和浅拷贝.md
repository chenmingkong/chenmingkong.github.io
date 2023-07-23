## 1、前言 

先来猜猜多少岁

假如有一个类`学生`

```java
package copy;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    private String name;
    private int age;
}
```

则以下代码执行结果是什么呢？tony和tom会多少岁呢？

```java
package copy;

import org.junit.Test;

public class StudentTest {
    @Test
    public void testStudentAge(){
        Student tony = new Student("tony", 10);
        Student tom = tony;

        tony.setAge(11);
        tom.setAge(12);

        System.out.println(tony.getAge());
        System.out.println(tom.getAge());
        System.out.println(tony == tom);
    }
}
```

答案是：

```
12
12
true
```

这里tom其实只是tony的引用，他两都是修改的同一对象



## 2、浅拷贝和深拷贝

上面示例为浅拷贝


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200506235000629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)