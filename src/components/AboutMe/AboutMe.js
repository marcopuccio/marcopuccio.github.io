import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';


@Component({
  computed: mapGetters(['aboutMe']),
})
export default class AboutMe extends Vue {
}
