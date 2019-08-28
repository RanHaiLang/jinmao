// pages/baoxiu/baoxiu.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [], // 上传的图片
    showBaoxiuleixing: false,  //报修类型的选择
    baoxiuleixing: "",   //报修类型的值
    actions: [
      { name: '给排水' },
      { name: '空调' },
      { name: '强电' },
      { name: '弱电' },
      { name: '装饰' }
    ]
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
  //模态框
  showModal: function () {
    wx.navigateTo({
      url: '../shebeiModal/shebeiModal'
    })
  },
  //扫描
  takeScan:function(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  //报修类型选择
  showGuzhangleixing: function () {
    this.setData({
      showBaoxiuleixing: true
    })
  },
  onSelect: function (event) {
    this.setData({
      showBaoxiuleixing: false,
      baoxiuleixing: event.detail.name
    })
  },
  testSubmit: function (e) {
    console.log(e.detail.formId)
    var self = this;
    let url = app.globalData.url +"wechatmessage/sendmessage"; 
    wx.request({
      url: url,
      data:{
        openid: 'oJa3N4vOlF_f6C-45-Jq7-qHZyB8',
        evt_code: '111',
        desc: 'dfdfdfd',
        datetime: '2019',
        formId: e.detail.formId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log('request fail ', err);
      },
      complete: function (res) {
        console.log("request completed!");
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