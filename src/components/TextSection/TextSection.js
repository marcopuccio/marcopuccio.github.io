import Vue from 'vue';
import Component from 'vue-class-component';

import RandomSWIcon from '@/components/RandomSWIcon';


@Component({
  components: { RandomSWIcon },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
})
export default class TextSection extends Vue {

}
