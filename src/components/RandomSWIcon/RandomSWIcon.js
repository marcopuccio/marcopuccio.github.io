import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class RandomSWIcon extends Vue {

  get randomClasses() {
    const SW_CLASES = [
      'fa fa-empire',
      'fa fa-rebel',
      'fa fa-first-order',
    ];
    return SW_CLASES[Math.floor(Math.random() * SW_CLASES.length)];
  }

}
