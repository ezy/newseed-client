import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({

  mediaSortingDesc: Object.freeze(['date:desc']),
  sortedMedia: sort('medias', 'mediaSortingDesc')

});
