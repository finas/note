# Editor config

## eslint


### step1:install eslint

    npm install -g eslint

    eslint --init

    eslint test.js

    eslint test.js --fix

### step2:install editor extension
+ sublime
    + SublimeLinter
    + SublimeLinter-contrib-eslint
+ vscode
    + ESlint

### step3:eslint config
+ sublime
    + .eslintrc 
     
            {
                "extends":["eslint:recommended"],
                "parserOptions": {
                    "ecmaVersion": 6,
                    "sourceType": "module",
                    "ecmaFeatures": {
                        "jsx": true
                    }
                },
                "rules": {
                    "semi": 1,
                    "no-console":["error",{"allow":["warn","error","log"]}]
                },
                "plugins":["vue"],
                "globals":{
                    "window":true,
                    "Service":true,
                    "Vue":true,
                    "$":true,
                    "_info":true,
                },
                "env":{
                    "browser":true,
                    "node":true
                }
            }
     
+ vscode
    + .eslintrc 
    + .vscode/settings.json --.vue support    
         
           "eslint.validate": [
                "javascript",
                "javascriptreact",
                "html",
                "vue"
            ]
## VSC
`sync->gist`

`terminal->cmder`

`font->	 "Fira Code`

    {
        "editor.tabSize":2,
        "editor.detectIndentation":false
    }

    
shortcut

    ctrl+j:toggle terminal 
    ctrl+k,Z:toogle zen mode
    alt+left/right:navigate back/forward
    shift+alt_left/right:shrink/expand selection
    f12:go to definition
    shift+f12:peek defnintion