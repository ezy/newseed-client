import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  noticeSortingDesc: Object.freeze(['date:desc']),
  sortedNotices: sort('model', 'noticeSortingDesc')
});
