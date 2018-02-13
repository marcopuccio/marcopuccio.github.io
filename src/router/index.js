import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import AboutMe from '@/views/AboutMe';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: AboutMe,
    },
  ],
});
