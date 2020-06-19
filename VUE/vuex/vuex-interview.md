# vue面试题
## 1.v-show 与 v-if 有什么区别？
#### v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

#### v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。

#### 所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
## 2.Class 与 Style 如何动态绑定？
- ##### Class 可以通过对象语法和数组语法进行动态绑定：


```js
// 对象语法：
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

data: {
  isActive: true,
  hasError: false
}

// 数组语法：

<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
- ##### Style 也可以通过对象语法和数组语法进行动态绑定：
```js
// 对象语法：

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}

// 数组语法：

<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```
## 3.computed 和 watch 的区别和运用的场景？
#### computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；
#### watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；
运用场景：
- ##### 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- ##### 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
## 4.谈谈你对 Vue 生命周期的理解？
- #### （1）生命周期是什么？
Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。
- #### （2）各个生命周期的作用
- ##### beforeCreate
> 在这个时候，vue实例组件刚创建，元素DOM和数据都还没有初始化，暂时不知道能在这个周期里面进行生命操作。通俗来讲就是，就好像盖房子一样，图纸已经备画好，但是房子还没开始盖
- ##### created
> 数据已经初始化完成，方法也已经可以调用，但是DOM未渲染。也就是页面已经创建好了，但是所有标签还未挂载上去，并没有在页面中进行渲染
- ##### beforeMount
> DOM未完成挂载，数据初始化完成。但是数据还未渲染，但是会创建一个虚拟的DOM，并且此时相关的render函数首次被调用，
- ##### mounted
> 数据以及DOM已经加载完毕，并且已经挂载到页面中，这时会将上一个生命周期钩子中的数据进行渲染到页面，这个时候一班都是进行一些初始化操作DOM的方法，比如进行ajax的请求。
- ##### beforeUpdate
> 在这个生命周期的时候，只要页面的数据发生了改变都进触发这个钩子，在数据更新之前，页面还是原来的数据，只是，当你进行请求的时候，会执行这个钩子，如果没有数据改变的话就不执行这个钩子
- ##### updated
> 只要是页面的数据发生了改变都会触发这个钩子函数，页面的数据随着数据的更新而更新，但是在使用beforeUpdate和updated时要谨慎，因为这个是在页面发生改变更新数据的时候都会改变，在这里对数据进行操作，容易导致进入死循环，也比较影响性能
- ##### beforeDestroy
> 这个钩子函数是在实例销毁之前执行的方法，也就是在离开路由之前把销毁实例，这个时候可以在这里函数里边比如清除之前开的定时器，或者清除一些本地储存的值。在这个周期里，无论是调用data的数据还是methods的方法，完全都可以进行调用。
- ##### destroyed
> 这个钩子函数就是在实例销毁之后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。跟beforeDestroy的唯一区别就是一个是销毁之前一个是销毁之后，个人感觉两个没有什么太大的区别，在这个周期里，无论是调用data的数据还是methods的方法，完全都可以进行调用。
- #### （3）VUE生命周期示意图
![生命周期](http://47.103.217.232/public/生命周期.png)
## 4.Vue 的父组件和子组件生命周期钩子函数执行顺序？
> Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：
- #### 加载渲染过程
##### 父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
- #### 子组件更新过程
##### 父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
- #### 父组件更新过程
##### 父 beforeUpdate -> 父 updated
- #### 销毁过程
##### 父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
## 在哪个生命周期内调用异步请求？
> 可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

- ##### 能更快获取到服务端数据，减少页面 loading 时间；
- ##### ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；
## 5.父组件可以监听到子组件的生命周期吗？
比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：
```js
// Parent.vue
<Child @mounted="doSomething"/>
    
// Child.vue
mounted() {
  this.$emit("mounted");
}
```
以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
```js
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
    
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    

// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...  
```   
当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。

## 6.谈谈你对 keep-alive 的了解？
> keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

- ##### 一般结合路由和动态组件一起使用，用于缓存组件；
- ##### 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
- ##### 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

## 7.组件中 data 为什么是一个函数？
> 为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？
```js
// data
data() {
  return {
	message: "子组件",
	childName:this.name
  }
}

