import Vue from 'vue'
import Vuex from 'vuex'
import service from "../service.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    getUser:(state,user) => {
      state.user = user
    }
  },
  actions: {
    getUser:async ({commit}) => {
      const user = await service.getUser()
      commit("getUser",user)
    }
  },
  getters:{
    user:({user}) => user
  },
  modules: {
  }
})
