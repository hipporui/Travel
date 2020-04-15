<template>
  <div id="app">
    <div id="nav">
      <ul class="tab-bar">
      <router-link tag="li" to="/">
            <i class="iconfont home-logo">&#xe603;</i>
            <span>首页</span>
      </router-link>
      <router-link tag="li" to="/city">
           <i class=" iconfont">&#xe68a;</i>
            <span>城市</span>
      </router-link>
      <router-link tag="li" to="/mine">
             <i class=" iconfont">&#xe635;</i>
            <span>我的</span>
    </router-link>
  </ul>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
  </div>
</template>


<script>
export default {
  // mounted(){
  //   this.axios('/hippo').then(
  //     res=>console.log(res)   
  //   )
  // }
}
</script>

<style lang="scss">
// @import "./assets/scss/onepx.scss";

.tab-bar{
  z-index: 999;
  position: relative;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  display: flex;
  flex-direction: row;
  // background-color: #fcfcfc;
  background-color: #fff;
  li {
    flex: 1;
    color: #999;
    display: block;
    margin-top: 1px;
    // background: #fff;
    i {
      display: block;
      width: 25px;
      height: 25px;
      margin: 3px auto;
      
      background-size: 10px auto;
    }
    span {
      display: block;
      font-size: 12px;
      padding-bottom: 5px;
    }
  }
}
// .tab-bar li{
//   flex: 1;
//   display: inline-block;
//   line-height: 45px;
//   font-size: 14px;
//   text-align: center;
// }
.tab-bar .exact-acrive{
  color: #09bed5;
  // background-color:#fff;
}

</style>
