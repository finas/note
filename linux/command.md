
1. <a href="#curl">curl</a>,
<a href="#netstat">netstat</a>,
<a href="#ssh">ssh</a>,
<a href="#virtualBox">virtualBox</a>,
<a href="#netsh">netsh</a>,
<a href="#curl">curl</a>,
<a href="#find">find</a>,


<a id="curl"></a>
*curl*
```bash
#test my socks5 server status
curl --socks5-hostname [protocal]:[ip:port] http://www.baidu.com/s?wd=ip -v -i

curl --head https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.js | \
    grep -i "access-control-allow-origin"

#--socks5 :use the socks5 proxy
#--socks5-hostname : resolve the DNS on the other side
#-v :show the interactive debug info
#-i
```


<a id="netstat"></a>

**netstat**
```bash
netstat -tulnp

#--t tcp protocal
#--u udp protocal
#--l listening server sockets

```
<a id="ssh"></a>


**ssh**
```bash
# allow password for specified user
# ssh_config
PasswordAuthentication no
Math User <username>
    PasswordAuthentication yes

```

<a id="virtualBox"></a>

*virtualBox*
```bash
# List virtual machines
VBoxManage list vms
"MyVM" {e4b0c92c-4301-4a7d-8af8-fe02fed00451}

# Start VM in headless mode
VBoxManage startvm MyVM --type headless

# Power off VM
VBoxManage controlvm MyVM poweroff
```

<a id="netsh"></a>
**netsh** (*window*)
```dos
rem 假定需要通过192.168.1.8的14941端口连接192.168.1.118的1494端口，则需要在192.168.1.8主机的命令行输入如下语句
rem 如果已经安装IPV6，该条语可以不需要
netsh  interface ipv6 install
rem 可不用指定本地监听地址，这样可以通过操作系统提供浮动地址来实现，如果操作系统开启了主机防火墙，需要放行TCP 14941的入站连接

netsh interface portproxy add v4tov4 listenaddress=192.168.1.8 listenport=14941 connectaddress=192.168.1.118  connectport=1494

netsh interface portproxy add v4tov4                           listenport=14941 connectaddress=192.168.1.118  connectport=1494

rem取消上面配置的端口转发，可以用如下语句：

netsh interface portproxy delete v4tov4 listenaddress=192.168.1.8  listenport=33891
rem如果想查看已经配置了哪些端口转发，可以用如下语句：

netsh interface portproxy show  v4tov4
```

<a id="find"></a>
**find**
```bash
# remove error message during find ing
find /code -name '*.jpg' 2>/dev/null
```