<template>
    <div class='title'>
    <h2>{{message}}</h2>
    </div>
</template>
<script>
// import Cpn from './Cpn.vue';嵌套其他组件
export default {
    name:"App",
    components:{
        //嵌套其他组件
        // Cpn
    },
    data(){
        return {message:'hello world'};
    },
    methods:{
        btnClick(){

        }
    }
}
</script>
<style scoped>
.title{
    color: yellow;
}
</style>