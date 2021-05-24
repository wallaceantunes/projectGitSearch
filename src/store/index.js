import Vue from 'vue'
import Vuex from 'vuex'

import { UserModule } from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    loading: false
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {

  },
  modules: {
    user: UserModule
  }
})
