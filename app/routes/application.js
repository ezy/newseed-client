import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

  session: service(),

  setupController(controller) {
    this.get('store').findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
  },

  // beforeModel() {
  //   if (!this.get('session').session.isAuthenticated) {
  //     this.transitionTo('login');
  //   }
  //   else {
  //     this.transitionTo('index');
  //   }
  // }
});
