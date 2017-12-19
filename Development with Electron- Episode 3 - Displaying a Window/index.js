const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')

let mainWindow

// Method to create new BrowserWindow that can be called when
// we need it.
function createWindow() {
  // Create a new BrowserWindow
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // Set what file we want to load for the first page
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  
  // Set what to do when the main window closes
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// Create a window when the app is ready
app.on('ready', createWindow)