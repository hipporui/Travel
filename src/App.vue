<template>
  <div id="app">
    <div id="nav">
      <div class="tab-bar">
      <router-link tag="span" to="/">首页</router-link>
      <router-link tag="span" to="/city">城市</router-link>
      <router-link tag="span" to="/mine">我的</router-link>
      </div>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <keep-alive>
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
.tab-bar{
  z-index: 999;
  position: fixed;
  height: 45px;
  background-color: #ccc;
  left: 0;
  bottom:0;
  width: 100vw;
  display: flex;
}
.tab-bar span{
  flex: 1;
  display: inline-block;
  line-height: 45px;
  font-size: 14px;
  text-align: center;
}
.tab-bar .exact-acrive{
  color: #09bed5;
  background-color:#fff;
}
</style>
