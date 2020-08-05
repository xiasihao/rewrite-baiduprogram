<template>
  <div>
    <div>{{msg}}</div>
    <CommonNav dataA="commonNav" />
  </div>
</template>

<script>
import CommonNav from './commonNav'
export default {
  name: 'home',
  components: {
    CommonNav
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
