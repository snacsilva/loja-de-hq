import Vue from 'vue';
import Router from 'vue-router';
import Comics from '@/components/Comics';

Vue.use(Router);

export default new Router({
  routes: [{ path: '/', component: Comics }]
});
