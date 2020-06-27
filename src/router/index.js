import Vue from "vue";
import VueRouter  from "vue-router";

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart.vue";
import Cart from "../components/Cart.vue";
import Login from "../components/Login.vue"
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/ShoppingCart", component: ShoppingCart },
        {path:"/Cart",component:Cart},
        {path:"/Login",component:Login},
        { path: "*", redirect: "/"},
    ]
})
