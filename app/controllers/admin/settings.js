import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveSettings() {
      this.get('model').save()
        .then(() => {
          this.get('flashMessages').success('Settings succesfully saved');
        })
        .catch(() => {
          this.get('flashMessages').danger('Something went wrong - settings not saved');
        })
    }
  }
});
