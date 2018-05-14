import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  router: service(),

  actions: {
    saveService(speaker, topic, date) {
      let service = this.get('service');
      this.get('store').findRecord('service', service.id)
        .then(record => {
          record.set('service', service);
          record.set('topic', topic);
          record.set('date', date);
          record.save();
          this.get('flashMessages').success('Service saved to schedule');
        })
        .catch(() => {
          this.get('flashMessages').danger('Something went wrong - service not saved');
        });
    },
    saveDate(date) {
      this.set('service.date', new Date(date[0]));
    },
    deleteService() {
      let service = this.get('service');
      this.get('store').findRecord('service', service.id)
        .then(record => {
          record.destroyRecord().then(() => {
            this.get('flashMessages').success('Record successfully deleted');
          })
        })
        .catch(() => {
          this.get('flashMessages').danger('Something went wrong - service not deleted');
        });
    }
  }
});
