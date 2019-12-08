
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
48. `find / -type d -name "*Chrome.app"` find chrome  
49. `npm-check -u ` to check npm package health    
50. [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) to require on demand for optimizing code size.    
51. `Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5`  // Multiple types, weighted with the quality value syntax:    
52. `find . -type f -name '*.gz' -exec rm {} +` to remove all file type endwith gz  
53. `git log origin/release..HEAD --graph --decorate --oneline` show the different commit between branch 
54.  `git config --system --unset credential.helper` remove git credential cache to reauth  
55.  `git show-ref --abbrev=7 --tags`  show tag commit id  
56.  `cat .git/refs/tags/*` show git tag  
57.  `npm outdated -g`  `npm ls --depth=1` `npm la`  `npm show package version` `npm search`  `npm completion >> ~/.bashrc`    
58. ` curl cli.fyi/help`  
59. `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`
60. `nginx -V` see what it compiled with
61. `a++` is unary
62. `setw -g mode-keys vi` for tmux  
63. `export http_proxy='http://proxyServerSddress:proxyPort'` finally `unset http_proxy`  
64. `echo 050100 | xxd -p -r | netcat -o out.txt {server} {port}` test socks5 proxy
65. `git config --global core.fileMode false` ignore
66. `socat tcp-l:7654,fork,reuseaddr tcp:27.122.57.247:7654 &` `socat UDP-LISTEN:7654,fork,reuseaddr dup:27.122.57.247:7654 &` for port forward   
67. ` cp /home/sample.txt{,-old}` =>`cp /home/sample.txt /home/sample.txt-oldx`  
68. `apropos "list directory"` to recall command  
69. `curl -o /dev/null -s -w 'Establish Connection: %{time_connect}s\nTTFB: %{time_starttransfer}s\nTotal: %{time_total}s\n'  https://www.google.com` 
70. `mtr='PATH=/usr/local/sbin:$PATH sudo mtr'`  `export PATH=/opt/local/bin:/usr/local/Cellar/mtr/0.92/sbin/:$PATH`  enable mtr at mac..   
71. `who | grep -v 'via mosh' | grep -oP '(?<=mosh \[)(\d+)(?=\])' | xargs kill`  or `kill pidof mosh-server`  kill the mosh session  belong to you  
72. `git diff origin/master > patch`,`git apply --check xxx.patch`,`git apply --status xxx.patch`, `git apply --revers patch`  to update branch  
73. `ps aux | grep "[f]nord"` or `ps aux | grep -v grep | grep "fnord"` or 
74. `less -r output.txt` to view termnial-style txt  
75. `git log --all --decorate --simplify-by-decoration --graph --all --date=relative` try to figure the relationship  between branch  
76. `git branch --contains --all $branchName` show all branch(include remote) which contain current branch   
77. `sudo du -a / 2>/dev/null | sort -n -r | head -n 20` find big files  
78. `iptables-save |vi - ` to check the rule script  
79. `iptables -A INPUT -s 192.168.1.100 -p icmp -j DROP` or `iptables -A INPUT -p icmp -j DROP`  
80. `wireshark -k -i <( ssh -l root IP-of-probe /usr/bin/tshark -i eth0 -w - port 53 )` capture remote ssh network package  
81. `find -type f -print0 2>/dev/null | xargs -0 -n 10 grep -i searchstring 2>/dev/null` Redirect standard error to /dev/null  
82. `find /var/log  -name "auth.log*" -print0|xargs -P0 -0 grep "Failed"|awk '{print $11}'|sort|uniq -c` or`awk '/Failed password for/ ' /var/log/secure* | sed 's/.* \([[:print:]]\+\) from .*/ \1 /g ' | sort | uniq -c | sort -n -k1`  find out ssh failed attemp ip  or you may need `fail2ban`  
83. `du -h  -d 1 | sort -hr` see folder size  
84. `git stash save -u` stash all file  
85. The old-style backquotes \` \` do treat backslashes and nesting a bit different. The new-style $() interprets everything in between ( ) as a command.
86. `sh -x script [arg1 ...]` `bash -x script [arg1 ...]` `set -x` `set +x` debug script  
87. you need confirm your `.ssh` folder is accessible by user(you will get a key failed auth).  `chown -r owner-user:owner-group .ssh` for change to file owner  
88. replace str `grep -rl matchstring somedir/ | xargs sed -i 's/string1/string2/g'` in OSX ` sed -i "" 's/str1/str2/g'`  
89. `git reset --hard HEAD^` or `git reset --soft HEAD^` to undo a local commit .`git revert HEAD` then `git push origin` for remote  update. 
90.  `git config credential.helper cache` for temporary cache your account infor  
91. `git diff ..origin/dev|git apply` apply the diff between remote dev to local current head  in stage    
92. `cat 0021500492.json | python -m json.tool |less` for view large json file.  
93. `sudo add-apt-repository universe` then `sudo apt-get install netcat-traditional` then `sudo update-alternatives --config nc` finally `Select the option /bin/nc.traditional`  
94. `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -` for testing network speed  
95. git show head~1:/path/to/file    
96. `git rev-list --all --remotes --pretty=oneline -- src/views/trade/other.vue` get the file commit log in all history  
97. `git config --system -l` to check system check. Then `git config --system --unset credential.helper` to forget the credential .  `git config --global credential.helper store` enable credentials storage  
98. `man -k` or `apropos`  
99. `git ls-files -z | xargs -0 -n1 -I{} -- git log -1 --format="%ai {}" {} | sort` retrieve the last date of all files
