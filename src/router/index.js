import Vue from 'vue'
import Router from 'vue-router'
import silide from '../components/silide'
import homePage from '../components/homePage/homePage'
import testGood from '../components/homePage/testGood'
import topgood from '../components/homePage/topgood'
import long from '../components/homePage/long'
import goodscontent from '../components/homePage/GoodsContent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: homePage
    },
    {
      path: '/silide',
      component: silide
    },
    {
      path: '/testGood',
      component: testGood,
      children: [
        {
          path: 'content',
          component: goodscontent
        }
      ]
    },
    {
      path: '/topgood',
      component: topgood
    },
     {
      path: '/goodscontent',
      component: goodscontent
    },
     {
      path: '/long',
      component: long
    }
  ]
})
