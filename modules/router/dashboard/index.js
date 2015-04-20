var app = require('../index');

app.post('/logout', function(req,res) {
	  req.gateway.reset();
    res.redirect('/');
});
