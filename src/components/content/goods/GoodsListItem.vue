<template>
  <div class="goods-list-item" >
    <img :src="item.img"/>
    <div class="goods-info">
      <p>{{item.title}}</p>
    </div>
    <div class="goods-price">
      <p class="price">￥{{item.price}}</p>
      <p class="fav">{{item.cfav}}<img class="favImg" src="~assets/img/common/collect.svg"/></p>
    </div>
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
 .goods-info{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 41px;
  line-height: 17px;
 }
 .goods-list-item img{
   width: 100%;
 }
 .goods-list-item p{
   width: 100%;
   font-size: 12px;
   padding: 5px 5px
 }
 .goods-price{
   padding: 0 5px;
 }
 .goods-list-item .price{
   float: left;
   font-size: 16px;
   font-weight: bolder;
   color: black;
   width: auto;
 }
  .goods-list-item .fav{
   float: right;
   width: auto;
   /* background: url('~assets/img/common/collect.svg') 0 3px/40px 14px;
   background-repeat: no-repeat;
   padding-right: 20px; */
 }
.favImg{
  height: 14px;
  width: auto!important;
  position: relative;
  top: 2px;
}
 
</style>