<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item in weekendList" :key="item.id" class="item border-bottom">
        <div class="item-imgwrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWenkend',
  props:{
    weekendList:Array
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';
  .title{
    // margin-top: .2rem;
    line-height: .8rem;
    background:#eee;
    text-align: .2rem;
    padding-left: .2rem;
  }
  .item-imgwrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 27%;
  }
    .item-img{
      width: 100%;
      height: 1.8rem;
    }
    .item-info{ 
      padding: .1rem;
    }
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
       @include ellipsis();
    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
       @include ellipsis();
    }
   
    
  

    
</style>