const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const aWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  aWindow.loadFile('./index.html');
}

app.whenReady().then(() => {
  createWindow();
})
