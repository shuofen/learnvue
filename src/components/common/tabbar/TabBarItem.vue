<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActived">
      <slot name="tab-bar-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-img-active"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props:{
    path: String
  },
  computed: {
    isActived() {
      return this.$route.path === this.path;
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => {
        console.log()
      })
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  text-align: center;
  /* width: 25%; */
}
.tab-bar-item img{
  width: 60px;
  height: 46px;
}
.tab-bar-item a{
  display: inline-block;
  width: 75px;
  height: 49px;
  position: relative;
  bottom: -1px;
}
</style>>

