## npm  
```bash
#red hat
sudo yum remove -y nodejs npm
curl -sL https://rpm.nodesource.com/setup_9.x | bash -
sudo yum install -y nodejs

curl -o- -L https://yarnpkg.com/install.sh | bash
sudo npm install yarn -g


#yum
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
sudo yum install yarn
```


### docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```


### v2ray 
```bash
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```
