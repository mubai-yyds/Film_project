<template>
  <div class="container">
    <ul  class="filmList">
      <li v-for="(film,index) in filmList" :key="index">
        <div class="left">
          <img :src="film.poster">
        </div>
        <div class="center">
          <p class="title">{{film.name}}</p>
          <p class="actor">主演：
            <label v-for="(actor,actorIndex) in film.actors" :key="actorIndex">
              {{actor.name}}
            </label>
          </p>
          <p class="addr-time">{{film.nation}} | {{film.runtime}}分钟</p>
        </div>
        <div class="right">
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  data(){
    return{
      filmList:[]
    }
  },
  mounted() {
    //发送axios请求，数据
    this.axios({
      url:'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2733646',
      method:'GET',
      headers:{
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"1671009134616821728215041","bc":"310100"}',
        "X-Host":'mall.film-ticket.film.list'
      }

    }).then(res=>{
      console.log(res.data.data.films)
      this.filmList=res.data.data.films
    })

  }
}
</script>

<style scoped>

.container{
  width: 96%;
  height: auto;
  margin-left: 2%;
}
.filmList{
  width: 100%;
  height: auto;
  list-style: none;
}
.filmList li{
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #f1f1fa;
}
.left{
  float: left;
  width: 20%;
  height: 100%;
}
.left img{
  width: 100%;
  height: 70%;
  margin-top: 5%;
}
.center{
  float: left;
  width: 60%;
  height: 100%;
  text-align: left;

}
.title{
  margin-top: 8px;
  margin-left: 16px;
  color: #141515;
  font-size: 20px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.actor{
  width: 100%;
  height: 20px;
  margin-left: 14px;
  margin-top: 16px;
  font-size: 14px;
  color: gray;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.addr-time{
  margin-top: 5px;
  margin-left: 14px;
  font-size: 14px;
  color: gray;
}

.right{
  float: left;
  width: 20%;
  height: 100%;
  text-align: center;
}
.right button{
  width: 54px;
  height: 32px;
  background: none;
  border: 1px solid #ff7300;
  border-radius: 5px;
  color: orange;
  margin-top: 35px;
  margin-left: 13px;

}

</style>
