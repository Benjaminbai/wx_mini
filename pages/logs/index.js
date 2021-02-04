// logs.js
import * as echarts from '../../components/ec-canvas/echarts';
const util = require('../../utils/util.js')

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'red'
            }, {
              offset: 0.5,
              color: '#48b3FF',
            }, {
              offset: 1,
              color: '#d9efff'
            }],
            global: false
          }
        },
      },
    },
    grid: {
      top: '5%',
      left: '5%',
      right: '3%',
      bottom: '8%',
      // containLabel: true
    },
    xAxis: [{
      type: 'category',
      color: '#59588D',
      axisLine: {
        show: true
      },
      axisLabel: {
        color: '#282828'
      },
      splitLine: {
        // show: true
      },

      axisTick: {
        show: false
      },
      // boundaryGap: true,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    }],

    yAxis: [{
      type: 'value',
      min: 0,
      splitNumber: 4,
      splitLine: {
        show: true,

      },
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        // margin: 20,
        textStyle: {
          color: '#737373',

        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(131,101,101,0.2)',
          type: 'dashed',
        }
      }
    }],
    series: [{
      name: '',
      type: 'line',
      // smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: "#48B3FF"
        },
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#48B3FF',
        }
      },

      itemStyle: {
        color: "#FFF",
        borderColor: "#48B3FF",
        borderWidth: 2,

      },
      tooltip: {
        show: true
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(195,230,255,1)'
            },
            {
              offset: 1,
              color: 'rgba(195,230,255,0.1)'
            }
          ], false),
          shadowColor: 'rgba(195,230,255,0.1)',
          shadowBlur: 20
        }
      },
      data: [55, 35, 62, 55, 97, 64, 44, 66, 78, 82, 33, 77],
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    },
    logs: [],
    themeArr: {
      siteName: '站点名称',
      insNum: '实例数量',
      spc: '资源规格',
      cpuRatio: '平均CPU使用率(%)',
      cpuMax: "CPU使用峰值(%)",
      cpuMaxTime: "CPU使用峰值时间",
      publishOrNot: "峰值时间是否发布时间",
      cpu95: "CPU使用95分位线",
      cpu99: "CPU使用99分位线",
      qpsAverage: "平均QPS",
      qpsMax: "QPS峰值",
      owner: "站点负责人",
      comments: "备注",
    },
    itemArr: [{
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      },
      {
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      },
      {
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      },
      {
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      },
      {
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      },
      {
        siteName: 'loanuap.ppdapi.com',
        ins: 8,
        spc: "C-2C4G",
        cpuRatio: '7.0',
        cpuMax: "102.3",
        cpuMaxTime: "2021-01-31 00:07:00",
        publishOrNot: "否",
        cpu95: "20.1",
        cpu99: "71.8",
        qpsAverage: "-",
        qpsMax: "-",
        owner: "谭越",
        comments: ""
      }
    ]
  },
  onLoad() {
    this.onShow()
    // this.setData({
    //   logs: (wx.getStorinsNumSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 2,
        selected: 2
      })
    }
  }
})