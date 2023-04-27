<template>
  <div class="app-container">  
      <h1> App.vue 根组件 </h1>
      <hr>

      <button @click="comName = 'Left'">展示Left 组件</button>
      <button @click="comName = 'Right'">展示Right 组件</button>
      <hr>
    
    <div class="box">
    <!-- 渲染 Left 组件 和 Right 组件  -->
    <!-- 这是一次性的写死了：--展示Left和Right  -->
      <!-- <Left></Left>
      <Right></Right> -->
       <!-- is 指向 哪个 名称， 就会把 这个 组件 渲染 到 它所在的 位置。 -->
       <!-- is 前面 不用 加 v-bind， 红线不用管！ -->
       <!-- component 就是 用来占位的， 哪个组件 放到 is 中， 就展示 哪个组件。is 属性的 值， 表示 要 渲染 哪个 组件。   -->
       <!-- <component is="Left"></component>
       <component is="Right"></component> -->

       <!-- 不想让 is 写死， 定义一个数据， comName  -->
       <!-- <component :is="comName"></component> -->

       <!-- 为了 保证 切换后 不会 被 销毁， 所以 使用 keep-alive 标签 ， 使用 方法：-- 包裹起来 component , keep-alive 标签 可以 把 包裹的 组件 进行 缓存 ， 这样 在 切换 时 就不会 被 销毁。 -->

       <!-- 哪些组件 需要 被缓存， 就放到 include 里面 即可。 include 里面 的 属性名 一定是 组件 的 注册名称。  -->
       <!-- 需要注意的是， include 中 如果 有 多个值，有且只能有 逗号 分隔， 不能 有 空格！ -->
        <keep-alive include="MyLeft,MyRight">
          <component :is="comName"></component>

        </keep-alive>
    </div>
  </div>

  
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
    return {
      // com: component 是 组件 的 意思，comName 表示 要展示 的 那个 组件 的 名称，   默认等于 Left 
      comName: 'Left'
    }
  },
  components: {
    // 如果在 声明组件（template 中 使用） 的 时候， 没有为组件指定 name 名称（在 对应 组件 的 export default {} 中 定义 name 属性， 和 methods 平级。 ） ，则 组件 的 名称 默认就是 注册 时候 的 名称。
    Left,
    Right
  },
  
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
