import axios from 'axios';


let host = 'http://192.168.37.139:9999';

//事件相关接口

// 事件列表
export const queryEventList = params => { return axios.get(`${host}/rest/event/`) }

// 事件详情
export const getEventDetail = eventId => { return axios.get(`${host}/rest/event/${eventId}`+'/') }