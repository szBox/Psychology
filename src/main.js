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
import store from './Vuex/store'
import vuexI18n from 'vuex-i18n';  
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
Vue.use(vuexI18n.plugin,store)

Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(VueScroller)

FastClick.attach(document.body)

Vue.config.productionTip = false

const translationsEn = {  
    "content": "This is some {type} content"  
};  
  
// translations can be kept in separate files for each language  
// i.e. resources/i18n/de.json.  
// add translations directly to the application  
Vue.i18n.add('en', translationsEn);  
  
// set the start locale to use  
Vue.i18n.set('en');  

/* eslint-disable no-new */
new Vue({
  router,
  data:{
	eventHub:new Vue()
	},
  render: h => h(App)
}).$mount('#app-box')

//
