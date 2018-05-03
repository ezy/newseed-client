import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      audios: this.get('store').findAll('audio'),
      notices: this.get('store').findAll('notice'),
      ministries: this.get('store').findAll('ministry'),
      pages: this.get('store').findAll('page')
    });
  }
});