// new Vue
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
```
> 因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。
## 8.Vue 组件间通信有哪几种方式？
>Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。
- ### （1）props / $emit  适用 父子组件通信
- ##### 这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。
- ### （2）ref 与 $parent / $children 适用 父子组件通信

- ##### ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- ##### $parent / $children：访问父 / 子实例

- ### （3）EventBus （$emit / $on）  适用于 父子、隔代、兄弟组件通信
- ##### 这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。
- ### （4）$attrs/$listeners 适用于 隔代组件通信

- ##### $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。
- ##### $listeners：包含了父作用域中的 (不含 .native 修饰器的)  v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

- ### （5）provide / inject 适用于 隔代组件通信
- ##### 祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
- ### （6）Vuex  适用于 父子、隔代、兄弟组件通信
- ##### Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

#### Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
#### 改变 store 中的状态的唯一途径就是显式地提交  (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。
## 9.能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？
- ### （1）hash 模式的实现原理
#### 早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
`https://www.word.com#search`
- ##### 路由模式的实现主要是基于下面几个特性：

> ① URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；

> ② hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；

> ③ 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；

> ④ 我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

- ### （2）history 模式的实现原理
#### HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
```js
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
```
路由模式的实现主要基于存在下面几个特性：

> ①pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；

> ②我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；

> ③history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。

## 10.什么是 MVVM？
#### Model–View–ViewModel （MVVM） 是一个软件架构设计模式，由微软 WPF 和 Silverlight 的架构师 Ken Cooper 和 Ted Peters 开发，是一种简化用户界面的事件驱动编程方式。由 John Gossman（同样也是 WPF 和 Silverlight 的架构师）于2005年在他的博客上发表
#### MVVM 源自于经典的 Model–View–Controller（MVC）模式  ，MVVM 的出现促进了前端开发与后端业务逻辑的分离，极大地提高了前端开发效率，MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。如下图所示：

