<template>
 <div class="slide">
   <div class="slide-wrapper">
    <transition-group tag='div' name='list'>
       <div class="slide-img-wrapper" v-for="(url,index) in imgUrls" :class="{'current': index===currentIndex}" :key='index'>
          <img :src='"../../../static/img/"+url'>
       </div>
    </transition-group>
       <button class="slide-left-prev"></button>
       <button class="slide-right-next"></button>
       <div class="btn-box">
         <span v-for="index in 4" :class="{'current': index===currentIndex+1}" @click="slideCharge(index)" @mouseout="autoPlay"></span>
       </div>
   </div>
 </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        imgUrls: ['bg_member.jpg', 'bg_shoulei.jpg', 'bg_xav.jpg', 'bg_xkn.jpg'],
        currentIndex: 1,
        autoSlide: '',
        isAuto: false
      }
    },
    methods: {
      slideNext () {
        if (this.currentIndex >= this.imgUrls.length - 1) {
          this.currentIndex = 0
        }else{
          this.currentIndex ++
        }
      },
      slidePrev () {
        if (this.currentIndex <=0) {
          this.currentIndex = this.imgUrls.length - 1
        }else{
          this.currentIndex --
        }
      },
      slideCharge (index) {
        clearInterval(this.autoSlide)
        this.isAuto = false
        this.currentIndex = index - 1
      },
      autoPlay () {
         if (this.isAuto === false) {
          this.autoSlide = setInterval(() => {
          this.slideNext()
          },5000)
          this.isAuto = true
        }
      },
      scrollFunc (e){
        let num = 0
        if (e.wheelDelta) {
          num = e.wheelDelta
        }else if (e.detail) {
          num = e.detail
        }
        if(num < 0){
          clearInterval(this.autoSlide)
          this.isAuto = false
          this.slideNext()
        }else if (num > 0) {
          clearInterval(this.autoSlide)
          this.isAuto = false
          this.slidePrev()
        }
        this.autoPlay()
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.autoPlay()
      })
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', this.scrollFunc, false)
      }
      window.onmousewheel = this.scrollFunc
    }
  }
</script>

<style lang='less'>
  .slide{
    width: 100%;
    height: 915px;
    .slide-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
      .slide-img-wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: opacity 5s;
        opacity: 0;
        z-index: 1;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .current{
        opacity: 1;
        z-index: 99;
    }
     .btn-box{
      position: absolute;
      right: 20px;
      top: 40%;
      z-index: 100;
      span{
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        border: 2px #fff solid;
        margin-top: 10px;
        &:hover{
          background-color:#fff;
        }
      }
      span.current{
        background-color: #fff;
      }
     }
    }
  }

</style>
