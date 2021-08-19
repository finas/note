```js
const promise = new Promise((resolve, reject) => {
  console.log(1)
  Error('Some error occurred')
  reject();
})
console.log(2)
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));
```
