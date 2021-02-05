Page({
  data: {
    moduleList: [{
        name: "资源周报",
        color: "#d1da59",
        icon: "photo-wall"
      },
      {
        name: "概览",
        color: "#4696ec",
        icon: "display"
      },
      {
        name: "业务",
        color: "#9e9e9e",
        icon: "photo-wall"
      },
      {
        name: "应用",
        color: "#67ac5b",
        icon: "pad"
      },
      {
        name: "负责人管理",
        color: "#4153af",
        icon: "contacts"
      }
    ]
  },
  onLoad() {
    this.onShow()
  },
  toLog() {
    wx.navigateTo({
      url: '../report/index'
    });
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1,
        selected: 1
      })
    }
  }
})