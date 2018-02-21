import Controller from '@ember/controller';
import { get } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  location: [-41.230087, 174.894357],
  slides: filter('notices', (notice) => {
    let tags = get(notice, 'tags');
    return tags.includes('slide');
  })
});
