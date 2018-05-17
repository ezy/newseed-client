import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  contactEmail: computed('church.email', function() {
    return this.get('church.email');
  }),
});
