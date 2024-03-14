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

当所有给定的的 promise 被敲定是兑现，返回单个 promise，兑现值是所有 promise 的结果的数组

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

当给定的 promise 数组有一个被兑现时兑现
