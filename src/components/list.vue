<template>
 <div>
  <input type="text" v-model="date_text" @keyup.enter="start">
  <button @click="start">增加</button>
  <button @click="minus">减少</button>
  <button @click="charge">shuffle</button>
  <p>
    <transition-group name="list" >
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
  </p>
 </div>
</template>
<script >
  export default{
    name: 'listTest',
    data () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        isShow: false,
        date_text: '',
        index_length: 10
      }
    },
    methods: {
      random_num () {
        return Math.floor(Math.random() * this.items.length)
      },
      start (event) {
        this.items.splice(this.random_num(), 0, this.index_length++)
      },
      minus () {
        this.items.splice(this.random_num(), 1)
      },
      charge () {
        var num1 = this.random_num()
        var num2 = this.random_num()
        var a = this.items[num1]
        this.items[num1] = this.items[num2]
        this.items[num2] = a
      }
    }
  }
</script>

<style scoped >
  *{
    margin: 0;
    padding: 0;
  }

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>
