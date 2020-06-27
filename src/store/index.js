import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   info:[],
   inCart:[],
  },

    getters: {
        info: state => state.info,
        inCart: state => state.inCart,
        Cart: state => state.inCart
  },
  mutations: {
    setData(state,info){
      state.info=info
    },
    ADD_TO_CART(state, Id) { state.inCart.push(Id); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);},
  },
  actions: {
    getData({commit}) {
      axios
      .get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=933ceedcd6d86da488d965e7b647d667&hash=8fa3003a208fb5adbdf9311c523f0983')
      .then(r => r.data.data.results)
      .then(info=> {
        commit('setData',info)
      })
    },
    addToCart(context, Id) { context.commit('ADD_TO_CART', Id);
   
  },
  removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); }
  },
});