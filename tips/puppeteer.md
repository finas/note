`const divCounts = await page.$$eval('div',divs=>divs.length)`  
This method runs `document.querySeletorAll` within the page and passes it as the first argument to `pageFunction`  

`page.addScriptTag(options)`
`page.content()` Gets the full HTML contents of the page,including the doctype

```js
page.click(selector,{
	button:'left',
	clickCount:1,
	delay:0	
})
```