import Vue from "vue";
import App from "./component/App.vue";
import VueRouter from "vue-router";
import routes from "./route";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

new Vue({
  // el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
