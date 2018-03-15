# typscript

#### type annotations  
*record the intended contract of the function or variable* 
```js
interface interface1{
    firstName:string,
    lastName:string
}
function foo(a1:string,a2:interface1){
    console.log(a1+a2.firstName+a2.lastName)

}
foo('test1',{firstName:'chen',lastName:'Jack'})
```