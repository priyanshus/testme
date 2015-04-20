var express = require("express"),
	  app = module.exports = express()
		loginRouter = require('./login-module/index'),
		dashBoardRouter = require('./dashboard/index');

app.set('views', './modules/front-end');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
		res.render('index.jade');
});

app.get('/*', function(req,res) {
    res.redirect('/');
});
