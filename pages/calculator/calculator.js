// pages/calculator/calculator.js
Page({
  data: {
    // 用来显示在屏幕上的数字
    resultNum: "0",
    // 当点击+-*/%=符号时时，进行运算时保存的数，以及运算符号id
    numOne: "",
    symbolId: ""
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
    if (_resultNum.indexOf(".") <= 0) {
      _resultNum = _resultNum + ".";
    }
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
    var _numOne = this.data.numOne;
    var _resultNum = this.data.resultNum;
    var _symbolId = this.data.symbolId;

    var itemId = item.currentTarget.id;
    console.log("上一个点击的符号：" + _symbolId);
    console.log("本次点击的符号：" + itemId);

    if ("result" != itemId) {
      // +-*/%
      // 保存第一个数
      this.setData({ numOne: _resultNum });
      // 保存运算符
      this.setData({ symbolId: itemId });
      // 重置显示结果
      this.setData({ resultNum: "0" });
    } else if ("" != _symbolId) {
      // 求结果：运算符不为空
      var result = 0.0;
      if ("add" == _symbolId) {
        result = parseFloat(_numOne) + parseFloat(_resultNum);
      } else if ("sub" == _symbolId) {
        result = parseFloat(_numOne) - parseFloat(_resultNum);
      } else if ("mul" == _symbolId) {
        result = parseFloat(_numOne) * parseFloat(_resultNum);
      } else if ("div" == _symbolId) {
        if (_resultNum == "0") {
          result = "0";
        } else {
          result = parseFloat(_numOne) / parseFloat(_resultNum);
        }
      } else if ("rem" == _symbolId) {
        if (_resultNum == "0") {
          result = "0";
        } else {
          result = parseFloat(_numOne) % parseFloat(_resultNum);
        }
      }
      // 将结果显示
      this.setData({ resultNum: result });
      // 将符号值为空
      this.setData({ symbolId: "" });
    }
  }
})