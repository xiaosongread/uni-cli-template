export function setTabBar() {
  if (uni.getStorageSync('templateNum') == 2) {
    wx.setTabBarStyle({
      selectedColor: "#ff8128"
    })
    wx.setTabBarItem({
      index: 0,
      text: '首页',
      iconPath: "static/images/tabbar2/home.png",
      selectedIconPath: "static/images/tabbar2/home_.png",
    })
    wx.setTabBarItem({
      index: 1,
      text: '刷题',
      iconPath: "static/images/tabbar2/work.png",
      selectedIconPath: "static/images/tabbar2/work_.png",
    })
    wx.setTabBarItem({
      index: 2,
      text: '我的',
      iconPath: "static/images/tabbar2/mine.png",
      selectedIconPath: "static/images/tabbar2/mine_.png",
    })
  } else {
    wx.setTabBarStyle({
      selectedColor: "#fb5564"
    })
    wx.setTabBarItem({
      index: 0,
      text: '首页',
      iconPath: "static/images/tabbar/home.png",
      selectedIconPath: "static/images/tabbar/home_.png",
    })
    wx.setTabBarItem({
      index: 1,
      text: '刷题',
      iconPath: "static/images/tabbar/work.png",
      selectedIconPath: "static/images/tabbar/work_.png",
    })
    wx.setTabBarItem({
      index: 2,
      text: '我的',
      iconPath: "static/images/tabbar/mine.png",
      selectedIconPath: "static/images/tabbar/mine_.png",
    })
  }
}