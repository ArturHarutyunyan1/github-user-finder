import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user: []
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    async userSearch({commit}, query){
      return axios(`https://api.github.com/users/${query}`, {method: "GET"})
      .then((res) => {
        commit('setUser', res.data)
      })
    }
  }
})
