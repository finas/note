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
```js
const promise = new Promise(res => res(2));
promise.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });
```
