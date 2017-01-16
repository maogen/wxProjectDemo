// pages/onlineVedio/online.js
Page({
  data: { "videoType": ["iOS", "Android"] },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  selectWithId: function (item) {
    var itemId = item.currentTarget.id;
    console.log(itemId);
    wx.navigateTo({
      url: 'onlineTwo?item=' + itemId,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})