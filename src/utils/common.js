/**
* 显示消息提示框
* @param content 提示的标题
*/
export function toast(content) {
    uni.showToast({
        icon: 'none',
        title: content
    })
}

/**
* 显示模态弹窗
* @param content 提示的标题
*/
export function showConfirm(content) {
    return new Promise((resolve, reject) => {
        uni.showModal({
            title: '提示',
            content: content,
            cancelText: '取消',
            confirmText: '确定',
            success: function (res) {
                resolve(res)
            }
        })
    })
}

/**
* 参数处理
* @param params 参数
*/
export function tansParams(params) {
    let result = ''
    for (const propName of Object.keys(params)) {
        const value = params[propName]
        var part = encodeURIComponent(propName) + "="
        if (value !== null && value !== "" && typeof (value) !== "undefined") {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                        let params = propName + '[' + key + ']'
                        var subPart = encodeURIComponent(params) + "="
                        result += subPart + encodeURIComponent(value[key]) + "&"
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + "&"
            }
        }
    }
    return result
}

/**
* 获取当前时间
* 
*/
export function getNowDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let nowDate = year + '-' + month + '-' + day
    return nowDate
}



/* 防抖节流函数 */
let timeout = null // 创建一个标记用来存放定时器的返回值
let count = 0;
export function debounce(fn, wait = 1000, immediate = false) {
  return function () {
    const args = arguments;
    if (immediate) {
      if (count == 0) {
        fn.apply(this, arguments)
        count++;
      } else {
        if (timeout) {
          clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉 
        }
 
        timeout = setTimeout(() => {
          fn.apply(this, arguments)
        }, wait)
      }
    } else {
      if (timeout) {
        clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉 
      }
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
 
  }
}
 
 
let canRun = true;
let count1 = 0;
export function throttle(fn, wait = 1000, immediate = true) {
  return function () {
    if (immediate) {
      if (count1 == 0) {
        fn.apply(this, arguments);
        count1++;
      } else {
        if (canRun) {
          canRun = false
          setTimeout(function () {
            fn.apply(this, arguments)
            canRun = true
          }, wait);
        }
      }
    } else {
      if (!canRun) return
      canRun = false
      setTimeout(function () {
        fn.apply(this, arguments)
        canRun = true
      }, wait);
    }
 
  }
}