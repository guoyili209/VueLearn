import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        conter:1000
    },
    mutations:{
        //方法
        increment(state){
            state.conter++;
        },
        decrement(state){
            state.conter--;
        }
    },
    actions:{},
    getters:{},
    modules:{}
})

export default store;
