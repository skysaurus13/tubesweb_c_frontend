import Vue from 'vue';
import App from './App.vue';
import vuetify from "@/plugins/vuetify";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";
import axios from 'axios';
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
// Vue.prototype.$api = 'http://127.0.0.1:8000/api';
Vue.prototype.$api = 'https://backend.nganterinwe.my.id/api';

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
