import Route from '@ember/routing/route';
import EmberfireLogin from 'mustard/mixins/emberfire-login';

export default Route.extend(EmberfireLogin, {

  // Session service imported from EmberfireLogin

  beforeModel: function() {
    return this.get('session')
      .fetch()
      .then(() => {
        this.transitionTo('index')
      })
      .catch(() => {});
  }
});
