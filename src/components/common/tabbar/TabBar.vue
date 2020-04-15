<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tab-bar{
  height: 49px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
}
</style>>
