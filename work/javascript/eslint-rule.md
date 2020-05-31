## eslint rule  


### + Avoid using `__proto__`. User `getPrototypeOf` instead  
```js
const foo = obj.__proto__         // avoid
const foo = Object.getPrototypeOf(obj)   // ok
```

### + Avoid multi spaces in regular expressino literals.  
```js
const regexp = /test    value/ //avoid
const regexp = /test {3}value/ //ok  
```