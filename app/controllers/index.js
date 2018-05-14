import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import moment from 'moment';

export default Controller.extend({
  filteredNotice: filter('model.notices', function(notice) {
    return notice.get('status') === 'published' &&
      moment(notice.get('expires')).isAfter(moment());
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
