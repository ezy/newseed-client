import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string', { defaultValue: () => 'news'}),
  image: DS.attr('string'),
  date: DS.attr('string', { defaultValue: () => moment().toISOString()}),
  expires: DS.attr('string'),
  text: DS.attr('string', { defaultValue: () => ''}),
  tags: DS.attr('', { defaultValue: () => []}),
  updated: DS.attr('string'),
  status: DS.attr('string', { defaultValue: () => 'draft'}),

  churches: DS.belongsTo('churches')
});
