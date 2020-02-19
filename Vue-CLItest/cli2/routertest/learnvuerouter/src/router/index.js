//配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home=()=>import('../components/Home')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const Profile=()=>import('../components/Profile')


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
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'news'//重定向
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
})
//导航守卫
router.beforeEach((to,from,next)=>{
  if(to.matched[0]){
      //从from跳转到to
    
  }
  document.title = to.matched[0].meta.title;
  next();
})

//后置钩子（hook）
router.afterEach((to,from)=>{
  console.log('after each')
})

export default router