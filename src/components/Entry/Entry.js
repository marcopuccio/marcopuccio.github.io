import Vue from 'vue';
import Component from 'vue-class-component';

import RandomSWIcon from '@/components/RandomSWIcon';
import EntryTitle from '@/components/EntryTitle';


@Component({
  components: {
    EntryTitle,
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
  get safeTitle() {
    return (
      this.url ?
      `<a href="${this.url}" class="entry-link" target="_blank">${this.title}</a>` :
      this.title
    );
  }
}
