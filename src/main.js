import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAxios from './plugins/axios'

Vue.config.productionTip = false
Vue.prototype.$axios = VueAxios
Vue.use(VueAxios)

new Vue({
  vuetify,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
