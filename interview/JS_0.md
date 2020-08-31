#### Data Type    
Primary: `Undefined`,`Null`,`Number`,`String`,`Symbol`,`Boolean`

Refer:`Object`(`function`,`Array`,`Date`).  

Primary is stored in *stack*,Refer store in *stack/heap*.  


#### Get Data Type    

1. typeof  
It do right work with primary except null   
```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);             // object   
```  

2. instanceof  
Good with refer  
```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                    //true    
```


3. constructor  
```js 
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```   



4. toString  
```js 
var a = Object.prototype.toString;
console.log(a.call(2));//[object Number]
console.log(a.call(true));//[object Boolean]
console.log(a.call('str'));//[object String]
console.log(a.call([]));//[object Function]
console.log(a.call(function(){}));//[object Function]
console.log(a.call({}));//[object Object]
console.log(a.call(undefined));//[object Object]
console.log(a.call(null));//[object Null]
```
