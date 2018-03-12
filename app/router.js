import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('media');
  this.route('notices');
  this.route('about', function() {
    this.route('people');
    this.route('statement');
    this.route('story');
  });
  this.route('contact');
  this.route('ministries');
});

export default Router;
