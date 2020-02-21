<template>
  <div class="hello">
    <h2>{{ $store.state.conter }}</h2>
    <button @click="add">+</button>
      <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    add(){
      this.$store.commit('increment');
    },
    sub(){
      this.$store.commit('decrement');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
