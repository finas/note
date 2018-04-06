

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