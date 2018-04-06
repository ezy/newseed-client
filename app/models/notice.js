import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  date: DS.attr('string'),
  body: DS.attr('string'),
  tags: DS.attr(),

  church: DS.belongsTo('church')
});
