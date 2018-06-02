## `<base href="http://douban.com">`

affect the url related servier(eg. `<a>` `ajax`) 


## `<a>`

  relative url will be appened to the base url excpet the absolute path

    `<a href="/user/info"><!-- will go2 http://douban.com/user/info  -->`




## `ajax`

preflighted request will added in cross-domain request with relative path except the absolute path




### QA
+ Would server accpet double  same requests when ajax preflight happend ?





### ANSWER
1. handle the option request to prevent same request //it can be a strange action if there is a add or delete action 

    