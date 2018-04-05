import Component from '@ember/component';
import { sort } from '@ember/object/computed';
import $ from 'jquery';

export default Component.extend({

  didRender() {
    this._super(...arguments);
    $('[data-toggle="tooltip"]').tooltip();
  },

  audioSortingDesc: Object.freeze(['date:desc']),
  sortedAudio: sort('audios', 'audioSortingDesc')

});
