// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 1,
    tips:1,
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    userlist:[
      { face: "../../images/face1.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
      { face: "../../images/face2.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
      { face: "../../images/face3.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
      { face: "../../images/face4.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
      { face: "../../images/face5.png", name: "马德里", plan: "来一场说走就走的旅程，立即启程", url: " " },
    ],
    checkSelect:[
      {job:'摄影师',hob:'篮球',id:'1'},
      { job: '摄影师', hob: '唱歌', id:'2' },
      { job: '作家', hob: '跳舞', id:'3' },
      { job: '画家', hob: 'rap', id:'4'},
      { job: '歌手', hob: '大碗宽面', id:'5' },
      { job: '演员', hob: '剪辑', id:'6'},
      { job: '老师', hob: '录像', id:'7'},
      { job: '医生', hob: '玩游戏', id:'8'},
      { job: '护士', hob: '王者', id:'9'},
      { job: '助力', hob: '青铜', id:'10'},
      { job: '工程师', hob: '砖石', id:'11'},
    ],
    catalogSelect: 0,
    Selects: 0,
    sexSelect:0,
  },
  checkClass:function(data){
    var that = this;
    that.setData({
      catalogSelect: data.currentTarget.dataset.select,
    })
  },
  checkAll: function (data) {
    var that = this;
    that.setData({
      Selects: data.currentTarget.dataset.select,
    })
  },
  secCheck:function(data){
    var that = this;
    that.setData({
      sexSelect: data.currentTarget.dataset.secect,
    })
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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