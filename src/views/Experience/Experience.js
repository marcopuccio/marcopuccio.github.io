import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import Entry from '@/components/Entry';
import PageHero from '@/components/PageHero';


@Component({
  components: {
    Entry,
    PageHero,
  },
  computed: mapGetters(['libs']),
})
export default class Experience extends Vue {
}
