import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import moment from 'moment';
import { pluralize } from 'ember-inflector';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.showingItem = {modelName:'all',label:'All content'};
  },

  // Set a list of model items to filter against
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
    /**
     * Add ancilliary values for filtering content by model name
     * @param  {object} models the model object being passed in
     * @param  {object} obj    each ember object in the model
     */
    let munge = (...models) => {
      models.forEach(obj => {
        obj.forEach(item => {
          let name = obj.modelName;
          name === 'Audio' ? item.set('editCat', 'Message') : item.set('editCat', name.capitalize());
          item.set('modelName', name);
          contentArray.pushObject(item);
        });
      })
    }
    munge(model.audios, model.notices, model.ministries, model.pages)
    return contentArray
      // filter the objects by select value
      .filter(content => {
        let showing = this.get('showingItem');
        if (showing.modelName === 'all') {
          return true;
        } else if (showing.modelName === content.modelName) {
          return true;
        }
      })
      // sort the objects by date descending
      .sort((a, b) => {
        return moment(a.get('updated')).isBefore(moment(b.get('updated'))) ? 1 : -1;
      });
  }),

  actions: {
    filterModels(value) {
      let item = this.get('modelItems').filter(content => {
        return content.modelName === value;
      });
      this.set('showingItem', item[0]);
    },
    createContent(modelName) {
      let record = this.store.createRecord(modelName, {
        title: `New ${modelName.capitalize()} Content`
      });
      record.save().then(rec => {
        this.store.query(modelName, { id: rec.get('id') })
          .then(res => {
            this.set(`model.${pluralize(modelName)}`, res);
            this.transitionToRoute('admin.edit', modelName, rec.get('id'));
          });
      });
    }
  }
});
