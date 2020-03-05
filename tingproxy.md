# tinyproxy  

### install 
`apt-get install tinyproxy`  

### add allow ip range  
`vi /etc/tinyproxy.conf`  
```bash
Allow 127.0.0.1
Allow 192.168.0.0/16
Allow 172.16.0.0/12
Allow 10.0.0.0/8
```  
### restart  
`service tinyproxy restart`  
