---
sidebar_position: 3
title: Git Reset
---

# Git Reset

`git reset` is a command that allows you to reset the state of your local repository to a previous commit. It is a powerful tool that can be used to undo changes and revert your repository to a previous state.

## Syntax

The basic syntax of git reset is as follows:
```bash
git reset [options] [commit]
```

## Options
git reset has several options that can be used to modify its behavior. Here are the most commonly used options:

- `soft`: This option moves the `HEAD` pointer to the specified commit, but does not modify the index or the working directory. Any changes that were made after the specified commit will still be staged and ready to be committed.

- `mixed`: This option moves the `HEAD` pointer to the specified commit and resets the index to the state of the specified commit. Any changes that were made after the specified commit will no longer be staged for commit, but will still be present in the working directory.

- `hard`: This option moves the `HEAD` pointer to the specified commit, resets the index to the state of the specified commit, and modifies the working directory to match the state of the specified commit. Any changes that were made after the specified commit will be permanently lost.

## Usage
Resetting to a previous commit

To reset your repository to a previous commit, simply use the git reset command followed by the hash of the commit you wish to reset to:

```bash
git reset 1234567890abcdef
```
### Soft Reset
A soft reset moves the HEAD pointer to the specified commit, but does not modify the index or working directory. This means that any changes made after the specified commit will still be staged and ready to be committed.

```bash
git reset --soft 1234567890abcdef
```
This will move the HEAD pointer to the specified commit and keep all changes staged. You can then modify the staged changes and commit them again.

### Mixed Reset
A mixed reset moves the HEAD pointer to the specified commit and resets the index to the state of the specified commit. This means that any changes made after the specified commit will no longer be staged for commit, but will still be present in the working directory.

```bash
git reset --mixed 1234567890abcdef
```

This will move the HEAD pointer to the specified commit and reset the index to the state of the specified commit. You can then modify the changes in the working directory and stage them again.

### Hard Reset
A hard reset moves the HEAD pointer to the specified commit, resets the index to the state of the specified commit, and modifies the working directory to match the state of the specified commit. This means that any changes made after the specified commit will be permanently lost.

```bash
git reset --hard 1234567890abcdef
```

This will move the HEAD pointer to the specified commit, reset the index to the state of the specified commit, and modify the working directory to match the state of the specified commit. Any changes made after the specified commit will be permanently lost.
