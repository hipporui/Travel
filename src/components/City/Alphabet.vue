<template>
  <ul class="list">
    <li class="item" v-for="item in letter" :key="item" :ref="item"
      @touchstart = "handTouchStart"
      @touchmove = "handTouchMove"
      @touchend = "handTouchEnd"
      @click="handleLetterClick"
      
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  data() {
    return {
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated() {
    this.startY =  this.$refs["A"][0].offsetTop;
  },
  computed: {
    letter(){
      const letter = []
      for(let i in this.cities){
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    handleLetterClick(e){
      // console.log(e.target.innerText);
      this.$emit("change",e.target.innerText)
    },
    handTouchStart(){
      this.touchStatus = true
    },
    handTouchMove(e){
      if(this.touchStatus){
        // 获取A距离顶部的距离
        // let startY = this.$refs["A"][0].offsetTop;
        // console.log(startY);
        // 获取手指滑动的距离
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=>{
          let touchY = e.touches[0].clientY-79
          let index =Math.floor((touchY-this.startY) /20)
          console.log(index);
          if(index>=0 && index <this.letter.length){
            this.$emit("change",this.letter[index])
          }
        },15)
      }
    },
    handTouchEnd(){
      this.touchStatus = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/varibles.scss';

  .list{
    display: flex;
    flex-direction: column;
    justify-content:center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    // background: pink;
    .item{
      line-height: .4rem;
      text-align: center;
      color: $bgColor;
    }
  }
</style>