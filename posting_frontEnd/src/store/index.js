import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router'
import status from '@/store/modules/status.js' 
import users from '@/store/modules/users.js'
import posts from '@/store/modules/posts.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    users,
    posts,
    status
  }
})