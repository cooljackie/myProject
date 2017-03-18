<template>
  <div id="banner">
  <div class="bannerCon">
        <div class="before"><img src="~assets/images/left.png" alt="" @click="btn_left"  @mouseover="img_over" @mouseout="img_out"/></div>
        <div class="after"><img src="~assets/images/right.png"  alt="" @click="btn_right" @mouseover="img_over" @mouseout="img_out"/></div>
        <div class="scroll">
            <img v-for="item in items" :src='"~assets/images/a"+ item +".jpg"'  alt="">
        </div>
        <div class="bannerBut">
          <ul>
              <li v-for="item in items" @mouseover="over_med($event)" @mouseout="out_med"></li>
          </ul>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: 750,
      height: 500,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      path: 'assets/images/a',
      index: 1,
      auto_move: ''
    }
  },
  mounted (){
     $('.bannerBut ul li').eq(1).addClass('hover');
     $('.bannerBut ul li').first().css('display','none');
     $('.bannerBut ul li').last().css('display','none');
    if(this.auto==''){
      this.auto_move = setInterval(this.btn_right, 3000);
    }
  },
  methods: {
    over_med (e) {
      clearInterval(this.auto_move);
      $(e.target).addClass('hover').siblings('li').removeClass('hover');
      this.index=$(e.target).index();
      $('.bannerCon .scroll').stop().animate({left:-this.index*750},500);
    },
    out_med () {
      this.auto_move = setInterval(this.btn_right, 3000);
    },
    img_over () {
      clearInterval(this.auto_move);
    },
    img_out () {
      this.auto_move = setInterval(this.btn_right, 3000);
    },
    btn_left () {
      this.index--;
      if(this.index<1){
        this.index = 9;
        $('.scroll').css('left','-7500px');
        $('.scroll').animate({left:-this.index*750},500);
        $('.bannerBut ul li').eq(this.index).addClass('hover').siblings('li').removeClass('hover');
       }else{
         $('.bannerBut ul li').eq(this.index).addClass('hover').siblings('li').removeClass('hover');
         $('.scroll').animate({left:-this.index*750},500);
      }
    },
    btn_right () {
      this.index++;
      if(this.index>9){
        this.index = 1;
        $('.scroll').css('left','0px');
        $('.scroll').animate({left:-this.index*750},500);
        $('.bannerBut ul li').eq(this.index).addClass('hover').siblings('li').removeClass('hover');
       }else{
         $('.bannerBut ul li').eq(this.index).addClass('hover').siblings('li').removeClass('hover');
         $('.scroll').animate({left:-this.index*750},500);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0px;padding:0px;font-family:"微软雅黑";font-size:12px; text-decoration:none;list-style-type:none;}
img{border:0px;}

/*广告图开始*/
#banner{width:100%;height:500px;overflow:hidden;}
#banner .bannerCon{width:750px;height:500px;background:blue;margin:0px auto;position:relative;}
#banner .bannerCon .before{width:600px;height:500px;background:rgba(0,0,0,0.8);position:absolute;left:-600px;bottom:0px;z-index:333;}
#banner .bannerCon .before img{position:absolute;right:20px;top:200px;cursor:pointer;}
#banner .bannerCon .after{width:600px;height:500px;background:rgba(0,0,0,0.8);position:absolute;right:-600px;bottom:0px;z-index:333;}
#banner .bannerCon .after img{position:absolute;left:20px;top:200px;cursor:pointer;}
#banner .bannerCon .scroll{width:2000%;height:500px;position:relative;left:-750px;}
#banner .bannerCon .scroll img{width:750px;height:500px;float:left;}
#banner .bannerBut{width:200px;height:40px;position:absolute;left:275px;bottom:0px;}
#banner .bannerBut ul li{width:7px;height:7px;border-radius:7px;background:#666;margin:5px 7px;float:left;}
#banner .bannerBut ul li.hover{background:#c6171e;}
.before, .after img{
  width: 32px;
  height: 63px;
}
</style>
