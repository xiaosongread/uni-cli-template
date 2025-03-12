/**
 * 获取页面栈最后一个页面
 */
export function getCurrentPage() {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	return currentPage
}
/**
 * 获取上一个页面
 */
export function getPrevPage() {
	const pages = getCurrentPages()
	const page = pages[pages.length - 2]
	return page || null
}

// 获取当前页面url及参数
export function getCurrentPageUrlWithArgs() {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const url = currentPage.route
	const options = currentPage.options
	let urlWithArgs = `/${url}?`
	for (let key in options) {
		const value = options[key]
		urlWithArgs += `${key}=${value}&`
	}
	urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
	return urlWithArgs
}
export function getShareUrlWithSmpId() {
	const url = getCurrentPageUrlWithArgs()
	const smpId = uni.getStorageSync('smpId');
	let shareUrl = url.indexOf('?') > -1 ? `${url}&smpId=${smpId}` : `${url}?smpId=${smpId}`
	return shareUrl
}


/**
 * 获取当前页面得option
 */
export function getCurrentOptions() {
	const page = getCurrentPage()
	return (page && page.options) || null
}
/**
 * 获取当前页面得option
 */
export function getCurrentUrl() {
	const page = getCurrentPage()
	return (page && page.route) || ''
}
export function msg(title, duration = 3000, mask = false, icon = 'none') {
	//统一提示方便全局修改
	if (!title) return;
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
export function modal(content, title = '', btnArr = ['取消', '确定'], complete) {
	return new Promise(function(resolve, reject) {
		console.log(uni.showModal)
		uni.showModal({
			title,
			content,
			showCancel: btnArr.length > 1,
			cancelColor: '#666666',
			confirmColor: "#fc515f",
			confirmText: btnArr[1] || btnArr[0],
			cancelText: btnArr[0] || '',
			success: res => {
				if (res.confirm) {
					resolve(true)
				} else if (res.cancel) {
					resolve(false)
				}

			},
			fail: () => {

			},
			complete: () => {
				complete && complete()
			}
		})
	})

}
//延时xx毫秒
export function timeout(time = 0) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve()
		}, time)
	})
}
export function json() {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}
