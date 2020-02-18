<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" tag='button'>用户</router-link> -->
    <!-- <router-link v-bind:to="{path:'/profile',query:{name:'xyz',age:18,height:1.87}}" tag="button">档案</router-link> -->
    <button @click="userClick()">用户</button>
    <button @click="profileClick()">档案</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  },
  methods: {
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:1.87
        }
      });
    }
  }
};
</script>

<style>
</style>
