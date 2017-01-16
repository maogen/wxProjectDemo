// pages/main/main.js
Page({
  data: {
    "mainType": [{ "id": "index", "title": "首页" }, { "id": "arg", "title": "参数传递" }, { "id": "calculator", "title": "计算器" }]
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
      // 跳转到首页
      _url = "../index/index";
    } else if ("calculator" == eventId) {
      // 跳转到计算器界面
      _url = "../calculator/calculator";
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