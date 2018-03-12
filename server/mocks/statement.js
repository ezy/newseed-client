/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let statementRouter = express.Router();

  statementRouter.get('/', function(req, res) {
    res.send({
      'statement': []
    });
  });

  statementRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  statementRouter.get('/:id', function(req, res) {
    res.send({
      'statement': {
        id: req.params.id
      }
    });
  });

  statementRouter.put('/:id', function(req, res) {
    res.send({
      'statement': {
        id: req.params.id
      }
    });
  });

  statementRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/statement', require('body-parser').json());
  app.use('/api/statement', statementRouter);
};
