## php vs node 

### stream-api
php

*write to $httpstream use while loop*
```php
<?php
$filenames = scandir($path);
foreach ($filenames as $filename) {
  // 往Flickr发起请求 (返回一个数据流句柄)
  $httpStream = fsockopen('api.flickr.com', 80, $errno, $errstr, 30);
  // 发送请求头
  $out =  "POST /services/upload/ HTTP/1.1\r\n";
  $out .= "Host: api.flickr.com\r\n";
  $out .= "Content-Disposition: attachment; filename=" . $filename . "\r\n";
  $out .= "Content-Type: application/octet-stream\r\n";
  $out .= "Content-Length: " . filesize($path . '/' . $filename) . "\r\n\r\n";
  fwrite($httpStream, $out);
  // 打开本地图片文件数据流
  $fileStream = fopen($path . '/' . $filename, 'r');
  // 边读边发
  while (!feof($fileStream)) { // while the fileStream is not finished
    // 一次读1KB，然后写到Flickr的HTTP数据流里
    fwrite($httpStream, fread($fileStream, 1024));
  }
  fclose($fileStream);
  fclose($httpStream);
  echo "已发送文件 " . $filename . "\n";
}
echo "齐活！\n";
```

node 

*native asynchronous stream API,but you may need a meeting point to make sure all  
the operation areclosed.*

```js
var fs      = require('fs');
var request = require('request');
var async   = require('async');
var apiUrl  = 'http://api.flickr.com/services/upload/';

var filenames = fs.readdirSync(path);
async.forEach(filenames, function(filename, callback) {
  // 打开本地图片的文件数据流
  var fileStream = fs.createReadStream(path + filename);
  // 读文件写到远端服务器
  fileStream.pipe(request.post(apiUrl));
  fileStream.on('end', callback);
}, function(err) {
  console.log(err ? err.message : '齐活！');
});
```
[oschina](https://www.oschina.net/translate/nodejs-for-php-programmers-4-streams),