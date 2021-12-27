

1. ### find the vimrc
enter `:version` 
enter `:echo $VIM`
enter `:echo $HOME`

2.  ### Search and replace the word under the cursor

+ Put the cursor on foo.
+ Press <b>*</b> to search for the next occurrence.
+ Type **ciw** (change inner word) then bar then press Escape.
+ Press **n** (move to next occurrence) then **.** (repeat change).
+ Repeat last step.

```bash
* -> ciw -> n -> .
find->replace->next occurance -> repeat action
```

3. ### comment or uncomment multi line

+ press `ESC` 
+ press `ctr+v` (visual block mode)
+ up/down arrow to select lines 
+ `shit+i` 
+ insert `#`
+ press `ESC` `ESC` 


4. ### encoding.  
```bash 
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8
```

5. ### replace. 
```vim
:%s/\<foo\>/bar/gc
```

6. ### sublime 
```json
//settings 
{
    "ignored_packages":[],
    "vintage_ctrl_keys": true
}
//key-binds 
{ 
    "keys": ["command+c"], "command": "exit_insert_mode",
    "context":[
        { "key": "setting.command_mode", "operand": false },
        { "key": "setting.is_widget", "operand": false }]
}
```

7. ### visual studio code. 
```json
//settings 
"vim.insertModeKeyBindings": [{
    "before":["j","j"],
    "after":["<Esc>","l"]
}]. 

```
