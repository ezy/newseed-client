import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import moment from 'moment';
import populateCalendar from '../utils/populate-calendar';

export default Component.extend({
  calendar: populateCalendar.create(),
  weekSchedule: computed('events', 'services', function() {
    let schedule = new EmberObject(),
        events = this.get('events').filter(notice => {
          return notice.get('category') === 'event' && notice.get('frequency');
        }),
        today = moment().startOf('day'),
        // set the checkDate to next Sunday just before midnight
        sunday = moment().day(7).endOf('day'),
        services = this.get('services').filter(service => {
          return moment(service.get('date')).isBetween(today, sunday);
        });

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
