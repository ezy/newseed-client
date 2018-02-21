import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { set } from '@ember/object'

export default Component.extend({
  init() {
    this._super(...arguments);
    let owner = getOwner(this).lookup('router:main').get('currentRouteName');
    if (owner === 'index') {
      set(this, 'isIndex', true);
    }
  },

  isIndex: false
});
