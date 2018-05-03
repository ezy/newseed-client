import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  text: DS.attr('string'),
  speaker: DS.attr('string'),
  category: DS.attr('string'),
  link: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
