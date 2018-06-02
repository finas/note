## Docker


## steps
1. `docker build -t $docker_name .`
2. `docker images` find image_id  `docker run -d -p 8888:8888 $image_Id ` run image background and expose port
3. `docker ps` check container_id `docker log $container_id` see log
4. `docker exec -i -t $containter_id /bin/bash` access to the bash of container
5. `docker logs -f --tail=40` follow log the 40 tail lines


### Dockerfile
```Dockerfile

```


### access host machine from docker container
1. set up a docker network  
`docker network create -d bridge --subnet 192.168.0.0/24 --gateway 192.168.0.1 dockernet`
2. list the created network  `docker network ls`
3. make sure container to that 'dockernet' with `--net=dockernet`
 
##### OR  
you want to reach your host machine as 'localhost'  
`docker run --add-host="localhost:192.168.65.1"  
`192.168.65.1` is output by `route|awk '/^default/{print $2}'`




### sync the time zone in docker with host

 + `docker run -v /etc/localtime:/etc/localtime:ro `

### get host's ip
```js 
//node
ip = require('child_process')
      .spawnSync('curl', ['ifconfig.io'])
      .stdout
      .toString()
      .trim()

```

### remove images
+ remove specified `docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi` 
+ remove all       `docker rmi $(docker images -a -q)`


### sh
```bash
#!/bin/bash
# 说明：该脚本用于启动staticnginx服务器，模拟线上static.machtalk.net

docker stop staticserver && echo "停止服务成功！" || echo "停止服务失败！"
docker rm staticserver && echo "销毁服务成功！" || echo "销毁服务失败！"

docker run --detach \
    --name staticserver \
    --publish 80:80 \
    -v /data/staticserver/data:/usr/share/nginx/html:rw \
    -v /data/staticserver/config/nginx.conf:/etc/nginx/nginx.conf:rw \
    -v /data/staticserver/config/servers:/etc/nginx/servers:rw \
    -v /data/staticserver/logs:/var/log/nginx:rw \
    -d nginx
```


## Q&&A
1.find the str in docker logs  
`docker logs nginx 2>&1 | grep "127." `