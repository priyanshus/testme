'use strict';
var app = require('../index'),
    validator = require('./validator.js');

app.route('/signup')
  .get(function(req, res) {
       res.redirect('/');
  })

  .post(function(req, res) {
      isValidLoginForm = validator.validateSignUpForm(req,res);

       if(!isValidLoginForm) {
           res.send('Not a valid sign up form, add better validator')
       }else{
           res.send('Valid sign up form but redirect it to dash-board');
      }
  });
