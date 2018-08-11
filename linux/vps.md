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