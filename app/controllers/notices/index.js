import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({

  queryParams: ['tag'],
  tag: null,

  filteredNotice: filter('model', (notice) => {
    return notice.get('status') === 'published';
  }),

  sortedNotices: computed('tag', 'filteredNotice', function() {
    let tag = this.get('tag'),
        notices = this.get('filteredNotice');

    if (tag) {
      notices = notices.filter(notice => {
        let tagArr = notice.get('tags');
        if (Array.isArray(tagArr)) {
          return tagArr.includes(tag);
        }
      });
    }

    return notices.sortBy("date").reverse();
  }),
});
