import Controller from '@ember/controller';

export default Controller.extend({
  value: "<h2>Lorem ipsum dolor sit amet,&nbsp;</h2><p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut&nbsp;</p><h1>aliquip ex ea commodo&nbsp;</h1><p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu&nbsp;</p><p>fugiat nulla pariatur. <a href=\"http://google.com\">Excepteur</a> sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  mediumEditorOptions: {
    "toolbar": {
      "buttons": ['h2', 'h3', 'bold', 'italic', 'underline', 'anchor', 'unorderedlist', 'orderedlist'],
    },
    "checkLinkFormat": true,
    "forcePlainText": true
  },

  actions: {
    valueUpdated() {
      console.log('updated');
    }
  }
});
