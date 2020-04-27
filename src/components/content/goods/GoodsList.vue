<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsData" :key="index+'1'" :item ="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name: 'GoodsList',
  props: {
    goodsData: Array,
    default () {
      return []
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>