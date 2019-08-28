// pages/zichanchanxun/zichanchaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSwitch: [true, true, true],//基本信息等title展开收缩
    activeName: '',
    repairList: [
      {
        one: 186437,
        two: '料架转不动',
        three: 'xxxx',
        four: '张三',
        five: '工程部',
        six: '2019-7-23',
        seven: '2019-7-23',
        eight: '完成'
      }, {
        one: 186437,
        two: '料架转不动',
        three: 'xxxx',
        four: '张三',
        five: '工程部',
        six: '2019-7-23',
        seven: '2019-7-23',
        eight: '完成'
      }, {
        one: 186437,
        two: '料架转不动',
        three: 'xxxx',
        four: '张三',
        five: '工程部',
        six: '2019-7-23',
        seven: '2019-7-23',
        eight: '完成'
      }, {
        one: 186437,
        two: '料架转不动',
        three: 'xxxx',
        four: '张三',
        five: '工程部',
        six: '2019-7-23',
        seven: '2019-7-23',
        eight: '完成'
      }, {
        one: 186437,
        two: '料架转不动',
        three: 'xxxx',
        four: '张三',
        five: '工程部',
        six: '2019-7-23',
        seven: '2019-7-23',
        eight: '完成'
      }
    ]
  },
  //维修事件列表
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  //基本信息等title展开收缩
  onTabSwitch: function (event) {
    var index = event.currentTarget.dataset.id;
    var tabWitch = this.data.tabSwitch;
    tabWitch.splice(index, 1, !tabWitch[index]);
    this.setData({
      tabSwitch: tabWitch
    });
  },
  //跳转报修页面
  goToBaoxiu: function () {
    wx.navigateTo({
      url: '../baoxiu/baoxiu'
    })
  },
  showModal: function () {
    wx.navigateTo({
      url: '../shebeiModal/shebeiModal'
    })
  },
  //扫描
  takeScan: function () {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
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