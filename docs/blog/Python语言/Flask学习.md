## 中文用户手册

> https://dormousehole.readthedocs.io/en/latest/

## 第一个flask代码

```
from flask import Flask

app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()

```