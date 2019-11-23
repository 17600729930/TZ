// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 2,
    tips: 2,
    shopList: [
      { imgUrl: "../../images/liwu-2.png", title: "可爱兔兔", price:'5.00',url: "", },
      { imgUrl: "../../images/liwu-2.png", title: "兔兔宝宝", price: '42.00', url: "", },
      { imgUrl: "../../images/liwu-2.png", title: "小白兔", price: '25.99', url: "", },
      { imgUrl: "../../images/liwu-2.png", title: "可爱兔兔", price: '5.00', url: "", },
      { imgUrl: "../../images/liwu-2.png", title: "兔兔宝宝", price: '42.00', url: "", },
      { imgUrl: "../../images/liwu-2.png", title: "小白兔", price: '25.99', url: "", },
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