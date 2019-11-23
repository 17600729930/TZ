// pages/index/index.js
var _url = require("../../utils/url.js");
import http from "../../utils/http.js";
let _openid = "";
var _uid; // 登录用户id
var userId; // 查看用户id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
    userHome: [
      { face: "../../images/face1.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
    ],
    priceAll:[
      {chose:'5￥',id:"1"},
      { chose: '8￥',id:"2"},
      { chose: '10￥',id:"3" },
    ],
    choseCheck:0,
    userAct:[
      { actimg:'../../images/user_img1.png',},
      { actimg: '../../images/user_img2.png', },
      { actimg: '../../images/user_img1.png', },
      { actimg: '../../images/user_img2.png', },
      { actimg: '../../images/user_img1.png', },
      { actimg: '../../images/user_img2.png', }
    ],
    huiHeart: "../../images/ico-21.png",
    colorHeart: "../../images/ico-211.png",
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '设置备注', url: '../set_beizhu/set_beizhu', },
      { bindtap: 'Menu2', txt: '举报', url: '../jubao/jubao', },
      { bindtap: 'Menu3', txt: '删除好友', }
    ],
    menu: '',
    infoArr: [],
    imgURL: _url.hosURL()
  },
  chosePrice:function(data){
      var that = this;
      console.log(that)
      that.setData({
        choseCheck: data.currentTarget.dataset.select,
      })
  },
  showok: function () {
    wx.showToast({
      title: '已添加对方为我的瞳志',
      icon: 'none',
      duration: 2000
    })
  },
  changeImg: function () {
    wx.showToast({
      title: '点赞成功',
      icon: 'none',
      duration: 2000
    }),
      this.setData({
        huiHeart: '../../images/ico-211.png'
      })
  },
  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu1: function () {
    this.setData({
      menu: 1,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: 2,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu3: function () {
    this.setData({
      menu: 3,
      actionSheetHidden: !this.data.actionSheetHidden
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (val) {
    console.log(val)
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
              url: _url.infoListshow(),
              params: {
                openid: _openid,
                uid: _uid,
                id: val.userId
              },
              success: (res) => {
                console.log(res.data.data.show)
                if (res.data.data.show.sex == 1){
                  res.data.data.show.sex = "男"
                }else{
                  res.data.data.show.sex = "女"
                }
                // console.log(res.data.data[i].img)
                if (res.data.data.show.img.indexOf("https://") == -1) {
                  res.data.data.show.img = _url.hosURL() + "/" + res.data.data.show.img
                }
                that.setData({
                  infoArr: res.data.data.show
                })
              }
            })
          },
        })
      },
    })
  },
  closeHide: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName,
    })
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