import Vue from "vue";
import App from "./App.vue";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/counter", component: Counter },
    { path: "/hello-world", component: HelloWorld }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
