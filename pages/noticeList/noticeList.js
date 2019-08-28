const app = getApp();
// pages/noticeList/noticeList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    apacheImages: app.globalData.apacheImages
  },
  getOnclick:function(){
    
    console.log(that.data.dataList)
  },
  getNoticeList:function(){
    var that = this;
    wx.request({
      url: app.globalData.url + 'ueditor/noticePage',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        likeDesc: "",
        classNoctice: ""
      },
      success(sres) {
        let data = sres.data;
          that.setData({
            dataList: data
        })
      },
      fail(err) {
        console.log("报错了")
        console.log(err)
      }
    })
  },
  goToNotice:function(e){
    var that = this;
    wx.navigateTo({
      url: 'notice/notice?noticeCode=' + e.currentTarget.dataset.item.NOT_CODE
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNoticeList();
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