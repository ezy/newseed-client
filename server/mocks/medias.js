/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const generator = require('../generators');
  let mediasRouter = express.Router();

  mediasRouter.get('/', function(req, res) {
    res.send({
      'medias': generator.genMedia()
    });
  });

  mediasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mediasRouter.get('/:id', function(req, res) {
    res.send({
      'medias': {
        id: req.params.id
      }
    });
  });

  mediasRouter.put('/:id', function(req, res) {
    res.send({
      'medias': {
        id: req.params.id
      }
    });
  });

  mediasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/medias', require('body-parser').json());
  app.use('/api/medias', mediasRouter);
};
