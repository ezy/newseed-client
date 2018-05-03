import Route from '@ember/routing/route';
import SetChurchController from 'mustard/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  model(params) {
    return this.get('store').findRecord('notice', params.id);
  }
});
