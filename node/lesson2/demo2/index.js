const moduleA = require('./a')
const moduleB = require('./b')

console.log('moduleA==========>', moduleA())
console.log('moduleB==========>', moduleB)

console.log(moduleB.test1())// b1
console.log(moduleB.test2()) // b2

