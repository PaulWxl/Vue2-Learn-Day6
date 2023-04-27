<template>
  <div class="left-container">
      <h1>Left 组件</h1>
      <hr>

      <!-- 声明一个插槽区域 -->
      <slot name="default">
        <h1>这是 Left组件 插槽 的 后备 内容</h1>
      </slot>

  </div>
</template>

<script>
export default {
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
