<template>
  <div class="icons">
    <swiper ref="mySwiper" >
    <swiper-slide>
    <div class="icon" v-for="item in List" :key="item.id">
      <div class="icon-img">
      <img class="icon-img-content"  :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
</swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props:{
    List:Array,
  },
  data() {
   return{}
  },
  computed: {
    pages(){
      const pages = []
      this.List.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/varibles.scss';
@import '../../assets/styles/mixins.scss';
.icons{
  margin-top: .1rem;
  // overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  
  .icon{
    position: relative;
    width: 25%;
    float: left;
    height: 0;
    // background: chocolate;
    padding-bottom: 25%;
    .icon-img{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      bottom: .44rem;
      padding: .1rem;
      box-sizing: border-box;
      // background: blue;
      .icon-img-content{
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      color: $darkTextColor;
      line-height: .44rem;
      text-align: center;
       @include ellipsis();
    }
  }
}
</style>