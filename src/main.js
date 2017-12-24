import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';

import AppRoot from '@/components/AppRoot';

import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<AppRoot />',
  components: { AppRoot },
});
