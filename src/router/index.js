import { createRouter, createWebHashHistory } from "vue-router";
import menu from "../views/menu.vue";
import Tweet from "../components/Tweet.vue";
import Payment from "../components/Payment.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    components: menu,
  },
  {
    path: "/Tweer",
    name: "Tweet",
    comoponents: Tweet,
  },
  {
    path: "/Card",
    name: "Card",
    components: Card,
  },
  {
    path: "/Payment",
    name: "Payment",
    components: Payment,
  },
];

const router = createRouter({
  history: createWebHashHistory(),

  routes,
});

export default router;
