'use strict';
var app = require('../../../app'),
    validator = require('./validator.js'),
    dbManager = require('../../database-module/db-manager');


app.route('/signup')
  .get(function(req, res) {
    if(req.gateway.pass == 'pass') {
      res.redirect('./dash-board');
    }else {
      res.redirect('/');
    }
  })

  .post(function(req, res) {
    var isValidSignupForm = validator.validateSignUpForm(req,res),
        username = req.body.username1,
        password = req.body.password1;

      if(!isValidSignupForm) {
        res.redirect('/');
      }else{
        dbManager.insertSignupData(username,password)
        .spread(function (result) {
          if(result.affectedRows == 1) {
            req.gateway.pass = 'pass';
            res.redirect('./dash-board');
          }else {
            res.redirect('/');
          }
        })
        .catch(function () {
          res.redirect('/');
        });
      }
  });

app.get('/signup/*', function(req,res) {
  res.redirect('/you-are-so-intelligent');
});
