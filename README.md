
linux:   

  1. `openssl passwd -crypt 12345` will generate different output every time but how to check the `12345` send from client whether is same as the server.    
  2. `xargs` convert stdout to args `ls |xargs echo ` 
  3. press `c-v` in vim enter visual block then do the multi select  
  5. linux redirect  [link1](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection),[link2](https://stackoverflow.com/questions/6674327/redirect-all-output-to-file),[link3](https://www.tldp.org/LDP/abs/html/io-redirection.html),[link4](https://ryanstutorials.net/linuxtutorial/piping.php)  
  6. use `who` ,`last` to get all logined user
  7. `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -` for testing network speed  
  8. `man -k` or `apropos`  
  9.  `tail -n 20 /var/log/nginx/error.log` to find nginx problem.   
  10. `cat ~/.ssh/id_rsa.pub | ssh username@hostname ' mkdir -p .ssh && cat >>.ssh/authorized_keys'`  copy public key to server `authorized_key`. 
  11. `sudo chown -R group:user folder` change the folder user group.   
  12. `docker update --restart=no my-container` to update the running container flag    
  13. `grep --color -R --exclude-dir=node_modules '\.js"\ ` to find  
  14. `curl -v -H "Accept: application/json"  https://httpbin.org/get` will see the request header and body
  15. `curl -s -I -v   http://www.baidu.com`  simple get request and response header  
  16. `find / -type d -name "*Chrome.app"` find chrome  
  17. `npm-check -u ` to check npm package health    
  18. `curl http://www.vdberg.org/~richard/tcpping -o tcpping ` to download tcpping
  19. `cat foo.c | sed '/^\s*#/d;/^\s*$/d' | wc -l` to count-non-blank-lines-of-code-in-bash  
  20. `stty -ixon` to enable XON/XOFF flow control then you can use `ctrl-s` to reverse-reverse-i-search  
  21. `find . -type f -name '*.gz' -exec rm {} +` to remove all file type endwith gz  
  22. `curl cli.fyi/help`  
  23. `a++` is unary
  24. `setw -g mode-keys vi` for tmux  
  25. `export http_proxy='http://proxyServerSddress:proxyPort'` finally `unset http_proxy`  
  26. `echo 050100 | xxd -p -r | netcat -o out.txt {server} {port}` test socks5 proxy
  27. `socat tcp-l:7654,fork,reuseaddr tcp:27.122.57.247:7654 &` `socat UDP-LISTEN:7654,fork,reuseaddr dup:27.122.57.247:7654 &` for port forward   
  28. `cp /home/sample.txt{,-old}` =>`cp /home/sample.txt /home/sample.txt-oldx`  
  29. `apropos "list directory"` to recall command  
  30. `curl -o /dev/null -s -w 'Establish Connection: %{time_connect}s\nTTFB: %{time_starttransfer}s\nTotal: %{time_total}s\n'  https://www.google.com` 
  31. `mtr='PATH=/usr/local/sbin:$PATH sudo mtr'`  `export PATH=/opt/local/bin:/usr/local/Cellar/mtr/0.92/sbin/:$PATH`  enable mtr at mac..   
  32. `who | grep -v 'via mosh' | grep -oP '(?<=mosh \[)(\d+)(?=\])' | xargs kill`  or `kill pidof mosh-server`  kill the mosh session  belong to you  
  33. `ps aux | grep "[f]nord"` or `ps aux | grep -v grep | grep "fnord"` or 
  34. `less -r output.txt` to view termnial-style txt  
  35. `sudo du -a / 2>/dev/null | sort -n -r | head -n 20` find big files  
  36. `iptables-save |vi - ` to check the rule script  
  37. `iptables -A INPUT -s 192.168.1.100 -p icmp -j DROP` or `iptables -A INPUT -p icmp -j DROP`  
  38. `wireshark -k -i <( ssh -l root IP-of-probe /usr/bin/tshark -i eth0 -w - port 53 )` capture remote ssh network package  
  39. `find -type f -print0 2>/dev/null | xargs -0 -n 10 grep -i searchstring 2>/dev/null` Redirect standard error to /dev/null  
  40. `du -h  -d 1 | sort -hr` see folder size  
  41. `sh -x script [arg1 ...]` `bash -x script [arg1 ...]` `set -x` `set +x` debug script  
  42. you need confirm your `.ssh` folder is accessible by user(you will get a key failed auth).  `chown -r owner-user:owner-group .ssh` for change to file owner  
  43. replace str `grep -rl matchstring somedir/ | xargs sed -i 's/string1/string2/g'` in OSX ` sed -i "" 's/str1/str2/g'`  
  44. `cat 0021500492.json | python -m json.tool |less` for view large json file.  
  45. `sudo add-apt-repository universe` then `sudo apt-get install netcat-traditional` then `sudo update-alternatives --config nc` finally `Select the option /bin/nc.traditional`     
  46. `curl -s -v -X HEAD http://foo.com/bar/baz.pdf 2>&1 | grep '^< Last-Modified:'` for query website upgrade time    
  47. `socat tcp-l:4431,fork,reuseaddr tcp:152.32.191.48:4431 & socat UDP-LISTEN:4431,fork,reuseaddr dup:152.32.191.48:4431 &`  proxy  
  48. `iftop -n -N -f  "host 112.64.175.162"` filter the specified network traffic    
  49. `grep -e "search_word" -rn folder` show the line number of fined file  
  50. `echo $SHELL` or `ps -p $$` to determine current shell. 
  51. `ls -l node_modules/* | egrep "^l"` output the softlink 
  52. `find / -name art 2>/dev/null` to skip the error output. 
  53. `curl ip.sb` ,`curl ident.me` , `curl ip.cn`   
  54. `%s/phrase to delete//gc` delete word in vim. 


git:  
    1. `git show head~1:/path/to/file`    
    2. `git rev-list --all --remotes --pretty=oneline -- src/views/trade/other.vue` get the file commit log in all history.   
    3. `git config --system -l` to check system check. Then `git config --system --unset credential.helper` to forget the credential .  `git config --global credential.helper store` enable credentials storage  `git config --global core.ignorecase true`.   
    4. `git ls-files -z | xargs -0 -n1 -I{} -- git log -1 --format="%ai {}" {} | sort` retrieve the last date of all files.   
    5. `git diff origin/master > patch`,`git apply --check xxx.patch`,`git apply --status xxx.patch`, `git apply --revers patch`  to update branch.     
    6. `git reset --hard HEAD^` or `git reset --soft HEAD^` to undo a local commit .`git revert HEAD` then `git push origin` for remote  update.   
    7. `git config credential.helper cache` for temporary cache your account infor  `git config --system --unset credential.helper`. 
    8. `git diff ..origin/dev|git apply` apply the diff between remote dev to local current head  in stage     
    9. `git log --all --decorate --simplify-by-decoration --graph --all --date=relative` try to figure the relationship  between branch   
    10. `git branch --contains --all $branchName` show all branch(include remote) which contain current branch      
    11. `git config --global core.fileMode false` ignore.   
    12. `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`.   
    13. `git log origin/release..HEAD --graph --decorate --oneline` show the different commit between branch.    
    14. `gitk --all file` will show the all history of the file  `git checkout -p ` give you a change to checkout each hun individually   
    15. `unable to access 'https://github.com/xxxx/xxx.git': Failed to connect to 127.0.0.1 port 8087: Connection refused` may related to system http proxy `env|grep -i proxy`.       
    16.  `git show-ref --abbrev=7 --tags`  show tag commit id.   
    17.  `cat .git/refs/tags/*` show git tag.   
    18.  `npm outdated -g`  `npm ls --depth=1` `npm la`  `npm show package version` `npm search`  `npm completion >> ~/.bashrc`     
    19. use `git patch` cherry pick only one file  `git diff <branch>..<other-branch> --<fileName> |git apply`   
    20. `git show branch:file`  `git merge branch --no-commit --no-ff` to ignore no-diff merge .  
    21. [git ignore case default](https://stackoverflow.com/questions/52950/how-to-make-git-ignore-changes-in-case?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa).   
    22.  `git apply --3way patchFile.patch`  Typical fail case applies as much of the patch as it can, and leaves you with conflicts to work out in git however you normally do so.    
    23. `git push --follow-tags` only push tag created by `git tag -a <tagname> -m '<message>'`,`git push origin tagname` push the specified tag.   
    24. `git diff --name-only    release-1.1.19..release-1.1.31 -- '*.tsx' -- '*.ts' -- '*.less'` show the different between two commit.  
    25. `git fetch --prune --prune-tags origin` synchron remote tag with local   
    26. `git push origin branchA:branchB`  push the nickname.  
    27. `git checkout master` and `git merge <commit hash>`  .  
    28. `git log head..origin/master --name-only --no-merges `.     
    29. `git merge --no-comit --no-ff` branch & `git merge --abort` to test the merge status.  
    30. `git stash push --keep-index -u` stash un-staged,untracked.  `git stash save --patch`.   
    31. [fast-forward](https://stackoverflow.com/questions/6701292/git-fast-forward-vs-no-fast-forward-merge).   
    32. `git reset` move back the history, `git revert` add a commit.     
    33. `git add --interactive`.  
    34. `git log -u -L <upperLimit>,<lowerLimit>:<path_to_filename>` specific the line number 
    35. `git log --all --diff-filter=D --sumary`. show the deleted file.  `git checkout <SHA>^ -- /path/to/file`.  restore te file  

VSC:  
    1. `ctrl+D` add current selection to match . `Ctrl+Shift+D` + add all selection .    
    2. `ctrl+shirft+O` show symbols (quick variable,method quick goto). 
    3. `ctrl+option+P` show next problem.  
    
VIM:   
    1. `ma` set mark `a`, `'a`,`` `a ``  jump to mark `a`. `:marks` show the mark list.  

mis:  

  1. `http auth`contains `basic auth`,`digest auth`.return `401` when auth fail.  
  2. simple **http get request** `GET / HTTP/1.1/r/nHost: www.baidu.com/r/n/r/n` ,[blog](http://blog.jobbole.com/106632/?utm_source=blog.jobbole.com&utm_medium=relatedPosts)  
  3. tcp allows for retransimmsion of lst packets [gitbook](https://jerryc8080.gitbooks.io/understand-tcp-and-udp/chapter5.html) 
  4. get script error when cors [fundebug](https://blog.fundebug.com/2017/04/05/understand-script-error/)
  5. image error do not trigger window.onerror, you have to listen for them specifically [mdn](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)
  6.  [Triggering built-in events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
  7.  Synchronous JavaScript pauses parsing of the DOM delay the fired of DOMContentLoaded [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
  8.  `this` is different when use in onClick and addEventListener('click') [mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
  9.  use `db.things.find( { ln : { $exists : true } } );` to select by the  given key [nedb](https://github.com/louischatriot/nedb)
  10. use `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET` to get weixin api `access_token` [blog](https://blog.csdn.net/yasha009/article/details/51839764)  
  12. 30-seconds-of-code了解下[git](https://github.com/Chalarangelo/30-seconds-of-code#ary) 
  14. Greedy`/.+/` match as many as possible and lazy`/.+?/` as few as possible [tutorial](https://javascript.info/regexp-greedy-and-lazy) 
  15. `encodeURIComponent` will encode `=`,so encode `value` not `key=value` when encode path  
  16. server return `304` when request  `If-Modified-Since`<= response `Last-Modified` and request  `If-None-Match` `==` response `ETag`
  17. `Promise.reject(1).then(console.log).catch(console.error).then(3=>console.info(3))`
  22. [X-Forwarded-For](https://imququ.com/post/x-forwarded-for-header-in-http.html), [IP Transparency with nginx](https://www.nginx.com/blog/ip-transparency-direct-server-return-nginx-plus-transparent-proxy/)
  23. [os x locale is not set UTF-8] `locale`  `export LC_ALL=en_US.UTF-8 export LANG=en_US.UTF-8` or add `~/.bash_profile` then `source ~/.bash_profile`
  24. `w !sudo tee %` `:w #write a file` `!sudo #call shell sudo command` `tee # the output of vi/vim` `% #trigger the use of current fielname`  
  25. [set up a clean utf8 linux](https://perlgeek.de/en/article/set-up-a-clean-utf8-environment)   
  26. override `pushState` and listener for onPopState can watch the url history change. [url](./javascript/snippet.md)
  27. `echo 0 >/proc/sys/net/ipv4/icmp_echo_ignore_all` for temp allow or append `net.ipv4.icmp_echo_ignore_all=1` to `/etc/sysctl.conf` for save to disk  
  28. **Data URLS**, URLs prefixed with the `data:` scheme,allow content creators to embed small files inline in documents.  [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  29.  `require`,the path is relative to that source file(NOT root directory),`fs`,the pat is relative to `process.cwd()`(NOT that source file)  .You should use `path.resolve(__dirname,'../other/module.js')`  
  30. If the request method is `GET` or `HEAD`, `XMLHttpRequest` will ignore request body .  
  31. `require` vs `import` [link](http://www.cnblogs.com/unclekeith/p/7679503.html)  
  32. `204 No Content` is meant to say there is no body to return  
  33. `cache:http://www.baidu.com` to see the website cached by google in chrome  
  34. [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) to require on demand for optimizing code size.    
  35. `Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5`  // Multiple types, weighted with the quality value syntax:    
  36. The old-style backquotes \` \` do treat backslashes and nesting a bit different. The new-style $() interprets everything in between ( ) as a command.    
  37. `python -m SimpleHTTPServer <port_number>`  `python3 -m http.server`  
  38. `rsync -av --delete source_folder destination_folder`    
  39. `git fetch --prune --prune-tags`  ,`git log --oneline --name-status --grep='Searched phrase'`    
  40. `git log commit-id-before commit-id --stat` show the lines added/changed/deleted. (`git diff --numstat HEAD~ `). 
  41. `SELECT db_name()` get current database name.   
  42. `curl -k -O -L https://npmjs.org/install.sh`    `sh install.sh` install nodejs.    
  43. `^x.y.z` stands for version between `x.y.z` and next major .   `~x.y.z` means between `x.y.z` and next minor.   
  44. `kill $(lsof -ti:3000,3001)` kill ports in mac.    
  45. `time nmap -p 22 portquiz.net` test specified port. `time nmap portquiz.net` popular port.  `time nmap -p- portquiz.net | grep -i open` all outgoing port.(Very slow).   
  46. `rectangle`, `alttab`, `Xnip` tool in mac.   


kube:  
1. `kubectl logs -l app=elasticsearch -n namespace` get all pods log from namspace   
2. `docker kill $(docker ps -q)` stop all docker containers.   
3. `kubectl get pods -n $namespace` show all running pod under namespace.  
4. `kubectl exec --stdin --tty $podname     -n $namespace -- /bin/bash` run the shell environment. 
5. `helm search repo $name`,`helm list -n $namespace`     
