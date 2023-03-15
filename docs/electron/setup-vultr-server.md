---
sidebar_position: 1
---

# Setting UP Vultr Server

Welcome to the documentation for setting up a `Vultr server` with Ubuntu for **hosting web applications**. In this documentation, we will guide you through the steps required to set up a `Vultr server` for `TrendingByte` projects. We will cover the following topics:

1. Creating a new user with **sudo access**
2. Updating the machine and installing required packages
3. Creating the **directory structure** for the projects
4. Creating an `FTP` user for uploading project files
5. Installing `WinSCP` for file transfer
6. Installing `pm2` for process management

## Step 1: Creating a new user

Use terminal to login as `root` using `ssh`. For example,
``` 
ssh root@139.180.217.104
```
Create a new user with the following command:
``` 
adduser su_trendingbyte
```
Create a new sudo user with the following command: 
```
adduser su_trendingbyte sudo
```
Make sure to use a strong password (using `a-zA-Z0-9_`).

## Step 2: Updating the machine and installing dependencies

Once the **new user** is created, update the machine by running the following command:
```
sudo apt-get update && sudo apt-get upgrade
```
Install `nvm` with the following commands:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
Once NVM is installed, install Node.js v16 LTS using the following command:
```
nvm install 16.16.0
```
After installing Node.js, install yarn globally using the following command:
```
npm install -g yarn
```
## Step 3: Creating the Directory Structure for the Projects

Create the following directory structure under the home directory of the new user:

    /home/su_trendingbyte/trendingbyte
    ├── clients_projects
    ├── projects
    │   ├── tb_trendingbyte_backend
    │   ├── tb_ecommerce_backend
    │   └── tb_school_admin
    └── others
## Step 4: Setting up FTP user

  - Install WinSCP.
  - Follow the instructions from DigitalOcean tutorial to set up vsftpd for a user's directory on Ubuntu.
  - Open port 22 for use with WinSCP by running the following command: sudo ufw allow 22.

## Step 5: Uploading project files

  To upload files to the remote server, install an FTP client like WinSCP on your local machine.
  Set all permissions for the su_trendingbyte folder for FTP using the following command: 
  ```
  sudo chmod -R 777 /home/su_trendingbyte.
  ```
  Use WinSCP to upload project files to the remote server.  

## Step 6: Deploying projects with PM2

Install PM2 process manager with the following command: 
```
npm install -g pm2.
```
Use the following commands for the most common PM2 tasks:
  - `pm2 startup`: generates another command that you need to run for once and for the first time.
  - `pm2 list`: view all running projects.
  - `pm2 start`: start a new project. Example usage: 
```
pm2 start "yarn --cwd /home/su_trendingbyte/tb_trendingbyte/tb_genz_trendingbyte run dev" --name "tb_genz_trendingbyte : 11011"
```
```
pm2 start <id>
```
  - `pm2 restart`: restart a project if needed.
  - `pm2 stop`: stop a project. Example usage: 
  ```
  pm2 stop 7 
  ```
  where 7 is the process ID.
  - `pm2 delete`: delete a project. Example:
  ```
  pm2 delete 7 
  ```


