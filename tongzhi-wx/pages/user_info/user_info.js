// pages/index/index.js
var _url = require("../../utils/url.js");
import http from "../../utils/http.js";
var _openid = "1111111111111";
// var _uid;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(val) {
    var that = this;
    that.setData({
      tempFilePaths: val.handUrl
    })
    console.log(val)
    // wx.getStorage({
    //   key: '_openid',
    //   success: function(res) {
    //     console.log(res.data)
    //     _openid = res.data = _openid
    //     // that.setData({
    //     //   _openid: res.data
    //     // })
    //   },
    // })
    // wx.getStorage({
    //   key: '_uid',
    //   success: function (res) {
    //     console.log(res.data)
    //   },
    // })
    let _openid = "";
    var _uid;
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
              url: _url.findUserInfo(),
              params: {
                "openid": _openid,
                "uid": _uid
              },
              success: (res) => {
                console.log(res.data.data)
                that.setData({
                  tempFilePaths: res.data.data
                })
              }
            })
          },
        })
      },
    })
  },

  // 获取用户信息
  getData() {
    


  },
  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
        console.log(res)
        let _openid = "";
        var _uid;
        wx.getStorage({
          key: '_openid',
          success: function(res) {
            _openid = res.data;
            wx.getStorage({
              key: '_uid',
              success: function(res) {
                _uid = res.data;
                wx.uploadFile({
                  url: _url.uploadHead(),
                  filePath: _this.data.tempFilePaths[0],
                  name: 'file',
                  formData: {
                    'openid': _openid,
                    'uid': _uid,
                    'message': _this.data.tempFilePaths[0],
                    'filetype': 'png'
                  },
                  success: function(res) {
                    console.log(JSON.parse(res.data))
                  }
                })
              },
            })
          },
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  closethis: function(e) {
    this.setData({
      tips: 0
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})