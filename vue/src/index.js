import Vue from "vue";
import App from "./components/App.vue";
import Router from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/marian-zburlea", component: MarianZburlea, name: "Marian Zburlea" },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export const MarianZburlea = {
  template: "<div>We found MarianZburlea, we did!</div>",
};

export const Home = {
  template: "<div>Home!</div>",
};

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
