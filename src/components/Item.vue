<template>
        <div class="col-sm-6 my-3">
          <div class="card">
          <img :src="Img" :alt="title" class="card-img-top">
           <div class="card-body">
              <h4 class="card-title">{{ title }}</h4>
              <div class="card-text col-md-2 bg-primary"> ${{ price }}</div>
              <div class="row justify-content-end">
               <button class="btn btn-primary" @click="addToCart(Id)">Add to cart</button>
                </div>
                </div>
                </div>
        </div>
  </template> 
  <script>
export default {

  name: 'item',
  props: [ 'title', 'price','Id','Img'],
  methods: {
    addToCart(Id) {
      this.$store.dispatch('addToCart', Id);
    },
  },

};
</script>
<style>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>