// import config from '@/config'
// import configIndex from '@/config/index'
// import storage from '@/utils/storage'
// import constant from '@/utils/constant'
// import { getToken, setToken, removeToken, setWetchatName, setAppInfo } from '@/utils/auth'
// import { login, logout, getInfo } from '@/api/login'
// import {
//   getByAppIdInformation
// } from '@/api/comm'

// const baseUrl = config.baseUrl

const user = {
  state: {
    // token: getToken(),
    // name: storage.get(constant.name),
    // avatar: storage.get(constant.avatar),
    // roles: storage.get(constant.roles),
    // permissions: storage.get(constant.permissions),
    // appInfo: uni.getStorageSync('appInfo'),
    // wetchatName: uni.getStorageSync('wetchatName')
  },

  mutations: {
    // SET_TOKEN: (state, token) => {
    //   state.token = token
    // },
    // SET_NAME: (state, name) => {
    //   state.name = name
    //   storage.set(constant.name, name)
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    //   storage.set(constant.avatar, avatar)
    // },
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles
    //   storage.set(constant.roles, roles)
    // },
    // SET_PERMISSIONS: (state, permissions) => {
    //   state.permissions = permissions
    //   storage.set(constant.permissions, permissions)
    // },
    // SET_APP_INFO: (state, appInfo) => {
    //   console.log('alala', appInfo)
    //   state.appInfo = appInfo
    //   state.wetchatName = appInfo.miniProgramName
    //   uni.setStorageSync('wetchatName', appInfo.miniProgramName)
    //   uni.setStorageSync('appInfo', JSON.stringify(appInfo))
    // }
  },

  actions: {
    // 登录
    // Login({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   const password = userInfo.password
    //   const code = userInfo.code
    //   const uuid = userInfo.uuid
    //   return new Promise((resolve, reject) => {
    //     login(username, password, code, uuid).then(res => {
    //       setToken(res.token)
    //       commit('SET_TOKEN', res.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
