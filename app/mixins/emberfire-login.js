import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Mixin.create({
  session: service(),
  actions: {
    validateSession(email, password) {
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(() => {
        get(this, 'goToIndex')();
      }).catch(() => {
        console.warn('Failed login');
      });
    },
    invalidateSession() {
      this.get('session').close();
    }
  }
});
