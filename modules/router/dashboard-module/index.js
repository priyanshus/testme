'use strict';
var app = require('../../../app');

app.get('/dash-board', function(req,res) {
  if(req.gateway.pass == 'pass') {
    res.render('./dash-board/index.html');
  }else {
    res.redirect('/');
  }
});

app.get('/dash-board/*', function(req,res) {
  res.redirect('/you-are-so-intelligent');
});
