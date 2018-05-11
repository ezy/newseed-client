import Controller from '@ember/controller';
import moment from 'moment';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Controller.extend({
  firebaseApp: service(),
  router: service(),

  init() {
    this._super(...arguments);
    this.set('isSaving', false);
    this.set('storageRef', '');
    this.set('file', '');
    this.set('uploadProgress', null)
  },
  actions: {
    titleEdit() {
      this.set('editTitle', true);
    },
    saveCat(value) {
      this.set('model.category', value);
      this.send('saveContent');
    },
    saveDate(date) {
      this.set('model.date', moment(date[0]).add(23, 'h').toJSON());
      this.send('saveContent');
    },
    saveExpires(date) {
      this.set('model.expires', moment(date[0]).add(23, 'h').toJSON());
      this.send('saveContent');
    },
    saveStatus(value) {
      this.set('model.status', value);
      this.send('saveContent');
    },
    saveContent() {
      let model = this.get('model');
      this.set('isSaving', true);
      this.set('model.updated', moment().toISOString());
      if (this.get('editTitle')) {
        this.set('model.title', this.get('model.title'));
        this.set('editTitle', false);
      }
      model.save()
        .then(() => {
          this.set('isSaving', false);
          this.get('flashMessages').success('Content successfully saved')
        })
        .catch(() => {
          this.set('isSaving', false);
          this.get('flashMessages').danger('Something went wrong - content not saved')
        });
    },
    deleteContent() {
      let model = this.get('model');
      model.destroyRecord()
        .then(() => {
          this.get('router').transitionTo('admin.content');
        })
        .catch(() => {
          this.get('flashMessages').danger('Something went wrong - content not deleted');
        });
    },
    didSelectAudio(files, resetInput) {
      // let reader = new FileReader();
      // reader.onloadend = run.bind(this, function() {
      //   var dataURL = reader.result;
      //   var output = document.getElementById('output');
      //   output.src = dataURL;
      //   this.set('file', files[0]);
      // });
      // reader.readAsDataURL(files[0]);
      this.set('file', files[0]);
      let storageRef = this.get('firebaseApp').storage().ref();
      let path = `audio/${this.get('file.name')}`;
      let uploadTask = storageRef.child(path).put(this.get('file'));
      uploadTask.on('state_changed', snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.set('uploadProgress', `width: ${progress}%`);
      },
      () => {
        this.get('flashMessages').danger('Something went wrong - audio not uploaded')
      },
      () => {
        this.set('uploadProgress', null);
        this.set('model.category', 'sermon');
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.set('model.link', downloadURL);
          this.send('saveContent');
          resetInput();
        });
      });
    },
    addTag(tag) {
      if (!this.get('model.tags')) {
        this.set('model.tags', A());
      }
      this.get('model.tags').pushObject(tag);
      this.send('saveContent');
    },
    removeTagAtIndex(index) {
      this.get('model.tags').removeAt(index);
      this.send('saveContent');
    }
  }
});
