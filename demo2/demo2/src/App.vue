<template>
  <div class="app-container">  
      <!-- 自定义 指令 : v- 是统一的 前缀， color 才是 指令 的 名称。  -->
      <h1 v-color="blue"> App.vue 根组件 </h1>
      <button @click="blue = 'green'">改变App根组件颜色</button>
      <p v-color="red">测试</p>
      <button @click="red = '#6c99c5'">改变测试的颜色</button>
      <hr>
      <h2 v-color="pink">你好</h2>

    

      <Article>
        <!-- 标题 -->
        <template #title>
            <h1>这是文章标题</h1>
        </template>

        <!-- 内容 -->
        <template #content="{msg, user}">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <!-- obj 是 slot 中 定义的 msg , 可以 使用 obj.msg 得到 msg 的 值， 上面 还是， #content="obj"  -->
            <!-- <p>{{ obj.msg }}</p> -->
            <!-- <p>{{ scope.msg }}</p>
            <p>{{ scope.user.username }}</p>
            <p>{{ scope.user.age }}</p> -->


            <p>{{ msg }}</p>
            <p>{{ user.username }}</p>
            <p>{{ user.age }}</p>
        </template>

        <!-- 作者 -->
        <template #author>
          <p>作者： 魏小磊</p>
          
        </template>

      </Article>
      <hr>

    <div class="box" style="display: none;">
      <!-- 渲染 Left 和 Right 组件  -->
      <Left>
        <!-- 必须 得加 插槽 才能 被 渲染 出来 ， 在 Left 组件 的 template 中 使用  插槽标签：-- slot标签 -->
        <!-- <p>这是在 Left 组件的 内容 区域 声明 的 p 标签。 </p> -->


        <!-- 指定内容， 要放到 哪个 插槽 中  -->
        <!-- 这个 template 只 起到 一个 包裹性 的 作用， 不会 被 渲染 成 任何 元素  -->
        <!-- v-slot 必须 加在 template 中， 所以 外面 要 套一个 template 标签  -->
        <!-- <template #default>
          <p>这是在 Left 组件的 内容 区域 声明 的 p 标签。 </p>
        </template>

        <template #test>
          <p>test</p>
        </template> -->
        <!-- <template #default>
          <p>这是在 Left 组件的 内容 区域 声明 的 p 标签。 </p>
        </template> -->

      </Left>


      <Right>
        <template #default>
          <h1>这是Right组件</h1>
        </template>
        

      </Right>
    </div>
  </div>

  
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Article from '@/components/Article.vue'

export default {
  components: {
    Left,
    Right,
    Article 
  },
  data() {
    return {
      // blue,red,pink 需要 在 data 中 定义  
      blue: 'blue',
      red: 'red',
      pink: 'pink'
    }
  },
  directives: {
    // color: {
    //   // 建议用 binding , binding.value 就是 对应 的 值
    //   // 只在 第一次 绑定 到 元素 身上， 才会 触发
    //   bind(el, binding) {
    //     el.style.color = binding.value
    //   },
    //   // update函数， 使 每次 DOM 更新时 都会 重新 调用 自定义 指令 
    //   update(el, binding) {
    //     el.style.color = binding.value 
    //   }
    // }


    // 当 bind 和 update 函数 中 逻辑 相同时， 可以 用 简写 形式 
    // 指令名(el,binding) 
    color(el, binding)  {
      el.style.color = binding.value 
    }
  }
}
</script>


<style lang="less" scoped>
.app-container {
  padding: 1px 20px 20px;
  // background-color: #efefef;
  .box {
    display: flex;
  }
}
</style>
