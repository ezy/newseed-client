import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  filteredPages: filter('model', (page) => {
    return page.get('status') === 'published';
  }),
});
