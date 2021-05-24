import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import '@/assets/scss/index.scss'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import moment from 'moment'

Vue.config.productionTip = false
Vue.component('vue-feather', VueFeather)
Vue.use(VueToast)
Vue.prototype.moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
