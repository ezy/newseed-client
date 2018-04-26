import Controller from '@ember/controller';
import config from 'mustard/config/environment';

export default Controller.extend({
  contactEmail: config.contactEmail,
});
