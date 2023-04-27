<template>
  <div class="left-container">
    <h3>这是 Left 组件</h3>
    <button @click="getRequest">发起GET请求</button>
    <button @click="getBooksInfo">获取图书列表数据</button>
  </div>
</template>

<script>
// import axios from 'axios'--- 在 main.js 中 配置了 全局依赖项 之后， 可以不导入了， 在请求中 使用 this.axios
export default {
  methods: {
    async getRequest() {
      // 解构赋值
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    },
    async getBooksInfo() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  background-color: orange;
  min-height: 200px;
  flex: 1;
}
</style>
