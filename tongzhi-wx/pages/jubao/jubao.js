// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 1,
    tips:1,
    juBao:[
      { name: '广告', value:'广告',},
      { name: '谣言', value: '谣言', checked:'true'},
      { name: '骗子', value: '骗子', },
      { name: '政治敏感', value: '政治敏感', },
      { name: '违法', value: '违法', },
      { name: '骚扰信息', value: '骚扰信息', },
      { name: '色情低俗', value: '色情低俗', },
    ]
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