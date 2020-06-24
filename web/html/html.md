# HTML
## 什么是html？
> HTML 是用来描述网页的一种语言。 
- #### HTML 指的是超文本标记语言 (Hyper Text Markup Language) 
- #### HTML 不是一种编程语言，而是一种标记语言 (markup language) 
- #### 标记语言是一套标记标签 (markup tag) 
- #### HTML 使用标记标签来描述网页

## HTML标签
> HTML 标记标签通常被称为 HTML 标签 (HTML tag)。
- #### HTML 标签是由尖括号包围的关键词，比如 ```<html>```
- #### HTML 标签通常是成对出现的，比如```<b>``` 和 ```</b>``` 
- #### 标签对中的第一个标签是开始标签，第二个标签是结束标签
- #### 开始和结束标签也被称为开放标签和闭合标签

## HTML 文档 = 网页
- #### HTML 文档描述网页
- #### HTML 文档包含 HTML 标签和纯文本
- #### HTML 文档也被称为网页
- #### Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容：

## HTML 标题，段落以及链接，图像
- #### HTML 标题（Heading）是通过 ```<h1>``` - ```<h6>``` 等标签进行定义的。
> 例如：
```html
<h1>我是第一行</h1>
<h2>我是第二行</h2>
<h3>我是第三行</h3>
```
- #### HTML 段落是通过 ```<p>``` 标签进行定义的。
> 例如：
```html
<p>我是第一段</p>
<p>哦吼，我是第二段</p>
```
- #### HTML 链接是通过 ```<a>``` 标签进行定义的。
```html
<a href="http://www.98ming.cn/">我的博客</a>
```
- #### HTML 图像是通过 ```<img>``` 标签进行定义的。
```html
<img src="ming.jpg" width="104" height="142" />
```

## HTML的表格以及；列表
- #### 表格
> 表格由 ```<table>``` 标签来定义。每个表格均有若干行（由 ```<tr>``` 标签定义），每行被分割为若干单元格（由 ```<td>``` 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
```html
<table border="1">
<tr>
<td>第一行第一个</td>
<td>第一行第二个</td>
</tr>
<tr>
<td>第二行第一个</td>
<td>第二行第二个</td>
</tr>
</table>
```
- #### 表格和边框属性
>如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。
>使用边框属性来显示一个带有边框的表格：
```html
<table border="1">
<tr>
<td>第一行第一个</td>
<td>第一行第二个</td>
</tr>
</table>
```
- #### 表格的表头
>表格的表头使用 ```<th>``` 标签进行定义。
>大多数浏览器会把表头显示为粗体居中的文本：
```html
<th>我是表头</th>
```
- #### 表格中的空单元格
>在一些浏览器中，没有内容的表格单元显示得不太好。如果某个单元格是空的（没有内容），浏览器可能无法显示出这个单元格的边框
```html
<table border="1">
<tr>
<td>第一行第一个</td>
<td>第一行第二个</td>
</tr>
<tr>
<td></td>
<td>第二行第二个</td>
</tr>
</table>
```
### 列表分为有序列表跟无序列表
- #### 无序列表
>无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。
>无序列表始于 `<ul>` 标签。每个列表项始于 `<li>`。
```html
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```
- #### 有序列表
>同样，有序列表也是一列项目，列表项目使用数字进行标记。
>有序列表始于 `<ol>` 标签。每个列表项始于 `<li>` 标签。
```html
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```
- #### 定义列表
>自定义列表不仅仅是一列项目，而是项目及其注释的组合。
>自定义列表以 `<dl>` 标签开始。每个自定义列表项以 `<dt>` 开始。每个自定义列表项的定义以 `<dd>` 开始。
```html
<dl>
<dt>Coffee</dt>
<dd>Black hot drink</dd>
<dt>Milk</dt>
<dd>White cold drink</dd>
</dl>
```
## HTML 块
- #### HTML 块元素
>大多数 HTML 元素被定义为块级元素或内联元素。
>块级元素在浏览器显示时，通常会以新行来开始（和结束）。
例子：
`<h1>, <p>, <ul>, <table>`
- #### HTML 内联元素
>内联元素在显示时通常不会以新行开始。
例子：
`<b>, <td>, <a>, <img>`
- #### HTML `<div>` 元素
>HTML `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。  
>`<div>` 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。
>如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。
>`<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。
- #### HTML `<span>` 元素
>HTML `<span>` 元素是内联元素，可用作文本的容器。
>`<span>` 元素也没有特定的含义。
>当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

