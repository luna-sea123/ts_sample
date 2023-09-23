import Vue from "vue";
import * as VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import menu from "./views/menu.vue";
import Tweet from "./components/Tweet.vue";
import Payment from "./components/Payment.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    components: menu,
  },
  {
    path: "/Tweet",
    name: "Tweet",
    comoponents: Tweet,
  },
  {
    path: "/Payment",
    name: "Payment",
    components: Payment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
