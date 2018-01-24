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

#### iterate through key-value gracefully
```js
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
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


#### Converting an Object to a Map

```js
const obj = { foo: 'bar', baz: 42 }; 
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

//pitfall

```

#### Named parameters
```js
function bar({ namedParam1, namedParam2 }) {
    console.log({ namedParam1, namedParam2 })
}
bar({namedParam1:1,namedParam2:2})
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

#### funny destructuring

```js
// 
const {length:len} = 'abc'     // len = 3
const {toString:s} = 123       // s = Number.prototype.toString
const { prop: x } = undefined; // TypeError

//default value
// undefined triggers default values
const {x:y=-1} = {z:2} // y = -1 
const [{prop:x} = {prop:-1}] = [] //x = -1 
const [x=1] = [undefined]; // x = 1 
const [{ prop: x=123 } = {}] = [{}] //x = 123


// Array pattern only work with iterables
const [x] = {x:1} // Type Error, empty objects are not iterable 

```

#### new Math methods

```js
Math.truc(-3.9) //-3
Math.hypot(3,4) //5
Math.sign(-8)  //-1 to be indicated positive ,negative or zero

```

#### new others
```js
const obj = {
    ['h'+'ello'](){
        return 'hello'
    }
}
obj.hello() // hello


Object.assign(obj={a:1},{a:2,b:3}) //obj = {a:2,b:3}
Object.assign(obj,{a:5}) //obj = {a:5,b:3}

//Typed Arrays for JPEG SOF0 decoder 
```

[es6](http://exploringjs.com/es6)