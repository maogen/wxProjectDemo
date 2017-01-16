// pages/calculator/calculator.js
Page({
  data: {
    resultNum: "0"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  // 点击数字处理方法
  clickNumber: function (item) {
    var itemId = item.currentTarget.id;
    console.log(itemId);
    var resultData;
    if (this.data.resultNum == "0") {
      resultData = itemId;
    } else {
      resultData = this.data.resultNum + itemId;
    }
    this.setData({ resultNum: resultData });
  },
  // 点击小数点的处理
  clickDot: function () {
    var _resultNum = this.data.resultNum;
    _resultNum = _resultNum + ".";
    this.setData({ resultNum: _resultNum });
  },
  // 退格按钮处理
  backScreen: function (item) {
    var _resultNum = this.data.resultNum;
    if ("0" == _resultNum) {
      return;
    }
    _resultNum = _resultNum.substring(0, _resultNum.length - 1);
    if ("" == _resultNum || "-" == _resultNum) {
      _resultNum = "0";
    }
    this.setData({ resultNum: _resultNum });
  },
  // 清屏按钮
  clearScreen: function () {
    this.setData({ resultNum: "0" });
  },
  //正负号按钮
  nagetive: function () {
    var _resultNum = this.data.resultNum;
    if (_resultNum.startsWith("-")) {
      _resultNum = _resultNum.replace("-", "");
    } else {
      _resultNum = "-" + _resultNum;
    }
    this.setData({ resultNum: _resultNum });
  },
  //点击符号按钮+-*/%=
  clickSymbol: function (item) {
    // TODO
  }
})