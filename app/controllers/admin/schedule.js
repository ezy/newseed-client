import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';
import moment from 'moment';

const thisSunday = moment().day(7).startOf('day');

export default Controller.extend({
  upcoming: filter('model', function(item) {
    return moment(item.get('date')).isSameOrAfter(thisSunday);
  }),
});
