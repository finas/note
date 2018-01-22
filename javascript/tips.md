# tips

#### shorthand
Longhand:
```js
for(let i=0;i<10000;i++){}
```
Shorthand:
```js
for(let i=0;i<1e7;i++){}
```


#### Enforcing mandatory parameters via parameter default values
```js
function foo(mustBeProvied = new Error('Missing parameter')){}
```


#### Iterating over Array indices and elements via the for-of loop

```js
const arr = ['a','b','c']
for(const [index,elem] of arr.entries()){
    console.log(`index=${index},elem=${elem}`)
}
```

#### Array destructuring work for regex
```js
const [all, year, month, day] = 
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/
    .exec('2018-01-21')
```

#### Iterating over Unicode code

```js
for (const ch of 'x\uD83D\uDE80y') {
    console.log(ch.length);
}
// Output:
// 1
// 2
// 1
[...'x\uD83D\uDE80y'].length
// 3
```

#### Unique the data in array
```js
const arr = [...new Set([1,1,2,2,-1,-1])]
```

#### Covert array-like to array
```js
const arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ECMAScript 5:
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ECMAScript 6:
const arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// TypeError: Cannot spread non-iterable value
const arr3 = [...arrayLike];
```


#### Named parameters
```js
function bar(options = {}) {
    let { namedParam1, namedParam2 } = options;
}
```

#### Referring to "inner" variables in default values

```js
const QUX = 2; //remove will trigger ReferenceError
function bar(callback = () => QUX) { 
    const QUX = 3;
    callback();
}
bar(); // 2
```