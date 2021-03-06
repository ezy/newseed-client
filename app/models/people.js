import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
