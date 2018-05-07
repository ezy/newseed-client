import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  filteredAudio: filter('model', (audio) => {
    return audio.get('status') === 'published';
  }),
});
