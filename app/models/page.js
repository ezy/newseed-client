import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string', { defaultValue: () => ''}),
  updated: DS.attr('date', { defaultValue: () => new Date()}),
  status: DS.attr('string', { defaultValue: () => 'draft'}),
  slide: DS.attr('number', { defaultValue: () => 0}),
  image: DS.attr('string', { defaultValue: () => null}),
  slug: DS.attr('string', { defaultValue: () => Date.now() }),

  churches: DS.belongsTo('churches')
});
