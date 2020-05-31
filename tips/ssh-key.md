# SSH Key(git or login)


## steps
#### step1
生成新的ssh key


`ssh-keygen -t rsa -f c:/Users/hlh/.ssh/id_rsa_github -C "gameBoyStay13@gmail.com" `

#### step2
将ssh key添加到ssh-agent

1.git
1. ``` eval `ssh-agent -s` ```启动ssh agent
2. `ssh-add c:/Users/hlh/.ssh/id_rsa_github` 添加到ssh agent

2.login

1. `scp id_rsa_github.pub user@remote:~/.ssh` 



## commands
`ssh-agent -s `开启ssh-agent

`ssh-add -l`添加ssh-key

`ssh -T git@github.com`ssh连接测试

`ssh user@remote -v `ssh 啰嗦模式


## QA
1. ***ssh add agent has no identities***

   ssh key没有被添加到agent，执行`ssh-add ~/.ssh/id_rsa`

2. ***Permissions 0770 for 'id_rsa_github' are too open.***


   ssh key 没有权限被使用，执行`chmod 600 ~/.ssh/id_rsa`

3.  ***Permission denied (publickey)*** 

 - 检查是否已经连接到server,执行`ssh -T git@github.com`
 - 查看ssh key是否被添加，执行`ssh-add ~/.ssh/id_rsa`

4. ***authenticity of host 'github.com can't be established***

   添加到know_host `ssh-keyscan github.com >> ~/.ssh/known_hosts`

5. ***Authentication refused: bad ownership or modes for directory/file***
 - 检查sshd_config是否存在`RSAAuthentication yes` `PubkeyAuthentication yes`
 - 修改ssh文件的权限 `chmod 700 ~/.ssh/` `chmod 600 ~/.ssh/*`
 - 可能需要修改用户`chown -R $user:$user /home/$user  #chown root:root /home/chenhao`


## config
    Host code.hub520.com
    StrictHostKeyChecking=no
    UserKnownHostsFile=/dev/null
    User chenhao@xiaohulu.com
    IdentityFile C:\Users\Dell\.ssh\xiaohulu_id_rsa 
    
    #vm-ubuntu
    Host vm-ubuntu
    HostName 192.168.130.115
    StrictHostKeyChecking=no
    UserKnownHostsFile=/dev/null
    User link
    IdentityFile C:\Users\Dell\.ssh\link-ubuntu_id_rsa 