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

export default moduleA