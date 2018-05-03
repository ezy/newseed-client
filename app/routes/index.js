import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this.get('store').findAll('audio').then(function(audio) {
      controller.set('audios', audio);
    });
    this.get('store').findAll('notice').then(function(notice) {
      controller.set('notices', notice);
    });
    this.get('store').findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
  }
});
