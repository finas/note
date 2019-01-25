
```js
/*
easily change the port without worrying about touching the right parameter, you can adjust your package.json as following:
*/
{
  "config": {
    "port": 8000,
    "folder": "dist"
  },
  "scripts": {
    "start": "http-server $npm_package_config_folder -p $npm_package_config_port",
  }
}
```