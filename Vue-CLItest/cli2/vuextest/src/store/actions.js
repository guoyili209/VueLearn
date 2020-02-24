const actions = {
    updateInfo(context,payload){
        return new Promise((resovle,reject)=>{
            setTimeout(()=>{
                context.commit('addCount',100);
                resovle('执行成功');
            },2000)
            
        })
    }
}
export default actions;