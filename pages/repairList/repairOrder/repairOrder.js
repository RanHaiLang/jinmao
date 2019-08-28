// pages/repairList/repairOrder/repairOrder.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSwitch: [true, true, true, true, true], //基本信息等title展开收缩
    images: [], // 上传的图片
    show: false,
    beijianChecked: false,  //备件switch
    chongqiChecked: false,  //报修重启switch
    beijianbuzu: true,  //备件不足时后续步骤隐藏
    mass: '',  //维修质量评价分数
    manner: '',  //维修态度评价分数
    showActionSheet: false,  //下一步按钮显示
    actions: [
      { name: '挂起' },
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //基本信息等title展开收缩
  onTabSwitch: function(event) {
    var index = event.currentTarget.dataset.id;
    var tabWitch = this.data.tabSwitch;
    tabWitch.splice(index, 1, !tabWitch[index]);
    this.setData({
      tabSwitch: tabWitch
    });
  },
  onShowStart: function() {
    this.setData({
      show: true
    });
  },
  onCancel: function() {
    this.setData({
      show: false
    });
  },
  // 时间弹出层
  onClose: function(){
    this.setData({
      show: false
    });
  },
  // 备件不足switch
  onBeijianChange: function(event){
    this.setData({ 
      beijianChecked: event.detail,
      beijianbuzu: false
    });
  },
  // 报修重启switch
  onChongqiChange: function (event) {
    this.setData({ chongqiChecked: event.detail });
  },
  uploadImg: function() {
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
  onMassChange: function(event){
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
  //下一步
  nextStep: function(){
    this.setData({
      showActionSheet: true
    })
  },
  onSelect: function(event){
    
    this.setData({
      showActionSheet: false
    })
  },
  onCancel: function (){
    this.setData({
      showActionSheet: false
    })
  }


})