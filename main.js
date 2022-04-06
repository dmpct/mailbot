const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    const urlLocation = isDev ? 'http://localhost:3333' : 'product';
    mainWindow.loadURL(urlLocation);
    mainWindow.webContents.openDevTools();
})