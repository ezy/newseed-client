import EmberObject from '@ember/object';
import moment from 'moment';

export default EmberObject.extend({
  setData(data, sched) {
    data.forEach(e => {
      const freq = e.get('frequency');
      const date = moment(e.get('date'));
      const dateDayName = moment(e.get('date')).format('dddd');
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
      else if (freq === 'month') {
        const monthDate = moment(date).date();
        const dateToCurrentMonth = moment().date(monthDate);
        return dateToCurrentMonth.isBetween(monday, comingSunday)
          ? sched.get(dateDayName).pushObject(e)
          : null ;
      }
      else {
        sched.get(dateDayName).pushObject(e);
      }
    });
  }
});
