//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onReady() {
    this.popup = this.selectComponent("#popup")
  },
  show() {
    this.popup.showModal()
  }
})
