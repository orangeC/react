### 用法：

两个方法使用差不多的语法，都是接收一个字符串参数，这个参数需要是合法的CSS选择语法。

```
element = document.querySelector('selectors');
elementList = document.querySelectorAll('selectors');
```

其中参数selectors 可以包含多个CSS选择器，用逗号隔开。

```
element = document.querySelector('selector1,selector2,...');
elementList = document.querySelectorAll('selector1,selector2,...');
```

使用这两个方法无法查找带伪类状态的元素，比如querySelector(':hover')不会得到预期结果。

#### querySelector

该方法返回满足条件的单个元素。按照深度优先和先序遍历的原则使用参数提供的CSS选择器在DOM进行查找，返回第一个满足条件的元素。

```
element = document.querySelector('div#container');//返回id为container的首个div
element = document.querySelector('.foo,.bar');//返回带有foo或者bar样式类的首个元素
```

#### querySelectorAll

该方法返回所有满足条件的元素，结果是个nodeList集合。查找规则与前面所述一样。

```
elements = document.querySelectorAll('div.foo');//返回所有带foo类样式的div
```

但需要注意的是返回的nodeList集合中的元素是非实时（no-live）的，想要区别什么是实时非实时的返回结果，请看下例：

```
<div id="container">
    <div></div>
    <div></div>
</div>
```

```
//首先选取页面中id为container的元素
container=document.getElementById('#container');
console.log(container.childNodes.length)//结果为2
//然后通过代码为其添加一个子元素
container.appendChild(document.createElement('div'));
//这个元素不但添加到页面了，这里的变量container也自动更新了
console.log(container.childNodes.length)//结果为3
```

通过上面的例子就很好地理解了什么是会实时更新的元素。document.getElementById返回的便是实时结果，上面对其添加一个子元素后，再次获取所有子元素个数，已经由原来的2个更新为3个(这里不考虑有些浏览器比如Chrome会把空白也解析为一个子节点)。

[链接](http://www.nowamagic.net/librarys/veda/detail/388)