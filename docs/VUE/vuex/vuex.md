# vue的生命周期以及vuex:

## 一.vuex是什么

> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
- #### 按我的理解来说它就是一个库储存内容的一个库，类似于本地储存，但是跟本地储存又有区别
### vuex跟本地储存的区别？
- #### localStorage
> localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。只要不进行清除，那么他的数据会一直存在

用法：
``` javascript
常见的用法：
存：    localStorage.setItem('kepler',data)
取：    localstorage.getItem('kepler')
点（.）运算符：
存：    localstorage.kepler = data; 
取：    localstorage.kepler
方括号（[ ]）运算符：
存：    localstorage['kepler'] = data;
取：    localstorage['kepler']
```
- #### sessionStorage 
> sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

用法：
``` javascript
常见的用法：
存：    sessionStorage.setItem('kepler',data)
取：    sessionStorage.getItem('kepler')
点（.）运算符：
存：    sessionStorage.kepler = data; 
取：    sessionStorage.kepler
方括号（[ ]）运算符：
存：    sessionStorage['kepler'] = data;
取：    sessionStorage['kepler']
```
#### 区别
- #### vuex存储在项目的内存中，localstorage（本地存储）则以文件的方式存储在本地,永久保存，只要不进行删除就会永久保存；sessionstorage( 会话存储 ) ,临时保存，当前页面关闭，内容也会跟着清除。
- #### localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理
- #### 应用场景的不同：vuex主要用于中大型大型项目组件之间的传值，localstorage，sessionstorage则主要用于不同页面之间的传值。
- #### 永久性的不同：当手动F5刷新页面时vuex中存储的值会丢失，而sessionstorage在页面关闭后就清除储存的值，但是localstorage不会，他的值会一直存在本地储存中。
- #### vuex是响应式的，假如当两个组件同时共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应进行变化，这时localstorage，sessionstorage无法做到。

## 二.vue的生命周期

> 每一个vue实例在被创建时都会经过一大堆过程，例如监听啊，编译模板啊，挂载到DOM中去，更新DOM等等，这一过程就叫做vue的生命周期，而在这一过程中运行到的函数就叫做vue生命周期钩子函数

例如官方图例：
