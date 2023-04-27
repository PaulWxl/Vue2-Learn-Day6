<template>
  <div class="Article-container">

    <h3 v-color="grey">Article 组件</h3>
    <button @click="grey = 'pink'">改变Article 组件 的 颜色</button>
    
    <!-- 文章的标题 -->
    <div class="header-box">
        <slot name="title"></slot>

    </div>
    <!-- 文章的内容 -->
    <div class="content-box">
        <slot name="content"  msg="hello" msg2="hello msg2" :user="userinfo"></slot>
        
    </div>
    <!-- 文章的作者 -->
    <div class="footer-box">
        <slot name="author"></slot>
        
    </div>
  </div>
</template>

<script>
export default {
    //  组件 的 name 首字母 要大写 
    name: 'Article',
    data() {
        return {
            // 定义 一个 用户信息
            userinfo: {
                username: 'zhangsan',
                age: 20
            },
            grey: 'grey'
        }
    }

}
</script>

<style lang="less" scoped>
    .Article-container{
        > div {
        min-height: 200px;

        }
        .header-box {
            background-color: aqua;
        }
        .content-box {
            background-color: pink;
        }
        .footer-box {
            background-color: orange;
        }
        
    }
</style>