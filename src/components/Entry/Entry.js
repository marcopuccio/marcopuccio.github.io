import Vue from 'vue';
import Component from 'vue-class-component';

import AppTitle from '@/components/AppTitle';
import RandomSWIcon from '@/components/RandomSWIcon';


@Component({
  components: {
    AppTitle,
    RandomSWIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
})
export default class Entry extends Vue {
}
