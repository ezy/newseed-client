import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string', { defaultValue: () => ''}),
  updated: DS.attr('date', { defaultValue: () => new Date()}),
  status: DS.attr('string', { defaultValue: () => 'draft'}),

  churches: DS.belongsTo('churches')
});
