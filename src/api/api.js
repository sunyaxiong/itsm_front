import axios from 'axios';


let host = 'http://192.168.37.139:9999';

//事件相关接口

// 事件列表
export const queryEventList = params => { return axios.get(`${host}/rest/event/`) }

// 事件详情
export const getEventDetail = eventId => {
	return axios.get(`${host}/rest/event/${eventId}`+'/')
}

export const putEventDetail = (eventId, params) => {
	return axios.put(`${host}/rest/event/${eventId}`+'/', params)
}

// 变更相关接口
export const queryChangeList = params => { return axios.get(`${host}/rest/change/`) }

// 事件操作记录列表
export const getEventLogs = params => {
	return axios.get(`${host}/rest/event_log/`, { params: params })
}
// 事件附件列表
export const getEventAtt = params => {
	return axios.get(`${host}/rest/event_att/`, params)
}

export const postEventLogs = params => {
	return axios.post(`${host}/rest/event_log/`, params)
}


// 用户认证、登陆
export const login = params => { return axios.post(`${host}/login/`, params) }

export const getUserDetail = userId => {
	return axios.get(`${host}/rest/user/${userId}` + '/')
}
