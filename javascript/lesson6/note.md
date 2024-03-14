## Promise

#### promise 的三种状态

1. **Pending（待定）** ：初始状态，既不是 fulfilled（已成功）也不是 rejected（已失败）。
2. **Fulfilled（已成功）** ：操作成功完成，此时 Promise 有一个不可变的值。
3. **Rejected（已失败）** ：操作失败，此时 Promise 有一个不可变的原因。

#### 静态方法

###### Promise.resolve()

返回一个 fulfilled 状态的对象，以给定的值兑现，如果给定的值是一个 promise 对象则采用给定的 promise 的状态

###### Promise.reject()

以给定的原因拒绝

###### Promise.all()

接收一个 Promise 对象的数组，所有的 Promise 被兑现时兑现，兑现值是所有 Promise 兑现值的一个数组，如果有一个被拒绝，返回的 promise 也拒绝，返回第一个拒绝的原因

###### Promise.allSettled()

当所有给定的的 promise 被敲定时兑现，返回单个 promise，兑现值是所有 promise 的结果的数组

```typescript
Promise.allSettled([Promise.resolve(1),Promise.reject(2)]).then(v => console.log(v))
v =========> [
    {
        "status": "fulfilled",
        "value": 1
    },
    {
        "status": "rejected",
        "reason": 2
    }
]

```

###### Promise.any()

当给定的 promise 数组有一个被兑现时兑现,值为第一个兑现的值，如果所有输入的 Promise 都被拒绝（包括传入的可迭代对象为空时），返回的 Promise 将以带有一个包含拒绝原因的数组的 AggregateError 拒绝

```typescript
Promise.any([])
Promise {<rejected>: AggregateError: All promises were rejected}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: AggregateError: All promises were rejected
errors: []
message: "All promises were rejected"
stack: "AggregateError: All promises were rejected"
[[Prototype]]: Error


Promise.any([Promise.reject(1),Promise.reject(2)])
Promise {<rejected>: AggregateError: All promises were rejected}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: AggregateError: All promises were rejected
errors: [1,2] //拒绝的原因
message: "All promises were rejected"
stack: "AggregateError: All promises were rejected"
[[Prototype]]: Error
```

###### Promise.race()

接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 与第一个敲定的 Promise 的最终状态保持一致。
