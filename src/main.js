// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import 'vue/dist/vue.min.js'
import './assets/bower_components/bootstrap/dist/css/bootstrap.min.css'
import './assets/bower_components/font-awesome/css/font-awesome.min.css'
import './assets/bower_components/Ionicons/css/ionicons.min.css'
import './assets/dist/css/AdminLTE.min.css'
import './assets/dist/css/skins/skin-blue.min.css'
import './assets/bower_components/jquery/dist/jquery.min.js'
import './assets/bower_components/bootstrap/dist/js/bootstrap.min.js'
import './assets/dist/js/adminlte.min.js'

// Vue.use(Router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