![](https://user-gold-cdn.xitu.io/2019/8/19/16ca75871ec53fba?imageslim)
- #### （1）View 层
> View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。
- #### （2）Model 层
> Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。
- #### （3）ViewModel 层
> ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。

> MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

我们以下通过一个 Vue 实例来说明 MVVM 的具体实现，有 Vue 开发经验的同学应该一目了然：
```js
// （1）View 层
<div id="app">
    <p>{{message}}</p>
    <button v-on:click="showMessage()">Click me</button>
</div>

// （2）ViewModel 层
var app = new Vue({
    el: '#app',
    data: {  // 用于描述视图状态   
        message: 'Hello Vue!', 
    },
    methods: {  // 用于描述视图行为  
        showMessage(){
            let vm = this;
            alert(vm.message);
        }
    },
    created(){
        let vm = this;
        // Ajax 获取 Model 层的数据
        ajax({
            url: '/your/server/data/api',
            success(res){
                vm.message = res;
            }
        });
    }
})
  // （3） Model 层
{
    "url": "/your/server/data/api",
    "res": {
        "success": true,
        "name": "IoveC",
        "domain": "www.cnblogs.com"
    }
}
```
## 11.Vue 是如何实现数据双向绑定的？
#### Vue 数据双向绑定主要是指：数据变化更新视图，视图变化更新数据，如下图所示：
![](https://user-gold-cdn.xitu.io/2019/8/19/16ca75871f2e5f80?imageslim)
即：

>输入框内容变化时，Data 中的数据同步变化。即 View => Data 的变化。
>Data 中的数据变化时，文本节点的内容同步变化。即 Data => View 的变化。

#### 其中，View 变化更新 Data ，可以通过事件监听的方式来实现，所以 Vue 的数据双向绑定的工作主要是如何根据 Data 变化更新 View。
#### Vue 主要通过以下 4 个步骤来实现数据双向绑定的：
- ##### 实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
- ##### 实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
- ##### 实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
- ##### 实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。
以上四个步骤的流程图表示如下:
![](https://user-gold-cdn.xitu.io/2019/8/19/16ca75871f729d89?imageslim)

## 12.vue-router 路由模式有几种？
#### vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：
```js
switch (mode) {
  case 'history':
	this.history = new HTML5History(this, options.base)
	break
  case 'hash':
	this.history = new HashHistory(this, options.base, this.fallback)
	break
  case 'abstract':
	this.history = new AbstractHistory(this, options.base)
	break
  default:
	if (process.env.NODE_ENV !== 'production') {
	  assert(false, `invalid mode: ${mode}`)
	}
}
```
#### 其中，3 种路由模式的说明如下：
- ##### hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
- ##### history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
- ##### abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

## 13.Vue 框架怎么实现对象和数组的监听？
#### 如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object.defineProperty() 对数据进行劫持，但是  Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，那它是怎么实现的呢？我们查看相关代码如下：
```js
  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])  // observe 功能为监测数据的变化
    }
  }

  /**
   * 对属性进行递归遍历
   */
  let childOb = !shallow && observe(val) // observe 功能为监测数据的变化
  ```

#### 通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用  Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。
## 14.Proxy 与 Object.defineProperty 优劣对比
### Proxy 的优势如下:
- #### Proxy 可以直接监听对象而非属性；
- #### Proxy 可以直接监听数组的变化；
- #### Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
- #### Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
- #### Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
### Object.defineProperty 的优势如下:
- #### 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。

## 15.虚拟 DOM 的优缺点？
### 优点：

- #### 保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
- #### 无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
- #### 跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

### 缺点:

- #### 无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

## 16.你有对 Vue 项目进行哪些优化？
### （1）代码层面的优化

- #### v-if 和 v-show 区分使用场景
- #### computed 和 watch  区分使用场景
- #### v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
- #### 长列表性能优化
- #### 事件的销毁
- #### 图片资源懒加载
- #### 路由懒加载
- #### 第三方插件的按需引入
- #### 优化无限列表性能
- #### 服务端渲染 SSR or 预渲染
### （2）Webpack 层面的优化
- #### Webpack 对图片进行压缩
- #### 减少 ES6 转为 ES5 的冗余代码
- #### 提取公共代码
- #### 模板预编译
- #### 提取组件的 CSS
- #### 优化 SourceMap
- #### 构建结果输出分析
- #### Vue 项目的编译优化
### （3）基础的 Web 技术的优化
- #### 开启 gzip 压缩
- #### 浏览器缓存
- #### CDN 的使用
- #### 使用 Chrome Performance 查找性能瓶颈

## 17.对Vue.js的template编译的理解
#### template会被编译成AST语法树，AST会经过generate得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点

>parse 过程，将 template 利用正则转化成 AST 抽象语法树。
>optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能。
>generate 过程，生成 render 字符串
#### 司徒大佬有一篇很好的文章：[前端模板的原理与实现](https://segmentfault.com/a/1190000006990480)

## 18.库和框架的区别
### Library
>库，本质上是一些函数的集合。每次调用函数，实现一个特定的功能，接着把控制权交给使用者
- #### 代表：jQuery
- #### jQuery这个库的核心：DOM操作，即：封装DOM操作，简化DOM操作
### Framework
- #### 框架，是一套完整的解决方案，使用框架的时候，需要把你的代码放到框架合适的地方，框架会在合适的时机调用你的代码
- #### 框架规定了自己的编程方式，是一套完整的解决方案
- #### 使用框架的时候，由框架控制一切，我们只需要按照规则写代码
### 主要区别
- #### You call Library, Framework calls you
- #### 核心点：谁起到主导作用（控制反转）

- - #### 框架中控制整个流程的是框架
- - #### 使用库，由开发人员决定如何调用库中提供的方法（辅助）
- #### 好莱坞原则：Don't call us, we'll call you.
- #### 框架的侵入性很高（从头到尾）

## 19.异步DOM更新
- #### 说明：Vue 异步执行 DOM 更新，监视所有数据改变，一次性更新DOM
- #### 优势：可以去除重复数据，对于避免不必要的计算和 避免重复 DOM 操作上，非常重要
- #### 如果需要那到更新后dom中的数据 则需要通过 Vue.nextTick(callback)：在DOM更新后，执行某个操作（属于DOM操作）
- #### 实例调用vm.$nextTick(function () {})
```js
methods: {
  fn() {
    this.msg = 'change'
    this.$nextTick(function () {
      console.log('$nextTick中打印：', this.$el.children[0].innerText);
    })
    console.log('直接打印：', this.$el.children[0].innerText);
  }
}
```

## 20.指令
>解释：指令 (Directives) 是带有 v- 前缀的特殊属性
>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
### v-text
- #### 解释：更新DOM对象的 textContent
`<h1 v-text="msg"></h1>`
### v-html
- #### 解释：更新DOM对象的 innerHTML
`<h1 v-html="msg"></h1>`

### v-bind
- #### 作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
- #### 语法：v-bind:title="msg"
- #### 简写：:title="msg"
```html
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
### v-on
- #### 作用：绑定事件
- #### 语法：v-on:click="say" or v-on:click="say('参数', $event)"
- #### 简写：@click="say"
- #### 说明：绑定的事件定义在methods
```html
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```
### 事件修饰符
- #### .stop 阻止冒泡，调用 event.stopPropagation()
- #### .prevent 阻止默认行为，调用 event.preventDefault()
- #### .capture 添加事件侦听器时使用事件捕获模式
- #### .self 只当事件在该元素本身（比如不是子元素）触发时，才会触发事件
- #### .once 事件只触发一次

### v-model
- #### 作用：在表单元素上创建双向数据绑定
- #### 说明：监听用户的输入事件以更新数据
- #### 案例：计算器
```html
<input type="text" v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```
### v-for
- #### 作用：基于源数据多次渲染元素或模板块
```html
<!-- 1 基础用法 -->
<div v-for="item in items">
  {{ item.text }}
</div>

<!-- item 为当前项，index 为索引 -->
<p v-for="(item, index) in list">{{item}} -- {{index}}</p>
<!-- item 为值，key 为键，index 为索引 -->
<p v-for="(item, key, index) in obj">{{item}} -- {{key}}</p>
<p v-for="item in 10">{{item}}</p>
```
### key属性
- #### 推荐：使用 v-for 的时候提供 key 属性，以获得性能提升。
- #### 说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
### vue key
- #### vue key属性的说明
```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 21.前端模块化
### 为什么需要模块化

>1 最开始的js就是为了实现客户端验证以及一些简单的效果
>2 后来，js得到重视，应用越来越广泛，前端开发的复杂度越来越高
>3 旧版本的js中没有提供与模块（module）相关的内容
### 模块的概念
- #### 在js中，一个模块就是实现特定功能的文件（js文件）
- #### 遵循模块的机制，想要什么功能就加载什么模块
- #### 模块化开发需要遵循规范
### 模块化解决的问题
- #### 1 命名冲突
- #### 2 文件依赖（加载文件）
- #### 3 模块的复用
- #### 4 统一规范和开发方式
### JS实现模块化的规范
- #### AMD 浏览器端
- - ##### requirejs
- #### CommonJS nodejs
- - ##### 加载模块：require()
- - ##### 导出模块：module.exports = {} / exports = {}
- ####  ES6 中的 import / export
- #### CMD 浏览器端
- - ##### 玉伯（阿里前端大神） -> seajs
- #### UMD 通用模块化规范，可以兼容 AMD、CommonJS、浏览器中没有模块化规范 等这些语法
### AMD 的使用
>Asynchronous Module Definition：异步模块定义，浏览器端模块开发的规范 代表：require.js 特点：模块被异步加载，模块加载不影响后面语句的运行
- #### 1、定义模块
```js
    // 语法:define(name, dependencies?, factory);
    // name表示：当前模块的名称，是一个字符串 可有可无
    // dependencies表示：当前模块的依赖项，是一个数组无论依赖一项还是多项 无则不写
    // factory表示：当前模块要完成的一些功能，是一个函数
    
    // 定义对象模块
    define({})
    // 定义方法模块
    define(function() {
      return {}
    })
    // 定义带有依赖项的模块
    define(['js/a'], function() {})
```   
- #### 2、加载模块
```js
// - 注意：require的第一个参数必须是数组

    // 参数必须是数组 表示模块路径 以当前文件为基准,通过回调函数中的参数获取加载模块中的变量 参数与模块按照顺序一一对应
    require(['a', 'js/b'], function(a, b) {
      // 使用模块a 和 模块b 中的代码
    })
```
- #### 3、路径查找配置

>requirejs 默认使用 baseUrl+paths 的路径解析方式
##### 可以使用以下方式避开此设置：

- ##### 1 以.js结尾
- ##### 2 以 / 开始
- ##### 3 包含协议：https:// 或 http://
```js
// 配置示例
    // 注意配置应当在使用之前
    require.config({
      baseUrl: './js' // 配置基础路径为：当前目录下的js目录
    })
    require(['a'])    // 查找 基础路径下的 ./js/a.js

// 简化加载模块路径
    require.config({
      baseUrl: './js',
      // 配置一次即可，直接通过路径名称（template || jquery）加载模块
      paths: {
        template: 'assets/artTemplate/template-native',
        jquery: 'assets/jquery/jquery.min'
      }
    })
    // 加载jquery template模块
    require(['jquery', 'template'])
```    
- #### 4、非模块化和依赖项支持

- ##### 1 添加模块的依赖模块，保证加载顺序（deps）
- ##### 2 将非模块化模块，转化为模块化（exports）
```js
// 示例
    require.config({
      baseUrl: './js',
      paths: {
        // 配置路径
        noModule: 'assets/demo/noModule'
      },
      // 配置不符合规范的模块项
      shim: {
        // 模块名称
        noModule: {
          deps: [],         // 依赖项
          exports: 'sayHi'  // 导出模块中存在的函数或变量
        }
      }
    });

// 注意点  如果定义模块的时候，指定了模块名称，需要使用该名称来引用模块
    // 定义 这个模块名称与paths中的名称相同
    define('moduleA', function() {})
    // 导入
    require.config({
      paths: {
        // 此处的模块名：moduleA
        moduleA: 'assets/demo/moduleA'
      }
    })
```
- #### 5、路径加载规则

- ##### 路径配置的优先级：

- - ##### 1 通过 config 配置规则查找
- - ##### 2 通过 data-main 指定的路径查找
- - ##### 3 以引入 requirejs 的页面所在路径为准查找
```js
    <!-- 
      设置data-main属性
      1 data-main属性指定的文件也会同时被加载
      2 用于指定查找其他模块的基础路径
    -->
    <script src="js/require.js" data-main="js/main"></script>
```

## 22.Mint-UI
>基于 Vue.js 的移动端组件库
[Mint-UI](http://mint-ui.github.io/#!/zh-cn)
#### 快速开始
```js
安装：npm i -S mint-ui
// 1 导入 mint-ui模块
import MintUI from 'mint-ui'
// 2 导入 样式
import 'mint-ui/lib/style.css'
// 3 注册插件
Vue.use(MintUI)
```
## 23.MUI
[MUI](https://dev.dcloud.net.cn/mui/ui/)
>MUI 也是移动端的UI库
```js
// 使用：从github下载包，找到dist文件夹，只需要导入样式即可
// 只需要导入 MUI的样式 即可，根据MUI的例子，直接使用HTML结果即可
// 导入样式
import './lib/mui/css/mui.min.css'
```
## 24.ElementUI
>这是PC端的UI组件库
```js
安装：npm i -S element-ui
饿了吗 - ElementUI
{
  "presets": [
    ["es2015", { "modules": false }], "stage-0"
  ],

  "plugins": [
    ["component", [
      {
        "libraryName": "mint-ui",
        "style": true
      },
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      }
    ]]
  ]
}
```
## 25.uni-app
>uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
[uni-app](https://uniapp.dcloud.io/README)
>有两种安装方式：一种是通过 HBuilderX 可视化界面，另外一种是命令行，命令行如下：
#### 安装：npm install -g @vue/cli
### 创建uni-app
```js
使用正式版（对应HBuilderX最新正式版）

vue create -p dcloudio/uni-preset-vue my-project
使用alpha版（对应HBuilderX最新alpha版）

vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```
#### 此时，会提示选择项目模板，初次体验建议选择 hello uni-app 项目模板，如下所示
![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png)

### 自定义模板：
#### 选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 userName/repositoryName，如 dcloudio/uni-template-picture 就是下载图片模板。
```js
运行、发布uni-app
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```
%PLATFORM% 可取值如下：
![](http://47.103.217.232/public/uni-app.jpg)






来自于[掘金，我是你的超级英雄](https://juejin.im/post/5d59f2a451882549be53b170)

来自于[掘金，一二三 ](https://segmentfault.com/a/1190000012692321)


