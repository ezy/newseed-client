import EmberObject from '@ember/object';
import EmberfireLoginMixin from 'mustard/mixins/emberfire-login';
import { module, test } from 'qunit';

module('Unit | Mixin | emberfire login');

// Replace this with your real tests.
test('it works', function(assert) {
  let EmberfireLoginObject = EmberObject.extend(EmberfireLoginMixin);
  let subject = EmberfireLoginObject.create();
  assert.ok(subject);
});
