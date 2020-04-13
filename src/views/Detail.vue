<template>
  <div>
    <DetailBanner/>
    <DetailHeader/>
    <div class="contat"></div>
  </div>
</template>

<script>
import DetailBanner from "../components/Detail/Banner"
import DetailHeader from "../components/Detail/Header"
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="scss" scoped>
.contat{
  height: 50rem;
}
</style>