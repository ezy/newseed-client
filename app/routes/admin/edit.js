import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord(params.model, params.id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.get('store').findAll('image').then(function(img) {
      controller.set('images', img);
    });
  }
});
