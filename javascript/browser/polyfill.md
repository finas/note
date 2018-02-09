
1. <a href="#ready">Jquery ready function</a>
2. <a href="#triggerEvent">trigger html event</a>
3. <a href="#getDaysInOneMonth">getDaysInOneMonth</a>
3. <a href="#setShortTimeout">setShortTimeout</a>








<a id="ready"></a>
*excute the function after dom content has loaded*

```js
function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    // do something
});
```


<a id="triggerEvent"></a>

*may helpful when trigger event in plain js*
```js
function triggerEvent(el, type){
   if ('createEvent' in document) {
        // modern browsers, IE9+
        el.dispatchEvent(new Event(type,{
            "bubbles":true,
            "cancelable":false
        }))
    } else {
        // IE 8
        var e = document.createEventObject()
        e.eventType = type
        el.fireEvent('on'+e.eventType, e)
    }
}
triggerEvent(document.querySelector('input'),'focus')
```


<a id="getDaysInOneMonth"></a>


*calculate how many days in specified month*

```js
function getDaysInOneMonth(year, month){  
  month = parseInt(month, 10);  
  var d= new Date(year, month, 0);  
  return d.getDate();  
}  

getDaysInOneMonth(2018,2)
```

<a id="setShortTimeout"></a>

*setTimeout with a shorter delay*  
*for reason[Timeouts throttled to >=4ms](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)*
```js
// Only add setZeroTimeout to the window object, and hide everything
// else in a closure.
(function() {
    var timeouts = [];
    var messageName = "zero-timeout-message";

    // Like setTimeout, but only takes a function argument.  There's
    // no time argument (always zero) and no arguments (you have to
    // use a closure).
    function setZeroTimeout(fn) {
        timeouts.push(fn);
        window.postMessage(messageName, "*");
    }

    function handleMessage(event) {
        if (event.source == window && event.data == messageName) {
            event.stopPropagation();
            if (timeouts.length > 0) {
                var fn = timeouts.shift();
                fn();
            }
        }
    }

    window.addEventListener("message", handleMessage, true);

    // Add the one thing we want added to the window object.
    window.setZeroTimeout = setZeroTimeout;
})();
```