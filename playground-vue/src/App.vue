<template>
  <div>
    <h2 style="text-align:center;">{{msg}}</h2>
    <div id="header">
      <router-link to="/" tag="div"  active-class="active" exact>Home</router-link>
      <router-link to="/computed" tag="div" active-class="active">Computed</router-link>
      <router-link to="/method" tag="div" active-class="active" >Method</router-link>
      <router-link to="/watch" tag="div" active-class="active" exact>Watch</router-link>
      <router-link to="/dynamic/india" tag="div" active-class="active" exact>DynamicRoutes</router-link>
      
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Playground'
    }
  }
}
</script>

<style>

#header{
  
}
#header div{
  border: 1px solid green;  
  padding: 10px;
}
#header,#header div{
  display: inline-block;
  
}
.active{
  background-color:brown;
  color:white;
  font-weight: bold;
  
}
</style>
