import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

const instance1=axios.create({

})
const instance2=axios.create({

})

import {request} from './network/request'

request({
  url:''
}).then(res=>{

}).catch(err=>{
  
})