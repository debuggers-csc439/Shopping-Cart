<template>
<router-view/>
</template>


<script>

 
  export default {
  name: 'app',
   
   created () {
    this.$store.dispatch('getData')
  },
  }

</script>
<style>
  /* Nothing for now */
</style>