# Base
`<base href="http://douban.com">`

affect the url related servier(eg. a.href ajax.url) 


## `<a>`

  relative url will be appened to the base url excpet the absolute path

    `<a href="/user/info"><!-- will go2 http://douban.com/user/info  -->`




## `ajax`

preflighted request will added in cross-domain request with relative path except the absolute path




## QA
+ Does the server accpet two request when ajax preflight happend
    