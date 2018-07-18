## In short
*attributes* are in your HTML text **document/file** (== imagine this is the result of your html markup parsed),

whereas *properties* are in **HTML DOM tree** (== basically an actual property of some object in JS sense).

some attribute action will synroc to property,other are not


1. `element.setAttribute('class',className)` <=> `element.className = className`

2. `input.setAttribute('checked',checked)` not trigger **the checked state of input** but `input.checked = checked` works.

## Long
A DOM element is an object, a thing in memory. Like most objects in OOP, it has properties. It also, separately, has a map of the attributes defined on the element (usually coming from the markup that the browser read to create the element). Some of the element's properties get their initial values from attributes with the same or similar names (`value` gets its initial value from the "value" attribute; `href` gets its initial value from the "href" attribute, but it's not exactly the same value; className from the "class" attribute). Other properties get their initial values in other ways: For instance, the `parentNode` property gets its value based on what its parent element is; an element always has a `style` property, whether it has a "style" attribute or not.

one example:

`<a href='foo.html' class='test one' name='fooAnchor' id='fooAnchor'>Hi</a>`

above html tag will generate the following object 

```
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             HTMLAnchorElement             |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| href:       "http://example.com/foo.html" |
| name:       "fooAnchor"                   |
| id:         "fooAnchor"                   |
| className:  "test one"                    |
| attributes:                               |
|    href:  "foo.html"                      |
|    name:  "fooAnchor"                     |
|    id:    "fooAnchor"                     |
|    class: "test one"                      |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
```

element.href is not equal with element.getAttribute('href')

Importantly, many of them are synced (if you update `class` property, class attribute in html will also be updated; and otherwise). But some attributes may be synced to unexpected properties - eg, **attribute** `checked` corresponds to **property** `defaultChecked`, so that

* manually checking a checkbox will change `.prop('checked')` value, but will not change `.attr('checked')` and `.prop('defaultChecked')` values

* setting `$('#input').prop('defaultChecked', true)` will also change `.attr('checked')`, but this will not be visible on an element.

* **Properties** are generally simpler to deal with than **attributes**. An **attribute** value may only be a string whereas a **property** can be of any type. For example, the `checked` **property** is a `Boolean`, the style **property** is an `object` with individual properties for each style, the size **property** is a `number`.

* Where both a **property** and an **attribute** with the same name exists, usually updating one will update the other, but this is not the case for certain attributes of inputs, such as `value` and `checked`: for these attributes, the **property** always represents the current state while the **attribute** (except in old versions of IE) corresponds to the default value/checkedness of the input (reflected in the defaultValue / defaultChecked **property**).


