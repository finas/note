# git tips

设置 config 参数

``` git config --global user.name "link" ```

获取git 的url

``` git remote -v```  

查看文件的log修改。
```git log -p --  path/file ```  

查看文件的reflog
`git rev-list --all --remotes --pretty=oneline foo.txt`  


查看文件的所有的修改记录。
`git log --all -p file`  

找到那个分支含有指定的commitid  
`git branch --contains <commit> `  

修改remote的url

``` git remote set-url origin <url> ```

git 给shell 别名   
`upstream-merge = !"git fetch origin -v && git fetch upstream -v && git merge upstream/master && git push"`    

git别名

``` git config --global alias.<handle> <command> ```

`git config --global alias.st status `

查找git conf的路径

```git config --list --show-origin ```

设置和切换remote(http=>ssh)

    git remote -v
    git remote set-url origin git@test.com

diff 不同的分支  
`git diff ..branchname path/to/file`  
`git diff mybranch master -- myfile.css`  

找回删除的文件
```bash
    git rev-list -n 1 HEAD -- <file_path>  # find last file commit id
    git checkout <deleting_commit>^ -- <file_path>   # then checkout it

    git checkout $(git rev-list -n 1 HEAD -- "$file")^ -- "$file" # commbined into one line


    git log --diff-filter=D --summary # filter the delete log
```

设置pull rebase
`git config pull.rebase true`  

回滚到指定的版本

```git checkout c5f567~1 -- file1/to/restore file2/to/restore```

切换到之前的分支

``` git checkout - ```

查看log历史

    git log --reverse -10 -p <file_path>
    git log --reverse -10 -p --author="link"

找出所有分支包含commit-has

``` git branch -a --contains <commit-ish>```

暂存修改

    git stash //only tracked file
    git stash -k //only untracked file
    git stash save <message>//saving with message
    git stash save --all //ignored,untracked,trancked
    git checkout stash@{0} --<file_path>
    git diff --name-only stash@{0} master //stashed file name-only 
    git stash show -p //diff between stash and HEAD
    git stash show -p stash@{1}//


过滤commit内容

    git log --reverse --grep="update"

移除指定的commit
- 带有的log的revert 安全模式

    ``` git revert --strategy resolve <commit> ```
- 使用rebase的pick和drop

    ``` git rebase i HEAD~5  ```

- 快速移除一个指定的commit

    ``` git rebase --onto commit-id^ commit-id ```



git pre-commit检查
```bash
#!/bin/sh
jsfiles=$(git diff --cached --name-only --diff-filter=ACM "*.js" "*.jsx" | tr '\n' ' ')
[ -z "$jsfiles" ] && exit 0

# Prettify all staged .js files
echo "$jsfiles" | xargs ./node_modules/.bin/prettier --write

# Add back the modified/prettified files to staging
echo "$jsfiles" | xargs git add

exit 0
```
或者你需要加入`.git/hooks/post-commit`  
```bash
#!/bin/sh
git update-index -g
```



[checkout_vs_revert](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)