<template>
  <div>
    <nav-bar class="home-nav-bar"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/home/childComponents/HomeSwiper'
import {getHomeMulData} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar, HomeSwiper
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    getHomeMulData().then(res => {
      console.log(res.data.banner.list)
      this.banners = res.data.banner.list
      // this.$nextTick(() => {
      //    this.banners = res.data.banner.list
      // })
    })
  }
}
</script>
<style scoped>
.home-nav-bar{
  background-color: var(--color-tint);
  font-size: 12px;
  color: #ffffff;
}
</style>