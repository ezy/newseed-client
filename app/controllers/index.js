import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import moment from 'moment';
import EmberObject from '@ember/object';

function hourToNum(t) {
  t = t.split(':');
  return parseFloat(parseInt(t[0]));
}

export default Controller.extend({
  filteredNotice: filter('model.notices', function(notice) {
    let now = moment(),
        // date = moment(notice.get('date')),
        expires = moment(notice.get('expires'));
    // // Set date based on published date and frequency relative to today
    // if (notice.get('frequency') && date.isBefore(now, 'day')) {
    //   notice.set('date', now.add(date).add(1, notice.get('frequency')).toJSON());
    // }
    return notice.get('status') === 'published' &&
      // date.isSameOrBefore(now, 'hour') &&
      expires.isAfter(now);
  }),
  filteredAudio: filter('model.audios', function(audio) {
    return audio.get('status') === 'published';
  }),
  slides: filter('filteredNotice', function(notice) {
    let tags = get(notice, 'tags');
    return tags.includes('slide');
  }),
  notices: filter('filteredNotice', function(notice) {
    let tags = get(notice, 'tags');
    return !tags.includes('slide');
  }),
  allNoticesFeed: computed('notices', function() {
    return this.get('notices').slice(0, 6);
  }),
  noticesNeedsFeed: computed('notices', function() {
    let filterNotice = this.get('notices').filter(notice => {
      let cat = get(notice, 'category');
      return  cat === 'news' || cat === 'need';
    });
    return filterNotice.slice(0, 5);
  }),
  eventsOnlyFeed: computed('notices', function() {
    let filterEvents = this.get('notices').filter(notice => {
      return  get(notice, 'category') === 'event';
    });
    return filterEvents.slice(0, 5);
  }),
  audioFeed: computed('filteredAudio', function() {
    let filterNotSlides = this.get('filteredAudio');
    return filterNotSlides.slice(0, 6);
  }),
  nextService: computed('model', function() {
    let now = moment(),
        display = new EmberObject(),
        // set the checkDate to next Sunday just before midnight
        checkDate = moment().day(7).endOf('day');
    let services = this.get('model.services').filter(service => {
      return moment(service.get('date')).isAfter(now);
    });
    if (services.get('length')) {
      services.forEach(service => {
        let date = get(service, 'date');
        // Service date needs to be after time now, and same or before the checkDate
        if (moment(date).isAfter(now, 'hour') && moment(date).isSameOrBefore(checkDate, 'minute')) {
          // because date is before checkDate we update checkDate for the next compare
          checkDate = moment(date);
          display = service;
        }
      });
    } else {
      // Set date for coming Sunday
      let date = moment().day(7).startOf('day');
      let times = this.get('model.church.serviceTimes').split(",");
      // Convert first time to decimal and add to Sunday
      date.hour(hourToNum(times[0]));
      display.set('date', date.toJSON());
    }
    return display;
  }),
});
