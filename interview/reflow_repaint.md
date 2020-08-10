# DOM Performance

![Rendering](https://i.imgur.com/d8KxZSw.png) 

* How the browser renders the document
  * Receives the data (bytes) from the server.
  * Parses and converts into tokens (<, TagName, Attribute, AttributeValue, >).
  * Turns tokens into nodes.
  * Turns nodes into the `DOM` tree.
  * Builds `CSSOM` tree from the `css rules`.
  * `CSSOM` and `DOM` trees are combined into a `RenderTree`.
    * Computes which elements are `visible` and their `computed styles`.
    * Starting from the root of the dom tree.
    * `Not visible` elements like (`meta`, `script`, `link`) and `display: none` are ommited from the render tree.
    * For each `visible` node, find the appropriate `matching CSSOM` `rules` and apply them.
  * Reflow: `compute` the layout of each `visible` element (position and size).
  * Repaint: `renders` the `pixels` to screen.
* Repaint
  * Occurs when changes affect the visibility.
  * Triggers examples: `opacity`, `color`, `background-color`, `visibility`.
* Reflow (Layout, LayoutFlush, LayoutThrashing)
  * Occurs when the changes affect the layout.
  * Triggers examples: `width`, `position`, `float`.
  * Recalculate of positions and dimensions.
  * Has a bigger impact, changing a single element can affect all children, ancestors, and siblings or the whole document.
  * Triggers (chagne dom or css, scrolling, user actions like `focus`).
  * `Reflow` only has a `cost` if the document has changed and `invalidated` the `layout`.
  * `Something Invalidates` + `Something Triggers` = `Costly Reflow`.

## Minimizing Repaints And Reflows

* Don't change styles by multiple statements, instead:
  * Add `class`.
  * Change the `cssText`.
* Batch DOM changes
  * Options to batch DOM changes
    * Use a `documentFragment` to hold temp changes.
    * Clone, update, replace the node.
    * Hide the element with `display: none` (1 reflow, 1 repaint), add 100 changes, restore the display (total 2 reflow, 2 repaint).
* Don't ask for computed styles repeatedly, cache them into variable.
  * Multiple reads/writes (like for the `height` property of an element)
    * Writes, then reads, from the DOM, multiple times causing document reflows.
    * Read(`cached`), write(`invalidate layout`), read(`trigger layout`).
    * To fix: read everything first then write everything.
* Resources
  * [CSSTriggers](https://csstriggers.com/).
  * [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a).
  
# Chrome DevTools Performance

Chrome provide a really great tool that helps us to figure out what is going on with our code, how many reflows (layout) and repaint do we have and more details about the memory, events, etc.

Bad code with `6` costly reflows (layout):

![Bad Code](https://i.imgur.com/gn2fElE.png) 

```js
var box1Height = document.getElementById('box1').clientHeight;
document.getElementById('box1').style.height = box1Height + 10 + 'px';

var box2Height = document.getElementById('box2').clientHeight;
document.getElementById('box2').style.height = box2Height + 10 + 'px';

var box3Height = document.getElementById('box3').clientHeight;
document.getElementById('box3').style.height = box3Height + 10 + 'px';

var box4Height = document.getElementById('box4').clientHeight;
document.getElementById('box4').style.height = box4Height + 10 + 'px';

var box5Height = document.getElementById('box5').clientHeight;
document.getElementById('box5').style.height = box5Height + 10 + 'px';

var box6Height = document.getElementById('box6').clientHeight;
document.getElementById('box6').style.height = box6Height + 10 + 'px';
```

Optimized to have `1` reflow:

![Optimized Code](https://i.imgur.com/7x2IOiQ.png) 

```js
var box1Height = document.getElementById('box1').clientHeight;
var box2Height = document.getElementById('box2').clientHeight;
var box3Height = document.getElementById('box3').clientHeight;
var box4Height = document.getElementById('box4').clientHeight;
var box5Height = document.getElementById('box5').clientHeight;
var box6Height = document.getElementById('box6').clientHeight;

document.getElementById('box1').style.height = box1Height + 10 + 'px';
document.getElementById('box2').style.height = box2Height + 10 + 'px';
document.getElementById('box3').style.height = box3Height + 10 + 'px';
document.getElementById('box4').style.height = box4Height + 10 + 'px';
document.getElementById('box5').style.height = box5Height + 10 + 'px';
document.getElementById('box6').style.height = box6Height + 10 + 'px';
```

# Performance Tips (VanillaJS, jQuery)

* Optimize Selectors
  * jQuery uses:
    * `document.querySelectorAll()`.
    * `document.getElementById()` faster.
    * jQuery selector extensions.
  * Avoid jQuery selector extensions (`:even`, `:has`, `:gt`, `:eq`).
  * Avoid complex specificity.
  * ID-Based Selectors the fastest.
* Add `style` element for chaning > 20 instead of `.css`.
* Cache Length During Loops.
* Avoid inspecting large numbers of nodes
  * `document.getElementById('id').getElementsByTagName('*')` better than `document.getElementsByTagName('*')`.
* Cache DOM values in script variables
  * `var sample = document.getElementById('test')`