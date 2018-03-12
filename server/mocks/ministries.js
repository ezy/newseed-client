/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const generator = require('../generators');
  let ministriesRouter = express.Router();

  ministriesRouter.get('/', function(req, res) {
    res.send({
      'ministries': generator.genMinistry()
    });
  });

  ministriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ministriesRouter.get('/:id', function(req, res) {
    res.send({
      'ministries': {
        id: req.params.id
      }
    });
  });

  ministriesRouter.put('/:id', function(req, res) {
    res.send({
      'ministries': {
        id: req.params.id
      }
    });
  });

  ministriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/ministries', require('body-parser').json());
  app.use('/api/ministries', ministriesRouter);
};
