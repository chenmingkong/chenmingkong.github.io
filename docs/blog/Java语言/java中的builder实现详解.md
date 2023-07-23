我们在构建对象的时候，如果对象属性比较多，我们可以（1）使用一个构造器;（2）一个空的构造器，然后使用setter方法进行设置。使用这些方法时会有冗长的构造函数或者setter方法，有不同参数默认值的构造函数需要多次定义，因此我们可以使用builder来简化代码的简介性。


## 1、场景模拟

假如有一结果api结果返回值的类`Result`，其在代码中频繁被使用，

```java
public class Result<T> {
    private int code;
    private String message;
    private T data;

    public Result(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Result() {
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
```

如果要使用它，一般的方法是：

```java
public class Main {
    public static void main(String[] args) {
        //方法1，使用全量的构造函数
        Result<String> result1 = new Result<>(200, "success", "");

        //方法1，使用空的构造函数加setter函数赋值
        Result<String> result2 = new Result<>();
        result2.setCode(200);
        result2.setMessage("success");
        result2.setData("");
    }
}
```

这两种使用方法的弊端有：

（1）方法一：当只需要部分参数的时候需要再定义个构造函数（比如失败的情况只需要`code`和`message`，结果肯定是空，因此不需要data），且一旦参数较多，则构造函数冗长；

（2）方法二：setter冗长；

**因此我们需要builder来解决这个问题**

## 2、什么是Builder（建造者模式）

将一个复杂的对象的构建与它的表示分离，同样的构建过程可以创建不同的表示。具体可参照

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200505232607129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tvbmdtaW5neGlhb3hpYW8=,size_16,color_FFFFFF,t_70)

后续补充

## 3、java实现

> IDEA可安装innerBuilder插件自动生成

Result增加Builder类

```
    public static final class Builder<T> {
        private int code;
        private String message;
        private T data;

        private Builder() {
        }

        public Builder code(int val) {
            code = val;
            return this;
        }

        public Builder message(String val) {
            message = val;
            return this;
        }

        public Builder data(T val) {
            data = val;
            return this;
        }

        public Result build() {
            return new Result(this);
        }
    }
```

使用

```java
Result<String> result3 = new Result.Builder<>().code(404).message("failure").build();
Result<String> result4 = Result.newBuilder().code(404).message("failure").build();
```

## 4、使用lombok继续优化

java类

```java
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Result<T> {
    private int code;
    private String message;
    private T data;
}
```

使用
```java
Result<String> result5 = Result.<String>builder().code(404).message("failure").build();
```