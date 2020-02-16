//commonjs
// const {add,mul} =require('mathUtils.js');
const math=require('./js/mathUtils.js');

console.log('hello webpack');
console.log(math.add(10,20));
console.log(math.mul(10,20));

//es6
import {name} from './js/info.js';

console.log(name);

require('./css/normal.css');
require('./css/special.less');

document.writeln("测试\n");

//使用vue进行开发
import Vue from 'vue';
import App from './js/vue/App.vue';

const app = new Vue({
    el:'#app',
    template:'<App/>',
   components:{
       App
   }
})

document.writeln('122');