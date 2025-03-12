const TokenKey = 'App-Token'

export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}


export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function getPhone() {
  return uni.getStorageSync('phone')
}
export function setPhone(phone) {
  return uni.setStorageSync('phone', phone)
}

export function getUserId() {
  return uni.getStorageSync('userId')
}
export function setUserId(userId) {
  return uni.setStorageSync('userId', userId)
}

export function getOpenId() {
  return uni.getStorageSync('openId')
}
export function setOpenId(openId) {
  return uni.setStorageSync('openId', openId)
}

export function getTeacherId() {
  return uni.getStorageSync('teacherId') || ''
}
export function setTeacherId(teacherId) {
  return uni.setStorageSync('teacherId', teacherId)
}

export function getTenantId() {
  return uni.getStorageSync('tenantId') || ''
}
export function setTenantId(tenantId) {
  return uni.setStorageSync('tenantId', tenantId)
}

export function getAvatar() {
  return uni.getStorageSync('avatar') ? 'https://education-1323054692.cos.ap-beijing.myqcloud.com/' + uni.getStorageSync('avatar') : ''
}
export function setAvatar(avatar) {
  return uni.setStorageSync('avatar', avatar)
}

export function getWetchatName() {
  return uni.getStorageSync('wetchatName') || ''
}
export function setWetchatName(wetchatName) {
  return uni.setStorageSync('wetchatName', wetchatName)
}
export function setAppInfo(miniProgramInfo) {
  return uni.setStorageSync('appInfo', JSON.stringify(miniProgramInfo))
}
export function getAppInfo(miniProgramInfo) {
  return uni.getStorageSync('appInfo') ? JSON.parse(uni.getStorageSync('appInfo')) : null
}

export function setPhoneUuid(phoneUuid) {
  return uni.setStorageSync('phoneUuid', phoneUuid)
}
export function getPhoneUuid() {
  return uni.getStorageSync('phoneUuid') || ''
}

export function getUserPermission() {
  return uni.getStorageSync('storage_data') ? (uni.getStorageSync('storage_data')).vuex_permissions : ''
}
