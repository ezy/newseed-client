import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import moment from 'moment';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

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
  slides: computed('filteredNotice', 'model.pages', function() {
    let slides = this.get('model.pages').filter(page => {
      return page.get('slide');
    });
    let notices = this.get('filteredNotice').filter(notice => {
      let tags = get(notice, 'tags');
      return tags.includes('slide');
    });
    return slides.concat(notices);
  }),
  notices: filter('filteredNotice', function(notice) {
    let tags = get(notice, 'tags');
    return !tags.includes('slide');
  }),
  allNoticesFeed: computed('notices', function() {
    let notices = this.get('notices').sort((a, b) => {
      return moment(a.get('updated')).isBefore(moment(b.get('updated'))) ? 1 : -1;
    });
    return notices.slice(0, 6);
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
  nextService: computed('model', 'church', function() {
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
      let times = this.get('church.serviceTimes');
      if (times) {
        let timesArray = times.split(",");
        let hourMinuteArray = timesArray[0].split(':');
        // Convert first time to decimal and add to Sunday
        date.set('hour', parseFloat(hourMinuteArray[0]));
        date.set('minute', parseFloat(hourMinuteArray[1]));
        display.set('date', date.toJSON());
      }
    }
    return display;
  }),
});
