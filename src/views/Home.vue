<template>
  <div class="home">
   <HomeHeader :city="city"/>
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
      city:'揭阳',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  methods: {
    
  },
  mounted() {
     this.axios('/api/index').then(res=>{
       console.log(res.data.data);
       this.swiperList = res.data.data.swiperList;
       this.iconList = res.data.data.iconList;
       this.recommendList = res.data.data.recommendList;
       this.weekendList = res.data.data.weekendList;
     })
  },
}
</script>
