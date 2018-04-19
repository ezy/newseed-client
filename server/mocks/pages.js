/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let pagesRouter = express.Router();

  pagesRouter.get('/', function(req, res) {
    res.send({
      'pages': []
    });
  });

  pagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  pagesRouter.get('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.put('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/pages', require('body-parser').json());
  app.use('/api/pages', pagesRouter);
};
