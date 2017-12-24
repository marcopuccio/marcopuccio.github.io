import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';


@Component({
  computed: mapGetters(['profile']),
})
export default class AppHeader extends Vue {

}
