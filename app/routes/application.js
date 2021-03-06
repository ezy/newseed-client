import Route from '@ember/routing/route';
import EmberfireLogin from 'newseed/mixins/emberfire-login';
import { inject as service } from '@ember/service'

export default Route.extend(EmberfireLogin, {

  // Session service imported from EmberfireLogin
  router: service(),

  beforeModel: function() {
    return this.get('session')
      .fetch()
      .then(() => {
        if (this.get('router').currentURL === "/login") {
          this.transitionTo('index');
        }
      })
      .catch(() => {});
  },

  actions: {
    accessDenied: function() {
      this.transitionTo('login');
    }
  }
});
