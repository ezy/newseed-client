/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const generator = require('../generators');
  let noticesRouter = express.Router();

  noticesRouter.get('/', function(req, res) {
    res.send({
      'notices': generator.genNotice()
    });
  });

  noticesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  noticesRouter.get('/:id', function(req, res) {
    res.send({
      'notices': {
        id: req.params.id
      }
    });
  });

  noticesRouter.put('/:id', function(req, res) {
    res.send({
      'notices': {
        id: req.params.id
      }
    });
  });

  noticesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/notices', require('body-parser').json());
  app.use('/api/notices', noticesRouter);
};
