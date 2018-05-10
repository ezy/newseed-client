import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import moment from 'moment';

export default Controller.extend({
  filteredNotice: filter('model.notices', function(notice) {
    return notice.get('status') === 'published';
  }),
  filteredAudio: filter('model.audios', function(audio) {
    return audio.get('status') === 'published';
  }),
  slides: filter('filteredNotice', function(notice) {
    let tags = get(notice, 'tags');
    return tags.includes('slide');
  }),
  newsFeed: filter('filteredNotice', function(notice) {
    let tags = get(notice, 'tags');
    return !tags.includes('slide');
  }),
  nextService: computed('model.services', function() {
    let services = this.get('model.services'),
        now = moment(),
        display = null,
        // set the checkDate to next Sunday just before midnight
        checkDate = moment().day(7).endOf('day');
    services.forEach(service => {
      let date = get(service, 'date');
      // Service date needs to be after time now, and same or before the checkDate
      if (moment(date).isAfter(now, 'hour') && moment(date).isSameOrBefore(checkDate, 'minute')) {
        // because date is before checkDate we update checkDate for the next compare
        checkDate = moment(date);
        display = service;
      }
    });
    return display;
  }),
});
