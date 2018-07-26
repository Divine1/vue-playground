<template>
  <div id="app">
    <input type="text" v-model="emitt" />
    <button @click="trigger">trigger</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      emitt : ""
    }
  },
  methods:{
    trigger(){
      console.log("in trigger ",this.emitt);
      this.$store.dispatch("socket_testMessage",this.emitt)
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
