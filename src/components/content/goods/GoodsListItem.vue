<template>
  <div class="goods-list-item" >
    <img :src="item.img"/>
    <p>{{item.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: ['item']
}
</script>
<style scoped>
 .goods-list-item{
   width: 48%;
   background-color: #ffffff;
   border-radius: 5px;
   margin-bottom: 8px;
 }
 .goods-list-item img{
   width: 100%;
 }
</style>