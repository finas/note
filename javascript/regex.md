### Tips:  
+ `?=` is a positive lookahead, a type of zero-width assertion. What it's saying is that the captured match must be followed by whatever is within the parentheses but that part isn't captured.(do not consume matched part)






1. Reg for password  
`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})` 

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
