/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const generator = require('../generators');
  let audiosRouter = express.Router();

  audiosRouter.get('/', function(req, res) {
    res.send({
      'audios': generator.genAudio()
    });
  });

  audiosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  audiosRouter.get('/:id', function(req, res) {
    res.send({
      'audios': {
        id: req.params.id
      }
    });
  });

  audiosRouter.put('/:id', function(req, res) {
    res.send({
      'audios': {
        id: req.params.id
      }
    });
  });

  audiosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/audios', require('body-parser').json());
  app.use('/api/audios', audiosRouter);
};
