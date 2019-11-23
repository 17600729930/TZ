// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    selectPerson: true,
    firstPerson: '互动',
    selectArea: false,
    pos: 3,
    daShang: [
      { face: '../../images/face1.png', name: '周颖', time: '02-12 13:24', num: '3', id: 1, },
      { face: '../../images/face2.png', name: '天天', time: '02-12 13:24', num: '6', id: 2, },
      { face: '../../images/face3.png', name: '小李', time: '02-12 13:24', num: '3', id: 3, },
      { face: '../../images/face4.png', name: '王鑫', time: '02-12 13:24', num: '2', id: 4, },
      { face: '../../images/face2.png', name: '名人', time: '02-12 13:24', num: '1', id: 5, },
      { face: '../../images/face1.png', name: '走珠', time: '02-12 13:24', num: '6', id: 6, },
    ]
  },
  //点击选择类型
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },

  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})