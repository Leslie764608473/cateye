import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header/Header.vue'
import router from './router/index.js'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.component('Header',Header)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})