import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  session: service(),
  actions: {
    validateSession(email, password) {
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(() => {
        this.transitionToRoute('admin.content');
      }).catch(() => {
        this.get('flashMessages').danger('Something went wrong - not logged in');
      });
    },
    invalidateSession() {
      this.get('session').close()
      .then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
