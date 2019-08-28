// pages/yufangRepairList/yufangRepair/yufangRepair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSwitch: [true, true, true, true, true], //基本信息等title展开收缩
    images: [], // 上传的图片
    show: false,
    weiwaiChecked: false, //是否委外
    mass: '',  //维修质量评价分数
    manner: '',  //维修及时性评价分数
    showActionSheet: false,  //下一步按钮显示
    actions: [
      { name: '提交' }
    ],
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
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
  //维修质量评价
  onMassChange: function (event) {
    this.setData({
      mass: event.detail
    });
  },
  //维修及时性
  onMannerChange: function (event) {
    this.setData({
      manner: event.detail
    });
  },
  //是否委外
  onWeiwaiChange:function(event){
    this.setData({
      weiwaiChecked: event.detail.value === "是"? true: false
    });
  },
  //下一步
  nextStep: function () {
    this.setData({
      showActionSheet: true
    })
  },
  onSelect: function (event) {

    this.setData({
      showActionSheet: false
    })
  },
  onCancel: function () {
    this.setData({
      showActionSheet: false
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