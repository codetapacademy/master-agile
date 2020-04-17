import MarianZburlea from "./marianzburlea/marianzburlea.vue";
import CornelCristianFilip from "./psihedeliq/psihedeliq.vue";
import Home from "./component/home/home.vue";

export default [
  { path: "/", component: Home, name: "Home" },
  { path: "/marian-zburlea", component: MarianZburlea, name: "Marian Zburlea" },
  {
    path: "/cornel-cristian-filip",
    component: CornelCristianFilip,
    name: "Cornel Cristian Filip"
  }
];
