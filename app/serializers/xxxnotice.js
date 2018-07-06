import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize: function(model) {
    return {
      post_slug: model.get('slug')
    };
  }
});
