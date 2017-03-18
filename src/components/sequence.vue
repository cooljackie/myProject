<template>
<div >{{data}}</div>
</template>

<script >
  export default{
    data () {
      return {
        data: ''
      }
    },
    mounted () {
      this.axios.get('http://kogapi.games-cube.com/Achievement')
    }
  }
</script>
