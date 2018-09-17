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



### copy multi-dimensional array
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

### set server environment PORT and NODE_ENV

window:`set NODE_ENV=production && set PORT=7000 && node server.js`  
linux:`NODE_ENV=production PORT=7000 node server.js`


### download file without 3rd part
```js
var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.jpg");
var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
  response.pipe(file);
});
```

#### git case care
`git config core.ignorecase false`
### npm proxy set
`npm config set proxy http://proxy.company.com:8080`  
`npm config set https-proxy http://proxy.company.com:8080`  


### `$` in bash
```bash
# $() means: "first evaluate this, and then evaluate the rest of the line".
echo $(pwd)/myFile.txt
echo /my/path/myFile.txt
```


### read json in nodejs  
`var json_data = require('/path/to/local/file.json')`

### get only response header from curl
`curl -v   https://www.bilibili.com -o /dev/null`


### listen to nat port  
`app.listen(3000,'192.168.0.1')`  

### http auth  
401 no authorized  

### uri url urn  
uri (Uniform Resource Locator ) contains:url,urn


### curl test websocket  
`curl --include      --no-buffer      --header "Connection: Upgrade"      --header "Upgrade: websocket"
--header "Host: ttttt"         --header "Sec-WebSocket-Key: SGVsbG8sIHdvcmxkIQ=="      --header "Sec-WebSocket-Version: 13"     ttt/ws`