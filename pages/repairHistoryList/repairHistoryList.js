// pages/repairHistoryList/repairHistoryList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [
      {
        one: '左右弯管机均无法联机',
        two: 18780,
        three: '开料端口一体机',
        four: '维修退回',
        five: '陈阿林',
        six: '2019-7-4 15:20'
      }, {
        one: '左右弯管机均无法联机',
        two: 18780,
        three: '开料端口一体机',
        four: '维修退回',
        five: '陈阿林',
        six: '2019-7-4 15:20'
      }, {
        one: '左右弯管机均无法联机',
        two: 18780,
        three: '开料端口一体机',
        four: '维修退回',
        five: '陈阿林',
        six: '2019-7-4 15:20'
      }, {
        one: '左右弯管机均无法联机',
        two: 18780,
        three: '开料端口一体机',
        four: '维修退回',
        five: '陈阿林',
        six: '2019-7-4 15:20'
      }, {
        one: '左右弯管机均无法联机',
        two: 18780,
        three: '开料端口一体机',
        four: '维修退回',
        five: '陈阿林',
        six: '2019-7-4 15:20'
      }
    ]
  },
  goToRepairHistory: function(){
    wx.navigateTo({
      url: 'repairHistory/repairHistory',
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