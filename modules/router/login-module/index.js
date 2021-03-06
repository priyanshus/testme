'use strict';
var app = require('../../../app'),
    bodyparser = require("body-parser"),
	  sessions = require("client-sessions"),
	  loginFormValidator = require('./validator.js'),
    dbManager = require('../../database-module/db-manager');

app.use(bodyparser.json());
app.use(sessions ({
  cookieName: 'gateway', // cookie name dictates the key name added to the request object
  secret: 'xUjTWXaV1223Ujlafooul0038047jsfdkh', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  cookie: {
      path: '/', // cookie will only be sent to requests under '/login'
      maxAge: 60000, // duration of the cookie in milliseconds, defaults to duration above
      ephemeral: false, // when true, cookie expires when the browser closes
      httpOnly: true, // when true, cookie is not accessible from javascript
      secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
      }
  }));

app.use(bodyparser.urlencoded({
  extended: true
}));

app.route('/login')
  .get(function(req, res) {
       if(req.gateway.pass == 'pass') {
         res.redirect('./dash-board');
       }else {
         res.redirect('/');
       }
  })


  .post(function(req, res) {
     var username = req.body.username,
         password = req.body.password,
         isValidLoginForm = loginFormValidator.validateLoginForm(req,res);

     if(!isValidLoginForm) {
         res.redirect('/');
     }else {
        dbManager.checkLoginCredential(username,password)
        .spread(function (result) {
          if(result[0].password == password) {
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

app.get('/login/*', function (req,res) {
  if(req.gateway.pass == 'pass') {
    res.redirect('./dash-board');
  }else {
    res.redirect('/');
  }
})
