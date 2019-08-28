// pages/repairHistoryList/repairHistory/repairHistory/repairHistory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSwitch: [true, true, true, true, true], //基本信息等title展开收缩
    images: [], // 上传的图片
    show: false,
    mass: '',  //维修质量评价分数
    manner: '',  //维修态度评价分数
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    activeName: '',
    repairList: [{
      one: '袁琳',
      two: '10:20',
      three: '10:50',
      four: '0.2小时'
    }, {
      one: '袁琳',
      two: '10:20',
      three: '10:50',
      four: '0.2小时'
    }, {
      one: '袁琳',
      two: '10:20',
      three: '10:50',
      four: '0.2小时'
    }, {
      one: '袁琳',
      two: '10:20',
      three: '10:50',
      four: '0.2小时'
    }]
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
  //登记工时列表
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  onShowStart: function () {
    this.setData({
      show: true
    });
  },
  onCancel: function () {
    this.setData({
      show: false
    });
  },
  // 时间弹出层
  onClose() {
    this.setData({
      show: false
    });
  },
  uploadImg: function () {
    // 选择图片
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        this.setData({
          images: this.data.images.concat(tempFilePaths)
        });
      }
    })
  },
  //维修质量评价
  onMassChange: function (event) {
    this.setData({
      mass: event.detail
    });
  },
  //维修态度评价
  onMannerChange: function (event) {
    this.setData({
      manner: event.detail
    });
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