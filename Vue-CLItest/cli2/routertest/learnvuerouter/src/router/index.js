//配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home'
import About from '../components/about'

//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象
const routes=[
  {
    path:'',
    redirect:'/home'//重定向
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
})
export default router