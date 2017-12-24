import Vue from 'vue';
import Component from 'vue-class-component';

import AppHeader from '@/components/AppHeader';


@Component({
  components: {
    AppHeader,
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
