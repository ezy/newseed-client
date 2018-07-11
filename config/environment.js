'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'newseed',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // This needs to be removed for EC2 when ready https://github.com/firebase/emberfire
    firebase: {
      apiKey: "AIzaSyBvX9N2bUvy1Aflf_kjF4AngGGoekeyKqw",
      authDomain: "olive-dev-c9207.firebaseapp.com",
      databaseURL: "https://olive-dev-c9207.firebaseio.com",
      projectId: "olive-dev-c9207",
      storageBucket: "olive-dev-c9207.appspot.com",
      messagingSenderId: "249986444927"
    },
    torii: {
      sessionServiceName: 'session'
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['production'],
        config: {
          id: 'UA-27428401-1',
          // // Use `analytics_debug.js` in development
          // debug: environment === 'development',
          // // Use verbose tracing of GA events
          // trace: environment === 'development',
          // // Ensure development env hits aren't sent to GA
          // sendHitTask: environment !== 'development',
          // // Specify Google Analytics plugins
          // require: ['ecommerce']
        }
      }
    ]
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'admin.index',
    routeIfAlreadyAuthenticated: 'admin.index'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyCF-dgU03LP5AlFzAS4T76MhmWd7AMFAIY",
      authDomain: "olive-8020d.firebaseapp.com",
      databaseURL: "https://olive-8020d.firebaseio.com",
      projectId: "olive-8020d",
      storageBucket: "olive-8020d.appspot.com",
      messagingSenderId: "7867707961"
    }
  }

  return ENV;
};
