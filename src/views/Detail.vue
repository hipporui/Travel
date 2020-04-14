<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"/>
    <DetailHeader/>
    <div class="contat">
    <DetailList :list="list"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from "../components/Detail/Banner"
import DetailHeader from "../components/Detail/Header"
import DetailList from "../components/Detail/List"
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  mounted() {
     this.axios('/api/detail?id='+ this.$route.params.id).then(res=>{
       console.log(res.data.data);
      let data = res.data.data
       this.sightName = data.sightName
       this.bannerImg = data.bannerImg
       this.gallaryImgs = data.gallaryImgs
       this.list = data.categoryList
     })
  },
}
</script>

<style lang="scss" scoped>
.contat{
  height: 50rem;
}
</style>