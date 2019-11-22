// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chongList:[
      { num: '20',price: '20', active:'active', id: '1', },
      { num: '40', price: '40', id: '2', },
      { num: '60', price: '60', id: '3', },
      { num: '80', price: '80', id: '4', },
      { num: '100', price: '100', id: '5', },
      { num: '200', price: '200', id: '6', },
    ],
    catalogSelect: 0,//判断是否选中
    peiceAll:'',
  },
  clickNum: function (data) {
    var that = this;
    console.log(data)
    that.setData({//把选中值放入判断值
      catalogSelect: data.currentTarget.dataset.select,
      peiceAll:data.currentTarget.dataset.info,
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