import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this.get('store').findAll('audio').then(function(audio) {
      controller.set('sermons', audio);
    });
    this.get('store').findAll('notice').then(function(notice) {
      controller.set('notices', notice);
    });
  }
});
