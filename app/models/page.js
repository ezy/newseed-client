import DS from 'ember-data';
// import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string', { defaultValue: () => ''}),
  updated: DS.attr('date', { defaultValue: () => new Date()}),
  status: DS.attr('string', { defaultValue: () => 'draft'}),
  // slug: computed('title', function() {
  //   return this.get('title').replace(/\s+/g, '-').toLowerCase();
  // }),

  churches: DS.belongsTo('churches')
});
