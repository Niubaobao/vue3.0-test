<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <list-demo></list-demo>
  <el-button @click="handleClick" disabled="true" type="success" icon="el-icon-edit" loading>这是按钮</el-button>
  <el-radio :label="2233111"></el-radio>
   <!-- <div>备注：{{this.$store.getters.getStatus}}</div> -->
   <router-link to="/">首页</router-link>
   <router-link to="/mine">我的</router-link>
   <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ListDemo from './components/listDemo.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ListDemo,
  },


  methods:{
    handleClick(){
      console.log('handleClick')
    }
  },

  setup() {
    const theme = ref(11)
    /*
    缺点：
    祖先组件不知道哪些后代需要他提供数据
    后代组件也不知道数据来源自哪里
    重构很难，稍微不注意或者改变层级有可能影响之前的传递数据过程
    */

    provide('theme1', theme)
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
