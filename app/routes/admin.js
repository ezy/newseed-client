import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    if (transition.targetName === "admin.index") {
      this.transitionTo('admin.content');
    }
  }
});
