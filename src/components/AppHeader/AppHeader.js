import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import SocialMediaLink from '@/components/SocialMediaLink';

@Component({
  computed: mapGetters(['profile', 'social']),
  components: {
    SocialMediaLink,
  },
})
export default class AppHeader extends Vue {

}
