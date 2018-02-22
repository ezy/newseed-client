import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('media');
  this.route('notices');
  this.route('about');
  this.route('contact');
  this.route('ministries');
});

export default Router;
