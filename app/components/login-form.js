import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    sendValidation(email, password) {
      get(this, 'validateSession')(email, password);
    }
  }
});
