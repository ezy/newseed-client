import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.showingItem = {modelName:'all',label:'All content'};
  },

  modelItems: A([
    {modelName:'all',label:'All content'},
    {modelName:'audio',label:'Audio'},
    {modelName:'page',label:'Pages'},
    {modelName:'notice',label:'Notices'},
    {modelName:'ministry',label:'Ministries'}
  ]),
  itemHeader: computed('showingItem', function() {
    return this.get('showingItem').label;
  }),

  contents: computed('model', 'showingItem', function() {
    let contentArray = A(),
        model = this.get('model');
    let munge = (...models) => {
      models.forEach(m => {
        m.forEach(item => {
          let name = m.modelName;
          name === 'Audio' ? item.set('editCat', 'Message') : item.set('editCat', name.capitalize());
          item.set('modelName', name);
          contentArray.pushObject(item);
        });
      })
    }
    munge(model.audios, model.notices, model.ministries, model.pages)
    return contentArray.filter(content => {
      let showing = this.get('showingItem');
      if (showing.modelName === 'all') {
        return true;
      } else if (showing.modelName === content.modelName) {
        return true;
      }
    })
    .sort((a, b) => {
      return moment(a.get('date')).isBefore(moment(b.get('date'))) ? 1 : -1;
    });
  }),

  actions: {
    filterModels(value) {
      let item = this.get('modelItems').filter(content => {
        return content.modelName === value;
      });
      this.set('showingItem', item[0]);
    }
  }
});
