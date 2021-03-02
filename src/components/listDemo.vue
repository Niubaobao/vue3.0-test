<!-- v-for 集中抽离-->
<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in state.stus"
        :key="item.id"
        @click="remStu(index)"
      >
        {{ item.name }}---{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "listDemo",
  setup() {
    let { state, remStu } = useRemoveStudent();
    return { state, remStu };
  },
};

// 把相同业务进行抽离
function useRemoveStudent() {
  let state = reactive({
    stus: [
      { id: 1, name: "zs", age: 10 },
      { id: 2, name: "ls", age: 20 },
      { id: 3, name: "ww", age: 30 },
      { id: 4, name: "zl", age: 40 },
    ],
  });

  function remStu(index) {
    state.stus = state.stus.filter((stu, idx) => idx !== index);
  }
  return { state, remStu };
}
</script>

<style>
</style>    