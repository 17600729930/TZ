function hosURL(){
  return "https://tz.bjxiaoyu.cn"
}

let baseURL = {
  shouquan: domin + '/api.php/Login/getsessionkeys',// 授权登录
  authlogin: domin + '/api.php/Personal/findUserInfo',// 登录获取数据
  findUserInfo: domin + '/api.php/Personal/findUserInfo', //读取用户信息
  editUser: domin + "/api.php/Personal/editUser", //修改用户信息
  findList: domin + "/api.php/Personal/findList", //我的动态
  findShow: domin + "/api.php/Personal/findShow", //我的动态详细页
  editFind: domin + "/api.php/Personal/editFind", //修改我的动态
  delFind: domin + "/api.php/Personal/delFind", //删除我的动态
  myFriends: domin + "/api.php/Personal/myFriends", //我的瞳志 好友列表
  myVisitor: domin + "/api.php/Personal/myVisitor", //我的访客
  myFabulous: domin + "/api.php/Personal/myFabulous", //我的点赞
  //我的打赏
  //密码设置
  addOpinion: domin + "/api.php/Personal/addOpinion", //意见反馈
  help: domin + "/api.php/Personal/help", //使用帮助
  //金币充值列表
  //金币充值
  //金币交易记录
  //特权充值列表
  //特权充值
  //特权充值订单
  infoList: domin + "/api.php/User/infoList", //瞳志列表 瞳志列表（用户列表）
  infoListshow: domin + "/api.php/User/infoListshow", //瞳志详细页(用户详细页)
  fabulous: domin + "/api.php/User/fabulous", //点赞/取消点赞
  addfriend: domin + "/api.php/User/addfriend", //添加好友
  delfriend: domin + "/api.php/User/delfriend", //删除好友
  reportFriend: domin + "/api.php/User/reportFriend", //举报好友
  beizhuFriend: domin + "/api.php/User/beizhuFriend", //备注好友
  addFind: domin + "/api.php/Find/addFind", //添加发现
  discoverylist: domin + "/api.php/Find/findList", //发现列表（全部）
  discoverydetailspage: domin + "/api.php/Find/findShow", //发现详细页
  findfabulous: domin + "/api.php/Find/fabulous", //发现  点赞/取消点赞
  addcomment: domin + "/api.php/Find/addcomment", //添加评论
  commentList: domin + "/api.php/Find/commentList", //评论列表
  fabulousList: domin + "/api.php/Find/fabulousList", //点赞列表
  visitorList: domin + "/api.php/Find/visitorList", //访客列表
  //打赏列表
  noticeList: domin + "/api.php/Msg/noticeList", //公告列表
  showNotice: domin + "/api.php/Msg/showNotice", //公告详细页
  msgList: domin + "/api.php/Msg/msgList", //消息列表
  msgShow: domin + "/api.php/Msg/msgShow", //消息详细页
  addMsg: domin + "/api.php/Msg/addMsg", //添加消息
  videoList: domin + "/api.php/Video/videoList", //视频列表
  editvideo: domin + "/api.php/Video/editvideo", //视频播放
  uploadHead: domin + "/api.php/Upload/uploadHead", //头像上传
  uploadoneimg: domin + "/api.php/Upload/uploadoneimg", //上传发现图片
}

// 导出
module.exports = {
  baseURL
}