// pages/kpi/kpi.js
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '本周故障报修完成率(报修类型)',
      left: 'center',
      textStyle: {
        align: 'center',
        color: '#333',
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '30',
      left: '3%',
      right: '4%',
      bottom: '0',
      containLabel: true
    },
    backgroundColor: '#fff',
    xAxis: [{
      show: false,
    },
    {
      show: false,
    }
    ],
    yAxis: [{
      type: 'category',
      show: true,
      data: ["给排水","空调","强电","弱电","装饰"],
      inverse: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#71829E'
      },
    },],
    series: [
      {
        name: '报修总数',
        show: true,
        type: 'bar',
        barGap: '-100%',
        barWidth: '80%', //统计条宽度
        itemStyle: {
          normal: {
            barBorderRadius: 3,
            color: "#759aa0"
          },
        },
        z: 1,
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        data: [20,30,60,90,90],
      },
      {
        name: '报修完成数',
        show: true,
        type: 'bar',
        barGap: '-100%',
        barWidth: '80%', //统计条宽度
        itemStyle: {
          normal: {
            barBorderRadius: 3, //统计条弧度
            color: "#dc6b66"
          },
        },
        max: 1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
            },
            position: 'insideRight',
          }
        },
        labelLine: {
          show: false,
        },
        z: 2,
        data: [10, 10, 18, 60, 50],
      },
      {
        name: '百分比%',
        show: true,
        type: 'bar',
        xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
        barGap: '-100%',
        barWidth: '80%', //统计条宽度
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: 'rgba(22,203,115,0)'
          },
        },
        max: 1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff', //百分比颜色
            },
            position: 'insideLeft',
            formatter: '{c}%'
          }
        },
        labelLine: {
          show: false,
        },
        z: 3,
        data: ["50", "33", "30", "66", "55"]//百分比的值
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})