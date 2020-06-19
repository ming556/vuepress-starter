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

## 二.vuex的核心概念
- #### State
> state是vuex中的基本数据，所有的数据都储存在state中，一般state在vue中的使用有两种方法：一种是直接使用，一种是使用mapState辅助函数，如下图所示
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
})
```
```js
// main.js
import Vue from 'vue';
import store from './store';
new Vue({
  el: '#app',
  store,
});

```
```html
<template>
    <p>当前的数字是<p>
    <div>{{count}}</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return{
            count:''
        }
    },
    mounted() {
        this.count = this.$store.state.count
        // 第一种方法
    },
    computed: {
        ...mapState({count: state => state.count})
        // 第二种方法
        // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组如下：
        // ...mapState(['count'])
        // 'count'映射 this.count 为 store.state.count
    }
}
</script>
```
- #### Getter
> getter是从store的state中派生出的状态，可以认为是 store 的计算属性, getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。getter的使用方法有两种，如下图所示：
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters() {
    // 通过属性访问
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getter 可以接受其他的 getter 作为第二个参数比如：
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }

    // 通过方法访问
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
  },
})
```
```js
    // 通过属性访问 
    this.$store.getters.doneTodos // [{ id: 1, text: '...', done: true }]
    this.$store.getters.doneTodosCount // 1
    // 第一种方法
    // 第二种
    import { mapGetters } from ‘vuex’
    computed: {
        doneCount: 'doneTodosCount'
    // ...mapGetters(['doneTodosCount'])
    }

    // 通过方法访问(传值)
    this.$store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```
- #### Mutation
> mutation是改变state中数据的唯一办法，每一个mutation都有一个事件类型，以及一个回调函数。这个回调函数就是我们实际需要进行状态更改的地方，并且它会接受 state 作为第一个参数，mutation的使用方法有两种，如下图所示：
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cun:''
  },
  mutation: {
      internode(state) {
          state.count ++
      }
      indexnode(state,index) {
          state.count = index
      }
  }
})
```
```html
<template>
    <p>当前的数字是<p>
    <div>{{count}}</div>
    <div>{{cun}}</div>
    <button @click='dl'>点击加一</button>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return{
            count:''，
            cun:''
        }
    },
    methods: {
        dl() {
            // 第一种方法：点击自加
            this.$store.commit('internode')
            this.count = this.$stor.state.count
            // 点击count变为10
            this.$store.commit('indexnode','10')
            this.cun = this.$stor.state.cun
        }
    },
    // 第二种方法
    import { mapMutations } from 'vuex'
    methods: {
        ...mapMutations([
        'internode' // 映射 this.internode() 为 this.$store.commit('internode')
        ]),
        ...mapMutations({
        dl: 'internode' // 映射 this.dl() 为 this.$store.commit('internode')
        })
    }
}
</script>
```
- #### Action
> Action 类似于 mutation，不同在于：Action是异步的操作，并且他提交的是mutation而不是state，他不能直接改变在state中定义的值，比如我想延迟三秒后再改变state中的值，这时候就可以在action中写一个定时器，进行异步操作。Action的使用方法有两种，如下图所示：
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutation: {
      internode(state) {
          state.count ++
      }，
      internodes(state,index){
          state.count = index
      }
  },
  actions: {
    internode (context) {
      setTimeout(() => {
        context.commit('internode')
      }, 1000)
    },
    internodes (context,index) {
      setTimeout(() => {
        context.commit('internodes',index)
      }, 1000)
    }
  }
})
```
```html
<template>
    <p>当前的数字是<p>
    <div>{{count}}</div>
    <!-- 点击以后延迟自加 -->
    <button @click='dl'>点击加一</button>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return{
            count:''
        }
    },
    methods: {
        dl() {
            // 第一种方法：点击自加延迟一秒
            this.$store.dispatch('internode')
            this.count = this.$stor.state.count
            // 点击传值，延迟修改
            // this.$store.dispatch('internodes',10)
            // this.count = this.$stor.state.count
        }
    },
    // 第二种方法
    import { mapActions  } from 'vuex'
    methods: {
        ...mapActions ([
        'internodes' // 映射 this.internodes() 为 this.$store.dispatch('internodes')
        ]),
        ...mapActions ({
        dl: 'internode' // 映射 this.dl() 为 this.$store.dispatch('internode')
        })
    }
}
</script>
```
- #### Module
> 将vuex进行模块化，当应用变得很大时，store 对象会变得臃肿不堪。这时候就需要将store分割到模块module。每个模块可以拥有自己的 state、mutation、action、getters、甚至还可以嵌套子模块，这一个一般情况下很少用到。
```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
// 里边每一个state都是当前模块的局部状态
```

