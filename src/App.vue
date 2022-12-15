<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <div class="navBar">
      <ul>
        <li>
         <router-link to="/films"><img src="./assets/film.png"><br>电影</router-link>
        </li>
        <li>
          <router-link to="/cinemas"><img src="./assets/cinemas.png"><br>影院</router-link>
        </li>
        <li>
          <router-link to="/amazin"><img src="./assets/amazin.png"><br>资讯</router-link>
        </li>
        <li>
          <router-link to="/me"><img src="./assets/me.png"><br>我的</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d2d9e0;
}
.navBar{
  width: 100%;
  height: 40px;
  position: fixed;
  display: flex;
  bottom: 0;
}
.navBar ul{
  width: 100%;
  height: 100%;
  list-style: none;
  border-top: 1px #f8f4f4;
}
.navBar ul li{
  float: left;
  width: 25%;
  height: 100%;

}
.navBar ul li a{
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #141515;
  font-size: 5px;
  background-color: ghostwhite;
}
img{
  width: 20px;
  height: 20px;

}
</style>
