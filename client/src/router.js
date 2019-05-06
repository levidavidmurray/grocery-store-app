import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("./views/Shop.vue")
    },
    {
      path: "/shop/page/:pageNumber",
      name: "shop_page",
      component: () => import("./views/Shop.vue"),
      props: true
    },
    {
      path: '/deliveries',
      name: 'deliveries',
      component: () => import('./views/Deliveries.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    }
  ]
});
