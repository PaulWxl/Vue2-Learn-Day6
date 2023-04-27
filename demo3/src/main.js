import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// Vue.prototype: Vue 是在 Vue.js 应用程序中可用的全局对象，而 prototype 是 Vue 对象的特殊属性，您可以在其中定义属性和方法，这些属性和方法将在 Vue 类的所有实例之间共享。

// axios = axios: 这将 Axios 库分配给 Vue.prototype 对象上名为 axios 的属性。这使得 axios 库可以从任何 Vue 组件内部访问，如 this.axios。

// 因此，这行代码有效地使Axios库在整个Vue.js应用程序中可用，并且任何组件都可以通过访问this.axios来使用它。这是在Vue.js应用程序中配置全局依赖项的常用方法。
// Vue.prototype.axios = axios---一般把 axios 命名为 $http---原因： Vue 内置 的 一些 成员， 都以 $ 开头，模仿 Vue 内置 的 一些 成员。

// 今后， 在 每个 Vue 组件 中， 要发起请求， 直接调用 this.$http.get/post/delete
Vue.prototype.$http = axios

// 配置axios请求的默认根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

new Vue({
  render: h => h(App)
}).$mount('#app')
