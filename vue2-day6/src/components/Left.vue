<template>
  <div class="left-container">
      <h1>Left 组件---count: {{ count }}</h1>
      <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  // 用 name 属性， 给 组件 起 一个 名称
  name: 'MyLeft',
  created() {
    console.log('Left被创建了')// 每次切换 到 Left组件 都会 重新创建
  },

  destroyed() {
    console.log('Left被销毁了')// 每次切换后， Left 组件 都会 被 销毁
  },

  // keep-alive 的 两个 生命周期函数
  // activated(): 组件 激活 时 触发
  // deactivated(): 组件 缓存 时 触发
  activated() {
    console.log('Left被激活了')
    console.log('---------------------')

  },
  deactivated() {
    console.log('Left被缓存了')
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
  h1{
    font-size: 1rem;
  }
}
</style>
