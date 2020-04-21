<template>
    <div class="tab-ctrol">
      <div class="tab-ctol-item" @click="itemClick(index)" v-for="(item, index) in tabList" :key="item" :class="{active:currentIndex === index}">
        <span>{{item}}</span>
      </div>

    </div>
</template>
<script>
export default {
  name: "TabCtrol",
  props: {
    tabList: Array,
    default(){
      return []
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    }
  }
}
</script>
<style scoped>
.tab-ctrol{
  height: 40px;
  width: 100%;
  background: #ffffff;
  display: flex;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.tab-ctol-item{
  flex: 1;
}

.active{
  color:var(--color-high-text);
}
.active span{
  padding: 0 3px 3px 3px;
  border-bottom:2px solid var(--color-tint)
}
</style>