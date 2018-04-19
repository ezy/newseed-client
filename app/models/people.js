import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  copy: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
