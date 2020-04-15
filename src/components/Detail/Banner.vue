<template>
<div>
  <div class="banner" @click="BannerClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe624;</span>{{this.bannerImg.length}}</div>
    </div>
  </div>
  <Fade>
  <Gellaty :imgs="gallaryImgs" v-show="showGallary" @close="CloseClick"/>
  </Fade>
</div>
</template>

<script>
import Gellaty from '../../components/gellary/Gellaty'
import Fade from '../../components/fade/Fade'
export default {
  name:'DetailBanner',
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data() {
    return {
      showGallary:false,
    }
  },
  components:{
    Gellaty,
    Fade
  },
  methods: {
    BannerClick(){
      this.showGallary =true;
    },
    CloseClick(){
      this.showGallary =false;

    }
  },
}
</script>

<style lang="scss" scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position:absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
      .banner-title{
        font-size: .32rem;
        padding: 0 .2rem;
        flex: 1;
      }
      .banner-number{
        margin-top: .12rem;
        padding: 0 .4rem;
        height: .32rem;
        font-size: .24rem;
        height: .4rem;
        line-height: .4rem;
        border-radius: .2rem;
        background: rgba(0,0,0,);
        .banner-icon{
          padding-right: .1rem;
        font-size: .24rem;

        }
      }
    }
  }
</style>