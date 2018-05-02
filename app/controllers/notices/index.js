import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  queryParams: ['tag'],
  tag: null,

  sortedNotices: computed('tag', 'model', function() {
    let tag = this.get('tag'),
        notices = this.get('model');

        console.log(notices);

    if (tag) {
      notices = notices.filter(notice => {
        return notice.get('tags').includes(tag);
      });
    }

    return notices.sortBy("date").reverse();
  }),
});
