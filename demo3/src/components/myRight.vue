<template>
  <div class="right-container">
    <h3>这是 Right 组件</h3>
    <button @click="postRequest">发起POST请求</button>
    <button @click="getBooksInfo">获取图书列表数据</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async postRequest() {
      const { data: res } = this.$http.post('/api/post', {
        name: 'zs',
        age: 20
      })
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
.right-container {
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
