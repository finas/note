# Multi SSH Key

## steps
#### step1
生成新的ssh key


`ssh-keygen -t rsa -f c:/Users/hlh/.ssh/id_rsa_github -C "gameBoyStay13@gmail.com" `

#### step2
将ssh key添加到ssh-agent
1. ``` eval `ssh-agent -s` ```启动ssh agent
2. `ssh-add c:/Users/hlh/.ssh/id_rsa_github` 添加到ssh agent



## commands
`ssh-agent -s `开启ssh-agent

`ssh-add -l`添加ssh-key

`ssh -T git@github.com`ssh连接测试


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


## config
    #aaa  (xiaohulu 配置)
    Host code.hub520.com
        StrictHostKeyChecking=no
        UserKnownHostsFile=/dev/null
        User chenhao@xiaohulu.com
        IdentityFile C:\Users\Dell\.ssh\xiaohulu_id_rsa 

    #github 
    Host github.com
        StrictHostKeyChecking=no
        UserKnownHostsFile=/dev/null
        User gameboystay13@gmail.com
        IdentityFile C:\Users\Dell\.ssh\id_rsa_github 