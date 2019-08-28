//index.jss
const app = getApp();
var util = require('../../utils/md5.js')    // 引入md5.js文件

Page({
  data: {
    imgUrls: [
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png'
    ],
    hasUserInfo: false,
    hasUserBind: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username:'',
    password:'',
    username_err:'',
    password_err:''
  },
  userOnChange(event) {
    this.setData({
      username:event.detail
    })
  },
  passOnChange(event){
    this.setData({
      password:event.detail
    })
  },
  //事件处理函数
  
  onLoad: function () {
    var that = this;
    that.getNoticeImages();
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            hasUserInfo: true
          })
        }
      }
    })
    wx.getStorage({
      key: 'hasUserBind',
      success: function(res) {
        console.log(res)
        that.setData({
          hasUserBind: res.data
        })
      },
    })
  },
  getUserInfo: function (e) {
    console.log(e);
    console.log(e.detail.userInfo)
    var that = this;
    if (e.detail.userInfo){
      console.log("我来了")
      app.globalData.userInfo = e.detail.userInfo
      that.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      //请求服务器判断当前微信用户是否绑定app
      wx.getStorage({
        key: 'trd_session',
        success(res) {
          console.log("trd_session:"+res.data);
          wx.request({
            url: app.globalData.url + 'wechat/yesnobind',
            method: 'GET',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              token: res.data
            },
            success(sres) {
              let data = sres.data;
              console.log(data);
              if (data.code == 200) {
                if(data.appuser!=null){
                  that.setData({
                    hasUserBind: true
                  })
                  //判断是否绑定的标识
                  wx.setStorage({
                    key: 'hasUserBind',
                    data: true,
                  })
                }else{
                  that.setData({
                    hasUserBind: false
                  })
                }
                
              } else {
                wx.showToast({
                  title: data.message,
                  icon: 'success',
                  duration: 2000
                })
              }
            },
            fail() {
              wx.setStorage({
                key: 'hasUserBind',
                data: false,
              })
            }
          })
        },
        fail(err){
          console.log("报错了")
          console.log(err)
        }
      })
    }else{
      //未授权
      console.log("未授权")
    }
    
    
  },
  userBinding:function(){
    var that = this;
    if(that.data.username==""){
        this.setData({
          username_err:'用户名不能为空'
        })
    }else if(this.data.password==""){
      this.setData({
        password_err: '密码不能为空'
      })
    }else{
      wx.getStorage({
        key: 'trd_session',
        success(res) {
          wx.request({
            url: app.globalData.url + 'wechat/userbinding',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              token: res.data,
              username: that.data.username,
              password: util.hexMD5(that.data.password)
            },
            success(sres) {
              let data = sres.data;
              console.log(data);
              if (data.code == 200) {
                that.setData({
                  hasUserInfo: true,
                  hasUserBind: true
                })
                //判断是否绑定的标识
                wx.setStorage({
                  key: 'hasUserBind',
                  data: true,
                })
              } else {
                wx.showToast({
                  title: data.message,
                  icon: 'success',
                  duration: 2000
                })
              }
            },
            fail() {
              wx.setStorage({
                key: 'hasUserBind',
                data: false,
              })
            }
          })
        }
      })
    }
  },
  getNoticeImages:function(){
    var that = this;
    wx.request({
      url: app.globalData.url + 'ueditor/noticeFive',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
       
      },
      success(sres) {
        let data = sres.data;
        console.log(data)
        var images = [];
        if (data.data.length > 0){
          console.log("11111")
          for (var i = 0; i < data.data.length; i++) {
            console.log("111112")
            if (data.data[i].NOTUDFCHAR02 != "" && data.data[i].NOTUDFCHAR02 != null){
              images.push(app.globalData.apacheImages + data.data[i].NOTUDFCHAR02);
            }else{
              console.log("111113")
              images.push('../../images/1.png');
            }
          }
        }else{
          console.log("111114")
          images.push('../../images/1.png');
        }
        
        that.setData({
          imgUrls: images
        })
        console.log(that.data.imgUrls)
      },
      fail(err) {
        console.log("报错了")
        console.log(err)
      }
    })
  },





  goToZichanchaxun:function(){
    wx.navigateTo({
      url: '../zichanchaxun/zichanchaxun',
    })
  },
  goToRepairList: function () {
    wx.navigateTo({
      url: '../repairList/repairList',
    })
  },
  goToBaoxiu: function () {
    wx.navigateTo({
      url: '../baoxiu/baoxiu',
    })
  },
  goToYufangRepairList: function () {
    wx.navigateTo({
      url: '../yufangRepairList/yufangRepairList',
    })
  },
  goToNoticeList: function () {
    wx.navigateTo({
      url: '../noticeList/noticeList',
    })
  },
  goToKpi: function () {
    wx.navigateTo({
      url: '../kpi/kpi',
    })
  },
  goToRepairHistoryList: function () {
    wx.navigateTo({
      url: '../repairHistoryList/repairHistoryList',
    })
  }
})
