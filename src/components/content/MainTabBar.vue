<template>
 <tab-bar>
  <tab-bar-item path="/home">
    <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"/>
      </a>
    </template>
  </tab-bar-item>
  <tab-bar-item path="/category">
   <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png"/>
      </a>
    </template>
  </tab-bar-item>
   <tab-bar-item path="/surprise">
    <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"/>
      </a>
    </template>
  </tab-bar-item>
  <tab-bar-item path="/cart">
    <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png"/>
      </a>
    </template>
  </tab-bar-item>
  <tab-bar-item path="/profile">
  <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png"/>
      </a>
    </template>
  </tab-bar-item>
  <!-- <tab-bar-item path="/login">
   <template v-slot:tab-bar-img>
       <a>
         <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"/>
      </a>
    </template>
   <template v-slot:tab-bar-img-active>
      <a>
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"/>
      </a>
    </template>
  </tab-bar-item> -->
 </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBarItem, TabBar
  },
  data() {
    return {
      
    }
  }
}
</script>