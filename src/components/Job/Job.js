import Vue from 'vue';
import Component from 'vue-class-component';

import AppTitle from '@/components/AppTitle';


@Component({
  components: {
    AppTitle,
  },
  props: {
    job: {
      type: Object,
    },
  },
})
export default class Entry extends Vue {
}
