import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('isSaving', false);
  },
  actions: {
    titleEdit() {
      this.set('editTitle', true);
    },
    saveCat(value) {
      this.set('model.category', value);
      this.send('saveContent');
    },
    saveDate(date) {
      this.set('model.date', moment(date[0]).toISOString());
      this.send('saveContent');
    },
    saveContent() {
      let model = this.get('model');
      this.set('isSaving', true);
      this.set('model.updated', moment().toISOString());
      if (this.get('editTitle')) {
        this.set('model.title', this.get('model.title'));
        this.set('editTitle', false);
      }
      model.save()
        .then(() => {
          this.set('isSaving', false);
          this.get('flashMessages').success('Content successfully saved')
        })
        .catch(() => {
          this.set('isSaving', false);
          this.get('flashMessages').danger('Something went wrong - content not saved')
        });
    }
  }
});
