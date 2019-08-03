# 常见的MVM(VM)的实现
我们知道`Vue.js`是一个了实现了MVVM的JavaScript库。在不同的库中，MVM(VM)的原理是不一样的，一共有下面三种👇：
- 发布-订阅模式（backbone.js）   
- 脏检查机制（Angular.js）
- 数据劫持（Vue.js）

## 发布-订阅模式
> 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是`vm.set('property', value)`，但是我们更希望通过`vm.property = value`这种方式更新数据，同时自动更新视图，下面两种方式能够达到这种效果。

## 脏检查机制
> `angular.js` 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，`angular`只有在指定的事件触发时进入脏值检测，大致如下:
- DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- XHR响应事件 ( $http )
- 浏览器Location变更事件 ( $location )
- Timer事件( $timeout , $interval )
- 执行 $digest() 或 $apply()

## 数据劫持
对数据（Model）进行劫持，`Vue2.x`通过`Object.defineProperty()`来劫持各个属性的`setter`、`getter`，Vue3.0则通过`proxy`来“拦截”对各个属性的的设置和引用，当数据变动的时候就会触发劫持时绑定的事件，去执行视图更新的操作。

## Vue的实现方式
数据劫持 + 发布者-订阅者模式。通过数据劫持，当数据变动的时候就发布消息给订阅者，触发响应的监听回调。

<!-- TODO: -->
**思考🤔：Vue为啥要同时使用：数据劫持 + 发布者-订阅者模式？**