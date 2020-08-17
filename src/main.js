import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import '../public/static/css/reset.css'
import '../public/static/css/font-awesome.min.css'
import 'lib-flexible'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
