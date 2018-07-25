import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Listing from "./views/Listing.vue";
import ViewPage from "./views/View.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/listing",
      name: "listing",
      component: Listing,
      props: true
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewPage,
      props: true
    }
  ]
});
