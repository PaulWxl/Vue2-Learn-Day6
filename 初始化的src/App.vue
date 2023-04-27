<template>
  <div class="app-container">  
      <h1> App.vue 根组件 </h1>
      <hr>

    
    <div class="box">
      <!-- 渲染 Left 和 Right 组件  -->
    </div>
  </div>

  
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
}
</script>


<style lang="less" scoped>
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
  .box {
    display: flex;
  }
}
</style>
