import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'https://olive-8020d.firebaseio.com'
  namespace: 'api'
});
