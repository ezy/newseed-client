import Route from '@ember/routing/route';
import SetChurchController from 'mustard/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  model() {
    return this.store.findAll('page');
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.store.findAll('people').then(function(people) {
      controller.set('people', people);
    });
  }
});
