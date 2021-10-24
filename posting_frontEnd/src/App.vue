<template>
  <div id="app">
    <Navbar/>
  
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import axios from "axios"
export default {
  name:'App',
  
  components:{
    Navbar,
  },
  methods:{
    alert(){
      console.log("alert")
    }
  },
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@600&family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gluten&family=Lato:wght@400;900&family=Nunito:wght@700&display=swap');
#app {
  color: #2c3e50;
  font-family: 'Klee One', cursive;
}
*{
  box-sizing: border-box !important;
}

ol, ul {
  list-style: initial !important;
}
 
.container{
  width: 1000px;
  margin: 0 auto;
}

@media only screen and (max-width: 900px){
  .container{
    width: 100%;
    min-width: 0;
    margin: 0 auto;
  }
}
@media only screen and (max-width:700px){
  .container{
    width: 100%;
    min-width: 0;
    margin: 0 auto;
  }
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  
</style>
