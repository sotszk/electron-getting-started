const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const aWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  aWindow.loadFile('./index.html');
})
