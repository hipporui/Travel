<template>

  <div class="List" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">揭阳</div>
            </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="area" 
      v-for="(item,key) in cities" 
      :key="key" 
      :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">
              {{innerItem.name}}
            </div>
          </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name:'CityList',
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter () {
      if(this.letter){
        let element = this.$refs[this.letter][0]
      console.log(element) 
        this.scroll.scrollToElement(element)
      }
      console.log(this.letter)
    }
  },
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/varibles.scss';
.border-topbottom::before,
.border-topbottom::after{
  background-color: #ccc;
}
.border-bottom::before{
  background-color: #ccc;
}
.List{
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background: pink;
}
  .title{
    line-height: .44rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }
  .button-list{
    overflow: hidden;
    padding: .1rem;
    padding: .1rem .4rem .1rem .1rem;
    .button-wrapper{
      float: left;
      width: 33.33%;
    }
  .button{
    padding: .1rem 0;
    text-align: center;
    margin: .1rem;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }
  }

  .item-list{
    .item{
      line-height: .76rem;
      padding-left: .2rem;
    }
  }
</style>

