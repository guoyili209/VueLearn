/*
* Author: guoyili
* email: guoyili209@gmail.com
* Date: 2020-02-20 10:02:37
*/
<template>
 <div>
     <tab-bar>
      <tab-bar-item link="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="../assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile"> 
        <img slot="item-icon" src="../assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="../assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
 </div>
</template>

<script scoped>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
 export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
 }
</script>

<style scoped>

</style>