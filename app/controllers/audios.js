import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({

  queryParams: ['speaker'],
  speaker: null,

  filteredAudio: filter('model', (audio) => {
    return audio.get('status') === 'published';
  }),

  speakerAudio: computed('speaker', 'filteredAudio', function() {
    let speaker = this.get('speaker'),
        audios = this.get('filteredAudio');

    if (speaker) {
      audios = audios.filter(audio => {
        return audio.get('speaker').includes(speaker);
      });
    }

    return audios.sortBy("date").reverse();
  }),
  actions: {
    resetQuery() {
      this.set('speaker', null);
    }
  }
});
