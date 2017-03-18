<template>
  <header id="header">
    <a href="#"></a>
    <ul>
      <li v-for="item,index in items" :class="{active: index==0}">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
  export default{
    name: 'header',
    data () {
      return {
        items: ['课程', '职业路径', '实战', '猿问', '手记'],
        isActive: false
      }
    },
    methods: {
      isActive (index) {
        if (index === 2) {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  #header{
    width: 100%;
    height: 60px;
    background-color: rgb(0, 0, 0);
    text-align: left;
  }
  #header > a{
    display: inline-block;
    height: 100%;
    width: 140px;
    margin: 0px 22px;
    background-image: url(../../static/images/logo.png);
    background-repeat: no-repeat;
    background-position: 0px 10px;
  }
  ul{
    display: inline-block;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
  li{
    height: 100%;
    width: 78px;
    line-height: 60px;
    text-align: center;
    float: left;
  }
  li a{
    text-decoration:none;
    color: #fff;
    font-size: 14px;
  }
  li.active{
    background-color: rgb(30, 34, 37);
  }
  li:hover {
    background-color: rgb(30, 34, 37);
  }
</style>
