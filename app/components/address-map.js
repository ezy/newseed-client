import Component from '@ember/component';
import { computed } from '@ember/object';
import { and } from '@ember/object/computed';

export default Component.extend({
  hasLocation: and('church.latitude','church.longitude'),
  location: computed('church', function() {
    return [this.get('church.latitude'),this.get('church.longitude')];
  })
});
