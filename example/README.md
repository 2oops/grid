###CSS布局相关实践

1. Flex布局 -- flex.html
---
参考文档
- [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [阮一峰的网络日志-2015](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

---

2. 传统布局：position + display + float

3. `flex: 1` -- flex1.html
---
其为flex-grow, flex-shrink, flex-basis的缩写
flex-grow: 放大，0为不放大
flex-shrink: 缩小
flex-basis: 子项含有该属性时，代表了子项空间占主轴的大小，
默认flex：0 1 auto;
flex: A => flex: A 1 0%;
(A若为一个非负数字则是flex-grow的值；
A若为百分比或px长度，则为flex-basis的值；
若flex取值为两个非负数字，则分别为flex-grow和flex-shrink的值)
flex: none => flex: 0 0 auto;
flex: auto => flex: 1 1 auto;

4. `apply&call` -- apply.html
---
