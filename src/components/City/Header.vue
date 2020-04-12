<template>
  <div class="header">
    <router-link to="/">
    <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
    城市选择
    </div>
</template>

<script>
export default {
  name:'CityHeader'
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/varibles.scss';
  .header{
    position: relative;
    height: $HeaderHeight;
    line-height: $HeaderHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    .header-icon{
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