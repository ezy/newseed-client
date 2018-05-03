import Mixin from '@ember/object/mixin';

export default Mixin.create({
  setupController(controller, model) {
    this._super(controller, model);
    this.store.findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
  }
});
