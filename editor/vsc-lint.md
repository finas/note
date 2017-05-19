# js Lint 

安装eslint的依赖

`npm install eslint -g`


安装vsc的eslint插件

`vsc的插件市场`

## **vue lint**

安装Vue lint的依赖(可以不用eslint-config用自定义的config)

`npm install -g eslint-plugin-vue eslint-config-vue `

设置vsc的setting

    "eslint.options":{
        "extensions":[".js",".vue"]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ]

项目主目录添加.eslintrc

*参考<a href="./.eslintrc">eslintrc</a>*
