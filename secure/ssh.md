## restrict login  
1. change the default port     
    + open the `/etc/ssh/sshd_config`  
    + `Port 22 => Port 25`  
    + `sudo /etc/init.d/ssh restart ` 

2. restrict ip  
    + `/etc/hosts.allow`  
    + add `sshd 202.114.23.45` 
    + `/etc/hosts.deny`  
    + sshd:ALL  

3. check auth log  
```bash
# see who try  
who /var/log/wtmp

# switch user  
su - $username  
# see log history  
history 

```