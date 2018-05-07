import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  firebaseApp: service(),
  init() {
    this._super(...arguments);
    this.set('email', null);
  },
  actions: {
    resetPassword(email) {
      this.get('firebaseApp').auth().sendPasswordResetEmail(email)
        .then(() => {
          this.get('flashMessages').success('The password reset email has been sent');
        })
        .catch(err => {
          this.get('flashMessages').danger(err.message);
        })
    }
  }
});
