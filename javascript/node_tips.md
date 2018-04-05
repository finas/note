### request right encoding  
```js
const Iconv = require('iconv-lite');
let buffer = await request.get({
    url : url ,
    encoding : null //让body 直接是buffer
});
Iconv.decode(buffer,'gbk')
```