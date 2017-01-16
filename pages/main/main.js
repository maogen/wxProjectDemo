// pages/main/main.js
Page({
  data: {
    "mainType": [{ "id": "index", "title": "首页" }, { "id": "arg", "title": "参数传递" }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  selectType: function (evet) {
    var eventId = evet.currentTarget.id;
    var _url = "";
    if ("arg" == eventId) {
      // 跳转到测试参数传递
      _url = "../onlineVedio/online";
    } else if ("index" == eventId) {
      _url = "../index/index";
    }
    wx.navigateTo({
      url: _url,
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