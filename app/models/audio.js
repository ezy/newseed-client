import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  summary: DS.attr('string'),
  speaker: DS.attr('string'),
  category: DS.attr('string')
});
