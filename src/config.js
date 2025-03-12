// 应用全局配置
// const { miniProgram: { envVersion } } = wx.getAccountInfoSync();
// console.log('全局信息：', envVersion)
// let baseUrl = null
// switch (envVersion) {
//   case "develop": // 开发版
//       baseUrl = "https://ky.yykjedu.com/prod-api";
//       break;
//   case "trial": // 体验版
//       baseUrl = "https://kaoyan.yykjedu.com/prod-api";
//       break;
//   default:    // 正式版
//       baseUrl = "https://ky.yykjedu.com/prod-api";
//       break;
// }
module.exports = {
  // baseUrl,
  // baseUrl: 'https://vue.ruoyi.vip/prod-api',
  // baseUrl: 'http://192.168.28.237:8080',//本地环境 237 健 176 鹏
  // baseUrl: 'https://kaoyan.yykjedu.com/prod-api',//测试环境
  baseUrl: 'https://ky.yykjedu.com/prod-api',//线上环境
  // 应用信息
  appInfo: {
    // 应用名称
    name: "学生端小程序",
    // 应用版本
    version: "1.1.0",
    // 应用logo
    logo: "https://education-1323054692.cos.ap-beijing.myqcloud.com/mini/static/images/index/logo1.png",
  }
}

