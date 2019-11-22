// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: 3,
    newsList:[
      {face: '../../images/face1.png', name: '瞳志公告', time: '02-12 13:24', con:'您的初始密码为:868686,请及时修改密码，祝您生活愉快。',id:1,},
      { face: '../../images/face2.png', name: 'keke', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, }, 
      { face: '../../images/face3.png', name: 'kaiti', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
      { face: '../../images/face4.png', name: '云南塘沽', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
      { face: '../../images/face5.png', name: '一觉之间', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
      { face: '../../images/face2.png', name: '便准时进', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
      { face: '../../images/face1.png', name: 'taitai', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
      { face: '../../images/face3.png', name: 'keke', time: '02-12 13:24', con: '你们已经是好友了，可以随时查看消息，关注彼此的信息。', id: 2, },      
           
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