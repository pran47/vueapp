import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
  faLocationArrow,
  faList
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faVimeo,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(BootstrapVue);
library.add(
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
  faFacebookF,
  faTwitter,
  faYoutube,
  faVimeo,
  faGooglePlus,
  faLocationArrow,
  faList
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
