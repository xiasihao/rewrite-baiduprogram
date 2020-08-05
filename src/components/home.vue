<template>
  <div>
    <div>{{msg}}</div>
    <Nav dataA="nav" />
  </div>
</template>

<script>
import Nav from './nav'
export default {
  name: 'home',
  components: {
    Nav
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
