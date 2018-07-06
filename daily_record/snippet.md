## Access-Control-Max-Age

The `Access-Control-Max-Age` response header indicates how long the results of a **preflight request** (that is the information contained in the `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` headers) can be cached.

    Access-Control-Max-Age: 600

Maximum number of seconds the results can be cached.
**Firefox** caps this at **24 hours** (86400 seconds) and **Chromium** at **10 minutes** (600 seconds). Chromium also specifies a default value of 5 seconds.
A value of -1 will disable caching, requiring a **preflight** OPTIONS check for all calls.



## End-to-end Hop-by-hop

+ End-to-end 端到端头部

    此类头部字段会转发给 请求/响应 的最终接收目标。
    必须保存在由缓存生成的响应头部。
    必须被转发。
+ Hop-by-hop 逐跳首部

    此类头部字段只对单次转发有效。会因为转发给缓存/代理服务器而失效。
    HTTP 1.1 版本之后，如果要使用Hop-by-hop头部字段则需要提供Connection字段。
    除了以下字段为逐跳字段，其余均为端到端字段。
    + Connection
    + Keep-Alive
    + Proxy-Connection
    + Proxy-Authenrization
    + Trailer
    + Tranfer-Encoding
    + Upgrade


### ref
<a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">http://benalman.com/news/2010/11/immediately-invoked-function-expression/</a>




## Immediately-Invoked Function Express (IIFE)
*alias:self-excuteing anoymouse funion*

```js
// Either of the following two patterns can be used to immediately invoke
// a function expression, utilizing the function's execution context to
// create "privacy."

(function(){ /* code */ }()); // Crockford recommends this one
(function(){ /* code */ })(); // But this one works just as well

// Because the point of the parens or coercing operators is to disambiguate
// between function expressions and function declarations, they can be
// omitted when the parser already expects an expression (but please see the
// "important note" below).

var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// If you don't care about the return value, or the possibility of making
// your code slightly harder to read, you can save a byte by just prefixing
// the function with a unary operator.

!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// Here's another variation, from @kuvos - I'm not sure of the performance
// implications, if any, of using the `new` keyword, but it works.
// http://twitter.com/kuvos/status/18209252090847232

new function(){ /* code */ }
new function(){ /* code */ }() // Only need parens if passing arguments

```

### ref
<a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">http://benalman.com/news/2010/11/immediately-invoked-function-expression/</a>

### ie
```html
<!-- IE 8 or below -->   
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css"  href="/Resources/css/master1300.css" />        
<![endif]-->
<!-- IE 9 or above -->
<!--[if gte IE 9]>
<link rel="stylesheet" type="text/css" media="(max-width: 100000px) and (min-width:481px)"
    href="/Resources/css/master1300.css" />
<link rel="stylesheet" type="text/css" media="(max-width: 480px)"
    href="/Resources/css/master480.css" />        
<![endif]-->
<!-- Not IE -->
<!-- [if !IE] -->
<link rel="stylesheet" type="text/css" media="(max-width: 100000px) and (min-width:481px)"
    href="/Resources/css/master1300.css" />
<link rel="stylesheet" type="text/css" media="(max-width: 480px)"
    href="/Resources/css/master480.css" />
<!-- [endif] -->
```
```js
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if (isIE () && isIE () < 9) {
 // is IE version less than 9
} else {
 // is IE 9 and later or not IE
}
```


### nginx map -> split log
```
http {

    map $status $normal {
        ~^2  1;
        default 0;
    }
    map $status $abnormal {
        ~^2  0;
        default 1;
    }
    map $remote_addr $islocal {
        ~^127  1;
        default 0;
    }

    server {

        access_log logs/access.log combined if=$normal;
        access_log logs/access_abnormal.log combined if=$abnormal;
        access_log logs/access_local.log combined if=$islocal;

    }  
}
```