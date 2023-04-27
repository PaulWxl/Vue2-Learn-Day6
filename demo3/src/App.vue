<template>
  <div>
    <h1>App 根组件</h1>
    <button @click="getBooksInfo">获取图书列表数据</button>

    <hr />

    <div class="box">
      <myLeft></myLeft>
      <myRight></myRight>
    </div>
  </div>
</template>

<script>
import myLeft from '@/components/myLeft.vue'
import myRight from '@/components/myRight.vue'

export default {
  components: {
    myLeft,
    myRight
  },
  methods: {
    async getBooksInfo() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}
</style>
