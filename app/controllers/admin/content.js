import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
  contents: computed('model', function() {
    let contentArray = A(),
        model = this.get('model');
    let munge = (...models) => {
      models.forEach(m => {
        m.forEach(item => {
          let name = m.modelName.capitalize();
          name === 'Audio' ? item.set('editCat', 'Message') : item.set('editCat', name);
          contentArray.pushObject(item);
        });
      })
    }
    munge(model.audios, model.notices)
    return contentArray;
  }),
});
