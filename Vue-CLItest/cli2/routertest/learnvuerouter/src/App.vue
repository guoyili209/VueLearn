<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" tag='button'>用户</router-link> -->
    <!-- <router-link v-bind:to="{path:'/profile',query:{name:'xyz',age:18,height:1.87}}" tag="button">档案</router-link> -->
    <button @click="userClick()">用户</button>
    <button @click="profileClick()">档案</button>
    <keep-alive>
      <router-view />
    </keep-alive>
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
  },
  created(){ //当前对象被初始化是调用

  },
  computed(){ //被安装到dom树上的时候调用

  },
  updated(){ //被刷新的时候调用

  }
};
</script>

<style>
</style>
