
1. `openssl passwd -crypt 12345` will generate different output every time but how to check the `12345` send from client whether is same as the server.    

2. `http auth`contains `basic auth`,`digest auth`.return `401` when auth fail.  

10. press `c-v` in vim enter visual block then do the multi select  

11. `xargs` convert stdout to args `ls |xargs echo ` 

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
11. Greedy`/.+/` match as many as possible and lazy`/.+?/` as few as possible [tutorial](https://javascript.info/regexp-greedy-and-lazy) 
12. `encodeURIComponent` will encode `=`,so encode `value` not `key=value` when encode path  
13. server return `304` when request  `If-Modified-Since`<= response `Last-Modified` and request  `If-None-Match` `==` response `ETag`
14. `Promise.reject(1).then(console.log).catch(console.error).then(3=>console.info(3))`
15. use `ln -s /usr/code/node_modules /node_modules` for simply require
16. use `who` ,`last` to get all logined user
17. package-lock.json  

18. [X-Forwarded-For](https://imququ.com/post/x-forwarded-for-header-in-http.html), [IP Transparency with nginx](https://www.nginx.com/blog/ip-transparency-direct-server-return-nginx-plus-transparent-proxy/)
19. [git ignore case default](https://stackoverflow.com/questions/52950/how-to-make-git-ignore-changes-in-case?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
) `git config --global core.ignorecase true`. 
20. [os x locale is not set UTF-8] `locale`  `export LC_ALL=en_US.UTF-8 export LANG=en_US.UTF-8` or add `~/.bash_profile` then `source ~/.bash_profile`
21. `w !sudo tee %` `:w #write a file` `!sudo #call shell sudo command` `tee # the output of vi/vim` `% #trigger the use of current fielname`  
22. [set up a clean utf8 linux](https://perlgeek.de/en/article/set-up-a-clean-utf8-environment)   
23. override `pushState` and listener for onPopState can watch the url history change. [url](./javascript/snippet.md)
24. `echo 0 >/proc/sys/net/ipv4/icmp_echo_ignore_all` for temp allow or append `net.ipv4.icmp_echo_ignore_all=1` to `/etc/sysctl.conf` for save to disk  
25. **Data URLS**, URLs prefixed with the `data:` scheme,allow content creators to embed small files inline in documents.  [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
26. `tail -n 20 /var/log/nginx/error.log` to find nginx problem.   
27. `cat ~/.ssh/id_rsa.pub | ssh username@hostname ' mkdir -p .ssh && cat >>.ssh/authorized_keys'`  copy public key to server `authorized_key`. 
28. `sudo chown -R group:user folder` change the folder user group.   
29. `unable to access 'https://github.com/xxxx/xxx.git': Failed to connect to 127.0.0.1 port 8087: Connection refused` may related to system http proxy `env|grep -i proxy`      
30. use `git patch` cherry pick only one file  `git diff <branch>..<other-branch> --<fileName> |git apply`  
31. `docker update --restart=no my-container` to update the running container flag    
32.  `require`,the path is relative to that source file(NOT root directory),`fs`,the pat is relative to `process.cwd()`(NOT that source file)  .You should use `path.resolve(__dirname,'../other/module.js')`  
33. `gitk --all file` will show the all history of the file  `git checkout -p ` give you a change to checkout each hun individually  
34. `grep --color -R --exclude-dir=node_modules '\.js"\ ` to find  
35. If the request method is `GET` or `HEAD`, `XMLHttpRequest` will ignore request body .  
36. `curl -v -H "Accept: application/json"  https://httpbin.org/get` will see the request header and body
37. `git show branch:file`  `git merge branch --no-commit --no-ff` to ignore no-diff merge .  
38. `require` vs `import` [link](http://www.cnblogs.com/unclekeith/p/7679503.html)  
39. `204 No Content` is meant to say there is no body to return  
40. `curl http://www.vdberg.org/~richard/tcpping -o tcpping ` to download tcpping
41. `cat foo.c | sed '/^\s*#/d;/^\s*$/d' | wc -l` to count-non-blank-lines-of-code-in-bash  
42. `git push origin :branch_name` or `git branch -r -d origin/branch` to delete remote branch  
43. `git rm -r --cached folder` to remove everything from the git index to refresh git reposity if you change some file when not ignore early .
44. `stty -ixon` to enable XON/XOFF flow control then you can use `ctrl-s` to reverse-reverse-i-search  
45. `cache:http://www.baidu.com` to see the website cached by google in chrome  
46.   `.git/config` is repo's .gitconfig file and `~/.gitconfig` is global git config     
47. `curl -s -I -v   http://www.baidu.com`  simple get request and response header  