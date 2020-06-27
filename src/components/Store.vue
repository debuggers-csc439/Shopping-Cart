<template>
  <div id="app" class="container col-md-10 bg-dark">
      <div class="jumbotron bg-info">
            <div class="col-md-12 my-2 text-center">
                <h1>Marvel Movies</h1>
           
                <div class="col-md-10">
                     <ShoppingCart />
                </div>
                
                 <router-link to="/Login" tag="button"  class="btn btn-success float-right">Login</router-link>
            </div>
        </div>
    <div class="row">
      <Item
        v-for="item in info" v-bind:key="item"
        :Id="item.id"
        :title="item.title"
        :Img="(item.thumbnail.path).concat('.').concat(item.thumbnail.extension)"
        :price="item.prices[0].price" />
    </div>

  </div>
</template>


<script>

import Item from './Item.vue';
import ShoppingCart from './ShoppingCart';


  export default {
  name: 'app',
   created () {
    this.$store.dispatch('getData')
  },
  computed: {
    info(){return this.$store.getters.info},
   
 },
components: {
  Item,
 ShoppingCart,
 
},
  }

</script>
<style>
  /* Nothing for now */
</style>