import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'
import action from './actions'
import moduleA from './modules/moudelA'
import actions from './actions'

Vue.use(Vuex)

const moduleB={
    state:{
        name:'yyy'
    }
}

const store = new Vuex.Store({
    //相当于变量
    state:{
        conter:1000
    },
    //同步方法
    mutations:{
        //方法
        [INCREMENT](state){
            state.conter++;
        },
        decrement(state){
            state.conter--;
        },
        addCount(state,payload){
            state.conter+=payload;
            // state.conter+=payload.count;
        }
    },
    //异步方法
    actions:actions,
    //相当于计算属性compute
    getters:{
        counter(state){
            return state.conter;
        },
        //注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
        // getTodoById: (state) => (id) => {
        //     return state.todos.find(todo => todo.id === id)
        // }
    },
    modules:{
        a:moduleA,
        b:moduleB
    }
})

export default store;
