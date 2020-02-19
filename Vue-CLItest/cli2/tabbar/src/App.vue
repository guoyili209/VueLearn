<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="./assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="./assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile"> 
        <img slot="item-icon" src="./assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
