import Vue from "vue";
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueLoaders);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
