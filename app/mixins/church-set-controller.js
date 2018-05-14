import Mixin from '@ember/object/mixin';

export default Mixin.create({
  setupController(controller, model) {
    this._super(controller, model);
    this.get('store').findRecord('church', 0).then(function(church) {
      controller.set('church', church);
    });
    this.get('store').findAll('page').then(function(pagesResult) {
      let res = pagesResult.filter(page => {
        return page.get('status') === 'published';
      });
      controller.set('pages', res);
    });
  }
});
