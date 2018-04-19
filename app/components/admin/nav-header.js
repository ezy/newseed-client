import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    logout() {
      get(this, 'invalidateSession')();
    }
  }
});
