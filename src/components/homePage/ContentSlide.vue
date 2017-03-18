<template>
  <div class="box" :class="contents.type">
      <h3 class="content-title">{{contents.title}}</h3>
      <span class="slide-left-prev" @click="sildePrev">&lt</span>
       <span class="slide-right-next" @click="sildeNext">&gt</span>
      <ul class="slide-wrap" :style="{'margin-left': this.currentIndex * (-296) + 'px'}">
        <li v-for="item in contents.list">
          <h2 class="text">{{item.title}}</h2>
          <h4 class="desc">{{item.desc}}</h4>
          <h4 class="price">{{item.price}}</h4>
          <div class="img-wrap">
            <img :src="item.imgUrl" >
          </div>
        </li>
      </ul>
       <div class="slide-btn-box">
         <span v-for="index in 4" :class="{'current': index===currentIndex+1}"></span>
       </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props: {
      contents: {
        required: true,
        type: Object,
      }
    },
    methods: {
      sildePrev () {
        if (this.currentIndex >= 1) {
           this.currentIndex --
        }
      },
      sildeNext () {
          if (this.currentIndex < this.contents.list.length - 1) {
           this.currentIndex ++
        }
      }
    },
    data () {
      return {
        currentIndex: 0
      }
    }
  }
</script>

<style lang='less'>
  .box{
    position: relative;
    float: left;
    width: 296px;
    height: auto;
    overflow: hidden;
    padding-top: 45px;
    margin: 0 8px;
    &:hover{
      transform: translateY(-3px);
    box-shadow: 5px 5px 20px #ccc;
    }
    > h3{
    margin:0 10px 18px;
    color: #ffac13;
    text-align: center;
    font-size: 16px;
  }
    > span{
      position: absolute;
      top: 50%;
      display: block;
      margin-top:-20px;
      height: 40px;
      width: 25px;
      background-color: rgb(176,176,176);
      transition: all .0.5 ease;
      line-height: 40px;
      opacity: 0;
    }
    &:hover > span{
      opacity: 1;
    }
    .slide-left-prev{
      left: 0;
    }
     .slide-right-next{
      right: 0;
    }
  }


  .slide-wrap{
    width: 1200px;
    height: 340px;
    transition: all .0.5 ease;
    .text{
      margin: 0 0 10px 0;
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      color: #333;
    }
    .desc{
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
      color: #b0b0b0;
      width: 200px;
      margin: 0 auto 10px;
    }
    .img-wrap{
      margin-top: 15px;
      img{
        max-width:100%;
        max-height:100%;
      }
    }
    li{
      width: 296px;
      float: left;
    }
  }
  .slide-btn-box{
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 30px;
    margin-left: -50px;
  }
  .slide-btn-box span{
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: rgb(176,176,176);
    border: 2px #f5f5f5 solid;
    float: left;
    margin-right: 20px;
    z-index: 12;
    &.current{
      background-color: #fff;
      border: 2px #ff6700 solid;
      transition: all .0.5;
    }
  }
  .book {
    border-top: 1px solid #ffac13;
}
  .theme {
      border-top: 1px solid #83c44e;
  }
  .game {
    border-top: 1px solid #e53935;
}
  .app {
      border-top: 1px solid #2196f3;
  }
</style>

