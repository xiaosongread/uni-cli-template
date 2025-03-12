import {request} from '@/utils/request'
import { getUserId, setPhoneUuid, getPhoneUuid, getTeacherId } from '@/utils/auth'
if (!getPhoneUuid()) {
  let yykjId = 'YYKJ' + new Date().getTime() + ((Math.random() * 100) | 0)
  setPhoneUuid(yykjId)
}

// 获取 cos token
export function getCosToken(query) {
  return request({
    url: '/file/qc/key',
    method: 'get',
    params: query
  })
}

// uv 统计
export function getUv(userId) {
  return request({
    url: '/system/appletA/addUv',
    method: 'post',
    data: {
      userId: userId || getUserId() || '',
      phoneUuid: getPhoneUuid(),
      promoterId: getTeacherId() || ''
    }
  })
}

// 日报列表
export function listForApplet(params) {
  return request({
    url: '/system/report/listForApplet',
    method: 'get',
    params
  })
}

// 日报详情
export function selectOneForApplet(id) {
  return request({
    url: '/system/report/selectOneForApplet/' + id,
    method: 'get',
  })
}

// 日报点赞
export function researchReportLike(data) {
  return request({
    url: '/system/report/researchReportLike',
    method: 'put',
    data
  })
}

// banner列表查询
export function selectAppletList(params) {
  return request({
    url: '/system/manage/selectAppletList',
    method: 'get',
    params
  })
}

// 考研日历
export function monthList(params) {
  return request({
    url: '/system/month/listOther',
    method: 'get',
    params
  })
}

// 考研倒计时信息查询
export function selectCountdownDays() {
  return request({
    url: '/system/countdown/selectCountdownDays',
    method: 'get',
  })
}

export function payInfo(id, promoterId) {
  return request({
    url: '/system/appletF/createDjOrder?userId=' + id + '&promoterId=' + promoterId,
    method: 'get'
  })
}
// 查询模板标识
export function selectTemplate(id) {
  return request({
    url: '/system/appletTemplate/selectTemplate',
    method: 'get'
  })
}
// 领红包
export function participateActivities(id) {
  return request({
    url: '/system/management/participateActivities',
    method: 'get'
  })
}
// // 领红包2
export function participateActivitie(id) {
  return request({
    url: '/system/management/participateActivitie',
    method: 'get'
  })
}
// 红包雨结束后确定接口
export function addActiveData(data) {
	return request({
		url: '/system/management/addActiveData',
		method: 'post',
		data: data
	})
}
// 获取机构信息
export function getByAppIdInformation(query) {
  return request({
    url: '/system/information/getByAppId',
    method: 'get',
    params: query
  })
}

export function payInfoTj(id) {
  return request({
    url: '/system/appletF/createTjbgOrder?userId=' + id,
    method: 'get'
  })
}
