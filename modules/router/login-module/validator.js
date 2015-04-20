exports.validateLoginForm = function(req, res) {
  	var username = req.body.username;
  	var password = req.body.password;
  	req.assert('username', 'Username is required').notEmpty();
  	req.assert('password', 'Password is required').notEmpty();
  	var errors = req.validationErrors();
  	return errors;
};
