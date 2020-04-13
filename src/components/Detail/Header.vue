<template>
<div>
  <router-link tag="div" to="/" class="header-abs" v-show="showAbs"><div class="iconfont header-abs-icon">&#xe624;</div></router-link>
  <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
     <router-link to="/">
    <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
    景点详情
  </div>
</div>
</template>

<script>

export default {
  name:'DetailHeader',
  data() {
    return {
     showAbs:true,
     opacityStyle:{
       opacity:0
     }
    }
  },
  methods:{
    handleScroll(){
      let top = document.documentElement.scrollTop
      if(top>60){
        let opacity= top/140
        opacity = opacity>1?1:opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }else{
        this.showAbs =  true
      }
      // console.log(document.documentElement.scrollTop);
      
    }
  },
  activated() {
    window.addEventListener('scroll',this.handleScroll)
  },
  components:{
    
  },
  
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/varibles.scss';
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .7rem;
    height: .7rem;
    border-radius: .4rem;
    text-align: center;
    line-height: .7rem;
    background: rgba(0,0,0,.8);
    .header-abs-icon{
      color: #fff;
      font-size: .3rem;
    }
  }

  .header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $HeaderHeight;
    line-height: $HeaderHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align:center;
      font-size: .4rem;
      color: #fff;
    }
  }
  
</style>