## 三.vue的生命周期

> 每一个vue实例在被创建时都会经过一大堆过程，例如监听啊，编译模板啊，挂载到DOM中去，更新DOM等等，这一过程就叫做vue的生命周期，而在这一过程中运行到的函数就叫做vue生命周期钩子函数

![生命周期](http://47.103.217.232/public/生命周期.png)

#### vue生命周期钩子函数
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

## 四.vue的计算属性和侦听器
#### 什么时候需要使用计算属性
> 在模板中绑定表达式来做简单的数据处理时，如果表达式太长，就会变得臃肿难以维护，比如
``` html 
<div>
    {{data.split(',').reverse().join(',')}}
</div>
```
这个时候当前的表达式里面包含了3个操作，有些时候可能会更加复杂，这时就可以使用计算属性。如下
``` html
<template>
    <div>
        {{reversedText}}
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                data: '123,456,789'
            }
        },
        computed: {
            reversedText () {
                //这里的this指向的是当前的vue实例,也就是data()
                return this.data.split(',').reverse().join(',');
            }
        }
    }
</script>
```
在一个计算属性里可以完成各种复杂的逻辑，包括运算、函数调用等，只要最终返回一个结果就可以，计算属性还可以依赖多个数据，只要其中任何一个数据变动，计算都会重新执行

#### 计算属性包括两个方法
- ##### getter
>正常情况下计算属性的默认值为 getter，一般情况下使用getter进行读取，上边的方法就是通过getter进行读取的

- ##### setter
>正常情况下计算属性的默认值为 getter，不过在需要时你也可以提供一个 setter：使用setter进行修改
```html
<template>
    <div>
    <table>
        <thead>
            <th>学科</th>
            <th>成绩</th>
        </thead>
        <tbody>
            <tr>
                <td>数学</td>
                <td><input type="text" v-model.number="Math"></td>
            </tr>
            <tr>
                <td>语文</td>
                <td><input type="text" v-model.number="chinese"></td>
            </tr>
            <tr>
                <td>总分</td>
                <td>{{sum}}</td>
            </tr>

        </tbody>
    </table>
</div>
</template>
<script>
    export default {
       data() {
           return {
                Math:88,
                chinese: 77,
           }
        },
        computed:{
            sum() {
                return this.Math+ this.chinese;
            }
        }
    }
</script>
```
通过这个方法可以看出，当我的成就修改以后，我的总分也会跟着改变。这就是setter方法的修改
##### 总结：
>计算属性一般就是通过用其他的数据来推算出一个新数据，而且它有一个好处，它把推算出来新的数据缓存下来了，如果其他的依赖数据没有发生变化，它调用的就是刚才缓存的数据，这就极大的提高了我们程序的性能。

什么是侦听器？
>vue官方是这样说的：虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
侦听器通俗来说就是监听一些数据，判断他们是否发生了改变，如果发生改变就运行该方法内部的函数。
```html
<template>
  <div>
    <p>你的体重</p>
    <textarea v-model="weight"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weight: ''
    }
  },
  watch: {
    weight(Value, oldValue) { // 当weight的值发生变化时，则会自动执行此函数
      if (Value !== oldValue ) {
        console.log('体重发生了改变')
      }
    }
  }
}
</script>
```
在监听事件中传两个值，一个是新值，一个是旧值。如果要进行深度监听如下：
```html
<template>
  <div>
    <p>你的体重</p>
    <textarea v-model="formdata.weight"></textarea>
  </div>
  <div>
    <p>你的身高</p>
    <textarea v-model="formdata.height"></textarea>
  </div>
  <div>
    <p>bmi指数：</p>
    <textarea v-model="formdata.bmi"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        weight:'100',
        height:'180',
        bmi:''
      }
    }
  },
  watch: {
    formdata:{
        handler(a,b) {
            this.formdata.bmi = a.weight / (this.formdata.height / 100) * 2;
        }
    }
    immediate: true,  //刷新加载 立马触发一次handler
    deep: true  // 可以深度检测到 formdata 对象的属性值的变化
  }
}
</script>
```
上述代码可以看出开启深度监听后，只要formdata的属性值发生了变化，那么就会触发handler，然后bmi的值就会跟着改变