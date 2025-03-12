// import { getToken, getPhone, getAppInfo, getUserPermission } from '@/utils/auth'
// import { toast } from '@/utils/common'
// 登录页面
// const loginPage = "/pages/login"
  
// 页面白名单
const whiteList = [
  // '/pages/login', // 登录页
]

// 需要做权限的页面
// const needPromiseList = [
//   {
//     url: '/pageSec/checkcolleges/Institutiondetails', // 查院校 -> 院校详情
//     promise: 'pageSec_checkcolleges_index'
//   },
//   {
//     url: '/pageEight/checkthemajor/professional', // 查专业 (同下 调剂查询)
//     promise: 'pageSec_checkthemajor_index'
//   },
//   {
//     url: '/pageSec/schoolcomparison/institutions', // 院校对比
//     promise: 'pageThe_schoolcomparison_contrastselection'
//   },
//   // {
//   //   url: '/pageSec/countrylineinquiry/index', // 国家线查询
//   //   promise: 'pageSec_countrylineinquiry_index'
//   // },
//   {
//     url: '/pageEight/checkthemajor/professional', // AI智能择校
//     promise: 'pageSec_AIchooseschool_index'
//   },
//   {
//     url: '/pageEight/checkthemajor/professional', // 调剂查询(同上 查专业)
//     promise: 'pageSec_checkthemajor_index_tj'
//   },
//   {
//     url: '/pageSev/work/english/index', // 刷外语
//     promise: 'pageFive_work_english_index'
//   },
//   {
//     url: '/pageSix/work/mathematics/index', // 刷数学
//     promise: 'pageFive_work_mathematics_index'
//   },
//   {
//     url: '/pageSix/work/exercise/index', // 刷政治
//     promise: 'pageFive_work_exercise_index'
//   }
// ]

// 检查地址白名单
function checkWhite(url) {
  let urls = url
  if (urls.indexOf('?') !== -1) {
    urls = urls.split('?')[0]
  }
  return whiteList.indexOf(urls) !== -1
}

function showModalFn() {
  uni.showModal({
    title: '温馨提示',
    content: '您暂无权限访问当前页面，请联系老师授权账号权限！',
    showCancel: true,
    confirmColor: "#fc515f",
    confirmText: '联系老师',
    success: function(res) {
      if (res.confirm) {
        uni.navigateTo({
          url: '/pages/teacherImg'
        })
      }
    }
  })
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "switchTab"]
// let flag = true
list.forEach(item => {
  uni.addInterceptor(item, {
    invoke(to, from) {
      console.log('跳转劫持：', to.url)
      if (checkWhite(to.url)) {
        return true
      } else {
        if (getPhone()) {
          if (!getToken()) {
            uni.showModal({
              title: '温馨提示',
              content: '当前用户未在机构中录入，请联系老师授权账号！',
              showCancel: true,
              confirmColor: "#fc515f",
              confirmText: '联系老师',
              success: function(res) {
                if (res.confirm) {
                  uni.navigateTo({
                    url: '/pages/teacherImg'
                  })
                }
              }
            })
            return false
          } else {
            // 获取用户的权限
            let permissionList = getUserPermission()
            // 点击进入的页面的链接
            let filterUrl = to.url.split('?')[0]
            let currentToPagePromiseList = needPromiseList.filter(item => filterUrl.indexOf(item.url) !== -1) || []
            if (currentToPagePromiseList.length > 0) {
              // 需要做权限校验的
              console.log('判断是否是公用页面')
              if (currentToPagePromiseList.length === 1) {
                console.log('单个页面')
                // 只有一项匹配（页面不是公用的）
                let currentToPagePromise = currentToPagePromiseList[0].promise
                if (permissionList.filter(item => item === currentToPagePromise).length != 0){
                  // 当前点击要进入的链接是有权限的
                  return true
                } else {
                  // 没有权限，不能跳转进去
                  console.log('没有权限，不能跳转进去!!')
                  showModalFn()
                  return false
                }
              } else {
                // 页面有公用的
                // currentToPagePromiseList
                let optionsObj = new Object()
                to.url.split('?')[1].split('&').map((item) => {
                  let key = item.split("=")[0]
                  let value = item.split("=")[1]
                  optionsObj[key] = value
                })
                console.log('公用页面', filterUrl, optionsObj)
                // 查专业/调剂专业/AI智能择校
                if (filterUrl === '/pageEight/checkthemajor/professional') {
                  if (optionsObj.isTJ === '0') {
                    // 查专业
                    if (permissionList.filter(item => item === 'pageSec_checkthemajor_index').length == 0){
                      // 当前点击要进入的链接是有权限的
                      showModalFn()
                      return false
                    }
                  } else if (optionsObj.isTJ === '1') {
                    // 调剂专业
                    if (permissionList.filter(item => item === 'pageSec_checkthemajor_index_tj').length == 0){
                      // 当前点击要进入的链接是有权限的
                      showModalFn()
                      return false
                    }
                  } else if (optionsObj.isTJ === '2') {
                    // AI智能择校
                    if (permissionList.filter(item => item === 'pageSec_AIchooseschool_index').length == 0){
                      // 当前点击要进入的链接是有权限的
                      showModalFn()
                      return false
                    }
                  }
                }
              }
            } else {
              // 当前点击要进入的链接不需要校验权限
              return true
            }
          }
          return true
        } else {
          // 没有手机号，跳获取手机号页面
          uni.navigateTo({ url: loginPage })
          return false
        }
      }
    },
    fail(err) {
      console.log(err)
    },
    complete () {

    },
  })
})
