import Vue from 'vue'
import App from './App.vue'

// 全局引入UI组件
import hroaUI from "hroa-ui";
// 引入样式
import 'hroa-ui/dist/hrui.css';
// 组册
Vue.use(hroaUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
