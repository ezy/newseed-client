import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this.store.findAll('audio').then(function(audio) {
      controller.set('sermons', audio);
    });
  }
});
