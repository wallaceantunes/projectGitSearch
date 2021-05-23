import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false
Vue.component('vue-feather', VueFeather)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
