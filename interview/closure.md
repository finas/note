A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state   
(the **lexical environment**).In other words, a closure gives you access to an outer function’s scope from an inner function.  
In JavaScript, closures are created every time a function is created, at function creation time.    
#### Function factory  
```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
```   
#### Private method     
use for module design 
```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};  


var counter1 = makeCounter();
var counter2 = makeCounter();

```
