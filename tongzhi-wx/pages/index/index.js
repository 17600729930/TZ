// pages/index/index.js
var _url = require("../../utils/url.js");
import http from "../../utils/http.js";
let _openid = "";
var _uid;
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
    ],
    pageno: 1,
    pagesize: 10,
    infoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: '_openid',
      success: function (res) {
        _openid = res.data;
        wx.getStorage({
          key: '_uid',
          success: function (res) {
            _uid = res.data;
            http.POST({
              url: _url.infoList(),
              params: {
                openid: _openid,
                uid: _uid,
                pageno: that.data.pageno,
                pagesize: that.data.pagesize
              },
              success: (res) => {
                // console.log(res.data.data)
                for (var i = 0; i < res.data.data.length;i++){
                  // console.log(res.data.data[i].img)
                  if (res.data.data[i].img.indexOf("https://") == -1){
                    res.data.data[i].img = _url.hosURL() + "/" + res.data.data[i].img
                  }
                }
                that.setData({
                  infoList: res.data.data
                })
              }
            })
          },
        })
      },
    })
  },

  nextXiangxi(e){
    console.log("查看用户id：", e.currentTarget.id)
    wx.navigateTo({
      url: '../user_home/user_home?userId=' + e.currentTarget.id,
    })
  },

  nextHi(){
    wx.navigateTo({
      url: '../talk/talk',
    })
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