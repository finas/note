### Why encode  
1.**api**  (query with uri)  
**primary**: `https://open.weixin.qq.com//authorize?redirect_uri=REDIRECT_URI&response_type=code`。  
**no encode**: `https://open.weixin.qq.com/authorize?redirect_uri=http://mydomain.com?q1=q1&q2=q2&q3=q3`。  
it is confused that the redirect_uri is `http://mydomain.com` or `http://mydomain.com?q1=q1&q2=q2&q3=q3`  

2.**get with 中文**  
```bash
GET /?t=你好 HTTP/1.1                                        
Host: kboard.xyz                                           
                                                           
HTTP/1.1 200 OK                                            
Server: nginx/1.13.10                                      
Date: Fri, 06 Apr 2018 13:47:37 GMT                        
Content-Type: application/json; charset=utf-8              
Content-Length: 20                                         
Connection: keep-alive                                     
X-Powered-By: Express                                      
ETag: W/"14-fHpApCQYE+CDuAZeBqel1tnCh/E"                   
                                                           
{"t":"ä½ å¥½"}
```  
3.**本质**  
url字符集通常使用的都是US-ASCII字符集，US-ASCII字符集使用7为二进制编码（来表示打字机提供的大多数按键和少数用于文本格式和硬件通知的不可打印控制字符（如空格）），很明显这些字符并不包含世界各国的字符，所以要将转义序列（表示方法：一个%和两个十六进制数（16进制数是符合US-ASCII字符集的））
集成进去,这样就可以用有限的US-ASCII字符集表示任意字符值了。

url转义其实只是为了符合url的规范而已。因为在标准的url规范中中文和很多的字符是不允许出现在url中的。


### different 

+ escape可以达到类似URL Encode的效果，但是它对于非ASCII字符使用了一种非标准的的实现，例如汉字“编码”会被escape成%u7F16%u7801这种%uxxxx奇怪的表示，W3C把这个函数废弃了，身为一名前端如果还用这个函数是要打脸的。
+ encodeURI被设计来用于对完整URL进行URL Encode，于是URL中的功能字符，比如&, ?, /, =等等这些并不会被转义；
+ encodeURIComponent被设计来对一个URL中的值进行转义，会把这些功能字符也进行转义。应用场景最常见的一个是手工拼URL的时候，对每对KV用encodeURIComponent进行转义。
 