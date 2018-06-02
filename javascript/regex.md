
### tips 
1. `.`do not match line break ,use `(/s|/S)` replace
2. match content between close tag  
```js
"<div>1<div>2</div><div>3</div></div>"
// match 2,3
/<div>(.+)<\/div>/g  //[1<div>2</div><div>3</div>],wrong
/<div>(.+?)<\/div>/g //[1<div>2,3],wrong
/<div>([^<]+)<\/div>/g //[2,3] right
```

1. ...iframe * class="test" * /iframe...  
`<iframe[^c]{0,}?class="test"[^>]{0,}?>((\n|\N)+?)<\/iframe>`