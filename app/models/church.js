import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  zip: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),

  users: DS.hasMany('user')
});
