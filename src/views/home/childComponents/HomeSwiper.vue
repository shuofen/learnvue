<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link"><img :src="item.image"/></a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper, SwiperItem
  },
  props:{
    banners: Array,
    default() {
      return []
    }
  }
}
</script>

<style scoped>
  .home-swiper{
    padding-top: 44px;
  }

</style>