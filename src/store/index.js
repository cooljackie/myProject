import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '我是a',
    count: 1
  },
  mutations: {
    charge_title (state,val) {
      state.title = val
    },
    charge_count (state) {
      state.count++
    }
  }
})
