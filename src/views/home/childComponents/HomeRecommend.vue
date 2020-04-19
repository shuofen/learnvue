<template>
  <div class="recommend">
    <div class="recommend-list" v-for="item in list">
      <a :href="item.link" class="recommend-item">
          <img :src="item.image" alt=""/>
          <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
      list: Array,
      default () {
          return []
      }
  }
}
</script>
 <style scoped>
.recommend{
    display: flex;
    text-align: center;
    width: 100%;
    border-bottom: 10px solid #eeeeee;
    padding: 20px 0 30px 0;
}
.recommend-list{
  flex: 1;
}
.recommend-list img{
    height: 70px;
    width: 70px;
}

.recommend-list p {
    font-size: 12px;
    margin-top: 10px;
}

 </style>