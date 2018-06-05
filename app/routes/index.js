import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import SetChurchController from 'newseed/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  model() {
    return RSVP.hash({
      audios: this.get('store').findAll('audio'),
      notices: this.get('store').findAll('notice'),
      services: this.get('store').findAll('service')
    });
  },
});
