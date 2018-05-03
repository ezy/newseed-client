import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    this.store.findAll('notice').then(function(notice) {
      controller.set('notices', notice);
    });
  }
});
