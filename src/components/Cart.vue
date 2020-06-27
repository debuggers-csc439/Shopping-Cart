<template>
<div>
    <div class="jumbotron text-center">
    <h1> Item in Cart</h1>
    </div>
     // <div v-for="items in Cart" v-bind:key="items">
         {{Cart}}
       // </div>
</div>
</template>


<script>

export default {
 computed: {
      Cart(){ return this.$store.getters.Cart; },
}
}

</script>
<style>
  /* Nothing for now */
</style>