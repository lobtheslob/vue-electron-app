var path = require('path')
var electron = require('electron')
const getCerts = require('./renderer')
const ipc = electron.ipcMain



electron.app.on('ready', createWindow)

function createWindow() {
    var wnd = new electron.BrowserWindow({
        width: 325,
        height: 240,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true,
            allowEval: false,
        }
    })
    wnd.loadURL(`file://${__dirname}/src/index.html`);
    wnd.on('close', quit)
}

ipc.on('certs-start', _ => {
    console.log('starting!')

    getCerts()
        // win.webContents.send('certs')
})

function quit() {
    electron.app.quit()
}