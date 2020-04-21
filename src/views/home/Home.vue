<template>
  <div class="home">
    <nav-bar class="home-nav-bar"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :list ="list"></home-recommend>
    <feature-view></feature-view>
    <tab-ctrol class="tab-ctrol" :tab-list="['流行','新款','精选']"></tab-ctrol>
    <ul>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
    </ul>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import HomeSwiper from 'views/home/childComponents/HomeSwiper'
import HomeRecommend from 'views/home/childComponents/HomeRecommend'
import FeatureView from 'views/home/childComponents/FeatureView'
import TabCtrol from 'components/content/TabCtrol'

import {getHomeMulData} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar, HomeSwiper, HomeRecommend, FeatureView, TabCtrol
  },
  data() {
    return {
      banners: [],
      list: []
    }
  },
  mounted () {
    getHomeMulData().then(res => {
      this.banners = res.data.banner.list;
      this.list = res.data.recommend.list;
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

.tab-ctrol{
   position: sticky;
   top: 44px;
}
</style>