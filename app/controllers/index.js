import Controller from '@ember/controller';
import { get } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  filteredNotice: filter('notices', (notice) => {
    return notice.get('status') === 'published';
  }),
  filteredAudio: filter('audios', (audio) => {
    return audio.get('status') === 'published';
  }),
  slides: filter('filteredNotice', (notice) => {
    let tags = get(notice, 'tags');
    return tags.includes('slide');
  }),
  newsFeed: filter('filteredNotice', (notice) => {
    let tags = get(notice, 'tags');
    return !tags.includes('slide');
  })
});
