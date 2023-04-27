<template>
  <div class="right-container">
    <h1>Right 组件</h1>

    <hr>

    <!-- 声明一个插槽区域 -->
    <slot name="default">
      这是Right组件 插槽 的 后备内容
    </slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
  h1{
    font-size: 1rem;
  }
}
</style>
