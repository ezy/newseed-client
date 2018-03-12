/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let aboutRouter = express.Router();

  aboutRouter.get('/', function(req, res) {
    res.send({
      'about': []
    });
  });

  aboutRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  aboutRouter.get('/:id', function(req, res) {
    res.send({
      'about': {
        id: req.params.id
      }
    });
  });

  aboutRouter.put('/:id', function(req, res) {
    res.send({
      'about': {
        id: req.params.id
      }
    });
  });

  aboutRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/about', require('body-parser').json());
  app.use('/api/about', aboutRouter);
};
