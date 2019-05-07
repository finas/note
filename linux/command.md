
1. 
<a href="<<"><<</a>,
<a href="#curl">curl</a>,
<a href="#netstat">netstat</a>,
<a href="#ssh">ssh</a>,
<a href="#virtualBox">virtualBox</a>,
<a href="#netsh">netsh</a>,
<a href="#curl">curl</a>,
<a href="#find">find</a>,
<a href="alias">alias</a>,
<a href="env">env</a>
<a href="iptable"></a>


<a id="<<"></a>
*<<*
```bash
# << is known as here-document, delimiter is seen
 wc << EOF
> one two three
> four five
> EOF
 2  5 24
```
[sf](https://askubuntu.com/questions/678915/whats-the-difference-between-and-in-bash)

<a id="curl"></a>
*curl*
```bash
#test my socks5 server status
curl --socks5-hostname [protocal]:[ip:port] http://www.baidu.com/s?wd=ip -v -i
# test download realtime and total time 
curl -x socks5://127.0.0.1:1080  -v -o /dev/null  -w 'Total: %{time_total}s\n'  http://ipv4.download.thinkbroadband.com/10MB.zip

#get reponse header params
curl --head https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.js | \
    grep -i "access-control-allow-origin"

curl -sSL -D - www.acooke.org -o /dev/null
curl -L ipapi.co/111.231.89.47

#--socks5 :use the socks5 proxy
#--socks5-hostname : resolve the DNS on the other side
#-v :show the interactive debug info
#-i
```


<a id="netstat"></a>

**netstat**
```bash
netstat -tulnp
sudo lsof -i -n -P | grep TCP  

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

<a id="alias"></a>
**alias**
```bash

# add an alias permanently  which is stored in ~/.bashrc
echo 'alias docker run -d -v /usr/code:/app $dockername node index.js' >> ~/.bashrc

# find alias
type --all $aliasName # type --all ls

# multiple commands
alias pl='pwd;ls'

# MS-DOS like 
alias dir="ls" 
alias copy="cp" 
alias rename="mv" 
alias md="mkdir" 
alias rd="rmdir" 
alias del="rm -i"

# useful

alias ls ="ls -a" #include the hidden files
alias df="df - h" #express the size as MB AND GB for better view
alias rm="rm-i"   # more interactive
alias cp="cp-i"   # the same as above 

```


<a id="env"></a>
**env**
```bash

```


<a id="iptable"></a>
**iptable**
```bash
# list rules by specification
iptables -S
iptables -S TCP
iptables -S INPUT


# list rules as Tables
iptables -L 
iptables -L INPUT

iptables -L |grep ACCEPT # policy chain default behavior  

iptables -L -v  # get the packets and bytes  

iptables -F # flush all rules  



# allow two way communication but only allow one way connections to be established  

iptables -A INPUT -p tcp --dport ssh -s 10.10.10.10 -m state --state NEW,ESTABLISHED -j ACCEPT

iptables -A OUTPUT -p tcp --sport 22 -d 10.10.10.10 -m state --state ESTABLISHED -j ACCEPT


# block all traffic except ssh
iptables -P INPUT DROP
iptables -P OUTPUT DROP
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT
iptables -A OUTPUT -p tcp --sport 22 -m state --state ESTABLISHED -j ACCEPT




# port forward but masquaerade will be abuse  
iptables -t nat -A PREROUTING -p tcp -m tcp --dport 7654 -j DNAT --to-destination 27.122.57.247:7654
iptables -t nat -A POSTROUTING -j MASQUERADE
```



## multi ping 
```
echo $(seq 254) | xargs -P255 -I% -d" " ping -W 1 -c 1 192.168.0.% | grep -E "[0-1].*?:"
#Advantage 1: You don't need to install any additional tool
#Advantage 2: It's fast. It does everything in Parallel with a timout for every ping of 1s ("-W 1"). So it will finish in 1s :)
#Advantage 3: The output is like this

#fallback
for i in $(seq 255);
do
 ping -W 1 -c 1 10.0.0.$i | grep 'from' &
done

#for plain
for i in $(seq 1 254); do ping -c1 -t 1 192.168.11.$i; done
```