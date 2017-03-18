<template>
  <div class="banner">
    <ul class="">
       <li v-for="item in items"><a href=""><img :src='"~assets/images/banner"+ item +".png"' alt=""></a></li>
    </ul>
    <div class="left-btn"></div>
    <div class="right-btn"></div>
    <div class="btn-list"></div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        items: [1, 2, 3, 4]
      }
    },
    mounted () {
      this.bannerListFn($(".banner"),$(".btn-list"),$(".left-btn"),$(".right-btn"),2000)
    },
    methods: {
      bannerListFn: function(box,btn_list_box,left_btn,right_btn,move_time){
        var bannerMaxWapDom = box;
        var windowWidth = $(window).width();
        var imgBox = bannerMaxWapDom.find("ul").find("li");
        var cloneOne = imgBox.first().clone();
        var timeOff=0;
        var array=0;
        bannerMaxWapDom.find("ul").append(cloneOne);
        bannerMaxWapDom.find("li").width(windowWidth);
        var liWidth = imgBox.width();
        var liLength = bannerMaxWapDom.find("li").length;
        bannerMaxWapDom.find("ul").width(liWidth*(liLength+1));
        var btnListBox = btn_list_box;
        function listBoxBtn(){
          for(var i=0; i< liLength-1; i++){
            btnListBox.append("<span></span>");
          }
          btnListBox.first().addClass("current");
          btnListBox.children().click(function(){
            var index = $(this).index();
            bannerImgList(index);
            btnListBox.children().eq(index).addClass("current").siblings().removeClass("current");
          });
        }
        listBoxBtn();
        function bannerImgList(index){
          bannerMaxWapDom.find("ul").animate({left: -index*windowWidth}, 400);
        }
        function setTime(){
          timeOff=setInterval(function(){
            array++;
            move();
          },move_time);
        }
        setTime()
        left_btn.stop(true).click(function(){
          array--;
          move();
        });
        right_btn.stop(true).click(function(){
          array++;
          move();
        });
        function move(){
          if(array == liLength){
            bannerMaxWapDom.find("ul").css({left:0});
            array=1;
          }
          if(array < 0){
            bannerMaxWapDom.find("ul").css({left:-liWidth*(liLength+1)});
            array = liLength -2;
          }
          bannerMaxWapDom.find("ul").stop(true).animate({left: -array*liWidth });
          (array == liLength -1) ? btnListBox.children().eq(0).addClass("current").siblings().removeClass("current") : btnListBox.children().eq(array).addClass("current").siblings().removeClass("current");
        }
        bannerMaxWapDom.hover(function(){
          clearInterval(timeOff);
        },function(){
          setTime();
        });
      }
    }
  }
</script>

<style>
  .banner{
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;
  }
  .banner > ul {
    /*width: 999999999px;*/
    height: 450px;
    position: absolute;
    top:0;
    left: 0;
    list-style: none;
}

.banner > ul > li  {
    float: left;
    height: 450px;
}

.banner > ul > li > a {
    display: block;
    font-size: 200px;
    text-align: center;
    line-height: 450px;
    font-weight: bold;
}

.left-btn,.right-btn {
    width: 61px;
    height: 61px;
    position: absolute;
    top: 45%;
    right: 30px;
    background: url("~assets/images/right-1.png");
    cursor: pointer;
}

.left-btn {
    left: 30px;
    background: url("~assets/images/left-1.png");
}

.btn-list {
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 0;
    text-align: center;
}

.btn-list > span  {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin: 0 5px;
    background: rgba(0,0,0,0.8);
    cursor: pointer;
}

.btn-list > span.current {
    border: 3px solid rgba(0,0,0,0.8);
    background: rgba(255,255,255,0.8);
}

</style>
