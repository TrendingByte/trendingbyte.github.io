---
sidebar_position: 1
---

# Use Electron with React

In this post, we'll explore how to use Electron with React to build cross-platform desktop applications. Electron is an open-source framework that allows developers to create native desktop applications using web technologies such as HTML, CSS, and JavaScript. React is a popular JavaScript library used for building user interfaces.
To get started, open your terminal and run the following code to create a new React application:
```
create-react-app <app-name>
cd <app-name>
code .
```

Next, we need to install some dependencies. In your terminal, enter the following code:
```
npm i concurrently wait-on cross-env electron
```

Once the dependencies are installed, we need to configure our `package.json` file. Check your Electron version in the `dependencies` section and add the following scripts to the `scripts` section of the file:
```
"electron:serve": "concurrently -k \"cross-env BROWSER=none npm start\" \"npm run electron:start\"",
"electron:build": "yarn build && electron-builder -c.extraMetadata.main=build/main.js",
"electron:start": "wait-on tcp:3000 && electron ."
```

We also need to add the following lines to the `package.json` file:This code added above scripts
```
"main": "public/main.js",
"homepage": "./",
```
These lines tell Electron where to find the main entry point for the application and the root URL for the app.

Next, create a `main.js` file in the `public` folder and add the following code:
```
// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```
This file creates a new browser window and loads the React application at `http://localhost:3000`. You can customize the window's size and other properties as needed.

Finally, run the following command in your terminal to start your Electron React application:
```
npm run electron:serve
```
This will launch your React application in a new Electron window, allowing you to build and test your desktop application using web technologies.

In conclusion, using Electron with React is a powerful way to build cross-platform desktop applications. With a few simple steps, you can create a fully functional desktop application using web technologies. If you're interested in learning more about Electron and






