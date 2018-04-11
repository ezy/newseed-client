import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  setupController(controller) {
    this.get('store').findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
  }
});
