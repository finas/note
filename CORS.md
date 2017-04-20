# Cross domain resource sharing

<i style="font-size:14px;opacity:0.5">写在前面:之前的跨域的理解存在偏差和误解，重新整理。</i>



#### 存在跨域的原因：
>>Same-Origin-Policy(SOP):protocal,host,and port number shoud be same.

原理：浏览与的安全策略（same-Origin-Policy），限制不同域的documents
和scripts交流。
安全：两个tab页面，标签a直接访问标签b的数据如cookie。
a.com/stealCookies.js访问icbc.com获取用户cookie破解密码。
规则：
```js
http://www.baidu.com  https://www.baidu.com   //协议不同
map.baidu.com  music.baidu.com  	  		//host不同
www.baidu.com:80  www.baidu.com:81			//端口不通
```



#### 业务场景：

4. 网站部署在子域名
2. 新的网站需要访问老业务的api（music.baidu.com访问map.baidu.com的数据或cookie)
3. 接入插件和扩展（如forum）

#### 浏览器表现：
>>For Cross-Origin HTTP requests in specific, the SOP prescribes the following general rules: Cross-Origin writes are allowed,Cross-Origin reads are not.

a.com/main.js向b.com/list发起请求,由于是cors请求，如果server端返回数据，浏览器会正常接受，但返回的数据
不允许被读取。（chrome的表现为network下此次ajax请求成功且response返回data，但是console会报cors错误，
ajax的success callack也不会被触发）



#### 解决方案：
##### 1. JSONP
>>JavaScript Notation width Padding

原理：script标签不存在跨域的限制（比如：cdn jquery）,浏览器加载js文件，然后自动执行。
实现：
```js
//客户端的代码 a.html
<script>
var replaceList=function(arr){
	//....
}
</script>
<script src="http://test.cdn.com/list?callback=replaceList></script>
```
```js
//服务器收到/list?callback=replaceList处理后返回
//responseTxt
replaceList([{
	title:'2016',
    content:'这个第一条内容'
},{
	title:'2017',
    content:'这是第二条内容'
}])
```

缺点：
1. 由于引入script标签是get请求，因为JSONP只能处理get的CORS。
2. 服务器和客户端需要严格遵守一套规则。

##### 2. Server Proxy
>>Proxy that resides in the same domain

原理:CORS的是限制是documents和scripts(客户端和服务器的交流，不限制server端之间的交流。)
实现：a.com/main.js不直接请求b.com/list而是请求a.com/list，通过后端请求b.com/list然后返回对应的状态，数据。
```js
Get  /proxy?urlToFetch=http://b.com/list
```
缺点：
1. 不能发送cookie（严重的drawback，如没有登录的状态）
2. 速度可能会变慢

##### 3.CORS
>>Including Access-Control-Allow-Origin HTTP header in the response

原理:服务端判断发起request的domain是否允许，然后设置response header Access-Control-Allow-Origin（也可以提前设置A-C-A-O)，浏览器拿到服务端的
allow-origin-domain查看发起request的domain是否符合，决定response data 能否read,interprete。
显示：
```js
HTTP/1.1 200 OK
Access-Control-Allow_origin:http://a.com
Content-Type:application/json;charset=utf-8
Content-Length:10
{
	"data":[{
    	title:'2016',
        content:'这是第一条内容'
    },{
    	title:'2017',
        content:'这是第二条内容'
    }]
}
```
缺点：
1. 老版本的ie部分支持（WTF)
2. 某些防火墙


### 总结
1. 之前理解为服务器收到CORS的请求，拒绝返回数据，真相是服务器正确返回数据，浏览器也能正常接受数据，但限制脚本对数据的读取。
2. 之前理解为服务器判断发起请求的domain，真相是浏览器判断response的allow-origin和发起请求的domain。
2. CORS通吃get和post，但需要配置服务器。
