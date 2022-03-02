const {app, BrowserWindow} = require('electron') 

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 600,
      // frame: false
    })
  
    win.loadFile('index.html')
    // win.webContents.openDevTools()
  }
  app.whenReady().then(() => {
    createWindow()
  })