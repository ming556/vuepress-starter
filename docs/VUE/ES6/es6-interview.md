# 关于es6的高频面试题:

## 一、ES5，ES6和ES2015有什么区别?
> ES2015特指在2015年发布的新一代JS语言标准，ES6泛指下一代JS语言标准，包含ES2015、ES2016、ES2017、ES2018等。现阶段在绝大部分场景下，ES2015默认等同ES6。ES5泛指上一代语言标准。ES2015可以理解为ES5和ES6的时间分界线
## 二、babel是什么，有什么作用?
> babel是一个 ES6 转码器，可以将 ES6 代码转为 ES5 代码，以便兼容那些还没支持ES6的平台

## 三、let有什么用，有了var为什么还要用let？
> 在ES6之前，声明变量只能用var，var方式声明变量其实是很不合理的，准确的说，是因为ES5里面没有块级作用域是很不合理的。没有块级作用域回来带很多难以理解的问题，比如for循环var变量泄露，变量覆盖等问题。let声明的变量拥有自己的块级作用域，且修复了var声明变量带来的变量提升问题。

## 四、举一些ES6对String字符串类型做的常用升级优化?
- #### 优化部分

> ES6新增了字符串模板，在拼接大段字符串时，用反斜杠()`取代以往的字符串相加的形式，能保留所有空格和换行，使得字符串拼接看起来更加直观，更加优雅

- #### 升级部分

> ES6在String原型上新增了includes()方法，用于取代传统的只能用indexOf查找包含字符的方法(indexOf返回-1表示没查到不如includes方法返回false更明确，语义更清晰), 此外还新增了startsWith(), endsWith(), padStart(),padEnd(),repeat()等方法，可方便的用于查找，补全字符串

## 五、举一些ES6对Array数组类型做的常用升级优化
- #### 优化部分

>数组解构赋值。ES6可以直接以let [a,b,c] = [1,2,3]形式进行变量赋值，在声明较多变量时，不用再写很多let(var),且映射关系清晰，且支持赋默认值,
>扩展运算符。ES6新增的扩展运算符(...)(重要),可以轻松的实现数组和松散序列的相互转化，可以取代arguments对象和apply方法，轻松获取未知参数个数情况下的参数集合。（尤其是在ES5中，arguments并不是一个真正的数组，而是一个类数组的对象，但是扩展运算符的逆运算却可以返回一个真正的数组）。扩展运算符还可以轻松方便的实现数组的复制和解构赋值（let a = [2,3,4]; let b = [...a]）
- #### 升级部分

>ES6在Array原型上新增了find()方法，用于取代传统的只能用indexOf查找包含数组项目的方法,且修复了indexOf查找不到NaN的bug([NaN].indexOf(NaN) === -1).此外还新增了copyWithin(),includes(), fill(),flat()等方法，可方便的用于字符串的查找，补全,转换等

## 六、举一些ES6对Number数字类型做的常用升级优化
- #### 优化部分

>ES6在Number原型上新增了isFinite(), isNaN()方法，用来取代传统的全局isFinite(), isNaN()方法检测数值是否有限、是否是NaN。ES5的isFinite(), isNaN()方法都会先将非数值类型的参数转化为Number类型再做判断，这其实是不合理的，最造成isNaN('NaN') === true的奇怪行为--'NaN'是一个字符串，但是isNaN却说这就是NaN。而Number.isFinite()和Number.isNaN()则不会有此类问题(Number.isNaN('NaN') === false)。（isFinite()同上）

- #### 升级部分

>ES6在Math对象上新增了Math.cbrt()，trunc()，hypot()等等较多的科学计数法运算方法，可以更加全面的进行立方根、求和立方根等等科学计算
## 七、Promise
- ### Promise是什么，有什么作用？
>Promise 就是一个对象，用来表示并传递异步操作的最终结果
>Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因
>Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）
- ### promise有几种状态，什么时候会进入catch？
>三个状态：pending、fulfilled、reject
>两个过程：padding -> fulfilled、padding -> rejected
>当pending为rejectd时，会进入catch
- ### Promise构造函数是同步执行还是异步执行，那么 then 方法呢？
>promise构造函数是同步执行的，then方法是异步执行的
- ### Promise 中reject 和 catch 处理上有什么区别
>reject 是用来抛出异常，catch 是用来处理异常
>reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
>reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch
>网络异常（比如断网），会直接进入catch而不会进入then的第二个回调
## 八、module、export、import是什么，有什么作用？
>module、export、import是ES6用来统一前端模块化方案的设计思路和实现方案。export、import的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的AMD/CMD、requireJS、seaJS、commondJS等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS也能更加能实现大型的应用程序开发。
>import引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
>import引入export导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
## 九、日常前端代码开发中，有哪些值得用ES6去改进的编程优化或者规范？
>常用箭头函数来取代var self = this;的做法。
>常用let取代var命令。
>常用数组/对象的结构赋值来命名变量，结构更清晰，语义更明确，可读性更好。
>在长字符串多变量组合场合，用模板字符串来取代字符串累加，能取得更好地效果和阅读体验。
>用Class类取代传统的构造函数，来生成实例化对象。
>在大型应用开发中，要保持module模块化开发思维，分清模块之间的关系，常用import、export方法。