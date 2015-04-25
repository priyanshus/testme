'use strict';
var express = require("express"),
app = module.exports = express(),
		loginRouter = require('./login-module/index'),
		signupRouter = require('./signup-module/index'),
		dashBoardRouter = require('./dashboard-module/index'),
		path = require("path");

app.set('views',path.join(__dirname, '../..', 'front-end'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../..', 'front-end')));

app.get('/', function(req, res) {
		res.render('index.html');
});

app.post('/logout', function(req,res) {
	  req.gateway.reset();
    res.redirect('/');
});
