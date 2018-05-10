import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      audios: this.get('store').findAll('audio'),
      notices: this.get('store').findAll('notice'),
      church: this.get('store').findRecord('church', 0),
      services: this.get('store').findAll('service')
    });
  }
});
