import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('audios', { path: 'messages'});
  this.route('notices', function() {
    this.route('show', { path: ':id' });
  });
  this.route('pages', { path: 'about' });
  this.route('contact');
  this.route('ministries', function() {
    this.route('ministry', { path: ':id' });
  });
  this.route('login');
  // Authenticated routes
  this.authenticatedRoute('admin', function() {
    this.authenticatedRoute('settings');
    this.authenticatedRoute('edit');
    this.authenticatedRoute('content');
  });
});

export default Router;
