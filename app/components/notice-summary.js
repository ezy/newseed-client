import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  sortedNotices: computed('notices', function() {
    return this.get('notices').sort((a, b) => {
      return moment(a.date).diff(moment(b.date));
    }).reverse();
  }),
});
