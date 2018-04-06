#### QA
1. which phase capturing or bubbling does onclick work on ?  
2. compare `window.onerror` with `window.addEventListener('error',handler)`
3. what's diffirent between `document.ondomcontentready` and `document.addEventListener('DOMContentLoaded')`
4. what's the listener call order when there is multi listeners ?
## addEventListener  

### `target.addEventListener(type, listener[, useCapture])`

Each handler can access event object properties:

+ event.target – the deepest element that originated the event.
+ event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
+ event.eventPhase – the current phase (capturing=1, bubbling=3).  
```js
div.onclick=e=>console.log(e.target,e.currentTarget,e.eventPhase)
span2.click()
//<span id="span2">
//<div id="div">
//3
```
**Note**: For event listeners attached to the event target, the event is in the **target phase**, rather than the **capturing** and **bubbling phases**. Events in the target phase will trigger all listeners on an element in the order they were **registered**, regardless of the useCapture parameter.


### `stopPropagation`and `stopImmediatePropagation`  
*`stopImmediatePropagation` stop all listener binded after it*  
1. *`event.target==event.currentTarget`*  
if every bind listener do not invoke `stopImmediatePropagation`,the invoke order will be same as bind order ignore useCapture.
```js
div.onclick=async(e)=>{
    e.stopPropagation() //this do not work
    //e.stopImmediatePropagation() // this will block all below listeners
    console.log('click1')
}
div.addEventListener('click',e=>{console.log('click_bubble');},false)
div.addEventListener('click',e=>{console.log('click_caputre');},true)
div.click()
//click1
//click_caputre
//click_bubble
```
2. *`event.target!=event.currentTarget`*  
capture handler will invoked as the bind order first then the bubble,`stopPropagation` will block the bubble handler,but  `stopImmediatePropagation` will block the follow handler include capture handler.
```js
div.onclick=async(e)=>{
    e.stopPropagation() //this do not work
    //e.stopImmediatePropagation() // this will block all below listener
    console.log('click1')
}
div.addEventListener('click',e=>{console.log('click_caputre');e.stopPropagation();},true)
div.addEventListener('click',e=>{console.log('click_caputre2');e.stopImmediatePropagation()},true)
div.addEventListener('click',e=>{console.log('click_caputre3');},true)
div.addEventListener('click',e=>{console.log('click_bubble');e.stopPropagation();},false)
span2.click()
//click_capture
//click_captur2
```

#### pending
1. DOM element,HTML element  
2. Adding a listener during event dispatch  



 [onerror](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)