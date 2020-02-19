import Vue from 'vue'
import Router from 'vue-router'
import TabBar from '../components/tabbar/TabBar'

const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const Cart=()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'',
        redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})
