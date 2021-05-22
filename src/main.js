import Vue from 'vue'
import App from './App.vue'
// import 'expose-loader?$!expose-loader?jQuery!jquery'
  //jquery사용
import router from './router'           //router 사용
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'     //3~14 booystrap code

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
