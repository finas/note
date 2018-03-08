# permission

#### list all users
+ `cat /etc/passwd` // show all user include process
+ `compgen -u` // short only display name
+ `cd /home` `ls` // not precise

#### create a new sudo user
1.`adduser $username` // create a user   
2. `usermod -aG sudo $username` // then assign to sudo group  
3. `su - $username` //now you can switch 


#### give specific user permission to write folder
+ `sudo chown userName: folderName` // change the folder owner to userName  `sudo chmod u+w` // add the write permission to the username user
+ `sudo usermod -a -G groupname username` // add user to the group `sudo chmod g+w folderName`
