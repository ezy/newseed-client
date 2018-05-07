import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('isSaving', false);
  },
  actions: {
    saveContent() {
      let model = this.get('model');
      this.set('isSaving', true);
      model.save()
        .then(() => {
          this.set('isSaving', false);
          console.log('saved',model);
        })
        .catch(() => {
          this.set('isSaving', false);
          console.log('something went wrong');
        });
    }
  }
});
