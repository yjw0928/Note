模块

非模块的时候声明同名的函数变量都会被覆盖， 根据执行的结果最终控制台会打印 a

```html
<script src="./b.js"></script>
<script src="./a.js"></script>
<script src="./c.js"></script>
```

模块的导出和导入

```
// 模块导出(单个)
function test() {
    console.log('a')
    return 'a';
}
module.exports = test

// 模块使用
const moduleA = require('./a')
console.log('moduleA==========>', moduleA()) // a



```

```javascript
// 导出多个函数
function test1() {
    console.log('b1');
}

function test2() {
    console.log('b2');
}
exports.test1 = test1;
exports.test2 = test2;

//模块使用
const moduleB = require('./b');
console.log('moduleB==========>', moduleB);
console.log(moduleB.test1()); // b1
console.log(moduleB.test2()); // b2
```
