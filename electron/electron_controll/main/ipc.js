const { ipcMain, clipboard } = require('electron') // clipboard 剪贴板

module.exports = function() {
  ipcMain.handle('login', async() => {
    let code = Math.floor(Math.random()*(999999 - 100000)) + 100000
    return code
  })

  ipcMain.on('share-to-wechat', async(e, code) => {
    if (code) {
      // console.log(code)
      clipboard.writeText(code.toString())
    }
  })
}
