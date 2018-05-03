import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this.store.findAll('audio').then(function(audio) {
      controller.set('audios', audio);
    });
    this.store.findAll('notice').then(function(notice) {
      controller.set('notices', notice);
    });
    this.store.findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
  }
});
