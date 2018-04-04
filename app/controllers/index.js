import Controller from '@ember/controller';
import { get } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  slides: filter('notices', (notice) => {
    let tags = get(notice, 'tags');
    return tags.includes('slide');
  }),
  newsFeed: filter('notices', (notice) => {
    let tags = get(notice, 'tags');
    return !tags.includes('slide');
  })
});
