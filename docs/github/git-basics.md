---
sidebar_position: 1
---

`Git` is a powerful version control system that helps developers to manage their codebase and track changes over time. In this article, we will look at some of the most common Git commands used in production and explain how they work.

# Creating a Branch

A `branch` in Git is a separate copy of the codebase that allows developers to work on a new feature or bugfix without affecting the main code. To create a new branch, we use the following command:

```
git checkout -b buffy/feature/dynamic-23
```

The `-b` option stands for "`branch`" and the name buffy/feature/dynamic-23 is the name of the new branch. It's a good practice to use a descriptive name that includes a `prefix (e.g. buffy)`, the `type of work (e.g. feature)`, and the `ticket name` (e.g. dynamic-23).

# Checking the Branch Name

To see the `name of the current branch`, we use the `git branch` command. This will display a list of all branches in the repository, with an `asterisk (*)` next to the current branch.

```
$ git branch -a
* buffy/feature/dynamic-23
  test-1
```

# Git Hist Alias

Git also provides a hist alias that you can use to visualize the log of the repository in a more readable format. To use this alias, you need to add the following to your Git configuration:

```
git config --global alias.hist "log --graph --date-order --date=short --pretty=format:'%C(auto)%h%d %C(reset)%s %C(green)%cr'"
```

After that, you can use the hist alias by running the following command:

```
git hist --all
```

This will show you `a graph of all the branches in your repository, and their respective commits`.

# Switching Branches

To `switch to another branch`, we use the `git checkout` command followed by the name of the branch. For example, to switch to the develop branch, we run the following command:

```
$ git checkout test-1
```

# Checking the Current Branch

To see the current branch, we can use the following command:

```
$ git branch --show-current
```

> test-1

# Visualizing the Branch History

Git provides `a graphical representation of the branch history` with the `gitk` command. To see the history of all branches, we run the following command:

```
$ gitk --all
```

# Merging Branches

Once the work on the test-1 branch is complete, we can merge it into the buffy/feature/dynamic-23 branch. To do this, we run the following command:

```
$ git merge buffy/feature/dynamic-23 --no-commit --no-ff
```

The `--no-commit` option tells Git to merge the branches without creating a merge commit, and the `--no-ff` option disables fast-forward merging, which is a Git feature that automatically merges branches without creating a merge commit.

# Checking Remote Repositories

It's also important to `check the remote repositorie`s associated with your branch. To do this, you can use the remote command with the `-v` flag. For example:

```
git remote -v
```

# Stashing Changes

In some cases, you may need to stash changes before `merging branches`. To `stash` changes, you can use the stash command. For example:

```
git stash
```

To see a list of stashes, you can run the following command:

```
git stash list
```

To apply a `stash`, you can use the `stash apply` command with the stash number. For example, git stash apply <stash_number>

For example, to apply the first stash in the list, use the following command:

```
git stash apply 0
```

It's important to note that after applying a `stash`, the stash will remain in the stash list. If you want to remove the stash, you can use the following command:

```
git stash drop <stash_number>
```

For example, to remove the first stash in the list, use the following command:

```
git stash drop 0
```

# Push to the Remote

After making your changes, it's time to `push your branch to the remote repository`. You can use the following command to do this:

```
git push origin -u buffy/feature/dynamic-23
```

This will push your branch to the remote repository and set the upstream branch. Now other developers can collaborate with you on this branch.

# Git Diff

git diff is a command in Git that allows you to view the differences between any two files, commits or branches in a Git repository. This command is very useful when you want to compare changes made to a file or a set of files, between two different points in time.

## Comparing two branches

To compare two branches, you can use the following command:

```
git diff <branch1>..<branch2>
```

This command will show you the differences between the two branches. If you want to see only the file names that are different, you can add the --name-only option:

```
git diff --name-only <branch1>..<branch2>
```

## Comparing two commits

To compare two commits, you can use the following command:

```
git diff <commit1>..<commit2>
```

This command will show you the differences between the two branches. If you want to see only the file names that are different, you can add the --name-only option:

```
git diff --name-only <commit1>..<commit2>
```

## Creating a diff file

To save the differences to a diff file, you can use the following command:

```
git diff <branch1>..<branch2> > mydiff.diff
```

This command will save the differences between the two branches to a file named mydiff.diff. If you want to save only the file names that are different, you can add the --name-only option:

```
git diff --name-only <branch1>..<branch2> > mydiff.diff
```

## Applying a diff file

To apply a diff file to your repository, you can use the following command:

```
git apply mydiff.diff
```
