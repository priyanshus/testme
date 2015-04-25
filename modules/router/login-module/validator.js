'use strict';
var validator = require("validator");

exports.validateLoginForm = function(req, res) {
	var username = req.body.username,
	    password = req.body.password;

  //console.log(username);
  var isUserNameValidLength = validator.isLength(username,6,20),
      isUserNameAlphaNumeric = validator.isAlphanumeric(username),
      isUserNameNull = validator.isNull(username),
      isPasswordNull = validator.isNull(password),
      isPasswordValidLength = validator.isLength(password,6,50);

  return (isUserNameValidLength && isUserNameAlphaNumeric && !isUserNameNull
          && !isPasswordNull && isPasswordValidLength);
};
