import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string'),
  updated: DS.attr('string'),
  status: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
