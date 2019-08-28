//app.js
var WXBizDataCrypt = require('utils/cryptojs/RdWXBizDataCrypt.js');
App({
  onLaunch: function () {
    // 登录
    this.userLogin();
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    url:'http://192.168.3.124/JinMaoCS/',
    //url: 'http://localhost:8888/',
    //url:'https://weboa.rminfo.net/jinmaocs/',
    userInfo: '',
    apacheImages: 'http://192.168.3.116/cluster/stream/images/'
  },
  //检查登录态
  userLogin: function () {
    var that = this;
    wx.checkSession({
      success: function (checkres) {
        //存在登陆态
        console.log("存在登录态")
        that.onLogin();
      },
      fail: function () {
        console.log("不存在登录态")
        //不存在登陆态
        that.onLogin();
      }
    })
  },
  //用户登录
  onLogin:function() {
    var that = this;
    wx.login({
      timeout: 1000,
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: that.globalData.url + 'wechat/wechatlogin',
            method: 'GET',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: res.code
            },
            success: function (ress) {
              console.log(ress.data.session_key);
              // var pc = new WXBizDataCrypt("wx2bd8ed764c78cb83", ress.data.session_key)
              // wx.getUserInfo({
              //   success: function (infores) {
              //     //拿到getUserInfo（）取得的res.encryptedData, res.iv，调用decryptData（）解密
              //     console.log(infores.encryptedData + ":" + infores.iv)
              //     var data = pc.decryptData(infores.encryptedData, infores.iv)
              //     // data.unionId就是咱们要的东西了
              //     console.log('解密后 unionid: ', data);
              //   },
              //   fail: function (res) {
              //     console.log(res)
              //   }
              // })
              let datas = ress.data;
              if (datas.code == 0) {
                wx.setStorage({
                  key: 'trd_session',
                  data: datas.trd_session,
                })
              } else {
                wx.showToast({
                  title: datas.message,
                  icon: 'fail',
                  duration: 2000
                })
              }
            },
            fail:function(err){
              console.log(err);
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})


