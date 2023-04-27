<template>
  <div class="right-container">
    <h1>Right 组件</h1>
  </div>
</template>

<script>
export default {
  // 用 name 属性， 给 组件 起 一个 名称
  name: 'MyRight',

  // keep-alive 的 两个 生命周期函数
  // activated(): 组件 激活 时 触发
  // deactivated(): 组件 缓存 时 触发
  activated() {
    console.log('Right被激活了')
    console.log('---------------------')
  },
  deactivated() {
    console.log('Right被缓存了')
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
  h1 {
    font-size: 1rem;
  }
}
</style>
