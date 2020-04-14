import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import ThankDirect from "./pages/ThankDirect.vue";
import ThankIndirect from "./pages/ThankIndirect.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/thank-direct", component: ThankDirect },
  { path: "/thank-indirect", component: ThankIndirect },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
