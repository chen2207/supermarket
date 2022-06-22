import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  //把render指定的组件渲染到html页面中
  render: h => h(App),
  router,
  store
}).$mount('#app')
