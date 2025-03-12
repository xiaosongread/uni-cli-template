import { request } from '@/utils/request'
	console.log(request,'8899')
// 登录方法
export function login(username, password, code, uuid) {
	const data = {
		username,
		password,
		code,
		uuid
	}
	return request({
		'url': '/login',
		headers: {
			isToken: false
		},
		'method': 'post',
		'data': data
	})
}

// 注册方法
export function register(data) {
	return request({
		url: '/register',
		headers: {
			isToken: false
		},
		method: 'post',
		data: data
	})
}

// 获取用户详细信息
export function getInfo() {
	return request({
		'url': '/system/user/getInfo',
		'method': 'get'
	})
}

// 退出方法
export function logout() {
	return request({
		'url': '/auth/logout',
		'method': 'DELETE'
	})
}

// 获取验证码
export function getCodeImg() {
	return request({
		'url': '/captchaImage',
		headers: {
			isToken: false
		},
		method: 'get',
		timeout: 2000
	})
}
// 用户信息
export function handcode(data) {
  console.log('zxl,,', data, request)
	return request({
		'url': '/auth/wx/getLoginCertificate',
		headers: {
			isToken: false
		},
		'method': 'get',
		'data': data
	})
}
// 获取手机号
export function handphone(data) {
	return request({
		'url': '/auth/wx/getPhoneNumber',
		headers: {
			isToken: false
		},
		'method': 'post',
		data: data
	})
}

//  协议
export function handagreement(id) {
	return request({
		'url': `/system/agreement/${id}`,
		'method': 'get'
	})
}

//  记录是否分享接口
export function shareData(data) {
	return request({
		'url': `/system/applet/share/data`,
		'method': 'post',
    data
	})
}



