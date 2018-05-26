import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
  state: {
  		
  },
  mutations: {

  },
  actions: {

  }
}
const moduleB = {
  state: {
  		
  },
  mutations: {

  },
  actions: {

  }
}
const moduleC = {
  state: {
  		
  },
  mutations: {

  },
  actions: {

  }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
  },
  types:''
})

export default store