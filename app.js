var express = require('express');
    app = module.exports = express(),
    loginRouter = require('./modules/router/login-module/index'),
		signupRouter = require('./modules/router/signup-module/index'),
		dashBoardRouter = require('./modules/router/dashboard-module/index'),
    path = require("path");


app.set('views',path.join(__dirname,'front-end'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'public')));

// Set port on which server listens, port configurable from command line
app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res) {
  if(req.gateway.pass == 'pass') {
    res.redirect('./dash-board');
  }else {
    res.render('index.html');
  }
});

app.get('/index', function(req,res) {
  if(req.gateway.pass == 'pass') {
    res.redirect('./dash-board');
  }else {
    res.render('index.html');
  }
});


app.route('/logout')
  .get(function(req, res) {
		req.gateway.reset();
		res.redirect('/');
  })

  .post(function(req, res) {
		req.gateway.reset();
	  res.redirect('/');
  }
);

app.get('*', function(req, res) {
  res.render('page-not-found.html');
});

app.get('/you-are-so-intelligent', function(req, res) {
  res.render('page-not-found.html');
});

var server = app.listen(app.get('port'), function() {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://localhost:%s', port);
});
