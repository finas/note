## Access-Control-Max-Age

The `Access-Control-Max-Age` response header indicates how long the results of a **preflight request** (that is the information contained in the `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` headers) can be cached.

    Access-Control-Max-Age: 600

Maximum number of seconds the results can be cached.
**Firefox** caps this at **24 hours** (86400 seconds) and **Chromium** at **10 minutes** (600 seconds). Chromium also specifies a default value of 5 seconds.
A value of -1 will disable caching, requiring a **preflight** OPTIONS check for all calls.



## End-to-end Hop-by-hpy

+ End-to-end 端到端头部

    此类头部字段会转发给 请求/响应 的最终接收目标。
    必须保存在由缓存生成的响应头部。
    必须被转发。
+ Hop-by-hop 逐跳首部

    此类头部字段只对单次转发有效。会因为转发给缓存/代理服务器而失效。
    HTTP 1.1 版本之后，如果要使用Hop-by-hop头部字段则需要提供Connection字段。
    除了一下8个字段为逐跳字段，其余均为端到端字段。
    + Connection
    + Keep-Alive
    + Proxy-Authenticate
    + Proxy-Authenrization
    + Trailer
    + TE
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