import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  router: service(),

  actions: {
    authenticate: function authenticate(provider) {
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth',{
        provider: provider,
        email: this.get('email'),
        password: this.get('password')
      }).then(
        this.get('router').transitionTo('index')
      );
    }
  }
});