## HTML 类
>对 HTML 进行分类（设置类），使我们能够为元素的类定义 CSS 样式。
>为相同的类设置相同的样式，或者为不同的类设置不同的样式。
```html
<!DOCTYPE html>
<html>
<head>
<style>
.cities {
    background-color:black;
    color:white;
    margin:20px;
    padding:20px;
} 
</style>
</head>
<body>
<div class="cities">
<h2>第一行</h2>
<p>
这是第一句话
</p>
</div> 

</body>
</html>
```
- #### 分类行内元素
>HTML `<span>` 元素是行内元素，能够用作文本的容器。
>设置 `<span>` 元素的类，能够为相同的 `<span>` 元素设置相同的样式。
```html
<!DOCTYPE html>
<html>
<head>
<style>
  span.red {color:red;}
</style>
</head>
<body>
<h1>My <span class="red">Important</span> Heading</h1>
</body>
</html>
```
## HTML 框架
> 通过使用框架，可以使我们在同一个浏览器窗口中显示不止一个页面。
### 坏处
- #### 开发人员必须同时跟踪更多的HTML文档
- #### 很难打印整张页面
### 框架结构标签（`<frameset>`）
- #### 框架结构标签（`<frameset>`）定义如何将窗口分割为框架
- #### 每个 frameset 定义了一系列行或列
- #### rows/columns 的值规定了每行或每列占据屏幕的面积
>如：
```html
<frameset cols="25%,75%">
   <frame src="frame_a.htm">
   <frame src="frame_b.htm">
</frameset>
```
### 内联框架
- #### iframe 用于在网页内显示网页
`<iframe src="URL"></iframe>`
##### URL 指向隔离页面的位置
- ##### Iframe - 设置高度和宽度
>height 和 width 属性用于规定 iframe 的高度和宽度。
>属性值的默认单位是像素，但也可以用百分比来设定（比如 "80%"）。
`<iframe src="demo_iframe.htm" width="200" height="200"></iframe>`
- #### Iframe - 删除边框
>frameborder 属性规定是否显示 iframe 周围的边框。
>设置属性值为 "0" 就可以移除边框：
`<iframe src="demo_iframe.htm" frameborder="0"></iframe>`
## HTML 脚本
- ### HTML script 元素
- #### `<script>` 标签用于定义客户端脚本，比如 JavaScript。
- #### script 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。
- #### 必需的 type 属性规定脚本的 MIME 类型。
- #### JavaScript 最常用于图片操作、表单验证以及内容动态更新。
>下面的脚本会向浏览器输出“Hello World!”：
```js
<script type="text/javascript">
document.write("Hello World!")
</script>
```
- ### `<noscript>` 标签
- #### `<noscript>` 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时。
- #### noscript 元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。
- #### 只有在浏览器不支持脚本或者禁用脚本时，才会显示 noscript 元素中的内容：
```js
<script type="text/javascript">
document.write("Hello World!")
</script>
<noscript>Your browser does not support JavaScript!</noscript>
```
## HTML文件路径
路径|描述
-|-|
`<img src="picture.jpg">` |	picture.jpg 位于与当前网页相同的文件夹
`<img src="images/picture.jpg">`|	picture.jpg 位于当前文件夹的 images 文件夹中
`<img src="/images/picture.jpg">`|	picture.jpg 当前站点根目录的 images 文件夹中
`<img src="../picture.jpg">`|	picture.jpg 位于当前文件夹的上一级文件夹中
- ### 绝对路径
> 绝对文件路径是指向一个因特网文件的完整 URL：
```html
<img src="http://www.98ming.cn/" alt="flower">
```
- ### 相对路径
>相对路径指向了相对于当前页面的文件
```html
<!-- 文件路径指向了位于当前网站根目录中 images 文件夹里的一个文件 -->
<img src="/images/picture.jpg" alt="flower">
<!-- 文件路径指向了位于当前文件夹中 images 文件夹里的一个文件： -->
<img src="images/picture.jpg" alt="flower">
<!-- 文件路径指向了位于当前文件夹的上一级文件夹中 images 文件夹里的一个文件 -->
<img src="../images/picture.jpg" alt="flower">
```
## HTML 头部元素
- ### HTML `<head>` 元素
#### `<head>` 元素是所有头部元素的容器。`<head>` 内的元素可包含脚本，指示浏览器在何处可以找到样式表，提供元信息，等等。
#### 以下标签都可以添加到 head 部分：`<title>、<base>、<link>、<meta>、<script> 以及 <style>`。
- ### HTML `<title>` 元素
#### `<title>` 标签定义文档的标题。
#### title 元素在所有 HTML/XHTML 文档中都是必需的。
#### title 元素能够：
- ##### 定义浏览器工具栏中的标题
- ##### 提供页面被添加到收藏夹时显示的标题
- ##### 显示在搜索引擎结果中的页面标题
```html
<head>
<title>我是标题</title>
</head>
```
- ### HTML `<base>` 元素
#### `<base>` 标签为页面上的所有链接规定默认地址或默认目标（target）：
```html
<head>
<base href="http://www.98ming.cn/" />
<base target="_blank" />
</head>
```
- ### HTML `<link>` 元素
#### `<link>` 标签定义文档与外部资源之间的关系。
#### `<link>` 标签最常用于连接样式表：
```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```
- ### HTML `<style>` 元素
#### `<style>` 标签用于为 HTML 文档定义样式信息。
#### 您可以在 style 元素内规定 HTML 元素在浏览器中呈现的样式：
```html
<head>
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>
</head>
```
- ### HTML `<meta>`元素
#### 元数据（metadata）是关于数据的信息。
#### `<meta>` 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。
#### 典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。
#### `<meta>` 标签始终位于 head 元素中。
#### 元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。
#### 针对搜索引擎的关键词
#### 一些搜索引擎会利用 meta 元素的 name 和 content 属性来索引您的页面。
```html
<meta name="description" content="医疗器械" />
```
#### name 和 content 属性的作用是描述页面的内容。

