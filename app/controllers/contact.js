import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sendContact() {
      // Getting input values.
      // TODO: add validation before trying to save the values.
      const submittedForm = {
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone'),
        message: this.get('message'),
        timestamp: new Date().getTime()
      }

      // Save the submitted form to our database
      const newContact = this.store.createRecord('contact', submittedForm);
      newContact.save().then(function(res) {
        // display success or fail message to the user after saving the values to DB
      });
    }
  }
});
