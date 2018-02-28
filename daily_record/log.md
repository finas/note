## log

#### Fastest way to copy file in node.js
```js
fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'))
//readStream emit end event and writeStream emit finish/close event
fs.createReadStream('test.log').on('end',()=>{}).pipe(fs.createWriteStream('newLog.log').on('finish',()=>{}))
```


### Read a file one line at a time in node.js
```js
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('file.in')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});
```

#### format code in Visual Studio Code (VSCode)
1. `"editor.formatOnSave": true`
2. Shift+Alt+F


#### Array.prototype.reduce()
```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
```


#### What is my IP address
```bash
$ curl ifconfig.co
47.91.179.51

$ http -b ifconfig.co
47.91.179.51

$ wget -qO- ifconfig.co
47.91.179.51

$ fetch -qo- https://ifconfig.co
47.91.179.51

$ bat -print=b ifconfig.co/ip
47.91.179.51

$ http ifconfig.co/country
Hong Kong

$ http ifconfig.co/country-iso
HK
```

#### Cross-Domain Cookies
```php
header("Access-Control-Allow-Origin: http://origin.domain:port");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, *");
```
```js
type: "get",
url: link,
crossDomain: true,
dataType: 'json',
xhrFields: {
  withCredentials: true
}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```


#### copy multi-dimensional array
```js
function copy(o) {
   var out, v, key;
   out = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       out[key] = (typeof v === "object") ? copy(v) : v;
   }
   return out;
}

JSON.parse(JSON.stringify(cloneThis));

```