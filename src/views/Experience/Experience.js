import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import Entry from '@/components/Entry';
import Job from '@/components/Job';
import PageHero from '@/components/PageHero';
import Separator from '@/components/Separator';

@Component({
  components: {
    Entry,
    Job,
    PageHero,
    Separator,
  },
  computed: mapGetters([
    'libs',
    'jobs',
  ]),
})
export default class Experience extends Vue {
}
