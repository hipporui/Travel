<template>
  <div>
    <CityHeader/>
    <Search :cities="cities"/>
    <List :letter="letter" :cities="cities" :hotCities="hotCities"/>
    <Alphabet :cities="cities" @change="handleLetterChange"/>
  </div>
  
</template>

<script>
import CityHeader from '../components/City/Header'
import Search from '../components/City/Search'
import List from '../components/City/List'
import Alphabet from '../components/City/Alphabet'
export default {
  name:'City',
  components:{
    CityHeader,
    Search,
    List,
    Alphabet
  },
  data() {
    return {
      cities:{},
      hotCities:[],
      letter:""
    }
  },methods: {
    handleLetterChange(letter){
      console.log(letter);
      this.letter = letter;
    }
  },
   mounted() {
     this.axios('/api/city').then(res=>{
       console.log(res.data.data);
      this.cities = res.data.data.cities
      this.hotCities = res.data.data.hotCities
     })
  },
}
</script>


<style lang="sass" scoped>

</style>