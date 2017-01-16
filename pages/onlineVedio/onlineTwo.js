// pages/onlineVedio/onlineTwo.js
Page({
  data: {
    "itemId": "init item"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    // 获取上个界面得到的item参数
    var lastItemId = options.item;
    console.log("上个界面得到的参数：" + lastItemId);
    this.setData({ itemId: lastItemId });

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})