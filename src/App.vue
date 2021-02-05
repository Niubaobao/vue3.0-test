<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },

  setup() {
    const theme = ref(11);

    /*
    缺点：
    祖先组件不知道哪些后代需要他提供数据
    后代组件也不知道数据来源自哪里
    重构很难，稍微不注意或者改变层级有可能影响之前的传递数据过程
    */
    provide("theme", theme);
  },
});
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