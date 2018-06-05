import Route from '@ember/routing/route';
import SetChurchController from 'newseed/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  model() {
    return this.get('store').findAll('page');
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.get('store').findAll('people').then(function(people) {
      controller.set('people', people);
    });
  }
});
