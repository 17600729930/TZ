// pages/index/index.js
var _url = require("../../utils/url.js");
import http from "../../utils/http.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 5,
    tips:5,
    userList:[
      { id: "1", icoImg: "../../images/ico-11.png", name: "我的动态", url:'../my_act/my_act'},
      { id: "3", icoImg: "../../images/ico-12.png", name: "升级会员", url: '../lv_up/lv_up'},
      { id: "4", icoImg: "../../images/ico-13.png", name: "我的瞳志", url: '../friend/friend'},
      { id: "5", icoImg: "../../images/ico-14.png", name: "评论", url: '../hudong/hudong',num: '2',},
      { id: "6", icoImg: "../../images/ico-15.png", name: "访客", url: '../hudong/hudong'},
      { id: "7", icoImg: "../../images/ico-16.png", name: "个人信息", url: '../user_info/user_info'},
      { id: "8", icoImg: "../../images/ico-17.png", name: "密码设置", url: '../set_password/set_password'},
      { id: "9", icoImg: "../../images/ico-18.png", name: "意见反馈", url: '../set_suggest/set_suggest'},
      { id: "10", icoImg: "../../images/ico-19.png", name: "使用帮助", url:'../set_help/set_help' },
      { id: "11", icoImg: "../../images/ico-20.png", name: "退出", },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tzNum: "123456",
    handUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  // 授权
  getUserInfo(e) {
    var that = this;

    if (e.detail.userInfo) {
      console.log("点击了同意授权");
      app.globalData.userInfo = e.detail.userInfo
      that.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        handUrl: e.detail.userInfo.avatarUrl
      })
      console.log(e.detail.userInfo);
      wx.login({
        success: function (res) {
          // console.log(res.code)
          http.POST({
            url: _url.baseURL.shouquan,
            params: {
              "code": res.code
            },
            success: (res)=> {
              console.log(res.data);
              wx.setStorage({
                key: '_openid',
                data: res.data.openid,
              })
              http.POST({
                url: _url.authlogin(),
                params:{
                  "openid": res.data.openid,
                  "nickname": e.detail.userInfo.nickName,
                  "img": e.detail.userInfo.avatarUrl,
                  "sex": e.detail.userInfo.gender
                },
                success: (res)=>{
                  console.log(res.data.data, e.detail.userInfo.nickName)
                  wx.setStorage({
                    key: '_uid',
                    data: res.data.data.id,
                  })
                }
              })
            }
          })
        }
      })
    } else {
      console.log("点击了拒绝授权");
      wx.showModal({
        content: '请先登录！',
      })
    }

  },

  handelUserClick(){
    wx.navigateTo({
      url: '../user_info/user_info?handUrl=' + this.data.handUrl,
    })
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