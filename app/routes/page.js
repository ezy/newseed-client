import Route from '@ember/routing/route';
import SetChurchController from 'mustard/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  // TODO: Convert URL to slug when expressserver set
  model(params) {
    return this.get('store').findRecord('page', params.id);
  }
  // // allows us to use slug as the url
  // serialize(model) {
  //   return { slug: model.slug };
  // }
});
