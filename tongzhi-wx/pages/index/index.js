// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 1, 
    tips:1,
    userlist:[
      { face: "../../images/face1.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face2.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face3.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face4.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face5.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face1.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face2.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face3.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face4.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
      { face: "../../images/face5.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: "../user_home/user_home" },
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