# Remote debug nodejs


server端使用```node --inspect-brk=:::9229 chromeless.js```

### 坑1
开始使用```node --inspect-brk chromeless.js```，client端的chrome打开```chrome://inspect```配置port forwarding remoteIp:port，然后没有任何感应。

测试本地 ```node --inspect-brk``` ，<strong>chrome://inspect works</strong>.

### 坑2

使用telnet 测试server端口是否打开，window下this command is not find(what's the f**k)，解决方案=>(控制面板->添加删除程序->打开telnet客户和服务端服务，then管理员命令```dism /online /Enable-Feature /FeatureName:TelnetClient```，这一步可能非必须，但我用到了。 )


### 坑3

client端 ```telnet paomianfan-test3.hub520.com 80``` 有效，但是端口9229timeout。尝试server端```telent localhost 9229``` 有效，但是 ```telnet paomianfan-test3.hub520.com``` 还是timeout。（什么鬼）

server端```netstat -tulpn |grep 9229``` 发现被占用的host是127.0.0.1。然后我开了一个node-express 端口是12801，然后client端telnet 12801端口通了，不懂继续，netstat查看占用的host是:::12801这是什么意思？127.0.0.1不通，:::却可以连接。

想起node inspect 可以选择port 使用```node --inspect-brk:::9229 chromeless.js``` ，首先netstat发现host是:::,然后client端telnet成功，chrome://inspect finally works。

### 坑4 
node chromeless.js 出错
error:connet ECONNREFUSED 127.0.0.1:9222，这么是没有启动chrome的headless的debug模式。

`google-chrome --remote-debugging-port=9222 --dsiable-gpu --headless &`




## tips

`ps -aux|grep 'whatever' //第二列是process id。`

`netstas -tulpn|grep 'port' //最后一列是processId和程序名字` 

`pkill chrome //杀掉所有chrome相关`
