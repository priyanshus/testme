var express = require('express');
    app = express(),
    router = require('./modules/router/index');


// Set port on which server listens, port configurable from command line
app.set('port', process.env.PORT || 3000);

// Set router to redirect calls
app.use(router);

var server = app.listen(app.get('port'), function() {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://localhost:%s', port);
});
