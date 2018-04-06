
1. `openssl passwd -crypt 12345` will generate different output every time but how to check the `12345` send from client whether is same as the server.    

2. `http auth`contains `basic auth`,`digest auth`.return `401` when auth fail.  

10. press `c-v` in vim enter visual block then do the multi select  

11. `xargs` convert stdout to argus `ls |xargs echo ` 

12. There may be some relations between `ls|wc|xargs` and `fetch(url).then(getResponse).then(handleData)`  

3. simple **http get request** `GET / HTTP/1.1/r/nHost: www.baidu.com/r/n/r/n` ,[blog](http://blog.jobbole.com/106632/?utm_source=blog.jobbole.com&utm_medium=relatedPosts)  

2. tcp allows for retransimmsion of lst packets [gitbook](https://jerryc8080.gitbooks.io/understand-tcp-and-udp/chapter5.html) 
1. get script error when cors [fundebug](https://blog.fundebug.com/2017/04/05/understand-script-error/)
2. image error do not trigger window.onerror, you have to listen for them specifically [mdn](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)
3. [Triggering built-in events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
4. Synchronous JavaScript pauses parsing of the DOM delay the fired of DOMContentLoaded [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
5. `this` is different when use in onClick and addEventListener('click') [mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
6. use `db.things.find( { ln : { $exists : true } } );` to select by the  given key [nedb](https://github.com/louischatriot/nedb)
6. use `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET` to get weixin api `access_token` [blog](https://blog.csdn.net/yasha009/article/details/51839764)  
7. axios-retry 了解下[git](https://github.com/softonic/axios-retry)  
8. 30-seconds-of-code了解下[git](https://github.com/Chalarangelo/30-seconds-of-code#ary)
9. linux redirect 了解下 [link1](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection),[link2](https://stackoverflow.com/questions/6674327/redirect-all-output-to-file),[link3](https://www.tldp.org/LDP/abs/html/io-redirection.html),[link4](https://ryanstutorials.net/linuxtutorial/piping.php)  
10. 微信开发 了解下 [test](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index), [sf](https://segmentfault.com/a/1190000009045051)