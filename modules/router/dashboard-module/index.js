'use strict';
var app = require('../../../app');

app.get('/dash-board', function(req,res) {
    res.render('./dash-board/index.html');
});

app.get('/dash-board/*', function(req,res) {
  res.redirect('/you-are-so-intelligent');
});
