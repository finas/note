
1. <a href="#ready">Jquery ready function</a>
2. <a href="#triggerEvent">trigger html event</a>








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