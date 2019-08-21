# 最小mvvm
我们先捋一下如果要实现一个最简单的变量和视图间的双向绑定的话需要考虑哪些东西。从一个简单的例子开始，有一个变量叫做`myFriend`，通过输入框可以改变它的值，重置按钮可以让它重置为空，然后页面上有两个`p`都引到了这个变量，可以把变量渲染出来，HTML代码如下👇，下面我们一步步把这个`Mvvm`对象给实现了

![最小mvvm界面](./最小mvvm界面.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>mvvm</title>
</head>
<body>
    <label for="name">输入你朋友的姓名</label>
    <input name="myFriend" v-model="myFriend" />
    <button @click="reset">重置</button>
    <p>1、我认识 {{ myFriend }}；</p>
    <p>2、我的朋友是 {{ myFriend }}</p>
    <script>
        var vm = new Mvvm({
            data: {
                myFriend: '小明'
            },
            methods: {
                reset() {
                    this.myFriend = ''
                }
            }
        });
    </script>
</body>
</html>
```


## 首先我们先要拦截到数据变化
在前置知识里我们知道可以通过`Object.defineProperty`来给变量设置`getter`和`setter`，我们这里用一个函数封装一下👇，
```js
function defineReactive (data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            // 待处理
            return value;
        },
        set: function (newVal) {
            if(value === newVal) return
            // 待处理
            value = newVal
        }
    })
}
```

