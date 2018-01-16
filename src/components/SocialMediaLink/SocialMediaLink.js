import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  props: ['socialMedia', 'styleClasses'],
})
export default class SocialMediaLink extends Vue {

  get awesome() {
    return `fa fa-${this.socialMedia.slug}`;
  }

}
