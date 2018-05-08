import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  date: DS.attr('string'),
  expires: DS.attr('string'),
  text: DS.attr('string'),
  tags: DS.attr(),
  updated: DS.attr('string'),
  status: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