- ### HTML `<script>` 元素
#### `<script>` 标签用于定义客户端脚本，比如 JavaScript。
- ### HTML 头部元素
标签|描述
-|-|
`<head>`    |定义关于文档的信息。
`<title>`   |定义文档标题。
`<base>`	|定义页面上所有链接的默认地址或默认目标。
`<link>`	|定义文档与外部资源之间的关系。
`<meta>`	|定义关于 HTML 文档的元数据。
`<script>`  |定义客户端脚本。
`<style>`	|定义文档的样式信息。
## HTML 中有用的字符实体
显示结果|描述|实体名称|实体编号
-|-|-|-|-|
`  ` |空格   |`&nbsp;`|	`&#160`;
`<`	|小于号	|`&lt;`	|`&#60`;
`>`	|大于号	|`&gt`;	|`&#62`;
`&`	|和号	|`&amp;`	|`&#38;`
`"`	|引号	|`&quot;`	|`&#34;`
`'`	|撇号   | 	`&apos;` (IE不支持)	|`&#39;`
`￠`  |分（cent）|	`&cent;`	|`&#162;`
`£`	|镑（pound）|	`&pound;`	|`&#163;`
`¥`	|元（yen）|	`&yen;`	|`&#165;`
`€`	|欧元（euro）|	`&euro;`|	`&#8364;`
`§`	|小节	|`&sect;`|	`&#167;`
`©`	|版权（copyright）|	`&copy;`|	`&#169;`
`®`	|注册商标|	`&reg;`|	`&#174;`
`™`	|商标	|`&trade;`	|`&#8482;`
`×`	|乘号	|`&times;`	|`&#215;`
`÷`	|除号	|`&divide;`|	`&#247;`
## HTML中表单
>HTML 表单用于搜集不同类型的用户输入
- ### `<form>` 元素
- #### HTML 表单用于收集用户输入。
- #### `<form>` 元素定义 HTML 表单：
```html
<form>
 .
form elements
 .
</form>
```
- ### HTML 表单包含表单元素。
> 表单元素指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等。
#### `<input>` 元素
##### `<input>` 元素是最重要的表单元素。
##### `<input>` 元素有很多形态，根据不同的 type 属性。
类型	|   描述
-|-|
text|	定义常规文本输入。
radio|	定义单选按钮输入（选择多个选择之一）
submit|	定义提交按钮（提交表单）
- ### 文本输入
`<input type="text">` 定义用于文本输入的单行输入字段：
```html
<form>
 First name:<br>
<input type="text" name="firstname">
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```
- ### 单选按钮输入
`<input type="radio">` 定义单选按钮。
>单选按钮允许用户在有限数量的选项中选择其中之一：
```html
<form>
<input type="radio" name="sex" value="male" checked>Male
<br>
<input type="radio" name="sex" value="female">Female
</form> 
```
- ### 提交按钮
`<input type="submit">` 定义用于向表单处理程序（form-handler）提交表单的按钮。
>表单处理程序通常是包含用来处理输入数据的脚本的服务器页面。
>表单处理程序在表单的 action 属性中指定：
```html
<form action="action_page.php">
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form> 
```
- ### Action 属性
- #### action 属性定义在提交表单时执行的动作。
- #### 向服务器提交表单的通常做法是使用提交按钮。
- #### 通常，表单会被提交到 web 服务器上的网页。
`<form action="action_page.php">`
>如果省略 action 属性，则 action 会被设置为当前页面。
- ### 关于get跟post的使用
#### 何时使用 GET？
- #### 如果表单提交是被动的（比如搜索引擎查询），并且没有敏感信息。
- #### 当使用 GET 时，表单数据在页面地址栏中是可见的：

