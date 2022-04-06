const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;
 
app.on('ready', () => {
    // require('@electron/remote/main').initialize();
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    const urlLocation = isDev ? 'http://localhost:3000' : 'product';
    //require('@electron/remote/main').enable(mainWindow.webContents);
    mainWindow.loadURL(urlLocation);
    // mainWindow.webContents.openDevTools();
    // ipcMain.on('message', (event, arg) => {
    //     event.reply('reply', 'hello from main!');
    // })
    // let secondWindow = new BrowserWindow({
    //     width: 400,
    //     height: 300,
    //     webPreferences: {
    //         nodeIntegration: true
    //     },
    //     parent: mainWindow
    // });
    // secondWindow.loadFile("second.html");
})