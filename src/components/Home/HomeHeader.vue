<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/主题</div>
    <router-link to="/city">
    <div class="header-right">{{city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeHeader',
  props:{
    city:String
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/varibles.scss';
  .header{
    display: flex;
    line-height: $HeaderHeight;
    background: $bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .4rem;
      }
    }

    .header-input{
      flex: 1;
      height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
      padding-left:.2rem ;
      line-height: .64rem;
    }

    .header-right{
      width: 1.24rem;
      float: right;
      text-align: center;
      color: #fff;
      .arrow-icon{
        // margin-left: -0.4rem;
        font-size: 0.24rem;
      }
    }
  }
</style>