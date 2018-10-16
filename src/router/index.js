import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main'
import cookie from '../assets/js/cookie';
// import Index from '@/components/Index'
import eventList from '../components/events/eventList'
import changeList from '../components/changes/changeList'
import releaseList from '../components/releases/releaseList'
import issueList from '../components/issues/issueList'
import eventDetail from '../components/events/eventDetail'
import changeDetail from '../components/changes/changeDetail'
import issueDetail from '../components/issues/issueDetail'
import releaseDetail from '../components/releases/releaseDetail'
import eventCreate from '../components/events/eventCreate'
import Login from '../components/login/login'
import userInfo from '../components/accounts/userInfo'

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: "ITSM 登陆"
      },
    },

    {
      path: '/',
      name: 'app',
      component: Main,
      meta: {
        title: "ITSM servcie"
      },
      children: [
        // 用户信息维护
        {
          path: '/user/userinfo',
          name: 'userProfile',
          component: userInfo
        },
        // 事件管理
        {
          path: '/event/list',
          name: 'eventlist',
          component: eventList,
          meta: {
            title: "event list"
          }
        },
        {
          path: '/rest/event/:eventId',
          name: 'eventdetail',
          component: eventDetail
        },
        {
          path: '/event/create',
          name: 'event_create',
          component: eventCreate,
          meta: {
            title: "创建事件"
          }
        },

        // 问题管理
        {
          path: '/issue/list',
          name: 'issues',
          component: issueList
        },
        {
          path: '/issue/:issueId',
          name: 'issueDetail',
          component: issueDetail
        },
        // 变更管理
        {
          path: '/change/list',
          name: 'changelist',
          component: changeList
        },
        {
          path: '/rest/change/:changeId',
          name: 'changedetail',
          component: changeDetail
        },
        // 发布管理
        {
          path: '/release/list',
          name: 'releaselist',
          component: releaseList
        },
        {
          path: '/release/:releaseId',
          name: 'releasedetail',
          component: releaseDetail
        },
      ]
    }
  ],
  mode:'history'
});


//进行路由判断
// router.beforeEach((to, from, next)=>{
//   console.log("路由判断TODO");
// })
// router.beforeEach((to, from, next) => {
//   var nextPath = cookie.getCookie('nextPath')
//   console.log(nextPath)
//   if(nextPath=="pay"){
//     next({
//       path: '/',
//     });
//   }else{
//     if(to!=undefined){
//       if(to.meta.need_log){
//         console.log(to.meta.need_log)
//         if(!store.state.userInfo.token){
//           next({
//             path: '/login',
//           });
//         }else {
//           next('/');
//         }
//       }else {
//         if (to.path === '/') {
//           next({
//             path: '/',
//           });
//         }else {
//           next();
//         }
//       }
//     }else {
//       if (to.path === '/') {
//         next({
//           path: '/',
//         });
//       }else {
//         next();
//       }
//     }
//   }
// })

//修改网页标题
router.afterEach((to, from, next) => {
  document.title = to.matched[to.matched.length - 1].meta.title;
})

//抛出路由
export default router;
