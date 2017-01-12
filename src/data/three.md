### 运用 after 伪元素，可以有一种非常优雅的解决方案：

```
.inline-element::after{
	content:"\A";
	white-space:pre;
}
```
通过给元素的 after 伪元素添加 content 为 “\A” 的值。这里 \A 是什么呢？

有一个 Unicode 字符是专门代表换行符的：0x000A 。 在 CSS 中，这个字符可以写作 “\000A”， 或简化为 “\A”。这里我们用它来作为 ::after 伪元素的内容。也就是在元素末尾添加了一个换行符的意思。

而 white-space: pre; 的作用是保留元素后面的空白符和换行符，结合两者，就可以轻松实现在行内级元素末尾实现换行。

[原文链接](http://www.tuicool.com/articles/BjYvqaA)