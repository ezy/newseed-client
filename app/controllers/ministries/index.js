import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  filteredMinistry: filter('model', (min) => {
    return min.get('status') === 'published';
  }),
});
