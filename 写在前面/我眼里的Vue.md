# Vue是什么
Aaron目前脑海中对`Vue`认知可以用两个关键词来概括：响应式、组件化。因为Vue提供了便利的脚手架工具，所有的项目通过脚手架启动之后，已经集成了那一套全家桶的东西，Aaron打一开始使用就习惯把Vue当成一个框架而不是一个库，这种习惯其实很不好，下面重新认识一下`Vue`是什么

## Vue.js是一个MVVM库

> Vue.js是一个提供了MVVM(Model-View-ViewModel)风格的双向数据绑定的Javascript库，由View，ViewModel，Model三部分组成。View层代表的是视图、模版，负责将数据模型转化为UI展现出来。Model层代表的是模型、数据，可以在Model层中定义数据修改和操作的业务逻辑。ViewModel层连接Model和View。

Vue的核心库`Vue.js`只关注视图层，👇下面是一个简单的起步示例：

```html
<!-- View层 -->
<div id="app">
    <h2>{{ name }} is a boy</h2>
<div>

<script src="https://unpkg.com/vue"></script>
<script>
    // Model层
    let data = {
        name: '小明'
    }

    // ViewModel层
    const app = new Vue({
        el: '#app',
        data: data
    })
</script>
```
它是双向数据绑定的（响应式），Model层的数据变化会触发View层上引用到该数据的视图更新，同样在View层上对数据进行操作比如表单的输入，Model层的数据也会被动态地修改。

## Vue框架支持模块化开发
Vue支持模块化开发。在`Vue`中可以使用`Vue.component`用来定义全局组件，紧接着用`new Vue({ el: '#container '}) `在每个页面内指定一个容器元素，但是仅仅这样的话，如果要构建一个复杂的单页面应用的话，代码组织起来还是会很麻烦。所以Vue提供文件扩展名为`.vue`的单文件组件，源码里面的`sfc`目录的功能就是用来转换`*.vue`文件的，再结合打包构建工具，我们就能把每一个组件都拆分成一个个单文件，能够高效地去维护以及模块化地组织我们的项目代码。`vue-cli`为我们提供了快速启动的脚手架。

## Vue框架具有完整的生态
Vue除了`Vue.js`核心库外，还有完整的生态，比如各种支持类库`vuex`、`vue-router`等