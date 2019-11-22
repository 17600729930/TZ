var app = getApp();
var requestHeader = {
  url: "",
  params: {},
  success: function(res){
    // 成功
    console.log(res)
  },
  fail: function(err){
    // 失败 
    console.log(err)
  }
}

// GET
function GET(requestHeader, headers){
  request('GET', requestHeader, headers)
}

// POST
function POST(requestHeader, headers){
  request('POST', requestHeader, headers)
}

function request(method, requestHeader, headers){
  // app.showLoading();
  var params = requestHeader.params;
  var app_url = requestHeader.url;
  app.requestTask = wx.request({
    url: app_url,
    data: params,
    method: method,
    header: {
      appid: 'wx26fb2f18a73b9ed2',
      secret: '89b347181542e6bcf132aab481b8f338',
      "Content-Type": "application/x-www-form-urlencoded"
      // 'content-type': 'application/json'
    },
    success: function(res){
      requestHeader.success && requestHeader.success(res);
      if(res.statusCode !== 200){
        console.log('服务异常!')
      }
    },
    fail: function(){
      requestHeader.fail && requestHeader.fail(err)
    }
  })
}

module.exports = {
  GET,
  POST
}