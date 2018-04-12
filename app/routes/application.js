import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {

  setupController(controller) {
    this.get('store').findRecord('church', 1).then(function(church) {
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
  // },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
