import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
// import Index from '@/components/Index'
import Events from '../components/events/events'
import Changes from '../components/changes/changes'
import List from '../components/list'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: App
    },
    
    // 事件管理
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/event/list',
      name: 'eventslist',
      component: List
    },
    {
      path: '/rest/event/:eventId',
      name: 'eventdetail',
      component: Detail
    },
    
    // 问题管理
    {
      path: '/issues',
      name: 'issues',
      component: List
    },
    {
      path: '/changes',
      name: 'changes',
      component: Changes
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/eventdetail',
      name: 'eventdetail1111',
      component: Detail
    }
  ],
  mode:'history'
})
