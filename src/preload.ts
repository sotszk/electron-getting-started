/*
preload.js
- renderer が web page を読み込む前に実行されるスクリプト
- preload script は HTML, DOM, および Node.js と Electron API のサブセットにアクセス可能なコンテキストで実行される
  - Electron API （モジュール）: レンダラプロセスのモジュールにアクセス可能
  - Node.js: events, url, timers
*/

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
});
