import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({

  audioSortingDesc: Object.freeze(['date:desc']),
  sortedAudio: sort('audios', 'audioSortingDesc')

});
