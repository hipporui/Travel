<template>
   <div class="wrapper">
     <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="(item,i) in swiperList" :key="i">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
   </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  props:{
    swiperList:Array
  },
  data () {
    return {
      swiperOptions:{
        pagination:'.swiper-pagination',
        // paginationType:'fraction',
        loop:true
      },
    }
  },
  computed: {
    showSwiper(){
      return this.swiperList.length;
    }
  },
}
</script>

<style lang="scss" scoped>

.wrapper{
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  overflow: hidden;
  
}
.swiper-img{
  width: 100%;
}
</style>