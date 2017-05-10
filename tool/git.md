# git tips

修改remote的url

``` git remote set-url origin <url> ```

git别名

``` git config --global alias.<handle> <command> ```

`git config --global alias.st status `

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
