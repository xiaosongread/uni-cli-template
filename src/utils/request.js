import config from '@/config'
import errorCode from '@/utils/errorCode'
import { toast, showConfirm, tansParams } from '@/utils/common'
import md5 from '@/utils/md5'
import { getToken, getPhone, getAppInfo, removeToken } from '@/utils/auth'
  //文件引用
import base64 from './base64.js'
let timeout = 10000
const baseUrl = config.baseUrl
let hasErrorMsg = false
let currnetRequestNum401 = 0
const request = config => {
  // console.log('config', config)
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  config.header = config.header || {}
  let time = Date.now();
  let sign = base64(time)
  sign = md5(sign  + "yhpn")
  // 设置请求头
  config.header['time'] = time
  config.header['sign'] = sign
  if (getToken() && !isToken) {
    config.header['Authorization'] = 'Bearer ' + getToken()
  }
  if (!hasErrorMsg && config.header.hasLoading) {
		uni.showLoading({
			title: '加载中'
		});
    hasErrorMsg = true
	}
  // 
  // let token = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6IjkxYjg5ZDM2LTZmZDQtNGRmMi05YmEwLWFlY2IyNmIwOTVhYiIsInVzZXJuYW1lIjoi5qyy54Gr5qeD5raFIn0.ECYn5TG6-kHMHk_7wgAbAGZm-g6Q1rLKqOWJC0SVi9mUm-dA3OpI-4v-8SSqJAL_UjiJ_sYgQ8p4u2WWQSQe_A'
  // config.header['Authorization'] = 'Bearer ' + token
  // get请求映射params参数
  if (config.params) {
    let url = config.url + '?' + tansParams(config.params)
    url = url.slice(0, -1)
    config.url = url
  }
  return new Promise((resolve, reject) => {
    uni.request({
        method: config.method || 'get',
        timeout: config.timeout ||  timeout,
        url: config.baseUrl || baseUrl + config.url,
        data: config.data,
        header: config.header,
        dataType: 'json'
      }).then(response => {
        if (config.header.hasLoading) {
          setTimeout(() => {
            uni.hideLoading()
            hasErrorMsg = false
          }, config.header.loadingTime || 2500)
        }
        let [error, res] = response
        if (error) {
          toast('当前网速较慢，请稍后重试')
          reject('当前网速较慢，请稍后重试')
          return
        }
        const code = res.data.code || 200
        const msg = errorCode[code] || res.data.msg || errorCode['default']
        
        if (code === 401) {
          if (currnetRequestNum401 === 0) {
            removeToken()
            uni.removeStorageSync('userId')
            uni.removeStorageSync('phone')
            uni.removeStorageSync('avatar')
            uni.removeStorageSync('templateNum')
            uni.removeStorageSync('wetchatName')
            reject('无效的会话，或者会话已过期，请重新登录。')
            currnetRequestNum401++
            uni.redirectTo({ url: '/pages/login' })
          }
        } else if (code === 500) {
          if(config.url != '/system/management/participateActivities' && config.url !='/system/management/participateActivitie'){
            toast(msg)
          }
          
        } else if (code !== 200) {
          setTimeout(() => {
            toast(msg)
          }, 220)
          reject(code)
        }
        resolve(res.data)
      })
      .catch(error => {
        // uni.hideLoading()
        let { message } = error
        if (message === 'Network Error') {
          message = '当前网速较慢，请稍后重试'
        } else if (message.includes('timeout')) {
          message = '系统接口请求超时'
        } else if (message.includes('Request failed with status code')) {
          message = '系统接口' + message.substr(message.length - 3) + '异常'
        }
        toast(message)
        reject(error)
      })
  })
}

export  {request}
// module.exports = { request }
