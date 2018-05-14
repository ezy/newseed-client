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
  this.route('page', { path: ':id' });
  this.route('contact');
  this.route('ministries', function() {
    this.route('ministry', { path: ':id' });
  });
  this.route('login');
  this.route('forgot-password');
  // Authenticated routes
  this.authenticatedRoute('admin', function() {
    this.authenticatedRoute('settings');
    this.authenticatedRoute('edit', {path: 'edit/:model/:id'});
    this.authenticatedRoute('content');
    this.authenticatedRoute('people');
    this.authenticatedRoute('schedule');
  });
});

export default Router;
