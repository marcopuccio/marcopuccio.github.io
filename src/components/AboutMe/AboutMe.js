import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import TextSection from '@/components/TextSection';

@Component({
  components: { TextSection },
  computed: mapGetters(['aboutMe']),
})
export default class AboutMe extends Vue {
}
