<template>
  <div class="home">
    <nav-bar class="home-nav-bar"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :list ="list"></home-recommend>
    <feature-view></feature-view>
    <tab-ctrol @tabClick="tabClick" class="tab-ctrol" :tab-list="tabList"></tab-ctrol>
    <goods-list :goodsData="goods[currentType].list" class="home-goods-list"></goods-list>
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
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMulData, getGoodsData} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar, HomeSwiper, HomeRecommend, FeatureView, TabCtrol, GoodsList
  },
  data() {
    return {
      banners: [],
      list: [],
      currentType: "pop",
      tabList: ['流行','新款','精选'],
      typeList: ['pop','sell','news'],
      goods: {
        'pop': {page: 0, list: []},
        'sell': {page: 0, list: []},
        'news': {page: 0, list: []}
        }
    }
  },
  methods:{
    tabClick (index) {
      //写个默认的typelist，通过index取值；
      this.currentType = this.typeList[index];

      //判断切换tabCtrol时，该类型中的list是否有数据，没有就请求后台，有就不请求；
      if(this.goods[this.currentType].list.length == 0){
        this.getGoodsData(this.currentType)
      }

    },
    getHomeMulData () {
      getHomeMulData().then(res => {
        this.banners = res.banners;
        this.list = res.recommand;
        
      })
    },
    getGoodsData(type){
       var page = this.goods[type].page + 1;
       getGoodsData(type, page).then(res =>{
         //es6写法向一个数组中push另一个数组，还可以遍历需要push的数组；
         this.goods[type].list = this.goods[type].list.concat(res.goodsList);
         this.goods[type].page += 1;
      })
    }
  },
  mounted () {
    this.getHomeMulData();
    this.getGoodsData('pop');
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
.home-goods-list{
  background-color: #eeeeee;
}
</style>