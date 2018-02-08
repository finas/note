# git tips

设置 config 参数

``` git config --global user.name "link" ```

获取git 的url

``` git remote -v```


修改remote的url

``` git remote set-url origin <url> ```

git别名

``` git config --global alias.<handle> <command> ```

`git config --global alias.st status `

查找git conf的路径

```git config --list --show-origin ```

设置和切换remote(http=>ssh)

    git remote -v
    git remote set-url origin git@test.com

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

[checkout_vs_revert](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)