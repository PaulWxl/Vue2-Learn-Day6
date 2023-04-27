import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  // 为false 时 是 在 控制台 中 看不到 提示的， true 时 提示 你 处于 开发模式， 上线时 需要 切换到 生产模式  

// 全局自定义指令
Vue.directive('color', (el, binding) => {
  el.style.color = binding.value 
})

new Vue({
  render: h => h(App),
}).$mount('#app')

