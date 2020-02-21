import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

Vue.use(Vuex)

const moduleA={
    state:{
        name:'xxx'
    },
    getters:{
        getName(state){
            return state.name;
        }
    },
    mutations:{
        setName(state,payload){
            state.name=payload;
        }
    },
    actions: {
        // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
        modifyName ({ state, commit, rootState },payload) {
            return new Promise((resovle,reject)=>{
                setTimeout(()=>{
                    commit('setName',payload);
                    resovle('名字修改成功');
                },3000)
                
            })
        }
      }
}
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
    actions:{
        updateInfo(context,payload){
            return new Promise((resovle,reject)=>{
                setTimeout(()=>{
                    context.commit('addCount',100);
                    resovle('执行成功');
                },2000)
                
            })
        }
    },
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
