import { app, ipcMain, BrowserWindow } from "electron";
import * as path from "path";

const createWindow = () => {
  const aWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // IPC とはプロセス間通信のこと
  ipcMain.handle("ping", () => "pong");
  aWindow.loadFile(path.join(__dirname, "..", "public", "index.html"));

  // Main Process からコンテンツへアクセスする
  // const contents = aWindow.webContents;
  // console.log(contents);
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
