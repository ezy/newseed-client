/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const generator = require('../generators');
  let audioRouter = express.Router();

  audioRouter.get('/', function(req, res) {
    res.send({
      'audio': generator.genAudio()
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
