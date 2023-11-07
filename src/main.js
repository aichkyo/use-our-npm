import Vue from 'vue'
import App from './App.vue'
import hroaUI from "hroa-ui";

Vue.use(hroaUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
