import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "E-Wallet",
    component: () =>
      import("../views/E-Wallet")
  },
  {
    path: "/addCard",
    name: "Add card",
    component: () =>
      import("../views/AddCard")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
