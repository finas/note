
# addEventListener VS onclick

#### QA
1. which phase capturing or bubbling does onclick work on ?
2. caniuse neither of them in any siutation ?
3. what's diffirent between `document.ondomcontentready` and `document.addEventListener('DOMContentLoaded')`

## `element.addEventListener()`

`element.addEventListener()` has multiple advantages:

+ Allows you to register unlimited events handlers and remove them with `element.removeEventListener()`.
+ Has `useCapture` parameter, which indicates whether you'd like to handle event in its **capturing or bubbling phase**.
+ Cares about **semantics**. Basically, it makes registering event handlers more explicit. For a beginner, a function call makes it obvious that something happens, whereas assigning event to some property of DOM element is at least not intuitive.
+ Allows you to **separate document structure (HTML) and logic (JavaScript).** In tiny web applications it may not seem to matter, but it does matter with any bigger project. It's way much easier to maintain a project which separates structure and logic than a project which doesn't.
+ Eliminates confusion with correct event names. Due to using inline event listeners or assigning event listeners to .onevent properties of DOM elements, lots of inexperienced JavaScript programmers thinks that the event name is for example `onclick` or `onload`. on is **not a part of event name**. Correct event names are click and load, and that's how event names are passed to `.addEventListener()`.
+ Works in almost all browser. If you still have to support IE <= 8, you can use a polyfill from MDN.


## `element.onevent = function() {} (e.g. onclick, onload)`

This was a way to register event handlers in DOM 0. It's now discouraged, because it:

+ Allows you to register **only one** event handler. Also removing the assigned handler is not intuitive, because to remove event handler assigned using this method, you have to revert `onevent` property back to its initial state (i.e. `null`).
+ Doesn't **respond to errors** appropriately. For example, if you by mistake assign a string to window.onload, for example: window.onload = "test";, it won't throw any errors. Your code wouldn't work and it would be really hard to find out why. `.addEventListener()` however, would throw error (at least in Firefox): TypeError: Argument 2 of EventTarget.addEventListener is not an object.
+ Doesn't provide a way to choose if you want to handle event in its capturing or bubbling phase.




## extra
the DOM "load" event still does only work very limited. That means it'll only fire for the `window object`, `images` and `<script>` elements for instance. The same goes for the direct onload assignment. There is no technical difference between those two. Probably `.onload =` has a better cross-browser availabilty.

However, you cannot assign a `load event` to a `<div>` or `<span>` element or whatnot.



[stackoverflow](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick)