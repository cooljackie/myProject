<template>
  <div id="app">
 <!--    <topgood></topgood>
    <test-good></test-good>
    <goodscontent></goodscontent> -->
    <router-view></router-view>
  </div>
</template>

<script>
// // import vueBanner from './components/banner.vue'
// // import listTest from './components/list.vue'
//  // import vueHead from './components/head.vue'
// // import superBox from './components/superbox.vue'
// // import silide from './components/silide.vue'
// import testGood from './components/homePage/testGood'
// import topgood from './components/homePage/topgood'
// import goodscontent from './components/homePage/GoodsContent'
export default {
  name: 'app',
  components: {
    // vueBanner, listTest, vueHead,superBox,  silide, vueHead
    // testGood, topgood, goodscontent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  font-family: '微软雅黑';
  margin: 0px;
  padding: 0px;
}
</style>
