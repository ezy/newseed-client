import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date', { defaultValue: () => new Date()}),
  image: DS.attr('string', { defaultValue: () => '/assets/img/audio.jpg'}),
  text: DS.attr('string', { defaultValue: () => ''}),
  speaker: DS.attr('string', { defaultValue: () => ''}),
  category: DS.attr('string', { defaultValue: () => 'sermon'}),
  link: DS.attr('string', { defaultValue: () => ''}),
  updated: DS.attr('date', { defaultValue: () => new Date()}),
  status: DS.attr('string', { defaultValue: () => 'draft'}),
  slug: DS.attr('string', { defaultValue: () => Date.now() }),

  churches: DS.belongsTo('churches')
});
