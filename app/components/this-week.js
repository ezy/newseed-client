import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import moment from 'moment';

export default Component.extend({
  weekSchedule: computed('events', 'services', function() {
    let schedule = new EmberObject(),
        events = this.get('events'),
        today = moment().startOf('day'),
        // set the checkDate to next Sunday just before midnight
        sunday = moment().day(7).endOf('day'),
        services = this.get('services').filter(service => {
          return moment(service.get('date')).isBetween(today, sunday);
        });

    services.forEach(service => service.set('title', 'Service'));

    function _setData(data, obj) {
      data.forEach(e => {
        const key = moment(e.get('date')).format('dddd');
        // Check for the key and add it if !exist
        if (!obj.get(key)) {
          obj.set(key, A());
        }
        obj.get(key).pushObject(e)
      });
    }

    _setData(events, schedule);
    _setData(services, schedule);

    console.log(schedule);

    // schedule.sort((a, b) => {
    //   console.log(a,b);
    //   return moment(a).diff(b);
    // });

    return schedule;
  }),
});
