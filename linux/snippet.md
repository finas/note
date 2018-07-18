## snippet


`cal`,`uname`,`lsb_release -a`

1. **search `history` command**  
*press "CTRL+R" to search ,also support autofill*  
```(reverse-i-search)`if': ifconfig```

2. **find the primary `ll` meaning**   
```cat ~/.bashrc|grep "alias ll"```   

3. **image seed**  
    *create seed*  
    ```tar -cvf test.tar test.txt```  
    ```cat 1.png test.tar >seed.png ```  
    *get seed*  
    ```cp seed.png seed.rar```  
    then use rar to uncompress seed.rar

4. **encode info**  
    *this may be useful when post your email on internet*  
    ``` echo test@qq.com | base64 ```  
    ``` echo encoded_text | base64 -d  ```

5. **port forward**  
   + remote forward  
    `iptables -t nat -A PREROUTING -p tcp -i eth0 -d 192.168.31.147 --dport 43999 -j DNAT --to 192.168.31.147:22`  
    + local foward  
    `iptables -t nat -A OUTPUT -p tcp -d 127.0.0.1 --dport 43999 -j DNAT --top 127.0.0.1:22`  
    + check rule  
    `iptables -t nat -L -n`  
    + delete forward  
    `iptables -t nat -D PREROUTING -p tcp -i eth0 -d 192.168.31.147 --dport 43999 -j DNAT --to 192.168.31.147:22` 

6. **auto run shell**  
`/etc/init.d/foobar status`  
`sudo chmod 755 /etc/init.d/foobar`  
`sudo update-rc.d foobar defaults`     #开机时启动  
`sudo update-rc.d -f foobar remove`　　#开机时不启动   


7. **set http auth for nginx**  
`# printf "ttlsa:$(openssl passwd -crypt 123456)\n" >>conf/htpasswd`  
`# cat conf/htpasswd `  
`ttlsa:xyJkVhXGAZ8tM`  

```
# /etc/nginx/nginx.conf
    location /{
        auth_basic "nginx basic http test for ttlsa.com";
        auth_basic_user_file conf/htpasswd; 
        autoindex on;
    }
```


8 **What is my IP address**
```bash
$ curl ifconfig.co
47.91.179.51

$ http -b ifconfig.co
47.91.179.51

$ wget -qO- ifconfig.co
47.91.179.51

$ fetch -qo- https://ifconfig.co
47.91.179.51

$ bat -print=b ifconfig.co/ip
47.91.179.51

$ http ifconfig.co/country
Hong Kong

$ http ifconfig.co/country-iso
HK
```

### covert stdout to args
`echo "console.log(encodeURI('http://www.baidu.com?t=sdf 12'))"|node|xargs http GET --print=hHb`  

### awk
1. specify the sperator  use `-F`  
`awk -F: '{print $1}' /etc/passwd`  

