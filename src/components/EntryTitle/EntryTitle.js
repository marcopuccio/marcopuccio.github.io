import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
})
export default class EntryTitle extends Vue {
}
