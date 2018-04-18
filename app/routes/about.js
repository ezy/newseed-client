import Route from '@ember/routing/route';
import SetChurchController from 'mustard/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  setupController(controller) {
    this.get('store').findAll('people').then(function(people) {
      controller.set('people', people);
    });
  }
});
