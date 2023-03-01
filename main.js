const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const aWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  aWindow.loadFile("./index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
