## Docker


## steps
1. `docker build -t $docker_name .`
2. `docker images` find image_id  `docker run -d -p 8888:8888 $image_Id ` run image background and expose port
3. `docker ps` check container_id `docker log $container_id` see log
4. `docker exec -i -t $containter_id /bin/bash`



### Dockerfile
```Dockerfile

```




### get host's ip
```js 
//node
ip = require('child_process')
      .spawnSync('curl', ['ifconfig.io'])
      .stdout
      .toString()
      .trim()

```