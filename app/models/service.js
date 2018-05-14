import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date', { defaultValue: () => new Date()}),
  speaker: DS.attr('string'),
  topic: DS.attr('string'),

  churches: DS.belongsTo('churches'),
});
