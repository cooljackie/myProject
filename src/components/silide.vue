<template>
  <div class="sequence-theme">
  <div id="sequence">
    <img class="sequence-prev" src="~assets/images/bt-prev.png" alt="Previous Frame" />
    <img class="sequence-next" src="~assets/images/bt-next.png" alt="Next Frame" />
    <ul class="sequence-canvas">
      <li  v-for="(value,index) in items">
        <h2 class="title">{{value.title}}</h2>
        <h3 class="subtitle">{{value.subtitle}}</h3>
        <img class="model" :src='"~assets/images/model"+(index+1)+".png"' alt="Model 1" />
      </li>
    </ul>
    <ul class="sequence-pagination">
      <li v-for="item in msg"><img :src='"~assets/images/tn-model"+item+".png"' alt="Model item" /></li>
    </ul>
  </div>
</div>
</template>

<script>
import 'assets/js/jquery.sequence-min'
import $ from 'jquery'
  export default{
    name: 'test',
    data () {
      return {
        msg: [1, 2, 3],
        items: [{
          "title": "Built using Sequence.js",
          "subtitle": "The Responsive Slider with Advanced CSS3 Transitions"
        },
        {
           "title": "Creative Control",
          "subtitle": "Create unique sliders using CSS3 transitions"
        },
        {
           "title": "Cutting Edge",
          "subtitle": "Supports modern browsers, old browsers (IE7+), touch devices and responsive designs"
        }
        ],
        options: {
          nextButton: true,
          prevButton: true,
          pagination: true,
          animateStartingFrameIn: true,
          autoPlay: true,
          autoPlayDelay: 3000,
          preloader: true,
          preloadTheseFrames: [1],
          preloadTheseImages: [
              "~assets/images/tn-model1.png",
              "~assets/images/tn-model2.png",
              "~assets/images/tn-model3.png"
          ]
    }
      }
    },
    mounted () {
      $("#sequence ul li").first().addClass("animate-in");
      var mySequence = $("#sequence").sequence(this.options).data("sequence");
    }
  }
</script>

<style scoped>
  @import '../assets/css/sequencejs-theme.modern-slide-in.css'
</style>
