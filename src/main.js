import Vue from 'vue';
import App from './App.vue';
import store from './vuex/index';
import router from './router';
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
