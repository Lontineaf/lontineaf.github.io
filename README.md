# ES6入门学习笔记（本文学习文档来自http://es6.ruanyifeng.com/#docs/intro）

### 一、ES6简介
1. 目前使用率最高的是es5，es6是在es5的基础上进行了大量的扩展，使得es5更加接近其他后台编程语言。
2. 现代浏览器对es6的支持程度比较高，node环境下可以用命令node --v8-options | grep harmony 查看支持程度。
3. 使用babel对es6进行转码，在根目录配置.babelrc 定义转码规则，并设置不同阶段语法提案的转码规则（babel-preset-stage-2）。
4. babel-cli转码工具模块，babel-node,提供命令行es6语法输入和执行；babel-register,引入后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用 Babel 进行转码；babel-core提供我们使用其内部定义的api方法；babel-polyfill为es6新的api提供垫片库，因为babel只会对es6新的语法进行转码，而不会对扩展的新的api进行转码。

### 二、变量声明的扩展（let与const）
1. 作用域的规范，let命令声明的变量父级作用域为{}内部，而var变量仅在函数function（）{}中。
2. let不存在变量提升问题，即未声明就使用会报错。
3. 暂时性死区，即在代码块中，使用let命令声明变量之前，该变量都是不可用的。一旦在代码块中使用let命令声明某变量，则该变量与当前代码块为绑定关系。
4. 同一作用域内，let命令不允许重复声明相同变量。
5. es6的块级作用域可以取代立即执行函数（IIFE）。
6. const声明变量必须立刻赋值且不能再次改变其值，其他特性与let声明一致，声明引用类型的变量时，只能保证其引用不会改变，但引用的内容是不可控的，如：const a ={};a.name可以改变。
7. es6的6种变量声明方式：var,function,let,const,import,class。
8. 顶层对象属性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
### 三、变量的解构赋值
1. 只要具有Iterator（迭代器）接口，就可以进行解构赋值。
2. 解构赋值允许传入默认值，如果有新值，默认值会被覆盖。
3. 在对象的解构赋值中，被赋值的是对象属性对应的值，而属性只是匹配模式，本身不是值。
4. 变量声明时模式不能使用小括号，赋值时，非模式部分可以使用小括号。
5. 用途：交换变量的值，从函数返回多个值，函数参数的定义，提取JOSN数据，
### 四、变量的扩展
1. 字符串的扩展，支持了对Unicode编码大于0xFFFF的字符的支持，包括codePointAt()fromCodePoint()at()；查找字符串方法的扩展，include(),startsWidth(),endsWidth();padStart()padEnd()补充规定长度字符串，常用于不全特定格式的字符串；反单引号保留字符串原有格式，${}中可放入js代码，可应用于模板编译和标签模板（函数名后紧跟反单引号,反单引号中的值为函数的参数）
2. 正则的扩展，增加了u,y修饰符，u修饰符用来支持超过x0FFF编码的字符；y叫做“粘连”（sticky）修饰符，作用和g类似，区别在于y修饰符确保匹配必须从剩余的第一个位置开始。
3. 数值的扩展，部分全局函数并入Number原型中，增加极小的常量Number.EPSILON等于2的-52 次方，是js能表示的最小精度；js数字的有效范围2^53-1到-（2^53-1）,Number.isSafeInteger()方法用来判断数字是否在这个范围内
4. 函数的扩展，函数的参数允许直接传入默认值，使用参数默认值时，函数不能有同名参数；函数的length属性，返回函数参数的个数，不包括有默认值和rest参数；函数的name属性，返回函数的名称；Function构造函数返回的函数实例，name属性的值为anonymous，bind返回的函数，name属性值会加上bound前缀；新增箭头函数的语法，注意事项：（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数；箭头函数里面根本没有自己的this，而是引用外层的this，同样的箭头函数里arguments、super、new.target这些关键字也是不存在的，引用外层对应对象；函数尾调用的概念，即函数的返回值是另一个函数的调用，如果该函数的入参不依赖于外层函数的入参，那么该函数执行时不保留外层函数的调用帧，因此该种调用方式对内存的消耗非常低，也称为函数的尾调用优化（严格模式下才会生效），这种优化最大的优势体现在递归函数上，传统的递归函数的调用栈非常庞大，经常会导致内存溢出，用尾调优化改写后的递归函数（通常将内部变量变成函数的参数，但是对于可读性而言不友好，可以使用柯里化方式优化传入参数或者用es6传入默认值）。
5. 数组的扩展，扩展运算符（...）将一个数组拆分成参数序列，任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。Array.from()方法，用于将伪数组对象或者Iterator转换为数组，方法还接受第二个参数（一个方法），类似于map()函数，用来将数组里的每一项进行某项运算后返回；Array.of()方法用来弥补数组构造函数的传参创建数组时的不足，数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组，会修改当前数组；数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined；findIndex方法与find类似，区别是返回结果是对应的下标，这两个方法都可以接受第二个参数，用来绑定回调函数的this对象；fill(value,start,end)，向数组中指定位置填充value，注意value为对象的指向，并不是深复制；ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历；include()用于查找是否包含某个值。
6. 对象的扩展，对象属性值赋值的简写（解构赋值）；Object.is()方法用来比较两个值是否严格相等；Object.assign方法用于对象的合并，合并是浅复制;每个对象都有很多属性，其中属性本身拥有一个对象，称之为属性描述对象，其中有一个属性enumerable(可枚举类型)，用来限制对象一些系统属性不被遍历或者合并，ES6 规定，所有 Class 的原型的方法都是不可枚举的。
### 五、symbol类型
1. 为了防止命名冲突，es6引入了symbol类型，Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分；Symbol 值不能与其他类型的值进行运算，会报错。
2. 作为属性名,只能以[Symbol()]形式定义，且不可以被for...in,for...of,Object.keys(),Object.getOwnPropertyNames(),JSON.stringify()获取到，可以使用Object.getOwnPropertySymbols（）方法获取对象所有Symbol类型的属性数组。
3. Symbol.for方法，它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值，Symbol.keyFor方法返回一个已登记（用Symbol.for方法定义的称之为已登记）的 Symbol 类型值的key；Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
4. 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法；对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo\[Symbol.hasInstance\](foo)。
### 六、set和map
1. set它类似于数组，但是成员的值都是唯一的，没有重复的值。
2. set的操作方法：add(value)：添加某个值，返回 Set 结构本身，delete(value)：删除某个值，返回一个布尔值，表示删除是否成功，has(value)：返回一个布尔值，表示该值是否为Set的成员，clear()：清除所有成员，没有返回值。
3. set的遍历方法：keys()：返回键名的遍历器，values()：返回键值的遍历器，entries()：返回键值对的遍历器，forEach()：使用回调函数遍历每个成员；由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致；Set 结构的实例默认可遍历，也就是可以省略上诉方法的调用。
4. WeakSet 结构与 Set 类似，区别是WeakSet 的成员只能是对象，而不能是其他类型的值，其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
5. Map结构类似于对象，但是对象的属性只能是字符串，而map的key可以是任意类型，是一种值-值的结构。map的key如果是引用类型，如果引用地址不相同，则为不同的key;如果是简单类型，则只要两个值严格相等，Map 将其视为一个键，虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
6. WeakMap结构与Map结构类似，首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名，其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
### 七、Proxy
1. Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”，涉及的操作有13种。
2. Proxy.revocable()，let {proxy, revoke} = Proxy.revocable(target, handler);当执行revoke()方法时，撤销proxy实例。
