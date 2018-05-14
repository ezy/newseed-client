import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string', { defaultValue: () => 'news'}),
  image: DS.attr('string'),
  date: DS.attr('date', { defaultValue: () => new Date()}),
  expires: DS.attr('date', { defaultValue: () => new Date()}),
  text: DS.attr('string', { defaultValue: () => ''}),
  tags: DS.attr('', { defaultValue: () => ''}),
  updated: DS.attr('date', { defaultValue: () => new Date()}),
  status: DS.attr('string', { defaultValue: () => 'draft'}),

  churches: DS.belongsTo('churches')
});
