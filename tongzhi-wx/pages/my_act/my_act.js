// pages/find/find.js
var _url = require("../../utils/url.js");
import http from "../../utils/http.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
    hiddenInput: true,
    pos: 2,
    tips: 2,
    userList: [
      { face: "../../images/face1.png", name: "周颖", time: "11:30", view: 9527, content: '大家元旦快乐!', map: '北京', url: "../my_act_dy/my_act_dy", },
      { face: "../../images/face2.png", name: "王伟胜", time: "11:50", view: 2597, content: '新起点，新希望，新的启程', map: '上海', url: "../my_act_dy/my_act_dy", },
      { face: "../../images/face2.png", name: "王伟胜", time: "11:50", view: 2597, content: '新起点，新希望，新的启程', map: '上海', url: "", },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
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
  sureDel: function () {
    wx.showModal({
      title: '提示',
      content: '你确定删除此动态？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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