<template>
 <div class="filmBar">
   <ul>
     <li><router-link to="/films/nowPlaying">正在上映</router-link></li>
     <li><router-link to="/films/comingSoon">即将上映</router-link></li>
   </ul>
   <router-view/>
 </div>
</template>

<script>
export default {
  name: "FilmView"
}
</script>

<style scoped>
.filmBar{
  width: 100%;
  height: 50px;
  list-style: none;
  border-bottom: 1px solid gainsboro;
}
.filmBar li{
  float: left;
  width: 50%;
  height: 100%;
  list-style: none;
}
.filmBar li a{
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  line-height: 50px;
}


</style>
