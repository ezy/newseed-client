import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { slugMe } from 'newseed/helpers/slug-me';
// import $ from 'jquery';
// import config from 'newseed/config/environment';

export default Controller.extend({
  firebaseApp: service(),
  router: service(),

  init() {
    this._super(...arguments);
    this.set('isSaving', false);
    this.set('storageRef', '');
    this.set('file', '');
    this.set('uploadProgress', null);
  },
  actions: {
    titleEdit() {
      this.set('editTitle', true);
    },
    saveFreq(value) {
      this.set('model.frequency', value);
      this.send('saveContent');
    },
    saveSlide(value) {
      this.set('model.slide', value);
      this.send('saveContent');
    },
    saveCat(value) {
      this.set('model.category', value);
      this.send('saveContent');
    },
    saveDate(date) {
      this.set('model.date', new Date(date));
      this.send('saveContent');
    },
    saveExpires(date) {
      this.set('model.expires', new Date(date));
      this.send('saveContent');
    },
    saveStatus(value) {
      this.set('model.status', value);
      this.send('saveContent');
    },
    saveSpeaker(value) {
      this.set('model.speaker', value);
      this.send('saveContent');
    },
    saveContent() {
      let model = this.get('model');
      this.set('isSaving', true);
      this.set('model.updated',  new Date());
      if (this.get('editTitle')) {
        let title = this.get('model.title');
        this.set('model.title', title);
        this.set('model.slug', `${Date.now()}-${slugMe(title)}`);
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
    selectImage(dropdown, image) {
      dropdown.actions.close();
      this.set('model.image', image);
      this.send('saveContent');
    },
    didSelectAudio(files, resetInput) {
      // let reader = new FileReader();
      // reader.onloadend = run.bind(this, function() {
      //   var dataURL = reader.result;
      //   var output = document.getElementById('output');
      //   output.src = dataURL;
      //   this.set('file', files[0]);
      // });
      // reader.readAsDataURL(files[0])
      // let date = new Date().toGMTString();
      // this.set('file', files[0]);
      // let path = `media/${this.get('file.name')}`;
      // let formData = new FormData();
      // formData.append('file', files[0]);
      // $.ajax({
      //     'type': 'PUT',
      //     'url': `https://s3-${config.aws.region}.amazonaws.com/${config.aws.bucket}/${path}`,
      //     'datatype': 'xml',
      //     'processData': false,
      //     'contentType': false,
      //     'crossDomain': true,
      //     'Authorization': '962859d727c7fcb476d486dd3b35d6b3675fd9763db1d6e71b12bad5799fa6f1',
      //     'Date': date,
      //     'x-amz-date': date,
      //     'data': formData
      // }).done(data => {
      //     console.log('SUCCESS', data);
      // }).fail(err => {
      //     console.log('FAIL', err);
      // });
      // () => {
      //   this.get('flashMessages').danger('Something went wrong - audio not uploaded')
      // },
      // () => {
      //   this.set('uploadProgress', null);
      //   this.set('model.category', 'sermon');
      //   uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      //     this.set('model.link', downloadURL);
      //     this.send('saveContent');
      //     resetInput();
      //   });
      // });
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
