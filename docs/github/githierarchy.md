---
sidebar_position: 2
---

# Git Hierarchy
Always push in the develop branch. Never push on main or master branch.

> ticket-branch >> develop >> alpha >> beta >> main

The git hierarchy is a common branching strategy used in software development. Here's a brief overview of each branch:

`Ticket Branch:` A ticket branch is a short-lived branch that is created to address a specific issue or feature. The branch is created from the develop branch and is used to isolate changes related to the ticket.

`Develop Branch:` The develop branch is the main branch where all the features and bug fixes are integrated and tested before they are merged into a stable branch.

`Alpha Branch:` The alpha branch is a testing branch where developers can integrate new features and bug fixes into a version that can be tested by stakeholders. This branch is often used to test the stability and functionality of a software before it is released to the public.

`Beta Branch:` The beta branch is a pre-release branch that is used to test the software before it is made available to the general public. The software is tested by a group of users to identify any remaining bugs or issues that need to be fixed before the final release.

`Main Branch:` The main branch is the stable branch that contains the most recent, tested and approved version of the software. This branch should only contain code that has been thoroughly tested and is considered safe for production use.

This branching strategy allows developers to work on features and bug fixes in isolation and test them before they are merged into the stable branch. It also helps to ensure that only stable and tested code is released to the public.
