import DS from 'ember-data';

export default DS.Model.extend({
  day: DS.attr('string'),
  time: DS.attr('string'),
  speaker: DS.attr('string'),

  churches: DS.belongsTo('churches'),
});
