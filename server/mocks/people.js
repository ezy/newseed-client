/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let peopleRouter = express.Router();

  peopleRouter.get('/', function(req, res) {
    res.send({
      'people': [{
        id: 1,
        name: 'Andrea Rounthwaite',
        copy: 'I\'m delighted to be part of The Olive Tree. What I hope to bring to this team is my heart for the broken-hearted in this community. I am a counsellor, Life Coach, Behavioural Analyst and Pastor. I have worked in the area of Recovery for over 30 years, specialising in relationships and addiction. I\'m presently directing the programme "Celebrate Recovery" and "Boundaries." Jesus said He heals and hears the broken hearted, and I pray He will continue to empower me to bring His desire to this community.'
      },{
        id: 2,
        name: 'Bruce Bell',
        copy: 'My background was as a lawyer before moving to work in the areas of law enforcement and defence. I have always had a passion for the Word of God and this led to further study in theology and biblical studies. As well as a degree in Law I also have a Post Graduate Diploma in Theology and a PhD in Theology. I was the teaching pastor at another church before becoming part of the team at The Olive Tree. I have an abiding interest in philosophy/worldviews, history, science and hermeneutics (interpreting scripture). Apart from shepherding God’s people on a daily basis and watching them grow and develop, I love nothing more than being able to preach and teach His Word.'
      }]
    });
  });

  peopleRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  peopleRouter.get('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.put('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/people', require('body-parser').json());
  app.use('/api/people', peopleRouter);
};
