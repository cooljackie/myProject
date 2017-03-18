<template>
  <div class="wrapper">
      <!-- SuperBox -->
      <div class="superbox">
        <div class="superbox-list" v-for="item in getArr">
           <img  :src='"~assets/images/img/superbox-full-"+ item +".jpg"'  alt="" class="superbox-img">
        </div>
        <div class="superbox-float"></div>
      </div>
    </div>
</template>

<script>
 import $ from 'jquery'
  export default {
    computed: {
      getArr: function() {
        var arr = []
        for(var i =1; i<=24; i++){
          arr.push(i)
        }
        return arr
      }
    },
    mounted () {
       $.fn.SuperBox = function(options) {

    var superbox      = $('<div class="superbox-show"></div>');
    var superboximg   = $('<img src="" class="superbox-current-img">');
    var superboxclose = $('<div class="superbox-close"></div>');

    superbox.append(superboximg).append(superboxclose);

    return this.each(function() {

      $('.superbox-list').click(function() {

        var currentimg = $(this).find('.superbox-img');
        var imgData = currentimg.attr('src');
        superboximg.attr('src', imgData);

        if($('.superbox-current-img').css('opacity') == 0) {
          $('.superbox-current-img').animate({opacity: 1});
        }

        if ($(this).next().hasClass('superbox-show')) {
          superbox.toggle();
        } else {
          superbox.insertAfter(this).css('display', 'block');
        }

        $('html, body').animate({
          scrollTop:superbox.position().top - currentimg.width()
        }, 'medium');

      });

      $('.superbox').on('click', '.superbox-close', function() {
        $('.superbox-current-img').animate({opacity: 0}, 200, function() {
          $('.superbox-show').slideUp();
        });
      });

    });
  };
      $('.superbox').SuperBox();
    }
  }
</script>

<style scoped>
  @import '../assets/css/superbox.css';
</style>
