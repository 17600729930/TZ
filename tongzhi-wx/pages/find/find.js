// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
    hiddenInput: true,
    pos: 2,
    tips: 2,
    srcUrl: [
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg',
    ],
    priceAll: [
      { chose: '5￥', id: "1" },
      { chose: '8￥', id: "2" },
      { chose: '10￥', id: "3" },
    ],
    userList: [
      { face: "../../images/face1.png", name: "周颖", time: "11:30", view: 9527, content: '大家元旦快乐!', map: '北京', url: "../find_comment/find_comment", },
      { face: "../../images/face2.png", name: "王伟胜", time: "11:50", view: 2597, content: '新起点，新希望，新的启程', map: '上海', url: "../find_comment/find_comment", },
      { face: "../../images/face2.png", name: "王伟胜", time: "11:50", view: 2597, content: '新起点，新希望，新的启程', map: '上海', url: "../find_comment/find_comment", },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var srcUrl = this.data.srcUrl;
    console.log(this.data.srcUrl);
    wx.previewImage({
      current: srcUrl[index],     //当前图片地址
      urls: srcUrl,               //所有要预览的图片的地址集合 数组形式
      success: function (res) {

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  chosePrice: function (data) {
    var that = this;
    console.log(that)
    that.setData({
      choseCheck: data.currentTarget.dataset.select,
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
  closethis: function (e) {
    this.setData({
      tips: 0
    })
  },
  closeHide: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  showHide: function (e) {
    this.setData({
      hiddenInput: !this.data.hiddenInput
    })
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