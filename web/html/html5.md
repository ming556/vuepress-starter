# HTML5
## 什么是 HTML5？
- ### HTML5 是最新的 HTML 标准。
- ### HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。
- ### HTML5 拥有新的语义、图形以及多媒体元素。
- ### HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建。
- ### HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。
## HTML5 - 新的属性语法
类型|	示例
-|-|
Empty|	`<input type="text" value="John Doe" disabled>`
Unquoted|	`<input type="text" value=John Doe>`
Double-quoted|	`<input type="text" value="John Doe">`
Single-quoted|	`<input type="text" value='John Doe'>`
## HTML5 - 新特性
### HTML5 的一些最有趣的新特性：
- #### 新的语义元素，比如 `<header>, <footer>, <article>, and <section>`。
- #### 新的表单控件，比如数字、日期、时间、日历和滑块。
- #### 强大的图像支持（借由 `<canvas>` 和 `<svg>`）
- #### 强大的多媒体支持（借由 `<video>` 和 `<audio>`）
- #### 强大的新 API，比如用本地存储取代 cookie。
## HTML5 新元素
标签	|描述
-|-|
`<article>`	|定义文档内的文章。
`<aside>`	|定义页面内容之外的内容。
`<bdi>`	|定义与其他文本不同的文本方向。
`<details>`	|定义用户可查看或隐藏的额外细节。
`<dialog>`	|定义对话框或窗口。
`<figcaption>`|	定义 `<figure>` 元素的标题。
`<figure>`|	定义自包含内容，比如图示、图表、照片、代码清单等等。
`<footer>`|	定义文档或节的页脚。
`<header>`|	定义文档或节的页眉。
`<main>`|	定义文档的主内容。
`<mark>`|	定义重要或强调的内容。
`<menuitem>`|	定义用户能够从弹出菜单调用的命令/菜单项目。
`<meter>`|	定义已知范围（尺度）内的标量测量。
`<nav>`|	定义文档内的导航链接。
`<progress>`|	定义任务进度。
`<rp>`|	定义在不支持 ruby 注释的浏览器中显示什么。
`<rt>`|	定义关于字符的解释/发音（用于东亚字体）。
`<ruby>`	|定义 ruby 注释（用于东亚字体）。
`<section>`|	定义文档中的节。
`<summary>`|	定义 `<details>` 元素的可见标题。
`<time>`|	定义日期/时间。
`<wbr>`|	定义可能的折行（line-break）。
## 新的表单元素
标签	|描述
-|-|
`<datalist>`|	定义输入控件的预定义选项。
`<keygen>`|	定义键对生成器字段（用于表单）。
`<output>`|	定义计算结果。
## HTML5 - 新的属性语法
标签	|描述
-|-|
Empty|	`<input type="text" value="John Doe" disabled>`
Unquoted|	`<input type="text" value=John>`
Double-quoted|	`<input type="text" value="John Doe">`
Single-quoted|	`<input type="text" value='John Doe'>`
## HTML5 图像
标签|	描述
-|-|
`<canvas>`|	定义使用 JavaScript 的图像绘制。
`<svg>`|	定义使用 SVG 的图像绘制。
## 新的媒介元素
标签|描述
-|-|
`<audio>`|定义声音或音乐内容。
`<embed>`	|定义外部应用程序的容器（比如插件）。
`<source>`|	定义 `<video>` 和 `<audio>` 的来源。
`<track>`|定义 `<video>` 和 `<audio>` 的轨道。
`<video>`|	定义视频或影片内容。
## HTML5的代码约定
- ### 使用正确的文档类型
>在文档的首行声明文档类型：
`<!DOCTYPE html>`
- ### 使用小写元素名
#### HTML5 允许在元素名中使用混合大小写字母。
#### 推荐使用小写元素名：
- #####  混合大小写名称并不好
- #####  开发者习惯使用小写名（比如在 XHTML 中）
- #####  小写更起来更纯净
- #####  小写更易书写
```html
<!-- 大写 不好-->
<SECTION> 
  <p>This is a paragraph.</p>
</SECTION>
<!-- 大小写混合 不推荐 -->
<Section> 
  <p>This is a paragraph.</p>
</SECTION>
<!-- 小写推荐 -->
<section> 
  <p>This is a paragraph.</p>
</section>
```
- ### 关闭所有 HTML 元素
#### 在 HTML5 中，您不必关闭所有元素（例如 `<p>` 元素）。
#### 建议关闭所有 HTML 元素：
```html
<!-- 不推荐 -->
<section>
  <p>This is a paragraph.
  <p>This is a paragraph.
</section>
<!-- 推荐 -->
<section>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</section>
```
- ### 关闭空的 HTML 元素
#### 在 HTML5 中，关闭空元素是可选的。
```html
<meta charset="utf-8">
<!-- 推荐 -->
<meta charset="utf-8" />
```
- ### 使用小写属性名
#### HTML5 允许大小写混合的属性名。
#### 建议使用小写属性名：
- ##### 混合属性名并不好
- ##### 开发者习惯于使用小写属性名（比如在 XHTML 中）
- ##### 小写属性名看情况更纯净
- ##### 小写属性名更易书写
```html
<!-- 不推荐 -->
<div CLASS="menu">
<!-- 推荐 -->
<div class="menu">
```
- ### 属性值加引号
#### HTML5 允许不加引号的属性值
#### 推荐属性值加引号
- ##### 如果属性值包含值，则必须使用引号
- ##### 混合样式绝对不好
- ##### 加引号的值更易阅读
```html
<!-- 无效因为有空格 -->
<table class=table striped>
<!-- 有效 -->
<table class="table striped">
```
- ### 必需的属性
#### 请始终对图像使用 alt 属性。当图像无法显示时该属性很重要。
```html
<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
<!-- 请始终定义图像尺寸。这样做会减少闪烁，因为浏览器会在图像加载之前为图像预留空间。 -->

<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
```
- ### 避免长代码行
#### 当使用 HTML 编辑器时，通过左右滚动来阅读 HTML 代码很不方便。
#### 请尽量避免代码行超过 80 个字符。
## 使用 HTML5 的网站布局
#### HTML5 提供的新语义元素定义了网页的不同部分：
>HTML5 语义元素
标签 | 含义
-|-|
header	| 定义文档或节的页眉
nav     | 定义导航链接的容器
section | 定义文档中的节
article	| 定义独立的自包含文章
aside	| 定义内容之外的内容（比如侧栏）
footer	| 定义文档或节的页脚
details	| 定义额外的细节
summary	| 定义 details 元素的标题
>这个例子使用 `<header>, <nav>, <section>, 以及 <footer>` 来创建多列布局：
```html
<body>

<header>
<h1>我是头</h1>
</header>

<nav>
首页<br>
html<br>
css<br>
</nav>

<section>
<h1>开始</h1>
<p>
我是一个小菜鸟的自我修养
</p>
<p>
哦吼，你好啊
</p>
</section>

<footer>
这是页脚
</footer>

</body>
```
## HTML5 表单元素
### HTML5 增加了如下表单元素：
- #### `<datalist>`
- #### `<keygen>`
- #### `<output>`
- ### HTML5 `<datalist>` 元素
#### `<datalist>` 元素为 `<input>` 元素规定预定义选项列表。
#### 用户会在他们输入数据时看到预定义选项的下拉列表。
#### `<input>` 元素的 list 属性必须引用 `<datalist>` 元素的 id 属性。
>通过 `<datalist>` 设置预定义值的 `<input>` 元素：
```html
<form action="action_page.php">
<input list="browsers">
<datalist id="browsers">
   <option value="Internet Explorer">
   <option value="Firefox">
   <option value="Chrome">
   <option value="Opera">
   <option value="Safari">
</datalist> 
</form>
```
## HTML5 输入类型
### HTML5 增加了多个新的输入类型：
- #### color
- #### date
- #### datetime
- #### datetime-local
- #### email
- #### month
- #### number
- #### range
- #### search
- #### tel
- #### time
- #### url
- #### week
- ### 输入类型：number
`<input type="number">` 用于应该包含数字值的输入字段。
>可以对数字做出限制。根据浏览器支持，限制可应用到输入字段。
```html
<form>
  <input type="number" name="数值" min="1" max="5">
</form>
```
- ### 输入类型：date
`<input type="date">` 用于应该包含日期的输入字段。
>根据浏览器支持，日期选择器会出现输入字段中。
```html
<form>
  生日:
  <input type="date" name="bday">
</form>
```
- ### 输入类型：color
`<input type="color">` 用于应该包含颜色的输入字段。
>根据浏览器支持，颜色选择器会出现输入字段中。
```html
<form>
  选择颜色:
  <input type="color" name="favcolor">
</form>
```
- ### 输入类型：range
`<input type="range">` 用于应该包含一定范围内的值的输入字段。
>根据浏览器支持，输入字段能够显示为滑块控件。
```html
<form>
  <input type="range" name="points" min="0" max="10">
</form>
```
- ### 输入类型：email
`<input type="email">` 用于应该包含电子邮件地址的输入字段。
>根据浏览器支持，能够在被提交时自动对电子邮件地址进行验证。
>某些智能手机会识别 email 类型，并在键盘增加 ".com" 以匹配电子邮件输入。
```html
<form>
  E-mail:
  <input type="email" name="email">
</form>
```
- ### 输入类型：search
`<input type="search">` 用于搜索字段（搜索字段的表现类似常规文本字段）。
```html
<form>
  Search Google:
  <input type="search" name="googlesearch">
</form>
```
- ### 输入类型：tel
`<input type="tel">` 用于应该包含电话号码的输入字段。
```html
<form>
  Telephone:
  <input type="tel" name="usrtel">
</form>
```
- ### 输入类型：url
`<input type="url">` 用于应该包含 URL 地址的输入字段。
>根据浏览器支持，在提交时能够自动验证 url 字段。
>某些智能手机识别 url 类型，并向键盘添加 ".com" 以匹配 url 输入。
```html
<form>
  Add your homepage:
  <input type="url" name="homepage">
</form>
```
## HTML5的画布属性
### canvas 元素用于在网页上绘制图形。
- ### 什么是 Canvas？
- #### HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。
- #### 画布是一个矩形区域，您可以控制其每一像素。
- #### canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
- ### 创建 Canvas 元素
#### 向 HTML5 页面添加 canvas 元素。
#### 规定元素的 id、宽度和高度：
`<canvas id="myCanvas" width="200" height="100"></canvas>`
- ### 通过 JavaScript 来绘制
#### canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：
```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
</script>
```
#### JavaScript 使用 id 来寻找 canvas 元素：
`var c=document.getElementById("myCanvas")`;
#### 然后，创建 context 对象：
`var cxt=c.getContext("2d")`; 
`getContext("2d")` 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
#### 下面的两行代码绘制一个红色的矩形：
```js
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75); 
fillStyle 方法将其染成红色，fillRect 方法规定了形状、位置和尺寸。
```
- #### 关于坐标
##### 如：fillRect 方法拥有参数 (0,0,150,75)。
##### 意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。
## HTML5 内联 SVG
- ### 什么是SVG？
- #### SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- #### SVG 用于定义用于网络的基于矢量的图形
- #### SVG 使用 XML 格式定义图形
- #### SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- #### SVG 是万维网联盟的标准
- ### SVG 的优势
- #### SVG 图像可通过文本编辑器来创建和修改
- #### SVG 图像可被搜索、索引、脚本化或压缩
- #### SVG 是可伸缩的
- #### SVG 图像可在任何的分辨率下被高质量地打印
- #### SVG 可在图像质量不下降的情况下被放大
- ### 把 SVG 直接嵌入 HTML 页面
>在 HTML5 中，您能够将 SVG 元素直接嵌入 HTML 页面中：
```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>

</body>
</html>
```
## HTML5中canvas与svg的区别
### SVG
- #### SVG 是一种使用 XML 描述 2D 图形的语言。
- #### SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
- #### 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
### Canvas
- #### Canvas 通过 JavaScript 来绘制 2D 图形。
#### Canvas 是逐像素进行渲染的。
#### 在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
### Canvas 与 SVG 的比较
#### 不同之处。
- #### Canvas
- ##### 依赖分辨率
- ##### 不支持事件处理器
- ##### 弱的文本渲染能力
- ##### 能够以 .png 或 .jpg 格式保存结果图像
- ##### 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
- #### SVG
- ##### 不依赖分辨率
- ##### 支持事件处理器
- ##### 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- ##### 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- ##### 不适合游戏应用
## HTML5的地理定位
### HTML5 Geolocation（地理定位）用于定位用户的位置。
### 定位用户的位置
### HTML5 Geolocation API 用于获得用户的地理位置。
### 鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。
## HTML5 的拖放
### 拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。
### 拖放是 HTML5 标准的组成部分：任何元素都是可拖放的。
```html
<!DOCTYPE HTML>
<html>
<head>
<script>
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>
</html>
```
#### 代码解释
- ##### 首先先将元素设为可以拖放 draggable 属性设置为 true：
- ##### 当元素被拖动时发生的事情。ondragstart 属性调用了一个 drag(event) 函数，规定拖动什么数据。
- ##### dataTransfer.setData() 方法设置被拖动数据的数据类型和值：
```js
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
```
- ##### ondragover 事件规定被拖动的数据能够被放置到何处,由 ondragover 事件的 event.preventDefault() 方法完成
```js
function allowDrop(ev) {
    ev.preventDefault();
}
```
- ##### 当放开被拖数据时，会发生 drop 事件,ondrop 属性调用了一个函数，drop(event)：
```js
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
```
- ##### 调用 preventDefault() 来阻止数据的浏览器默认处理方式（drop 事件的默认行为是以链接形式打开）
- ##### 通过 dataTransfer.getData() 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据
- ##### 被拖数据是被拖元素的 id ("drag1")
- ##### 把被拖元素追加到放置元素中
## HTML 本地存储
>HTML 本地存储：优于 cookies
###  什么是 HTML 本地存储？
通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。
在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。
与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。
本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。
### HTML 本地存储对象
#### HTML 本地存储提供了两个在客户端存储数据的对象：
- ##### window.localStorage - 存储没有截止日期的数据
- ##### window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）
### localStorage 对象
- #### localStorage 对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。
```js
// 存储
localStorage.setItem("lastname", "Gates");
// 取回
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```
- #### 实例解释：
- ##### 创建 localStorage 名称/值对，其中：name="lastname"，value="Gates"
- ##### 取回 "lastname" 的值，并把它插到 id="result" 的元素中
```js
// 第二种方法
localStorage.lastname = "Gates";
// 取回
document.getElementById("result").innerHTML = localStorage.lastname;
// 删除的语法
localStorage.removeItem("lastname");
```
### sessionStorage 对象
- #### sessionStorage 对象等同 localStorage 对象，不同之处在于只对一个 session 存储数据。如果用户关闭具体的浏览器标签页，数据也会被删除。
```js
// 存储
sessionStorage.setItem("lastname", "Gates");
// 取回
document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
```
- #### 实例解释：
- ##### 创建 sessionStorage 名称/值对，其中：name="lastname"，value="Gates"
- ##### 取回 "lastname" 的值，并把它插到 id="result" 的元素中
```js
// 第二种方法
sessionStorage.lastname = "Gates";
// 取回
document.getElementById("result").innerHTML = sessionStorage.lastname;
// 删除的语法
sessionStorage.removeItem("lastname");
```