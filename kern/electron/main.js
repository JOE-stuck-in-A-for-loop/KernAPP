import { app, BrowserWindow } from 'electron'

async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  })

  await mainWindow.loadURL('http://127.0.0.1:5173')
}

app.whenReady().then(createWindow).catch(console.error)

app.on('window-all-closed', () => {
  app.quit()
})