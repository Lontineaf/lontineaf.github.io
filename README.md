# es6入门学习笔记（本文学习文档来自http://es6.ruanyifeng.com/#docs/intro）

### 一、es6简介
-- 1.目前使用率最高的是es5，es6是在es5的基础上进行了大量的扩展，使得es5更加接近其他后台编程语言。
-- 2.现代浏览器对es6的支持程度比较高，node环境下可以用命令node --v8-options | grep harmony 查看支持程度。
	3.使用babel对es6进行转码，在根目录配置.babelrc 定义转码规则，并设置不同阶段语法提案的转码规则（babel-preset-stage-2）。
	4.babel-cli转码工具模块，babel-node,提供命令行es6语法输入和执行；babel-register,引入后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用 Babel 进行转码；babel-core提供我们使用其内部定义的api方法；babel-polyfill为es6新的api提供垫片库，因为babel只会对es6新的语法进行转码，而不会对扩展的新的api进行转码。

二、变量声明的扩展（let与const）
	1.作用域的规范，let命令声明的变量父级作用域为{}内部，而var变量仅在函数function（）{}中。
	2.let不存在变量提升问题，即未声明就使用会报错。
	3.暂时性死区，即在代码块中，使用let命令声明变量之前，该变量都是不可用的。一旦在代码块中使用let命令声明某变量，则该变量与当前代码块为绑定关系。
	4.同一作用域内，let命令不允许重复声明相同变量。
	5.es6的块级作用域可以取代立即执行函数（IIFE）。
	6.const声明变量必须立刻赋值且不能再次改变其值，其他特性与let声明一致，声明引用类型的变量时，只能保证其引用不会改变，但引用的内容是不可控的，如：const a ={};a.name可以改变。
	7.es6的6种变量声明方式：var,function,let,const,import,class。
	8.顶层对象属性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
	

	
