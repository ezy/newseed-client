import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import $ from 'jquery';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    $('[data-toggle="tooltip"]').tooltip();
  },

  contents: computed('model', function() {
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
    return contentArray.sort((a, b) => {
      return moment(a.get('date')).isBefore(moment(b.get('date'))) ? 1 : -1;
    });
  }),
});
