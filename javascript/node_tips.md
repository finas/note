### request right encoding  
```js
const Iconv = require('iconv-lite');
let buffer = await request.get({
    url : url ,
    encoding : null //让body 直接是buffer
});
Iconv.decode(buffer,'gbk')
```


### Running NodeJs http-server forever with PM2
`which http-server`  
`pm2 start /usr/bin/http-server --name my-file-server -- -p 8080 -d false`  