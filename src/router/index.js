import Vue from 'vue';
import VueRouter from 'vue-router';

import Hero from '@/components/Hero';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero,
    },
  ],
});
