/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let audioRouter = express.Router();

  audioRouter.get('/', function(req, res) {
    res.send({
      'audio': [{
        "id":1,
        "title":"Sermon 1",
        "tags": ["good","bad","ugly"]
      }, {
        "id":2,
        "title":"Sermon 2",
        "tags": ["good","bad","ugly"]
      },{
        "id":3,
        "title":"Sermon 3",
        "tags": ["good","bad","ugly"]
      }, {
        "id":4,
        "title":"Sermon 4",
        "tags": ["good","bad","ugly"]
      },{
        "id":5,
        "title":"Sermon 5",
        "tags": ["good","bad","ugly"]
      }, {
        "id":6,
        "title":"Sermon 6",
        "tags": ["good","bad","ugly"]
      }]
    });
  });

  audioRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  audioRouter.get('/:id', function(req, res) {
    res.send({
      'audio': {
        id: req.params.id
      }
    });
  });

  audioRouter.put('/:id', function(req, res) {
    res.send({
      'audio': {
        id: req.params.id
      }
    });
  });

  audioRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/audio', require('body-parser').json());
  app.use('/api/audio', audioRouter);
};
