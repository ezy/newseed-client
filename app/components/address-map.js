import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  location: computed('church', function() {
    return [this.get('church.latitude'),this.get('church.longitude')];
  })
});