#### 何时使用 POST？
- #### 如果表单正在更新数据，或者包含敏感信息（例如密码）。
- #### POST 的安全性更加，因为在页面地址栏中被提交的数据是不可见的。
- ### Method 属性
> method 属性规定在提交表单时所用的 HTTP 方法（GET 或 POST）：
```html
<form action="action_page.php" method="GET">
<!-- 或： -->
<form action="action_page.php" method="POST">
```
- ### Name 属性
> 如果要正确地被提交，每个输入字段必须设置一个 name 属性。
```html
<form action="action_page.php">
First name:<br>
<input type="text" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form> 
```
- ### 用 `<fieldset>` 组合表单数据
- #### `<fieldset>` 元素组合表单中的相关数据
- #### `<legend>` 元素为 `<fieldset>` 元素定义标题。
```html
<form action="action_page.php">
<fieldset>
<legend>Personal information:</legend>
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit"></fieldset>
</form> 
```
- ### `<form>` 属性的列表：
属性	|   描述
-|-|
accept-charset	|规定在被提交表单中使用的字符集（默认：页面字符集）。
action|	规定向何处提交表单的地址（URL）（提交页面）。
autocomplete|	规定浏览器应该自动完成表单（默认：开启）。
enctype|	规定被提交数据的编码（默认：url-encoded）。
method|	规定在提交表单时所用的 HTTP 方法（默认：GET）。
name|	规定识别表单的名称（对于 DOM 使用：document.forms.name）。
novalidate|	规定浏览器不验证表单。
target|	规定 action 属性中地址的目标（默认：_self）。
- ## HTML 表单元素
- ### `<input>` 元素
- #### 最重要的表单元素是 `<input>` 元素。
- #### `<input>` 元素根据不同的 type 属性，可以变化为多种形态。
- ### `<select>` 元素（下拉列表）
```html
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
```
- #### `<option>` 元素定义待选择的选项。
- #### 列表通常会把首个选项显示为被选选项。
```html
<option value="fiat" selected>Fiat</option>
```
- ### `<textarea>` 元素
- ### `<textarea>` 元素定义多行输入字段（文本域）：
```html
<textarea name="message" rows="10" cols="30">
我是文本域
</textarea>
```
- ### `<button>` 元素
- #### `<button>` 元素定义可点击的按钮：
```html
<button type="button" onclick="alert('Hello World!')">点击我</button>
```
## HTML的输入类型
- ### 输入类型：text
`<input type="text">` 定义供文本输入的单行输入字段：
```html
<form>
 请输入名称:<br>
<input type="text" name="firstname">
<br>
</form> 
```
- ### 输入类型：password
`<input type="password">` 定义密码字段：
```html
<form>
 请输入用户名:<br>
<input type="text" name="username">
<br>
 请输入密码:<br>
<input type="password" name="psw">
</form> 
```
- ### 输入类型：submit
`<input type="submit">` 定义提交表单数据至表单处理程序的按钮。
#### 表单处理程序（form-handler）通常是包含处理输入数据的脚本的服务器页面。
#### 在表单的 action 属性中规定表单处理程序（form-handler）：
```html
<form>
输入用户名<br>
<input type="text" name="firstname" value="admin">
<br>
输入密码<br>
<input type="password" name="psw" value="123456">
<br><br>
<input type="submit" value="点击提交">
</form> 
```
- ### Input Type: radio
`<input type="radio">` 定义单选按钮。
```html
<form>
<input type="radio" name="sex" value="男" checked>男
<br>
<input type="radio" name="sex" value="女">女
</form> 
```
- ### Input Type: checkbox
`<input type="checkbox">` 定义复选框。
#### 复选框允许用户在有限数量的选项中选择零个或多个选项。
```html
<form>
<input type="checkbox" name="vehicle" value="snacks">零食
<br>
<input type="checkbox" name="vehicle" value="hamburger">汉堡 
</form> 
```
- ### Input Type: button
`<input type="button>` 定义按钮。
```html
<input type="button" onclick="alert('Hello World!')" value="点我">
```