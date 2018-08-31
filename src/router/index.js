import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main'
import cookie from '../assets/js/cookie';
// import Index from '@/components/Index'
import Events from '../components/events/events'
import Changes from '../components/changes/changes'
import List from '../components/list'
import Detail from '../components/detail'
import Login from '../components/login/login'

Vue.use(Router)

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
        // 事件管理
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
        },
      ]
    }
  ],
  mode:'history'
})


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