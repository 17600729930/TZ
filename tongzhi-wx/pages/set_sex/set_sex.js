Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '男' },
      { bindtap: 'Menu2', txt: '女' },
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
      menu: '男',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: '女',
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
})