Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '初中' },
      { bindtap: 'Menu2', txt: '高中' },
      { bindtap: 'Menu3', txt: '大专' },
      { bindtap: 'Menu4', txt: '本科以上' },
    ],
    menu: ''
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
      menu: '初中',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: '高中',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu3: function () {
    this.setData({
      menu: '大专',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu4: function () {
    this.setData({
      menu: '本科以上',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
})