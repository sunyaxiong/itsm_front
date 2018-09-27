import axios from 'axios';


let host = 'http://192.168.37.139:9999';

// ------------ 事件相关接口 事件列表
export const queryEventList = params => { return axios.get(`${host}/rest/event/`) };

// 事件详情
export const getEventDetail = eventId => {
	return axios.get(`${host}/rest/event/${eventId}`+'/')
};
// 创建事件
export const createEvent = params => {
	return axios.post(`${host}/rest/event/`, params)
};
// 事件更新接口
export const putEventDetail = (eventId, params) => {
	return axios.put(`${host}/rest/event/${eventId}`+'/', params)
};

// 事件操作记录列表
export const getEventLogs = params => {
	return axios.get(`${host}/rest/event_log/`, { params: params })
};
// 事件附件列表
export const getEventAtt = params => {
	return axios.get(`${host}/rest/event_att/`, params)
};
// 事件操作记录更新
export const postEventLogs = params => {
	return axios.post(`${host}/rest/event_log/`, params)
};

// ------------- 问题管理相关接口 问题列表
export const queryIssueList = params => {
   return axios.get(`${host}/rest/issue/`, params)
};
// 问题详情
export const getIssueDetail = issueId => {
	return axios.get(`${host}/rest/issue/${issueId}`+'/')
};

// 变更相关接口
export const queryChangeList = params => {
  return axios.get(`${host}/rest/change/`, params)
};
// 变更详情
export const getChangeDetail = changeId => {
	return axios.get(`${host}/rest/change/${changeId}`+'/')
};
// 变更更新接口
export const putChangeDetail = (changeId, params) => {
	return axios.put(`${host}/rest/change/${changeId}`+'/', params)
};
// 变更日志
export const getChangeLogs = params => {
	return axios.get(`${host}/rest/change_log/`, params)
};
// 变更操作记录更新
export const postChangeLogs = params => {
	return axios.post(`${host}/rest/change_log/`, params)
};


// 用户认证、登陆
export const login = params => { return axios.post(`${host}/login/`, params) };

export const getUserList = params => {
	return axios.get(`${host}/rest/user/`, params)
};

export const getUserDetail = userId => {
	return axios.get(`${host}/rest/user/${userId}` + '/')
};
