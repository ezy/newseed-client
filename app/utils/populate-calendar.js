import EmberObject from '@ember/object';
import moment from 'moment';

export default EmberObject.extend({
  setData(data, sched) {
    data.forEach(e => {
      const today = moment();
      const freq = e.get('frequency');
      const date = moment(e.get('date'));
      const dateDayName = moment(e.get('date')).format('dddd');
      const thisSunday = moment().day(0).endOf('day');
      const monday = moment().day(1).startOf('day');
      const comingSunday = moment().day(7).endOf('day');
      if (freq === 'day') {
        const weekDays = 7;
        // Set numeral for weekday from moment isoWeekday
        let daySelector = () => {
          if (date.isAfter(comingSunday)) {
            return 8;
          }
          else if (date.isBetween(monday, comingSunday)) {
            return date.isoWeekday();
          }
          else {
            return 1;
          }
        }
        for (let d = daySelector(); d <= weekDays; d++) {
          //  Use count and isoWeekday to push keys
          let dayName = moment().isoWeekday(d).format('dddd');
          sched.get(dayName).pushObject(e);
        }
      }
      else if (freq === 'week') {
        return sched.get(dateDayName).pushObject(e);
      }
      else if (freq === 'fortnight') {
        const dateWeekParity = moment(date).week() % 2;
        const thisWeekParity = moment().week() % 2;
        // Check weeks have parity and event date is before coming Sunday
        if (thisWeekParity === dateWeekParity && date.isBefore(comingSunday)) {
          sched.get(dateDayName).pushObject(e);
        }
      }
      else if (freq === 'month') {
        const monthDate = moment(date).date();
        const dateToCurrentMonth = moment().date(monthDate);
        return dateToCurrentMonth.isBetween(monday, comingSunday)
          ? sched.get(dateDayName).pushObject(e)
          : null ;
      }
      else if (date.isBetween(monday, comingSunday)) {
        if (e.get('title') === 'Service') {
          /**
           * Only push services to array before coming Sunday, end of day.
           * // NOTE: On a Sunday, the date.isBefore(thisSunday) needs to check
           * today is not Sunday to avoid both this Sunday and next Sunday
           * showing on the event schedule.
           */
          if (date.isBefore(thisSunday) && !today.isSame(thisSunday, 'day')) {
            return sched.get(dateDayName).pushObject(e);
          }
          else if (date.isBefore(comingSunday)) {
            return sched.get(dateDayName).pushObject(e);
          }
        }
        return sched.get(dateDayName).pushObject(e);
      }
    });
  }
});
