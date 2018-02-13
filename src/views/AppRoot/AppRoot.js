import Vue from 'vue';
import Component from 'vue-class-component';

import AppHeader from '@/components/AppHeader';
import AppLoader from '@/components/AppLoader';


@Component({
  components: {
    AppHeader,
    AppLoader,
  },
})
export default class AppRoot extends Vue {

  get loadingApp() {
    return this.$store.getters.loading.app;
  }

  created() {
    this.$store.dispatch('fetchAppData');
  }
}
