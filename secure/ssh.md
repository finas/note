## restrict login  
1. public key  
`cat ~/.ssh/id_rsa.pub | ssh username@hostname ' mkdir -p .ssh && cat >>.ssh/authorized_keys'`  

1. change the default port     
    + open the `/etc/ssh/sshd_config`  
    + `Port 22 => Port 25`  
    + `PasswordAuthentication no `  
    + `PermitRootLogin no`
    +  save then `sudo /etc/init.d/ssh restart ` or `sudo systemctl reload ssh`

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

# vps

### First login  
```bash
# add user for login  
adduser user  
usermod -G sudo xiao  
passwd #change password

# upload key to server  in client side
ssh-keygen
scp ~/.ssh/id_rsa.pub xiao@123.456.78.90:

# add ssh folder  
mkdir ~/.ssh
touch ~/.ssh/authorized_keys

chown -R xiao:xiao ~/.ssh
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys  


#PasswordAuthentication no
#PermitRootLogin no
vi /etc/config/sshd_config 
sudo service ssh restart

```


### Find out attacker  
```
   `find /var/log  -name "auth.log*" -print0|xargs -P0 -0 grep "Failed"|awk '{print $11}'|sort|uniq -c` or`awk '/Failed password for/ ' /var/log/secure* | sed 's/.* \([[:print:]]\+\) from .*/ \1 /g ' | sort | uniq -c | sort -n -k1`  find out ssh failed attemp ip  or you may need `fail2ban`  
```


## .ssh permission

+ Home directory on the server should not be writable by others: chmod go-w /home/$USER
+ SSH folder on the server needs 700 permissions: chmod 700 /home/$USER/.ssh
+ Authorized_keys file needs 644 permissions: chmod 644 /home/$USER/.ssh/authorized_keys
+ Make sure that user owns the files/folders and not root: chown user:user authorized_keys and chown user:user /home/$USER/.ssh
+ Put the generated public key (from ssh-keygen) in the user's authorized_keys file on the server
+ Make sure that user's home directory is set to what you expect it to be and that it contains the correct .ssh folder that you've been modifying. If not, use usermod -d /home/$USER $USER to fix the issue
+ Finally, restart ssh: service ssh restart
+ Then make sure client has the public key and private key files in the local user's .ssh folder and login: ssh user@host.com