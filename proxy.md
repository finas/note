### git
```bash
git config --global http.proxy  http://127.0.0.1:1087
git config --global https.proxy 'socks5://127.0.0.1:1087'
git config --global  --get http.proxy
git config --global --unset https.proxy
```


### yarn 

```bash
yarn config set https-proxy http://127.0.0.1:1087
yarn config set proxy http://127.0.0.1:1087
yarn config list
yarn config delete proxy
```


### npm

```bash
npm config set proxy  http://127.0.0.1:1087
npm config set https-proxy http://127.0.0.1:1087
npm config list
npm config delete https-proxy
```


### check proxy
`env | grep -i proxy`
