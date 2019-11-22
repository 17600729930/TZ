function hosURL(){
  return "https://tz.bjxiaoyu.cn"
}

// 授权登录
function shouquan(){
  return hosURL() + "/api.php/Login/getsessionkeys"
}

// 登录获取数据
function authlogin(){
  return hosURL() + "/api.php/Login/authlogin"
}

//读取用户信息
function findUserInfo(){
  return hosURL() + "/api.php/Personal/findUserInfo"
}
//修改用户信息
function editUser() {
  return hosURL() + "/api.php/Personal/editUser"
}
//我的动态
function findList() {
  return hosURL() + "/api.php/Personal/findList"
}
//我的动态详细页
function findShow() {
  return hosURL() + "/api.php/Personal/findShow"
}
//修改我的动态
function editFind() {
  return hosURL() + "/api.php/Personal/editFind"
}
//删除我的动态
function delFind() {
  return hosURL() + "/api.php/Personal/delFind"
}
//我的瞳志 好友列表
function myFriends() {
  return hosURL() + "/api.php/Personal/myFriends"
}
//我的访客
function myVisitor() {
  return hosURL() + "/api.php/Personal/myVisitor"
}
//我的点赞
function myFabulous() {
  return hosURL() + "/api.php/Personal/myFabulous"
}
//我的打赏

//密码设置

//意见反馈
function addOpinion() {
  return hosURL() + "/api.php/Personal/addOpinion"
}
//使用帮助
function help() {
  return hosURL() + "/api.php/Personal/help"
}
//金币充值列表

//金币充值

//金币交易记录

//特权充值列表

//特权充值

//特权充值订单

//瞳志列表 瞳志列表（用户列表）
function infoList() {
  return hosURL() + "/api.php/User/infoList"
}
//瞳志详细页(用户详细页)
function infoListshow() {
  return hosURL() + "/api.php/User/infoListshow"
}
//点赞/取消点赞
function fabulous() {
  return hosURL() + "/api.php/User/fabulous"
}
//添加好友
function addfriend() {
  return hosURL() + "/api.php/User/addfriend"
}
//删除好友
function delfriend() {
  return hosURL() + "/api.php/User/delfriend"
}
//举报好友
function reportFriend() {
  return hosURL() + "/api.php/User/reportFriend"
}
//备注好友
function beizhuFriend() {
  return hosURL() + "/api.php/User/beizhuFriend"
}
//添加发现
function addFind() {
  return hosURL() + "/api.php/Find/addFind"
}
//发现列表（全部）
function discoverylist() {
  return hosURL() + "/api.php/Find/findList"
}
//发现详细页
function discoverydetailspage() {
  return hosURL() + "/api.php/Find/findShow"
}
//发现  点赞/取消点赞
function findfabulous() {
  return hosURL() + "/api.php/Find/fabulous"
}
//添加评论
function addcomment() {
  return hosURL() + "/api.php/Find/addcomment"
}
//评论列表
function commentList() {
  return hosURL() + "/api.php/Find/commentList"
}
//点赞列表
function fabulousList() {
  return hosURL() + "/api.php/Find/fabulousList"
}
//访客列表
function visitorList() {
  return hosURL() + "/api.php/Find/visitorList"
}
//打赏列表

//公告列表
function noticeList() {
  return hosURL() + "/api.php/Msg/noticeList"
}
//公告详细页
function showNotice() {
  return hosURL() + "/api.php/Msg/showNotice"
}
//消息列表
function msgList() {
  return hosURL() + "/api.php/Msg/msgList"
}
//消息详细页
function msgShow() {
  return hosURL() + "/api.php/Msg/msgShow"
}
//添加消息
function addMsg() {
  return hosURL() + "/api.php/Msg/addMsg"
}
//视频列表
function videoList() {
  return hosURL() + "/api.php/Video/videoList"
}
//视频播放
function editvideo() {
  return hosURL() + "/api.php/Video/editvideo"
}
//头像上传
function uploadHead() {
  return hosURL() + "/api.php/Upload/uploadHead"
}
//上传发现图片
function uploadoneimg() {
  return hosURL() + "/api.php/Upload/uploadoneimg"
}








// 导出
module.exports = {
  hosURL,
  shouquan,
  authlogin,
  findUserInfo,
  editUser,
  findList,
  findShow,
  editFind,
  delFind,
  myFriends,
  myVisitor,
  myFabulous,
  addOpinion,
  help,
  infoList,
  infoListshow,
  fabulous,
  addfriend,
  delfriend,
  reportFriend,
  beizhuFriend,
  addFind,
  discoverylist,
  discoverydetailspage,
  findfabulous,
  addcomment,
  commentList,
  fabulousList,
  visitorList,
  noticeList,
  showNotice,
  msgList,
  msgShow,
  addMsg,
  videoList,
  editvideo,
  uploadHead,
  uploadoneimg
}