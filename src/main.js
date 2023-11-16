import Vue from 'vue'
import App from './App.vue'

// 全局引入UI组件
import hroaUI from "hroa-ui";
// 引入样式
import 'hroa-ui/lib/index/index.css';
// 注册
console.log('hroaUI :>> ', hroaUI);
Vue.use(hroaUI)

// // 按需引入
// import { 
//   hrButton,
//   // hrInput
// } from "hroa-ui";

// console.log('hrButton :>> ', hrButton);

// Vue.use(hrButton)
// Vue.use(hrInput)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
