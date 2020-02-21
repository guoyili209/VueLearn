<template>
  <div class="hello">
    <h2>{{ $store.getters.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <h2>{{ $store.getters.getName }}</h2>
  </div>
</template>

<script>
import {INCREMENT} from '../store/mutations-types'
export default {
  name: "HelloWorld",
  created(){
    this.$store.dispatch('updateInfo').then((res)=>{
      console.log(res);
    })
    this.$store.dispatch('modifyName','多肉葡萄').then((res)=>{
      console.log(res);
    })
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      //普通提交风格
      this.$store.commit("addCount", count /*payload负载(专业名称)*/);
      //对象提交风格
      // this.$store.commit({
      //   type: "increment",
      //   count: 10
      // });
      //响应式增删属性
      // Vue.set(obj,'xx',1);
      // Vue.delete(obj,'xx');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
