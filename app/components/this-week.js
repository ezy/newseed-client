import Component from '@ember/component';
import EmberObject, {computed} from '@ember/object';
import {A} from '@ember/array';
import moment from 'moment';
import populateCalendar from '../utils/populate-calendar';

export default Component.extend({
  calendar: populateCalendar.create(),
  calEvents: computed('events', function() {
    return this.get('events').filter(notice => {
      return notice.get('category') === 'event';
    })
  }),
  today: computed(function() {
    return moment().format('dddd');
  }),
  weekSchedule: computed('calEvents', 'services', 'church', function() {
    let schedule = new EmberObject(),
      events = this.get('calEvents'),
      today = moment().startOf('day'),
      // set the checkDate to next Sunday just before midnight
      sunday = moment().day(7).endOf('day'),
      services = this.get('services').filter(service => {
        service.set('category', 'service');
        return moment(service.get('date')).isBetween(today, sunday);
      });

    // If there's no services setup then we need to take the church times
    if (!services.length && this.get('church')) {
      let times = this.get('church.serviceTimes');
      let timeArr = A();
      // If there's more than one we split them to an array
      if (times.indexOf(',') > -1) {
        timeArr = times.split(',');
      }
      else {
        timeArr.push(times)
      }
      // We use the array to push service time objects to services
      timeArr.forEach(t => {
        let hm = t.split(':');
        let time = moment().set({day:7,hour:hm[0],minute:hm[1],second:0});
        let service = new EmberObject({category: 'service', date: time });
        services.pushObject(service);
      })
    }

    services.forEach(service => service.set('title', 'Service'));

    schedule.setProperties({
      'Monday': A(),
      'Tuesday': A(),
      'Wednesday': A(),
      'Thursday': A(),
      'Friday': A(),
      'Saturday': A(),
      'Sunday': A()
    });

    this.get('calendar').setData(events, schedule);
    this.get('calendar').setData(services, schedule);


    return schedule;
  }),
});
