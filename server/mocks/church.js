/* eslint-env node */
'use strict';

const faker = require('faker');

module.exports = function(app) {
  const express = require('express');
  let churchRouter = express.Router();

  churchRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  churchRouter.get('/:id', function(req, res) {
    res.send({
      'church': {
        id: req.params.id,
        name: 'The Olive Tree',
        address1: faker.address.streetAddress(),
        address2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        users: [1]
      }
    });
  });

  churchRouter.put('/:id', function(req, res) {
    res.send({
      'church': {
        id: req.params.id
      }
    });
  });

  churchRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/church', require('body-parser').json());
  app.use('/api/church', churchRouter);
};
