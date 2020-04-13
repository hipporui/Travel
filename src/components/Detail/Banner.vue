<template>
<div>
  <div class="banner" @click="BannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
    </div>
  </div>
  <Gellaty :imgs="imgs" v-show="showGallary" @close="CloseClick"/>
</div>
</template>

<script>
import Gellaty from '../../components/gellary/Gellaty'
export default {
  name:'DetailBanner',
  data() {
    return {
      showGallary:false,
      imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg','http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
    }
  },
  components:{
    Gellaty
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