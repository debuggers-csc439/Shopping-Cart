<template>
<div>
  <button type="button" class="btn btn-primary float-right bg-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</button>
  <div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Shopping cart</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
  <tbody>
    <tr v-for="(item,index) in cart" v-bind:key="index">
      <td>{{ item.title }}</td>
      <td>${{ item.prices[0].price | dollars }}</td>
     <td>
        <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
      </td>
      </tr>
     <tr>
      <th>SubTotal</th>
      <th>${{ total | dollars }}</th>
       <th></th>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        <router-link to="/Login" tag="button" class="btn btn-primary ">Check out</router-link>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { dollars } from '../filters';

export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
     cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.info.find((infoItem) => {
          return cartItem === infoItem.id;
        });
      });
    },
     filters: {
    dollars,
  },
   total() {
      return this.cart.reduce((acc, cur) => acc + cur.prices[0].price, 0);
    },
  },
   methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
  },
};
</script>