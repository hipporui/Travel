<template>
  <div class="home">
   <HomeHeader/>
   <Swiper :swiperList="swiperList"/>
   <Icons :List="iconList"/>
   <Recommend :recommendList="recommendList"/>
   <Weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import HomeHeader from '../components/Home/HomeHeader'
import Swiper from '../components/Home/Swiper'
import Icons from '../components/Home/Icons'
import Recommend from '../components/Home/Recommend'
import Weekend from '../components/Home/Weekend'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
   HomeHeader,
   Swiper,
   Icons,
   Recommend,
   Weekend
  },
  data() {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.lastCity = this.city;
     this.axios('/api/index?city=' + this.city).then(res=>{
       console.log(res.data.data);
       this.swiperList = res.data.data.swiperList;
       this.iconList = res.data.data.iconList;
       this.recommendList = res.data.data.recommendList;
       this.weekendList = res.data.data.weekendList;
     })
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
       this.axios('/api/index?city=' + this.city).then(res=>{
      //  console.log(res.data.data);
       this.swiperList = res.data.data.swiperList;
       this.iconList = res.data.data.iconList;
       this.recommendList = res.data.data.recommendList;
       this.weekendList = res.data.data.weekendList;
     })
    }
  },
}
</script>
