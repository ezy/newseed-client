import DS from 'ember-data';
import moment from 'moment';

const d = new Date();

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string', { defaultValue: 'news'}),
  image: DS.attr('string'),
  date: DS.attr('date', {
    defaultValue() {
      return d;
    }
  }),
  expires: DS.attr('date', {
    defaultValue() {
      let addMonth = moment(d).add(1, 'M').toDate();
      return addMonth;
    }
  }),
  frequency: DS.attr('string', { defaultValue: null}),
  text: DS.attr('string', { defaultValue: ''}),
  tags: DS.attr('', { defaultValue: ''}),
  updated: DS.attr('date', {
    defaultValue() {
      return d;
    }
  }),
  status: DS.attr('string', { defaultValue: 'draft'}),
  slug: DS.attr('string', { defaultValue: () => Date.now() }),

  churches: DS.belongsTo('churches')
});
