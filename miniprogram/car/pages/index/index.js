Page({
  data: {
    "slides": [
      {
        "id": 5,
        "header": "全新一代发现",
        "sub_header": "DISCOVERY",
        "description": "全尺寸七座 SUV，现已接受预订。",
        "image": "https://resources.ninghao.net/landrover/discover-1.jpg"
      },
      {
        "id": 3,
        "header": "全新揽胜星脉",
        "sub_header": "RANGER ROVER",
        "description": "标新立异的前卫揽胜。",
        "image": "https://resources.ninghao.net/landrover/velar-1.jpg"
      },
      {
        "id": 6,
        "header": "发现神行",
        "sub_header": "DISCOVERY",
        "description": "发现的绝佳时刻。",
        "image": "https://resources.ninghao.net/landrover/discovery-sport-1.jpg"
      }
    ],
  },
  testDrive() {
    console.log('试驾在此处理');
  },
  readMore(event) {
    // 跳转到详情页
    let id = event.target.dataset.id; //点击的按钮 dataset 数据集
    console.log(id);
    wx.navigateTo({
      url: '/pages/vehicles/show?id=' + id, //带参数跨页面
    })
  }
})