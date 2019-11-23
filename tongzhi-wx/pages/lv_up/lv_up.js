// pages/lv_up/lv_up.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      priceList:[
        { time: '12', price: '120', save: '100%',id:"1"},  
        { time: '9', price: '100', save: '80%',id:"2" },
        { time: '6', price: '80', save: '60%', id:"3"}, 
        { time: '3', price: '60', save: '40%', id:"4"},   
      ],
      teQuan:[
        { icoUrl: '../../images/ico-30.png', te_name: '尊贵身份标识', des: '点亮会员图标，尽显尊贵身份', },
        {
          icoUrl: '../../images/ico-31.png', te_name: '更多曝光展示机会', des: '被推荐的机会是普通用户的16倍，交友成功率提供80%', },
        { icoUrl: '../../images/ico-32.png', te_name: '专属客服', des: '7*24专属客服，急速服务', },
        { icoUrl: '../../images/ico-33.png', te_name: '每日无限交友', des: '', },
      ],
      catalogSelect: 0,//判断是否选中
      priceAll:'',
  },
  switchTab:function(data){
    var that = this;
    console.log(data);
    that.setData({//把选中值放入判断值
      catalogSelect: data.currentTarget.dataset.select,
      priceAll:data.currentTarget.dataset.info,
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