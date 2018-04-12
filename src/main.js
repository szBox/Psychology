// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'
import $ from 'jquery'
import router from './router'
import Swiper from 'swiper'
import VueScroller from 'vue-scroller'
import  { ToastPlugin } from 'vux' /* 全局toast */
import { Tab, TabItem } from 'vux'
/*tab*/
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
import '@/assets/css/common.css'
import '@/assets/css/style.less'
import 'swiper/dist/css/swiper.min.css'

import '@/assets/js/rem.js'
Vue.use(Vuex)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(VueScroller)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
